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
        "url":'',

        },
        {
        "tag":"日记",
        "imgUrl":"/image/dairy.png",
        "url":'/pages/broad/detail',
        'itemFn':'toDairy',
        },
        {
          "tag":"相册",
          "imgUrl":"/image/pics.png",
          "url":'',
          "itemFn":'toAlbum'
        },
        {
          "tag":"我的关注",
          "imgUrl":"/image/add.png",
          "url":'',
          "itemFn":'',
        },
        {
          "tag":"电影.电视.综艺",
          "imgUrl":"/image/video.png",
          "url":'',
          "itemFn":'toBroad',
        },
        {
          "tag":"读书",
          "imgUrl":"/image/mybook.png",
          "url":''
        },
        {
          "tag":"音乐",
          "imgUrl":"/image/music.png",
          "url":''
        },
        {
          "tag":"钱包",
          "imgUrl":"/image/wallet.png",
          "url":''
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
  toDairy:function(){
    wx.navigateTo({
      url: '../../pages/dairy/dairy-list',
    })
  },
  //去相册
  toAlbum:function(){
    wx.navigateTo({
      url:'../../pages/album/album',
    });
  }
})