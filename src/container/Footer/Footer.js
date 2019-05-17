import React from 'react';

import styled, { css } from 'styled-components';

const FooterContainer = styled.header`
  width: 100%;
  position: relative;
  text-align: center; 
  background: #000000;
  padding: 20px 0;
`;

const MyUL = styled.ul`
  width: auto;
  text-align: center;
  margin: 0;
  padding:0; 
`;

const Item = styled.li`
  position: relative;
  list-style: none;
  display: inline-block;
  margin: 0;
  padding:0;
`;

const Link = styled.a`
  color: #ffffff !important;
  font-size: 24px;
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

const socialLinks = [
  {
    name: 'Instagram',
    link: 'https://instagram.com/iyzico'
  },
  {
    name: 'Facebook',
    link: 'https://facebook.com/iyzico'
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/iyzico'
  }
];

const Footer = () => {
  return (
    <FooterContainer>
      <MyUL>
        {socialLinks && socialLinks.map((socialLink, index) => (
          <Item key={`socialLink${index}`}>
            <Link href={socialLink.link}>
              {socialLink.name}
            </Link>
          </Item>
        ))}
      </MyUL>
    </FooterContainer>
  )
};

export default Footer;
