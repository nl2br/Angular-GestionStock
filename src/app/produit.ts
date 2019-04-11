import { Ingredient } from './ingredient'

export class Produit {
    nom: string
    fournisseur: string
    emailFournisseur: string
    ingredients: Array<Ingredient>
    description: string
    age: number
    conditionConservation: string
    prix: number

    constructor(nom: string, fournisseur: string, emailFournisseur: string, ingredients: Array<Ingredient>, description: string, age: number, conditionConservation: string, prix: number){
        this.nom = nom
        this.fournisseur = fournisseur
        this.emailFournisseur = emailFournisseur
        let temp = []
        ingredients.forEach( ingredient => {
            temp.push(ingredient)
        })
        this.ingredients = temp
        this.description = description
        this.age = age
        this.conditionConservation = conditionConservation
        this.prix = prix
    }

}

export const produits = [
    new Produit(
        "Mars",
        "Nestlé",
        "contact@nestle.com",
        [
            new Ingredient("faux chocolat"),
            new Ingredient("faux caramel")
        ],
        "barre chocolaté pas bonne",
        25,
        "au chaud dans la poche",
        4.90
    ),
    new Produit(
        "McBurger",
        "McDonald",
        "contact@mcdo.com",
        [
            new Ingredient("faux boeuf"),
            new Ingredient("fausse salade")
        ],
        "délicieux hamurger americain plein de ...",
        50,
        "au chaud",
        8.90
    ),
    new Produit(
        "Ravioli Buitoni",
        "Buitoni",
        "contact@buitoni.com",
        [
            new Ingredient("faux ravioli"),
            new Ingredient("fausse sauce")
        ],
        "ravioli en boite",
        50,
        "au placard",
        8.90
    )
]