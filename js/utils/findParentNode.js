export const findParentNode = (parentDomName, childDom) => {
  let parentNode = childDom;

  while(parentNode.getAttribute('data-dom-name') !== parentDomName) {
    parentNode = parentNode.parentNode;
  }

  return parentNode;
}
