import { useState, useEffect } from "react";
import { athenticatedGETrequest } from "../utils/serverHelper";

const AddToPlayListModal = ({ closeModal, addSongtoPlaylist }) => {
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

        <div className="absolute bg-black w-screen h-screen bg-opacity-50 flex justify-center items-center" onClick={closeModal}>
            <div className="bg-app-black  w-1/3 rounded-md p-8" onClick={(e) => { e.stopPropagation() }}>
                <div className="text-white mb-5 font-semibold text-lg">Select PlayList</div>
                <div className="space-y-4 flex flex-col justify-center items-center">
                    {
                        myPlayList.map((item) => {
                            return <PlayListComponent info={item} addSongtoPlaylist={addSongtoPlaylist}

                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const PlayListComponent = ({ info, addSongtoPlaylist }) => {
    return (
        <div className="bg-app-black flex w-full items-center space-x-4 hover:bg-gray-400 hover:bg-opacity-20 cursor-pointer p-3" onClick={() => {
            addSongtoPlaylist(info._id)
        }}>
            <div>
                <img src={info.thumbnail}
                    className="w-10 h-10 rounded"
                    alt="thumbnail"
                />
            </div>
            <div className="text-white font-semibold text-sm">{info.name}</div>
        </div>
    )
}

export default AddToPlayListModal