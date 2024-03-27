import styled from "styled-components"

const PanierCss = styled.li`
    h1 { 
        position: relative;
        top: 0;
    }
    .Panier {
        display: block;
        box-shadow: 5px 5px 5px 5px;
        padding: 1em;
        padding-top: 0em;
        position: absolute;
        background-color: white;
        top: 0;
        right: 12%;
        border: 1px solid black;
        width: 300px;
        z-index: 1000;
        & button {
            width: 90%;
        }
    }


`

export default PanierCss;