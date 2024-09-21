// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Hei:0,
    tabIndex:0,
    rightIndex:0,
    scrollTops:0,
    leftList: ['小米手机', 'Redmi手机', '黑鲨手机', '5G合约', '小米众筹', '电视','大家电', '电脑办公', '小爱音箱', '路由器', '生活电器', '厨房电器'],
    rightList:[
      {
      head:'小米手机',
      partList:[{
        img:'../../images/select1.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select2.jpg',
        title:'小米10 青春'
      },
      {
        img:'../../images/select3.jpg',
        title:'小米10 Pro'
      },
      {
        img:'../../images/select4.jpg',
        title:'小米10'
      }]
    },
    {
      head:'Redmi手机',
      partList:[{
        img:'../../images/select1.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select2.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select3.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select4.jpg',
        title:'小米10 至尊版'
      }]
    },
    {
      head:'黑鲨手机',
      partList:[{
        img:'../../images/select1.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select2.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select3.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select4.jpg',
        title:'小米10 至尊版'
      }]
    },{
      head:'5G合约',
      partList:[{
        img:'../../images/select1.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select2.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select3.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select4.jpg',
        title:'小米10 至尊版'
      }]
    },
    {
      head:'小米众筹',
      partList:[{
        img:'../../images/select1.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select2.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select3.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select4.jpg',
        title:'小米10 至尊版'
      }]
    },
    {
      head:'电视',
      partList:[{
        img:'../../images/select1.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select2.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select3.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select4.jpg',
        title:'小米10 至尊版'
      }]
    },
    {
      head:'大家电',
      partList:[{
        img:'../../images/select1.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select2.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select3.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select4.jpg',
        title:'小米10 至尊版'
      }]
    },
    {
      head:'电脑办公',
      partList:[{
        img:'../../images/select1.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select2.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select3.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select4.jpg',
        title:'小米10 至尊版'
      }]
    },
    {
      head:'小爱音箱',
      partList:[{
        img:'../../images/select1.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select2.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select3.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select4.jpg',
        title:'小米10 至尊版'
      }]
    },
    {
      head:'路由器',
      partList:[{
        img:'../../images/select1.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select2.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select3.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select4.jpg',
        title:'小米10 至尊版'
      }]
    },
    {
      head:'生活电器',
      partList:[{
        img:'../../images/select1.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select2.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select3.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select4.jpg',
        title:'小米10 至尊版'
      }]
    },
    {
      head:'厨房电器',
      partList:[{
        img:'../../images/select1.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select2.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select3.jpg',
        title:'小米10 至尊版'
      },
      {
        img:'../../images/select4.jpg',
        title:'小米10 至尊版'
      }]
    }]
  },
  // 左边导航的点击事件
  tabClick:function(e){
    var index = e.target.dataset.index
    // console.log(index)
    this.setData({
      tabIndex:index,
      rightIndex:index,
      scrollTops:(index - 4)*50
    })
  },
  // 右边的滚动事件
  scrollRight:function(e){
    var modularHei = 0
    // 获取右边商品元素
    var rightList = this.data.rightList
    for(let i = 0 ; i < rightList.length ; i ++){
      // 获取id为#scroll-的节点元素
      var element = wx.createSelectorQuery().select('#scroll-' + i)
      // 获取节点信息
      element.fields({
        size:true
      },function(res){
        rightList[i].top = modularHei
        modularHei += res.height
        rightList[i].bottom = modularHei
      }).exec()
    }
    this.setData({
      rightList
    })
    console.log(this.data.rightList)
    console.log(e)
    var scrollTop = e.detail.scrollTop
    for(let i = 0 ; i < this.data.rightList.length ; i ++){
      if(scrollTop > rightList[i].top && scrollTop < rightList[i].bottom - 5){
        this.setData({
          tabIndex:i,
          scrollTops:(i - 4)*50
        })
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取屏幕的高度
    var winHei = wx.getSystemInfoSync().windowHeight
    this.setData({
      Hei:winHei
    })
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