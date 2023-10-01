import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetSongDetailQuery } from "../redux/services/shazamCore";

const SongDetails = () => {
    const { songid } = useParams();
    const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailQuery({ songid });
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector(function (store) {
        return store.player;
    })
    
    return (
        <div className="flex flex-col">
            <DetailsHeader artistId="" songData={songData} />
            <div className="mb-10">
                <h2 className="text-white text-3xl font-bold">Lyrisk:</h2>
                <div className="mt-5">
                    {
                        songData?.sections[1].type === 'LYRICS' ?
                            songData?.sections[1].text.map((line, i) => (
                                <p className="text-gray-400 font-semibold text-base my-1">{line}</p>
                            )) :
                            <p>sorry, no lyrisk found</p>
                    }

                </div>
            </div>
        </div>
    )
} 

export default SongDetails;
