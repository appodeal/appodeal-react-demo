#import "AppodealNativeAdViewManager.h"
#import "RCTLog.h"
#import "RCTConvert.h"
#import "RCTBridge.h"
#import "RCTEventDispatcher.h"

@implementation AppodealNativeAdViewManager

RCT_EXPORT_MODULE();

@synthesize bridge = _bridge;

//return view to js, when import
- (UIView *)view
{
  return self.myView;
}

-(AppodealNativeAdViewAttributes *) attributes
{
  if(!_attributes)
    _attributes=[[AppodealNativeAdViewAttributes alloc] init];
  return _attributes;
}

- (NSInteger)appodealAdViewTypeConvert:(NSString*) adViewType
{
  NSInteger adtype=1;
  if([adViewType isEqualToString:@"AppodealNativeAdTypeNewsFeed"])
    adtype=AppodealNativeAdTypeNewsFeed;
  if([adViewType isEqualToString:@"AppodealNativeAdTypeContentStream"])
    adtype=AppodealNativeAdTypeContentStream;
  if([adViewType isEqualToString:@"AppodealNativeAdType320x50"])
    adtype=AppodealNativeAdType320x50;
  if([adViewType isEqualToString:@"AppodealNativeAdType728x90"])
    adtype=AppodealNativeAdType728x90;

  return adtype;
}

RCT_EXPORT_METHOD(loadNativeAd:(CGFloat)x y:(CGFloat)y adViewType:(NSString *)adViewType)
{
  self.adViewType = [self appodealAdViewTypeConvert:adViewType];
  self.x = x;
  self.y = y;
  dispatch_async(dispatch_get_main_queue(), ^{
    self.adService = [[AppodealNativeAdService alloc] init];
    self.adService.delegate = self;
    [self.adService loadAd];
  });
}

- (void)nativeAdServiceDidLoad: (AppodealNativeAd*) nativeAd{
        self.ad = nativeAd;
        //[self.bridge.eventDispatcher sendAppEventWithName:@"nativeAdServiceDidLoad" body:@{@"":@""}];
    dispatch_async(dispatch_get_main_queue(), ^{
        //self.adView = [AppodealNativeAdView nativeAdViewWithType:self.adViewType andNativeAd:self.ad andAttributes:self.attributes rootViewController:[[UIApplication sharedApplication] keyWindow].rootViewController];
        //[self.adView setFrame: CGRectMake(self.x, self.y, self.attributes.width, self.attributes.heigth)];
        //self.myView = [[UIView alloc] init];
        //[self.myView addSubview:self.adView];
      

        self.myView = [[UIView alloc] init];
        [self.myView setFrame: CGRectMake(10, 350, 200, 200)];
        [self.myView setBackgroundColor:[UIColor clearColor]];
      
        UIImage *image = [UIImage imageWithData:[NSData dataWithContentsOfURL:self.ad.image.imageUrl]];
        UIImageView* blockView = [[UIImageView alloc] initWithImage:image];
        blockView.frame = CGRectMake(0 ,0, 50,50);
        [self.myView addSubview:blockView];
      
        UIImage *icon = [UIImage imageWithData:[NSData dataWithContentsOfURL:self.ad.icon.imageUrl]];
        UIImageView* blockView1 = [[UIImageView alloc] initWithImage:icon];
        blockView1.frame = CGRectMake(55 ,0, 50,50);
        [self.myView addSubview:blockView1];
      
        UILabel *yourLabel = [[UILabel alloc] initWithFrame:CGRectMake(0, 60, 100, 20)];
        [yourLabel setTextColor:[UIColor blackColor]];
        [yourLabel setBackgroundColor:[UIColor clearColor]];
        [yourLabel setFont:[UIFont fontWithName: @"Trebuchet MS" size: 10.0f]];
        [yourLabel setText:self.ad.title];
        [self.myView addSubview:yourLabel];
      
        UILabel *yourLabel1 = [[UILabel alloc] initWithFrame:CGRectMake(0, 70, 100, 20)];
        [yourLabel1 setTextColor:[UIColor blackColor]];
        [yourLabel1 setBackgroundColor:[UIColor clearColor]];
        [yourLabel1 setFont:[UIFont fontWithName: @"Trebuchet MS" size: 10.0f]];
        [yourLabel1 setText:self.ad.subtitle];
        [self.myView addSubview:yourLabel1];
      
        UILabel *yourLabel2 = [[UILabel alloc] initWithFrame:CGRectMake(0, 80, 100, 20)];
        [yourLabel2 setTextColor:[UIColor blackColor]];
        [yourLabel2 setBackgroundColor:[UIColor clearColor]];
        [yourLabel2 setFont:[UIFont fontWithName: @"Trebuchet MS" size: 10.0f]];
        [yourLabel2 setText:self.ad.descriptionText];
        [self.myView addSubview:yourLabel2];
      
        UILabel *yourLabel4 = [[UILabel alloc] initWithFrame:CGRectMake(0, 100, 100, 20)];
        [yourLabel4 setTextColor:[UIColor blackColor]];
        [yourLabel4 setBackgroundColor:[UIColor clearColor]];
        [yourLabel4 setFont:[UIFont fontWithName: @"Trebuchet MS" size: 10.0f]];
        [yourLabel4 setText:self.ad.callToActionText];
        [self.myView addSubview:yourLabel4];
      
        UILabel *yourLabel5 = [[UILabel alloc] initWithFrame:CGRectMake(0, 100, 100, 20)];
        [yourLabel5 setTextColor:[UIColor blackColor]];
        [yourLabel5 setBackgroundColor:[UIColor clearColor]];
        [yourLabel5 setFont:[UIFont fontWithName: @"Trebuchet MS" size: 10.0f]];
        [yourLabel5 setText:self.ad.contentRating];
        [self.myView addSubview:yourLabel5];
  
        [self.bridge.eventDispatcher sendAppEventWithName:@"nativeAdServiceDidLoad" body:@{@"":@""}];
    });
}

