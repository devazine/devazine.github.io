import{o as l,c as h,a as s,t as B,f as S,h as p,u as A,G as V,j as o,d as i,k as _,v as g,e as r,b as j,y as k,F as x}from"./vendor.133151e9.js";import{_ as v,L as F,a as c,s as m,g as C}from"./index.13b5994b.js";import{A as D}from"./ArticleFooter.7658dec8.js";import"./createjs.df35218d.js";const N={props:{title:String},setup(){return{}}},z={class:"vue-article-banner-wrap article-banner-wrap"},E=s("span",{class:"arrow font-family"},"\uE619",-1),G={class:"title font-barlow"},H=S('<ul><li><a href="https://v3.cn.vuejs.org/" target="blank">Vue \u5B98\u7F51 <span class="font-family">\uE600</span></a></li><li><a href="https://github.com/devazine/vue-analysis">\u6587\u7AE0 Demo <span class="font-family">\uE600</span></a></li><li><a href="https://github.com/devazine/vue-analysis/issues" target="blank">\u52D8\u8BEF <span class="font-family">\uE600</span></a></li></ul>',1);function M(a,t,n,e,L,u){return l(),h("div",z,[s("h2",null,[E,s("span",G,B(n.title),1)]),H])}const R=v(N,[["render",M]]);const T=p(""),d=p(!0),f=p(1),W={name:"VueAsyncComponentWrapper",components:{Banner:R,Loading:F,ArticleFooter:D},setup(){const a=A();return V(()=>a.params,t=>{f.value=Number(t.page)||1},{immediate:!0}),{articleList:c,page:f,isLoading:d,title:T,subject:m,toggleLoadingState(t){d.value=t,o.emit("article/toggleLoadingState",t)}}},computed:{view(){this.toggleLoadingState(!0);const a=this.page;return C(a,t=>{o.emit("article/getTocHtml",t.toc);const n=c[a-1].title;this.title=n,o.emit("article/setArticleList",{articleList:c,title:n,subject:m}),this.toggleLoadingState(!1)})}}};function $(a,t,n,e,L,u){const y=i("Loading"),b=i("Banner"),w=i("ArticleFooter");return l(),h(x,null,[_(r(y,null,null,512),[[g,e.isLoading]]),_(r(b,{title:e.title,subject:e.subject},null,8,["title","subject"]),[[g,!e.isLoading]]),s("article",null,[(l(),j(k(u.view))),r(w,{isLoading:e.isLoading,page:e.page,articleList:e.articleList},null,8,["isLoading","page","articleList"])])],64)}const O=v(W,[["render",$]]);export{O as default};
