import { render, fireEvent, act } from '@testing-library/react';
import PizzaCommande from './PizzaCommande';

test('Bouton enregistrer non-clickable (nom vide, et rien de cliquer)', () => {
    //Arrange
    const result = render(<PizzaCommande listeIng={[
        {id:0, nom: 'fromage', src:'/image/fromage@0,3x.png', cocher: false},
        {id:1, nom: 'peperoni', src:'/image/peperoni@0,3x.png', cocher: false}
    ]}/>);
    
    //Act
    
    const text = result.container.querySelector('input[type="text"]');
    const nom = text.value;
    const button = result.container.querySelector('input[type="button"]');
    //Asset
    expect(nom).toHaveLength(0);
    expect(button).toBeDisabled;
});

test('Bouton enregistrer non-clickable (nom vide)', () => {
    //Arrange
    const result = render(<PizzaCommande listeIng={[
        {id:0, nom: 'fromage', src:'/image/fromage@0,3x.png', cocher: true},
        {id:1, nom: 'peperoni', src:'/image/peperoni@0,3x.png', cocher: false}
    ]}/>);
    
    //Act
    const text = result.container.querySelector('input[type="text"]');
    const nom = text.value;
    const button = result.container.querySelector('input[type="button"]');
    //Asset

    expect(button).toBeDisabled;
});

test('Bouton enregistrer clickable', () => {
    //Arrange
    const result = render(<PizzaCommande listeIng={[
        {id:0, nom: 'fromage', src:'/image/fromage@0,3x.png', cocher: true},
        {id:1, nom: 'peperoni', src:'/image/peperoni@0,3x.png', cocher: false}
    ]}/>);
    
    //Act
    const text = result.container.querySelector('input[type="text"]');
    const leNom = "Test";
    text.value = leNom;
    const button = result.container.querySelector('input[type="button"]');
    //Asset

    expect(button).not.toBeDisabled;
});

test('Formulaire se réinitialise', () => {
    const result = render(<PizzaCommande listeIng={[
        {id:0, nom: 'fromage', src:'/image/fromage@0,3x.png', cocher: true}
    ]}/>);
    
    //Act
    const text = result.container.querySelector('input[type="text"]');
    const leNom = "Test";
    text.value = leNom;
    console.log(text.value);
    const button = result.container.querySelector('input[id="Sauvegarde"]');
    // console.log(button);
    const checkbox = result.container.querySelector('input[type="checkbox"]');
    
    act(() => {
        fireEvent.click(button);
    })
    
    //Asset
    expect(checkbox.checked).toEqual(false);
    expect(leNom).toBe('');
});

test('Click sur Enregistrer amène à une autre page', () => {
    const result = render(<PizzaCommande location='/pizza/creer' listeIng={[
        {id:0, nom: 'fromage', src:'/image/fromage@0,3x.png', cocher: true}
    ]}/>);

    const text = result.container.querySelector('input[type="text"]');
    const leNom = "Test";
    text.value = leNom;
    const button = result.container.querySelector('input[id="Sauvegarde"]');

    act(() => {
        fireEvent.click(button);
    })


    expect(window.location.pathname).toEqual('/pizza');
});

test('Click sur Enregistrer ajoute une nouvelle pizza', () => {
    const result = render(<PizzaCommande
    listeIng={[
        {id:0, nom: 'fromage', src:'/image/fromage@0,3x.png', cocher: true}
    ]}
    />);
    

    const text = result.container.querySelector('input[type="text"]');
    const leNom = "Test";
    text.value = leNom;
    const button = result.container.querySelector('input[id="Sauvegarde"]');

    act(() => {
        fireEvent.click(button);
    })


    expect(result.enregistrerPizza()).toHaveBeenCalled();
});