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
  NativeModules, //to access plugin
  NativeAppEventEmitter, //callbacks
  requireNativeComponent //to import in pressButton9
} from 'react-native';

var AppodealPlugin = NativeModules.ReactPlugin; //appodeal plugin
var NativeAdViewManagerPlugin = NativeModules.AppodealNativeAdViewManager; //native ad plugin

var AppodealNativeAdView; //view to render

//Example, how to subscribe callbacks
//First: set delegation
// AppodealPlugin.setBannerDelegate();
//Second: add listener to js, where bannerDidLoadAd is the name of callback
// NativeAppEventEmitter.addListener(
//   'bannerDidLoadAd',
//   (reminder) => {
//       console.log("bannerDidLoadAd")
//   }
// );
// Callbacks:
// (void)bannerDidLoadAd;
// (void)bannerDidFailToLoadAd;
// (void)bannerDidClick;
// (void)bannerDidShow;

// AppodealPlugin.setInterstitialDelegate();
// (void)interstitialDidLoadAd;
// (void)interstitialDidFailToLoadAd;
// (void)interstitialWillPresent;
// (void)interstitialDidDismiss;
// (void)interstitialDidClick;

// AppodealPlugin.setVideoDelegate();
// (void)videoDidLoadAd;
// (void)videoDidFailToLoadAd;
// (void)videoDidPresent;
// (void)videoWillDismiss;
// (void)videoDidFinish;
// (void)videoDidClick;

// AppodealPlugin.setRewardedVideoDelegate();
// (void)rewardedVideoDidLoadAd;
// (void)rewardedVideoDidFailToLoadAd;
// (void)rewardedVideoDidPresent;
// (void)rewardedVideoWillDismiss;
// (void)rewardedVideoDidFinish:(NSUInteger)rewardAmount name:(NSString *)rewardName;
// (void)rewardedVideoDidClick;

//Callbacks for AppodealNativeAd (whithout "setting method")
// (void)nativeAdDidClick;
// (void)nativeAdDidPresent;
// (void)nativeAdServiceDidLoad:;
// (void)nativeAdServiceDidFailedToLoad;

//TODO AppodealBannerViewDelegate
// (void) bannerViewDidLoadAd
// (void) bannerView
// (void) bannerViewDidInteract
// AppodealNativeMediaViewDelegate
// (void) mediaViewReady;
// (void) mediaViewError;
// (void) mediaViewStartPlaying;
// (void) mediaViewPresentFullScreen;
// (void) mediaViewCompleteVideoPlaying;
// (void) mediaViewSkip;

//Banner callbacks
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
  'bannerDidFailToLoadAd',
  (reminder) => {
      console.log("bannerDidFailToLoadAd")
  }
);

//Interstitial callbacks
NativeAppEventEmitter.addListener(
  'interstitialDidLoadAd',
  (reminder) => {
      console.log("interstitialDidLoadAd")
  }
);

NativeAppEventEmitter.addListener(
  'interstitialDidFailToLoadAd',
  (reminder) => {
      console.log("interstitialDidFailToLoadAd")
  }
);

NativeAppEventEmitter.addListener(
  'interstitialDidDismiss',
  (reminder) => {
      console.log("interstitialDidDismiss")
  }
);

NativeAppEventEmitter.addListener(
  'interstitialDidClick',
  (reminder) => {
      console.log("interstitialDidClick")
  }
);


//Video callbacks
NativeAppEventEmitter.addListener(
  'videoDidLoadAd',
  (reminder) => {
      console.log("videoDidLoadAd")
  }
);

NativeAppEventEmitter.addListener(
  'videoDidFailToLoadAd',
  (reminder) => {
      console.log("videoDidFailToLoadAd")
  }
);

NativeAppEventEmitter.addListener(
  'videoDidPresent',
  (reminder) => {
      console.log("videoDidPresent")
  }
);

NativeAppEventEmitter.addListener(
  'videoWillDismiss',
  (reminder) => {
      console.log("videoWillDismiss")
  }
);

