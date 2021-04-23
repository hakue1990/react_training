import React from "react";
import AppContext from "../../context";

const ArticlesView = () => {
  return (
    <AppContext.Consumer>
      {(context) => <p>siema {context}</p>}
    </AppContext.Consumer>
  );
};

export default ArticlesView;
