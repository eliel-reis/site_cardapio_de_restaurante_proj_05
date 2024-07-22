"use client";
import { useState } from "react";

import entrada from "/public/Assets/entrada.png";
import massa from "/public/Assets/massa.png"
import carne from "/public/Assets/carne.png"
import bebidas from "/public/Assets/bebidas.png"
import salada from "/public/Assets/salada.png"
import sobremesa from "/public/Assets/sobremesa.png"
import Image from "next/image";

import styles from "./Categoria.module.css";



export default function Categoria({ valor_digitado, resultado_btn, estado_btn, type_categoria }) {



    function alterar_tipo(tipo) {
        if (tipo == "Entradas") {
            estado_btn(1)
            type_categoria(tipo);
            valor_digitado("")
        } else if (tipo == "Massas") {
            estado_btn(2)
            type_categoria(tipo);
            valor_digitado("")
        } else if (tipo == "Carnes") {
            estado_btn(3)
            type_categoria(tipo);
            valor_digitado("")
        } else if (tipo == "Bebidas") {
            estado_btn(4)
            type_categoria(tipo);
            valor_digitado("")
        } else if (tipo == "Saladas") {
            estado_btn(5)
            type_categoria(tipo);
            valor_digitado("")
        } else {
            estado_btn(6)
            type_categoria(tipo);
            valor_digitado("")
        };
    }





    return (
        <section className={styles.container} >
            <button onClick={() => alterar_tipo("Entradas")} className={(resultado_btn == 1) ? styles.btn_clicado : styles.btn} >
                <Image className={styles.img} src={entrada} />
                Entradas
            </button>
            <button onClick={() => alterar_tipo("Massas")} className={(resultado_btn == 2) ? styles.btn_clicado : styles.btn} >
                <Image className={styles.img} src={massa} />
                Massas
            </button>
            <button onClick={() => alterar_tipo("Carnes")} className={(resultado_btn == 3) ? styles.btn_clicado : styles.btn} >
                <Image className={styles.img} src={carne} />
                Carnes
            </button>
            <button onClick={() => alterar_tipo("Bebidas")} className={(resultado_btn == 4) ? styles.btn_clicado : styles.btn} >
                <Image className={styles.img} src={bebidas} />
                Bebidas
            </button>
            <button onClick={() => alterar_tipo("Saladas")} className={(resultado_btn == 5) ? styles.btn_clicado : styles.btn} >
                <Image className={styles.img} src={salada} />
                Saladas
            </button>
            <button onClick={() => alterar_tipo("Sobremesas")} className={(resultado_btn == 6) ? styles.btn_clicado : styles.btn} >
                <Image className={styles.img} src={sobremesa} />
                Sobremesas
            </button>
        </section>
    );
};