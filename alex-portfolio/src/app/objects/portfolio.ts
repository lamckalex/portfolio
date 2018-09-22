import { MatPanel } from './mat-panel';
import { MatCardObject } from "../material-cards/mat-card-object";

export class Portfolio {
    name: string;
    description: string;
    linkedin: string;
    github: string;
    projects: MatCardObject[];
    experience: MatPanel[];
    education: MatPanel[];

    constructor(){
    }
}
