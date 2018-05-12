import { ProjectBase, ProjectType } from '../projects-service/project-base';

const BRIEF_DESC = "A Unity top-down space shooter with a comedic twist.";
const FULL_DESC = "Alien Blaster full description placeholder.";
const TITLE = "Alien Blaster";
const PROJ_NAME = "alien-blaster";
const PROJ_LINK = "alien-blaster";
const PROJ_TYPE: ProjectType = ProjectType.Game;

export class AlienBlasterProject extends ProjectBase {
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

    public getProjType(): ProjectType
    {
        return PROJ_TYPE;
    }
}