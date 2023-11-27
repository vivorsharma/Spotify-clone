import { Icon } from "@iconify/react";
import LoggedInContainer from "../containers/LoggedInContainer";
import { useState } from "react";
import { athenticatedGETrequest } from "../utils/serverHelper"
import SingleSongCard from "../components/shared/SingleSongCard";

const SearchPage = () => {
    const [isInputFocused, setIsInputFocused] = useState(false)
    const [searchText, setSearchText] = useState("");
    const [songData, setSongData] = useState([])

    const searchSong = async () => {
        const response = await athenticatedGETrequest("/api/song/song_name/" + searchText)
        setSongData(response.song)
    }

    return (
        <LoggedInContainer currentActiveScreen={"/search"}>
            <div className="w-full py-6">
                <div className={`w-1/3 p-3 text-sm rounded-full bg-gray-800 px-5 flex text-white space-x-3 items-center ${isInputFocused ? "border border-white" : ""}`}>
                    <Icon icon="ic:outline-search" className="text-lg" />
                    <input
                        type="text"
                        placeholder="What do you want to listen to ?"
                        className="w-full bg-gray-800 focus:outline-none"
                        onFocus={() => {
                            setIsInputFocused(true);
                        }}
                        onBlur={() => {
                            setIsInputFocused(false);
                        }}
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                searchSong();
                            }
                        }}
                    />
                </div>

                {songData.length > 0 ? (
                    <div className="pt-10 space-y-3">
                        <div className="text-white ">
                            Showing search results for <span className="font-bold">{searchText}</span>
                        </div>
                        {
                            songData.map((item) => {
                                return (
                                    <SingleSongCard
                                        info={item}
                                        key={JSON.stringify(item)}
                                        playSound={() => { }}
                                    />
                                );
                            })
                        }
                    </div>
                ) :
                    <div className="text-white pt-10">
                        Nothing To Show Here
                    </div>
                }
            </div>
        </LoggedInContainer>
    )
}

export default SearchPage;