import styled from "styled-components"

const Ingredient = styled.figure`
    margin: 1em;
    display: inline-block;
    flex-direction: column;
    box-shadow: 5px 5px 5px 5px;
    
    div{
        display: inline-block;
        position: relative;
        width: 50%;
    }

    & div.PizzaDetaille{
        width: 100%;
    }

    div.PizzaACommander{
        width: 100%;
    }

    div.prix{
        & h2 {
            font-size: 2rem;
        }
        & p {
            font-size: 2rem;
        }
    }

    section {
        display: flex;
    }

    div.lesIngredients {
        & h2 {
            font-size: 2rem;
        }
        & ul {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            list-style-type: ">";
            & li {
                
            }
        }
    }

    .ingredient{
        position: absolute;
        width: 70%;
        top: 15%;
        bottom: 15%;
        left: 15%;
    }

    .fromage{
        position: absolute;
        width: 90%;
        top: 5%;
        bottom: 5%;
        left: 5%;
    }

    .pizza{
        width: 100%;
        left: 0;
    }
`
export default Ingredient;