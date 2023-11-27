import { useEffect, useState } from "react";
import LoggedInContainer from "../containers/LoggedInContainer";
import { athenticatedGETrequest } from "../utils/serverHelper";
import { useNavigate } from "react-router-dom";


const Library = () => {
    const [myPlayList, setMyPlayList] = useState([])

    const userId = localStorage.getItem("userId")

    useEffect(() => {
        const getData = async () => {
            const response = await athenticatedGETrequest(`/api/playlist/getmy_playlist/${userId}`)
            setMyPlayList(response.playlists)
        }
        getData();
    }, [])

    return (
        <LoggedInContainer currentActiveScreen={"/library"}>
            <div className="text-white text-xl pt-8 font-semibold"> My PlayLists</div>
            <div className="py-5 grid gap-5 grid-cols-5">
                {
                    myPlayList.map((item) => {
                        return <Card
                            key={JSON.stringify(item)}
                            title={item.name}
                            description=""
                            imgUrl={item.thumbnail}
                            playlistId={item._id}
                        />
                    })
                }
            </div>
        </LoggedInContainer>

    )
}
const Card = ({ title, description, imgUrl, playlistId }) => {
    const navigate = useNavigate();
    return (
        <div className='bg-black bg-opacity-40 w-full p-4 rounded-lg cursor-pointer' onClick={() => {
            navigate("/playlist/" + playlistId)
        }}>
            <div className='pb-4 pt-2'>
                <img className='w-full rounded-md' src={imgUrl}
                    alt='label'></img>
            </div>
            <div className='text-white font-semibold py-3'>{title}</div>
            <div className='text-gray-500 text-sm'>{description}</div>
        </div>
    )
}
export default Library;