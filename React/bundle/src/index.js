import React from 'react';
import ReactDOM from 'react-dom/client';
import CommentList from './components/CommentList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>
);