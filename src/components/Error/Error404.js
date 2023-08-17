import React from 'react';
import {Outlet,Link} from 'react-router-dom'

const Error404 = () => {
  return (
    <>
    <div style={{ textAlign: 'center', color: 'var(--color-primary)' , margin:'50px' ,gap: '1rem'}}>
      <h1>Error 404</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
      <Link to="/" className="btn btn-primary">Get back to Home page!</Link>
    </div>
    <Outlet/>
    </>
  );
};

export default Error404;