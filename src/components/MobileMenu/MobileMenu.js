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
    <Overlay isOpen={isOpen} onDismiss={onDismiss} > 
      <Content aria-label="Menu Content">
      <DismissButton onClick={onDismiss}>
        <VisuallyHidden>Dismiss Menu</VisuallyHidden>
        <Icon id="close" strokeWidth={2}/>
      </DismissButton>
      <Filler/>
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
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
  width: 100%;

`;

const DismissButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Content = styled(DialogContent)`
  position: relative;
  width: 300px;
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
  gap: 16px;
  text-transform: uppercase;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-900);
  font-size: (18/16) + 'rem';
  line-height: (21.13 / 16) + 'rem';
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Filler = styled.div`
  flex: 1;
`;

const Footer = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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

