"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCombatRatio = exports.slugify = void 0;
function slugify(value) {
    return value.toLowerCase().replace(/[^a-zA-Z0-9]+/, '-');
}
exports.slugify = slugify;
function calculateCombatRatio(pc, enemy) {
    return pc - enemy;
}
exports.calculateCombatRatio = calculateCombatRatio;
