import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import CreatePost from '../screens/CreatePost';
import Feed from '../screens/Feed';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Create Post" component={CreatePost} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
