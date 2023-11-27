import { useParams } from "react-router-dom"
import LoggedInContainer from "../containers/LoggedInContainer";
import { useEffect, useState } from "react";
import { athenticatedGETrequest } from "../utils/serverHelper";
import SingleSongCard from "../components/shared/SingleSongCard";

const SinglePlayListView = () => {
    const [playlistdetails, setPlayListDetails] = useState({});
    const { playlistId } = useParams();

    useEffect(() => {
        const getData = async () => {
            const response = await athenticatedGETrequest("/api/playlist/get_playlist/" + playlistId);
            if (response.success) {
                setPlayListDetails(response.playlist);
            }
        };
        getData();
    }, [playlistId]);


    return (
        <LoggedInContainer currentActiveScreen={"/library"}>
            {playlistdetails._id && (
                <div>

                    <div className="text-white text-xl pt-8 font-semibold">
                        {playlistdetails.name}
                    </div>
                    <div className="pt-10 space-y-3">
                        {
                            playlistdetails.songs.map((item) => {
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
                </div>
            )}
        </LoggedInContainer>
    )
}

export default SinglePlayListView;


