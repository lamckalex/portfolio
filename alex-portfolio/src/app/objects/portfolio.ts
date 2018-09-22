import { MatPanel } from './mat-panel';
import { MatCardObject } from "../material-cards/mat-card-object";

export class Portfolio {
    name: string;
    description: string;
    linkedin: string;
    github: string;
    projects: MatCardObject[];
    panels: MatPanel[];

    constructor(
        name?: string,
        description?: string,
        linkedin?: string,
        github?: string,
        projects?: MatCardObject[],
        panels?: MatPanel[]
    ){
        this.name = name;
        this.description = description;
        this.projects = projects;
        this.panels = panels;
    }
}
