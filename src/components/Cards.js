import React from 'react'
import styled from 'styled-components'
import "@fontsource/martel"
import Img01 from '../assets/images/image-01.jpg'
import Img02 from '../assets/images/image-02.jpg'
import Img03 from '../assets/images/image-03.jpg'
import Img04 from '../assets/images/image-04.png'

const Cards = () => {

    return (
        <ProductsContainer>
            <ProductsHeading>Nossas áreas de atuação</ProductsHeading>
            
            <ProductWrapper>

                <ProductCard>
                    <ImgCard src={Img01} />
                    <ProductInfo>
                    <TextWrap>
                        <ProductTitle>Direito de Família</ProductTitle>
                    </TextWrap>
                    </ProductInfo>
                </ProductCard>
                                
                <ProductCard>
                    <ImgCard src={Img02} />
                    <ProductInfo>
                    <TextWrap>
                        <ProductTitle>Tribunais Superiores</ProductTitle>
                    </TextWrap>
                    </ProductInfo>
                </ProductCard>

                <ProductCard>
                    <ImgCard src={Img03} />
                    <ProductInfo>
                    <TextWrap>
                        <ProductTitle>Consultoria Jurídica Empresarial</ProductTitle>
                    </TextWrap>
                    </ProductInfo>
                </ProductCard>

                <ProductCard>
                    <ImgCard src={Img04} />
                    <ProductInfo>
                    <TextWrap>
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
    min-height: 90vh;
    padding: 5rem calc((10vw - 1300px) /2);
    background-color: #FAFAFA;
`

const ProductsHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    font-family: "Martel", serif;
    font-weight: 600;
    text-align: center;
    margin-bottom: 5rem;
    color: rgb(22,40,54);
`

const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 60px;
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
    line-height: 1.5;
    width: 350px;
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
    font-family: "Martel", serif;
    color: rgb(22,40,54);
    font-weight: 400;
    font-size: clamp(1rem, 3vw, 1.2rem);

`
const TextWrap = styled.div`
    display:flex;
    align-items: center;
    position: absolute;
    margin-top: 8px;
`

const ImgCard = styled.img`
    background-size: cover;
    position: fixed;
    height: 100%;
    max-width: 100%;
    min-width: 100%;
    min-height: 100%;
    position: relative;
    overflow: hidden;    
    border-radius: 10px;
    filter: brightness(70%);
    transition: 0.4 cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
        filter: brightness(100%);
    }
`