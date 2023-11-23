import {useParams} from 'react-router-dom';

const AlbumInfo = ({ albumsData }) => {
    const { albumId } = useParams();
    const album = albumsData.find((a) => a.id === parseInt(albumId));
    return (
        <div>
            <h1>Album Info</h1>
            {album.title} by {album.artist} - {album.year}
        </div>
    );
};

export default AlbumInfo;
