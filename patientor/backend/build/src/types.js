"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryType = exports.HealthCheckRating = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
    Gender["Other"] = "other";
})(Gender || (exports.Gender = Gender = {}));
var HealthCheckRating;
(function (HealthCheckRating) {
    HealthCheckRating[HealthCheckRating["Healthy"] = 0] = "Healthy";
    HealthCheckRating[HealthCheckRating["LowRisk"] = 1] = "LowRisk";
    HealthCheckRating[HealthCheckRating["HighRisk"] = 2] = "HighRisk";
    HealthCheckRating[HealthCheckRating["CriticalRisk"] = 3] = "CriticalRisk";
})(HealthCheckRating || (exports.HealthCheckRating = HealthCheckRating = {}));
var EntryType;
(function (EntryType) {
    EntryType["HealthCheck"] = "HealthCheck";
    EntryType["Hospital"] = "Hospital";
    EntryType["OccupationalHealthcare"] = "OccupationalHealthcare";
})(EntryType || (exports.EntryType = EntryType = {}));
