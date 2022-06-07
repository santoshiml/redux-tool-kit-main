import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div>
    	<Link to='/login'>Login</Link>
    	<br/>
    	<Link to='/about'>About</Link>
    	<h1>This is the home page</h1>
    </div>
  );
}

export default Home;