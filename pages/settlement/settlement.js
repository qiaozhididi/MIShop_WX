// pages/settlement/settlement.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isBlock: false,
    settlementList: [],
    ordinal: 0,
    addressList: [],
    totalNum: 0,
    totalPrice: 0

  },

  //显示模态框
  openModal: function () {
    var _this = this
    var isBlock = this.data.isBlock
    if(isBlock == false){
      wx.showModal({
      title: '提示',
      content: '是否付款',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          //将用户结算的数据缓存到待收货数组
          //obligationsList
          //将用户结算的数据缓存到全部订单数组
          //allOrdersList
          var ordinal = wx.getStorageSync('ordinal')[0]
          ordinal++
          wx.setStorageSync('ordinal', [ordinal])
          var obligationsList = wx.getStorageSync('obligationsList')
          var allOrdersList = wx.getStorageSync('allOrdersList')
          //(获取缓存数据的变量，添加或修改的数组名key，按钮的文本)
          _this.pushData(obligationsList, 'obligationsList', '确认收货', ordinal)
          _this.pushData(allOrdersList, 'allOrdersList', '确认收货', ordinal)
          wx.navigateTo({
            url: '/pages/order/order?id=2',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
          //将用户结算的数据缓存到待付款数组
          //receivedList
          //将用户结算的数据缓存到全部订单数组
          var ordinal = wx.getStorageSync('ordinal')[0]
          ordinal++
          wx.setStorageSync('ordinal', [ordinal])
          var receivedList = wx.getStorageSync('receivedList')
          var allOrdersList = wx.getStorageSync('allOrdersList')
          _this.pushData(receivedList, 'receivedList', '去付款', ordinal)
          _this.pushData(allOrdersList, 'allOrdersList', '去付款', ordinal)
          wx.navigateTo({
            url: '/pages/order/order?id=1',
          })
        }
      }
    })
    }
  },

  //封装的函数
  pushData: function (element, str, btn, ordinal) {
    var settlementList = wx.getStorageSync('settlementList')
    var list = []

    for (let i = 0; i < settlementList.length; i++) {
      var goods = {
        id: settlementList[i].id,
        img: settlementList[i].img,
        title: settlementList[i].title,
        dec: settlementList[i].dec,
        price: settlementList[i].price,
        num: settlementList[i].num,
        btnText: btn,
        ordinal: ordinal
      }
      if (element.length == 0) {
        console.log('缓存数组为空')
        list.unshift(goods)
        // wx.setStorageSync('key', data)
        wx.setStorageSync(str, list)
      } else {
        console.log('缓存数组不为空')
        element.unshift(goods)
        wx.setStorageSync(str, element)
      }
    }
  },

  // 地址为空时，点击添加地址
  toAddSite:function(){
    wx.navigateTo({
      url: '/pages/addSite/addSite?index=-1',
    })
  },
  // 地址不为空时，点击编辑地址
  toChangeSite:function(){
    wx.navigateTo({
      url: '/pages/address/address',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var goods = wx.getStorageSync('settlementList')
    var num=0, price=0
    for (let i = 0; i < goods.length; i++) {
      num += goods[i].num
      price += goods[i].num * goods[i].price
    }
    
    this.setData({
      settlementList: goods,
      totalPrice: price,
      totalNum: num
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
    var ordinal = wx.getStorageSync('ordinal')
    if (ordinal.length == 0) {
      wx.setStorageSync('ordinal', [0])
    }
    // 判断是否有默认地址？
    var addressList = wx.getStorageSync('addressList')
    var isBlock
    var addressList1
    if (addressList.length == 0) {
      isBlock = true

    } else if(addressList.length == 1) {
      // 有一个地址数据
      isBlock = false
      addressList1 = addressList[0]
    }else{
      // 有两个或两个以上的地址
      isBlock = false
      addressList1 = addressList[wx.getStorageSync('addressIndex')[0]]
    }
    this.setData({
      isBlock,
      addressList: [addressList1]
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