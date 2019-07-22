// pages/abot/abot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:"初始化页面",
    status:true,
    btnInfo:"隐藏",
    id:"abc",
    personList:[
      { name: '熊大', sex: '雄', age: 18 },
      { name: '熊二', sex: '雄', age: 18 },
      { name: '光头强', sex: '男', age: 23 }
    ],
    numList:[1,2,3,4,5,6,7,8,9],
    switchList:[
      {name:"开关1"},
      { name: "开关2" },
      { name: "开关3" }
    ]
  },
// 切换操作
toggle(){
  // this.setData({
  //   status:!this.data.status
  // })
  const status = this.data.status;
  const btnInfo = this.data.btnInfo
  if (status) {
    this.setData({ status: false, btnInfo:'显示'}) 
  }else{
    this.setData({ status: true, btnInfo: '隐藏' }) 
  }
},
// 增加switch开关
  addSwitch() {
    const newArr = [{
      name: '新开关' + (this.data.switchList.length+1)
    }]
    this.setData({
      switchList: newArr.concat(this.data.switchList)
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