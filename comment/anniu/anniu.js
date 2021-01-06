// comment/anniu/anniu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
        titles:{
          type:Array,
          value: []
        }
  },
  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onclick(event){
      const index=event.currentTarget.dataset.index;
      // console.log(index);
      this.setData({
        currentIndex:index
      })
      this.triggerEvent("click", { index, title: this.properties.titles[index]},{});
      // 发送索引值和标题
    },
    }
})
