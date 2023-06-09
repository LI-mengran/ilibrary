import { createApp } from 'vue'
import router from "./router";
import App from './App.vue'
import '@/css/app.6b8b815b.css'
import '@/css/chunk-vendors.0b0c58b7.css'
import '../jquery-3.5.1/jquery-3.5.1.min.js'
import $ from 'jquery'
import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css'
// import '@/js/app.86134656'
// import '@/js/chunk-vendors.c6b0c6cc'
// import VueDatePicker from '@vuepic/vue-datepicker';
// import '@vuepic/vue-datepicker/dist/main.css'



createApp(App).use(router).use(ElementPlus).mount("#app");

// Window.prototype.alert = function(){
// 　　//创建一个大盒子
//     var box = document.createElement("div");
// 　　//创建一个关闭按钮
//     var button = document.createElement("button");
// 　　//定义一个对象保存样式
//     var boxName = {
//         width:"500px",
//         height:"180px",
//         backgroundColor:"#f8f8f8",
//         border:"1px solid #ccc",
//         position:"absolute",
//         top:"50%",
//         left:"50%",
//         margin:"-90px 0 0 -250px",
//         zIndex:"999",
//         textAlign:"center",
//         lineHeight:"180px"
//     }
// 　　//给元素添加元素
//     for(var k in boxName){
//         box.style[k] = boxName[k];
//     }
// 　　//把创建的元素添加到body中
//     document.body.appendChild(box);
// 　　//把alert传入的内容添加到box中
//     if(arguments[0]){
//         box.innerHTML = arguments[0];
//     }
//     button.innerHTML = "关闭";
//  　　//定义按钮样式
//     var btnName = {
//         border:"1px solid #ccc",
//         backgroundColor:"#fff",
//         width:"70px",
//         height:"30px",
//         textAlign:"center",
//         lineHeight:"30px",
//         outline:"none",
//         position:"absolute",
//         bottom:"10px",
//         right:"20px",
//     }
//     for(var j in btnName){
//         button.style[j] = btnName[j];
//     }
// 　　//把按钮添加到box中
//     box.appendChild(button);
// 　　//给按钮添加单击事件
//     button.addEventListener("click",function(){
//         box.style.display = "none";
//     })
// }


 