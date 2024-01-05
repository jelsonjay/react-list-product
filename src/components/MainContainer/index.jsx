import styles from "./mainContainer.module.css";
import db from "../../data/db";
import { useState } from "react";

const MainContainer = () => {
  const [visible, setVisible] = useState(6);

  const showMoreProducts = () => {
    setVisible((prev) => prev + 3);
  };

  return (
    <>
     <h1 className={styles.title}>Product List</h1>
      <section className={styles.container}>
        {db.slice(0, visible).map((product) => (
          <div className={styles.card} key={product.id}>
            <div className={styles.cardImg}>
              <img src={product.image} alt={product.title} />
            </div>
            <div className={styles.content}>
              <h2>{product.title}</h2>
              <p>{product.desc}</p>
              <span>£{product.price} <del>£{parseInt(product.price) + 50}</del></span>
              <div className={styles.btn}>Add to cart</div>
            </div>

          </div>
        ))}
        <div className="btn-center">

        </div>


      </section>
     <div className="btn-center">
      <button onClick={showMoreProducts} className={styles.btnShowMore}>
        Show More Projects
      </button>
     </div>
    </>

  );
};


export default MainContainer;