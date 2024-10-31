// react-native.config.js
module.exports = {
      dependencies: {
        'react-native-vector-icons': {
          platforms: {
            ios: null, // disable autolinking for iOS if you manage icons manually in Xcode
            android: null, // disable autolinking for Android if manually linking is required
          },
        },
      },
    };
    