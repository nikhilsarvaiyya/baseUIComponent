export function createDynamicScript(data: string) { 

let setValues = data.toString()
var script_sheet = document.createElement('script');
if (script_sheet) {
  script_sheet.setAttribute('type', 'text/javascript');
  script_sheet.setAttribute('id', 'dynamic-script');
  var cstr = setValues;
  var rules = document.createTextNode(cstr);
  script_sheet.appendChild(rules);
  var head = document.getElementsByTagName('head')[0];
  if (head) {
    head.appendChild(script_sheet);
  }
}

return script_sheet
   
} 

