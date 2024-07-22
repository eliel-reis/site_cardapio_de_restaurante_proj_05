import styles from "./Topo.module.css";
import Image from "next/image";
import banner from "../../../public/assets/banner.png"

export default function Topo() {
    return (
        <header className={styles.header} >
            <section className={styles.container_imagem} >
                <Image className={styles.banner} src={banner} />
            </section>
            <h1 className={styles.h1} >
                RESTAURANT
            </h1>
            <p className={styles.p} >
                De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados.
            </p>


        </header>
    );
};