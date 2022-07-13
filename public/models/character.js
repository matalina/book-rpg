"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Character_instances, _Character_calculateChallengeLevel;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
const helpers_1 = require("../helpers");
const backpack_1 = require("./backpack");
const credits_1 = require("./credits");
class Character {
    constructor(name, cl, hp, sk, creds) {
        _Character_instances.add(this);
        this.name = name;
        this.challengeLevel = cl + 10;
        this.healthPoints = hp + 20;
        this.skills = sk;
        this.credits = new credits_1.Credits(creds * 100);
        this.backpack = new backpack_1.Backpack(8);
        return this;
    }
    hasSkill(name) {
        for (let i in this.skills) {
            if (this.skills[i].name === name) {
                return true;
            }
        }
        return false;
    }
    takeDamage(opponent, roll) {
        const ratio = (0, helpers_1.calculateCombatRatio)(__classPrivateFieldGet(this, _Character_instances, "m", _Character_calculateChallengeLevel).call(this), opponent);
        const damage = roll - ratio;
        if (damage >= 0)
            return;
        this.healthPoints -= damage;
        return this;
    }
}
exports.Character = Character;
_Character_instances = new WeakSet(), _Character_calculateChallengeLevel = function _Character_calculateChallengeLevel() {
    return this.challengeLevel;
};
