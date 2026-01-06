var AudioLevel;
(function (AudioLevel) {
    AudioLevel[AudioLevel["min"] = 0] = "min";
    AudioLevel[AudioLevel["medium"] = 1] = "medium";
    AudioLevel[AudioLevel["medium2"] = 2] = "medium2";
    AudioLevel[AudioLevel["max"] = 10] = "max";
})(AudioLevel || (AudioLevel = {}));
let currentAudio = AudioLevel.medium2;
//let currentAudio = 0;//esto es permitido pero no se hace, es valido porque acepta números
//let currentAudio = "esto es permitido pero no se hace";
//let currentAudio:AudioLevel = "esto NO es permitido y no se hace";
//let currentAudio:AudioLevel = 0;//Es permitido pero no se hace
console.log(currentAudio);
console.log(AudioLevel);
export {};
//# sourceMappingURL=06-enums.js.map