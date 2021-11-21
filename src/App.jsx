import React from "react";
/** コンポーネント */
/** 拡張子はjsxでもOK Reactコンポーネント用の拡張子*/

/** コンポーネント名は必ず先頭を大文字から始める
 * 先頭が大文字、単語の区切りを大文字とするパスカルケースで命名
 */

/**
 * 関数を使ってDOMを表現
 * JSX記法：関数内にHTMLの内容を記載
 */
const App = () => {
  //ボタンが押された際の関数を定義
  const onClickButton = () => {
    console.log("ボタンが押されました");
  };

  //styleの関数を定義
  const contextStyle = {
    color: "red",
    //reactの時はfont-sizeもキャメルケースになる
    fontSize: "30px"
  };
  return (
    //return内容は一つのタグで囲う必要がある(JSX Fragment)
    //divなどの代わりに<React.Fragment> or<>を使用、画面に反映されない

    //onClick={}で関数化 {}でJSと認識される
    //styleもcssファイルor直接当てられる　style={{JSのスタイリング:''}}
    <>
      <h1 style={{ color: "blue" }}>Hello!</h1>
      <p style={contextStyle}>React！</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

/**
 * 他のファイルでも使えるように関数をexport
 */
export default App;
