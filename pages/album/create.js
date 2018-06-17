// pages/album/create.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newAlbum:
      {albumName:'',albumDes:''}
    ,
    chanel:[
      {name:'美食',num:150635,},
      {name: '摄影',num: 150635,},
      {name: '美食',num: 150635,},
      {name: '摄影',num: 150635,},
      {name: '美食',num: 150635,},
      {name: '摄影',num: 150635,},
      {name: '美食',num: 150635,},
      {name: '摄影',num: 150635,},
    ],
    // getGlobalAlbum:app.globalData.albumList
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var getGlobalAlbum = app.globalData.albumList;
    console.log(getGlobalAlbum);
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
  inputTitle:function(e){
    // console.log(e.detail.value);
    //将输入值保存到当前数据对象中
    this.data.newAlbum.albumName = e.detail.value;
    console.log(this.data.newAlbum.albumName);
  },
  inputDes:function(e){
    // console.log(e.detail.value);
    //将输入值保存到当前数据对象中
    this.data.newAlbum.albumDes = e.detail.value;
    console.log(this.data.newAlbum.albumDes);
  },
  //创建相册并跳转到相册列表
  createAlbum:function(){
    var albumName = this.data.newAlbum.albumName;
    var albumDes = this.data.newAlbum.albumDes;
    wx.navigateTo({
      url: 'album?album_name=' + albumName+'&album_des='+albumDes
    });
    getApp().globalData.albumList.push({name:albumName,des:albumDes}) ;
    console.log(getApp().globalData.albumList);
  }
})