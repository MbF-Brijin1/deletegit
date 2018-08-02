import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

export default () => (
  <footer>
    <div className="container">
      <p>&copy; 2017 Made By Fire.All rights reserved.</p>
      <Link to="/">Terms and conditions</Link>
      <Link to="/">Privacy policy</Link>
    </div>
  </footer>
);
