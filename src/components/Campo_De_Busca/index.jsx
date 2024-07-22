
import Image from "next/image";
import lupa from "/public/assets/lupa.png";
import styles from "./Campo_De_Busca.module.css";


export default function Campo_De_Busca({ valor_digitado, busca }) {



    return (
        <section className={styles.container} >
            <Image className={styles.img} src={lupa} />
            <input className={styles.input}
                type="text"
                value={valor_digitado}
                placeholder="Pesquise aqui um dos pratos do nosso cardápio"
                onChange={(event) => busca(event.target.value)}
            />
        </section>
    );
};