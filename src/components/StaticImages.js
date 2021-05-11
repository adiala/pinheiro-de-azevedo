import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { ImLocation } from 'react-icons/im'

function Family() {
  return <>
      <ProductCard>
        <StaticImage 
          src="../assets/images/image-01.jpg" alt="Família" />
        <ProductInfo>
          <TextWrap>
            <ImLocation />
            <ProductTitle>Direito de Família</ProductTitle>
          </TextWrap>
        </ProductInfo>
      </ProductCard>
    </>
}

function Tribunal() {
  return <>
    <ProductCard>
      <StaticImage src="../assets/images/image-02.jpg" alt="Tribunal" />
      <ProductInfo>
        <TextWrap>
          <ImLocation />
          <ProductTitle>Tribunais Superiores</ProductTitle>
        </TextWrap>
      </ProductInfo>
    </ProductCard>
  </>
}

export {
  Family,
  Tribunal
}

const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2 ease;
`
const ProductInfo = styled.div``
const TextWrap = styled.div``
const ProductTitle = styled.div``