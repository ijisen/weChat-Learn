// packageEvent/pages/component/component/component.js
Component({
  options: {
    // 允许使用全局样式; 等价于设置 styleIsolation: apply-shared ，但设置了 styleIsolation 后这个选项会失效。
    addGlobalClass: true,
    // 样式隔离； 也可以在json文件中声明
    // isolated 启用样式隔离 默认值；在自定义组件内外，使用 class 指定的样式将不会相互影响；
    // apply-shared 表示页面 wxss 样式将影响到自定义组件，自定义组件 wxss 中指定的样式不会影响页面；
    // shared       表示页面 wxss 样式将影响到自定义组件，自定义组件 wxss 中指定的样式也会影响页面和其他
    //                 设置了 apply-shared 或 shared 的自定义组件。（这个选项在插件中不可用。）
    // styleIsolation: '  apply-shared',
    // 使用多个插槽
    multipleSlots: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {

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

  }
})
