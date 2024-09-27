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

  trajet_max_revenue() {
    let max = 0
    let somme = 0
    let montant_max1 = 0;
    let montant_max2 = 0;
    let nom_trajet_max_1 = '';
    let nom_trajet_max_2 = ''
    let list_trajet: string[] = [];
    this.list_transaction.forEach(transaction => {
      if (!(list_trajet.includes(transaction.nom_trajet))) {
        list_trajet.push(transaction.nom_trajet);
      }
    })
    list_trajet.forEach(nom_trajet => {
      this.list_transaction.forEach(transact => {
        if (transact.nom_trajet == nom_trajet) {
          transact.list_montant.forEach(montant => {
            somme = somme + montant;
          })
        }
      })
      if (somme > max) {
        montant_max2 = max;
        nom_trajet_max_2 = nom_trajet_max_1;
        max = somme;
        nom_trajet_max_1 = nom_trajet;
      }
    })
    return [
      {
        "Libelle": nom_trajet_max_1,
        "Montant_obtenu" : max
      },
      {
        "Libelle": nom_trajet_max_2,
        "Montant_obtenu": montant_max2
      }
    ]
  }
  
  liste_chauffeur() {
    return this.list_vehicule;
  }
}
