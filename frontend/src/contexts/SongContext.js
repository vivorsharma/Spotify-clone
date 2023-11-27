import { createContext } from "react";

const songContext = createContext({
    currentSong: null,
    setCurrentSong: (currentSong) => { },
    soundPlayed: null,
    SetsoundPlayed: () => { },
    isPaused: null,
    setIsPaused: () => { }
});


export default songContext;