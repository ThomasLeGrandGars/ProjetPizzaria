import React from 'react';
import {Link, Route, useRouteMatch} from "react-router-dom";
import PizzaDetail from './PizzaDetail/PizzaDetail';
import Ingredient from '../Ingredients/Ingredient';

const PizzaSauvegarder = ({listePizza: pizzaSauver, ajoutPizza}) => {
    const rmatch = useRouteMatch('/pizza/:pizzaIndex');
    const pizzaIndex = rmatch && rmatch.params.pizzaIndex ? parseInt(rmatch.params.pizzaIndex) : -1;

    const ajouterLaPizza = (nom, prix) => {
        let ajout = {nom: nom, prix: prix, nbPizza: 1}
        ajoutPizza(ajout);
    }

    return (
        <div className="SauvegardeDesPizzas">
            <h1>LISTES DES PIZZAS</h1>

            <Route path="/pizza/:pizzaIndex">
                <PizzaDetail 
                    pizza={pizzaSauver}
                    ajoutLaPizza={ajouterLaPizza}
                />
            </Route>
            
            <div className="pizzaSauvegarder">
                {pizzaSauver.map((pizza, i) => (
                    <div>
                        <Link to={`/pizza/${i+1}`}>
                            <Ingredient key={pizza.nom}>
                                <h2 key={pizzaIndex}>{pizza.nom}</h2>
                                <div>
                                <img className="pizza" src="/image/pizzaNoTopping@0,3x.png" alt="pizza"/>
                                    {pizza.ingredients.map((ingredient) => (
                                        <img 
                                            key={ingredient.id} 
                                            className={ingredient.nom==='fromage'? 'fromage':'ingredient'} 
                                            src={ingredient.src}
                                        />
                                    ))}
                                </div>
                                <p>PRIX: {pizza.prix.toFixed(2)} $</p>
                            </Ingredient>
                        </Link>
                        
                        <button onClick={() => ajouterLaPizza(pizza.nom, pizza.prix)}>
                            <span>Ajouter au panier</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PizzaSauvegarder;