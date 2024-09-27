import { Injectable } from '@angular/core';
import { Vehicule } from 'src/app/model/model_vehicule';
import { VehiculeTransaction } from 'src/app/model/model_transit';
import { transactions } from 'src/app/data/transit_data';
import { vehicules } from 'src/app/data/vehicule_data';
@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {
  list_vehicule = vehicules;
  list_transaction = transactions;
  constructor() { }

  nombre_total_vente_ticket(): number {
    let nbre = 0;
    this.list_transaction.forEach((transaction) => transaction.list_montant.forEach((montant) => nbre = nbre + montant))
    return nbre;
  }

  trajet_max_revenue(): number[] {
    let max = 0;
    let index_max = 0;
    let somme = 0;
    this.list_transaction.forEach((transaction, index) => {
      transaction.list_montant.forEach((montant) => somme = somme + montant)
      if (somme > max) {
        max = somme;
        index_max = index;
      }
      somme = 0;
    })
    return [index_max, somme];
  }
  
  liste_chauffeur() {
    return this.list_vehicule;
  }
}
