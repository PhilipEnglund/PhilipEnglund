import React from "react";
import { Box, Text, Newline } from "ink";
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Text, null, "YO!"), /*#__PURE__*/React.createElement(Newline, null), /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column",
    width: 48
  }, /*#__PURE__*/React.createElement(Text, null, "Thanks for ", /*#__PURE__*/React.createElement(Text, {
    bold: true,
    italic: true,
    color: "green"
  }, "npxing"), " me!", /*#__PURE__*/React.createElement(Newline, null), "My name is Philip Englund (frainbreeze) and I work as a software developer in Sweden.", /*#__PURE__*/React.createElement(Newline, null), /*#__PURE__*/React.createElement(Newline, null), /*#__PURE__*/React.createElement(Text, {
    italic: true
  }, "More to come soon!"))));
}
export default App;