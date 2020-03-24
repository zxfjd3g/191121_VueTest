/* 
自定义的vue插件模块
*/
(function (window) {
  // 定义插件对象
  const MyPlugin = {}
  // 必须给插件对象添加一个install方法(由vue自动调用)
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('Vue.myGlobalMethod()')
    }
  
    // 2. 添加一个全局指令
    Vue.directive('my-directive', function (el, binding) {
      el.innerText = binding.value + '-------'
    })
  
    // 3. 添加一个实例方法
    Vue.prototype.$myMethod = function () {
      console.log('vm.$myMethod()')
    }
  }

  // 向外暴露插件对象
  window.MyPlugin = MyPlugin
})(window)