NativeAppEventEmitter.addListener(
  'videoDidFinish',
  (reminder) => {
      console.log("videoDidFinish")
  }
);

NativeAppEventEmitter.addListener(
  'videoDidClick',
  (reminder) => {
      console.log("videoDidClick")
  }
);


//Rewarded video callbacks
NativeAppEventEmitter.addListener(
  'rewardedVideoDidLoadAd',
  (reminder) => {
      console.log("rewardedVideoDidLoadAd")
  }
);

NativeAppEventEmitter.addListener(
  'rewardedVideoDidFailToLoadAd',
  (reminder) => {
      console.log("rewardedVideoDidFailToLoadAd")
  }
);

NativeAppEventEmitter.addListener(
  'rewardedVideoDidPresent',
  (reminder) => {
      console.log("rewardedVideoDidPresent")
  }
);

NativeAppEventEmitter.addListener(
  'rewardedVideoWillDismiss',
  (reminder) => {
      console.log("rewardedVideoWillDismiss")
  }
);

NativeAppEventEmitter.addListener(
  'rewardedVideoDidFinish',
  (reminder) => {
      console.log("rewardedVideoDidFinish")
  }
);

NativeAppEventEmitter.addListener(
  'rewardedVideoDidClick',
  (reminder) => {
      console.log("rewardedVideoDidClick")
  }
);


//Callbacks for Natvive ad
NativeAppEventEmitter.addListener(
  'nativeAdServiceDidLoad',
  (reminder) => {
      console.log("nativeAdServiceDidLoad")
  }
);

NativeAppEventEmitter.addListener(
  'nativeAdDidClick',
  (reminder) => {
      console.log("nativeAdDidClick")
  }
);

NativeAppEventEmitter.addListener(
  'nativeAdServiceDidFailedToLoad',
  (reminder) => {
      console.log("nativeAdServiceDidFailedToLoad")
  }
);

NativeAppEventEmitter.addListener(
  'nativeAdDidPresent',
  (reminder) => {
      console.log("nativeAdDidPresent")
  }
);

class demog extends Component {

