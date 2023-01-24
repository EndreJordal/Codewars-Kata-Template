module.exports = { makeArrays };

//

function makeArrays(amount, length, numberFloor, numberCeil) {
  const arrays = [];
  for (let i = 0; i < amount; i++) {
    const array = [];

    for (let x = 0; x < length; x++) {
      array.push(
        Math.floor(
          Math.floor(Math.random() * Math.abs(numberCeil - numberFloor)) +
            numberFloor
        )
      );
    }
    arrays.push(array);
  }
  if (arrays.length === 1) return arrays[0];
  return arrays;
}
