import address, { areas } from '../../utils/city.js'
// pages/addSite/addSite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 判断是新增还是修改地址
    isBlock:true,
    // 获取城市信息
    provinces:"",
    citys:"",
    areas:"",
    // 显示隐藏地址联动
    showAddress:false,
    value:[0,0,0],
    // 输入框的信息
    areaInfo:'',
    name:'',
    phone:'',
    detailSite:'',
   index:0
  },

  // 获取输入的姓名
  getName:function(e){
    this.setData({
      name:e.detail.value
    })
  },
  // 获取输入的电话号码
  getPhone:function(e){
    this.setData({
      phone:e.detail.value
    })
  },
  // 获取输入的详细地址
  getDetailSite:function(e){
    this.setData({
      detailSite:e.detail.value
    })
  },

  // 获取选中的地区信息
  getAreaInfo:function(){
    var provinces = this.data.provinces
    var citys = this.data.citys
    var areas = this.data.areas
    var value = this.data.value
    this.setData({
      showAddress:false,
      areaInfo:provinces[value[0]].name + ' ' + citys[value[1]].name + ' ' + areas[value[2]].name
    })
  },

  // 点击[保存并使用]事件
  saveUse:function(){
    var address = {
      name : this.data.name,
      phone : this.data.phone,
      areaInfo : this.data.areaInfo,
      detailSite : this.data.detailSite,
    }
    var addressList = wx.getStorageSync('addressList')
    if(addressList.length == 0){
      wx.setStorageSync('addressList', [address])
    }else{
      addressList.unshift(address)
      wx.setStorageSync('addressList', addressList)
    }
    wx.navigateBack({
      complete:(res)=>{}
    })
  },

  // 地址联动事件
  cityChange:function(e){
    var value = e.detail.value
    var provincesIndex = value[0]
    var citysIndex = value[1]
    var areasIndex = value[2]
    if(provincesIndex  != this.data.value[0]){
      var id1 = address.provinces[provincesIndex].id
      this.setData({
        value:[provincesIndex,0,0],
        citys:address.citys[id1],
        areas:address.areas[address.citys[id1][0].id]
      })
    }else if(citysIndex != this.data.value[1]){
      var id2 = this.data.citys[citysIndex].id
      this.setData({
        value:[provincesIndex,citysIndex,0],
        areas:address.areas[id2]
      })
    }else{
      this.setData({
        value:[provincesIndex,citysIndex,areasIndex]
      })
    }
  },

  // 地区信息的输入框聚焦时的事件,显示地址联动
  showSite:function(){
    this.setData({
      showAddress:true
    })
  },

  // 隐藏地址联动
  hideSite:function(){
    this.setData({
      showAddress:false
    })
  },


  // 删除数据的点击事件
  delData:function(){
    var index = this.data.index
    var addressList = wx.getStorageSync('addressList')
    addressList.splice(index,1)
    wx.setStorageSync('addressList', addressList)
    wx.navigateBack({
      complete:(res)=>{}
    })
  },

// 编辑后的数据插入在头部
editUse:function(){
  //先删除
  var index = this.data.index
  var addressList = wx.getStorageSync('addressList')
  addressList.splice(index,1)
  wx.setStorageSync('addressList', addressList)
  //再在头部添加
  var address = {
    name : this.data.name,
    phone : this.data.phone,
    areaInfo : this.data.areaInfo,
    detailSite : this.data.detailSite,
  }
  var addressList = wx.getStorageSync('addressList')
  if(addressList.length == 0){
    wx.setStorageSync('addressList', [address])
  }else{
    addressList.unshift(address)
    wx.setStorageSync('addressList', addressList)
  }
  wx.navigateBack({
    complete:(res)=>{}
  })
},
  


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var index = options.index
    console.log(index)
    var isBlock
    if(index == '-1'){
      isBlock = true
      wx.setNavigationBarTitle({
        title: '新增收货地址',
      })
    }else{
      isBlock = false
      wx.setNavigationBarTitle({
        title: '编辑收货地址',
      })
    }
    this.setData({
      index,
      isBlock,
      provinces:address.provinces,
      citys:address.citys[address.provinces[0].id],
      areas:address.areas[address.citys[address.provinces[0].id][0].id]
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
    var index = this.data.index
    console.log(this.data.index)
    var addressList = wx.getStorageSync('addressList')
    if(index !='-1'){
    this.setData({
      name:addressList[index].name,
      phone:addressList[index].phone,
      areaInfo:addressList[index].areaInfo,
      detailSite:addressList[index].detailSite,
    })
  }
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