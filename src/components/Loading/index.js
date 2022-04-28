import styles from "./Loading.module.css";

export const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.box}>
        <div className={styles.loader1}></div>
        <p>Carregando...</p>
      </div>
    </div>
  );
};
