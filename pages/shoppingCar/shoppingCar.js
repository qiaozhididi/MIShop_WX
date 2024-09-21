// pages/shoppingCar/shoppingCar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carList:[],
    totalPrice:0,
    isNone:true,
    isBlock:false
  },
  // 多选框的触发事件
  change: function(options){
    // 判断复选框是否选中，选中时获取value值
    var checkNum = true
    if(options.detail.value.length == 1){
      checkNum = true
    }else{
      checkNum = false
    }
    //获取当前选中的复选框的下标值
       var index =  options.target.dataset.id
       // 定义的空对象
       var obj = {}
       // 定义的键名
       var key = "carList["+index+"].carCheck"
       obj[key] = checkNum
       // 改变data里面的数据
       this.setData(obj)
      //  console.log(this.data.carList)
       this.totalPrice()
       wx.setStorageSync('carList', this.data.carList)
    // console.log(options.target.dataset.id)
  },

  // 数量减少的函数
  reduceNum:function(options){
    var index = options.target.dataset.id
    var num = this.data.carList[index].carNum
    num --
    if(num < 1){
      this.data.carList.splice(index,1)
      wx.setStorageSync('carList', this.data.carList)
      this.isNull()
    }else{
      var key = "carList["+index+"].carNum"
    }
    // 定义的空对象
    var obj = {}
    // 定义的键名
    
    var key1 = "carList"
    obj[key] = num
    obj[key1] = this.data.carList
    this.setData(obj)
    this.totalPrice()
    wx.setStorageSync('carList', this.data.carList)
  },
  // 数量增加的函数
addNum:function(options){
    var index = options.target.dataset.id
    var num = this.data.carList[index].carNum
      num ++
    // 定义的空对象
    var obj = {}
    // 定义的键名
    var key = "carList["+index+"].carNum"
    obj[key] = num
    this.setData(obj)
    this.totalPrice()
    wx.setStorageSync('carList', this.data.carList)
  },
   // 点击当前商品进行删除
   deleteGoods:function(options){
     
    console.log(options)
    // 获取当前点击的商品下标值
    var index = options.target.dataset.id
    // 删除数组中对应下标的数据
    this.data.carList.splice(index,1)
    console.log(this.data.carList)
    this.setData({
      carList:this.data.carList
    })
    this.totalPrice()
    wx.setStorageSync('carList', this.data.carList)
    this.isNull()
   },
   // 判断购物车中是否有商品
   isNull:function(){
     var isBlock
     var isNone
     if(wx.getStorageSync('carList').length == 0){
       isNone = true
       isBlock = false
     }else{
        isNone = false
        isBlock = true
      }
      this.setData({
        isBlock:isBlock,
        isNone:isNone
      })
   },

   // 跳转到首页
   toIndex:function(){
     wx.switchTab({
       url: '/pages/index/index',
     })
   },
   // 结算商品
   toSettlement:function(){
     var carList = this.data.carList
     var list = []
     var list1 = []
     var _this = this
     for(let i = 0 ; i < carList.length ; i ++){
       // 判断购物车中是否有商品选中
      if(carList[i].carCheck){
            // 数据缓存
            var goods = {
              id : carList[i].id,
              img : carList[i].carImg,
              title : carList[i].carTitle,
              dec : carList[i].carDec,
              price : carList[i].carPrice,
              num : carList[i].carNum,
            }
            list.push(goods)
            // 跳转到用户结算
            wx.navigateTo({
              url: '/pages/settlement/settlement',
            })
      }else{
        // 获取没有选中的商品数组，渲染到页面上
        list1.push(carList[i])
        _this.setData({
            carList:list1
          })
      }
     }
     wx.setStorageSync('settlementList', list)
     wx.setStorageSync('carList', list1)
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
    
    // 判断购物车中是否有数据
    var goods = wx.getStorageSync('carList')
    this.setData({
      carList:goods
    })
    this.totalPrice()
    this.isNull()
  },

  //  计算总价的事件
  totalPrice:function(){
    // 总计 = 单价 * 数量
    var price = 0
    var length = this.data.carList.length
    for(var i = 0 ; i < length ; i ++){
      // i = 0 price = 0 + 10 * 15
      // i = 1 price = 150 + 10 * 12
      // x += y   ==>  x = x + y
      // 判断商品是否选中，如果选中则计算当前商品的总价
      if(this.data.carList[i].carCheck){
        price = price + this.data.carList[i].carPrice * this.data.carList[i].carNum
      }
    }
    console.log(price)
    this.setData({
      totalPrice:price
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