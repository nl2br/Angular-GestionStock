import { Injectable } from '@angular/core';
import { Produit, produits } from '../app/produit'

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  listProduits: Array<Produit> = produits

  constructor() { }

  list(){
    return this.listProduits
  }

  add(produit: Produit){
    this.listProduits.push(produit)
  }

  remove(produit: Produit){
    this.listProduits = this.listProduits.filter(item => item.nom !== produit.nom)
  }
}
