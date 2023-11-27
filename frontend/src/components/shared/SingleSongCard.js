import songContext from "../../contexts/SongContext";
import { useContext } from "react";

const SingleSongCard = ({ info, playSound }) => {

    const { currentSong, setCurrentSong } = useContext(songContext);

    return (
        <div className="flex hover:bg-gray-400 hover:bg-opacity-20 p-2 rounded-sm" onClick={() => {
            setCurrentSong(info)
        }}>
            <div className="w-12 h-12 bg-cover bg-center"
                style={{
                    backgroundImage: `url("${info.thumbnail}")`,
                }}
            ></div>
            <div className="flex w-full">
                <div className="text-white flex justify-center flex-col pl-4 w-5/6">
                    <div className="hover:underline cursor-pointer">{info.name}</div>
                    <div className="text-xs text-gray-400 hover:underline cursor-pointer">{info.artist.firstName + " " + info.artist.lastName}</div>
                </div>
                <div className="w-1/6 flex items-center justify-center text-gray-400 text-sm">
                    <div>3:44</div>
                    {/* <div className="text-gray-400 text-lg flex items-center justify-center pl-3">...</div> */}
                </div>
            </div>
        </div>
    )
}

export default SingleSongCard;