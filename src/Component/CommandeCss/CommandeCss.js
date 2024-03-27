import styled from "styled-components"

const CommandeCss = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 1em;
    
    section {
        width: 18%;
        padding: 0.5em;
        border: 1px solid black;
        box-shadow: 5px 5px 5px 5px;
        & .prixTot {
            font-weight: bold;
        }
    }
`

export default CommandeCss;