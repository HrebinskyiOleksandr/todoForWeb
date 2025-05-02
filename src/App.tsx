import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {AppNavigator} from "./navigation/AppNavigator.tsx";
import {LayoutContainer} from "./components/LayoutContainer.tsx";

function App(): React.JSX.Element {
  return (
    <LayoutContainer>
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    </LayoutContainer>
    );
}

export default App;
