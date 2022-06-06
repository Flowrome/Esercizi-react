import styled from "styled-components";

export const Nav = styled.nav`
    background-color: ${p => p.theme.main};

    ul{
        text-decoration: none;
        padding: 0;
    }
    
    li{
        display: inline-block;
    }
    a:link, a:visited{        
        text-align: center;
        display: inline-block;
        width: 100px;
        text-decoration: none;
        padding: 10px;
        color: white;
    }
    a:hover, a:active{
        background-color: ${p => p.theme.secondary};
        color: ${p => p.theme.main};
    }
`;