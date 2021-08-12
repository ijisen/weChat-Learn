// components/compoent/component.js
Component({
  /**
   * 组件的属性列表
   * VUE Props
   */
  properties: {
    info: {
      type: Object,
      value: {}
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
   
  },
  ready(option) {
    console.log(option)
    console.log('component ready')
  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show () { 
      console.log('component show');
    },
    hide: function () { },
    resize: function () { },
  },
})
