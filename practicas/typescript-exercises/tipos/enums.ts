enum AudioLevel {
    min=0,
    medium,
    medium2,
    max=10
}

let currentAudio = AudioLevel.medium2;
//let currentAudio = 0;//esto es permitido pero no se hace, es valido porque acepta números
//let currentAudio = "esto es permitido pero no se hace";
//let currentAudio:AudioLevel = "esto NO es permitido y no se hace";
//let currentAudio:AudioLevel = 0;//Es permitido pero no se hace
console.log(currentAudio)
console.log(AudioLevel)
