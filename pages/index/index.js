//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
  },
  //事件处理函数
  createRoom: function() {
    wx.navigateTo({
      url: '../createRoom/createRoom'
    })
  },
  joinRoom:function() {
    wx.navigateTo({
      url: '../joinRoom/joinRoom',
    })
  },
  onLoad: function () {
    
  }
})
