"use client";
import { useState } from "react";



import styles from "./Cards.module.css";
import Sub_Cards from "./Sub_Cards";

import { produtos } from "@/data/data_produtos";

export default function Cards({ type_categoria }) {


    const categoria = produtos.filter((entradas) => entradas.categoria == type_categoria);

    const buscar_categoria =
        produtos.filter((categoria) => categoria.nome.toLowerCase().includes(type_categoria.toLowerCase()) || categoria.categoria.toLowerCase().includes(type_categoria.toLowerCase()) || categoria.descricao.toLowerCase().includes(type_categoria.toLowerCase()))
        ;


    const [nova_key, set_nova_key] = useState(null);


    return (
        <section className={styles.container} >
            <h2  >
                Cardápio
            </h2>
            <section className={styles.container_cards} >

                {

                    (
                        type_categoria == "Entradas" ||
                        type_categoria == "Massas" ||
                        type_categoria == "Carnes" ||
                        type_categoria == "Bebidas" ||
                        type_categoria == "Saladas" ||
                        type_categoria == "Sobremesas"

                    ) ?
                        (categoria.map((produto) =>



                            < Sub_Cards
                                key={produto.id}
                                imagem={produto.imagem}
                                h3={produto.nome}
                                primeiro_p={produto.categoria}
                                segundo_p={produto.descricao}
                                preco={produto.preco.toString()}
                            />

                        )) :


                        (
                            (
                                type_categoria != "Entradas" ||
                                type_categoria != "Massas" ||
                                type_categoria != "Carnes" ||
                                type_categoria != "Bebidas" ||
                                type_categoria != "Saladas" ||
                                type_categoria != "Sobremesas")


                        ) &&
                        buscar_categoria.map((produto) =>

                            < Sub_Cards
                                key={produto.id}
                                imagem={produto.imagem}
                                h3={produto.nome}
                                primeiro_p={produto.categoria}
                                segundo_p={produto.descricao}
                                preco={produto.preco.toString()}
                            />

                        )

                }


            </section>
        </section>
    );
};