"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patients_1 = __importDefault(require("../../data/patients"));
const uuid_1 = require("uuid");
const getPatients = () => {
    return patients_1.default;
};
const findPatientById = (id) => {
    const patient = patients_1.default.find(d => d.id === id);
    return patient;
};
const getNonSensitivePatients = () => {
    return patients_1.default.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
        entries
    }));
};
const addPatient = (patient) => {
    const newPatient = Object.assign({ 
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        id: String((0, uuid_1.v1)()) }, patient);
    patients_1.default.push(newPatient);
    return newPatient;
};
const addEntry = (id, entry) => {
    const patientIndex = patients_1.default.findIndex(d => d.id === id);
    if (patientIndex === -1) {
        throw new Error("Patient does not exist");
    }
    const newEntry = Object.assign({ 
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        id: String((0, uuid_1.v1)()) }, entry);
    patients_1.default[patientIndex].entries.push(newEntry);
    return newEntry;
};
exports.default = {
    getPatients,
    getNonSensitivePatients,
    addPatient,
    findPatientById,
    addEntry
};
