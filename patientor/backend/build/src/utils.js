"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewEntry = exports.toNewPatient = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
const types_1 = require("./types");
const uuid_1 = require("uuid");
const toNewPatient = (object) => {
    if (!object || typeof object !== 'object') {
        throw new Error('Incorrect or missing data');
    }
    if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object) {
        const newPatient = {
            name: parseString(object.name),
            dateOfBirth: parseDate(object.dateOfBirth),
            ssn: parseString(object.ssn),
            gender: parseGender(object.gender),
            occupation: parseString(object.occupation),
            entries: []
        };
        return newPatient;
    }
    throw new Error('Incorrect data: some fields are missing');
};
exports.toNewPatient = toNewPatient;
const isString = (text) => {
    return typeof text === 'string' || text instanceof String;
};
const parseString = (text) => {
    if (!text || !isString(text)) {
        throw new Error('Incorrect or missing text');
    }
    return text;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const parseDate = (date) => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
};
const isGender = (param) => {
    return Object.values(types_1.Gender).map(v => v.toString()).includes(param);
};
const parseGender = (gender) => {
    if (!isString(gender) || !isGender(gender)) {
        throw new Error('Incorrect gender: ' + gender);
    }
    return gender;
};
const isEntryType = (param) => {
    return Object.values(types_1.EntryType).includes(param);
};
const parseEntryType = (entryType) => {
    if (!entryType || !isEntryType(entryType)) {
        throw new Error("Entry type missing or incorrect format" + `${entryType}`);
    }
    return entryType;
};
const isRating = (param) => {
    return Object.values(types_1.HealthCheckRating).includes(param);
};
const parseRating = (rating) => {
    if (!rating || !isRating(rating)) {
        throw new Error("HealthCheckRating missing or incorrect value" + `${rating}`);
    }
    return rating;
};
const parseSickLeave = (leave) => {
    if (leave) {
        if (!isString(leave.startDate) ||
            !isString(leave.endDate) ||
            !isDate(leave.startDate) ||
            !isDate(leave.endDate)) {
            throw new Error("Provided sick leave is missing a value or has the wrong format." +
                `${leave.startDate} ${leave.endDate}`);
        }
        else {
            return { startDate: leave.startDate, endDate: leave.endDate };
        }
    }
    else {
        return undefined;
    }
};
const parseDischarge = (discharge) => {
    if (!discharge) {
        throw new Error("Discharge mus be provided.");
    }
    if (!discharge.date ||
        !discharge.criteria ||
        !isString(discharge.date) ||
        !isDate(discharge.date) ||
        !isString(discharge.criteria)) {
        throw new Error("Discharge must have both a date and a criteria. Both must be valid." +
            `${discharge.date} ${discharge.criteria}`);
    }
    return { date: discharge.date, criteria: discharge.criteria };
};
const parseDiagnosisCodes = (object) => {
    if (!object || typeof object !== 'object' || !('diagnosisCodes' in object)) {
        // we will just trust the data to be in correct form
        return [];
    }
    return object.diagnosisCodes;
};
const toNewEntry = (object) => {
    const baseEntry = {
        description: parseString(object.description),
        date: parseDate(object.date),
        specialist: parseString(object.specialist),
        type: parseEntryType(object.type),
        diagnosisCodes: parseDiagnosisCodes(object.diagnosisCodes),
    };
    switch (object.type) {
        case "HealthCheck":
            const newHealthCheck = Object.assign(Object.assign({}, baseEntry), { id: String((0, uuid_1.v1)()), type: "HealthCheck", healthCheckRating: parseRating(object.healthCheckRating) });
            return newHealthCheck;
        case "OccupationalHealthcare":
            const newOccupationalEntry = Object.assign(Object.assign({}, baseEntry), { id: String((0, uuid_1.v1)()), type: "OccupationalHealthcare", employerName: parseString(object.employer), sickLeave: parseSickLeave(object.sickLeave) });
            return newOccupationalEntry;
        case "Hospital":
            const newHospitalEntry = Object.assign(Object.assign({}, baseEntry), { id: String((0, uuid_1.v1)()), type: "Hospital", discharge: parseDischarge(object.discharge) });
            return newHospitalEntry;
        default:
            throw new Error("Please provide a valid entry type");
    }
};
exports.toNewEntry = toNewEntry;
