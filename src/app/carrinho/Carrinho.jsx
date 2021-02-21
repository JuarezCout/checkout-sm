import React, { Component, useState, useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap'

import 'font-awesome/css/font-awesome.min.css'
import './Carrinho.css'

export default function Carrinho({ stripeTkon }) {

    const produtos = [
        { id: 0, nome: "Ovo", valor: 50 },
        { id: 1, nome: "Pão", valor: 200 },
        { id: 2, nome: "Leite", valor: 300 },
        { id: 3, nome: "Açúcar", valor: 500 },
        { id: 4, nome: "Manteiga", valor: 600 },
        { id: 5, nome: "Suco", valor: 1000 },
        { id: 6, nome: "Arroz", valor: 450 },
        { id: 7, nome: "Feijão", valor: 670 },
        { id: 8, nome: "Macarrão", valor: 350 },
        { id: 9, nome: "Detergente", valor: 100 },
        { id: 10, nome: "Bombril", valor: 400 },
    ]

    const promocoes = [
        { id: 0, produtoId: 1, desconto: 10 },
        { id: 1, produtoId: 5, desconto: 15 },
        { id: 2, produtoId: 3, desconto: 20 }
    ]

    const [inputCarrinho, setInputCarrinho] = useState(
        [

        ]
    );

    const [inputCheckout, setInputCheckout] = useState(
        [

        ]
    );

    /*      useEffect(() => {
            console.log(document.getElementById("idProduto").value)
        }, [document.getElementById("idProduto").value])  */

    function changeId(value) {
        console.log(value)
    }

    //funcao para contar a quantidade de produtos no carrinho
    function contTotalProdutos() {
        let cont = 0;
        for (let index = 0; index < inputCarrinho.length; index++) {
            cont = cont + inputCarrinho[index].qtd;
        }
        return cont;
    }

    //funcao para adicionar zeros à direita
    function addZeros(num) {
        const dec = toString(num).split('.')[1]
        const len = dec && dec.length > 2 ? dec.length : 2
        return Number(num).toFixed(len)
    }

    //funcoes para CRUD dos produtos no carrinho
    function addProdutoCarrinho(id) {
        let values = [...inputCarrinho];
        let desc = 0;

        for (let index = 0; index < inputCarrinho.length; index++) {
            if (id === values[index].id) {
                values[index].qtd++
                setInputCarrinho(values)
                return;
            }
        }
        for (let index = 0; index < promocoes.length; index++) {
            if (promocoes[index].produtoId == id) {
                desc = promocoes[index].desconto;
            }
        }
        values.push({ id: id, nome: produtos[id].nome, valor: produtos[id].valor, desconto: desc, qtd: 1 });
        setInputCarrinho(values)
    }


    function remProdutoCarrinho(id) {
        let values = [...inputCarrinho];

        for (let index = 0; index < inputCarrinho.length; index++) {
            if (id === values[index].id) {
                values[index].qtd--
                if (values[index].qtd === 0) {
                    values.splice(index, 1)
                }
                setInputCarrinho(values)
                return;
            }
        }
    }


    function acresProdutoCarrinho(id) {
        let values = [...inputCarrinho];

        for (let index = 0; index < inputCarrinho.length; index++) {
            if (id === values[index].id) {
                values[index].qtd++
                setInputCarrinho(values)
                return;
            }
        }
    }

    //funcao para realizar soma total mostrando descontos aplicados
    function fazerCheckout() {
        /*      if (document.getElementById('checkout').style.display === "block") {
                 document.getElementById('checkout').style.display = "none";
             } */
        let somaTotal = 0, somaDesconto = 0, somaPagar = 0;
        let valor, qtd, desc = 0;

        document.getElementById('checkout').style.display = "block";

        for (let index = 0; index < inputCarrinho.length; index++) {
            valor = inputCarrinho[index].valor;
            qtd = inputCarrinho[index].qtd;
            desc = inputCarrinho[index].desconto;

            somaTotal = somaTotal + (valor * qtd);
            somaDesconto = somaDesconto + ((somaTotal * desc) / 100);
        }
        somaPagar = addZeros((somaTotal-somaDesconto) / 100);
        somaTotal = addZeros(somaTotal / 100);
        somaDesconto = addZeros(somaDesconto / 100);
        setInputCheckout([{ somaTotal: somaTotal, somaDesconto: somaDesconto, somaPagar: somaPagar }])

    }


    return (
        <Container id="page">
            <div className="row">
                <div className="col-4">
                    <h3>ID do Produto</h3>
                    <form className="card p-2">
                        <div className="input-group">
                            <input type="text" className="form-control" id="idProduto" ></input>
                            <div className="input-group-append">
                                <button className="btn btn-secondary" onClick={e => addProdutoCarrinho(document.getElementById("idProduto").value)}>Adicionar</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span >Carrinho</span>
                        <span className="badge badge-secondary badge-pill">{contTotalProdutos()}</span>
                    </h4>

                    <table className="fl-table">
                        <thead>
                            <tr>
                                <th width="60%">Nome</th>
                                <th width="20%">Qtd</th>
                                <th width="10%">Desc</th>
                                <th width="10%">Valor(R$)</th>
                            </tr>
                        </thead>
                        <tbody>

                            {inputCarrinho && inputCarrinho.map((produto, index) => (
                                <tr>
                                    <td width="60%">
                                        <h6 className="my-0">{produto.nome}</h6>
                                    </td>
                                    <td width="20%">
                                        <i className="fa fa-trash" onClick={() => remProdutoCarrinho(produto.id)}></i>
                                        <span className="text-muted">{produto.qtd}</span>
                                        <i className="fa fa-plus" onClick={() => acresProdutoCarrinho(produto.id)}></i>
                                    </td>
                                    <td width="10%">
                                        <span style={{ color: 'red' }}>{produto.desconto}%</span>
                                    </td>
                                    <td width="10%">
                                        <span className="text-muted">{addZeros((produto.valor * produto.qtd * ((100 - produto.desconto) / 100)) / 100)}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <br />
                    <br />
                    <button className="btn btn-success" onClick={() => fazerCheckout()}>Checkout</button>
                    <br />

                    <hr />

                    <div id="checkout" class="answer_list" >
                        <table className="fl-table">
                            <thead>
                                <tr>
                                    <th width="33%">Valor Total</th>
                                    <th width="33%">Valor de Desconto</th>
                                    <th width="33%">Valor a Pagar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inputCheckout && inputCheckout.map((checkout, index) => (
                                    <tr>
                                        <td width="33%">
                                            {checkout.somaTotal}
                                        </td>
                                        <td width="33%" style={{ color: 'red' }}>
                                            {checkout.somaDesconto}
                                        </td>
                                        <td width="33%" style={{ color: 'green' }}>
                                            <strong>{checkout.somaPagar}</strong>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Container>

    )
}