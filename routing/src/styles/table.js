import styled from "styled-components";

export const Table = styled.table`
    width: 600px;
    margin: 0 auto;
    border: 1px solid black;
    border-collapse: collapse;

    th,td{
        text-align:center;
        padding: 5px;
    }

    th{
        background-color: ${props => props.theme.main};
        color: white;
    }
    tr:nth-child(even) {background: ${props => props.theme.secondary}}
    tr:nth-child(odd) {background: #FFF}
`;