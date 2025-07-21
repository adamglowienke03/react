import styles from "./MainComponent.module.css";

export function MainComponent() {
    return (
        <div className={styles.mainComponent}>
            <h1 className={styles.customHeader}>Main Component</h1>
            <p className={styles.customText}>This is the main component of your application.</p>
        </div>
    );
}