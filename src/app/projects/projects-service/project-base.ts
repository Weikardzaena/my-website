export enum ProjectType {
    Game,
    Other
}

export abstract class ProjectBase {
    public abstract getBriefDesc(): string;
    public abstract getFullDesc(): string;
    public abstract getTitle(): string;
    public abstract getProjName(): string;
    public abstract getRouterLink(): string;
    public abstract getProjType(): ProjectType;
}