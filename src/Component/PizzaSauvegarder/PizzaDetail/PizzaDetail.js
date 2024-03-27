import React from 'react';
import {useParams} from 'react-router-dom';
import Ingredient from '../../Ingredients/Ingredient';

const PizzaDetail = ({pizza, ajoutLaPizza}) => {
    const params = useParams();
    const pizzaIndex = parseInt(params.pizzaIndex) - 1;
    const lesIngredients = pizza[pizzaIndex].ingredients;

    const ajouterLaPizza = (nom, prix) => {
        ajoutLaPizza(nom, prix);
    }

    return (
        <Ingredient>
            <section className="laPizza">
                <div className="PizzaDetaille">
                    <img className="pizza" src="/image/pizzaNoTopping@0,3x.png" alt="pizza"/>
                    {lesIngredients.map((ing) => (
                        <img 
                        key={ing.id} 
                        className={ing.nom==='fromage'? 'fromage': 'ingredient'} 
                        src={ing.src} alt='limage'
                        />
                        ))}
                </div>
            </section>
            <h2>{pizza[pizzaIndex].nom}</h2>
            <section className="Infos">
                <div className="prix">
                    <h2>Prix</h2>
                    <p>
                        {pizza[pizzaIndex].prix.toFixed(2)} $
                    </p>
                </div>
                <div className="lesIngredients">
                    <h2>Ingrédients</h2>
                    <ul>
                        {lesIngredients.map((ing) => (
                            <li>{ing.nom}</li>
                        ))}
                    </ul>
                </div>  
            </section>
            <button onClick={() => ajouterLaPizza(pizza[pizzaIndex].nom, pizza[pizzaIndex].prix)}>
                <span>Ajouter au panier</span>
            </button>
        </Ingredient>
    )
}

export default PizzaDetail; 