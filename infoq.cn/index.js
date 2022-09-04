// ==UserScript==
// @name         infoq.cn
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.infoq.cn/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    setInterval(function(){
        var e = document.querySelector("#layout > div.live-fixed-bar")
        if(e != undefined){
            e.remove();
        }

        var e2=document.querySelector("#layout > div.inner-content > div.page-home.layout-content > div.sidebar")
        if(e2 != undefined){
            e2.remove();   // 移除侧边栏
        }

        var e3 = document.querySelector("#layout > div.inner-content > div.ActivityFloatImg_float-image_2kMyt")
        if(e3 != undefined){
            e3.remove() // 移除悬浮方框
        }

        var e4=document.querySelector("#layout > div.inner-content > div.widget-slide-weekly")

        if(e4 != undefined){
            e4.remove();
        }
        
        var square = document.querySelector("#layout > div.inner-content > div.ActivityFloatImg_float-image_2kMyt")
        if(square != undefined){
            square.remove()
        }

        document.querySelector("#layout > div.live-fixed-bar > div.live-bar > div > div").remove();
         document.querySelector("#layout > div.inner-content.had-notice > div.widget-slide-weekly").remove();       // 移除个人介绍栏
        document.querySelector("#layout > div.live-fixed-bar").remove();   // 删除侧边栏滚动条
         
        document.querySelector("#layout > div.header.common-header-pc.layout-header > div.layout-content.header-content > div.message").remove();   // 移除消息栏，通知小红标
        


    }, 2000 );


    // Your code here...
})();
