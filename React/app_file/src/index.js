import React from 'react';
import ReactDOM from 'react-dom/client';
import CommentList from './components/CommentList';
import Accommodate from './components/Accommodate';
import Toolbar from './components/Toolbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CommentList />
    <Accommodate />
    <Toolbar />
  </React.StrictMode>
);