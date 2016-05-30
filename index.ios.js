/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  NativeModules,
  NativeAppEventEmitter
} from 'react-native';

var AppodealPlugin = NativeModules.ReactPlugin;

//Example, how to subscribe callbacks
NativeAppEventEmitter.addListener(
  'bannerDidLoadAd',
  (reminder) => {
      console.log("bannerDidLoadAd")
  }
);

NativeAppEventEmitter.addListener(
  'bannerDidShow',
  (reminder) => {
      console.log("bannerDidShow")
  }
);

NativeAppEventEmitter.addListener(
  'bannerDidClick',
  (reminder) => {
      console.log("bannerDidClick")
  }
);

NativeAppEventEmitter.addListener(
  'videoDidFinish',
  (reminder) => {
      console.log("videoDidFinish")
  }
);

NativeAppEventEmitter.addListener(
  'nativeAdServiceDidLoad',
  (reminder) => {
      console.log("nativeAdServiceDidLoad")
  }
);


class demog extends Component {

  // <Text style={styles.buttonText}>
  //   {this.state.property1}
  // </Text>
  constructor(props) {
    super(props);
    this.state = {
      property1: 'NAME OF PROPERTY'
    };
  }

/**
 * @method disableNetworkForAdType
 * @return {void}
 * @param {string} adType - AppodealAdType
 *  AppodealAdTypeInterstitial
 *  AppodealAdTypeSkippableVideo    
 *  AppodealAdTypeBanner            
 *  AppodealAdTypeNativeAd          
 *  AppodealAdTypeRewardedVideo     
 *  AppodealAdTypeMREC              
 *  AppodealAdTypeNonSkippableVideo 
 *  AppodealAdTypeAll
 * @param {string} networkName - AppodealNetworkName
 *  kAppodealAdColonyNetworkName
 *  kAppodealAdMobNetworkName
 *  kAppodealAdMobVideoNetworkName
 *  kAppodealAmazonAdsNetworkName
 *  kAppodealAppLovinNetworkName
 *  kAppodealChartboostNetworkName
 *  kAppodealFacebookNetworkName
 *  kAppodealInMobiNetworkName
 *  kAppodealMyTargetNetworkName
 *  kAppodealMyTargetBannerNetworkName
 *  kAppodealMopubNetworkName
 *  kAppodealMRAIDNetworkName
 *  kAppodealOpenXNetworkName
 *  kAppodealTapSenceNetworkName
 *  kAppodealUnityAdsNetworkName
 *  kAppodealVungleNetworkName
 *  kAppodealSmaatoNetworkName
 *  kAppodealYandexNetworkName
 *  kAppodealStartAppNetworkName
 *  kAppodealAppNexusNetworkName
 *  kAppodealRubiconNetworkName
 *  kAppodealAvocarrotNetworkName
 *  kAppodealPubNativeNetworkName
 *  kAppodealFlurryNetworkName
 *  kAppodealLiveRailNetworkName
 *  kAppodealSpotXNetworkName
 *  kAppodealVASTNetworkName
 *  kAppodealInnerActiveNetworkName
 *  kAppodealMillenialMediaNetworkName
 *  kAppodealNativeTestNetworkName
 * @example AppodealPlugin.disableNetworkForAdType("AppodealAdTypeAll","kAppodealAdMobNetworkName");
 */

/**
 * @method disableLocationPermissionCheck
 * @return {void}
 * @example AppodealPlugin.disableLocationPermissionCheck();
 */

/**
 * @method setAutocache
 * @return {void}
 * @param {boolean} autocache
 * @param {string} adType - AppodealAdType
 * @example AppodealPlugin.setAutocache(true, "AppodealAdTypeAll");
 */

/**
 * @method isAutocacheEnabled
 * @return {boolean}
 * @example

      //signature
      Object.Method (first param, ... ,
        //second param as return(result) value
        (result) => {
          //do stuff
        }
      )

    AppodealPlugin.isAutocacheEnabled ("AppodealAdTypeAll", 
      (result) => {
        console.log(result);
      }
    )
 */

/**
 * @method initializeWithApiKey
 * @return {void}
 * @param {string} appKey - apiKey
 * @param {string} adType - AppodealAdType
 * @description Initialize the Appodeal
 * @example AppodealPlugin.initializeWithApiKey("dee74c5129f53fc629a44a690a02296694e3eef99f2d3a5f","AppodealAdTypeAll");
 */

/**
 * @method deinitialize
 * @return {void}
 * @example AppodealPlugin.deinitialize();
 */

/**
 * @method isInitalized
 * @return {boolean}
 * @example
    AppodealPlugin.isInitalized (
      (result) => {
        console.log(result);
      }
    )
 */

/**
 * @method showAd
 * @return {boolean}
 * @param {string} style - AppodealShowStyle
 *  AppodealShowStyleInterstitial,
 *  AppodealShowStyleSkippableVideo,
 *  AppodealShowStyleVideoOrInterstitial,
 *  AppodealShowStyleBannerTop,
 *  AppodealShowStyleBannerCenter,
 *  AppodealShowStyleBannerBottom,
 *  AppodealShowStyleRewardedVideo,
 *  AppodealShowStyleNonSkippableVideo
 * @description Shows the ad in the rootViewController
 * @example 
    AppodealPlugin.showAd("AppodealShowStyleInterstitial",      
      (result) => {
        console.log(result);
      }
    );
 */

/**
 * @method showAdWithPriceFloor
 * @return {boolean}
 * @param {string} style - AppodealShowStyle
 * @example 
    AppodealPlugin.showAdWithPriceFloor("AppodealShowStyleInterstitial",      
      (result) => {
        console.log(result);
      }
    );
 */

/**
 * @method cacheAd
 * @return {void}
 * @param {string} adType - AppodealAdType
 * @example AppodealPlugin.cacheAd("AppodealAdTypeAll");
 */

/**
 * @method hideBanner
 * @return {void}
 * @example AppodealPlugin.hideBanner();
 */

/**
 * @method setTestingEnabled
 * @return {void}
 * @param {boolean} testingEnabled
 * @example AppodealPlugin.setTestingEnabled(true);
 */

/**
 * @method getVersion
 * @return {string}
 * @example 
    AppodealPlugin.getVersion(
      (result) => {
        console.log(result);
      }
    );
 */

/**
 * @method confirmUsage
 * @return {void}
 * @param {string} adType - AppodealAdType
 * @example AppodealPlugin.confirmUsage("AppodealAdTypeAll");
 */

/**
 * @method isReadyForShowWithStyle
 * @return {boolean}
 * @param {string} showStyle - AppodealShowStyle
 * @example 
    AppodealPlugin.isReadyForShowWithStyle("AppodealShowStyleInterstitial",
       (result) => {
        console.log(result);
      }
    );
 */

/**
 * @method isReadyWithPriceFloorForShowWithStyle
 * @return {boolean}
 * @param {string} showStyle - AppodealShowStyle
 * @example 
    AppodealPlugin.isReadyWithPriceFloorForShowWithStyle("AppodealShowStyleInterstitial",
       (result) => {
        console.log(result);
      }
    );
 */

/**
 * @method setUserId
 * @return {void}
 * @param {string} userId
 * @example AppodealPlugin.setUserId("");
 */

/**
 * @method setUserVkId
 * @return {void}
 * @param {string} vkId
 * @example AppodealPlugin.setUserVkId("");
 */

/**
 * @method setUserFacebookId
 * @return {void}
 * @param {string} facebookId
 * @example AppodealPlugin.setUserFacebookId("");
 */

/**
 * @method setUserEmail
 * @return {void}
 * @param {string} email
 * @example AppodealPlugin.setUserEmail("");
 */

/**
 * @method setUserBirthday
 * @return {void}
 * @param {JSON} birthday - json date
 */

/**
 * @method setUserAge
 * @return {void}
 * @param {integer} age
 * @example AppodealPlugin.setUserAge(20);
 */

/**
 * @method setUserGender
 * @return {void}
 * @param {string} gender - AppodealUserGender
    AppodealUserGenderOther
    AppodealUserGenderMale
    AppodealUserGenderFemale
 * @example AppodealPlugin.setUserGender("AppodealUserGenderMale");
 */

/**
 * @method setUserOccupation
 * @return {void}
 * @param {string} occupation - AppodealUserOccupation
    AppodealUserOccupationOther
    AppodealUserOccupationWork
    AppodealUserOccupationSchool
    AppodealUserOccupationUniversity
 * @example AppodealPlugin.setUserOccupation("AppodealUserOccupationUniversity");
 */

/**
 * @method setUserRelationship
 * @return {void}
 * @param {string} relationship - AppodealUserRelationship
    AppodealUserRelationshipOther
    AppodealUserRelationshipSingle
    AppodealUserRelationshipDating
    AppodealUserRelationshipEngaged
    AppodealUserRelationshipMarried
    AppodealUserRelationshipSearching
 * @example AppodealPlugin.setUserRelationship("AppodealUserRelationshipSearching");
 */

/**
 * @method setUserSmokingAttitude
 * @return {void}
 * @param {string} smokingAttitude - AppodealUserSmokingAttitude
    AppodealUserSmokingAttitudeNegative
    AppodealUserSmokingAttitudeNeutral
    AppodealUserSmokingAttitudePositive
 * @example AppodealPlugin.setUserSmokingAttitude("AppodealUserSmokingAttitudeNeutral");
 */

/**
 * @method setUserAlcoholAttitude
 * @return {void}
 * @param {string} alcoholAttitude - AppodealUserAlcoholAttitude
    AppodealUserAlcoholAttitudeNegative
    AppodealUserAlcoholAttitudeNeutral
    AppodealUserAlcoholAttitudePositive
 * @example AppodealPlugin.setUserAlcoholAttitude("AppodealUserAlcoholAttitudeNeutral");
 */

 /**
 * @method setUserInterests
 * @return {void}
 * @param {string} interests
 * @example AppodealPlugin.setUserInterests("programming");
 */

/**
 * @method loadNativeAd
 * @return {void}
 * @example AppodealPlugin.loadNativeAd();
 */

/**
 * @method showNativeAd
 * @return {void}
 * @param {integer} x - coordinates on view
 * @param {integer} y - coordinates on view
 * @param {string} adViewType - AppodealNativeAdViewType
    AppodealNativeAdTypeNewsFeed
    AppodealNativeAdTypeContentStream
    AppodealNativeAdType320x50, 
    AppodealNativeAdType728x90
 * @example AppodealPlugin.showNativeAd(40,50,"AppodealNativeAdTypeContentStream");
 */

/**
 * @method setNativeAdAttributes_width_height
 * @return {void}
 * @param {integer} width
 * @param {integer} height
 * @example AppodealPlugin.setNativeAdAttributes_width_height(320,50);
 */

/**
 * @method setNativeAdAttributes_roundedIcon
 * @return {void}
 * @param {boolean} roundedIcon
 * @example AppodealPlugin.setNativeAdAttributes_roundedIcon(true);
 */

/**
 * @method setNativeAdAttributes_sponsored
 * @return {void}
 * @param {boolean} sponsored
 * @example AppodealPlugin.setNativeAdAttributes_sponsored(false);
 */


/**
 * @method setNativeAdAttributes_titleFont
 * @return {void}
 * @param {JSON} json - see the json type of UIFont class in RCTConvert.h
 */
/**
 * @method setNativeAdAttributes_descriptionFont
 * @return {void}
 * @param {JSON} json - see the json type of UIFont class in RCTConvert.h
 */
/**
 * @method setNativeAdAttributes_subtitleFont
 * @return {void}
 * @param {JSON} json - see the json type of UIFont class in RCTConvert.h
 */
/**
 * @method setNativeAdAttributes_buttonTitleFont
 * @return {void}
 * @param {JSON} json - see the json type of UIFont class in RCTConvert.h
 */


/**
 * @method setNativeAdAttributes_titleFontColor
 * @return {void}
 * @param {JSON} json - see the json type of UIColor class in RCTConvert.h
 */
/**
 * @method setNativeAdAttributes_descriptionFontColor
 * @return {void}
 * @param {JSON} json - see the json type of UIColor class in RCTConvert.h
 */
/**
 * @method setNativeAdAttributes_subtitleColor
 * @return {void}
 * @param {JSON} json - see the json type of UIColor class in RCTConvert.h
 */
/**
 * @method setNativeAdAttributes_buttonColor
 * @return {void}
 * @param {JSON} json - see the json type of UIColor class in RCTConvert.h
 */
/**
 * @method setNativeAdAttributes_starRatingColor
 * @return {void}
 * @param {JSON} json - see the json type of UIColor class in RCTConvert.h
 */



