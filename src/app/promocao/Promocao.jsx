import React, { Component, useState, useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import './Promocao.css'

export default function Promocao() {

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


    const [inputPromocoes, setInputPromocoes] = useState(
        [

        ]
    );

    //funcao para puxar nome do produto de acordo com o ID
    function getNomeProduto(id) {
        for (let index = 0; index < produtos.length; index++) {
            if (produtos[index].id == id) {
                return produtos[index].nome
            }
        }
    }

    //funcoes para CRUD das Promocoes
    function addPromocao(produtoId, desconto) {
        let values = [...inputPromocoes];
        let id = values.length;

        values.push({ id: id, produtoId: produtoId, desconto: desconto });
        setInputPromocoes(values);

        document.getElementById("produto").value = '';
        document.getElementById("desconto").value = '';
    }

    function editPromocao(id) {
        let values = [...inputPromocoes];
        document.getElementById("produto").value = values[id].produtoId;
        document.getElementById("desconto").value = values[id].desconto;
        values.slice(id, 1);
        setInputPromocoes(values)
    }

    function remPromocao(id) {
        let values = [...inputPromocoes];
        values.slice(id, 1);
        setInputPromocoes(values)
    }

    return (
        <div className="container" id="promo">
            <div className="row">
                <h3>Manutenção de Promoções</h3>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="produto">Produto</label>
                    <input type="text" className="form-control" id="produto" required />
                </div>
                <div className="col">
                    <label htmlFor="desconto">% de Desconto</label>
                    <input type="text" className="form-control" id="desconto" required />
                </div>
                <div className="col">
                    <button className="btn btn-success" onClick={() => addPromocao(document.getElementById("produto").value, document.getElementById("desconto").value)}>Adicionar</button>
                </div>
            </div>

            <br />
            <br />
            <br />

            <div className="row">
                <div className="col">
                    <div id="descontos" class="answer_list" >
                        <table className="fl-table">
                            <thead>
                                <tr>
                                    <th>ID do Produto</th>
                                    <th >Produto com Desconto</th>
                                    <th >Desconto(%)</th>
                                    <th width="10%">Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inputPromocoes && inputPromocoes.map((promocao, index) => (
                                    <tr>
                                        <td>
                                            {promocao.produtoId}
                                        </td>
                                        <td >
                                            {getNomeProduto(promocao.produtoId)}
                                        </td>
                                        <td >
                                            {promocao.desconto}
                                        </td>
                                        <td width="10%">
                                            <i className="fa fa-pencil" onClick={() => editPromocao(index)}></i>
                                            <i className="fa fa-trash" onClick={() => remPromocao(index)}></i>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}