import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <SmallDeviceSuper/>
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">SaleSaleSaleSaleSale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <IconWrapper>
          <UnstyledButton>
          <VisuallyHidden>Open Cart</VisuallyHidden>
          <Icon id="shopping-bag" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton>
          <VisuallyHidden>Search</VisuallyHidden>
          <Icon id="search" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
          <VisuallyHidden>Menu</VisuallyHidden>
          <Icon id="menu" strokeWidth={2}/>
          </UnstyledButton>
        </IconWrapper>
        <Side id="right-side"/>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};


const IconWrapper = styled.div`
   display: none;

   @media ${QUERIES.tabletMax} {
      display: flex;
      justify-content: baseline;
      gap: 40px;
   }

   @media ${QUERIES.phoneMax} {
      gap: 24px;
   }
`;

const SmallDeviceSuper = styled.div`
  display: none;

  @media ${QUERIES.tabletMax} {
    display: revert;
    height: 4px;
    background-color: var(--color-gray-900);
  }

`;
const MainHeader = styled.div`
  overflow: scroll;
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);

  @media ${QUERIES.tabletMax} {
      justify-content: space-between;

      #right-side {
        display: none;
      }
   }

   @media ${QUERIES.phoneMax} {
      padding-left: 16px;
      padding-right: 16px;
   }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1.5rem,
    6vw - 2rem,
    4rem
  );
  margin: 0px 48px;

  @media ${QUERIES.tabletMax} {
      display: none;
   }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
