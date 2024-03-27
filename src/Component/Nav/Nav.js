import React from "react";
import { useLocation, Link } from "react-router-dom";
import NavCss from "../NavCss/NavCss";
import Panier from "../Panier/Panier";

const Nav = ({links, lePanier: panier, laCommande: commande, ajouterUneCommande}) => {
    const {pathname} = useLocation();

    const commander = (panier, prixTotal) => {
        ajouterUneCommande(panier, prixTotal);
    }
    return (
        <NavCss>
            <ul>
                {links.map(l => (
                    <li
                        className={pathname.startsWith(l.url) ? 'active': ''}
                        key={l.url}>
                        <Link to={l.url}>{l.name}</Link>
                    </li>
                ))}
                <Panier 
                    unPanier={panier} 
                    uneCommande={commande} 
                    ajoutDeCommande={commander}
                />
            </ul>
        </NavCss>
    )
}

export default Nav;