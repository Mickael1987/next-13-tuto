import styles from "./ideas.module.css";

export default function Ideas() {
  return (
    <main className='main'>
      <h3>Ideas</h3>
      <div className={styles.container}>
        <div className={styles.idea}>
          <div className={styles["idea-title"]}>Create the new Twitter</div>
          <div className={styles.description}>
            As Twitter is dying, it's the perfect moment to create a new one
          </div>
        </div>
        <div className={styles.idea}>
          <div className={styles["idea-title"]}>Map Browser Extension</div>
          <div className={styles.description}>
            Create a Browser extension that opens a popup displaying a map of
            the first adress appearing in a web page.
          </div>
        </div>
        <div className={styles.idea}>
          <div className={styles["idea-title"]}>MotorBike Site</div>
          <div className={styles.description}>
            Create a website that helps riders to find their new motorbike
          </div>
        </div>
        <div className={styles.idea}>
          <div className={styles["idea-title"]}>React and Next.js blog</div>
          <div className={styles.description}>
            Create a Blog devoted to React and Next
          </div>
        </div>
      </div>
    </main>
  );
}
