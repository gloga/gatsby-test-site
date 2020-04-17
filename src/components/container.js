import React from 'react';
import containerStyles from './../styles/container.module.css';

export default ({ children }) => {
    return (
        <div className={containerStyles.container}>
            { children }
        </div>
    )
}