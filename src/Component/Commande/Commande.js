import CommandeCss from "../CommandeCss/CommandeCss";

const Commande = ({listeCommande: commande}) => {
    return (
        <CommandeCss>
            {commande.map((pizza, i) => (
                <section>
                    <h1>Commande #{i+1}</h1>
                    {pizza.lePanier.map((unePizza) => (
                        <p>{unePizza.nom} X {unePizza.nbPizza}</p>
                    ))}
                    <p className="prixTot">TOTAL: {pizza.prixTotal.toFixed(2)} $</p>
                </section>
            ))}
        </CommandeCss>
    )
}

export default Commande;