import { Domain } from "./Domain";
import { VariableFieldResponse } from "./VariableFieldResponse"

export class Profile {
    private name : string;
    private description : string;
    private image: string;
    private domain: Domain;
    private responses: VariableFieldResponse[];
}

