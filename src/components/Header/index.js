import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerTop}>
          <div className={styles.email}>
            <span>contato@ecommerce.com</span>
          </div>
          <div className={styles.phone}>
            <span>(41) 9 9999-9999</span>
          </div>
        </div>
        <div className={styles.headerMain}>
          <div className={styles.logo}>
            <img src="/logoKanui.png" />
          </div>
          <div className={styles.search}>
            <input placeholder="Pesquise Aqui"/>
            <button>Pesquisar</button>
          </div>
          <div className={styles.login}>
            <button>Logar</button>
          </div>
          <div className={styles.cart}>
            <button>Carrinho</button>
          </div>
        </div>
        <div className={styles.headerBotton}>
          <nav>
            <ul>
              <li>Homens</li>
              <li>Mulheres</li>
              <li>Camisas</li>
              <li>Calças</li>
              <li>Sapatos</li>
              <li>Acessórios</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
