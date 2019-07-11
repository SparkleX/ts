import { myContainer } from "./inversify.config";
import { TYPES } from "./types";
import { Warrior } from "./interface";

const ninja = myContainer.get<Warrior>(TYPES.Warrior);
const ninja1 = myContainer.get<Warrior>(TYPES.Warrior);

console.debug(ninja==ninja1);
console.debug(ninja.fight());
console.debug(ninja.sneak());