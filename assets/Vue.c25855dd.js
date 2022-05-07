import{o as r,c as o,a as s,t as d,f as k,k as g,v as h,y as L,n as B,h as m,u as S,E as V,j as c,b as u,e as _,d as j,x as C,F}from"./vendor.f5d03871.js";import{_ as f,r as N,L as z,a as p,s as y,g as D}from"./index.c187c9f1.js";import"./createjs.043c64f6.js";const P={props:{title:String},setup(){return{}}},E={class:"article-banner-wrap"},$=s("h1",{class:"font-barlow"},"Vue.js \u6E90\u7801\u89E3\u6790",-1),H=s("span",{class:"arrow font-family"},"\uE619",-1),M={class:"title font-barlow"},R=k('<ul><li><a href="https://v3.cn.vuejs.org/" target="blank">Vue \u5B98\u7F51 <span class="font-family">\uE600</span></a></li><li><a href="https://github.com/devazine/vue-analysis">\u6587\u7AE0 Demo <span class="font-family">\uE600</span></a></li><li><a href="https://github.com/devazine/devazine.github.io/issues" target="blank">\u52D8\u8BEF <span class="font-family">\uE600</span></a></li></ul>',1);function T(n,t,i,e,v,a){return r(),o("div",E,[$,s("h2",null,[H,s("span",M,d(i.title),1)]),R])}var q=f(P,[["render",T]]);const G={props:{articleList:{type:Array,defaulf:()=>[]},isLoading:{type:Boolean,default:!0},page:{type:Number,default:1}},computed:{preArticle(){return this.articleList[this.page-2]||{}},nextArticle(){return this.articleList[this.page]||{}}},setup(){return{gotoPath(n){N.push(n)}}}},I=s("span",null,"\u4E0A\u4E00\u7BC7",-1),J={class:"font-barlow"},K=s("span",null,"\u4E0B\u4E00\u7BC7",-1),O={class:"font-barlow"};function Q(n,t,i,e,v,a){return g((r(),o("div",{class:B(["article-bottom-nav-wrap",{"only-right":!a.preArticle.path,"only-left":!a.nextArticle.path}])},[a.preArticle.path?(r(),o("div",{key:0,onClick:t[0]||(t[0]=l=>e.gotoPath(a.preArticle.path)),class:"bottom-nav-pre clearfix"},[I,s("span",J,d(a.preArticle.title),1)])):L("",!0),a.nextArticle.path?(r(),o("div",{key:1,onClick:t[1]||(t[1]=l=>e.gotoPath(a.nextArticle.path)),class:"bottom-nav-next clearfix"},[K,s("span",O,d(a.nextArticle.title),1)])):L("",!0)],2)),[[h,!i.isLoading]])}var U=f(G,[["render",Q]]);const W=m(""),b=m(!0),x=m(1),X={components:{Banner:q,Loading:z,ArticleFooter:U},setup(){const n=S();return V(()=>n.params,t=>{x.value=Number(t.page)||1},{immediate:!0}),{articleList:p,page:x,isLoading:b,title:W,subject:y,toggleLoadingState(t){b.value=t,c.emit("article/toggleLoadingState",t)}}},computed:{view(){this.toggleLoadingState(!0);const n=this.page;return D(n,t=>{c.emit("article/getTocHtml",t.toc);const i=p[n-1].title;this.title=i,c.emit("article/setArticleList",{articleList:p,title:i,subject:y}),this.toggleLoadingState(!1)})}}};function Y(n,t,i,e,v,a){const l=u("Loading"),A=u("Banner"),w=u("ArticleFooter");return r(),o(F,null,[g(_(l,null,null,512),[[h,e.isLoading]]),g(_(A,{title:e.title,subject:e.subject},null,8,["title","subject"]),[[h,!e.isLoading]]),s("article",null,[(r(),j(C(a.view))),_(w,{isLoading:e.isLoading,page:e.page,articleList:e.articleList},null,8,["isLoading","page","articleList"])])],64)}var at=f(X,[["render",Y]]);export{at as default};
