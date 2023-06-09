import {PermissionsAndroid} from 'react-native';

export const requestLocationPermission = async () => {
  var allow = false;
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'SimpleWeatherApp  needs access to your Location ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      allow = true;
      console.log('Location permission granted');
    } else {
      allow = false;
      console.log('Location permission denied');
    }
  } catch (err) {
    allow = false;
    console.warn(err);
  }
  return allow;
};
