export class Panels {
    title: string;
    subtitle: string;
    from: string;
    to: string;
    description: string[];

    constructor(title, subtitle, from, to, description){
        this.title = title;
        this.subtitle = subtitle;
        this.from = from;
        this.to = to;
        this.description = description;
    }
}
