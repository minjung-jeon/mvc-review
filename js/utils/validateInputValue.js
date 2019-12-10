// Secure Coding을 위한 검사
export const validateInputValue = text => {
  let regExp = /[\#$<>\=_]/gi;

  if(!text) {
    return false;
  }

  if(regExp.test(text)) {
    alert('해당 특수문자는 사용 할 수 없습니다.');
    return false;
  } else {
    return true;
  }
}
