import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { menuData } from '../data/MenuData'
import { Button } from "./Button"
import LogoSm from "../assets/images/logosm.png"

const Header = () => {
  return (
    <Nav>
      <NavLogo>
        <NavImg src={LogoSm} />
      </NavLogo>
      
      <Bars />
      <NavMenu>
        {menuData.map((item, index) => (
            <NavLink to={item.link} key={index}>
              {item.title}
            </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" to="/contato">Contato</Button>
      </NavBtn>
    </Nav>
  )
}


export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`
const NavLink = styled(Link)`
  color: #fff;
  font-size: 18px;
  display:flex;
  align-items: center;
  text-decoration:none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.3s !important;

  &:hover {
    background: rgb(22,40,54);
    border-radius: 5px;
    transform: translateY(-2px);
  }
`
  const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
      display:block;
      position:absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 75%);
      font-size: 1.8rem;
      cursor: pointer;
    }
  `
  const NavMenu = styled.div`
    display:flex;
    align-items: center;

    @media screen and (max-width: 768px) {
      display: none;
    }
  `
  const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
      display:none;
    }
  `
  const NavImg = styled.img`
    position: relative;
    cursor: pointer;
  `

  const NavLogo = styled.div`
    display: flex;
    align-items: center;
    margin-left: 24px;
  `
