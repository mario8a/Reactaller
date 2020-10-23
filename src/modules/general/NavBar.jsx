import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavStyled = styled.nav`
   height: 3rem;
   background: #5b78c7;
   box-shadow: 0 1px 10px rgba(0,0,0,0.5);
   font-family: monospace;
`;

const ListStyled = styled.ul`
   display: flex;
   list-style: none;
   width: 50%;
   height: 100%;
   margin-left: auto;
   justify-content: space-around;
   align-items: center;

   li a {
      color: white;
      text-decoration: none;
      font-size: 20px;
      padding: .5rem 2rem;
      border-radius: 12px;
      transition: .2s ease;
      
   }
   a:hover {
      background: lightcoral;
   }
`

export const NavBar = () => {
   return (
      <NavStyled>
         <ListStyled>
            <li><Link href="#">Hello</Link></li>
            <li><Link  href="#">World</Link></li>
            <li><Link href="#">hey</Link></li>
         </ListStyled>
      </NavStyled>
   )
}
