import styles from './text.module.css';


export default function Text() {
    return (
        <div className={styles.textContainer}>
          <h2>Welcome to Your Messages</h2>
          <p>This is where your messages will appear.</p>
        </div>
      );
    
}
