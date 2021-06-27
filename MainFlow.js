import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
let ScreenHeight = Dimensions.get('window').height;
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Home from './screens/Home';
import PropertyEnlistments from './screens/PropertyEnlistments';
import EnlistmentOffers from './screens/EnlistmentOffers';
import EnlistmentAgreements from './screens/EnlistmentAgreements';
import {Icon} from 'react-native-elements';

const HomeStack = createStackNavigator();
const PropertyStack = createStackNavigator();
const OffersStack = createStackNavigator();
const AgreementsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeNavigator = ({navigation}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Propereum',
          headerStyle: {
            backgroundColor: '#001117',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <View style={{marginLeft: 15, marginTop: 5}}>
              <Icon
                name="bars"
                type="font-awesome-5"
                size={24}
                style={{paddingLeft: 100}}
                color="white"
                onPress={() => navigation.toggleDrawer()}
              />
            </View>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};
const PropertyNavigator = ({navigation}) => {
  return (
    <PropertyStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <PropertyStack.Screen
        name="PropertyEnlistments"
        component={PropertyEnlistments}
        options={{
          title: 'Propereum',
          headerStyle: {
            backgroundColor: '#001117',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <View style={{marginLeft: 15, marginTop: 5}}>
              <Icon
                name="bars"
                type="font-awesome-5"
                size={24}
                style={{paddingLeft: 100}}
                color="white"
                onPress={() => navigation.toggleDrawer()}
              />
            </View>
          ),
        }}
      />
    </PropertyStack.Navigator>
  );
};
const OffersNavigator = ({navigation}) => {
  return (
    <OffersStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <OffersStack.Screen
        name="EnlistmentOffers"
        component={EnlistmentOffers}
        options={{
          title: 'Propereum',
          headerStyle: {
            backgroundColor: '#001117',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <View style={{marginLeft: 15, marginTop: 5}}>
              <Icon
                name="bars"
                type="font-awesome-5"
                size={24}
                style={{paddingLeft: 100}}
                color="white"
                onPress={() => navigation.toggleDrawer()}
              />
            </View>
          ),
        }}
      />
    </OffersStack.Navigator>
  );
};
const AgreementNavigator = ({navigation}) => {
  return (
    <AgreementsStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <AgreementsStack.Screen
        name="EnlistmentAgreements"
        component={EnlistmentAgreements}
        options={{
          title: 'Propereum',
          headerStyle: {
            backgroundColor: '#001117',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <View style={{marginLeft: 15, marginTop: 5}}>
              <Icon
                name="bars"
                type="font-awesome-5"
                size={24}
                style={{paddingLeft: 100}}
                color="white"
                onPress={() => navigation.toggleDrawer()}
              />
            </View>
          ),
        }}
      />
    </AgreementsStack.Navigator>
  );
};

const CustomDrawerContentComponent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView
        style={styles.container}
        forceInset={{top: 'always', horizontal: 'never'}}>
        <View style={styles.drawerHeader}>
          <Image
            style={styles.profileImage}
            source={require('./assets/logo.jpg')}
          />
          <View style={{flex: 2, display: 'flex', flexDirection: 'column'}}>
            <Text style={styles.drawerHeaderText}>Propereum</Text>
          </View>
        </View>

        <DrawerItemList {...props} />
        {/* 
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: '#FF6B6B',
            height: 52,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          hitSlop={{top: 30, bottom: 30, left: 30, right: 30}}
          onPress={() => {
            // auth.signOut();
            dispatch(logout());
            props.navigation.navigate('LoginScreen');
          }}>
          <Text style={{textAlign: 'center', fontSize: 16, color: 'white'}}>
            Sign out
          </Text>
        </TouchableOpacity> */}
      </SafeAreaView>
    </DrawerContentScrollView>
  );
};

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContentComponent {...props} />}
      drawerContentOptions={{
        activeBackgroundColor: '#FD5188',
        activeTintColor: '#fff',
        inactiveBackgroundColor: '#AA3370',
        inactiveTintColor: '#fff',
        backgroundColor: '#f6f6f6',
        itemStyle: {width: 240, borderRadius: 12},
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          drawerIcon: ({tintColor}) => (
            <Icon
              name="home"
              type="font-awesome-5"
              size={24}
              color="white"
              style={{width: 40}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Property Enlistments"
        component={PropertyNavigator}
        options={{
          drawerIcon: ({tintColor}) => (
            <Icon
              name="user-check"
              type="font-awesome-5"
              size={24}
              color="white"
              style={{width: 40}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Enlistment Offers"
        component={OffersNavigator}
        options={{
          drawerIcon: ({tintColor}) => (
            <Icon
              name="user-check"
              type="font-awesome-5"
              size={24}
              color="white"
              style={{width: 40}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Enlistment Agreements"
        component={AgreementNavigator}
        options={{
          drawerIcon: ({tintColor}) => (
            <Icon
              name="user-check"
              type="font-awesome-5"
              size={24}
              color="white"
              style={{width: 40}}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

function MainFlow() {
  return (
    <View style={{height: ScreenHeight, margin: 0}}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </View>
  );
}

export default MainFlow;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    height: ScreenHeight + 10,
    backgroundColor: '#001117',
    paddingTop: 15,
    marginTop: -10,
  },
  profileImage: {
    backgroundColor: '#f3f3f3',
    width: 70,
    height: 70,
    borderRadius: 70,
    marginRight: 20,
  },
  drawerHeader: {
    backgroundColor: '#001117',
    color: 'white',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 30,
    marginBottom: 50,
    paddingHorizontal: 20,
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
    marginBottom: 5,
  },
  drawerSubHeaderText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 5,
    marginBottom: 5,
  },
  drawerSubHeaderText1: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 5,
  },
});
