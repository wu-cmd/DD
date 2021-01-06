//index.js
//获取应用实例
const app = getApp()
var TOP_DISTANCE='500'
import mock from '../../utils/mock';
Page({
  data: {
    titles: ["综合排序","距离最近","佣金最高"],
    title:["小叮当"],
    // currentIndex:"0",
    // left:"",
    showtop:false,
   
   
  },
// -----------------------------事件-------------------------------
    dianji(event) {
      console.log(event)
    },
    // 这个是回到顶部事件
  handTop(event){
    wx.pageScrollTo({
      scrollTop:0,
    })
  },
    // 监听滚动事件
    onPageScroll(options){
      // console.log(options)
      var scolltop=options.scrollTop;
      var flag =scolltop>=TOP_DISTANCE;
      if (flag !=this.data.showtop)
     this.setData({
          showtop:flag
        })
     
    },
 
  // --------------------------------------------------------------------
     onLoad:function(options){
    
      wx.request({
     url: 'https://httpbin.org/post',
     method:"POST",
      data:{
         name:'XDD',
       age:23
    },
    success:function(res){
          console.log(res)
     }
  })
}
})
  

  //事件处理函数
//  onLoad: function () {
//   },

  // 点击事件三个按钮
//   changeTab:function(e){
//     console.log(e)
//     this.setData({
//      currentIndex: e.currentTarget.dataset.aa
//     })
//     this.changeline(e)
//    },
//    changeline:function(){
//     const query = wx.createSelectorQuery()
//     var _this = this
//     query.select('.tabTrue').boundingClientRect()
//     query.exec(function (res) {
//      _this.setData({
//       left: res[0].left
//      })
//     //  console.log(res[0].left)
//     })
//    },
//    onLoad: function () {
//     this.changeline(1)
//    }
// })