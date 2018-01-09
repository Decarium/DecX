function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);
  
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  return returnValue;
}

import React from 'react';

__$styleInject("body {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n", undefined);

var styles = __$styleInject(".group {\n  position: relative;\n  margin-bottom: 45px;\n}\n\n.input {\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid #757575;\n}\n\n.input:focus {\n  outline: none;\n}\n\n/* LABEL ======================================= */\n.label {\n  color: #999;\n  font-size: 18px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n}\n\n/* active state */\n.input:focus ~ .label,\n.input:valid ~ .label {\n  top: -20px;\n  font-size: 14px;\n  color: #5264ae;\n}\n\n/* BOTTOM BARS ================================= */\n.bar {\n  position: relative;\n  display: block;\n  width: 300px;\n}\n\n.bar::before,\n.bar::after {\n  content: \"\";\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: #5264ae;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n}\n\n.bar::before {\n  left: 50%;\n}\n\n.bar::after {\n  right: 50%;\n}\n\n/* active state */\n.input:focus ~ .bar::before,\n.input:focus ~ .bar::after {\n  width: 50%;\n}\n\n/* HIGHLIGHTER ================================== */\n.highlight {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n/* active state */\n.input:focus ~ .highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  -moz-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease;\n}\n\n/* ANIMATIONS ================ */\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: #5264ae;\n  }\n\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n\n@-moz-keyframes inputHighlighter {\n  from {\n    background: #5264ae;\n  }\n\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n\n@keyframes inputHighlighter {\n  from {\n    background: #5264ae;\n  }\n\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n", undefined);

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var Input = function Input(props) {
  return React.createElement(
    "div",
    { className: styles.group },
    React.createElement("input", _extends({ className: styles.input }, props)),
    React.createElement("span", { className: styles.highlight }),
    React.createElement("span", { className: styles.bar }),
    React.createElement(
      "label",
      { className: styles.label },
      "Name"
    )
  );
};

// import the build index.css

export { Input as default };
