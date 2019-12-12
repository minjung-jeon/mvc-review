export const changeDataToDom = (data, template) =>{
  const regExp = /\{\{(.*?)\}\}/gi;

  const result = template.replace(regExp, prop => {
    let keyValue = prop.split('{{')[1].split('}}')[0].trim();
    
    return data[keyValue];
  });
  
  return result;
}
