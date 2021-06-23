//app.js
App({
  onLaunch: function () {
    var that = this;
    wx.getSystemInfo({
      success (res) {
        that.globalData.windowHeight = res.windowHeight
        that.globalData.windowWidth = res.windowWidth
      }
    })
  },
  globalData: {
    userInfo: null
  }
})