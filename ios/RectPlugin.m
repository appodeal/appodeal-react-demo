//
//  ReactPlugin.m
//  demoAppodeal
//
//  Created by Denis on 26.05.16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "ReactPlugin.h"
#import "RCTLog.h"
#import "RCTConvert.h"
#import "RCTBridge.h"
#import "RCTEventDispatcher.h"

@implementation ReactPlugin

RCT_EXPORT_MODULE();

@synthesize bridge = _bridge;

- (void)bannerDidShow
{
  [self.bridge.eventDispatcher sendAppEventWithName:@"bannerDidShow" body:@{@"":@""}];
}

- (void)bannerDidLoadAd
{
  [self.bridge.eventDispatcher sendAppEventWithName:@"bannerDidLoadAd" body:@{@"":@""}];
}

- (void)bannerDidClick
{
  [self.bridge.eventDispatcher sendAppEventWithName:@"bannerDidClick" body:@{@"":@""}];
}

- (void)bannerDidFailToLoadAd;
{
  [self.bridge.eventDispatcher sendAppEventWithName:@"bannerDidFailToLoadAd" body:@{@"":@""}];
}

RCT_EXPORT_METHOD(setBannerDelegate)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [Appodeal setBannerDelegate:self];
  });
}

- (void)interstitialDidLoadAd
{
  [self.bridge.eventDispatcher sendAppEventWithName:@"interstitialDidLoadAd" body:@{@"":@""}];
}

- (void)interstitialDidFailToLoadAd
{
  [self.bridge.eventDispatcher sendAppEventWithName:@"interstitialDidFailToLoadAd" body:@{@"":@""}];
}

- (void)interstitialWillPresent
{
  [self.bridge.eventDispatcher sendAppEventWithName:@"interstitialWillPresent" body:@{@"":@""}];
}

- (void)interstitialDidDismiss;
{
  [self.bridge.eventDispatcher sendAppEventWithName:@"interstitialDidDismiss" body:@{@"":@""}];
}

- (void)interstitialDidClick;
{
  [self.bridge.eventDispatcher sendAppEventWithName:@"interstitialDidClick" body:@{@"":@""}];
}

RCT_EXPORT_METHOD(setInterstitialDelegate)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [Appodeal setInterstitialDelegate:self];
  });
}

- (void)videoDidLoadAd
{
  [self.bridge.eventDispatcher sendAppEventWithName:@"videoDidLoadAd" body:@{@"":@""}];
}

- (void)videoDidFailToLoadAd
{
  [self.bridge.eventDispatcher sendAppEventWithName:@"videoDidFailToLoadAd" body:@{@"":@""}];
}

- (void)videoDidPresent
{
  [self.bridge.eventDispatcher sendAppEventWithName:@"videoDidPresent" body:@{@"":@""}];
}

- (void)videoWillDismiss
{
  [self.bridge.eventDispatcher sendAppEventWithName:@"videoWillDismiss" body:@{@"":@""}];
}

- (void)videoDidFinish
{
  [self.bridge.eventDispatcher sendAppEventWithName:@"videoDidFinish" body:@{@"":@""}];
}

- (void)videoDidClick
{
  [self.bridge.eventDispatcher sendAppEventWithName:@"videoDidClick" body:@{@"":@""}];
}

RCT_EXPORT_METHOD(setVideoDelegate)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [Appodeal setVideoDelegate:self];
  });
}

- (void)rewardedVideoDidLoadAd
{
  [self.bridge.eventDispatcher sendAppEventWithName:@"rewardedVideoDidLoadAd" body:@{@"":@""}];
}

- (void)rewardedVideoDidFailToLoadAd
{
  [self.bridge.eventDispatcher sendAppEventWithName:@"rewardedVideoDidFailToLoadAd" body:@{@"":@""}];
}

- (void)rewardedVideoDidPresent
{
  [self.bridge.eventDispatcher sendAppEventWithName:@"rewardedVideoDidPresent" body:@{@"":@""}];
}

- (void)rewardedVideoWillDismiss
{
  [self.bridge.eventDispatcher sendAppEventWithName:@"rewardedVideoWillDismiss" body:@{@"":@""}];
}

