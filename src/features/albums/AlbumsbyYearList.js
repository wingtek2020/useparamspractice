import {useParams, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AlbumsbyYearList = ({ albumsData }) => {

  const { albumYear } = useParams();
  console.log('year ' + albumYear);

  const filteredAlbums = albumsData.filter((album) => {
    return album.year === parseInt(albumYear);
});

  console.log(filteredAlbums.length);
  return (
    <div>     
      <h1>Albums by year {albumYear}</h1>
      <ul>
         {filteredAlbums.map((album) => (
          <li key={album.id}>
            <Link to={`/albums/${album.id}`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumsbyYearList;