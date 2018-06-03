// pages/group/group.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'广播',
    card_list:[
      {
        author_name:"April Queen",
        author_img:"https://img3.doubanio.com/icon/u177282496-1.jpg",
        followers:103,
        des:"罗曼·罗兰曾经说过：从来没有人为了读书而读书，只有在书中读自己，在书中发现自己，或检查自己。这些年，这几本书，“毁”掉一个悲观、抑郁、亚健康、重度囤积症的我，让我从里到外几乎换了一个人：积极、乐观、每天锻炼、断舍离践行者。",
        likes:18,
        com:12,
        show:true,
      },
      {
        author_name:"小雅嘎嘎",
        author_img:"https://img1.doubanio.com/icon/u94338554-118.jpg",
        followers:103,
        des:"罗曼·罗兰曾经说过：从来没有人为了读书而读书，只有在书中读自己，在书中发现自己，或检查自己。这些年，这几本书，“毁”掉一个悲观、抑郁、亚健康、重度囤积症的我，让我从里到外几乎换了一个人：积极、乐观、每天锻炼、断舍离践行者。",
        likes:18,
        com:12,
        show:true,
      },
      {
        author_name:"大耳朵图图",
        author_img:"https://img3.doubanio.com/icon/u156137415-2.jpg",
        followers:103,
        des:"印度影史最重要的作品之一，雷伊的“阿普”三部曲第一部，也是他的处女作。小男孩阿普生活在一个破旧的印度小村庄里，日子过得很清苦，父亲为了债务抵押了家里的果园，一家人勉强度日。即使这样的环境下，阿普仍和姐姐享有难得的童年欢愉——看火车、骤降的暴雨、点水的蜻蜓…但不久姐姐得了重病去世，一家人怀着微茫的渴望，收拾行李向空白的未来前行。",
        likes:18,
        com:12,
        show:true,
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
  closepanel:function(){
    this.setData(!this.show);
  }
})