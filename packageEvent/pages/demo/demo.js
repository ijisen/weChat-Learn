// pages/demo/demo.js
const behaviors = require('../../../behaviors/behaviors')
Page({
  behaviors: [behaviors],
  /**
   * 页面的初始数据
   */
  data: {
    student: [
      {
        name: 'LiLei',
        age: 25,
        gender: 'boy'
      },
      {
        name: 'Lucy',
        age: 28,
        gender: 'girl'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad');
    this.shareGlobalMessage()
    wx.login({
      success: (res) => {
        console.log(res);
      },
      fail: (err) =>{ 
        console.log(err)
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(getCurrentPages())
    wx.showToast({ title: '系统错误' })

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.showLoading()
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

  },
  handleClick(event) {
    console.log(event)
    const {target:{
      dataset= {}
    }} = event;
    console.log(dataset)
    if (dataset.role = 'add') {
      this.setData({
        student: this.data.student.concat({
          name: 'Hmm',
          age: 27
        })
      })
    }
  }
})