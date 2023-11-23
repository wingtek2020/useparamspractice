import { Link } from "react-router-dom";
import DropDownByAlbumYear from '../../components/DropDownByAlbumYear';
import 'bootstrap/dist/css/bootstrap.min.css';

const AlbumsList = ({ albumsData }) => {
  return (
    <div>     
      <h1>Albums</h1>
      <ul>
        {albumsData.map((album) => (
          <li key={album.id}>
            <Link to={`/albums/${album.id}`}>{album.title}</Link>
          </li>
        ))}
      </ul>
      <div className="d-flex p-5">
        <DropDownByAlbumYear/>
      </div>
    </div>
  );
};

export default AlbumsList;