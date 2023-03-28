"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    let dateArr = dateString.split("/").map((element) => {
        return parseInt(element);
    });
    return new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);
};
exports.dateStringToDate = dateStringToDate;
// export const stringToNumber = ()
