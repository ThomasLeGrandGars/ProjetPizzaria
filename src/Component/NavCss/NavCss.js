import styled from "styled-components"

const NavCss = styled.nav`
    ul{
        display:flex;
        margin-top: 2em;
        flex-direction: row;
        justify-content: center;
        list-style-type: none;
        & li{
            display: inline-block;
            margin-left: 2em;
            margin-right: 2em;
            & a{
                color: black;
                text-decoration: none;
                padding: 1em;
                border: 1px solid blue;
                border-radius: 10px;
            }
            & a:hover{
                background-color: #FF8D8D;
                border: 1px solid red;
                transition: background-color 300ms;
            }
        }


    }
    
`

export default NavCss;