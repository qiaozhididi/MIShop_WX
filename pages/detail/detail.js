// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 简单的数据绑定
    Hei:"",
    detailsGoods:[],
    getCarNum:1,
    isBlock:false,
    favoriteImg:'../../images/favorite.png',
    // 轮播图的图片数据
    detailsGoods:[],
  },
// 图片高度自适应函数
imgH:function(e){
  // 获取屏幕宽度
  var winWid = wx.getSystemInfoSync().screenWidth
  // 获取图片的宽度
  var imgWid = e.detail.width
  // 获取图片的高度
  var imgHei = e.detail.height
  // console.log(winWid)
  // console.log(imgWid)
  // console.log(imgHei)
  // 通过图片的缩放比计算宽度为屏幕的宽度时，高度为多少
  var winHei = winWid*imgHei/imgWid + "px"
  // console.log(winHei)
  this.setData({
    Hei:winHei
  })
},

// 添加到购物车的点击事件
addCar:function(){
  console.log(this.data.detailsGoods)
  var goods = {
    id:this.data.detailsGoods[0].id,
    carImg:this.data.detailsGoods[0].img,
    carTitle:this.data.detailsGoods[0].title,
    carPrice:this.data.detailsGoods[0].newPrice,
    carDec:this.data.detailsGoods[0].dec,
    carCheck:true,
    carNum:1
  }
  var carList = wx.getStorageSync('carList')
  // 判断购物车中是否有数据
  if(carList){
    var isData = true
    // 1、购物车中有数据
    // 1.1  商品数据相同，商品数量加一
    for(var i = 0 ; i < carList.length ; i ++){
      // 判断详情页的数据是否和购物车中的数据id相等
      if(carList[i].id == this.data.detailsGoods[0].id){
        carList[i].carNum += 1
        isData = false
      }
    }
    // 1.2  商品数据不同，添加商品
    if(isData){
      carList.push(goods)
      isData = true
    }
    wx.setStorageSync('carList', carList)
  }else{
    // 2、购物车中没有数据
    wx.setStorageSync('carList', [goods])
  }
  this.getCarListNum()
},

// 跳转到首页
toIndex:function(){
  wx.switchTab({
    url: '/pages/index/index',
  })
},
// 跳转到购物车
toCar:function(){
  wx.switchTab({
    url: '/pages/shoppingCar/shoppingCar',
  })
},
// 收藏商品
getFavoriteList:function(){
  var list = {
    id:this.data.detailsGoods[0].id,
    img:this.data.detailsGoods[0].img,
    title:this.data.detailsGoods[0].title,
    price:this.data.detailsGoods[0].newPrice,
  }
  var favoriteImg = ''
  // 获取收藏夹的缓存数据
  var favoriteList = wx.getStorageSync('favoriteList')
    // 1、判断是否有收藏的缓存数据
    if(favoriteList.length != 0){
      var isData = true
      // 1.1、有收藏的商品
      for(let i = 0 ; i < favoriteList.length ; i ++){
        // 1.1.1、商品id相同，取消收藏
        if(favoriteList[i].id == this.data.detailsGoods[0].id){
          favoriteImg = '../../images/favorite.png'
          favoriteList.splice(i,1)
          isData = false
        }
      }
        // 1.1.2、商品id不同，添加收藏
        if(isData){
          favoriteList.push(list)
          favoriteImg = '../../images/favorite1.png'
        }
        wx.setStorageSync('favoriteList', favoriteList)
    }else{
      // 2、没有收藏的商品，添加商品到收藏夹中
      wx.setStorageSync('favoriteList', [list])
      favoriteImg = '../../images/favorite1.png'
  }
  this.setData({
    favoriteImg
  })
},

  // 立即购买的点击事件
  toSettlement:function(){
    // 缓存商品数据
    var goods = {
      id : this.data.detailsGoods[0].id,
      img : this.data.detailsGoods[0].img,
      title : this.data.detailsGoods[0].title,
      dec : this.data.detailsGoods[0].dec,
      price : this.data.detailsGoods[0].newPrice,
      num : 1
    }
    wx.setStorageSync('settlementList', [goods])
    // 跳转到用户结算页面
    wx.navigateTo({
      url: '/pages/settlement/settlement',
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
    //获取缓存数据
    var goods = wx.getStorageSync('detailsGood')
    console.log(goods)
    this.setData({
      detailsGoods:goods
    })
    this.getCarListNum()

    var favoriteImg = ''
    var favoriteList = wx.getStorageSync('favoriteList')
      if(favoriteList.length != 0){
        var isData = true
        for(let i = 0 ; i < favoriteList.length ; i ++){
          if(favoriteList[i].id == this.data.detailsGoods[0].id){
            favoriteImg = '../../images/favorite1.png'
            isData = false
          }
        }
          if(isData){
            favoriteImg = '../../images/favorite.png'
          }
      }else{
        favoriteImg = '../../images/favorite.png'
    }
    this.setData({
      favoriteImg
    })
  },
  // 获取购物车中的商品数量
  getCarListNum:function(){
    var carList = wx.getStorageSync('carList')
    var getCarNum = 0
    var isBlock = true
    console.log(carList)
    for(let i = 0 ; i < carList.length ; i ++){
      console.log(carList[i].carNum)
      getCarNum += carList[i].carNum
    }
    if(carList.length == 0){
      isBlock = false
    }else{
      isBlock = true
    }
    this.setData({
      getCarNum,
      isBlock
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