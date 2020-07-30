import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { getState } from './reactHooks/state';
import { Button, Image,  StyleSheet, TouchableOpacity, Platform  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DrawerActions } from '@react-navigation/native';
import {
  Search,
  Search2,
  Splash
} from "./Screens";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MyArtists, MyArtists2}  from './screens/MyArtists/MyArtists'
import {AddArtist}  from './screens/AddArtist/AddArtist'

import {AllArtists, AllArtists2}  from './screens/AllArtists/AllArtists'
import {MyEvents, MyEvents2}  from './screens/MyEvents/MyEvents'
import {AllEvents, AllEvents2}  from './screens/AllEvents/AllEvents'

import {MyLocations, MyLocations2}  from './screens/MyLocations/MyLocations'
import {AllLocations, AllLocations2}  from './screens/AllLocations/AllLocations'

import Login from './screens/Login/Login'
import Register from './screens/Register/Register'

function LogoTitle() {
  return (
    <TouchableOpacity
      onPress={() => alert('This is a button!')}
      // title="Info"
      // color="#fff"
      style={{ width: 60, height: 60 }}
      activeOpacity={0.5}
    >
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../assets/arts.png')}
    />
    </TouchableOpacity>
  );
}

const LoginStack = createStackNavigator();
const LoginStackScreen = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen
      name="Login"
      component={Login}
      options={{ title: "Login" }}
    />
    <LoginStack.Screen
      name="Register"
      component={Register}
      options={{ title: "Register" }}
    />
  </LoginStack.Navigator>
);

// const Tabs = createBottomTabNavigator();
const Tabs = createMaterialTopTabNavigator();
const SearchStack = createStackNavigator();

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={Search} />
    <SearchStack.Screen name="Search2" component={Search2} />
  </SearchStack.Navigator>
);
//---------------------------------------------------------------------
const MyArtistsStack = createStackNavigator();
const MyArtistsStackScreen = () => (
  <MyArtistsStack.Navigator >
    <MyArtistsStack.Screen name="My Artists" component={MyArtists} />
    <MyArtistsStack.Screen name="My Artists2" component={MyArtists2} />
  </MyArtistsStack.Navigator>
);

const AllArtistsStack = createStackNavigator();
const AllArtistsStackScreen = () => (
  <AllArtistsStack.Navigator >
    <AllArtistsStack.Screen name="All Artists" component={AllArtists} />
    <AllArtistsStack.Screen name="All Artists2" component={AllArtists2} />
  </AllArtistsStack.Navigator>
);

const AddArtistStack = createStackNavigator();
const AddArtistStackScreen = () => (
  <AddArtistStack.Navigator >
    <AddArtistStack.Screen name="Add Artist" component={AddArtist} />
  </AddArtistStack.Navigator>
);

//===================================================================
const MyEventsStack = createStackNavigator();
const MyEventsStackScreen = () => (
  <MyEventsStack.Navigator>
    <MyEventsStack.Screen name="My Events" component={MyEvents} />
    <MyEventsStack.Screen name="My Events2" component={MyEvents2} />
  </MyEventsStack.Navigator>
);

const AllEventsStack = createStackNavigator();
const AllEventsStackScreen = () => (
  <AllEventsStack.Navigator>
    <AllEventsStack.Screen name="All Events" component={AllEvents} />
    <AllEventsStack.Screen name="All Events2" component={AllEvents2} />
  </AllEventsStack.Navigator>
);
//---------------------------------------------------------
const MyLocationsStack = createStackNavigator();
const MyLocationsStackScreen = () => (
  <MyLocationsStack.Navigator>
    <MyLocationsStack.Screen name="My Locations" component={MyLocations} />
    <MyLocationsStack.Screen name="My Locations2" component={MyLocations2} />
  </MyLocationsStack.Navigator>
);

const AllLocationsStack = createStackNavigator();
const AllLocationsStackScreen = () => (
  <AllLocationsStack.Navigator>
    <AllLocationsStack.Screen name="All Locations" component={AllLocations} />
    <AllLocationsStack.Screen name="All Locations2" component={AllLocations2} />
  </AllLocationsStack.Navigator>
);
//===================================================================

const tabBarOptions={
  activeTintColor: 'yellow',
  inactiveTintColor: 'white',
  // activeBackgroundColor: 'sienna',
  // inactiveBackgroundColor: 'gray',//sienna',
  pressColor: 'gold',
  pressOpacity: 90,
  labelStyle: {
    fontSize: 14,
    margin: 0,
    padding: 0,
    paddingBottom: 2
  },
  style: { backgroundColor:  'sienna' },
  indicatorStyle: {backgroundColor: 'yellow'}
}


