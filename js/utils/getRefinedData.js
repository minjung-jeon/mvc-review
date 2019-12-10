import { charToBoolean } from './charToBoolean.js';

export const getRefinedData = data => {
  // fetch해온 data의 depth가 1차원이므로 deepCopy 불필요
  const refinedData = data;
  
  refinedData.map((item, index) => {
    if(item.title.length === 0) {
      return;
    }

    Object.defineProperties(item, {
      'id': {
        value: Date.now() + index,
      },
      'done': {
        value: charToBoolean(item.done),
        writable: true,
      },
      'title': {
        value: item.title,
        writable: true,
      }
    });
  });

  return refinedData;
}
