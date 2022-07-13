"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credits = void 0;
class Credits {
    constructor(credits) {
        this.value = credits;
        return this;
    }
    fund(creds) {
        if (creds > 0) {
            this.spend(Math.abs(creds));
            return;
        }
        this.value += creds;
    }
    spend(creds) {
        this.value -= creds;
    }
}
exports.Credits = Credits;
