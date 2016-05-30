//
//  ReactMediationAdapter.h
//  demoAppodeal
//
//  Created by Denis on 26.05.16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <RCTBridgeModule.h>
#import <Appodeal/Appodeal.h>
#import <Appodeal/AppodealNativeAd.h>
#import <Appodeal/AppodealNativeAdService.h>

//plugin
@interface ReactPlugin : NSObject <RCTBridgeModule,AppodealNativeAdServiceDelegate,AppodealNativeAdDelegate,AppodealBannerDelegate,AppodealInterstitialDelegate,AppodealVideoDelegate,AppodealRewardedVideoDelegate,AppodealBannerViewDelegate>

@property (nonatomic, strong) AppodealNativeAdService* adService;
@property (nonatomic, strong) AppodealNativeAd* ad;
@property (nonatomic, strong) AppodealNativeAdViewAttributes* attributes;
@property (nonatomic, strong) AppodealBannerView *bannerView;
@property (nonatomic, strong) AppodealNativeMediaView *mediaView;

@end