import './output.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup';
import HomeComponent from './routes/Home';
import LoggedInHome from './routes/LoggedInHome';
import UploadSong from './routes/UploadSong'
import MyMusic from './routes/MyMusic';
import songContext from '../src/contexts/SongContext'
import { useState } from 'react';
import SearchPage from './routes/SearchPage';
import Library from './routes/Library';
import SinglePlayListView from "./routes/SinglePlayListView"

function App() {

  const [currentSong, setCurrentSong] = useState(null)
  const [soundPlayed, SetsoundPlayed] = useState(null)
  const [isPaused, setIsPaused] = useState(true)

  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        <songContext.Provider value={{ currentSong, setCurrentSong, soundPlayed, SetsoundPlayed, isPaused, setIsPaused }}>
          <Routes>
            <Route path='/' element={<div>hello from spotify app</div>} />
            <Route path='/login' element={<LoginComponent />} />
            <Route path='/signup' element={<SignupComponent />} />


            <Route path='/home' element={<HomeComponent />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/loggedin' element={<LoggedInHome />} />
            <Route path='/uploadsong' element={<UploadSong />} />
            <Route path='/mymusic' element={<MyMusic />} />
            <Route path='/library' element={<Library />} />
            <Route path='/playlist/:playlistId' element={<SinglePlayListView />} />
          </Routes>
        </songContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;