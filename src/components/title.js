import React from 'react';

import titleStyles from './../styles/title.module.css';

export default ({content}) => {
  return (
    <h1 className={titleStyles.title}>{content}</h1>
  );
}