  // <Text style={styles.buttonText}>
  //   {this.state.property1}
  // </Text>
  constructor(props) {
    super(props);
    this.state = {
      property1: 'NAME OF PROPERTY',
      showView: false
    };
  }

//Methods for AppodealPlugin
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


//Methods for NativeAdViewManagerPlugin   ******************************************************************************************************
/**
 * @method loadNativeAd
 * @return {void}
 * @param {integer} x - coordinates on view(AppodealNativeAdView)
 * @param {integer} y - coordinates on view(AppodealNativeAdView)
 * @param {string} adViewType - AppodealNativeAdViewType
 *  AppodealNativeAdTypeNewsFeed
 *  AppodealNativeAdTypeContentStream
 *  AppodealNativeAdType320x50
 *  AppodealNativeAdType728x90
 * @example NativeAdViewManagerPlugin.loadNativeAd(0,0, "AppodealNativeAdTypeContentStream");
 */

/**
 * @description How to show native ad
   1) Insert the view anywhere in the render method
        {this.state.showView ? <AppodealNativeAdView style={{width: 320, height: 320, margin:10}} /> : null}
   2) Set property (see constructor(props))
        showView: false
   3) Import plugin(view) locally(for example in pressButton9) to return instance of view and set showView to true
        AppodealNativeAdView = requireNativeComponent('AppodealNativeAdView', null);
        this.setState({showView: true});

   AppodealNativeAdView is the view to render in render() method
   Native ad view is attached to AppodealNativeAdView

   Before loadNativeAd, you should to install the properties of native ad view(see below)
 */

/**
 * @method setNativeAdAttributes_width_height
 * @return {void}
 * @param {integer} width
 * @param {integer} height
 * @example NativeAdViewManagerPlugin.setNativeAdAttributes_width_height(320,50);
 */

/**
 * @method setNativeAdAttributes_roundedIcon
 * @return {void}
 * @param {boolean} roundedIcon
 * @example NativeAdViewManagerPlugin.setNativeAdAttributes_roundedIcon(true);
 */

/**
 * @method setNativeAdAttributes_sponsored
 * @return {void}
 * @param {boolean} sponsored
 * @example NativeAdViewManagerPlugin.setNativeAdAttributes_sponsored(false);
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

  pressButton1 () {
    AppodealPlugin.disableNetworkForAdType("AppodealAdTypeAll","kAppodealAdMobNetworkName");
  }

  pressButton2 () {
    AppodealPlugin.initializeWithApiKey("dee74c5129f53fc629a44a690a02296694e3eef99f2d3a5f","AppodealAdTypeAll");
  }

  pressButton3 () {
    AppodealPlugin.setBannerDelegate();
    AppodealPlugin.setVideoDelegate();
    AppodealPlugin.setInterstitialDelegate();
    AppodealPlugin.setRewardedVideoDelegate();
  }

  pressButton4 () {
    AppodealPlugin.showAd("AppodealShowStyleBannerTop",
      (result) => {
        console.log(result);
      }
    );
  }

  pressButton5 () {
    AppodealPlugin.showAd("AppodealShowStyleInterstitial",
      (result) => {
        console.log(result);
      }
    );
  }

  pressButton6 () {
    AppodealPlugin.showAd("AppodealShowStyleRewardedVideo",
      (result) => {
        console.log(result);
      }
    );
  }

  pressButton7 () {
    NativeAdViewManagerPlugin.setNativeAdAttributes_width_height(320,50);
    //deprecated
    NativeAdViewManagerPlugin.setNativeAdAttributes_titleColor_descriptionColor(0,0,255,0.5,0,0,255,0.5);
  }

  pressButton8 () {
    NativeAdViewManagerPlugin.loadNativeAd(0,0, "AppodealNativeAdTypeContentStream");
  }

  pressButton9() {
    AppodealNativeAdView = requireNativeComponent('AppodealNativeAdView', null);
    this.setState({showView: true});
  }

  pressButton10() {
    AppodealPlugin.isAutocacheEnabled ("AppodealAdTypeAll",
      (result) => {
        console.log(result);
      }
    )
  }

  pressButton11 () {
    AppodealPlugin.getVersion (
      (result) => {
        console.log(result);
        }
      )
  }

  pressButton12 () {
    AppodealPlugin.deinitialize();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.pressButton1()} style={styles.button} >
          <Text style={styles.buttonText}>
            DISABLE NETWORK
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.pressButton2()} style={styles.button} >
          <Text style={styles.buttonText}>
            INITIALIZE
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.pressButton3()} style={styles.button} >
          <Text style={styles.buttonText}>
            DELEGATE
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.pressButton4()} style={styles.button} >
          <Text style={styles.buttonText}>
            SHOW BANNER
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.pressButton5()} style={styles.button} >
          <Text style={styles.buttonText}>
            SHOW INTERSTITIAL
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.pressButton6()} style={styles.button} >
          <Text style={styles.buttonText}>
            SHOW VIDEO
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.pressButton7()} style={styles.button} >
          <Text style={styles.buttonText}>
            SET WIDTH HEIGHT
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.pressButton8()} style={styles.button} >
          <Text style={styles.buttonText}>
            LOAD NATIVE AD
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.pressButton9()} style={styles.button} >
          <Text style={styles.buttonText}>
            SHOW NATIVE AD
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.pressButton10()} style={styles.button} >
          <Text style={styles.buttonText}>
            isAutocacheEnabled
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.pressButton11()} style={styles.button} >
          <Text style={styles.buttonText}>
            GET VERSION
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.pressButton12()} style={styles.button} >
          <Text style={styles.buttonText}>
            DEINITIALIZE
          </Text>
        </TouchableHighlight>
        {this.state.showView ? <AppodealNativeAdView style={{width: 320, height: 320, margin:10}} /> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:90,
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