const ArtistsTabsScreen = () => (
  <Tabs.Navigator 
    initialRouteName="My Artists"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    tabBarOptions={tabBarOptions}
  
  >
    <Tabs.Screen name="Mine" component={MyArtistsStackScreen} />
    <Tabs.Screen name="All" component={AllArtistsStackScreen} />
    <Tabs.Screen name="Add" component={AddArtistStackScreen} />
  </Tabs.Navigator>
);

const EventsTabsScreen = () => (
  <Tabs.Navigator 
      initialRouteName="My Events"
      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ focused, color, size }) => {
      //     let iconName;

      //     if (route.name === "All Events") {
      //       iconName = focused
      //         ? 'ios-information-circle'
      //         : 'ios-information-circle-outline';
      //     } else if (route.name === 'My Events') {
      //       iconName = focused ? 'ios-list-box' : 'ios-list';
      //     }

      //     // You can return any component that you like here!
      //     return <Ionicons name={iconName} size={size} color={color} />;
      //   },
      // })}
      tabBarOptions={tabBarOptions}
    >
    <Tabs.Screen name="My Events" component={MyEventsStackScreen} />
    <Tabs.Screen name="All Events" component={AllEventsStackScreen} />
  </Tabs.Navigator>
);

const LocationsTabsScreen = () => (
  <Tabs.Navigator 
      initialRouteName="My Locations"
      tabBarOptions={tabBarOptions}
    >
    <Tabs.Screen name="My Locations" component={MyLocationsStackScreen} />
    <Tabs.Screen name="All Locations" component={AllLocationsStackScreen} />
  </Tabs.Navigator>
);


const myIcon = <Icon name="bars" size={25} color="yellow" style={{ marginRight: 10 }}/>;

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator
    drawerStyle={{
      backgroundColor: 'sienna',
      width: 100,
    }}
    drawerContentOptions ={{
      activeTintColor: 'yellow',
      inactiveTintColor: 'white',
      activeBackgroundColor: 'chocolate',
      //inactiveBackgroundColor: 'saddleBrown'
    }}

    screenOptions={({ navigation, route }) => ({ 
    headerRight: () => 
        <TouchableOpacity 
          onPress={() => {
            console.log('iioiooiooi')
            navigation.toggleDrawer()}
          }
        > 
          {myIcon}
            {/* <FontAwesome5 name='bars' color='white' size={20} />  */}
        </TouchableOpacity>,
        headerLeftContainerStyle: { paddingLeft: 10 } }
    )}

      initialRouteName="Artists"
  >
    <Drawer.Screen name="Events" component={EventsTabsScreen} options={{ title: 'Events' }}/>
    <Drawer.Screen name="Artists" component={ArtistsTabsScreen} options={{ title: 'Artists' }}/>
    <Drawer.Screen name="Locations" component={LocationsTabsScreen} options={{ title: 'Locations' }}/>

  </Drawer.Navigator>
);

const RootStack = createStackNavigator();
export const RootStackScreen = () => 
{
  const [{user}, dispatch] = getState();
  return (
    <RootStack.Navigator 
        // headerMode="none"  This doesnt get what I want.

        screenOptions={({ navigation }) => ({ 
          headerRight: () => 
              <TouchableOpacity 
                margin={20}
                onPress={() => {
                  console.log('iioiooiooi')
                  // Drawer.DrawerActions.dispatch(openDrawer())
                  navigation.dispatch(DrawerActions.openDrawer());
                }}
              > 
                {myIcon}
                  {/* <FontAwesome5 name='bars' color='white' size={20} />  */}
              </TouchableOpacity>,
          headerLeftContainerStyle: { paddingLeft: 10 } ,
          headerStyle: {
            backgroundColor: 'saddlebrown',
          },
          headerTintColor: 'yellow',
          // fontFamily: 'serif' 
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
        
        }
        )}
    >
      {user.id ? (
        <RootStack.Screen
          name="Local Events"
          component={DrawerScreen}
          options={{
            animationEnabled: false
          }}
        />
      ) : (
        <RootStack.Screen
          name="Local Events"
          component={LoginStackScreen}
          options={{
            animationEnabled: false
          }}
        />

      )}
    </RootStack.Navigator>
  );
}

export const Navigation = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
  );
};
