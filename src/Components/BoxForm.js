import React from "react";
import styles from "./BoxForm.module.css";

const BoxForm = () => {
  const [nome, setNome] = React.useState("");
  const [errorNome, setErrorNome] = React.useState(null);
  const [cnpj, setCnpj] = React.useState("");
  const [errorCnpj, setErrorCnpj] = React.useState(null);
  const [email, setEmail] = React.useState("");
  const [errorEmail, setErrorEmail] = React.useState(null);
  const [telefone, setTelefone] = React.useState("");
  const [errorTelefone, setErrorTelefone] = React.useState(null);
  const [box, setBox] = React.useState(false);

  function validateNome(value) {
    if (value.length === 0) {
      setErrorNome("Preencha um valor");
      return false;
    } else if (!/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/.test(value)) {
      setErrorNome("Preencha um nome válido");
      return false;
    } else {
      setErrorNome(null);
      return true;
    }
  }

  function validateCnpj(value) {
    if (value.length === 0) {
      setErrorCnpj("Preencha um valor");
      return false;
    } else if (!/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(value)) {
      setErrorCnpj("Preencha um CNPJ válido");
      return false;
    } else {
      setErrorCnpj(null);
      return true;
    }
  }

  function validateEmail(value) {
    if (value.length === 0) {
      setErrorEmail("Preencha um valor");
      return false;
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        value
      )
    ) {
      setErrorEmail("Preencha um E-mail válido");
      return false;
    } else {
      setErrorEmail(null);
      return true;
    }
  }

  function validateTelefone(value) {
    if (value.length === 0) {
      setErrorTelefone("Preencha um valor");
      return false;
    } else if (
      !/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}-?[0-9]{4}$/.test(value)
    ) {
      setErrorTelefone("Preencha um E-mail válido");
      return false;
    } else {
      setErrorTelefone(null);
      return true;
    }
  }

  function handleBlurNome({ target }) {
    validateNome(target.value);
  }
  function handleBlurCnpj({ target }) {
    validateCnpj(target.value);
  }
  function handleBlurEmail({ target }) {
    validateEmail(target.value);
  }
  function handleBlurTelefone({ target }) {
    validateTelefone(target.value);
  }

  function handleClick() {
    if (
      errorNome === null &&
      errorCnpj === null &&
      errorEmail === null &&
      errorTelefone === null
    ) {
      setBox(true);
    }
    console.log();
  }

  return (
    <div className={styles.BoxForm}>
      <h2>Preencha seus dados e nos envie. Em breve, entraremos em contato.</h2>
      <p className={styles.ligue}>
        Ou ligue para <b>0800 536 6861</b> e fale com nossos consultores.
      </p>

      <input
        type="text"
        placeholder="Nome completo *"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        onBlur={handleBlurNome}
        className={`${errorNome ? styles.erro : ""} ${
          box === false ? styles.nome : styles.dontShow
        }`}
      />
      <input
        type="text"
        value={cnpj}
        onChange={(event) => setCnpj(event.target.value)}
        onBlur={handleBlurCnpj}
        placeholder="CNPJ *"
        className={`${errorCnpj ? styles.erro : ""} ${
          box === false ? styles.cnpj : styles.dontShow
        }`}
      />
      <input
        type="text"
        placeholder="E-mail *"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        onBlur={handleBlurEmail}
        className={`${errorEmail ? styles.erro : ""} ${
          box === false ? styles.email : styles.dontShow
        }`}
      />
      <input
        type="text"
        placeholder="Telefone *"
        value={telefone}
        onChange={(event) => setTelefone(event.target.value)}
        onBlur={handleBlurTelefone}
        className={`${errorTelefone ? styles.erro : ""} ${
          box === false ? styles.telefone : styles.dontShow
        }`}
      />

      <input
        type="list"
        list="funcionarios"
        placeholder="Nº de funcionários *"
        className={box === false ? styles.funcionarios : styles.dontShow}
      />
      <datalist id="funcionarios">
        <option value="1 - 50" />
        <option value="51 - 100" />
        <option value="101 - 200" />
      </datalist>

      <input
        type="list"
        list="cargo"
        placeholder="Cargo"
        className={box === false ? styles.cargo : styles.dontShow}
      />
      <datalist id="cargo">
        <option value="Estagiário" />
        <option value="Desenvolvedor" />
        <option value="Líder" />
      </datalist>
      {/* ------------------------------------------- Segundo box início ------------------------------------------- */}
      <input
        type="list"
        list="categoria"
        placeholder="Categoria de produto *"
        className={box === true ? styles.categoria : styles.dontShow}
      />
      <datalist id="categoria">
        <option value="Vendas" />
        <option value="Suporte" />
        <option value="Consultoria" />
      </datalist>

      <input
        type="list"
        list="empresa"
        placeholder="Empresa"
        className={box === true ? styles.empresa : styles.dontShow}
      />
      <datalist id="empresa">
        <option value="Pequena" />
        <option value="Média" />
        <option value="Grande" />
      </datalist>

      <input
        type="list"
        list="motivo"
        placeholder="Motivo de contato *"
        className={box === true ? styles.motivo : styles.dontShow}
      />
      <datalist id="motivo">
        <option value="Quero comprar" />
        <option value="Quero suporte" />
      </datalist>

      <input
        type="list"
        list="estado"
        placeholder="Estado *"
        className={box === true ? styles.estado : styles.dontShow}
      />
      <datalist id="estado">
        <option value="AC" />
        <option value="AL" />
        <option value="AP" />
        <option value="BA" />
        <option value="CE" />
        <option value="DF" />
        <option value="ES" />
        <option value="GO" />
        <option value="MA" />
        <option value="MT" />
        <option value="MS" />
        <option value="MG" />
        <option value="PA" />
        <option value="PB" />
        <option value="PR" />
        <option value="PE" />
        <option value="PI" />
        <option value="RJ" />
        <option value="RN" />
        <option value="RS" />
        <option value="RO" />
        <option value="RR" />
        <option value="SC" />
        <option value="SP" />
        <option value="SE" />
        <option value="TO" />
      </datalist>

      <div className={box === true ? styles.check : styles.dontShow}>
        <input type="checkbox" id="check" />
        <label htmlFor="check">
          Confirmo ter aceitado receber comunicações da Lenovo.*
        </label>
      </div>
      {/* ------------------------------------------- Segundo box final ------------------------------------------- */}

      <button onClick={handleClick}>
        {box === false ? "ENVIAR" : "QUERO COTAR"}
      </button>
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
