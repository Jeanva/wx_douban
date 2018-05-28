// pages/audio/audio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stars:[0,1,2,3,4],
    normalStar:'/image/star.png',
    selectedStar:'/image/star_fill.png',
    audiolist:[
      "电影","电视","综艺","读书","同城","音乐"
    ],
    score:0,
    selectToAdd:false,
    foraudio:[
      {
      "img":"/image/audio_fill.png",
      "title":"找电影",
      "ctlg":"大陆 / 豆瓣高分 / 日本",
      },
      {
        "img":"/image/audio_fill.png",
        "title":"找电影",
        "ctlg":"大陆 / 豆瓣高分 / 日本",
      },
      {
        "img":"/image/audio_fill.png",
        "title":"找电影",
        "ctlg":"大陆 / 豆瓣高分 / 日本",
      },
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
  touchStar:function(e){
    console.log('a star is touched!');
    console.log(e.currentTarget);
  },
  addToList:function(e){
    let selectToAdd=this.selectToAdd;
    // this.setData(
    //   selectToAdd=true
    // );
    console.log(e.currentTarget);
    console.log(selectToAdd);
  }
})