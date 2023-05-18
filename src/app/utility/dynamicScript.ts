export function createDynamicScript(data: string) { 

let setValues = data.toString()
var script_sheet = document.createElement('script');

// success event 
script_sheet.addEventListener("load", () => {
  console.log("File loaded")
});
 // error event
script_sheet.addEventListener("error", (ev) => {
  console.log("Error on loading file", ev);
});
setTimeout(() => {
if (script_sheet) {
  script_sheet.setAttribute('type', 'text/javascript');
  script_sheet.setAttribute('id', 'dynamic-script');
  var cstr = setValues;
  var rules = document.createTextNode(cstr);
  script_sheet.appendChild(rules);
  var body = document.getElementsByTagName('body')[0];
  if (body) {
    body.appendChild(script_sheet);
  }
}

  return script_sheet
}, 3000);

   
} 

