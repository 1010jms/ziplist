function zipList(list1, list2) {
  if (list1.length !== list2.length) return 'Error: Lists not the Same Size';
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
  if (list1.length !== list2.length) return 'Error: Lists not the Same Size';
  return _.zip(list1, list2);
}

console.log(zipListTheSimpleWay(aList, bList));
