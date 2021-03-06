//
//  GMAlbumsViewCell.h
//  GMPhotoPicker
//
//  Created by Guillermo Muntaner Perelló on 22/09/14.
//  Copyright (c) 2014 Guillermo Muntaner Perelló. All rights reserved.
//

@import UIKit;
@import Photos;

@interface GMAlbumsViewCell : UITableViewCell

@property (strong) PHFetchResult *assetsFetchResults;
@property (strong) PHAssetCollection *assetCollection;

//The labels
@property (nonatomic, strong) UILabel *titleLabel;
@property (nonatomic, strong) UILabel *infoLabel;
//The imageView
@property (nonatomic, strong) UIImageView *imageView1;
@property (nonatomic, strong) UIImageView *imageView2;
@property (nonatomic, strong) UIImageView *imageView3;
//Video additional information
@property (nonatomic, strong) UIImageView *videoIcon;
@property (nonatomic, strong) UIImageView *slowMoIcon;
@property (nonatomic, strong) UIView* gradientView;
@property (nonatomic, strong) CAGradientLayer *gradient;
//Selection overlay

@property (nonatomic, strong) UILabel *textLabelNew;
@property (nonatomic, strong) UILabel *detailLabelNew;

@property (nonatomic, strong) NSString *text;
@property (nonatomic, strong) NSString *detail;

- (void)setVideoLayout:(BOOL)isVideo;
@end
