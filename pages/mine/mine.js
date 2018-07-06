// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      tagList:[
        {
          "tag":"扫一扫",
          "imgUrl":"/image/sys.png",
          "url":"",
          'itemFn':'scan',
        },
        {
        "tag":"喜欢",
        "imgUrl":"/image/heart.png",
        "url":'/pages/mine/likes',
        },
        {
        "tag":"日记",
        "imgUrl":"/image/dairy.png",
        "url":'/pages/dairy/dairy-list',
        // 'itemFn':'toDairy',
        },
        {
          "tag":"相册",
          "imgUrl":"/image/pics.png",
          "url":'/pages/album/album',
          // "itemFn":'toAlbum'
        },
        {
          "tag":"我的关注",
          "imgUrl":"/image/add.png",
          "url":'/pages/mine/focus',
          "itemFn":'',
        },
        {
          "tag":"电影.电视.综艺",
          "imgUrl":"/image/video.png",
          "url":'/pages/audio/audio',
          // "itemFn":'toBroad',
        },
        {
          "tag":"读书",
          "imgUrl":"/image/mybook.png",
          "url":''
        },
        {
          "tag":"音乐",
          "imgUrl":"/image/music.png",
          "url":'/pages/broad/detail'
        },
        {
          "tag":"钱包",
          "imgUrl":"/image/wallet.png",
          "url":'/pages/pay/pay'
        },
        {
          'tag':'地图',
          'imgUrl':'/image/pics.png',
          'url':'',

        }
    ]
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
  
  },
  commonFn:function(e){
    console.log(e.currentTarget.id);
    console.log(e.currentTarget.dataset.url);
    //如果当前对象是扫一扫，就调用扫一扫
     if ( e.currentTarget.id== '扫一扫'){
       this.scan();
       return;
      }
      if(e.currentTarget.id=='地图'){
        this.getLocation();
        return;
      }
      else{
      wx.navigateTo({
        url:e.currentTarget.dataset.url
      });
      }
  },
  /*
  gotoalbum:function(){
    wx.navigateTo({
      url: '/pages/album/album',
    })
  },
  //去书影音
  toBroad:function(e){
    wx.navigateTo({
      url:'../../pages/broad/detail',
    });
    console.log(e);
    console.log(data.tagList);
  },*/
  getLocation:function(){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
  },

  //扫一扫
  scan: function () {
    var that = this;
    var show;
    wx.scanCode({
      success: (res) => {
        this.show = "--result:" + res.result + "--scanType:" + res.scanType + "--charSet:" + res.charSet + "--path:" + res.path;
        that.setData({
          show: this.show
        })
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: (res) => {
        wx.showToast({
          title: '失败',
          icon: 'success',
          duration: 2000
        })
      },
      complete: (res) => {
      }
    })
  },
  // tonavigator:function(e){
  //   console.log(e.data.tagList.item.url);
  //   wx.navigateTo({
  //     url: e.data.tagList.item.url,
  //   })
  // }
  // 去日记详情页
  /*toDairy:function(){
    wx.navigateTo({
      url: '../../pages/dairy/dairy-list',
    })
  },*/
  //去相册
  /*toAlbum:function(){
    wx.navigateTo({
      url:'../../pages/album/album',
    });
  }*/
})