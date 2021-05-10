import React from "react";
import AppContext from "../../context";
import List from "../../components/List/List";

const ZadaniaView = () => (
  <AppContext.Consumer>
    {(context) => <List items={context.zadania} />}
  </AppContext.Consumer>
);

export default ZadaniaView;
