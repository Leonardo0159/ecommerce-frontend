import styles from "./ProductsNews.module.css";

export const ProductsNews = () => {
  return (
    <div className={styles.productsNews}>
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>NOVIDADES</h2>
            </div>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <div className={styles.imageProduct}>
                        <img src="/CamisaVolcom.png" />
                    </div>
                    <div className={styles.nameProduct}>
                        <h3>Camiseta Volcom</h3>
                    </div>
                    <div className={styles.valueProduct}>
                        <h3>R$119,90</h3>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.imageProduct}>
                        <img src="/CamisaVolcom.png" />
                    </div>
                    <div className={styles.nameProduct}>
                        <h3>Camiseta Volcom</h3>
                    </div>
                    <div className={styles.valueProduct}>
                        <h3>R$119,90</h3>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.imageProduct}>
                        <img src="/CamisaVolcom.png" />
                    </div>
                    <div className={styles.nameProduct}>
                        <h3>Camiseta Volcom</h3>
                    </div>
                    <div className={styles.valueProduct}>
                        <h3>R$119,90</h3>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.imageProduct}>
                        <img src="/CamisaVolcom.png" />
                    </div>
                    <div className={styles.nameProduct}>
                        <h3>Camiseta Volcom</h3>
                    </div>
                    <div className={styles.valueProduct}>
                        <h3>R$119,90</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};
