Page({

  /**
   * 页面的初始数据
   */
  data: {
    //首页导航数据
    navList:[],
    //被点击导航菜单的索引
    currentIndexNav:0,
    //轮播图数据
    swiperList:[],
    //列表数据
    videosList:[]
  },

  /**
   * 获取首页导航数据
   */
  getNavList: function(){
    let that = this;
    //利用小程序方法发起请求
    wx.request({
      url:'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/navList',
      success(res){
        if(res.data.code === 0){
          that.setData({
            navList:res.data.data.navList
          })
        }
      }
    })
  },
  /**
   * 获取轮播图数据
   */
  getSwiperList: function(){
    let that = this;
    //利用小程序方法发起请求
    wx.request({
      url:'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/swiperList',
      success(res){
        if(res.data.code === 0){
          that.setData({
            swiperList:res.data.data.swiperList
          })
        }
      }
    })
  },
  /**
   * 获取列表数据
   */
  getVideosList: function(){
    let that = this;
    //利用小程序方法发起请求
    wx.request({
      url:'https://www.fastmock.site/mock/c8b94bc7b5f6687ccfe99d2c4132803f/bi/videosList',
      success(res){
        if(res.data.code === 0){
          that.setData({
            videosList:res.data.data.videosList
          })
        }
      }
    })
  },
  /**
   * 点击首页导航
   */
  activeNav:function(e){
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1 获取页面导航数据
    this.getNavList();
    //2 获取轮播图数据
    this.getSwiperList();
    //3 获取视频列表数据
    this.getVideosList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})