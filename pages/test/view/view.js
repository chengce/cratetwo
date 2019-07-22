// pages/test/view/view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList:[
      { imgSrc:"/img/01.jpg"},
      { imgSrc: "/img/02.jpg" },
      { imgSrc: "/img/03.jpg" },
      { imgSrc: "/img/04.jpg" },
      { imgSrc: "/img/05.jpg" }
    ],
    dotsStatus:"true", //开启指示灯
    dotsColor:" rgba(0,0,0,0.2)", //指示灯颜色
    dotsActiveColor: "#000000", //激活颜色
    // autoplayValue:"true", //开始自动播放
    intervalValue:"3000", //自动切换时间间隔
    durationValue:"1000", //滑动动画时长
    circularValue:"true", //是否采用衔接滑动
    // verticalValue:"true", //滑动方向是否纵向
    currentValue:"1", //当前所在滑块 index
    previousMargin: "20px",  //前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
    nextMargin: "20px", //后边距
    displayMultipleItems:"1",//同时显示滑块数量
    easingFunction: "easeInOutCubic"//指定 swiper 切换缓动动画类型
    // ①default默认缓动函数；②linear线性动画；③easeInCubic缓入动画
    // ④easeOutCubic缓出动画；⑤easeInOutCubic缓入缓出动画
    
  },
  bindchangeFn(event){
    // console.log(event.detail)
    // current 改变时会触发 change 事件
    // 自定义属性item-id="{{index}}  可获取该滑块组件标识符currentItemId
  },
  bindtransitionFn(event){
    // console.log(event.detail)
    // swiper - item 的位置发生改变时会触发 transition 事件，event.detail = { dx: dx, dy: dy }
  },
  bindanimationfinishFn(option){
    // console.log(option) 动画结束时会触发 animationfinish 事件，同上
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