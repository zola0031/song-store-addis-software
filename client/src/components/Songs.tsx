
import { Box, Button, Card, Flex } from 'rebass';
import SongList from './SongList';
import SongStatic from './SongStatic';

export default function Songs() {
    return (
        <Flex>
            <Box mx={5}><SongList /></Box>
            {/* <Box mx={5}><SongStatic /></Box> */}
        </Flex>
    );
}