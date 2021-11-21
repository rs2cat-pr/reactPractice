/** Reactを使う際のお作法　**/
import React from "react";
/** HTMLに出力するためのお作法 **/
import ReactDom from "react-dom";
/** Appをインポートし使用*/
import App from "./App";

/**
 * id=rootにreactdomにレンダリング
 * インポートしたAppを使用
 */
ReactDom.render(<App />, document.getElementById("root"));