- (void)rewardedVideoDidFinish:(NSUInteger)rewardAmount name:(NSString *)rewardName
{
  
  [self.bridge.eventDispatcher sendAppEventWithName:@"rewardedVideoDidFinish" body:@{@"rewardAmount":[NSNumber numberWithInteger:rewardAmount],@"rewardName":rewardName}];
}

- (void)rewardedVideoDidClick
{
  [self.bridge.eventDispatcher sendAppEventWithName:@"rewardedVideoDidClick" body:@{@"":@""}];
}

RCT_EXPORT_METHOD(setRewardedVideoDelegate)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [Appodeal setRewardedVideoDelegate:self];
  });
}

- (AppodealAdType)appodealAdTypeConvert:(NSString*) adType
{
  AppodealAdType type=AppodealAdTypeAll;
  if([adType isEqualToString:@"AppodealAdTypeInterstitial"])
    type = AppodealAdTypeInterstitial;
  if([adType isEqualToString:@"AppodealAdTypeSkippableVideo"])
    type = AppodealAdTypeSkippableVideo;
  if([adType isEqualToString:@"AppodealAdTypeVideo"])
    type = AppodealAdTypeVideo;
  if([adType isEqualToString:@"AppodealAdTypeBanner"])
    type = AppodealAdTypeBanner;
  if([adType isEqualToString:@"AppodealAdTypeNativeAd"])
    type = AppodealAdTypeNativeAd;
  if([adType isEqualToString:@"AppodealAdTypeRewardedVideo"])
    type = AppodealAdTypeRewardedVideo;
  if([adType isEqualToString:@"AppodealAdTypeMREC"])
    type = AppodealAdTypeMREC;
  if([adType isEqualToString:@"AppodealAdTypeNonSkippableVideo"])
    type = AppodealAdTypeNonSkippableVideo;
  if([adType isEqualToString:@"AppodealAdTypeAll"])
    type = AppodealAdTypeAll;
  
  return type;
}

- (AppodealShowStyle)appodealShowStyleConvert:(NSString*) showType
{
  AppodealShowStyle type=AppodealShowStyleInterstitial;
  if([showType isEqualToString:@"AppodealShowStyleInterstitial"])
    type=AppodealShowStyleInterstitial;
  if([showType isEqualToString:@"AppodealShowStyleSkippableVideo"])
    type=AppodealShowStyleSkippableVideo;
  if([showType isEqualToString:@"AppodealShowStyleVideoOrInterstitial"])
    type=AppodealShowStyleVideoOrInterstitial;
  if([showType isEqualToString:@"AppodealShowStyleBannerTop"])
    type=AppodealShowStyleBannerTop;
  if([showType isEqualToString:@"AppodealShowStyleBannerCenter"])
    type=AppodealShowStyleBannerCenter;
  if([showType isEqualToString:@"AppodealShowStyleBannerBottom"])
    type=AppodealShowStyleBannerBottom;
  if([showType isEqualToString:@"AppodealShowStyleRewardedVideo"])
    type=AppodealShowStyleRewardedVideo;
  if([showType isEqualToString:@"AppodealShowStyleVideo"])
    type=AppodealShowStyleVideo;
  if([showType isEqualToString:@"AppodealShowStyleNonSkippableVideo"])
    type=AppodealShowStyleNonSkippableVideo;
  
  return type;
}

RCT_EXPORT_METHOD(initializeWithApiKey:(NSString *)appKey types:(NSString *)adType)
{
  //RCTLogInfo(@"NOT READY %@ %@", name, location);
  
  //main thread
  dispatch_async(dispatch_get_main_queue(), ^{
    [Appodeal initializeWithApiKey:appKey types:[self appodealAdTypeConvert:adType]];
  });
}

RCT_EXPORT_METHOD(cacheAd:(NSString *)adType)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [Appodeal cacheAd:[self appodealAdTypeConvert:adType]];
  });
}

RCT_EXPORT_METHOD(confirmUsage:(NSString *)adType)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [Appodeal confirmUsage:[self appodealAdTypeConvert:adType]];
  });
}

RCT_EXPORT_METHOD(showAd:(NSString *)showType result:(RCTResponseSenderBlock)callback)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    if([Appodeal showAd:[self appodealShowStyleConvert:showType] rootViewController:[[UIApplication sharedApplication] keyWindow].rootViewController])
      callback(@[@YES]);
    else
      callback(@[@NO]);
  });
}

