// pages/favorite/favorite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    favoriteList:[]
  },
  deleteGoods:function(e){
    var index = e.target.dataset.index
    this.data.favoriteList.splice(index,1)
    this.setData({
      favoriteList:this.data.favoriteList
    })
    wx.setStorageSync('favoriteList', this.data.favoriteList)
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
    var goods = wx.getStorageSync('favoriteList')
    this.setData({
      favoriteList:goods
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