import { MatCardObject } from "../material-cards/mat-card-object";
import { Panels } from "./panels";

export class Portfolio {
    name: string;
    description: string;
    projects: MatCardObject[];
    panels: Panels[];

    constructor(){

    }
}
