import styles from "./Header.module.css";
import { BsSearch,  BsCartFill, BsTelephoneFill} from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerTop}>
          <div className={styles.email}>
            <AiOutlineMail /><span>contato@ecommerce.com</span>
          </div>
          <div className={styles.phone}>
            <BsTelephoneFill /><span>(41) 9 9999-9999</span>
          </div>
        </div>
        <div className={styles.headerMain}>
          <div className={styles.logo}>
            <img src="/logoHarve.png" />
          </div>
          <div className={styles.search}>
            <input placeholder="Pesquise Aqui"/>
            <button><BsSearch size={20}/></button>
          </div>
          <div className={styles.login}>
            <button><FaUserCircle size={20}/></button>
            <button><BsCartFill size={20}/></button>
          </div>
        </div>
        <div className={styles.headerBotton}>
          <nav>
            <ul>
              <li>HOMENS</li>
              <li>MULHERES</li>
              <li>CAMISAS</li>
              <li>CALÇAS</li>
              <li>SAPATOS</li>
              <li>ACESSÓRIOS</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
