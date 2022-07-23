import { createNavigationContainerRef } from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef()
let navigator;

export const setNavigator = (nav) => {
  navigator = nav;
}

export const navigate = (routeName, params) => {
   navigationRef.navigate( routeName, params );
}