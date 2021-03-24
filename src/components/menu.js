import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default function Menu() {
  // Open PopUp
  const [isOpenForm, setIsOpenForm] = useState(false)
  const handleCloseForm = () => {
    setIsOpenForm(false)
  }
  function showForm() {
    setIsOpenForm(!isOpenForm)
  }

  let menu
  menu = (
    <Navigation>
      <NavItem to="/" activeClassName="active">
        Home
      </NavItem>
      <NavItem to="/contact" activeClassName="active">
        Contacts
      </NavItem>
    </Navigation>
  )
  return (
    <>
      <Desctop>{menu}</Desctop>

      <MobileButton onClick={showForm}>
        <svg width="26" height="26" viewBox="0 0 16 16" fill="#999">
          <path d="M0 3h16v1.6H0zM0 7.2h16v1.6H0zM0 11.4h16V13H0z" />
        </svg>
      </MobileButton>

      <MobileWrap open={isOpenForm}>
        <Bg onClick={handleCloseForm} />
        <MenuWrap>{menu}</MenuWrap>
      </MobileWrap>
    </>
  )
}

const Desctop = styled.div`
  display: none;
  @media only screen and (min-width: 960px) {
    display: block;
  }
  list-style: none;
  margin: 0;
`

const Navigation = styled.nav`
  display: flex;
  list-style: none;
  margin: 0;
  @media only screen and (max-width: 960px) {
    flex-direction: column;
  }
`

const NavItem = styled(Link)`
  margin-left: 35px;
  text-decoration: none !important;
  font-size: 16px;
  font-weight: 400;
  position: relative;
  &:hover {
    opacity: 0.8;
  }
  &.active:after {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: -8px;
    background-color: ${props => props.theme.primary};
    @media only screen and (max-width: 960px) {
      dispaly: none;
    }
  }
`

// Mobile
const MobileButton = styled.span`
  display: block;
  cursor: pointer;
  @media only screen and (min-width: 960px) {
    display: none;
  }
`

const MobileWrap = styled.div`
  display: ${props => (props.open ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  overflow-y: auto;
  @media only screen and (min-width: 960px) {
    display: none;
  }
`

const Bg = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 800;
`

const MenuWrap = styled.div`
  margin: 50px 20px 0 auto;
  padding: 15px 0 0;
  border-radius: 10px;
  background-color: #fff;
  width: 200px;
  position: relative;
  z-index: 900;
`
