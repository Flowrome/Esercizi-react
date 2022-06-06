import styled from "styled-components";

export const Card = styled.div`
    width: 300px;
    padding: 10px;
    float: left;
    border: 2px solid ${props => props.theme.main};
    border-radius: 5px;
    margin: 0 2% 1em;

    &:hover{
        box-shadow: 0 0 3px black;
        background-color: ${props => props.theme.secondary}
    }
`;