import React from "react";
import PanierCss from "../PanierCss/PanierCss";

const Panier = ({unPanier:panier, uneCommande: commande, ajoutDeCommande}) => {

    
    const isBoutonActif = (panier.length > 0);
    
    const ajouteCommande = (panier, prixTotal) => {
        ajoutDeCommande(panier, prixTotal);
    }
    
    let prixTotal = 0;

    for(let i=0; i<panier.length; i++)
    {
        let prixPizza = panier[i].nbPizza * panier[i].prix;
        prixTotal += prixPizza;
    }


    return (
        <PanierCss>
            <h1>Panier: </h1>
            <div className="Panier">
                {panier.map((pizza) => (
                    <div key={pizza.nom}>
                        <p>{pizza.nom} :{pizza.prix.toFixed(2)} $ X {pizza.nbPizza} = {(pizza.nbPizza * pizza.prix).toFixed(2)} $</p>
                    </div>
                ))}
                <p className="prixTotal">TOTAL: {prixTotal.toFixed(2)} $</p>
                <button onClick={() => ajouteCommande(panier, prixTotal)} disabled={!isBoutonActif}>
                    <span>Passer la Commande</span>
                </button>
            </div>
        </PanierCss>
    )
}

export default Panier;