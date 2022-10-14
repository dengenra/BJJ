// pages/coach/coach.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    coachid:[],
  },
  previous(){
    wx.navigateBack({
      delta: 1
    })
  }, 
  //判断传过来的值为多少
  qwq(){
   var id1 = this.data.id
   var coachid1 = this.data.coachid
    // debugger;
    for (let i = 0; i < coachid1.length; i++) {
      if( id1= coachid1[i].id){
        this.data.coachid = coachid1[i]
        console.log(this.data.coachid)
      }
      
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that = this;
    that.setData({
      id:options.id,
      coachid:JSON.parse(options.coachid)
    });
    console.log(111)
    this.qwq()
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