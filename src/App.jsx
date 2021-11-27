import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

/** コンポーネント */
/** 拡張子はjsxでもOK Reactコンポーネント用の拡張子*/

/** コンポーネント名は必ず先頭を大文字から始める
 * 先頭が大文字、単語の区切りを大文字とするパスカルケースで命名
 */

/**
 * 関数を使ってDOMを表現
 * JSX記法：関数内にHTMLの内容を記載
 * Stateの変化があるごとにreactが再レンダリングされる
 */
const App = () => {
  //useStateから配列代入で取り出す
  /**カウントアップ用useState */
  //setnumごとに状態を更新していく
  const [num, setNum] = useState(100);
  console.log("再レンダリング");
  /**画面表示用useState */
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  //ボタンが押された際の関数を定義
  const onClickCountup = () => {
    setNum(num + 5);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //関心の分離を行う
  //配列内のnumの値が変化した時だけ走らせる
  useEffect(
    () => {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps:off
    [num]
  ); //eslintの設定でエラーが出る

  return (
    //return内容は一つのタグで囲う必要がある(JSX Fragment)
    //divなどの代わりに<React.Fragment> or<>を使用、画面に反映されない

    //onClick={}で関数化 {}でJSと認識される
    //styleもcssファイルor直接当てられる　style={{JSのスタイリング:''}}
    <>
      <h1 style={{ color: "blue" }}>Hello!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="green">元気です</ColorfulMessage>
      <button onClick={onClickCountup}>ボタン</button>
      <p>{num}</p>
      <button onClick={onClickSwitchShowFlag}>ボタン</button>

      {faceShowFlag && <p>🦈</p>}
    </>
  );
};

/**
 * 他のファイルでも使えるように関数をexport
 */
export default App;
