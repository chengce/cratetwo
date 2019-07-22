// pages/myself/aboutOur/aboutOur.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myselfList: [
      {
        title: "公司地址",
        tap: 'localFn'
      },
      { title: "公司人事" },
      { title: "公司制度" },
      { title: "公司成员" },
      { title: "注册资金" },
      { title: "福利待遇" },
      { title: "公司纠纷" }
    ],
    status:false
  },
  // 页面跳转
  localFn() {
    wx.navigateTo({
      url: 'local/local',
    })
  },
  // 获取当前页面栈
  getpage() {
    const page = getCurrentPages()
    console.log(page)
  },
  // 显隐
  hideArea(){
    this.setData({
      status: !this.data.status
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