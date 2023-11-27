import { useState, useEffect } from 'react';
import SingleSongCard from '../components/shared/SingleSongCard';
import { athenticatedGETrequest } from '../utils/serverHelper'
import LoggedInContainer from '../containers/LoggedInContainer';

const userId = localStorage.getItem('userId');

const MyMusic = () => {

    const [songData, SetSongData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await athenticatedGETrequest(`/api/song/get_artist/${userId}`)
            console.log(response)
            SetSongData(response.songs)
        };
        getData()
    }, [])

    return (
        <LoggedInContainer currentActiveScreen={"/mymusic"}>
            <div className='text-white text-xl font-semibold pb-4 pl-2 pt-8'>My Songs</div>
            <div className='space-y-3 overflow-auto'>
                {
                    songData.map((item) => {
                        return <SingleSongCard info={item} playSound={() => { }} />
                    })
                }
            </div>
        </LoggedInContainer>
    );

};


// const MyMusic = () => {

//     const [songData, SetSongData] = useState([])
//     const [soundPlayed, SetsoundPlayed] = useState(null);

//     const playSound = (songSrc) => {
//         if(soundPlayed) {
//             soundPlayed.stop();
//         }
//         let sound = new Howl({
//             src: [songSrc],
//             html5: true,
//         });
//         SetsoundPlayed(sound);
//         sound.play();
//         console.log(sound)
//     }

//     useEffect(() => {
//         const getData = async () => {
//             const response = await athenticatedGETrequest(`/api/song/get_artist/${userId}`)
//             console.log(response)
//             SetSongData(response.songs)
//         };
//         getData()
//     }, [])


//     return (
//         <div className="w-full h-full flex">
//             {/* this is first left section div */}
//             <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
//                 <div>

//                     <div className="logoDiv p-5">
//                         <img src={spotify_logo} alt='spotify logo' width="125" />
//                     </div>

//                     <div className='py-5'>
//                         <IconText
//                             iconName={"material-symbols:home"} displayText={"Home"}
//                         />
//                         <IconText
//                             iconName={"material-symbols:search"} displayText={"Search"}
//                         />
//                         <IconText
//                             iconName={"icomoon-free:books"} displayText={"Library"}
//                         />
//                         <IconText
//                             iconName={"mdi:music-box-multiple"} displayText={"My Music"} active
//                         />

//                     </div>
//                     <div className='pt-5'>
//                         <IconText
//                             iconName={"icon-park-solid:add"}
//                             displayText={"Create Playlist"}
//                         />
//                         <IconText
//                             iconName={"mdi:cards-heart"}
//                             displayText={"Liked Songs"}
//                         />
//                     </div>
//                 </div>
//                 <div className='px-5'>
//                     <div className='border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer'>
//                         <Icon icon="carbon:earth-europe-africa" />
//                         <div className='ml-2 text-sm font-semibold'>English</div>
//                     </div>
//                 </div>

//             </div>

//             {/* this is second ryt section div */}
//             <div className="h-full w-4/5 bg-app-black overflow-auto">
//                 <div className='navbar w-full h-1/10 bg-black bg-opacity-30 flex justify-end items-center'>
//                     <div className='w-1/2  flex h-full'>
//                         <div className='w-3/5 flex justify-around items-center'>
//                             <TextwithHover displayText={"Premium"} />
//                             <TextwithHover displayText={"Support"} />
//                             <TextwithHover displayText={"Download"} />
//                             <div className='h-1/2 border-r border-white'></div>
//                         </div>
//                         <div className='w-2/5 flex justify-around items-center h-full'>
//                             <TextwithHover displayText={"Sign up"} />
//                             <div className='bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer'>
//                                 Log in
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//                 <div className='content p-8 overflow-auto'>
//                     <div className='text-white text-xl font-semibold pb-4 pl-2'>My Songs</div>
//                     <div className='space-y-3 overflow-auto'>
//                     {
//                         songData.map((item) => {
//                           return  <SingleSongCard info={item} playSound={playSound}/>
//                         })
//                     }

//                     </div>
//                 </div>
//             </div>
//             <NotificationContainer />

//         </div>
//     )
// }



export default MyMusic;