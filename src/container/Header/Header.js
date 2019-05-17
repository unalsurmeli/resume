import React, { Fragment } from 'react';

import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const MenuUl = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const MenuLi = styled.li`
  position: relative;
  list-style: none;
  height: 48px;
  display: inline-block;
  padding: 0 10px;
`;

const Link = styled.a`
  text-decoration: none;
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
    <Wrapper>
      <MenuUl>
        {menus.map((menu, index) => {
          return (
            <MenuLi key={`menu${index}`}>
              <Link href={menu.link}>{menu.name}</Link>
            </MenuLi>
          );
        })}
      </MenuUl>
    </Wrapper>
  )
};

export default Header;
