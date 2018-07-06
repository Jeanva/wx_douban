// pages/group/group.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      title:'小组',
      group_count:430428,
      grouplist:[
        {
          group_name:'1微单摄影同学会',
          group_des:'一群摄影爱好者的交流区',
          member:68,
          cover:'http://img4.imgtn.bdimg.com/it/u=875440114,883988136&fm=11&gp=0.jpg',
          img:'/image/choosen.png',
          imgin: '/image/cho.png',
          in:false
        },
        {
          group_name:'2微单摄影同学会',
          group_des:'2群摄影爱好者的交流区',
          member:68,
          cover: 'http://img4.imgtn.bdimg.com/it/u=875440114,883988136&fm=11&gp=0.jpg',
          img:'/image/choosen.png',
          imgin: '/image/cho.png',
          in: false
        },
        {
          group_name:'3微单摄影同学会',
          group_des:'3群摄影爱好者的交流区',
          member:68,
          cover: 'http://img4.imgtn.bdimg.com/it/u=875440114,883988136&fm=11&gp=0.jpg',
          img:'/image/choosen.png',
          imgin: '/image/cho.png',
          in: false
        },
        {
          group_name:'4微单摄影同学会',
          group_des:'4群摄影爱好者的交流区',
          member:68,
          cover: 'http://img4.imgtn.bdimg.com/it/u=875440114,883988136&fm=11&gp=0.jpg',
          img:'/image/choosen.png',
          imgin: '/image/cho.png',
          in: false
        }
      ]
  },
  chooseIn:function(e){
    // console.log(e.currentTarget.dataset.in);
    var _this = this;
    // 获得data里的对象数组
    var item =this.data.grouplist;
    var inStr = JSON.stringify(e.currentTarget.dataset.item);
    console.log(inStr);
    for(var n=0;n<item.length;n++){
      //将数组的每个元素，都转换成字符串
      let tmpstr= JSON.stringify(item[n]);
      console.log('tmpstr',tmpstr,n);
      if(inStr== tmpstr){
        // 找到目标索引值，跳出循环
        console.log(n);
        break;
      }
    }
    
    console.log(this.data.grouplist[n].in);
    this.data.grouplist[n].in =!this.data.grouplist[n].in;
    console.log(this.data.grouplist[n].in);

    _this.setData({
      //更新数据
       grouplist: this.data.grouplist
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