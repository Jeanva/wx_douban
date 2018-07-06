// pages/mine/focus.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'我的关注',
    currentTab:0,
    index:0,
    focusList:[
      { title:'频道',
        cur:0,
        list:[
          { "name": '黑猫警长', "img": "/image/bing.jpeg"},
          { "name": '黑猫警长', "img": "/image/bing.jpeg"},
          { "name": '黑猫警长', "img": "/image/bing.jpeg"}
        ]
      },
      { title: '人物 ',
        cur:1,
        list: [
          { "name": '黑猫警长1', "img": "/image/bing.jpeg" },
          { "name": '黑猫警长1', "img": "/image/bing.jpeg" },
          { "name": '黑猫警长1', "img": "/image/bing.jpeg" }
        ]
       },
      { title: '话题' ,
        cur:2,
        list: [
          { "name": '黑猫警长2', "img": "/image/bing.jpeg" },
          { "name": '黑猫警长2', "img": "/image/bing.jpeg" },
          { "name": '黑猫警长2', "img": "/image/bing.jpeg" }
        ]
      },
      { title: '用户' ,
        cur:3,
        list: [
          { "name": '黑猫警长3', "img": "/image/bing.jpeg" },
          { "name": '黑猫警长3', "img": "/image/bing.jpeg" },
          { "name": '黑猫警长3', "img": "/image/bing.jpeg" }
        ]
      }
    ],

  },
  toScrlist:function(e){
    // console.log(e.currentTarget.dataset.current);
    console.log(e);
    var _this=this;

    if(this.data.currentTab===e.currentTarget.dataset.current){
      return false;
    }else{
      _this.setData({
        currentTab:e.currentTarget.dataset.current
      });
    }
  },
  swiperTab:function(e){
    console.log('swiperTab',e.detail.current);
      var _this =this;
      _this.setData({
        currentTab: e.detail.current
      });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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