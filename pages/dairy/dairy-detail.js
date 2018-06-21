// pages/dairy/dairy-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      author:'埃斯梅拉达',
      title:'赋得古原草送别',
      detail:'离离原上草，一岁一枯荣，野火烧不尽，春风吹又生。远芳侵古道，晚翠接荒城。又送王孙去，萋萋满别情。',
      date:'2018-06-18',
      view:0,
    
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
  toProfile:function(){
    wx.navigateTo({
      url: "../../pages/dairy/dairy-list",
    })
    console.log("go to author's profile");
  },
  toComment:function(){
    wx.navigateTo({
      url: "../../pages/dairy/dairy-list",
    })
  }
})