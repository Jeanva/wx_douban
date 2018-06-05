// pages/broad/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'广播详情',
    po_date:'04-01',
    new_likes:15,
    currentTab:0,
    comments:[
      {
        user:'风轻云淡',
        comment:'听过他的CD，从此不能自拔',
        to:'喜羊羊',
        date:'5天前'
      },
      {
        user:'风轻云淡',
        comment:'听过他的CD，从此不能自拔',
        to:'灰太狼',
        date:'6天前'
      },
      {
        user:'风轻云淡',
        comment:'听过他的CD，从此不能自拔',
        to:'熊大',
        date:'7天前'
      },
      {
        user:'风轻云淡',
        comment:'听过他的CD，从此不能自拔',
        to:'熊二',
        date:'8天前'
      },
      {
        user:'风轻云淡',
        comment:'听过他的CD，从此不能自拔',
        to:'',
        date:'9天前'
      },
      {
        user:'风轻云淡',
        comment:'听过他的CD，从此不能自拔',
        to:'',
        date:'9天前'
      },
      {
        user:'风轻云淡',
        comment:'听过他的CD，从此不能自拔',
        to:'',
        date:'9天前'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数

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
  

  //滑动切换
  swiperTab:function( e ){
    var that=this;
    that.setData({
      currentTba:e.detail.current
    });
  },
  //点击切换
  clickTab: function( e ) {  

    var that = this;  

    if( this.data.currentTab === e.target.dataset.current ) {  
      return false;  
    } else {  
      that.setData( {  
        currentTab: e.target.dataset.current  
      })  
    }  
  }  
})