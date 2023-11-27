import { Icon } from '@iconify/react';
import spotify_logo from '../assets/images/spotify_logo_white.svg'
import IconText from '../components/shared/IconText';
import TextwithHover from '../components/shared/TextHover';

const focuCardsData = [
    {
        title: "Peacefull Piano",
        description: "Relax and indulge with beautifull piano pieces",
        imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1973&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    },
    {
        title: "Deep focus",
        description: "Keep calm and focus with this music",
        imgUrl: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?auto=format&fit=crop&q=80&w=1783&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    },
    {
        title: "Instrumental Study",
        description: "focus with soft study music in the background",
        imgUrl: "https://media.istockphoto.com/id/900821442/photo/the-girls-hand-on-the-strings-of-a-violin.jpg?s=2048x2048&w=is&k=20&c=pNO425hzVn_R4EAbDCJUn1UkVyFtevwC6okOOZ0Gjz0="

    },
    {
        title: "Focus Flow",
        description: "Up tempo instrumental hip hop beats",
        imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    },
    {
        title: "Beats to think To",
        description: "Focus with deep techno and tech house",
        imgUrl: "https://images.unsplash.com/photo-1556196148-1fb724238998?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    },
]

const spotifyPlaylistdata = [
    {
        title: "English",
        description: "Relax and indulge with beautifull piano pieces",
        imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1973&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    },
    {
        title: "Hindi",
        description: "Relax and indulge with beautifull piano pieces",
        imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1973&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    },
    {
        title: "Hip Hop",
        description: "Relax and indulge with beautifull piano pieces",
        imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1973&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    },
    {
        title: "Marathi",
        description: "Relax and indulge with beautifull piano pieces",
        imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1973&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    },
    {
        title: "Punjabi",
        description: "Relax and indulge with beautifull piano pieces",
        imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1973&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    },
]



const HomeComponent = () => {
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
                    <PlaylistView titletext="Focus" cardsData={focuCardsData} />
                    <PlaylistView titletext="Spotify-Playlists" cardsData={spotifyPlaylistdata} />
                    <PlaylistView titletext="Sound of India" cardsData={focuCardsData} />
                </div>
            </div>

        </div>
    )
}


const PlaylistView = ({ titletext, cardsData }) => {
    return (
        <div className='text-white mt-8'>
            <div className='text-2xl font-semibold mb-5'>{titletext}</div>
            <div className='w-full flex justify-between space-x-4'>
                {
                    cardsData.map((item) => {
                        return <Card title={item.title} description={item.description} imgUrl={item.imgUrl} />
                    })
                }
            </div>
        </div>
    )
}


const Card = ({ title, description, imgUrl }) => {
    return (
        <div className='bg-black bg-opacity-40 w-1/5 p-4 rounded-lg'>
            <div className='pb-4 pt-2'>
                <img className='w-full rounded-md' src={imgUrl}
                    alt='label'></img>
            </div>
            <div className='text-white font-semibold py-3'>{title}</div>
            <div className='text-gray-500 text-sm'>{description}</div>
        </div>
    )
}

export default HomeComponent;