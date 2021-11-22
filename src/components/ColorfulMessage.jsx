import React from "react";

const ColorfulMessage = (props) => {
  //分割代入でpropsを挿入
  const { color, children } = props;

  const contextStyle2 = {
    color,
    font: "30px"
  };

  //prpos内容を出力
  return <p style={contextStyle2}>{children}</p>;
};

//export の場合はimportの際に分割代入する必要がある
//importの際に間違えて代入してもそのまま使えてしまう
export default ColorfulMessage;
