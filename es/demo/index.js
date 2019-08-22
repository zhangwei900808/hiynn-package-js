import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { Component } from "react";

var Demo =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Demo, _Component);

  function Demo() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Demo.prototype;

  _proto.render = function render() {
    return React.createElement("div", {
      className: "demo-container"
    }, "this is demo page");
  };

  return Demo;
}(Component);

export default Demo;