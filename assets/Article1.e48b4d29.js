import{f as r,d as a,o as c,c as f,e as i,F as d,a as h}from"./vendor.0c335c01.js";import{C as u}from"./CodePen.71fb2b38.js";import{_ as l}from"./index.5e2d43ec.js";import"./createjs.df35218d.js";const w=r('<h1>\u4E00. Swift \u4ECB\u7ECD</h1><p>Swift \u662F Apple \u516C\u53F8\u5728 2014 \u5E74\u63A8\u51FA\u7684\u7F16\u7A0B\u8BED\u8A00\uFF0C\u7528\u4E8E\u5F00\u53D1 iOS\u3001iPadOS\u3001macOS\u3001tvOS \u548C watchOS \u5E94\u7528\uFF0C\u5176\u5B98\u7F51\u4E3A <a href="https://www.swift.org/">swift.org</a>\u3002 <br> Swift \u5177\u6709\u8BED\u6CD5\u73B0\u4EE3\u5316\u3001\u7B80\u6D01\u7075\u6D3B\u3001\u7C7B\u578B\u5B89\u5168\u3001\u9AD8\u6027\u80FD\u7B49\u7279\u6027\uFF0C\u4E14\u4E8E 15 \u5E74\u5BF9\u5916\u5F00\u6E90\uFF0C\u6E90\u4EE3\u7801\u6258\u7BA1\u5728 <a href="https://github.com/apple/swift">Apple \u5B98\u65B9 Github</a> \u4E0A\u3002</p><h1>\u4E8C. \u5982\u4F55\u5B66\u4E60</h1><p>\u8BA1\u5212\u901A\u8FC7\u672C\u7AD9\u70B9\u6765\u5165\u95E8 Swift \u7684\u670B\u53CB\uFF0C\u6700\u597D\u4E86\u89E3\u8FC7\u7F16\u7A0B\u8BED\u8A00\u7684\u4E00\u4E9B\u57FA\u672C\u6982\u5FF5\uFF0C\u4F8B\u5982\u77E5\u9053\u4EC0\u4E48\u662F\u53D8\u91CF\u3001\u4EC0\u4E48\u662F\u6574\u6570\u7C7B\u578B\u548C\u5B57\u7B26\u4E32\u7C7B\u578B\u3002 <br> \u5728\u9605\u8BFB\u6587\u7AE0\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C\u9047\u5230\u4E0D\u719F\u6089\u7684\u4E13\u4E1A\u8BCD\u6C47\uFF0C\u5EFA\u8BAE\u5148\u641C\u7D22\u548C\u638C\u63E1\u5BF9\u5E94\u7684\u77E5\u8BC6\u70B9\uFF0C\u518D\u8FDB\u4E00\u6B65\u9605\u8BFB\u3002</p><p>\u4E0B\u65B9\u4F1A\u63D0\u4F9B\u5B66\u4E60 Swift \u6240\u9700\u8981\u7684\u5F00\u53D1\u5DE5\u5177\u548C\u4E00\u4E9B\u76F8\u5173\u7AD9\u70B9\u3002 <br> \u8BFB\u8005\u5728\u5B66\u4E60\u8FC7\u7A0B\u5E94\u8BE5\u591A\u5229\u7528\u5DE5\u5177\u6765\u4E66\u5199\u548C\u8C03\u8BD5\u4EE3\u7801\uFF08\u6709\u52A9\u4E8E\u4F60\u719F\u6089\u6240\u5B66\u5185\u5BB9\uFF09\uFF0C\u9047\u5230\u95EE\u9898\u4E5F\u53EF\u4EE5\u5230\u76F8\u5173\u7AD9\u70B9\u53D1\u5E16\u5411\u4E13\u4E1A\u4EBA\u58EB\u54A8\u8BE2\u3002</p><h2>2.1 \u5F00\u53D1\u5DE5\u5177</h2><p>\u62E5\u6709\u4E00\u53F0 Mac \u662F\u5B66\u4E60 Swift \u7684\u524D\u63D0\uFF0C\u6211\u4EEC\u9700\u8981\u901A\u8FC7 Mac \u4E0A\u7684 <a href="https://apps.apple.com/us/app/xcode/id497799835">Xcode</a> \u6765\u521B\u5EFA\u3001\u8C03\u8BD5\u548C\u7F16\u8BD1 Swift \u5F00\u53D1\u7684\u9879\u76EE\u3002 <br> \u53E6\u5916\u82F9\u679C\u63A8\u51FA\u4E86\u5B98\u65B9\u7684 <a href="https://developer.apple.com/swift-playgrounds/">Swift Playgrounds</a>\uFF0C\u5728 Playgrounds \u4E0A\u4F60\u53EF\u4EE5\u7F16\u8F91 Swift \u4EE3\u7801\u5E76\u5FEB\u901F\u5730\u770B\u5230\u6267\u884C\u7ED3\u679C\uFF1A</p>',7);function m(o,s){return w}const t={render:m};t.__hmrId="/Users/lanbangjue/Documents/GitHub/devazine/src/pages/swift/markdowns/1-1.md";t.__toc=[];const _=r('<p>\u5728\u5165\u95E8 Swift \u7684\u9636\u6BB5\uFF0CPlaygrounds \u4F1A\u662F\u5F88\u597D\u7684\u5B66\u4E60\u8F85\u52A9\u5DE5\u5177\u3002</p><h2>2.2 \u76F8\u5173\u7AD9\u70B9</h2><p>\u8FD9\u91CC\u6536\u96C6\u4E86\u4E00\u4E9B\u6709\u52A9\u4E8E\u4F60\u5B66\u4E60 Swift \u7684\u7AD9\u70B9\uFF1A</p><ul><li><a href="https://online.swiftplayground.run/">Online Swift Playground</a></li><li><a href="https://docs.swift.org/swift-book/documentation/the-swift-programming-language">\u5B98\u65B9 Swift \u6559\u7A0B\u6587\u6863</a></li><li><a href="https://swiftgg.gitbook.io/swift/">SwiftGG - \u5B98\u65B9 Swift \u6559\u7A0B\u4E2D\u6587\u7248</a></li><li><a href="https://forums.swift.org/">Swift \u5B98\u65B9\u8BBA\u575B</a></li><li><a href="https://stackoverflow.com/questions/tagged/swift">Stack Overflow Swift \u4E13\u533A</a></li></ul><h1>\u4E09. \u53CD\u9988</h1><p>\u5982\u679C\u8BFB\u8005\u5728\u9605\u8BFB\u8FC7\u7A0B\u4E2D\uFF0C\u611F\u5230\u56F0\u60D1\u3001\u9047\u5230\u95EE\u9898\u6216\u53D1\u73B0\u7B14\u8BEF\uFF0C\u8BF7\u5230 <a href="https://github.com/devazine/swift/issues">Issue \u677F\u5757</a>\u8FDB\u884C\u53CD\u9988\uFF0C\u7B14\u8005\u4F1A\u53CA\u65F6\u5BF9\u95EE\u9898\u5185\u5BB9\u8FDB\u884C\u4FEE\u6539\u3002</p>',6);function g(o,s){return _}const e={render:g};e.__hmrId="/Users/lanbangjue/Documents/GitHub/devazine/src/pages/swift/markdowns/1-2.md";e.__toc=[];const S={components:{Md1_1:t,Md1_2:e,CodePen:u},setup(){return{}}},b=h("video",{controls:"",src:"https://raw.githubusercontent.com/devazine2022/assets/main/video-1.mp4?raw=true"},null,-1);function v(o,s,k,M,$,O){const n=a("Md1_1"),p=a("Md1_2");return c(),f(d,null,[i(n),b,i(p)],64)}const G=l(S,[["render",v]]);export{G as default};
