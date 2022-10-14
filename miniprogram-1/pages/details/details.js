// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusbar:'',
    jiaonangheight:'',
    hanggao:'',
    facility:[{id:1,imageurl:'../img/wifi.png',name:'Wi Fi'},{id:2,imageurl:'../img/kongtiao.png',name:'空  调'},{id:3,imageurl:'../img/yiliao.png',name:'医疗品'},{id:4,imageurl:'../img/tingchewei.png',name:'停车位'}]
  },
  previous(){
    wx.navigateBack({
      delta: 1
    })
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const res = wx.getSystemInfoSync()
        var statusbarH = res.statusBarHeight
        this.setData({
            statusbar :statusbarH, // 状态栏高度
            jiaonangheight: wx.getMenuButtonBoundingClientRect().height,  // 胶囊高度
            hanggao: wx.getMenuButtonBoundingClientRect().top-statusbarH
        })
        
        console.log(wx.getMenuButtonBoundingClientRect(), '胶囊属性');
        console.log(this.data.statusbar)
        console.log(this.data.hanggao)
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