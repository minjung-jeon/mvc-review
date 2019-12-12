// Secure Coding을 위한 검사
export const validateInputValue = (text, message) => {
  const regExp = /[\#$<>\=_]/gi;

  if(!text) {
    return false;
  }

  if(regExp.test(text)) {
    alert(message);
    return false;
  } else {
    return true;
  }
}
