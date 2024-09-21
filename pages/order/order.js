// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Hei:0,
    tabIndex:0,
    tabContent:[
      {
        name:'全部订单'
      },
      {
        name:'待付款'
      },
      {
        name:'待收货'
      }
    ],
    obligationsList:[],
    allOrdersList:[],
    receivedList:[]
  },
  // 获取导航的下标值
  getTabIndex:function(e){
    // console.log(e)
    var index = e.target.dataset.index
    this.setData({
      tabIndex:index
    })
  },

  // 获取内容的下标值
  getContentIndex:function(e){
    var index = e.detail.current
    this.setData({
      tabIndex:index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      tabIndex:options.id
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
    var winHei = wx.getSystemInfoSync().windowHeight
    var obligationsList = wx.getStorageSync('obligationsList')
    var receivedList = wx.getStorageSync('receivedList')
    var all = obligationsList.concat(receivedList)
    var allOrdersList = wx.getStorageSync('allOrdersList')
    this.setData({
      Hei:winHei,
      obligationsList,
      allOrdersList,
      receivedList,
    })
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