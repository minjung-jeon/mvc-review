import { charToBoolean } from './index.js';

export const getRefinedData = data => {
  // fetch해온 data의 depth가 1차원이므로 deepCopy 불필요
  const refinedData = data;
  
  refinedData.map((item, index) => {
    if(item.title.length === 0) {
      return;
    }

    let doneValue = false;

    if(typeof item.done === 'string') {
      doneValue = charToBoolean(item.done);
    }

    Object.defineProperties(item, {
      'id': {
        value: Date.now() + index,
      },
      'done': {
        value: doneValue,
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
