import { useCreateSongMutation } from '../services/songApi';
import { useNavigate } from 'react-router'
import '../index.css'
import { Link } from 'react-router-dom';
import {
  Label,
  Input,
} from '@rebass/forms';
import { Box, Flex } from 'rebass';

export default function NewSongForm() {
  const navigate = useNavigate()
  const [createSong, { isLoading }] = useCreateSongMutation();
  function submitSong(event) {
    event.preventDefault();
    const data = {
      title: event.target['title'].value,
      artist: event.target['artist'].value,
      album: event.target['album'].value,
      genre: event.target['genre'].value
    }
    createSong(data);
    event.target.reset();
    navigate("/")
  }
  return (
    <Box width={650} mx={7}>
      <form onSubmit={(e) => submitSong(e)}>
        <Box width={1} m={10}><h3>New Song</h3></Box>
        <Box width={1} py={3} px={2}>
          <Flex mx={-2}>
            <Box width={1 / 2} px={2}>
              <Label htmlFor='title'>Title</Label>
              <Input type='text' id='title' />
            </Box>
            <Box width={1 / 2} px={2}>
              <Label htmlFor='artist'>Artist</Label>
              <Input type='text' id='artist' />
            </Box>
          </Flex>
          <Flex mx={-2}>
            <Box width={1 / 2} px={2}>
              <Label htmlFor='album'>Album</Label>
              <Input type='text' id='album' />
            </Box>
            <Box width={1 / 2} px={2}>
              <Label htmlFor='genre'>Genre</Label>
              <Input type='text' id='genre' />
            </Box>
          </Flex>
        </Box>
        <br />
        <Flex mx={-2}>
          <Box width={1 / 4} px={3} >
            <Input type='submit'
              value='Add New Song'
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