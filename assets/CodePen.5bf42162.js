import{_ as r}from"./index.389243a6.js";import{o,c as a}from"./vendor.21011c26.js";const n={props:{height:{type:String,default:"540"},tab:{type:String,default:"js"},id:{type:String,required:!0}},computed:{src(){return`https://codepen.io/vajoy/embed/preview/${this.id}?default-tab=${this.tab}%2Cresult`},href(){return`https://codepen.io/vajoy/pen/${this.id}`}},setup(){return{}}},i=["height","src"];function s(c,h,e,p,d,t){return o(),a("iframe",{height:e.height,style:{width:"100%"},scrolling:"no",title:"Devazine Demo",src:t.src,frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`\r
    See the Pen <a :href="href">\r
      reactive-exm-1</a> by VaJoy Larn (<a href="https://codepen.io/vajoy">@vajoy</a>)\r
    on <a href="https://codepen.io">CodePen</a>.\r
  `,8,i)}var u=r(n,[["render",s]]);export{u as C};