RCT_EXPORT_METHOD(showAdWithPriceFloor:(NSString *)showType result:(RCTResponseSenderBlock)callback)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    if([Appodeal showAdWithPriceFloor:[self appodealShowStyleConvert:showType] rootViewController:[[UIApplication sharedApplication] keyWindow].rootViewController])
      callback(@[@YES]);
    else
      callback(@[@NO]);
  });
}

RCT_EXPORT_METHOD(isReadyForShowWithStyle:(NSString *)showType result:(RCTResponseSenderBlock)callback)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    if([Appodeal isReadyForShowWithStyle:[self appodealShowStyleConvert:showType]])
      callback(@[@YES]);
    else
      callback(@[@NO]);
  });
}

RCT_EXPORT_METHOD(isReadyWithPriceFloorForShowWithStyle:(NSString *)showType result:(RCTResponseSenderBlock)callback)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    if([Appodeal isReadyWithPriceFloorForShowWithStyle:[self appodealShowStyleConvert:showType]])
      callback(@[@YES]);
    else
      callback(@[@NO]);
  });
}

RCT_EXPORT_METHOD(banner)
{
  UIView *v= [Appodeal banner];
}

RCT_EXPORT_METHOD(disableLocationPermissionCheck)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [Appodeal disableLocationPermissionCheck];
  });
}

RCT_EXPORT_METHOD(isAutocacheEnabled:(NSString *)adType calls:(RCTResponseSenderBlock)callback)
{
  //NSArray *events = @[@"1", @"2", @"3""];
  //callback(@[[NSNull null], events]);
  
  dispatch_async(dispatch_get_main_queue(), ^{
    if([Appodeal isAutocacheEnabled:[self appodealAdTypeConvert:adType]])
      callback(@[@YES]);
    else
      callback(@[@NO]);
  });
}

RCT_EXPORT_METHOD(setAutocache:(BOOL)autocache adTypes:(NSString *)adType)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [Appodeal setAutocache:autocache types:[self appodealAdTypeConvert:adType]];
  });
}

RCT_EXPORT_METHOD(isInitalized:(RCTResponseSenderBlock)callback)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    if([Appodeal isInitalized])
      callback(@[@YES]);
    else
      callback(@[@NO]);
  });
}

RCT_EXPORT_METHOD(deinitialize)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [Appodeal deinitialize];
  });
}

RCT_EXPORT_METHOD(hideBanner)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [Appodeal hideBanner];
  });
}

RCT_EXPORT_METHOD(setTestingEnabled:(BOOL)testingEnabled)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [Appodeal setTestingEnabled:testingEnabled];
  });
}

RCT_EXPORT_METHOD(getVersion:(RCTResponseSenderBlock)callback)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    callback(@[[Appodeal getVersion]]);
  });
}

RCT_EXPORT_METHOD(disableNetworkForAdType:(NSString *)adType name:(NSString *)name)
{
  NSString *const nameNetwork = name;
  
  dispatch_async(dispatch_get_main_queue(), ^{
    [Appodeal disableNetworkForAdType:[self appodealAdTypeConvert:adType] name:nameNetwork];
  });
}

RCT_EXPORT_METHOD(setUserSmokingAttitude:(NSString *)AppodealUserSmokingAttitude)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    if([AppodealUserSmokingAttitude isEqualToString:@"AppodealUserSmokingAttitudeNegative"])
      [Appodeal setUserSmokingAttitude:AppodealUserSmokingAttitudeNegative];
    if([AppodealUserSmokingAttitude isEqualToString:@"AppodealUserSmokingAttitudeNeutral"])
      [Appodeal setUserSmokingAttitude:AppodealUserSmokingAttitudeNeutral];
    if([AppodealUserSmokingAttitude isEqualToString:@"AppodealUserSmokingAttitudePositive"])
      [Appodeal setUserSmokingAttitude:AppodealUserSmokingAttitudePositive];
  });
}

