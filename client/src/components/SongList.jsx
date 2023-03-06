import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../index.css'
import { Box, Button, Card, Flex } from 'rebass';
import { useDispatch, useSelector } from 'react-redux';
import { getSongs, getSongStatics, deleteSong } from "../redux/songSlice.js";
import styled from 'styled-components'
import { variant } from 'styled-system'

const ButtonStyled = styled('button')(
  {
    appearance: 'none',
    fontFamily: 'inherit',
    marginRight: 10,
    paddingTop: 7,
    textAlign: "center",
    width: 60,
    color: "white",
    backgroundColor: "#9333EA",
    borderRadius: 5,
    border: "transparent 0"
  },
  variant({
    variants: {
      primary: {
        color: 'white',
        bg: 'primary',
      },
      secondary: {
        color: 'white',
        bg: 'secondary',
      },
    }
  })
)


const ButtonStyledAdd = styled('button')(
  {
    appearance: 'none',
    fontFamily: 'inherit',
    marginBottom: 10,
    padding: 10,
    textAlign: "center",
    width: 100,
    color: "white",
    backgroundColor: "#9333EA",
    borderRadius: 5,
    border: "transparent 0"
  },
  variant({
    variants: {
      primary: {
        color: 'white',
        bg: 'primary',
      },
      secondary: {
        color: 'white',
        bg: 'secondary',
      },
    }
  })
)


export default function SongList() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate()
  const { song: songs } = useSelector((state) => state.song);

  const limit = 10;
  const [page, setPage] = useState(1);
  const totalPage = Math.ceil(songs?.total / limit);

  const dispatch = useDispatch();
  const payload = { page, limit: 10 };

  useEffect(() => {
    setIsLoading(true);

    dispatch(getSongs(payload));

    setIsLoading(false);

  }, [dispatch, page]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  function removeSong(event, id) {
    event.preventDefault();
    dispatch(deleteSong({ id }));
    setTimeout(() => {
      dispatch(getSongs(payload));
      dispatch(getSongStatics());

      navigate("/")
    }, 1000);
  }

  return (
    <Box width={700} mx={2}>
      <Card
        p={4}
        sx={{
          p: 1,
          borderRadius: 5,
          boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
        }}
        className="border_top">
        <Box>
          <ButtonStyledAdd>
            <Link to={"/new"} className="button_header">
              Add New
            </Link>
          </ButtonStyledAdd>
        </Box>
        <Flex width={700}>
          <Box width={1 / 5}>Title</Box>
          <Box width={1 / 5}>Artist</Box>
          <Box width={1 / 5}>Album</Box>
          <Box width={1 / 5}>Genre</Box>
          <Box width={1 / 5}>Action</Box>
        </Flex>
        <Box width={630} mb={3}>
          <hr />
        </Box>
        {
          songs?.data.map((song) => (
            <Flex key={song._id} width={700}>
              <Box width={1 / 5}  >
                {song.title}
              </Box>
              <Box width={1 / 5}>
                {song.artist}
              </Box>
              <Box width={1 / 5}>
                {song.album}
              </Box>
              <Box width={1 / 5}>
                {song.genre}
              </Box>
              <Flex width={50}>
                <Box width={1 / 2}>
                  <Link to={`/update/${song._id}`} state={{ song: song }}>
                    <Box py={2} size={20}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="0.5"
                        stroke="currentColor"
                        x-tooltip="tooltip"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                    </Box></Link>
                </Box>
                <Box width={1 / 2}>
                  <Button backgroundColor="transparent" color="#6060F4" onClick={(e) => removeSong(e, song._id)} className="Delete" ><Box size={20}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      x-tooltip="tooltip"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </Box></Button>
                </Box>
              </Flex>
            </Flex>
          ))
        }

        <Flex my={2}>
          <ButtonStyled
            color="white" backgroundColor="#9333EA"
            disabled={page <= 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            <Flex width="full">
              <Box
                width={20}
                color="white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
              </Box>
              <Box>Prev</Box>
            </Flex>
          </ButtonStyled>
          <ButtonStyled
            mx={2}
            color="white"
            backgroundColor="#9333EA"
            disabled={totalPage <= page}
            onClick={() => setPage((prev) => prev + 1)}
          >
            <Flex width="full">
              <Box>Next</Box>
              <Box
                width={20}
                color="white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Box>
            </Flex>
          </ButtonStyled>
        </Flex>
      </Card >
    </Box >
  );

}