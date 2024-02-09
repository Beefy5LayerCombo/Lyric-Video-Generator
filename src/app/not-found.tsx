import React from 'react';
import styles from './not-found.module.css'; // Import the styles

const NotFound: React.FC = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Page not found</h2>
            <p className={styles.bodyText}>Could not find the requested page</p>
        </div>
    );
};

export default NotFound;