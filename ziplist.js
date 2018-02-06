function zipList(list1, list2) {
  if (list1.length !== list2.length) return 'Error: Unequal Lists';
  const zList = [];
  for (let i = 0; i < list2.length; i++) {
    zList.push(list1[i]);
    zList.push(list2[i]);
  }
  return zList;
}

const aList = ['a', 'b', 'c'];
const bList = [1, 2, 3];

console.log(zipList(aList, bList));

function zipListTheSimpleWay(list1, list2) {
  if (list1.length !== list2.length) return 'Error: Unequal Lists';
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(aList, bList));

