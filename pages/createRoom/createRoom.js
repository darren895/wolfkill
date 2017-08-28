// createRoom.js
var godMap = [
  { code: 1, name: '女巫', checked: true },
  { code: 2, name: '预言家', checked: true },
  { code: 3, name: '猎人', checked: true },
  { code: 4, name: '白痴' },
  { code: 5, name: '守卫' },
  { code: 6, name: '丘比特' },
  { code: 7, name: '长老' }
]
var util = require('../../utils/util.js')
var countPeople = function(data){
  var sum = 0;
  sum += data.wolfarray[data.wolfindex];
  sum += data.cityarray[data.cityindex];
 
  for(var index in data.godmap){
    if (data.godmap[index].checked){
      sum++;
    }
  }
  console.info(sum);
  return sum;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sum:3,
    wolfarray:[1,2,3,4,5],
    wolfindex:2,
    cityarray:[1,2,3,4,5],
    cityindex:2,
    gods:[1,2,3],
    godmap: godMap
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var sum = countPeople(this.data);
    this.setData({
      sum: sum
    });    
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
    // wx.setNavigationBarTitle({
    //   title: '配置房间'
    // })
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
  bindPickerChange: function (e) {
    this.setData({
      wolfindex: e.detail.value
    });
    var count = countPeople(this.data);
    this.setData({
      sum: count
    })
  },
  bindCityPickerChange: function (e) {
    this.setData({
      cityindex: e.detail.value
    });
    var count = countPeople(this.data);
    this.setData({
      sum: count
    })
  },
  chooseGod: function (e) {
    var id = e.currentTarget.dataset.code;
    console.info(id);
    var godmap = this.data.godmap;
    console.info(godmap);
    var newgodmap = [];
    for(var i in godmap){
      var god = godmap[i];
      if (god.code == id){
        if (god.checked == true){
          god.checked = false;
        }else{
          god.checked = true;
        }
      }
      newgodmap.push(god);
    }
    console.info(newgodmap);
    this.setData({
      godmap: newgodmap
    });
    var count = countPeople(this.data);
    this.setData({
      sum: count
    })
  },
  bindsubmit: function (e){
    var datamap = {};
    datamap.wolf = this.data.wolfarray[this.data.wolfindex];
    datamap.city = this.data.cityarray[this.data.cityindex];
    datamap.god = [];
    for(var i in this.data.godmap){
      var god = this.data.godmap[i];
      if(god.checked){
        datamap.god.push(god.code);
      }
    }
    console.info(datamap);
  }
})