
const drivers = ["Driver1", "Driver2", "Driver3", "Driver4"];


function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}


function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}


function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function selectDifferentDrivers(drivers, selectionFunction) {
  return selectionFunction(drivers);
}

// Test the functions
console.log(returnFirstTwoDrivers(drivers));
console.log(returnLastTwoDrivers(drivers)); 
console.log(fareDoubler(10)); 
console.log(fareTripler(10));
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); 
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); 
