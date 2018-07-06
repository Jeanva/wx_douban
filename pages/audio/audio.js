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
      {
        title:"电影"
      ,img:"",
        url:"#"
      },
      {
        title:"电视"
      ,img:"",
        url:"#"
      },
      {
        title:"综艺"
      ,img:"",
        url:"#"
      },
      {
        title:"读书"
      ,img:"",
        url:"#"
      },
      {
        title:"同城"
      ,img:"",
        url:"#"
      },
      {
        title:"音乐"
      ,img:"",
        url:"#"
      }
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
    ],
    newfilms:[
      {
        "name":"复仇者联盟三",
        "img":"/image/fulian3.jpg",
        "want": false,
        "score":"0"
      },
      {
        "name":"昼颜",
        "img":"/image/zhouyan.jpg",
        "want":false,
        "score":"1"
      },
      {
        "name":"完美陌生人",
        "img":"/image/msr.jpg",
        "want": false,
        "score":"3"
      },
      {
        "name":"罪途2",
        "img":"/image/zuitu.jpg",
        "want": false,
        "score":"4"
      }
    ],
    todayfilm:{
      title:'今日推荐',
      film_num:10,
    },
    film_list:[
      {
      "film_tag":"缤纷盘点",
      "film_desc":"一脸冷漠看完《昆池岩》？这份片单给你更猛的",
      "img":"/image/movie_1.jpg"
      },
      {
        "film_tag":"今晚我有空",
        "film_desc":"豆瓣9.1分，封神般的演技,品味经典",
        "img":"/image/hps.jpg"
      },
      {
        "film_tag":"缤纷盘点",
        "film_desc":"一脸冷漠看完《昆池岩》？这份片单给你更猛的",
        "img":"/image/movie_1.jpg"
        },
        {
          "film_tag":"今晚我有空",
          "film_desc":"豆瓣9.1分，封神般的演技，吊打90后面瘫",
          "img":"/image/hps.jpg"
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
  touchStar:function(e){
    console.log('a star is touched!');
    console.log(e.currentTarget);
  },
  addToList:function(e){
    var _this = this;
    console.log(e.currentTarget.dataset.sel);
    // console.log(this.data.newfilms.want);
    var str=JSON.stringify(e.currentTarget.dataset.sel);
    var want = this.data.newfilms.want;
    let newfilms = this.data.newfilms;
    for(var i=0;i<newfilms.length;i++){
      let tmpStr = JSON.stringify(newfilms[i]);
        if(tmpStr==str){
          console.log('i',i);
          break 
        }
    }
    this.data.newfilms[i].want= !this.data.newfilms[i].want;
    _this.setData({
      newfilms:newfilms
    });
    // console.log(want);
    console.log(_this.data.newfilms);

    wx.showToast({
      title: '以添加到想看列表',
      icon:'success',
      duration:2000,
    })
  }
})