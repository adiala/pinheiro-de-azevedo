import React from 'react'
import styled from 'styled-components'
import { CardItem } from './CardItem'

const Cards = () => {

    return (
        <ProductsContainer>
            <ProductsHeading>Áreas de Atuação</ProductsHeading>
            <ProductWrapper>
                <CardItem primary="true" round="true" to="/contato">Contato</CardItem>
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Cards

const ProductsContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((10vw - 1300px) /2);
    background: red;
    color: #fff;
`

const ProductsHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    font-family: "Martel", serif;
    font-weight: 700;
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
`

const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 0 2rem;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 868px) {
        grid-template-columns: 1fr;
    }
`