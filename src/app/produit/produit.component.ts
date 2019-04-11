import { Component, OnInit } from '@angular/core';
import { Produit } from '../../app/produit';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProduitService } from '../../app/produit.service'

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: Array<Produit>
  isFormVisible: Boolean
  nameCtrl: FormControl
  descriptionCtrl: FormControl
  ageCtrl: FormControl
  fournisseurCtrl: FormControl
  produitForm: FormGroup

  constructor(private produitService: ProduitService, fb: FormBuilder) {
    this.nameCtrl = fb.control('', [Validators.required])
    this.ageCtrl = fb.control('', [Validators.required])
    this.fournisseurCtrl = fb.control('', [Validators.required])
    this.descriptionCtrl = fb.control('', [Validators.required])
    this.produitForm = fb.group({
      name: this.nameCtrl,
      description: this.descriptionCtrl,
      age: this.ageCtrl,
      fournisseur: this.fournisseurCtrl
    })
  }

  ngOnInit() {
    this.produits = this.produitService.list()
    this.isFormVisible = false
    console.log('this.produits',this.produits)
  }

  removeProduit(produit){
    this.produitService.remove(produit)
    this.produits = this.produitService.list()
  }

  formSubmit(){
    let { nom, fournisseur, description, age } = this.produitForm.value
    // on créer le produit
    let produit: Produit = new Produit(nom, fournisseur, "", [], description, age, "",0)
    // on envoie au service
    this.produitService.add(produit)
    this.isFormVisible = true
  }

}
