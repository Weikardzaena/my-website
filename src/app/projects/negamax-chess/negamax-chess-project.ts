import { ProjectBase } from '../projects-service/project-base';

const BRIEF_DESC = "A MonoGame implementation of a custom Negamax Chess AI.";
const FULL_DESC = "Negamax Chess full description placeholder.";
const TITLE = "Negamax Chess";
const PROJ_NAME = "negamax-chess";
const PROJ_LINK = "negamax-chess";

export class NegamaxChessProject extends ProjectBase {
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