RCT_EXPORT_METHOD(setUserAlcoholAttitude:(NSString *)AppodealUserAlcoholAttitude)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    if([AppodealUserAlcoholAttitude isEqualToString:@"AppodealUserAlcoholAttitudeNegative"])
      [Appodeal setUserAlcoholAttitude:AppodealUserAlcoholAttitudeNegative];
    if([AppodealUserAlcoholAttitude isEqualToString:@"AppodealUserAlcoholAttitudeNeutral"])
      [Appodeal setUserAlcoholAttitude:AppodealUserAlcoholAttitudeNeutral];
    if([AppodealUserAlcoholAttitude isEqualToString:@"AppodealUserAlcoholAttitudePositive"])
      [Appodeal setUserAlcoholAttitude:AppodealUserAlcoholAttitudePositive];
  });
}

RCT_EXPORT_METHOD(setUserBirthday:(id)birthday)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [Appodeal setUserBirthday:[RCTConvert NSDate:birthday]];
  });
}

RCT_EXPORT_METHOD(setUserGender:(NSString *)AppodealUserGender)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    if([AppodealUserGender isEqualToString:@"AppodealUserGenderOther"])
      [Appodeal setUserGender:AppodealUserGenderOther];
    if([AppodealUserGender isEqualToString:@"AppodealUserGenderMale"])
      [Appodeal setUserGender:AppodealUserGenderMale];
    if([AppodealUserGender isEqualToString:@"AppodealUserGenderFemale"])
      [Appodeal setUserGender:AppodealUserGenderFemale];
  });
}

RCT_EXPORT_METHOD(setUserOccupation:(NSString *)AppodealUserOccupation)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    if([AppodealUserOccupation isEqualToString:@"AppodealUserOccupationOther"])
      [Appodeal setUserOccupation:AppodealUserOccupationOther];
    if([AppodealUserOccupation isEqualToString:@"AppodealUserOccupationWork"])
      [Appodeal setUserOccupation:AppodealUserOccupationWork];
    if([AppodealUserOccupation isEqualToString:@"AppodealUserOccupationSchool"])
      [Appodeal setUserOccupation:AppodealUserOccupationSchool];
    if([AppodealUserOccupation isEqualToString:@"AppodealUserOccupationUniversity"])
      [Appodeal setUserOccupation:AppodealUserOccupationUniversity];
  });
}

RCT_EXPORT_METHOD(setUserRelationship:(NSString *)AppodealUserRelationship)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    if([AppodealUserRelationship isEqualToString:@"AppodealUserRelationshipOther"])
      [Appodeal setUserRelationship:AppodealUserRelationshipOther];
    if([AppodealUserRelationship isEqualToString:@"AppodealUserRelationshipSingle"])
      [Appodeal setUserRelationship:AppodealUserRelationshipSingle];
    if([AppodealUserRelationship isEqualToString:@"AppodealUserRelationshipDating"])
      [Appodeal setUserRelationship:AppodealUserRelationshipDating];
    if([AppodealUserRelationship isEqualToString:@"AppodealUserRelationshipEngaged"])
      [Appodeal setUserRelationship:AppodealUserRelationshipEngaged];
    if([AppodealUserRelationship isEqualToString:@"AppodealUserRelationshipMarried"])
      [Appodeal setUserRelationship:AppodealUserRelationshipMarried];
    if([AppodealUserRelationship isEqualToString:@"AppodealUserRelationshipSearching"])
      [Appodeal setUserRelationship:AppodealUserRelationshipSearching];
  });
}

RCT_EXPORT_METHOD(setUserId:(NSString *)userId)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [Appodeal setUserId:userId];
  });
}

RCT_EXPORT_METHOD(setUserVkId:(NSString *)vkId)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [Appodeal setUserVkId:vkId];
  });
}

RCT_EXPORT_METHOD(setUserFacebookId:(NSString *)facebookId)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [Appodeal setUserFacebookId:facebookId];
  });
}

RCT_EXPORT_METHOD(setUserEmail:(NSString *)email)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [Appodeal setUserEmail:email];
  });
}

RCT_EXPORT_METHOD(setUserAge:(int)age)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [Appodeal setUserAge:age];
  });
}

RCT_EXPORT_METHOD(setUserInterests:(NSString *)interests)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [Appodeal setUserInterests:interests];
  });
}

@end