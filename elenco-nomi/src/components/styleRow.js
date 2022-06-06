import styled, { css } from 'styled-components';

export const Tr = styled.tr`
    background-color: lightgreen;

    ${props => props.id%2 === 1 && css`
        background-color: lightyellow;
    `};

`;

export const Td = styled.td`
    padding:  10px;

    &:hover{
        background-color: ${props => props.theme.main};
        color: ${props => props.theme.secondary};
    }
`;

const global = [Tr, Td];
export default global;