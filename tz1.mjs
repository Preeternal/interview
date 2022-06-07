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





export default {task_1, task_2, task_3, task_4, task_5};