  pressButton12 () {
    AppodealPlugin.setBannerDelegate();
    AppodealPlugin.setVideoDelegate();
    AppodealPlugin.setRewardedVideoDelegate();
  }

  pressButton1 () {
    AppodealPlugin.initializeWithApiKey("dee74c5129f53fc629a44a690a02296694e3eef99f2d3a5f","AppodealAdTypeAll");
  }

  pressButton2 () {
    AppodealPlugin.showAd("AppodealShowStyleBannerTop",
      (result) => {
        console.log(result);
      }
    );
  }

  pressButton2_1 () {
    AppodealPlugin.showAd("AppodealShowStyleInterstitial",
      (result) => {
        console.log(result);
      }
    );
  }

  pressButton2_2 () {
    AppodealPlugin.showAd("AppodealShowStyleNonSkippableVideo",
      (result) => {
        console.log(result);
      }
    );
  }

  pressButton3 () {
    AppodealPlugin.loadNativeAd();
  }

  pressButton4 () {
    AppodealPlugin.showNativeAd(10,500, "AppodealNativeAdTypeContentStream");
  }

  pressButton5 () {
    AppodealPlugin.disableNetworkForAdType("AppodealAdTypeAll","kAppodealAdMobNetworkName");
  }

  pressButton7 () {
    AppodealPlugin.setNativeAdAttributes_width_height(320,50);
  }

