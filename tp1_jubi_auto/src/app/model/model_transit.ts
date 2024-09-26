export interface VehicleTransaction {
  licensePlate: string;      // Plaque d'immatriculation
  date: string;              // Date de la transaction
  owner: string;             // Propriétaire
  amounts: number[];         // Liste des montants
}
