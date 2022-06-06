import styled from "styled-components";

// Variables:
const titlePadding = 20;

// Themes:
export const theme = {
    main: 'mediumseagreen',
    secondary: 'gold',
    sizeLg: '18px'
};
export const invertTheme = ({ main, secondary }) => ({
    main: secondary,
    secondary: main
  });
  
// Styles:
export const Title = styled.h1`
    background-color: ${props => props.theme.main};
    color: ${props => props.theme.secondary};
    padding: ${titlePadding/2}px; //10px
`;

export const Th = styled.th`
    background-color: ${props => props.theme.main};
    color: ${props => props.theme.secondary};
    font-size: ${props => props.theme.sizeLg};
    padding: 10px;
`;