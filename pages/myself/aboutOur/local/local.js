// pages/myself/aboutOur/local/local.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 获取当前页面栈
  getpage() {
    const page = getCurrentPages()
    console.log(page)
  },
  // navigateTo跳页到信息
  nav_toInfo(){
    wx.navigateTo({
      url: '../aboutOur',
    })
  },
  // redirectTo从定向
  redirect_toInfo(){
    wx.redirectTo({
      url: '../aboutOur',
    })
  },
  // switchTab到tabBar的home
  switchTab_home(){
    wx.switchTab({
      url: '../../../home/home',
    })
  },
  // reLaunch
  reLaunch(){
    wx.reLaunch({
      url: '../aboutOur',
    })
  },
  // 返回back
  back(){
    const page = getCurrentPages()//获取当前页面栈
    wx.navigateBack({
      delta:page.length-1
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