// pages/dairy/dairy-list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dairy:[
      { name: '端午节安康', 
        des:'今天是端午节,吃了粽子之后就开始写代码。一直晚睡，导致白天精神不济。今天是端午节,吃了粽子之后就开始写代码。一直晚睡，导致白天精神不济',
        img:'/image/bing.jpeg',
        date:'2018-06-18',
        priv:'仅自己可见'
      },
      {
        name: '赋得古原草送别',
        des: '离离原上草，一岁一枯荣，野火烧不尽，春风吹又生。远芳侵古道，晚翠接荒城。又送王孙去，萋萋满别情。',
        date: '2018-06-06',
        priv: '仅自己可见'
      }
      ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.dairy[0].name);
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