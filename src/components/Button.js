import styled from 'styled-components'
import {Link} from 'gatsby'
import "@fontsource/lato"

export const Button = styled(Link)`
    background: ${({primary}) => (primary ? 'rgb(215,187,161)' : '#077BF1')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '16px 40px' : '10px 32px')};
    color: rgb(22,40,54);
    font-size: ${({big}) => (big ? '20px' : '16px')};
    font-family: "Lato", sans-serif;
    font-weight: 400;
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    border-radius: ${({round}) => (round ? '50px' : 'none')};

    &:hover {
        background: ${({primary}) => (primary ? 'rgb(22,40,54)' : '#F26A2E')};
        color: #fff;
        transform: translateY(-2px);
    }

`