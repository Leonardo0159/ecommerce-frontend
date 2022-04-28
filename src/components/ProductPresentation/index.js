import { useState, useEffect } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import styles from "./ProductPresentation.module.css";
import { Carousel } from "../Carousel";

export const ProductPresentation = (props) => {
  const [nameProduct, setNameProduct] = useState();
  const [valueProduct, setValueProduct] = useState();
  const [oldValueProduct, setOldValueProduct] = useState();

  const images = [
    {
      original: "/CamisaVolcom.png",
      thumbnail: "/CamisaVolcom.png",
    },
    {
      original: "/CamisaVolcom2.png",
      thumbnail: "/CamisaVolcom2.png",
    },
    {
      original: "/CamisaVolcom3.png",
      thumbnail: "/CamisaVolcom3.png",
    },
  ];

  useEffect(() => {
    if (props.product) {
      setNameProduct(props.product.name);
      setValueProduct("119,90");
      setOldValueProduct("149,90");
    }
  });

  return (
    <div className={styles.productPresentation}>
      <div className={styles.container}>
        <div className={styles.presentation}>
          <div className={styles.sideLeft}>
            <div className={styles.boxImage}>
              <Carousel images={images} />
            </div>
          </div>
          <div className={styles.sideRight}>
            <div className={styles.box}>
              <div className={styles.productTitle}>
                <h3>{nameProduct}</h3>
              </div>
              <div className={styles.overallRating}>
                <FaStar color="darkorange" />
                <FaStar color="darkorange" />
                <FaStar color="darkorange" />
                <FaStar color="darkorange" />
                <FaStarHalfAlt color="darkorange" />
              </div>
              <div className={styles.bestSeller}>
                <span>MAIS VENDIDO</span> + de 8.000 vendidos
              </div>
              <div className={styles.promotion}>
                De: {"R$ " + oldValueProduct}
              </div>
              <div className={styles.value}>
                Por: <br />
                <span>{"R$ " + valueProduct}</span>
              </div>
              <div className={styles.paymentMethods}>
                <img src="/formaPagamentos.png" />
              </div>
              <div className={styles.btn}>
                <button>COMPRAR</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.safeBuy}>
          <div className={styles.safeBuyBox}>
            <div className={styles.iconSafeBuy}>
              <img src="/carrinhoSeguro.png" />
            </div>
            <div className={styles.textSafeBuy}>
              Compra <span> Segura</span>
            </div>
          </div>
          <div className={styles.safeBuyBox}>
            <div className={styles.iconSafeBuy}>
              <img src="/certificadoGarantia.png" />
            </div>
            <div className={styles.textSafeBuy}>
              Sete dias de <span> Garantia</span>
            </div>
          </div>
          <div className={styles.safeBuyBox}>
            <div className={styles.iconSafeBuy}>
              <img src="/satisfacaoCliente.png" />
            </div>
            <div className={styles.textSafeBuy}>
              Satisfação <span> Garantida</span>
            </div>
          </div>
          <div className={styles.safeBuyBox}>
            <div className={styles.iconSafeBuy}>
              <img src="/privacidade.png" />
            </div>
            <div className={styles.textSafeBuy}>
              Privacidade <span> Protegida</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
