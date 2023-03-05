import { BrowserRouter, Route, Routes } from "react-router-dom"
import NewSongForm from "./components/NewSongForm"
import Songs from "./components/Songs"
import UpdateSongForm from "./components/UpdateSongForm"
import Layout from "./pages/Layout"
import {
  Box,
  Card,
} from 'rebass';
import "./index.css";
import SongList from "./components/SongList"
function App() {
  return (
    <div className="App">
      <Box
        backgroundColor="#FBFEF9" className="full">
        <Card
          className="full"
          sx={{
            p: 1,
            borderRadius: 2,
            boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
          }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<SongList />} />
                {/* <Route path="new" element={<NewSongForm />} />
                <Route path="update/:id" element={<UpdateSongForm />} /> */}
              </Route>
            </Routes>
          </BrowserRouter>
        </Card>
      </Box>
    </div >
  )
}

export default App

