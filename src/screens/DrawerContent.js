import React from 'react';
import { View, Text, Button } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 18 }}>Custom Drawer Header</Text>
      </View>
      <DrawerItemList {...props} />
      <View style={{ padding: 20 }}>
        <Button title="Logout" onPress={() => alert('Logout')} />
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
