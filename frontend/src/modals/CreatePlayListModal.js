import { useState } from "react";
import TextInputs from "../components/shared/TextInputs";
import { unathenticatedPOSTrequest } from "../utils/serverHelper"

const CreatePlaylistModal = ({ closeModal }) => {
  const [playlistName, setPlayListName] = useState("")
  const [playlistThumbnail, setPlayListThumbnail] = useState("")

  const userId = localStorage.getItem('userId');

  const createPlaylist = async () => {
    const response = await unathenticatedPOSTrequest(`/api/playlist/create_playlist/${userId}`,
      { name: playlistName, thumbnail: playlistThumbnail, songs: [] }
    )
    console.log(response)
  }

  return (
    <div className="absolute bg-black w-screen h-screen bg-opacity-50 flex justify-center items-center" onClick={closeModal}>
      <div className="bg-app-black  w-1/3 rounded-md p-8" onClick={(e) => { e.stopPropagation() }}>
        <div className="text-white mb-5 font-semibold text-lg">Create PlayList</div>
        <div className="space-y-4 flex flex-col justify-center items-center">
          <TextInputs
            label="Name"
            labelclassName={"text-white"}
            placeholder="PlayList Name"
            value={playlistName}
            setValue={setPlayListName}
          />
          <TextInputs
            label="Thumbnail"
            labelclassName={"text-white"}
            placeholder="Thumbnail"
            value={playlistThumbnail}
            setValue={setPlayListThumbnail}
          />
          <div className="bg-white rounded flex justify-center items-center w-1/3 font-semibold py-3 mt-4"
            onClick={() => {
              createPlaylist();
            }}
          > Create</div>
        </div>
      </div>
    </div>
  )
}

export default CreatePlaylistModal;