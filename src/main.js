import React from "react";
import ReactDOM from "react-dom";
import WebBlock from "webblock";

WebBlock({
  tag:"hello-world",
  virtualDom: WebBlock.React(React,ReactDOM),
  render: function(){
    return <div>Hello World!</div>;
  }
});
