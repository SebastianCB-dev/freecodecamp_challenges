function updateInventory(arr1, arr2) {
  arr2.forEach( itemArr2 => {
    if(!arr1.find( itemArr1 => itemArr2[1] === itemArr1[1])) {
      arr1.push(itemArr2);
    }
    else {
      arr1.map(itemArr1 => {
        if(itemArr1[1] === itemArr2[1]) {
          itemArr1[0] += itemArr2[0];
        }
      })
    }
  });
  return arr1.sort((a,b) => {
    if(a[1] > b[1]) {
      return 1;
    }
    else {
      return -1;
    }
  });
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
