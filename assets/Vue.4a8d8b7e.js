import{o as c,c as v,a as s,t as B,f as S,h as p,u as A,G as V,j as i,d as o,k as _,v as g,e as r,b as j,y as k,F as x}from"./vendor.508f1f42.js";import{_ as h,L as F,a as l,s as m,g as C}from"./index.c4176126.js";import{A as D}from"./ArticleFooter.b05b05c0.js";import"./createjs.df35218d.js";const N={props:{title:String},setup(){return{}}},z={class:"vue-article-banner-wrap article-banner-wrap"},E=s("span",{class:"arrow font-family"},"\uE619",-1),G={class:"title font-barlow"},H=S('<ul><li><a href="https://v3.cn.vuejs.org/" target="blank">Vue \u5B98\u7F51 <span class="font-family">\uE600</span></a></li><li><a href="https://github.com/devazine/vue-analysis">\u6587\u7AE0 Demo <span class="font-family">\uE600</span></a></li><li><a href="https://github.com/devazine/vue-analysis/issues" target="blank">\u52D8\u8BEF <span class="font-family">\uE600</span></a></li></ul>',1);function M(a,e,n,t,L,u){return c(),v("div",z,[s("h2",null,[E,s("span",G,B(n.title),1)]),H])}var R=h(N,[["render",M]]);const T=p(""),d=p(!0),f=p(1),W={name:"VueAsyncComponentWrapper",components:{Banner:R,Loading:F,ArticleFooter:D},setup(){const a=A();return V(()=>a.params,e=>{f.value=Number(e.page)||1},{immediate:!0}),{articleList:l,page:f,isLoading:d,title:T,subject:m,toggleLoadingState(e){d.value=e,i.emit("article/toggleLoadingState",e)}}},computed:{view(){this.toggleLoadingState(!0);const a=this.page;return C(a,e=>{i.emit("article/getTocHtml",e.toc);const n=l[a-1].title;this.title=n,i.emit("article/setArticleList",{articleList:l,title:n,subject:m}),this.toggleLoadingState(!1)})}}};function $(a,e,n,t,L,u){const y=o("Loading"),b=o("Banner"),w=o("ArticleFooter");return c(),v(x,null,[_(r(y,null,null,512),[[g,t.isLoading]]),_(r(b,{title:t.title,subject:t.subject},null,8,["title","subject"]),[[g,!t.isLoading]]),s("article",null,[(c(),j(k(u.view))),r(w,{isLoading:t.isLoading,page:t.page,articleList:t.articleList},null,8,["isLoading","page","articleList"])])],64)}var O=h(W,[["render",$]]);export{O as default};
