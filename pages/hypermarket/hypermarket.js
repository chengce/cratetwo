// pages/hypermarket/hypermarket.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[
      { name: "雷神", price: 20, imgsrc:"/img/01.jpg"},
      { name: "机器人", price: 200, imgsrc: "/img/02.jpg" },
      { name: "柴犬", price: 120, imgsrc: "/img/03.jpg" },
      { name: "贝壳", price: 50, imgsrc: "/img/04.jpg" },
      { name: "火影", price: 230, imgsrc: "/img/05.jpg" },
      { name: "二狗", price: 100, imgsrc: "/img/06.jpg" }
    ]
  },
  // 跳页
  goodDedail(event){
    const item = event.currentTarget.dataset.item
    console.log(item)
    // wx.navigateTo({
    //   url: './goodDedail/goodDedail?name=' + item.name + '&src=' + item.imgsrc +'&price='+item.price,
    //   //  跳转到当前根目录/pages/goodDedail/goodDedail绝对路径
    //   success(){},  //成功后的回调
    //   fail() { },  //失败后的回调
    //   complete() { },  //结束后的回调（成功，失败都会执行）
    // })
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