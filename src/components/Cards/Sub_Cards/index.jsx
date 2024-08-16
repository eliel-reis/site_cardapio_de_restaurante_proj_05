"use client";
import { useState } from "react";

import styles from "./Sub_Cards.module.css";
import Image from "next/image";

export default function Sub_Cards({ h3, primeiro_p, segundo_p, preco, imagem }) {




    return (

        < section className={styles.card} >
            <picture className={styles.picture}>
                <Image className={styles.img} src={imagem} />
            </picture>
            <section className={styles.container_texto} >
                <h3>
                    {h3}
                </h3>
                <p className={styles.primeiro_p} >
                    {primeiro_p}
                </p>
                <p className={styles.segundo_p} >
                    {segundo_p}
                </p>

                <aside>
                    {"R$ " + (((preco.length == 3 || (preco.length == 4 && preco[1] != ".")) ? preco + "0" : (preco.length == 2) ? preco + ",00" : preco)).replace(".", ",")}
                </aside>
            </section>

        </section >

    );
};