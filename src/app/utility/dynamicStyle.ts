export function createDynamicStyle(data: string) { 
	
	
    //first Remove dynamic Style
    var elem = document.getElementById("dynamic-style");
    elem?.remove();

    // convert array to string and remove comma
    let setValues = data.toString()
    const left = '},';
    const replaceLeft = '}';

    //Create Style and append in head
    var style_sheet = document.createElement('style');
    if (style_sheet) {
      style_sheet.setAttribute('type', 'text/css');
      style_sheet.setAttribute('id', 'dynamic-style');
      var cstr = setValues.split(left).join(replaceLeft);
      var rules = document.createTextNode(cstr);
      style_sheet.appendChild(rules);
      var head = document.getElementsByTagName('head')[0];
      if (head) {
        head.appendChild(style_sheet);
      }
    }

    return style_sheet
} 

