// pages/map/map.js
//js
Page({
  /**
     * 页面的初始数据
     */
  data: {
  //设置标记点
  markers: [
  {

  id: 4,
  latitude: 30.74690681242595,
  longitude: 120.74869294379042,
  width: 30,
  height: 30
  }
  ],
  //当前定位位置
  latitude:'',
  longitude: '',
  },
  navigate() {
  // 使用微信内置地图查看标记点位置，并进行导航
  wx.openLocation({
  latitude: this.data.markers[0].latitude,//要去的纬度-地址
  longitude: this.data.markers[0].longitude,//要去的经度-地址
  })
  },
  onLoad() {
  //获取当前位置
  wx.getLocation({
  type: 'gcj02',
  success: (res) => {
  console.log(res)
  this.setData({
  latitude: res.latitude,
  longitude: res.longitude
  })
  }
  })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})