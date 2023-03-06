import Song from "../models/songModel.js";
import { getPaginatedData, getStatics } from "../utils/paginationHelper.js";

const getSongs = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const songs = await getPaginatedData(Song, page, limit);
  res.status(200).json(songs);
};

const createSong = async (req, res) => {
  const { title, artist, album, genre } = req.body;
  const song = await Song.create({
    title,
    artist,
    album,
    genre,
  });

  await song.save();

  res.status(200).json(song);
};

const updateSong = async (req, res) => {
  const { title, artist, album, genre } = req.body;
  const id = req.params.id;
  const songDto = {
    title,
    artist,
    album,
    genre,
  };
  const song = await Song.findByIdAndUpdate(id, songDto);

  await song.save();

  const result = { ...song._doc, ...songDto };

  res.status(200).json(result);
};

const deleteSong = async (req, res) => {
  const id = req.params.id;

  await Song.findByIdAndDelete(id);

  res.status(200).json({ success: true });
};

const songStatics = async (req, res) => {
  try {
    const [countAll, countByGenre, countByArtist, countByAlbum] =
      await Promise.all([
        getStatics(Song, null),
        getStatics(Song, "$genre"),
        getStatics(Song, "$artist"),
        getStatics(Song, "$album"),
      ]);

    const result = { countAll, countByGenre, countByArtist, countByAlbum };

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

export { getSongs, createSong, updateSong, deleteSong, songStatics };
