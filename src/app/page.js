"use client";
import { useState } from "react";


import styles from "./page.module.css";
import Topo from "@/components/Topo";
import Categoria from "@/components/Categoria";
import Campo_De_Busca from "@/components/Campo_De_Busca";
import Cards from "@/components/Cards";




export default function Home() {
  const [btn_clicado, set_btn_clicado] = useState(0);

  const [tipo_categoria, set_tipo_categoria] = useState("Entradas");

  const [novo_valor, set_novo_valor] = useState("")




  const onChang = (texto_digitado) => {
    ((texto_digitado.toString().length >= 3) &&
      set_tipo_categoria(texto_digitado));
    set_novo_valor(texto_digitado);
    set_btn_clicado(0)
  };

  return (
    <main className={styles.main}>

      <Topo />
      <section className={styles.container_principal} >
        <Categoria valor_digitado={set_novo_valor} resultado_btn={btn_clicado} estado_btn={set_btn_clicado} type_categoria={set_tipo_categoria} />

        <Campo_De_Busca valor_digitado={novo_valor} busca={onChang} />
        <Cards type_categoria={tipo_categoria.toString()} />
      </section>
    </main>
  );
}
