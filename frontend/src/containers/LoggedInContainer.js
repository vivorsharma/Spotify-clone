import { Icon } from '@iconify/react';
import spotify_logo from '../assets/images/spotify_logo_white.svg'
import IconText from '../components/shared/IconText';
import TextwithHover from '../components/shared/TextHover';
import { Children, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Howl, Howler } from 'howler';
import songContext from '../contexts/SongContext';
import CreatePlaylist from '../modals/CreatePlayListModal';
import CreatePlaylistModal from '../modals/CreatePlayListModal';
import AddToPlayListModal from '../modals/AddToPlayListModal';
import { unathenticatedPOSTrequest } from "../utils/serverHelper"

const LoggedInContainer = ({ children, currentActiveScreen }) => {

    const [createPlaylistModalOpen, setcreatePlaylistModalOpen] = useState(false)
    const [addtoPlaylistModalOpen, setAddToPlaylistModalOpen] = useState(false)

    const { currentSong, setCurrentSong, soundPlayed, SetsoundPlayed, isPaused, setIsPaused, } = useContext(songContext);

    const firstUpdate = useRef(true);

    useLayoutEffect(() => {

        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }

        if (!currentSong) {
            return;
        }
        changeSong(currentSong.track)
    }, [currentSong && currentSong.track]);

    const addSongtoPlaylist = async (playlistId) => {
        const songId = currentSong._id

        const payload = { playlistId, songId }
        console.log("URL:", "/api/playlist/addSong");
        console.log("Payload:", payload);
        const response = await unathenticatedPOSTrequest("/api/playlist/addSong", payload);
        console.log(response)
        if (response._id) {
            setAddToPlaylistModalOpen(false)
        }
    }

    const playSound = () => {
        if (!soundPlayed) {
            return;
        }
        soundPlayed.play();
    }

    const changeSong = (songSrc) => {
        if (soundPlayed) {
            soundPlayed.stop();
        }
        let sound = new Howl({
            src: [songSrc],
            html5: true,
        });
        SetsoundPlayed(sound);
        sound.play();
        setIsPaused(false);
    }

    const pauseSound = () => {
        soundPlayed.pause();
    }

    const togglePlayPause = () => {
        if (isPaused) {
            playSound();
            setIsPaused(false);
        } else {
            pauseSound();
            setIsPaused(true);
        }
    }


    return (
        <div className="w-full h-full bg-app-black">
            {createPlaylistModalOpen && (
                <CreatePlaylistModal
                    closeModal={() => {
                        setcreatePlaylistModalOpen(false)
                    }}
                />
            )}
            {addtoPlaylistModalOpen && (
                <AddToPlayListModal
                    closeModal={() => {
                        setAddToPlaylistModalOpen(false)
                    }}
                    addSongtoPlaylist={addSongtoPlaylist}
                />
            )}
            <div className={`${currentSong ? "h-9/10" : "h-full"} w-full flex`}>

                {/* this is first left section div */}
                <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
                    <div>

                        <div className="logoDiv p-5">
                            <img src={spotify_logo} alt='spotify logo' width="125" />
                        </div>

                        <div className='py-5'>
                            <IconText
                                iconName={"material-symbols:home"} displayText={"Home"} targetLink={"/loggedin"}
                                active={currentActiveScreen === "/loggedin"}
                            />
                            <IconText
                                iconName={"material-symbols:search"} displayText={"Search"}
                                active={currentActiveScreen === "/search"} targetLink={"/search"}
                            />
                            <IconText
                                iconName={"icomoon-free:books"} displayText={"Library"}
                                active={currentActiveScreen === "/library"} targetLink={"/library"}
                            />
                            <IconText
                                iconName={"mdi:music-box-multiple"} displayText={"My Music"} targetLink={"/mymusic"}
                                active={currentActiveScreen === "/mymusic"}
                            />

                        </div>
                        <div className='pt-5'>
                            <IconText
                                iconName={"icon-park-solid:add"}
                                displayText={"Create Playlist"}
                                onclick={() => {
                                    setcreatePlaylistModalOpen(true);
                                }}
                            />
                            <IconText
                                iconName={"mdi:cards-heart"}
                                displayText={"Liked Songs"}
                            />
                        </div>
                    </div>
                    <div className='px-5'>
                        <div className='border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer'>
                            <Icon icon="carbon:earth-europe-africa" />
                            <div className='ml-2 text-sm font-semibold'>English</div>
                        </div>
                    </div>

                </div>

                {/* this is second ryt section div */}
                <div className="h-full w-4/5 bg-app-black overflow-auto">
                    <div className='navbar w-full h-1/10 bg-black bg-opacity-30 flex justify-end items-center'>
                        <div className='w-1/2  flex h-full'>
                            <div className='w-2/3 flex justify-around items-center'>
                                <TextwithHover displayText={"Premium"} />
                                <TextwithHover displayText={"Support"} />
                                <TextwithHover displayText={"Download"} />
                                <div className='h-1/2 border-r border-white'></div>
                            </div>
                            <div className='w-1/3 flex justify-around items-center h-full'>
                                <TextwithHover displayText={"Upload Song"} />
                                <div className='bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer'>
                                    VS
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='content p-8 pt-0 overflow-auto'>
                        {children}
                    </div>
                </div>
            </div>
            {/* this div is the current playing song */}
            {currentSong && (
                <div className='w-full h-1/10 bg-black bg-opacity-30 text-white flex items-center px-4'>
                    <div className='w-1/3 flex items-center'>

                        <img
                            src={currentSong.thumbnail}
                            alt='currentSongThumnbnail'
                            className='h-14 w-14 rounded'
                        >
                        </img>
                        <div className='pl-4'>
                            <div className='text-sm hover:underline cursor-pointer'>{currentSong.name}</div>
                            <div className='text-xs text-gray-500 hover:underline cursor-pointer'>{currentSong.artist.firstName + " " + currentSong.artist.lastName}</div>
                        </div>
                    </div>
                    <div className='w-1/2 flex justify-center h-full flex-col items-center'>
                        <div className='flex w-1/3 justify-between items-center'>
                            {/* controls for song playing */}
                            <Icon icon="ph:shuffle-fill"
                                fontSize={30}
                                className='cursor-pointer text-gray-500 hover:text-white' />

                            <Icon icon="ic:outline-skip-previous"
                                fontSize={30}
                                className='cursor-pointer text-gray-500 hover:text-white' />

                            <Icon icon={
                                isPaused
                                    ? "ic:baseline-play-circle"
                                    : "ic:baseline-pause-circle"
                            }
                                fontSize={50}
                                className='cursor-pointer text-gray-500 hover:text-white'
                                onClick={togglePlayPause}
                            />

                            <Icon icon="ic:outline-skip-next"
                                fontSize={30}
                                className='cursor-pointer text-gray-500 hover:text-white' />

                            <Icon icon="ic:twotone-repeat"
                                fontSize={30}
                                className='cursor-pointer text-gray-500 hover:text-white' />

                        </div>
                        {/* <diV></diV>     */}
                    </div>
                    <div className='w-1/4 flex justify-end pr-4 space-x-4 items-center'>
                        <Icon
                            icon="ic:round-playlist-add"
                            fontSize={30}
                            className='cursor-pointer text-gray-500 hover:text-white'
                            onClick={() => {
                                setAddToPlaylistModalOpen(true);
                            }}
                        />
                        <Icon
                            icon="ph:heart-bold"
                            fontSize={25}
                            className='cursor-pointer text-gray-500 hover:text-white'
                        />
                    </div>
                </div>
            )}
        </div>
    )
}


export default LoggedInContainer;