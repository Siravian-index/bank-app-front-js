
import styles from "./styles.module.css"

interface Props {
  onClick: () => void
}

export const ErrorFallback = ({onClick}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Ooops, algo salió mal. </h2>
        <div className={styles.footer}>
          <button className={styles.button} onClick={() => onClick()}>
            Regresar
          </button>
        </div>
      </div>
    </div>
  );
};