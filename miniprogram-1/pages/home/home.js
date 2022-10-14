// pages/home/home.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
  swiperimg:[],
  head:[],
  trial:[],
  member:[],
  coach:[],
     //设置标记点
  markers: [
    {
    id: 4,
    latitude: 30.747031292154084,
    longitude: 120.74855615113066 ,
    width: 30,
    height: 30
    }
    ],
  //当前定位位置
  latitude:'',
  longitude: '',
  },
  //地图
  navigate() {
    // 使用微信内置地图查看标记点位置，并进行导航
    wx.openLocation({
    latitude: this.data.markers[0].latitude,//要去的纬度-地址
    longitude: this.data.markers[0].longitude,//要去的经度-地址
    })
    },
  // 取轮播图数据
  getSwiperImg(){
    wx.request({
      url: 'http://localhost:4000/swiper/',
      method:"GET",
      success:(res)=>{
        // console.log(res.data);
        this.setData({
          swiperimg : res.data
        })
      }

    })
  },
 
  //取免费试课数据
  gettrial(){
    wx.request({
      url: 'http://localhost:4000/trial',
      method:"GET",
      success:(res)=>{
        // console.log(res.data);
        this.setData({
          trial : res.data
        })
      }

    })
  },
  //取会员卡数据
  getmember(){
    wx.request({
      url: 'http://localhost:4000/member',
      method:"GET",
      success:(res)=>{
        // console.log(res.data);
        this.setData({
          member : res.data
        })
      }

    })
  },
  getcoach(){
    wx.request({
      url: 'http://localhost:4000/coach',
      method:"GET",
      success:(res)=>{
        // console.log(res.data);
        this.setData({
          coach : res.data
        })
      }

    })
  },
  //拨打电话
  phone(){
    wx.makePhoneCall({
      phoneNumber: '18803899605',
    })
  },
  //点击跳转页面方法（免费试课）
  kantie(e){
    var $data = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../particulars/particulars?id='+$data.id+"&imageUrl="+$data.imageurl+"&textURl="+$data.texturl 
    })
  //点击跳转页面方法（会员卡）
  },
  member(e){
    var $data = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../member/member?id='+$data.id+"&imageUrl="+$data.imageurl+"&textURl="+$data.texturl+"&price="+$data.price+"&particulars="+$data.particulars
    })
  },
  details(){
    wx.navigateTo({
      url: '../details/details'
    })
  },
  //点击跳转页面方法（教练）
  coach(e){
    var $data = e.currentTarget.dataset;
    var coachid=JSON.stringify(this.data.coach)
    wx.navigateTo({
      url: '../coach/coach?id='+$data.id+'&coachid='+coachid
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getSwiperImg(),
    this.gettrial(),
    this.getmember(),
    this.getcoach(),
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