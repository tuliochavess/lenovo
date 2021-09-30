import React from "react";
import styles from "./BoxForm.module.css";

const BoxForm = () => {
  return (
    <div className={styles.BoxForm}>
      <h2>Preencha seus dados e nos envie. Em breve, entraremos em contato.</h2>
      <p className={styles.ligue}>
        Ou ligue para <b>0800 536 6861</b> e fale com nossos consultores.
      </p>
      <input type="text" placeholder="Nome completo *" className={styles.nome}/>
      <input type="text" placeholder="CNPJ *" className={styles.cnpj} />
      <input type="text" placeholder="E-mail *" className={styles.email} />
      <input type="text" placeholder="Telefone *" className={styles.telefone} />

      <input type="list" list="funcionarios" placeholder="Nº de funcionários *" className={styles.funcionarios} />
      <datalist id="funcionarios">
        <option value="1 - 50" />
        <option value="51 - 100" />
        <option value="101 - 200" />
      </datalist>

      <input type="list" list="cargo" placeholder="Cargo" className={styles.cargo}/>
      <datalist id="cargo">
        <option value="Estagiário" />
        <option value="Desenvolvedor" />
        <option value="Líder" />
      </datalist>

      <button>Enviar</button>
      <p className={styles.dados}>
        *Estes dados podem ser armazenados em um servidor internacional pela
        Lenovo ou em nome da Lenovo, permitindo ser revogada a permissão a
        qualquer momento. Lenovo pode processar os dados, conforme descrito na
        Política de Privacidade.
      </p>
    </div>
  );
};

export default BoxForm;
