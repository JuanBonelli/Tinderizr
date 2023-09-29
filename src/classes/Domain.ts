import { LinkType } from "../enums/LinkType";
import { ProfileType } from "./ProfileType";
import { VariableField } from "./VariableField";

export class Domain {
    private name : string;
    private type : LinkType;
    private quantity : number;
    private profileTypes : ProfileType[];
    private variableFields: VariableField[];
}