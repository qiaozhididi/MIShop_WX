// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    userimg:'',
    orderList:[
      {
        img:'../../images/待付款.png',
        name:'待付款',
        index:1
      },
      {
        img:'../../images/待收货.png',
        name:'待收货',
        index:2
      },
      {
        img:'../../images/全部订单.png',
        name:'全部订单',
        index:0
      }
    ]
  },
  // 
  getOrderIndex:function(e){
    wx.navigateTo({
      url: '/pages/order/order?id=' + e.target.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.login({
      success (res){
        if(res.code){
          wx.getUserInfo({
            success:function(res){
              var userInfo = res.userInfo
              var nickName = userInfo.nickName
              var avatarUrl = userInfo.avatarUrl
              that.setData({
                username:nickName,
                userimg:avatarUrl
              })
            }
          })
        }else{
          console.log('登陆失败' + res.errMsg)
        }
      }
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