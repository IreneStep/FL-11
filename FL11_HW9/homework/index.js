const getNumbers = string => {
  let array = string.split('');
  let newArray = [];
  let j = 0;
  for (let i = 0; i < array.length; i++) {
    array[i] = +array[i];
    if (!isNaN(array[i])) {
      newArray[j] = array[i];
      j++;
    }
  }
  return console.log(newArray);
};
getNumbers('string');

function findTypes() {
  let returnObject = {};
  for (let i = 0; i < arguments.length; i++) {
    let dataTypes = typeof arguments[i];
    if (returnObject.hasOwnProperty(dataTypes)) {
      returnObject[dataTypes] += 1;
    } else {
      returnObject[dataTypes] = 1;
    }
  }
  return console.log(returnObject);
}
findTypes(null, 'hello');

const executeforEach = (array, func) => {
  for (let i = 0; i < array.length; i++) {
    func(array[i]);
  }
};

function mapArray(array, func) {
  let someArray = [];
  executeforEach(array, function() {
    someArray.push(func());
  });
  return someArray;
}

function filterArray(array, func) {
  let someArray = [];
  executeforEach(array, function() {
    if (func()) {
      someArray.push();
    }
  });
  return someArray;
}

const showFormatDate = date => {
  let options = { month: 'short', day: '2-digit' };
  let formatDate = date.toLocaleString('en-us', options);
  let getFullYear = date.getFullYear();
  return console.log(`Date: ${formatDate} ${getFullYear}`);
};

const caConvertToDate = date => {
  return console.log(!isNaN(new Date(date)));
};

const daysBetween = (dateFirst, dateSecond) => {
  let different = Math.floor(dateFirst.getTime() - dateSecond.getTime());
  let thousand = 1000;
  let sixty = 60;
  let twentyFour = 24;
  let day = thousand * sixty * sixty * twentyFour;
  let days = Math.floor(different / day);
  if (days < 0) {
    days = -days;
  }
  return console.log(days);
};

const getAmountOfAdultPeople = data => {
  let fullAge = 180;
  return filterArray(data, function(person) {
    daysBetween(new Date(person.birthsday), new Date()) > fullAge;
  }).length;
};

const keys = object => {
  let arrayKeys = [];
  let j = 0;
  for (let i in object) {
    if (object.hasOwnProperty(i)) {
      arrayKeys[j] = i;
      j++;
    }
  }
  return console.log(arrayKeys);
};

keys({ keyone: 1, keytwoo: 2 });

const values = obj => {
  let arrayValues = [];
  let j = 0;
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      arrayValues[j] = obj[i];
      j++;
    }
  }
  return console.log(arrayValues);
};
values({ key: 4, ky: '9' });
