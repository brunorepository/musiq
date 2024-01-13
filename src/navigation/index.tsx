import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeView from '../views/app/Home/HomeView';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const AppNavigation: React.FC = () => {
  const {Navigator, Screen} = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#001e29',
          },
        }}>
        <Screen name="Home" component={HomeView} />
        <Screen name="Eu" component={HomeView} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
