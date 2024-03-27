import { useState } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router";
import Ingredient from "../Ingredients/Ingredient";
const PRIX_DE_BASE = 10;

const PizzaCommande = ({listeIng: tableauIngredient, listePizza: pizzaSauver, onSave}) => {
  const history = useHistory();
  const [listeIng, setIngListe] = useState(tableauIngredient);

  const [nomPizza, setNomPizza] = useState("");

  const [messageErreur, setMessageErreur] = useState('');

  const isBoutonActif = (nomPizza.length > 0 && listeIng.some((ing) => {
    return ing.cocher;
  }));

  const ingredientHandler = (ing) => {
    return () => {
      ing.cocher = !ing.cocher;
      setIngListe([...listeIng]);
    }
  }

  //handler du nom de la pizza
  const nomPizzaHandler = (e) => {
    setNomPizza(e.target.value);
  }

  //Resette tout les ingredients ainsi que le nom de la pizza
  const annulerPizza = () => {
    setNomPizza("");
    setIngListe(listeIng.map((ing) => (
      {...ing, cocher: false}
    )));
  }

  const enregistrerPizza = () => {
    const indexNom = pizzaSauver.findIndex(({nom}) => nom === nomPizza);
    if(indexNom < 0)
    {
      annulerPizza();
      const ajout = {
        nom: nomPizza, 
        ingredients: listeIng.filter(ing => ing.cocher === true),
        prix: prixPizza
      };
      onSave(ajout);
      history.push("/pizza");
    }
    else {
      setMessageErreur('Ce nom existe déjà, trouver-en un autre!');
    }
  }

  let prixPizza = PRIX_DE_BASE;
  listeIng.forEach(element => {
    if(element.cocher){
      prixPizza += element.prix;
    }
  });
    
  return (
    <div className="App">
        <h1>CRÉER UNE PIZZA</h1>
        <div className="CreerLaPizza">
          <div className="displayInfos">
            {messageErreur && (
              <p className="messageErreur">{messageErreur}</p>
            )}
            <div>Nom de la Pizza<br/> <input id="nomPizza" type="text" value={nomPizza} onChange={nomPizzaHandler}/></div>
            <div id="listeDeCheck">
              {listeIng.map((ing) => (
                <div key={ing.id}>
                  <input type="checkbox" 
                    value={ing.nom} 
                    checked={ing.cocher} 
                    onChange={ingredientHandler(ing)}
                  />
                  <label>{ing.nom}</label>
                </div>
              ))}
            </div>
            <div className="prix">
              <p>{prixPizza.toFixed(2)} $</p>
            </div>
            <div className="Boutons">
              <input type="button" id="Sauvegarde" value="Enregistrer" onClick={enregistrerPizza} disabled={!isBoutonActif}/>
              <input type="button" value="Annuler" onClick={annulerPizza}/>
          </div>
          </div>
          <Ingredient as='div'>
            <div className="PizzaACommander">
                <img className="pizza" src="/image/pizzaNoTopping@0,3x.png" alt="pizza"/>
                {listeIng.map((ing) => (
                  ing.cocher && <img key={ing.id} className={ing.nom==='fromage'? 'fromage': 'ingredient'} src={ing.src} alt={ing.nom}/>
                ))}
            </div>  
          </Ingredient>
        </div>
      </div>
      
  );
};

export default PizzaCommande;