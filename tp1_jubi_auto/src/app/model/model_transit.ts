export interface VehiculeTransaction {
  matricule: string;      // Plaque d'immatriculation
  date: string;              // Date de la transaction
  nom_trajet: string;             // Propriétaire
  list_montant: number[];         // Liste des montants
}
