export class Subscription {
  numSub!: number;
  startDate!: string; // Utilisez le type approprié pour les dates (peut-être string ou Date)
  endDate!: string; // Utilisez le type approprié pour les dates
  price!: number;
  typeSub!: TypeSubscription; // Assurez-vous que le type correspond au type d'énumération ou de chaîne approprié

  
}
export enum TypeSubscription {
  ANNUAL = 'ANNUAL',
  MONTHLY = 'MONTHLY',
  SEMESTRIEL = 'SEMESTRIEL'
}
