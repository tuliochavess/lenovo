import React from "react";
import styles from "./FirstBox.module.css";

const FirstBox = () => {
  return (
    <div className={styles.firstBox}>
      <p className={styles.lancamento}>LANÇAMENTO NO BRASIL</p>
      <h1>Lenovo V14</h1>
      <p className={styles.experiencia}>
        Uma experiência de trabalho elevada, todos os dias
      </p>
      <p className={styles.arquivos}>
        Arquivos pesados e várias abas abertas? Moleza.
      </p>
      <p className={styles.olenovo}>
        O Lenovo V14 une processadores Intel®, placas de armazenamento SSD e
        HDD, tela Full HD de 14”, usabilidade intuitiva, segurança robusta e
        muito mais.
      </p>
      <a href="https://bowe.com.br/" className={styles.cotacao}>
        Faça uma cotação!
      </a>
    </div>
  );
};

export default FirstBox;
