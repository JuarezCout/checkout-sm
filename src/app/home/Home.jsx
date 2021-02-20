import React from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'react-bootstrap'

export default function Home ({ stripeTkon }) {
    return  (
    <div id="home">
        <Row>
            <Col xs="7">
                <h2>Sistema de Carrinho e Checkout para Supermercados</h2>
            </Col>
            <Col xs="1">
                <br/>   
            </Col>
            <Col xs="3">
                <img src="https://m.gifmania.pt/Gifs-Animados-Objetos/Imagens-Animadas-Lar/Gif-Animados-Shopping-Carts/Shopping-Carts-90317.gif" 
                alt="Shop Run!"
                width="200px"
                height="200px"
                />
            </Col>
        </Row>
    </div>)
}