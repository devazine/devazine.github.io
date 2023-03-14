import{_ as r}from"./index.13b5994b.js";import{o,c as n}from"./vendor.133151e9.js";const a={props:{height:{type:String,default:"540"},tab:{type:String,default:"js"},id:{type:String,required:!0}},computed:{src(){return`https://codepen.io/vajoy/embed/preview/${this.id}?default-tab=${this.tab}%2Cresult`},href(){return`https://codepen.io/vajoy/pen/${this.id}`}},setup(){return{}}},i=["height","src"];function s(c,h,e,p,d,t){return o(),n("iframe",{height:e.height,style:{width:"100%"},scrolling:"no",title:"Devazine Demo",src:t.src,frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
    See the Pen <a :href="href">
      reactive-exm-1</a> by VaJoy Larn (<a href="https://codepen.io/vajoy">@vajoy</a>)
    on <a href="https://codepen.io">CodePen</a>.
  `,8,i)}const u=r(a,[["render",s]]);export{u as C};
