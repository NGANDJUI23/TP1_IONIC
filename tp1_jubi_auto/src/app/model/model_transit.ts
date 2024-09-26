export interface VehicleTransaction {
  matricule: string;      // Plaque d'immatriculation
  date: string;              // Date de la transaction
  nom_chauffeur: string;             // Propriétaire
  list_montant: number[];         // Liste des montants
}
