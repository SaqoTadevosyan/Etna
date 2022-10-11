import BottomTabNavigator from "./src/Navigators/BottomTabNavigator";
import React from "react";
import { store } from "./src/store";
import { Provider } from "react-redux";
const App = () => {
  return (
    <Provider store={store}>
      <BottomTabNavigator />
    </Provider>
  );
};

export default App;
