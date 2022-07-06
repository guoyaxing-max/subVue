import Vue from 'vue'
import App from './App.vue'
import router from './router'

let instance = null
function render (props={}){
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
}
if (!window.__POWERED_BY_QIANKUN) {
  render();
}
if (window.__POWERED_BY_QIANKUN) {
  window.publicPath = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ || "/";
}

// 子应用 启动钩子函数
export async function bootstrap() {
  console.log("bootstrap");
}
// 子应用 挂载钩子函数
export async function mount(props) {
  console.log("mount");
  render(props);
}
// 子应用 退出钩子函数
export async function unmount() {
  console.log("unmount");
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}