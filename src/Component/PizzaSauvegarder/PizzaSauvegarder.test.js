import { render, fireEvent, act } from '@testing-library/react';
import PizzaSauvegarder from "./PizzaSauvegarder";

test('3 pizzas ou départ?', () => {
    //Arrange 
    const result = render(<PizzaSauvegarder location="/pizza" listePizza={[
        {nom:"La Homère", 
        ingredients: [ 
            {id:0, nom: 'fromage', src:'/image/fromage@0,3x.png', cocher: false},
            {id:1, nom: 'peperoni', src:'/image/peperoni@0,3x.png', cocher: false},
            {id:3, nom: 'bacon', src:'/image/bacon@0,3x.png', cocher: false},
            {id:10, nom: 'viande', src:'/image/viande@0,3x.png', cocher: false}]
        },
        {nom:"Le Crime de Guerre", 
        ingredients: [
            {id:0, nom: 'fromage', src:'/image/fromage@0,3x.png', cocher: false},
            {id:2, nom: 'ananas', src:'/image/ananas@0,3x.png', cocher: false},
            {id:6, nom: 'oignons', src:'/image/oignons@0,3x.png', cocher: false},
            {id:9, nom: 'poisson', src:'/image/poisson@0,3x.png', cocher: false}]
        },
        {nom:"La Classique", 
        ingredients: [
            {id:0, nom: 'fromage', src:'/image/fromage@0,3x.png', cocher: false},
            {id:1, nom: 'peperoni', src:'/image/peperoni@0,3x.png', cocher: false}]
        }
    ]}/>)
    //Act
    const figure = result.container.querySelectorAll('a');

    //Asset
    expect(figure).toEqual(3);
})