RCT_EXPORT_METHOD(attachToView)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [self.ad attachToView:self.myView viewController:[[UIApplication sharedApplication] keyWindow].rootViewController];
  });
  
}

RCT_EXPORT_METHOD(detachFromView)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    [self.ad detachFromView];
  });
  
}

- (void)nativeAdServiceDidFailedToLoad
{
  [self.bridge.eventDispatcher sendAppEventWithName:@"nativeAdServiceDidFailedToLoad" body:@{@"":@""}];
}

- (void)nativeAdDidClick:(AppodealNativeAd *)nativeAd
{
  [self.bridge.eventDispatcher sendAppEventWithName:@"nativeAdDidClick" body:@{@"":@""}];
}

- (void)nativeAdDidPresent:(AppodealNativeAd *)nativeAd
{
  [self.bridge.eventDispatcher sendAppEventWithName:@"nativeAdDidPresent" body:@{@"":@""}];
}

RCT_EXPORT_METHOD(setNativeAdAttributes_width_height:(int)width heigth:(int)height)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    self.attributes.width=width;
    self.attributes.heigth=height;
  });
}
RCT_EXPORT_METHOD(setNativeAdAttributes_roundedIcon:(BOOL)value)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    self.attributes.roundedIcon=value;
  });
}
RCT_EXPORT_METHOD(setNativeAdAttributes_sponsored:(BOOL)value)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    self.attributes.sponsored=value;
  });
}
RCT_EXPORT_METHOD(setNativeAdAttributes_titleFont:(id)json)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    self.attributes.titleFont=[RCTConvert UIFont:json];
  });
}
RCT_EXPORT_METHOD(setNativeAdAttributes_descriptionFont:(id)json)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    self.attributes.descriptionFont=[RCTConvert UIFont:json];
  });
}
RCT_EXPORT_METHOD(setNativeAdAttributes_subtitleFont:(id)json)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    self.attributes.subtitleFont=[RCTConvert UIFont:json];
  });
}
RCT_EXPORT_METHOD(setNativeAdAttributes_buttonTitleFont:(id)json)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    self.attributes.buttonTitleFont=[RCTConvert UIFont:json];
  });
}

RCT_EXPORT_METHOD(setNativeAdAttributes_titleFontColor:(id)json)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    self.attributes.titleFontColor=[RCTConvert UIColor:json];
  });
}
RCT_EXPORT_METHOD(setNativeAdAttributes_descriptionFontColor:(id)json)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    self.attributes.descriptionFontColor=[RCTConvert UIColor:json];
  });
}
RCT_EXPORT_METHOD(setNativeAdAttributes_subtitleColor:(id)json)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    self.attributes.subtitleColor=[RCTConvert UIColor:json];
  });
}
RCT_EXPORT_METHOD(setNativeAdAttributes_buttonColor:(id)json)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    self.attributes.buttonColor=[RCTConvert UIColor:json];
  });
}
RCT_EXPORT_METHOD(setNativeAdAttributes_starRatingColor:(id)json)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    self.attributes.starRatingColor=[RCTConvert UIColor:json];
  });
}

//ex
RCT_EXPORT_METHOD(setNativeAdAttributes_titleColor_descriptionColor:(float)tR tG:(float)tG tB:(float)tB tA:(float)tA dR:(float)dR dG:(float)dG dB:(float)dB dA:(float)dA)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    self.attributes.titleFont=[UIFont boldSystemFontOfSize:12];
    self.attributes.roundedIcon = YES;
    self.attributes.sponsored = YES;
    self.attributes.titleFontColor=[UIColor colorWithRed:tR green:tG blue:tB alpha:tA];
    self.attributes.descriptionFontColor=[UIColor colorWithRed:dR green:dG blue:dB alpha:dA];
  });
}

@end
