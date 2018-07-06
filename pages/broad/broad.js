// pages/group/group.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'广播',
    showSkip:true,
    tmpFocus:null,
    card_list:[
      {
        author_name:"April Queen",
        author_img:"https://img3.doubanio.com/icon/u177282496-1.jpg",
        followers:103,
        des:"罗曼·罗兰曾经说过：从来没有人为了读书而读书，只有在书中读自己，在书中发现自己，或检查自己。这些年，这几本书，“毁”掉一个悲观、抑郁、亚健康、重度囤积症的我，让我从里到外几乎换了一个人：积极、乐观、每天锻炼、断舍离践行者。",
        like_count:18,
        likeThis:false,
        com:12,
        focus:true,
        showcard:true,
      },
      {
        author_name:"小雅嘎嘎",
        author_img:"https://img1.doubanio.com/icon/u94338554-118.jpg",
        followers:103,
        des:"罗曼·罗兰曾经说过：从来没有人为了读书而读书，只有在书中读自己，在书中发现自己，或检查自己。这些年，这几本书，“毁”掉一个悲观、抑郁、亚健康、重度囤积症的我，让我从里到外几乎换了一个人：积极、乐观、每天锻炼、断舍离践行者。",
        like_count:18,
        likeThis:false,
        com:12,
        focus: false,
        showcard:true,
      },
      {
        author_name:"大耳朵图图",
        author_img:"https://img3.doubanio.com/icon/u156137415-2.jpg",
        followers:103,
        des:"印度影史最重要的作品之一，雷伊的“阿普”三部曲第一部，也是他的处女作。小男孩阿普生活在一个破旧的印度小村庄里，日子过得很清苦，父亲为了债务抵押了家里的果园，一家人勉强度日。即使这样的环境下，阿普仍和姐姐享有难得的童年欢愉——看火车、骤降的暴雨、点水的蜻蜓…但不久姐姐得了重病去世，一家人怀着微茫的渴望，收拾行李向空白的未来前行。",
        like_count:18,
        likeThis:false,
        com:12,
        focus: false,
        showcard:true,
      }
    ]
  },
  //修改点赞数量
  likeThis:function(e){
    var _this=this;
    //将当前元素转化成字符串
    var iStr = JSON.stringify(e.currentTarget.dataset.item);
    console.log(iStr);
    let arr= this.data.card_list;
    for(var n=0;n<arr.length;n++){
      let tmpStr = JSON.stringify(arr[n]);
      if(tmpStr == iStr){
        console.log(n);
        break;
      }
    }
    this.data.card_list[n].likeThis = !this.data.card_list[n].likeThis;
    let tmpItem=this.data.card_list[n];
    if(tmpItem.likeThis){
      tmpItem.like_count +=1;
    }
    else{
      tmpItem.like_count -=1;
    }
    console.log(this.data.card_list[n].likeThis);
    _this.setData({
      card_list:this.data.card_list
    });
  },
  //是否关注
  focusCard: function (e) {
    console.log(e.target.dataset.item);
    var iStr = JSON.stringify(e.target.dataset.item);
    console.log(iStr)
    var _this = this;
    let arr=this.data.card_list;
    for(var n=0;n<arr.length;n++){
      let tmpStr = JSON.stringify(arr[n]);
      if(tmpStr == iStr){
        console.log(n);
        break;
      }
    }
    console.log(this.data.card_list[n].focus);
    this.data.card_list[n].focus = !this.data.card_list[n].focus;
    console.log(this.data.card_list[n].focus);
    _this.setData({
      card_list: this.data.card_list,
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
  
  },
  //是否显示卡片
  closeCard:function(e){
      var i = e.currentTarget.dataset.i;
      console.log(i);
      //把当前对象转换成字符串
      var iStr = JSON.stringify(i);
      console.log(iStr)
      var arr= this.data.card_list;
      for(var n=0;n<arr.length;n++){
        // 把下标对应的元素转换成字符串
        let tmpStr = JSON.stringify(arr[n]);
        if(iStr == tmpStr){
          // 相同元素即终止循环
          console.log(n);
          break;
        }
      }
      //删除对应项
      arr.splice(n,1);
      this.setData({
        card_list:arr
      });
      console.log(this.data.card_list);
  },
  changeChannel:function(e){
    //原有列表
    console.log(e.currentTarget.dataset.list);
    console.log(e.currentTarget.dataset.list.slice(1));
    var _this = this;
    var newList = e.currentTarget.dataset.list.slice(1);
    wx.showToast({
      title: '更新完成',
    })
    _this.setData({
      card_list : newList
    });
  },
  toGroup:function(){
    wx.navigateTo({
      url:'/pages/mine/focus',
    });
  },
  skip:function(e){
    console.log(e.target);
    var _this= this;
     this.setData({
       showSkip:false
     });
  }
})