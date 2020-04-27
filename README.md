### 仿B站的微信小程序

#### 1、主要实现的首页导航、轮播、列表渲染、详情页的跳转、对应的推荐视频以及评论

<img src="C:\Users\樊佳洁\AppData\Roaming\Typora\typora-user-images\image-20200427170959939.png" alt="image-20200427170959939"  />![image-20200427171102099](C:\Users\樊佳洁\AppData\Roaming\Typora\typora-user-images\image-20200427171102099.png)

#### 2、主要遇见的问题

- 首先在对接口时要注意接口名字的统一
- 在使用了tabBar之后就不能再使用链接跳转到已经配置过tabBar的路径了
- 使用图片的一个type模式 mode="widthFix"，意思是：缩放模式，宽度不变，高度自动变化，保持原图宽高比不变

#### 3、用到的接口

| 接口名         | 接口路径                                                     | 是否需要匹配id |
| -------------- | ------------------------------------------------------------ | -------------- |
| 首页导航数据   | https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/navList | 否             |
| 轮播图数据     | https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/swiperList | 否             |
| 列表数据       | https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/videosList | 否             |
| 视频的详情数据 | https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/videoDetail?id=1 | 是             |
| 视频的评论数据 | https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/commentsList?id=1 | 是             |
| 视频的推荐视频 | https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/othersList?id=1 | 是             |

#### 4、以上所有均为模仿B站黑马程序员视频所需学

[视频链接](https://www.bilibili.com/video/BV15J411Y7n4/?p=28)