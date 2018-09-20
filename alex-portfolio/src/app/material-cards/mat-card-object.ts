export class MatCardObject {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    skills: string[];

    constructor(
        title: string,
        subtitle: string,
        description: string,
        image?: string,
        skills?: string[]
    ) {
        this.title =title;
        this.subtitle =subtitle;
        this.description =description;
        this.image =image;
        this.skills = skills;
    }
}
