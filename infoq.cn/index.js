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
         document.querySelector("#layout > div.inner-content.had-notice > div.widget-slide-weekly").remove();       // 移除个人介绍栏
        document.querySelector("#layout > div.live-fixed-bar").remove();   // 删除侧边栏滚动条
         document.querySelector("#layout > div.inner-content > div.page-home.layout-content > div.sidebar").remove();   // 移除侧边栏
        document.querySelector("#layout > div.header.common-header-pc.layout-header > div.layout-content.header-content > div.message").remove();   // 移除消息栏，通知小红标
        document.querySelector("#layout > div.inner-content > div.ActivityFloatImg_float-image_2kMyt").remove();    // 移除悬浮方框


    }, 2000 );


    // Your code here...
})();