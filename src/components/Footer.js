import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Footer = () => {
    return (
        <FooterContainer>
            
            <FooterLinksWrapper>
                
                <FooterDesc>
                    <h1>Pinheiro</h1>
                    <p>Lorem Ipsum</p>
                </FooterDesc>
                
                <FooterLinkItems>
                    <FooterLinkTitle>Entre em contato</FooterLinkTitle>
                    <FooterLink to="/about">Contato</FooterLink>
                    <FooterLink to="/">Endereço</FooterLink>
                    <FooterLink to="/">Endereço</FooterLink>
                    <FooterLink to="/">Endereço</FooterLink>
                </FooterLinkItems>
            
            </FooterLinksWrapper>
                
            <FooterLinksWrapper>

                <FooterLinkItems>
                    <FooterLinkTitle>Mídias Sociais</FooterLinkTitle>
                    <FooterLink to="/about">Contato</FooterLink>
                    <FooterLink to="/">Endereço</FooterLink>
                    <FooterLink to="/">Endereço</FooterLink>
                    <FooterLink to="/">Endereço</FooterLink>
                </FooterLinkItems>

            </FooterLinksWrapper>
        </FooterContainer>
    )
}

export default Footer


const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1100px) /2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #fff;
    background: rgb(22,40,54);
`
const FooterDesc = styled.div`
    padding: 0 2rem;

    h1 {
        margin-bottom: 3rem;
        color: rgb(215,187,161);
    }

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`

const FooterLinksWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat (2, 1fr);

    @media screen and (max-width: 820px) {
        grid-template-columns: 1fr;

    }
`

const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`
const FooterLinkTitle = styled.h2`
    font-size: 18px;
    margin-bottom: 16px;
`
const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 16px;
    color: #fff;

    &:hover {
        color: rgb(215,187,161);
        transition: 0.3s ease-out;        
    }
`