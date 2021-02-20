import React, { Component, useState, useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import './Promocao.css'

export default function Promocao() {


    const [inputPromocoes, setInputPromocoes] = useState(
        [
            { id: 1, nome: "Pão", valor: 200, qtd: 3 },

            { id: 2, nome: "Leite", valor: 300, qtd: 5 },

            { id: 4, nome: "Manteiga", valor: 600, qtd: 4 }  ,
        ]
    );


    return (
        <Container id="promo">
          
        </Container>

    )
}