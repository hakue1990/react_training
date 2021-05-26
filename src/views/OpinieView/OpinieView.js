import React from "react";
import AppContext from "../../context";
import List from "../../components/List/List";

const ZamowieniaView = () => (
  <AppContext.Consumer>
    {(context) => <List items={context.zamowienia} />}
  </AppContext.Consumer>
);

export default ZamowieniaView;
