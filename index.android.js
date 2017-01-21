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
		    logging: false,
			testing: false,
			confirmType: false,
            autocache: false,
			disableSmartBanners: false,
			disableBannerAnimation: false,
			disable728x90Banners: false,
			enableTriggerOnLoadedTwice: false,
			disableLocationPermissionCheck: false,
			disableWriteExternalStorageCheck: false,
			adType: 0,
        };
	this.loggingChanged = this.loggingChanged.bind(this);
	this.testingChanged = this.testingChanged.bind(this);
	this.confirmTypeChanged = this.confirmTypeChanged.bind(this);
	this.autocacheChanged = this.autocacheChanged.bind(this);
	this.disableSmartBannersChanged = this.disableSmartBannersChanged.bind(this);
	this.disableBannerAnimationChanged = this.disableBannerAnimationChanged.bind(this);
	this.disable728x90BannersChanged = this.disable728x90BannersChanged.bind(this);
	this.enableTriggerOnLoadedTwiceChanged = this.enableTriggerOnLoadedTwiceChanged.bind(this);
	this.disableLocationPermissionCheckChanged = this.disableLocationPermissionCheckChanged.bind(this);
	this.disableWriteExternalStorageCheckChanged = this.disableWriteExternalStorageCheckChanged.bind(this);
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
	  
	  if(this.state.logging)
		Appodeal.setLogLevel(Appodeal.LOG_LEVEL_VERBOSE);
	  else
		Appodeal.setLogLevel(Appodeal.LOG_LEVEL_NONE);
	  Appodeal.setTesting(this.state.testing);
	  if(this.state.confirmType) Appodeal.confirm(this.getCurrentAdType());
	  if(this.state.disableLocationPermissionCheck)
		  Appodeal.disableLocationPermissionCheck();
	  if(this.state.disableWriteExternalStorageCheck)
		  Appodeal.disableWriteExternalStoragePermissionCheck();
	
	  //Set user settings
	  Appodeal.setAge(42);
	  Appodeal.setEmail("user@mail.com");
	  Appodeal.setInterests("jogging, games");
	  Appodeal.setGender(Appodeal.GENDER_MALE);
	  Appodeal.setAlcohol(Appodeal.ALCOHOL_POSITIVE);
	  Appodeal.setSmoking(Appodeal.SMOKING_NEGATIVE);
	  Appodeal.setOccupation(Appodeal.OCCUPATION_WORK);
	  Appodeal.setRelation(Appodeal.RELATION_SINGLE);
	  Appodeal.setUserId("your_custom_user_id");
	  
	  Appodeal.setSmartBanners(!this.state.disableSmartBanners);
	  Appodeal.setBannerAnimation(!this.state.disableBannerAnimation);
	  Appodeal.set728x90Banners(!this.state.disable728x90Banners);
	  
	  Appodeal.setOnLoadedTriggerBoth(this.getCurrentAdType(), this.state.enableTriggerOnLoadedTwice);
	  Appodeal.setAutoCache(this.getCurrentAdType(), this.state.autocache);
	  Appodeal.initialize("fee50c333ff3825fd6ad6d38cff78154de3025546d47a84f", this.getCurrentAdType());
	  
	  //Custom rules for segments
	  Appodeal.setCustomStringRule("custom_string_rule", "value");
	  Appodeal.setCustomBooleanRule("special_user", true);
	  Appodeal.setCustomIntegerRule("age", 18);
	  Appodeal.setCustomDoubleRule("hours_online", 1.5);
  }
  isLoadedClicked() {
	  Appodeal.isLoaded(this.getCurrentAdType(), (isLoaded) => alert(isLoaded));
  }
  isPrecacheClicked(){
	  Appodeal.isPrecache(this.getCurrentAdType(), (isPrecache) => alert(isPrecache));
  }
  
  loggingChanged() {
	this.setState({
            logging: !this.state.logging
        });
  }
  testingChanged() {
	this.setState({
            testing: !this.state.testing
        });
  }
  confirmTypeChanged() {
	this.setState({
            confirmType: !this.state.confirmType
        });
  }
  autocacheChanged() {
	this.setState({
            autocache: !this.state.autocache
        });
  }
  disableSmartBannersChanged() {
	this.setState({
            disableSmartBanners: !this.state.disableSmartBanners
        });
  }
  disableBannerAnimationChanged() {
	this.setState({
            disableBannerAnimation: !this.state.disableBannerAnimation
        });
  }
  disable728x90BannersChanged() {
	this.setState({
            disable728x90Banners: !this.state.disable728x90Banners
        });
  }
  enableTriggerOnLoadedTwiceChanged() {
	this.setState({
            enableTriggerOnLoadedTwice: !this.state.enableTriggerOnLoadedTwice
        });
  }
  disableLocationPermissionCheckChanged() {
	this.setState({
            disableLocationPermissionCheck: !this.state.disableLocationPermissionCheck
        });
  }
  disableWriteExternalStorageCheckChanged() {
	this.setState({
            disableWriteExternalStorageCheck: !this.state.disableWriteExternalStorageCheck
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
        <View style={{flex: 0.35, flexDirection: "column", alignItems: 'center'}}>
			<ModalPicker
						style={{height: 40}}
						selectTextStyle={{color: "#fff"}}
						data={data}
						initValue="AdType"
						onChange={(option)=>{ this.adTypeChanged(option.key) }} />	
			
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
					Is Loaded?
			</Button>
			
			<Button
				style={styles.button}
				styleDisabled={styles.disabledButton}
				onPress={() => this.isPrecacheClicked()}>
					Is Precache?
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
		<View style={{flex: 0.65, flexDirection: "column"}}>
			<View style={{flexDirection: "row"}}>
				<CheckboxField
					label={'Logging'}
					checked={this.state.logging}
					onSelect={this.loggingChanged}
					selected={this.state.logging}
					checkboxStyle={styles.checkboxStyle}
					labelStyle={styles.labelStyle}
					containerStyle={styles.containerStyle}
					selectedColor="#ef3326"
					labelSide="right">
						<Text style={{ color: '#fff' }}>Y</Text>
				</CheckboxField>
				<CheckboxField
					label={'Testing'}
					checked={this.state.testing}
					onSelect={this.testingChanged}
					selected={this.state.testing}
					checkboxStyle={styles.checkboxStyle}
					labelStyle={styles.labelStyle}
					containerStyle={styles.containerStyle}
					selectedColor="#ef3326"
					labelSide="right">
						<Text style={{ color: '#fff' }}>Y</Text>
				</CheckboxField>
			</View>
			<View style={{flexDirection: "row"}}>
				<CheckboxField
					label={'Confirm'}
					checked={this.state.confirmType}
					onSelect={this.confirmTypeChanged}
					selected={this.state.confirmType}
					checkboxStyle={styles.checkboxStyle}
					labelStyle={styles.labelStyle}
					containerStyle={styles.containerStyle}
					selectedColor="#ef3326"
					labelSide="right">
						<Text style={{ color: '#fff' }}>Y</Text>
				</CheckboxField>
				<CheckboxField
					label={'AutoCache'}
					checked={this.state.autocache}
					onSelect={this.autocacheChanged}
					selected={this.state.autocache}
					checkboxStyle={styles.checkboxStyle}
					labelStyle={styles.labelStyle}
					containerStyle={styles.containerStyle}
					selectedColor="#ef3326"
					labelSide="right">
						<Text style={{ color: '#fff' }}>Y</Text>
				</CheckboxField>
			</View>
			<CheckboxField
				label={'Disable Smart Banners'}
				checked={this.state.disableSmartBanners}
				onSelect={this.disableSmartBannersChanged}
				selected={this.state.disableSmartBanners}
				checkboxStyle={styles.checkboxStyle}
				labelStyle={styles.labelStyle}
				containerStyle={styles.containerStyle}
				selectedColor="#ef3326"
				labelSide="right">
					<Text style={{ color: '#fff' }}>Y</Text>
			</CheckboxField>
			<CheckboxField
				label={'Disable Banner Animation'}
				checked={this.state.disableBannerAnimation}
				onSelect={this.disableBannerAnimationChanged}
				selected={this.state.disableBannerAnimation}
				checkboxStyle={styles.checkboxStyle}
				labelStyle={styles.labelStyle}
				containerStyle={styles.containerStyle}
				selectedColor="#ef3326"
				labelSide="right">
					<Text style={{ color: '#fff' }}>Y</Text>
			</CheckboxField>
			<CheckboxField
				label={'Disable 728x90 Banners'}
				checked={this.state.disable728x90Banners}
				onSelect={this.disable728x90BannersChanged}
				selected={this.state.disable728x90Banners}
				checkboxStyle={styles.checkboxStyle}
				labelStyle={styles.labelStyle}
				containerStyle={styles.containerStyle}
				selectedColor="#ef3326"
				labelSide="right">
					<Text style={{ color: '#fff' }}>Y</Text>
			</CheckboxField>
			<CheckboxField
				label={'Enable Trigger onLoaded on precache'}
				checked={this.state.enableTriggerOnLoadedTwice}
				onSelect={this.enableTriggerOnLoadedTwiceChanged}
				selected={this.state.enableTriggerOnLoadedTwice}
				checkboxStyle={styles.checkboxStyle}
				labelStyle={styles.labelStyle}
				containerStyle={styles.containerStyle}
				selectedColor="#ef3326"
				labelSide="right">
					<Text style={{ color: '#fff' }}>Y</Text>
			</CheckboxField>
			<CheckboxField
				label={'Disable Location Permission Check'}
				checked={this.state.disableLocationPermissionCheck}
				onSelect={this.disableLocationPermissionCheckChanged}
				selected={this.state.disableLocationPermissionCheck}
				checkboxStyle={styles.checkboxStyle}
				labelStyle={styles.labelStyle}
				containerStyle={styles.containerStyle}
				selectedColor="#ef3326"
				labelSide="right">
					<Text style={{ color: '#fff' }}>Y</Text>
			</CheckboxField>
			<CheckboxField
				label={'Disable Write External Storage Check'}
				checked={this.state.disableWriteExternalStorageCheck}
				onSelect={this.disableWriteExternalStorageCheckChanged}
				selected={this.state.disableWriteExternalStorageCheck}
				checkboxStyle={styles.checkboxStyle}
				labelStyle={styles.labelStyle}
				containerStyle={styles.containerStyle}
				selectedColor="#ef3326"
				labelSide="right">
					<Text style={{ color: '#fff' }}>Y</Text>
			</CheckboxField>
		</View>
		
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ef3326',
  },
  button: {
	marginTop: 8,
	backgroundColor: "#fff",
    borderRadius: 5,
	padding: 5,
	alignItems: 'center',
	color: '#ef3326',
	width: 190
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
      //flex: 1,
	  marginLeft: 5,
	  color: "#fff",
  },
  containerStyle: {
        //flex: 1,
		flexDirection: "row",
        alignItems: 'center',
		marginLeft: 5,
		marginTop: 5
    },
});

AppRegistry.registerComponent('AppodealDemo', () => AppodealDemo);
