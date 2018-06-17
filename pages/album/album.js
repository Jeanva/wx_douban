// pages/album/album.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {  
    productInfo: {},
    // albumList:[{name:'小花',length:4},{name:'小白',length:10},{name:'小兔',length:32}],
    albumList: [],   //相册列表
    isShow:false,
    newalbum:{name:'',length:0},
  },  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 生命周期函数--监听页面加载

    //是否显示相册列表，如果newalbum不为空，则为true
    //  isShow: (options.isShow == "true" ? true : false);
    if (this.data.albumList.length>0){
        isShow:false;
    }
    else{isShow:true}
    // console.log('isShow:'+options.isShow);

    if(options){
      
      //接收创建相册页面传来的参数
      var albumName = options.album_name;
      var albumDes = options.album_des;
      console.log('传递来的参数album_name', options.album_name, 'album_des', options.album_des);
      
      // 把传来的参数，保存到新的相册对象
      this.data.newalbum.name=albumName;
      this.data.newalbum.des = albumDes;
      console.log('newablum', this.data.newalbum);

      // 把新相册对象，放入到相册数组中
      var new_album=this.data.newalbum;
      var tmp_a_list =this.data.albumList;
      // var tmp_a_list = app.globalData.albumList;
      tmp_a_list.push(new_album);
      
      //用setData将新数值渲染到页面
      this.setData({
        albumList: tmp_a_list,
      });
      console.log(this.data.albumList);    
    }
  },
  //去新页面上传图片
  uploadImage:function(){
    wx.navigateTo({
      url: 'upload',
    })
  },
  // 测试方法——添加图片
  bindChooiceProduct: function () {  
    var that = this;  
    
    wx.chooseImage({  
      count: 3,  //最多可以选择的图片总数  
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {  
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        var tempFilePaths = res.tempFilePaths;  
        //启动上传等待中...  
        wx.showToast({  
          title: '正在上传...',  
          icon: 'loading',  
          mask: true,  
          duration: 10000  
        })  
        var uploadImgCount = 0;  
        for (var i = 0, h = tempFilePaths.length; i < h; i++) {  
          wx.uploadFile({  
            url: util.getClientSetting().domainName + '/home/uploadfilenew',  
            filePath: tempFilePaths[i],  
            name: 'uploadfile_ant',  
            formData: {  
              'imgIndex': i  
            },  
            header: {  
              "Content-Type": "multipart/form-data"  
            },  
            success: function (res) {  
              uploadImgCount++;  
              var data = JSON.parse(res.data);  
              //服务器返回格式: { "Catalog": "testFolder", "FileName": "1.jpg", "Url": "https://test.com/1.jpg" }  
              var productInfo = that.data.productInfo;  
              if (productInfo.bannerInfo == null) {  
                productInfo.bannerInfo = [];  
              }  
              productInfo.bannerInfo.push({  
                "catalog": data.Catalog,  
                "fileName": data.FileName,  
                "url": data.Url  
              });  
              that.setData({  
                productInfo: productInfo  
              });  
    
              //如果是最后一张,则隐藏等待中  
              if (uploadImgCount == tempFilePaths.length) {  
                wx.hideToast();  
              }  
            },  
            fail: function (res) {  
              wx.hideToast();  
              wx.showModal({  
                title: '错误提示',  
                content: '上传图片失败',  
                showCancel: false,  
                success: function (res) { }  
              })  
            }  
          });  
        }  
      }  
    });  
  }  ,

  //去新建相册页面
  gotoCreate:function(){
    wx.navigateTo({
      url: 'create',
    })
  },

  // 测试方法添加相册
  createAlbum:function(){
    var _this=this;
    var albumList = this.data.albumList;
    albumList.push({name:'测试',length:10});
    _this.setData({
      albumList:(albumList),
      isShow:false
    });
    console.log(albumList);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {
  
  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (options) {
    
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