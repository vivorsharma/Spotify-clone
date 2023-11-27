import { Icon } from '@iconify/react';
import spotify_logo from '../assets/images/spotify_logo_white.svg'
import IconText from '../components/shared/IconText';
import TextwithHover from '../components/shared/TextHover';
import TextInputs from '../components/shared/TextInputs';
import CloudinaryUpload from '../components/shared/CloudinaryUpload';
import { useState } from 'react';
import { unathenticatedPOSTrequest } from '../utils/serverHelper';
import { NotificationContainer, NotificationManager } from "react-notifications";

const UploadSong = () => {

    const [name, SetName] = useState("");
    const [thumbnail, SetThumbnail] = useState("");
    const [playlistUrl, SetPlaylistUrl] = useState("");
    const [uploadedSongFileName, SetUploadedSongFileName] = useState("")

    // Retrieve the user ID from localStorage
    const userId = localStorage.getItem('userId');

    const submitSong = async () => {
        const data = { name, thumbnail, track: playlistUrl, artist: userId }

        const response = await unathenticatedPOSTrequest("/api/song/create_song",
            data)

        if (response && !response.err) {
            console.log("songcreateed")
            NotificationManager.success("Login successful", "Success", 2000);
        } else {
            NotificationManager.error("Failed to login. Please check your credentials.", "Error", 2000);
        }
    }

    return (
        <div className="w-full h-full flex">
            {/* this is first left section div */}
            <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
                <div>

                    <div className="logoDiv p-5">
                        <img src={spotify_logo} alt='spotify logo' width="125" />
                    </div>

                    <div className='py-5'>
                        <IconText
                            iconName={"material-symbols:home"} displayText={"Home"} active
                        />
                        <IconText
                            iconName={"material-symbols:search"} displayText={"Search"}
                        />
                        <IconText
                            iconName={"icomoon-free:books"} displayText={"Library"}
                        />

                    </div>
                    <div className='pt-5'>
                        <IconText
                            iconName={"icon-park-solid:add"}
                            displayText={"Create Playlist"}
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
                        <div className='w-3/5 flex justify-around items-center'>
                            <TextwithHover displayText={"Premium"} />
                            <TextwithHover displayText={"Support"} />
                            <TextwithHover displayText={"Download"} />
                            <div className='h-1/2 border-r border-white'></div>
                        </div>
                        <div className='w-2/5 flex justify-around items-center h-full'>
                            <TextwithHover displayText={"Sign up"} />
                            <div className='bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer'>
                                Log in
                            </div>
                        </div>

                    </div>
                </div>
                <div className='content p-8 pt-0 overflow-auto'>
                    <div className='text-2xl font-semibold mb-5 text-white mt-8'>
                        Upload Your Music
                    </div>
                    <div className='w-2/3 flex space-x-3'>
                        <div className="w-1/2">
                            <TextInputs
                                label="Name"
                                labelclassName={"text-white"}
                                placeholder={"Name"}
                                value={name}
                                setValue={SetName}
                            />
                        </div>
                        <div className="w-1/2">
                            <TextInputs
                                label="Thumbnail"
                                labelclassName={"text-white"}
                                placeholder={"Thumnbnail"}
                                value={thumbnail}
                                setValue={SetThumbnail}
                            />
                        </div>
                    </div>
                    <div className='py-5'>
                        {
                            uploadedSongFileName ?
                                <div className='bg-white rounded-full p-3 w-1/3'>
                                    {uploadedSongFileName.substring(0, 35)}...
                                </div>
                                :
                                <CloudinaryUpload
                                    setUrl={SetPlaylistUrl}
                                    setName={SetUploadedSongFileName}
                                />
                        }
                    </div>
                    <div className='bg-white w-40 flex items-center justify-center p-4 rounded-full cursor-pointer font-semibold'
                        onClick={(e) => {
                            e.preventDefault();
                            submitSong();
                        }}
                    >
                        Submit Song
                    </div>
                </div>
            </div>
            <NotificationContainer />

        </div>
    )
}



export default UploadSong;