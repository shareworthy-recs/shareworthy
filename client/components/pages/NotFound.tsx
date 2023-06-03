import React from 'react';
import '../../stylesheets/components/NotFound.scss';

const NotFound = () => {

    return (
    <>
        <h2>Not Found</h2>
        <p>Could not find <code>{location.pathname}</code></p>
        <p>Are you sure you know what you're doing?</p>
    </>
  );
};

export default NotFound;
