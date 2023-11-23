const ALBUMSDATA = [
    {
        id: 0,
        title: 'Mezzanine',
        artist: 'Massive Attack',
        year: 1998
    },
    {
        id: 1,
        title: 'The Ruminant Band',
        artist: 'Fruit Bats',
        year: 2009
    },
    {
        id: 2,
        title: 'The Ruminant Band2',
        artist: 'Fruit Bats2',
        year: 2009
    }
];

export const getAlbumsData = () => ALBUMSDATA;


export const getAlbumYears = () => ALBUMSDATA.filter((value, index, self) => {
    return self.findIndex(v => v.year === value.year) === index;
  });