import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';

import { getAlbumYears} from '../features/albums/albumsSlice';

function DropDownByAlbumYear({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  
  const albumsData = getAlbumYears();
  return (
    <div className="d-flex p-5">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret>Select Album Year</DropdownToggle>
        <DropdownMenu>
          {albumsData.map((album) => (
          <DropdownItem key={album.id}>
            <Link to={`/albumsYear/${album.year}`}>{album.year}</Link>
          </DropdownItem>
        ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

DropDownByAlbumYear.propTypes = {
  direction: PropTypes.string,
};

export default DropDownByAlbumYear;