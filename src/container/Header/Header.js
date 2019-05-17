import React from 'react';

import styled, { css } from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  text-align: center; 
`;

const MyUl = styled.ul`
  min-height: 48px;
  width: auto;
  text-align: center;
  
  ${props => props.name && css`
    background-color: #95a5a6;
  `}
`;

const MenuItem = styled.li`
    position: relative;
    list-style: none;
    height: 48px;
    display: inline-block;
`;

const Link = styled.a`
  color: #ffffff;
  
  display: inline-block;
  padding: 8px 13px;
  line-height: 32px;
  text-decoration: none;
  text-align: left;
  color: #fff;
  -webkit-transition: color .2s ease-in-out;
  -moz-transition: color .2s ease-in-out;
  -o-transition: color .2s ease-in-out;
  -ms-transition: color .2s ease-in-out;
  transition: color .2s ease-in-out;
  
  &:hover {
    color: #F06000;
  }
`;

const menus = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Contact',
    link: '/contact'
  }
];

const Header = () => {
  return (
    <HeaderContainer>
      <MyUl name="1">
        {menus && menus.map((menu, index) => (
          <MenuItem key={'menu_' + index}>
            <Link href={menu.link}>
              {menu.name}
            </Link>
          </MenuItem>
        ))}
      </MyUl>
    </HeaderContainer>
  )
};

export default Header;
