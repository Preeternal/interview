// Test tasks:

// all answers should be written to the tasks.js file.
// each task should be written in the format:
// ```
// function task_{task#} (arguments) {
//     return result (in specified type)
// }
// ```
// at the end of the file, we should have a default export section where we do the export of all tasks functions


// 1) need to do a transformation of the array with diff numbers [1  ... n] 
// - we need to reverse it without using the reverse method and return in format [n  ... 1]
// Arguments: array
// Result: array

function task_1(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
      result.push(arr[i]);
  }
  return result;
}

// 2) need to make a deep check of two arrays with the random count of items - that they have the same items. 
// The order of items and arrays length can be different. We could get all JS types here except Symbol.  
// We need to get a boolean type as a result
// Arguments: array1, array2 
// Result: boolean

function equals(a, b) {
  if (a === b) {
      return true;
  }
  if (a instanceof Date && b instanceof Date) {
      return a.getTime() === b.getTime();
  }
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) {
      return a === b;
  } else if (typeof a === 'object' && typeof b === 'object') {
      if (a.prototype !== b.prototype) return false;
      if (a instanceof Array && b instanceof Array) {
          if (a.length !== b.length) {
              return false;
          }
          const A = a.sort();
          const B = b.sort();
          return A.every((item, index) => equals(A[index], B[index]));
      } else if (typeof a === 'object' && typeof b === 'object') {
          const keysA = Object.keys(a);
          if (keysA.length !== Object.keys(b).length) {
              return false;
          }
          return keysA.every(key => {
              if (!b.hasOwnProperty(key)) {
                  return false;
              } else {
                  return equals(a[key], b[key]);
              }
          });
      }
  }
  return false;
}

function task_2(a, b) {
  if (a?.length !== b?.length) {
      return false;
  }
  const A = a.sort();
  const B = b.sort();
  return A.every((item, index) => equals(A[index], B[index]));
}

// 3) need to check the array with structure [ {id: (int), value: (any) } ]. 
// we should group it by id property and count the same value property types. 
// equal objects should be counted only 1 time. as response we should return array with the structure [ {id: 1, number: 1, string: 10 } ]
// Arguments: [ {id: (number), value: (any) } ]
// Result: array

// Example:  
// Input
//     {id: 1, value: 2}, 
//     {id: 1, value: 'asd'},
//     {id: 1, value: 'asd'}
// Output
//     [{id: 1, number: 1, string: 1}] 

function task_3(arr) {
  const obj = {}
  arr.forEach(
    item => {
      const type = typeof item.value;
      obj[item.id] = {
        ...obj[item.id],
        id: item.id,
        [type]: (obj[item.id]?.[type] || 0) + 1,
      };
  });
  return Object.values(obj);
}

// 4) need to count the difference (even - odd) in the sum of all values even and odd indexes from the array with integers. 
// As a response, we should return an integer value.
// Arguments: [ 1, 44, 2234, 0, 4, -1 ] positive and negative numbers
// Result: integer

function task_4(arr) {
  let even = 0;
  let odd = 0;
  arr.forEach((item, index) => {
      if (index % 2 === 0) {
          even = even + item;
      } else {
          odd = odd + item;
      }
  });
  return even - odd;
}

// 5) we should return all indexes from the string with random lengths where the needed character exists. 
// as the response, we should return an array with integer values
// Arguments: 'asdasdasdasd' 'a' (two strings)
// Result: array with integer

function task_5(str, el) {
  const indexes = [];
  for (let index = 0; index < str.length; index++) {
      if (str[index] === el) {
          indexes.push(index);
      }
  }
  return indexes;
}

// 6) we should return the max count of characters repeating from the string with random length with case insensitive search. 
// as the response, we should return the integer value
// Arguments: 'asdasdasdasd' 'a' (two random strings)
// Result: integer

function task_6(str, el) {
  const strInLowerCase = str.toLowerCase();
  let count = 0;
  for (let index = 0; index < str.length; index++) {
      if (strInLowerCase[index] === el) {
          count++;
      }
  }
  return count;
}

// 7) need to do a transformation of array with structure [ {currency: (string), value: (any) } ], 
// need to do sum of all valid values grouped by currency property and return an array in format [ 'USD:12.00', 'EUR:1.02', UAH:3.00']
// Arguments: [ {currency: (string), value: (any) }, ….. ,{currency: (string), value: (any) } ]
// Result: array with strings [ 'USD:12.00', 'EUR:1.02', UAH:3.00']

function task_7(arr) {
  const obj = {};
  arr.forEach(item => {
      const curr = item.currency.toUpperCase();
      const numberValue = Number(item?.value);
      const val = !isNaN(numberValue) ? numberValue : 0;
      console.log(val);
      obj[curr] = (obj[curr] || 0) + val;
  });
  const entries = Object.entries(obj);
  return entries
      .filter(item => !!item[1])
      .map(item => `${item[0]}:${item[1]?.toFixed(2)}`);
}

// 8) need to do a transformation of the array with random elements and types. 
// need to take only alphanumeric characters and spaces and do concatenation of elements. 
// as the response, we should return the string value
// Arguments: [ 1, ‘asd’, ‘ff’,  ' ', null, false]
// Result: string

function task_8(arr) {
  let str = '';
  arr.forEach(item => {
      if (typeof item === 'string' || typeof item === 'number') {
          str =
              str +
              item
                  .toString()
                  .replace(/[^\w\s]/gi, '')
                  .split('_')
                  .join('');
      }
  });
  return str;
}

// 9) need to do a transformation of the array with structure [ {id: (int), done: (bool) } ]. 
// We need to check that all objects marked as done (done == true). 
// we need to get a boolean type as a result
// Arguments: [ {id: (int), done: (bool) }, {id: (int), done: (bool) } ]
// Result: boolean

function task_9(arr) {
  return arr.every(item => !!item?.done);
}

// 10)  need to replace each plaintext letter with a different one in a fixed number of places (can be negative too) down the English alphabet. 
// For example 'D' will be transformed into 'A', 'E' will be transformed into 'B', and so on if the key will be queal 3. 
// As a result, we should get a string value.
// Arguments: 'Lorem ipsum dolor sit amet.', 3
// Result: string


const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map(x => String.fromCharCode(x));

function task_10(str, key) {
    return str
        .split('')
        .map(ch => {
            const index = alphabet.findIndex(itm => itm === ch.toUpperCase());
            if (index === -1) {
                return ch;
            }
            let replacedIndex = index;
            if (index - key > 0 && index - key <= alphabet?.length) {
                replacedIndex = index - key;
            }
            return alphabet[replacedIndex];
        })
        .join('');
}

export default {task_1, task_2, task_3, task_4, task_5, task_6, task_7, task_8, task_9, task_10};