// pages/api/api.js
var sortModule = require('../data/sort.js')
var global = getApp()
console.log(global.globalData.localValue)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    values:[5,8,1,2,3,4,6,7]
  },
  // 模块化--排序
  sortFn(){
    this.setData({
      values:sortModule(this.data.values)
    })
  },
  // 消息提示框
  showToast(){
    wx.showToast({
      title:"成功",
      icon:"success",
      duration:1500
    })
  },
  // 扫一扫
  scanCode(){
    wx.scanCode({
      success(res){
        console.log(res)
      },
      fail(){
        console.log(error)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var global = getApp()
    console.log(global.globalData)
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