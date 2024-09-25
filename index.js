const drivers = (["Antonia", "Nuru", "Amari", "Mo"])
function returnFirstTwoDrivers() {
    return drivers.slice(0, 2);
}

function returnLastTwoDrivers() {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier
    }
}

function fareDoubler(fare) {
    return (fare * 2);
}

function fareTripler(fare) {
    return (fare * 3);
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return ["Antonia", "Nuru"]
}

function selectDifferentDrivers (drivers,returnLastTwoDrivers) {
    return ["Amari", "Mo"]
}
  
function selectDifferentDrivers (drivers, cb) {
    return cb(drivers)
}