  pressButton8() {
    AppodealPlugin.isAutocacheEnabled ("AppodealAdTypeAll",
      (result) => {
        console.log(result);
      }
    )
  }

  pressButton9() {

    AppodealPlugin.getVersion (
      (result) => {
        console.log(result);
        }
      )
  }

  pressButton10 () {
    AppodealPlugin.setAutocache(true, "AppodealAdTypeAll");
  }

  pressButton11 () {
    AppodealPlugin.deinitialize();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.pressButton1} style={styles.button} >
          <Text style={styles.buttonText}>
            INITIALIZE
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.pressButton5} style={styles.button} >
          <Text style={styles.buttonText}>
            DISABLE_NETWORK
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.pressButton12} style={styles.button} >
          <Text style={styles.buttonText}>
            DELEGATE
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.pressButton2} style={styles.button} >
          <Text style={styles.buttonText}>
            SHOW BANNER
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.pressButton2_1} style={styles.button} >
          <Text style={styles.buttonText}>
            SHOW INTERSTITIAL
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.pressButton2_2} style={styles.button} >
          <Text style={styles.buttonText}>
            SHOW VIDEO
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.pressButton3} style={styles.button} >
          <Text style={styles.buttonText}>
            LOAD_NATIVEAD
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.pressButton7} style={styles.button} >
          <Text style={styles.buttonText}>
            SET_WIDTH_HEIGHT
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.pressButton4} style={styles.button} >
          <Text style={styles.buttonText}>
            SHOW_NATIVEAD
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.pressButton8} style={styles.button} >
          <Text style={styles.buttonText}>
            isAutocacheEnabled
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.pressButton9} style={styles.button} >
          <Text style={styles.buttonText}>
            GET_VERSION
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.pressButton10} style={styles.button} >
          <Text style={styles.buttonText}>
            setAutocache
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.pressButton11} style={styles.button} >
          <Text style={styles.buttonText}>
            DEINITIALIZE
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:100,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button:{
    height:20,
    borderColor: '#05A5D1',
    borderWidth:1,
    backgroundColor: '#3333',
    margin:3,
    justifyContent: 'center',
    alignItems:'center'
  },
  buttonText:{
    color: '#000000',
    fontSize:15,
    fontWeight: '100'
  }
});

AppRegistry.registerComponent('demog', () => demog);