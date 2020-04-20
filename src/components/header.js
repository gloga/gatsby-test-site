import React from 'react';
import { Link } from 'gatsby';

import headerStyles from './../styles/header.module.css';
import MainMenu from './../queries/main-menu';


export default () => {
  const { menuItems: { nodes: mainMenu } } = MainMenu();

  return (
    <header className={headerStyles.header}>
      {
        mainMenu.map(({label, url, menuItemId}) => {
          const {pathname: slug} = new URL(url);
          return (
            <div className={headerStyles.headerItem} key={menuItemId}>
              <Link to={slug} className={headerStyles.headerLink}>{label}</Link>
            </div>
          )
        })
      }

    </header>
  );
}
