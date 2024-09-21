// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList:[]
  },

  // 点击修改地址的事件
  editData:function(e){
    var index = e.target.dataset.index
    wx.navigateTo({
      url: '/pages/addSite/addSite?index=' + index,
    })
  },

  // 点击新增地址的事件
  addSite:function(){
    wx.navigateTo({
      url: '/pages/addSite/addSite?index=-1',
    })
  },

  // 点击当前选中的地址下标值
  getSiteIndex:function(e){
  wx.setStorageSync('addressIndex',[e.target.dataset.id])
  wx.navigateBack({
    complete:(res) => {},
  })
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
    var addressList = wx.getStorageSync('addressList')
    this.setData({
      addressList
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