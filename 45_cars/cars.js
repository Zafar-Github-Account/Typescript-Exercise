"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInfo(manufacturer, modelName, ...extraOption) {
    const carInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOption));
    return carInfo;
}
;
let answere = storeCarInfo("Honda", "Civic", { color: 'blank' }, { features: ['navigation', 'power window'] });
console.log(answere);
