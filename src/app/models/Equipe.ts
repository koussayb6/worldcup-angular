import {Joueur} from "./Joueur";
import {MembreStaff} from "./MembreStaff";

export class Equipe {
  equipeid: number;
  nom: string;
  surnom: string;
  classementmondial: number;
  confederation:string;
  couleurs: string;
  stadeprincipal: string;
  maillotdomicile: string;
  maillotexterieur: string;
  joueurs: [Joueur];
  membresStaff: [MembreStaff];
}
