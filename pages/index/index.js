// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 简单的数据绑定
    Hei: "",
    // 轮播图的图片数据
    swiperImg: [
      "../../images/swiper1.jpg",
      "../../images/swiper2.jpg",
      "../../images/swiper3.jpg"
    ],
    // 列表图的图片数据
    listImg: [
      "../../images/list1.png",
      "../../images/list2.png",
      "../../images/list3.png",
      "../../images/list4.png",
      "../../images/list5.png",
      "../../images/list6.png",
      "../../images/list7.png",
      "../../images/list8.png",
      "../../images/list9.png",
      "../../images/list10.png"
    ],
    // 所有商品数据
    goodsList: [{
        imgSrc: "../../images/select.jpg",
        selectGoods: [{
            id:1,
            img: "../../images/select1.jpg",
            title: "小米10 Pro",
            dec: "骁龙865/50倍变焦",
            newPrice: 4999,
            oldPrice: "5999",
            detailsImg: [
              "../../images/detailsImg/details-1.1.jpg",
              "../../images/detailsImg/details-1.2.jpg",
              "../../images/detailsImg/details-1.3.jpg",
              "../../images/detailsImg/details-1.4.jpg",
              "../../images/detailsImg/details-1.5.jpg"
            ],
            describeImg: [
              "../../images/detailsImg/describe-1.1.jpg",
              "../../images/detailsImg/describe-1.2.jpg",
              "../../images/detailsImg/describe-1.3.jpg",
              "../../images/detailsImg/describe-1.4.jpg"
            ]
          },
          {
            id:2,
            img: "../../images/select2.jpg",
            title: "小米10",
            dec: "骁龙865/1亿像素相机",
            newPrice: 3999,
            oldPrice: "",
            detailsImg: [
              "../../images/detailsImg/details-1.1.jpg",
              "../../images/detailsImg/details-1.2.jpg",
              "../../images/detailsImg/details-1.3.jpg",
              "../../images/detailsImg/details-1.4.jpg",
              "../../images/detailsImg/details-1.5.jpg"
            ],
            describeImg: [
              "../../images/detailsImg/describe-1.1.jpg",
              "../../images/detailsImg/describe-1.2.jpg",
              "../../images/detailsImg/describe-1.3.jpg",
              "../../images/detailsImg/describe-1.4.jpg"
            ]
          },
          {
            id:3,
            img: "../../images/select3.jpg",
            title: "Redmi K30",
            dec: "120Hz流速屏，全速热爱",
            newPrice: 1599,
            oldPrice: "1699",
            detailsImg: [
              "../../images/detailsImg/details-1.1.jpg",
              "../../images/detailsImg/details-1.2.jpg",
              "../../images/detailsImg/details-1.3.jpg",
              "../../images/detailsImg/details-1.4.jpg",
              "../../images/detailsImg/details-1.5.jpg"
            ],
            describeImg: [
              "../../images/detailsImg/describe-1.1.jpg",
              "../../images/detailsImg/describe-1.2.jpg",
              "../../images/detailsImg/describe-1.3.jpg",
              "../../images/detailsImg/describe-1.4.jpg"
            ]
          },
          {
            id:4,
            img: "../../images/select4.jpg",
            title: "Redmi K30 5G",
            dec: "双模5G，120Hz流速屏",
            newPrice: 1999,
            oldPrice: "",
            detailsImg: [
              "../../images/detailsImg/details-1.1.jpg",
              "../../images/detailsImg/details-1.2.jpg",
              "../../images/detailsImg/details-1.3.jpg",
              "../../images/detailsImg/details-1.4.jpg",
              "../../images/detailsImg/details-1.5.jpg"
            ],
            describeImg: [
              "../../images/detailsImg/describe-1.1.jpg",
              "../../images/detailsImg/describe-1.2.jpg",
              "../../images/detailsImg/describe-1.3.jpg",
              "../../images/detailsImg/describe-1.4.jpg"
            ]
          },
          {
            id:5,
            img: "../../images/select5.jpg",
            title: "Redmi Note 8 Pro",
            dec: "6400万全场景四摄",
            newPrice: 1199,
            oldPrice: "1399",
            detailsImg: [
              "../../images/detailsImg/details-1.1.jpg",
              "../../images/detailsImg/details-1.2.jpg",
              "../../images/detailsImg/details-1.3.jpg",
              "../../images/detailsImg/details-1.4.jpg",
              "../../images/detailsImg/details-1.5.jpg"
            ],
            describeImg: [
              "../../images/detailsImg/describe-1.1.jpg",
              "../../images/detailsImg/describe-1.2.jpg",
              "../../images/detailsImg/describe-1.3.jpg",
              "../../images/detailsImg/describe-1.4.jpg"
            ]
          },
          {
            id:6,
            img: "../../images/select6.jpg",
            title: "Redmi Note 8",
            dec: "千元4800万像素",
            newPrice: 899,
            oldPrice: "999",
            detailsImg: [
              "../../images/detailsImg/details-1.1.jpg",
              "../../images/detailsImg/details-1.2.jpg",
              "../../images/detailsImg/details-1.3.jpg",
              "../../images/detailsImg/details-1.4.jpg",
              "../../images/detailsImg/details-1.5.jpg"
            ],
            describeImg: [
              "../../images/detailsImg/describe-1.1.jpg",
              "../../images/detailsImg/describe-1.2.jpg",
              "../../images/detailsImg/describe-1.3.jpg",
              "../../images/detailsImg/describe-1.4.jpg"
            ]
          }
        ]
      }
    ]
  },
  // 图片高度自适应函数
  imgH: function (e) {
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
    var winHei = winWid * imgHei / imgWid + "px"
    // console.log(winHei)
    this.setData({
      Hei: winHei
    })
  },

  getDetailsId: function (options) {
    // 当前点击的商品的父级的下标值
    var index = options.target.dataset.index
    // 当前点击的商品下标值
    var id = options.target.dataset.id
    // console.log(index + '---' + id)
    // 获取当前点击的商品数据
    var goods = this.data.goodsList[index].selectGoods[id]
    console.log(goods)
    // 将当前点击的商品数据添加到缓存中
    wx.setStorageSync('detailsGood', [goods])
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 同步   数据量小
    // wx.setStorageSync       添加数据
    // wx.removeStorageSync    删除数据
    // wx.getStorageSync       获取数据
    // wx.getStorageInfoSync   获取数据信息
    // wx.clearStorageSync     清空所有数据

    // 异步    数据量大
    // wx.setStorage          添加数据
    // wx.removeStorage       删除数据
    // wx.getStorageInfo      获取数据信息
    // wx.getStorage          获取数据
    // wx.clearStorage        清空所有数据
    // wx.setStorageSync('key', this.data.goodsList)
    // // wx.removeStorageSync('logs')
    // var goodsInfo = wx.getStorageInfoSync()
    // console.log(goodsInfo)
    // var goods = wx.getStorageSync('key')
    // console.log(goods)
    // wx.clearStorageSync()
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