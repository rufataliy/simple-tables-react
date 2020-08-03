import { Options } from "../models";

export const options_proper: Options<any> = {
    cellOptions: {
        name: { displayName: "First name" },
        city: { displayName: "Location" },
        age: { displayName: "Age" },
        car: { displayName: "Transportation" }
    }
}

export const options_broken = {
    wrongProp: {
        nothinghere: ""
    }
}
