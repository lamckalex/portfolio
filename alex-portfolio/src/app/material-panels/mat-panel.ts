export class MatPanel {
    title: string;
    subtitle: string;
    from: string;
    to: string;
    description: string[];

    constructor(
        title?: string,
        subtitle?: string,
        from?: string,
        to?: string,
        description?: string[],

    ) {
        this.title = title;
        this.subtitle = subtitle;
        this.from = from;
        this.to = to;
        this.description = description;
    }
}
