import './App.css';
import { React, useState } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import { useLocation } from 'react-router';
import Nav from './Component/Nav/Nav';
import Login from './Component/Login/Login';
import PizzaCommande from './Component/PizzaCommande/PizzaCommande';
import PizzaSauvegarder from './Component/PizzaSauvegarder/PizzaSauvegarder';
import Commande from './Component/Commande/Commande';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const App = props => {
   
   const tableauIngredient = [
      {id:0, nom: 'fromage', src:'/image/fromage@0,3x.png', cocher: false, prix: 2.50},
      {id:1, nom: 'peperoni', src:'/image/peperoni@0,3x.png', cocher: false, prix: 1.50},
      {id:2, nom: 'ananas', src:'/image/ananas@0,3x.png', cocher: false, prix: 1.00},
      {id:3, nom: 'bacon', src:'/image/bacon@0,3x.png', cocher: false, prix: 1.75},
      {id:4, nom: 'champignons', src:'/image/champignons@0,3x.png', cocher: false, prix: 1.50},
      {id:5, nom: 'crevette', src:'/image/crevette@0,3x.png', cocher: false, prix: 1.95},
      {id:6, nom: 'oignons', src:'/image/oignons@0,3x.png', cocher: false, prix: 1.25},
      {id:7, nom: 'oliveNoire', src:'/image/oliveNoire@0,3x.png', cocher: false, prix: 1.40},
      {id:8, nom: 'pimentVert', src:'/image/pimentVert@0,3x.png', cocher: false, prix: 1.60},
      {id:9, nom: 'poisson', src:'/image/poisson@0,3x.png', cocher: false, prix: 2.30},
      {id:10, nom: 'viande', src:'/image/viande@0,3x.png', cocher: false, prix: 1.95}
    ];

   const tableauPizza = [
      {nom:"La Homère",
      ingredients: [ 
         {id:0, nom: 'fromage', src:'/image/fromage@0,3x.png', cocher: false, prix: 2.50},
         {id:1, nom: 'peperoni', src:'/image/peperoni@0,3x.png', cocher: false, prix: 1.50},
         {id:3, nom: 'bacon', src:'/image/bacon@0,3x.png', cocher: false, prix: 1.75},
         {id:10, nom: 'viande', src:'/image/viande@0,3x.png', cocher: false, prix: 1.95}],
      prix: 17.70
      },
      {nom:"Le Crime de Guerre",
      ingredients: [
         {id:0, nom: 'fromage', src:'/image/fromage@0,3x.png', cocher: false, prix: 2.50},
         {id:2, nom: 'ananas', src:'/image/ananas@0,3x.png', cocher: false, prix: 1.00},
         {id:6, nom: 'oignons', src:'/image/oignons@0,3x.png', cocher: false, prix: 1.25},
         {id:9, nom: 'poisson', src:'/image/poisson@0,3x.png', cocher: false, prix: 2.30}],
      prix: 17.05
      },
      {nom:"La Classique",
      ingredients: [
         {id:0, nom: 'fromage', src:'/image/fromage@0,3x.png', cocher: false, prix: 2.50},
         {id:1, nom: 'peperoni', src:'/image/peperoni@0,3x.png', cocher: false, prix: 1.50}],
      prix: 14.00
      }
   ];

   const tableauPanier = [];

   const tableauCommande = [];
   
   const [nomUser, setNomUser] = useState('');

   const [pizzaSauver, setPizzaSauver] = useState(tableauPizza);

   const [panier, setPanier] = useState(tableauPanier);

   const [commande, setCommande] = useState(tableauCommande);

   const onUtilisateurSave = (nom) => {
      setNomUser(nom);
   };

   const savePizza = (laNouvPizza) => {
      setPizzaSauver(vieux => [...vieux, laNouvPizza]);
   };

   const ajouterPizza = (laPizza) => {
      
      const indexNom = panier.findIndex(({nom}) => nom === laPizza.nom);
      if(indexNom === -1)
      {
         setPanier(vieux => [...vieux, laPizza]);
      }
      else
      {
         const copiePizza = {...panier[indexNom]};
         copiePizza.nbPizza++;
         panier[indexNom] = copiePizza;
         setPanier([...panier]);
      }
   };

   const ajouterCommande = (lePanier, prixTotal) => {
      setCommande(vieille => [...vieille, {lePanier, prixTotal}]);
      setPanier([]);
   };

   let location = useLocation();
   return (
      <div>
          {nomUser.length > 0?
            <Nav links={[
               {name: 'Listes des pizzas', url: '/pizza'},
               {name: 'Créer une pizza', url: '/pizza/creer'},
               {name: 'Mes commandes', url: '/commande'}
               ]}
               lePanier={panier}
               laCommande={commande}
               ajouterUneCommande={ajouterCommande}
            />
            :
            ''
          }

         <h1>
            !!!!Pizzaria Paparia!!!!
         </h1>

         <main>
            {nomUser.length > 0? 
               <TransitionGroup>
                  <CSSTransition
                     key={location.pathname}
                     timeout={500}
                     classNames="page"
                  >
                     <Switch location={location}>            
                        <Route path='/pizza/creer'>
                           <div className="page">
                              <PizzaCommande 
                                 listeIng={tableauIngredient}
                                 listePizza={pizzaSauver}
                                 onSave={savePizza}
                              />
                           </div>
                        </Route>
                        <Route path='/pizza'>
                           <div className="page">
                              <PizzaSauvegarder 
                                 listePizza={pizzaSauver}
                                 ajoutPizza={ajouterPizza}
                              />
                           </div>
                        </Route>
                        <Route path='/commande'>
                           <div className="page">  
                              <Commande 
                                 listeCommande={commande}
                                 />
                           </div>
                        </Route>
                        <Redirect to='/pizza'/>               
                     </Switch>
                  </CSSTransition>
               </TransitionGroup>
               :
               <Switch>                  
                  <Route path='/login'>
                     <Login onSave={onUtilisateurSave}/>
                  </Route>
                  <Redirect to='/login'/>                  
               </Switch>
            }
         </main>
          
      </div>
    )
       
    
   
}

export default App;
