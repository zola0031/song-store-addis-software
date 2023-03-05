// import { useGetSongStaticsQuery } from "../services/songApi";
import { Flex, Box, Text, Card } from 'rebass';
import '../index.css';
export default function SongStatic() {
    const songs = [];
    const songStatics = {};
    // const {
    //     data: songStatics = {},
    //     isLoading,
    //     isFetching,
    //     isError,
    //     error,
    // } = useGetSongStaticsQuery();

    // if (isLoading || isFetching) {
    //     return (
    //         <div className="d-flex justify-content-center">
    //             <div className="spinner-border" role="status">
    //                 <span className="visually-hidden">Loading...</span>
    //             </div>
    //         </div>
    //     );
    // }

    // if (isError) {
    //     console.log({ error });
    //     return (
    //         <div className="alert alert-danger" role="alert">
    //             {error}
    //         </div>
    //     );
    // }
    return (
        <Box>
            <Card
                p={4}
                sx={{
                    p: 1,
                    borderRadius: 5,
                    boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
                }} className="border_top">
                <Box
                    pb={3}>
                    <Text
                        fontSize={[3, 4, 5]}
                        fontFamily="'Courier New', Courier, monospace"
                        fontWeight='bold'
                        color='primary'>
                        All Songs: {songStatics.countAll[0].count}
                    </Text>
                </Box>
                <Flex>
                    <Box >
                        <Flex px={2} pb={2}>
                            <Text
                                fontSize={[4]}
                                fontWeight='bold'
                                fontFamily="'Courier New', Courier, monospace"
                                color='primary'>
                                By Album
                            </Text>
                        </Flex>
                        {songStatics.countByAlbum.map((album) => (
                            <Flex px={3} width={200}>
                                <Box width={1 / 2}>
                                    <Text
                                        fontSize={[3]}
                                        p={1}
                                        color='primary'>
                                        {`${album._id}:`}
                                    </Text>
                                </Box>
                                <Box width={1 / 2}>
                                    <Text
                                        fontSize={[3]}
                                        p={1}
                                        color='primary'>
                                        {album.count}
                                    </Text>
                                </Box>
                            </Flex>
                        ))}
                    </Box>
                    <hr />
                    <Box >
                        <Flex px={2} pb={2}>
                            <Text
                                fontSize={[4]}
                                fontWeight='bold'
                                fontFamily="'Courier New', Courier, monospace"
                                color='primary'>
                                By Artists
                            </Text>
                        </Flex>
                        {songStatics.countByArtist.map((album) => (
                            <Flex px={3} width={200}>
                                <Box width={1 / 2}>
                                    <Text
                                        fontSize={[3]}
                                        p={1}
                                        color='primary'>
                                        {`${album._id}:`}
                                    </Text>
                                </Box>
                                <Box width={1 / 2}>
                                    <Text
                                        fontSize={[3]}
                                        p={1}
                                        color='primary'>
                                        {album.count}
                                    </Text>
                                </Box>
                            </Flex>
                        ))}
                    </Box>
                    <hr />
                    <Box >
                        <Flex px={2} pb={2}>
                            <Text
                                fontSize={[4]}
                                fontWeight='bold'
                                fontFamily="'Courier New', Courier, monospace"
                                color='primary'>
                                By Genre
                            </Text>
                        </Flex>
                        {songStatics.countByGenre.map((album) => (
                            <Flex px={3} width={200}>
                                <Box width={1 / 2}>
                                    <Text
                                        fontSize={[3]}
                                        p={1}
                                        color='primary'>
                                        {`${album._id}:`}
                                    </Text>
                                </Box>
                                <Box width={1 / 2}>
                                    <Text
                                        fontSize={[3]}
                                        p={1}
                                        color='primary'>
                                        {album.count}
                                    </Text>
                                </Box>
                            </Flex>
                        ))}
                    </Box>
                </Flex>
            </Card>
        </Box>
    );
}