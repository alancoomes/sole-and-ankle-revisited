/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content>
      <DismissButton onClick={onDismiss}>
        <Icon id="close" strokeWidth={2}/>
      </DismissButton>
      <Nav>
        <NavLink href="/sale">Sale</NavLink>
        <NavLink href="/new">New&nbsp;Releases</NavLink>
        <NavLink href="/men">Men</NavLink>
        <NavLink href="/women">Women</NavLink>
        <NavLink href="/kids">Kids</NavLink>
        <NavLink href="/collections">Collections</NavLink>
      </Nav>
      <Footer>
        <FooterLink href="/terms">Terms and Conditions</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
        <FooterLink href="/contact">Contact Us</FooterLink>
      </Footer>
      </Content>
    </Overlay>
  );
};

export default MobileMenu;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: hsla(220, 5%, 40%, 0.8);
  display: flex;
  justify-content: flex-end;
  width: 100%;

`;

const DismissButton = styled.button`
  align-self: flex-end;
  color: black;
  border: none;
  background-color: transparent;
`;

const Content = styled(DialogContent)`
  position: relative;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 32px;
  background-color: var(--color-white);
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
  text-transform: uppercase;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-900);
  font-size: (18/16) + 'rem';
  line-height: (21.13 / 16) + 'rem';
  font-weight: var(--weight-medium);

  &:hover {
    color: var(--color-secondary);
  }
`;

const Footer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-700);
  font-size: (14/16) + 'rem';
  line-height: (16.44 / 16) + 'rem';
  font-weight: var(--weight-normal);
  `;

