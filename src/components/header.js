import React from 'react';
import { Link } from 'gatsby';

import headerStyles from './../styles/header.module.css';

export default () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerItem}>
        <Link to='/' className={headerStyles.headerLink}>Home</Link>
      </div>
      <div className={headerStyles.headerItem}>
        <Link to='/about' className={headerStyles.headerLink}>About</Link>
      </div>
    </header>
  );
}
