import React from 'react';
import '../../stylesheets/components/NotFound.scss';

const NotFound = () => {

    return (
    <>
        <h2>Not Found</h2>
        <p>did not find <code>{location.pathname}</code></p>
    </>
  );
};

export default NotFound;
