import React from 'react'
import styled from 'styled-components'
import "@fontsource/martel"
import { GiInjustice, GiHouse } from 'react-icons/gi'
import Img01 from '../assets/images/image-01.jpg'
import Img02 from '../assets/images/image-02.jpg'
import Img03 from '../assets/images/image-03.jpg'
import Img04 from '../assets/images/image-04.jpg'

const Cards = () => {

    return (
        <ProductsContainer>
            <ProductsHeading>Áreas de Atuação</ProductsHeading>
            
            <ProductWrapper>

                <ProductCard>
                    <ImgCard src={Img01} />
                    <ProductInfo>
                    <TextWrap>
                        <House />
                        <ProductTitle>Direito de Família</ProductTitle>
                    </TextWrap>
                    </ProductInfo>
                </ProductCard>
                                
                <ProductCard>
                    <ImgCard src={Img02} />
                    <ProductInfo>
                    <TextWrap>
                        <Court />
                        <ProductTitle>Tribunais Superiores</ProductTitle>
                    </TextWrap>
                    </ProductInfo>
                </ProductCard>

                <ProductCard>
                    <ImgCard src={Img03} />
                    <ProductInfo>
                    <TextWrap>
                        <Court />
                        <ProductTitle>Empresarial</ProductTitle>
                    </TextWrap>
                    </ProductInfo>
                </ProductCard>

                <ProductCard>
                    <ImgCard src={Img04} />
                    <ProductInfo>
                    <TextWrap>
                        <Court />
                        <ProductTitle>Poder Legislativo</ProductTitle>
                    </TextWrap>
                    </ProductInfo>
                </ProductCard>
                

            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Cards

const ProductsContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((10vw - 1300px) /2);
    color: #fff;
`

const ProductsHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    font-family: "Martel", serif;
    font-weight: 600;
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
`

const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 0 1rem;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 868px) {
        grid-template-columns: 1fr;
    }
`

const ProductCard = styled.div`
    line-height: 2;
    width: 100%;
    height: 500px;
    position: relative;
    border-radius: 10px;
    transition: 0.2 ease;
`
const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.2rem;

    @media screen and (max-width: 280px) {
        padding: 0.1rem;
    }
`
const ProductTitle = styled.div`
    font-size: clamp(1.4rem, 5vw, 1.6rem);
    margin-top: 5px;
    margin-left: 0.5rem;

`
const TextWrap = styled.div`
    display:flex;
    align-items: center;
    position: absolute;
    top: 430px;
`

const House = styled(GiHouse)`
    font-size: clamp(1.2rem, 5vw, 3rem);
    margin-left: 1rem;
`
const Court = styled(GiInjustice)`
    font-size: clamp(1.2rem, 5vw, 3rem);
    margin-left: 1rem;
`

const ImgCard = styled.img`
    height: 100%;
    position: relative;
    overflow: hidden;
    max-width: 100%;
    border-radius: 10px;
    filter: brightness(70%);
    transition: 0.4 cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
        filter: brightness(100%);
    }
`