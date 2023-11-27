import { Icon } from '@iconify/react';
import spotify_logo from '../assets/images/spotify_logo_white.svg'
import IconText from '../components/shared/IconText';
import TextwithHover from '../components/shared/TextHover';
import { useState } from 'react';
import { Howl, Howler } from 'howler';
import LoggedInContainer from '../containers/LoggedInContainer';



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

const LoggedInHome = () => {
    return (
        <LoggedInContainer currentActiveScreen={"/loggedin"}>
            <PlaylistView titletext="Focus" cardsData={focuCardsData} />
            <PlaylistView titletext="Spotify-Playlists" cardsData={spotifyPlaylistdata} />
            <PlaylistView titletext="Sound of India" cardsData={focuCardsData} />
        </LoggedInContainer>
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

export default LoggedInHome;