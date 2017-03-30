# react-native-orientation-test
Repository to test react-native-orientation lockToX

https://github.com/yamill/react-native-orientation

### Update ###
It's working now
![Demo](https://media.giphy.com/media/3og0IUNzhuZNalibLO/giphy.gif)

Make sure to have done the following:
* Replace ```#import Orientation.h``` to ```#import "../../node_modules/react-native-orientation/iOS/RCTOrientation/Orientation.h"``` in AppDelegate.m
* Replace ```#import RCTBridgeModule.h``` to ```#import <React/RCTBridgeModule.h>``` in your ```node_modules/react-native-orientation/iOS/Orientation.h```
