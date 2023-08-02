import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function IconCheckboxes() {
  return (
    <div>
      {/* <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      /> */}
    </div>
  );
}

