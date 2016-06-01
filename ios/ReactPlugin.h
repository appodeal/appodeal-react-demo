//
//  ReactPlugin.h
//  demoAppodeal
//
//  Created by Denis on 26.05.16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <RCTBridgeModule.h>
#import <Appodeal/Appodeal.h>

//plugin
@interface ReactPlugin : NSObject <RCTBridgeModule,AppodealBannerDelegate,AppodealInterstitialDelegate,AppodealVideoDelegate,AppodealRewardedVideoDelegate,AppodealBannerViewDelegate>

@property (nonatomic, strong) AppodealBannerView *bannerView;
@property (nonatomic, strong) AppodealNativeMediaView *mediaView;

@end