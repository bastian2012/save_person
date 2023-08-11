import React from 'react';
import Person from './person';

export default class Parent extends React.Component {

    render() { 
        const allPerson = [
            {
                nom: "Alice",
                age: 25,
                email: "alice@example.com",
                langue: "Français",
                pays: "France",
            },
            {
                nom: "Bob",
                age: 30,
                email: "bob@example.com",
                langue: "Anglais",
                pays: "États-Unis",
            },
            // Ajoutez d'autres objets personne ici...
            {
                nom: "Eva",
                age: 28,
                email: "eva@example.com",
                langue: "Espagnol",
                pays: "Espagne",
            },
        ];


        return (
            <>
                <h1>welcome to parent component</h1>
                 
                {allPerson.map(params => {
                    return (<Person nom={params.nom} age={params.age} pays={params.pays} langue={params.langue} />)
                })}
                

            </>
        )
    }


}