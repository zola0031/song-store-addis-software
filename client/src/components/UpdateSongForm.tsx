import { useUpdateSongMutation } from '../services/songApi';
import { Link, useLocation, useParams } from "react-router-dom";
import { useNavigate } from 'react-router'
import '../index.css'
import {
  Label,
  Input,
} from '@rebass/forms';
import { Box, Flex } from 'rebass';

export default function UpdateSongForm() {
  const location = useLocation()
  const navigate = useNavigate()
  const { song } = location.state
  const params = useParams();
  const id = params.id;
  const [updateSong, { isLoading }] = useUpdateSongMutation();
  function submitSong(event) {
    event.preventDefault();
    const data = {
      id,
      title: event.target['title'].value,
      artist: event.target['artist'].value,
      album: event.target['album'].value,
      genre: event.target['genre'].value
    }
    updateSong(data);
    event.target.reset();
    navigate("/")
  }
  return (
    <Box width={650} mx={7}>
      <form onSubmit={(e) => submitSong(e)}>
        <Box width={1} m={10}><h3>Update Song</h3></Box>
        <Box width={1} py={3} px={2}>
          <Flex mx={-2}>
            <Box width={1 / 2} px={2}>
              <Label htmlFor='title'>Title</Label>
              <Input type='text' id='title' defaultValue={song.title} />
            </Box>
            <Box width={1 / 2} px={2}>
              <Label htmlFor='artist'>Artist</Label>
              <Input type='text' id='artist' defaultValue={song.artist} />
            </Box>
          </Flex>
          <Flex mx={-2}>
            <Box width={1 / 2} px={2}>
              <Label htmlFor='album'>Album</Label>
              <Input type='text' id='album' defaultValue={song.album} />
            </Box>
            <Box width={1 / 2} px={2}>
              <Label htmlFor='genre'>Genre</Label>
              <Input type='text' id='genre' defaultValue={song.genre} />
            </Box>
          </Flex>
        </Box>
        <br />
        <Flex mx={-2}>
          <Box width={1 / 4} px={3} >
            <Input type='submit'
              value='Update Song'
              disabled={isLoading}
              className="button_header"
              color="white"
              backgroundColor="#9333EA"
            />
            {isLoading && ' Loading...'}
          </Box>
          <Box color="black" backgroundColor="#D16666" width={100} p={9} className="button_header">
            <Link to={"/"} >
              Cancel
            </Link>
          </Box>
        </Flex>
      </form>
    </Box>
  );
}