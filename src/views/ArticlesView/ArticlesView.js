import React from "react";
import AppContext from "../../context";

const ArticlesView = () => {
  return (
    <AppContext.Consumer>
      {(context) => (
        <React.Fragment>
          <h1>Hello World {context}</h1>
          <h1>this is an article view</h1>
        </React.Fragment>
      )}
    </AppContext.Consumer>
  );
};

export default ArticlesView;
