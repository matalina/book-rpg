"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
const backpack_1 = require("./backpack");
const credits_1 = require("./credits");
class Character {
    constructor(name, cl, hp, sk, creds) {
        this.name = name;
        this.challengeLevel = cl + 10;
        this.healthPoints = hp + 20;
        this.skills = sk;
        this.credits = new credits_1.Credits(creds * 100);
        this.backpack = new backpack_1.Backpack(8);
        return this;
    }
    combat(enemy) {
        return enemy;
    }
    challenge(npc) {
        return npc;
    }
}
exports.Character = Character;
