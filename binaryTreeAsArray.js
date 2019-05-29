//  to get the start point for a level of the tree, 2 to the power of the the level you are after (levels start at 0)
// to get the length of the chunck to grab, its the same, 2 to the power of the level you are after.  
// number of nodes = the lenght of the chunk divided by 2

const testTree = [0,1,1, 2, 2,2,2, 3, 3, 3, 3,3,3,3,3, 4, 4, 4, 4, 4, 4, 4, 4,4,4,4,4,4,4,4,4,5,5,5];
const stringTree = ['guin', 'james', 'aaron', 'spencer', 'dasha', 'josh', 'brock', 'matt', 'ty']

let isEmpty = (list => list.length === 0);

const getLevel = (level, tree) => {
  const levelIndex = Math.pow(2, level);
  if (typeof tree[levelIndex] === 'undefined') return false
  const startIndex = levelIndex-1;
  const spliceLength = levelIndex;
  const segment = [...tree].splice(startIndex, spliceLength);
  for (let n = 0; n < levelIndex; n++){
    if (segment.length < n + 1) {
      segement = segment.push(null);
    }
  }
  return segment.length != 0 && segment.reduce((accum, item, index, src) => {
    if (index % 2 === 0) {
      accum.push([src[index], src[index + 1]])
    }
    return accum;
  }, []);;
}

const getLeftNodes = nodes => nodes && nodes.splice(0, Math.ceil(nodes.length / 2));
const getRightNodes = nodes => nodes && nodes.splice(Math.floor(nodes.length / 2), nodes.length);


console.log(getLeftNodes(getLevel(0, testTree)));
console.log(getLeftNodes(getLevel(1, testTree)));
console.log(getLeftNodes(getLevel(2, testTree)));
console.log(getLeftNodes(getLevel(3, testTree)));
console.log(getLeftNodes(getLevel(4, testTree)));
console.log(getLeftNodes(getLevel(5, testTree)));
console.log(getLeftNodes(getLevel(6, testTree)));
console.log(getLeftNodes(getLevel(7, testTree)));


