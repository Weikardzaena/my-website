import { ProjectBase } from '../projects-service/project-base';

const BRIEF_DESC = "A UE4 spaceship shoot 'em up game made with classmates.";
const FULL_DESC = "Virus Blaster full description placeholder.";
const TITLE = "Virus Blaster";
const PROJ_NAME = "virus-blaster";
const PROJ_LINK = "virus-blaster";

export class VirusBlasterProject extends ProjectBase {
    constructor() {
        super();
    }

    public getBriefDesc(): string
    {
        return BRIEF_DESC;
    }

    public getFullDesc(): string
    {
        return FULL_DESC;
    }

    public getTitle(): string
    {
        return TITLE;
    }

    public getProjName(): string
    {
        return PROJ_NAME;
    }

    public getRouterLink(): string
    {
        return PROJ_LINK;
    }
}