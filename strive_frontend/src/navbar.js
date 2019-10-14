import React, { useState } from 'react';
import styled from 'styled-components';


const NavBar = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;
const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
`;

const NavRight = styled.div`
  width: 33.333%;
  text-align: right;
  svg {
    margin-right: 20px;
  }
`;
const MenuLink = styled.button``
;

const Nav = ((props) => {
    const [active, setActive] = useState(false);
    return (
        <div>
            <NavBar>
                <NavHeader>
                    <NavLeft>Strive</NavLeft>
                    <NavRight>
                        <MenuLink href="/about">
                            <button onClick={() => setActive(!active)} href="/about">About</button>
                        </MenuLink>
                        <MenuLink href="/register">
                            <button onClick={() => setActive(!active)} href="/register">Register</button>
                        </MenuLink>
                        <MenuLink href="/login">
                            <button onClick={() => setActive(!active)} href="/register">Login</button>
                        </MenuLink>
                    </NavRight>
                </NavHeader>
            </NavBar>
        </div>
    );
})


export default Nav;