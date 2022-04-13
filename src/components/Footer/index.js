import styles from "./Footer.module.css";
import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
import { MdPrivacyTip } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.sideLeftTop}>
          <div className={styles.logo}>
            <a className={styles.linkApploja} href="#">
              <span>HARVE</span>
            </a>
          </div>
        </div>
        <div className={styles.sideRightTop}>
          <div className={styles.links}>
            <nav>
              <ul>
                <li>
                  <Link href="/">
                    <span className={styles.menuLink}>CAMISAS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles.menuLink}>BLUSAS</span>
                  </Link>
                </li>
                <li>
                  <a className={styles.menuLink} href="#">
                    CALÇAS
                  </a>
                </li>
                <li>
                  <a className={styles.menuLink} href="#">
                    BERMUDAS
                  </a>
                </li>
                <li>
                  <a className={styles.menuLink} href="#">
                    SAPATOS
                  </a>
                </li>
                <li>
                  <a className={styles.menuLink} href="#">
                    ACESSÓRIOS
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className={styles.footerCenter}>
        <div className={styles.sideLeftCenter}>
          <span>
            Ecommerce para vender seus produtos da melhor forma possível!!!
          </span>
          <p>Horário de Atendimento: Segunda à Sexta - das 9 às 18 horas</p>
        </div>
        <div className={styles.sideRightCenter}>
          <div className={styles.contactDetails}>
            <div className={styles.iconContact}>
              <BsTelephoneFill />
            </div>
            <div className={styles.contactDescription}>
              <span>Contato: (41) 9 9999-9999</span>
            </div>
          </div>
          <div className={styles.contactDetails}>
            <div className={styles.iconContact}>
              <AiOutlineMail />
            </div>
            <div className={styles.contactDescription}>
              <span>ecoomerce@harve.com</span>
            </div>
          </div>
          <div className={styles.contactDetails}>
            <div className={styles.iconContact}>
              <MdPrivacyTip />
            </div>
            <div className={styles.contactDescription}>
              <span>Política de Privacidade e Termos de Uso</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
