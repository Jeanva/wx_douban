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
        url:"pages/broad/detail",
      },
      {
        img:'/image/shopping.png',
        title:'市集',
        url:"#"
      },
      {
        img:'/image/book.png',
        title:'书店',
        url:"#"
      },
      {
        img:'/image/play.png',
        title:'豆瓣视频',
        url:"#"
      },
      {
        img:'/image/time.png',
        title:'豆瓣时间',
        url:"#"
      },
      {
        img:'/image/shopping.png',
        title:'市集',
        url:"#"
      },
      {
        img:'/image/book.png',
        title:'书店',
        url:"#"
      },
      {
        img:'/image/play.png',
        title:'豆瓣视频',
        url:"#"
      },
    ],
    proList:[
      {
        hot:true,
      img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1261499442,4260263198&fm=27&gp=0.jpg',
      title:'猫咪会如何与你告别',
      desc:'2018年5月11日，星期五，一周里最清闲的一天。上午没有课，下午的课正好轮到不是我主讲，本来中午有瑜伽课。',
      author:'皇后大道西的日记',
      author_img:'/image/avatar.png'
      },
      {
        hot:false,
        img: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=387492010,675878490&fm=58',
        title: '光影记录岁月,电影荡涤心灵',
        desc: '看到这个题目，就知道接下来说的是什么了，对了，就是电影。作为一个有文艺细胞的青年，电影可是生活的一大点缀。虽然就目前市场而言，文艺电影难以迎合商业机制',
        author:'皇后大道西的日记',
        author_img:'/image/avatar.png'
      },
      {
        hot:false,
        img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=100636646,1653127262&fm=58',
        title: '外面的世界很精彩',
        desc: '有了读书，电影，音乐，能与文艺不可分割的自然就是旅行了。文艺青年的世界应该是多姿多彩的，说一个我心中的文艺女神',
        author:'皇后大道西的日记',
        author_img:'/image/avatar.png'
      },
      {
        hot:false,
        img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1868375378,1293079707&fm=58',
        title: '余音绕梁，缓缓唱进你我的心里',
        desc: '说完读书和电影，怎能不提音乐，如今是一个音乐多元的时代，文艺青年更偏爱的不是声嘶力竭的摇滚，也不是字字含情的爱情歌曲，他们更喜欢歌词细腻，哀而不伤，淡淡忧愁',
        author:'皇后大道西的日记',
        author_img:'/image/avatar.png'
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
    });
    console.log(this.data.test);
  },
  toDetail:function(e){
    console.log(e);
    var index=e.currentTarget.dataset.index;
    console.log(index);
  },
  gotoDetail:function(){
    wx.navigateTo({
      url:"../../pages/broad/detail",
    });
    console.log('gotoDetail');
  },
  /* 跳转到详情页 */
  toPage:function(){
    wx.navigateTo({
      url:'../../pages/broad/detail'
    });
    console.log('toPage from index.js');
  },
  toAuthor:function(){
    wx.navigateTo({
      url:'../../pages/broad/detail'
    });
    console.log('toAuthor from index.js');
  }
})
