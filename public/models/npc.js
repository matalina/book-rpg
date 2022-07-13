"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Npc = void 0;
class Npc {
    constructor(name, cl, hp, mod, type, details) {
        this.name = name;
        this.challengeLevel = cl;
        this.healthPoints = hp;
        this.modifierValue = mod;
        this.modifierType = type;
        this.details = details;
        return this;
    }
}
exports.Npc = Npc;
