import React from 'react';
import styled from 'styled-components';

const NavbarSocialIcon = styled.a<{ color?: string }>`
  margin: 0;
  color: ${(props) => (props.color ? props.color : 'white')};
  font-size: 3rem;
  display: grid;
`;

export default NavbarSocialIcon;