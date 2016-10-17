/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { DeviceEventEmitter } from 'react-native';
import { CheckboxField, Checkbox } from 'react-native-checkbox-field';
import Button from 'react-native-button';
import ModalPicker from 'react-native-modal-picker'
import Appodeal from 'react-native-appodeal'
import {
  Platform,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class AppodealDemo extends Component {
  constructor(props) {
	  super(props);
	  
	  this.state = {
            autocache: false,
			adType: 0,
        };
	
	this.autocacheChanged = this.autocacheChanged.bind(this);
  }
  getCurrentAdType() {
	  switch(this.state.adType){
		  case 0:
			return Appodeal.NONE;
		  case 1:
			return Appodeal.INTERSTITIAL;
		  case 2:
			return Appodeal.BANNER;
		  case 3:
			return Appodeal.BANNER_TOP;
		  case 4:
			return Appodeal.BANNER_BOTTOM;
		  case 5:
			return Appodeal.SKIPPABLE_VIDEO;
		  case 6:
			return Appodeal.REWARDED_VIDEO;
		  case 7:
			return Appodeal.INTERSTITIAL | Appodeal.SKIPPABLE_VIDEO;
	  }
  }
  initializeClicked() {
	  //Interstitial callbacks
	  DeviceEventEmitter.addListener('onInterstitialLoaded', (e) => Appodeal.showToast("Interstitial loaded. Precache: " + e.isPrecache, Appodeal.SHORT));
	  DeviceEventEmitter.addListener('onInterstitialClicked', (e) => Appodeal.showToast("Interstitial clicked", Appodeal.SHORT));
	  DeviceEventEmitter.addListener('onInterstitialClosed', (e) => Appodeal.showToast("Interstitial closed", Appodeal.SHORT));
	  DeviceEventEmitter.addListener('onInterstitialFailedToLoad', (e) => Appodeal.showToast("Interstitial failed to load", Appodeal.SHORT));
	  DeviceEventEmitter.addListener('onInterstitialShown', (e) => Appodeal.showToast("Interstitial shown", Appodeal.SHORT));
	  
	  //Banner callbacks
	  DeviceEventEmitter.addListener('onBannerClicked', (e) => Appodeal.showToast("Banner clicked", Appodeal.SHORT));
	  DeviceEventEmitter.addListener('onBannerFailedToLoad', (e) => Appodeal.showToast("Banner failed to load", Appodeal.SHORT));
	  DeviceEventEmitter.addListener('onBannerLoaded', (e) => Appodeal.showToast("Banner loaded. Height: " + e.height + ", precache: " + e.isPrecache, Appodeal.SHORT));
	  DeviceEventEmitter.addListener('onBannerShown', (e) => Appodeal.showToast("Banner shown", Appodeal.SHORT));
	  
	  //Skippable video callbacks
	  DeviceEventEmitter.addListener('onSkippableVideoClosed', (e) => Appodeal.showToast("Skippable video closed: " + e.isFinished, Appodeal.SHORT));
	  DeviceEventEmitter.addListener('onSkippableVideoFailedToLoad', (e) => Appodeal.showToast("Skippable video failed to load", Appodeal.SHORT));
	  DeviceEventEmitter.addListener('onSkippableVideoFinished', (e) => Appodeal.showToast("Skippable video finished", Appodeal.SHORT));
	  DeviceEventEmitter.addListener('onSkippableVideoLoaded', (e) => Appodeal.showToast("Skippable video loaded", Appodeal.SHORT));
	  DeviceEventEmitter.addListener('onSkippableVideoShown', (e) => Appodeal.showToast("Skippable video shown", Appodeal.SHORT));
	  
	  //Rewarded video callbacks
	  DeviceEventEmitter.addListener('onRewardedVideoClosed', (e) => Appodeal.showToast("Rewarded video closed: " + e.isFinished, Appodeal.SHORT));
	  DeviceEventEmitter.addListener('onRewardedVideoFailedToLoad', (e) => Appodeal.showToast("Rewarded video failed to load", Appodeal.SHORT));
	  DeviceEventEmitter.addListener('onRewardedVideoFinished', (e) => Appodeal.showToast("Rewarded video finished. Amount: " + e.amount + ", currency" + e.currency , Appodeal.SHORT));
	  DeviceEventEmitter.addListener('onRewardedVideoLoaded', (e) => Appodeal.showToast("Rewarded video loaded", Appodeal.SHORT));
	  DeviceEventEmitter.addListener('onRewardedVideoShown', (e) => Appodeal.showToast("Rewarded video shown", Appodeal.SHORT));
	  
	  //DeviceEventEmitter.addListener('accessCoarseLocationResponse', (e) => Appodeal.showToast("Coarse location: " + e.isGranted, Appodeal.SHORT));
	  //DeviceEventEmitter.addListener('writeExternalStorageResponse', (e) => Appodeal.showToast("External storage: " + e.isGranted, Appodeal.SHORT));
	  Appodeal.requestAndroidMPermissions();
	
	  //Set user settings
	  Appodeal.setAge(42);
	  Appodeal.setEmail("user@mail.com");
	  Appodeal.setInterests("jogging, games");
	  Appodeal.setGender(Appodeal.GENDER_MALE);
	  Appodeal.setAlcohol(Appodeal.ALCOHOL_POSITIVE);
	  Appodeal.setSmoking(Appodeal.SMOKING_NEGATIVE);
	  Appodeal.setOccupation(Appodeal.OCCUPATION_WORK);
	  Appodeal.setRelation(Appodeal.RELATION_SINGLE);
	  
	  Appodeal.setLogLevel(Appodeal.LOG_LEVEL_VERBOSE);
	  Appodeal.setAutoCache(this.getCurrentAdType(), this.state.autocache);
	  Appodeal.initialize("fee50c333ff3825fd6ad6d38cff78154de3025546d47a84f", this.getCurrentAdType());
  }
  isLoadedClicked() {
	  Appodeal.isLoaded(this.getCurrentAdType(), (isLoaded) => alert(isLoaded));
  }
  autocacheChanged() {
	this.setState({
            autocache: !this.state.autocache
        });
  }
  adTypeChanged(newAdType){
	  this.setState({
		  adType: newAdType
	  });
  }
  render() {
	let index = 0;
    const data = [
        { key: index++, section: true, label: 'Ad Types' },
		{ key: index++, label: 'Interstitial'},
        { key: index++, label: 'Banner' },
		{ key: index++, label: 'Banner top' },
		{ key: index++, label: 'Banner bottom' },
        { key: index++, label: 'Skippable Video' },
        { key: index++, label: 'Rewarded Video' },
        { key: index++, label: 'Interstitial or Video' }
    ];
    return (
      <View style={styles.container}>
        
		<ModalPicker
					style={{width: 200}}
                    data={data}
                    initValue="AdType"
                    onChange={(option)=>{ this.adTypeChanged(option.key) }} />
		
		<View style={{width: 200}}>
			<CheckboxField
			  label={'Autocache'}
			  checked={this.state.autocache}
			  onSelect={this.autocacheChanged}
			  selected={this.state.autocache}
			  checkboxStyle={styles.checkboxStyle}
			  labelStyle={styles.labelStyle}
			  selectedColor="#ef3326"
			  labelSide="right">
				<Text style={{ color: '#fff' }}>Y</Text>
			</CheckboxField>
		</View>
		
		<Button
			style={styles.button}
			styleDisabled={styles.disabledButton}
			onPress={() => this.initializeClicked()}>
				Initialize
		</Button>
		
		<Button
			style={styles.button}
			styleDisabled={styles.disabledButton}
			onPress={() => Appodeal.cache(this.getCurrentAdType())}>
				Cache
		</Button>
		
		<Button
			style={styles.button}
			styleDisabled={styles.disabledButton}
			onPress={() => this.isLoadedClicked()}>
				Is loaded
		</Button>
		
		<Button
			style={styles.button}
			styleDisabled={styles.disabledButton}
			onPress={() => Appodeal.show({
				adType: this.getCurrentAdType(),
				placement: "initial_screen" //optional 
				}, null)}>
				Show
		</Button>
		
		<Button
			style={styles.button}
			styleDisabled={styles.disabledButton}
			onPress={() => Appodeal.hide(this.getCurrentAdType())}>
				Hide
		</Button>
		
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ef3326',
  },
  button: {
	marginTop: 8,
	backgroundColor: "#fff",
    borderRadius: 5,
	padding: 10,
	alignItems: 'center',
	color: '#ef3326',
	width: 200
  },
  disabledButton: {
	backgroundColor: "#aaa",
	color: '#000',
  },
  checkboxStyle: {
      width: 26,
      height: 26,
      borderWidth: 2,
      borderColor: '#ddd',
      borderRadius: 5
  },
  labelStyle: {
      flex: 1,
	  color: "#fff"
  },
});

AppRegistry.registerComponent('AppodealDemo', () => AppodealDemo);
