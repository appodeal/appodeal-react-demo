#import "RCTViewManager.h"
#import <Foundation/Foundation.h>
#import <RCTBridgeModule.h>
#import <Appodeal/Appodeal.h>
#import <Appodeal/AppodealNativeAd.h>
#import <Appodeal/AppodealNativeAdService.h>

@interface AppodealNativeAdViewManager : RCTViewManager <AppodealNativeAdServiceDelegate,AppodealNativeAdDelegate>

@property (nonatomic, strong) AppodealNativeAdViewAttributes* attributes;
@property (nonatomic, strong) AppodealNativeAdService* adService;
@property (nonatomic, strong) AppodealNativeAd* ad;
@property (nonatomic, strong) UIView* myView;
@property (nonatomic) NSInteger adViewType;
@property (nonatomic) CGFloat x;
@property (nonatomic) CGFloat y;

@end
