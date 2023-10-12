/* eslint-disable import/no-mutable-exports */
import pets from './pets';

let newDataPets = [];
function createPaginationData() {
  const splitPets = Array(3);
  function colSplit(arr, c) {
    for (let i = 0; i < c; ++i) {
      splitPets[i] = [];
    }
    for (let i = 0; i < arr.length; ++i) {
      splitPets[i % c].push(arr[i]);
    }
    return splitPets;
  }
  colSplit(pets, 3);
  const clone = Object.assign([], splitPets);
  const arr = [];
  for (let j = 0; j < 6; j++) {
    for (let i = 0; i < clone.length; i++) {
      arr.push([...clone[i]].sort(() => 0.5 - Math.random()));
    }
  }
  newDataPets = arr.flat();
  return newDataPets;
}
createPaginationData();

export default newDataPets;
