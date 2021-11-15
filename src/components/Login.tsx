/* eslint-disable @next/next/no-img-element */

import styles from "../styles/components/Login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <h1>Entre para ver as notícias do My News</h1>
      <img src="/favicon2.png" alt="Logo My News" />
      <p>
        Veja os últimos acontecimentos de graça e organize as notícicas para ler
        mais tarde!
      </p>
    </div>
  );
}
