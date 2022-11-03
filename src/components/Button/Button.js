import React from 'react';
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const LoadButton = ({ onLoadMore }) => {
  return (
    <Button
      variant="outlined"
      startIcon={<AutoAwesomeIcon />}
      onClick={onLoadMore}
    >
      Load more
    </Button>
  );
};

//* const Button = ({ onLoadMore }) => {
//*   return (
//*     <button className="inputButton" type="button" onClick={onLoadMore}>
//*       Load more
//*     </button>
//*   );
//* };

export default LoadButton;
