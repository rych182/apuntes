var _a;
let nombre = `ric`;
console.log(`Mi nombre es ${nombre.toUpperCase()}.`);
// el signo de interrogracion es un "null check" que te lo pone typescript
console.log(((_a = nombre[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || `No hay dato`);
export {};
//# sourceMappingURL=strings.js.map