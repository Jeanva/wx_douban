//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    headerslist:[
      {
        img:'/image/time.png',
        title:'豆瓣时间',
      },
      {
        img:'/image/shopping.png',
        title:'市集',
      },
      {
        img:'/image/book.png',
        title:'书店',
      },
      {
        img:'/image/play.png',
        title:'豆瓣视频',
      },
      {
        img:'/image/time.png',
        title:'豆瓣时间',
      },
      {
        img:'/image/shopping.png',
        title:'市集',
      },
      {
        img:'/image/book.png',
        title:'书店',
      },
      {
        img:'/image/play.png',
        title:'豆瓣视频',
      },
    ],
    proList:[
      {
      img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1261499442,4260263198&fm=27&gp=0.jpg',
      title:'猫咪会如何与你告别',
      desc:'2018年5月11日，星期五，一周里最清闲的一天。上午没有课，下午的课正好轮到不是我主讲，本来中午有瑜伽课。',
      author:'皇后大道西的日记',
      },
      {
        img: '/image/bing.jpeg',
        title: '标题内容1',
        desc: '描述信息1',
      },
      {
        img: '/image/bing.jpeg',
        title: '标题内容2',
        desc: '描述信息2',
      },
    ],
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.setData({
      test:'01',
    })
  },
  toDetail:function(e){
    console.log(e);
    var index=e.currentTarget.dataset.index;
    console.log(index);
  },
  
})
