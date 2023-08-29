import{d as c,o as _,c as g,a as s,p as a,e as n,w as t,F as k,f as o}from"./vendor.508f1f42.js";const x=o("<p>\u6D6E\u70B9\u6570\u6307\u542B\u6709\u5C0F\u6570\u90E8\u5206\u7684\u6570\u5B57\uFF0C\u5982 <code>3.14</code>\u3001<code>0.1</code> \u548C <code>-10.0</code>\u3002</p><p>Swift \u63D0\u4F9B\u4E86\u4E24\u79CD\u6709\u7B26\u53F7\u6D6E\u70B9\u6570\u7C7B\u578B\uFF1A</p><ul><li><code>Float</code> \u8868\u793A 32 \u4F4D\u6D6E\u70B9\u6570\u3002\u5BF9\u7CBE\u5EA6\u8981\u6C42\u4E0D\u9AD8\u65F6\u53EF\u4EE5\u4F7F\u7528\u6B64\u7C7B\u578B\uFF1B</li><li><code>Double</code> \u8868\u793A 64 \u4F4D\u6D6E\u70B9\u6570\u3002\u82E5\u9700\u8981\u5B58\u50A8\u5F88\u5927\u6216\u5F88\u9AD8\u7CBE\u5EA6\u7684\u6D6E\u70B9\u6570\u65F6\u8BF7\u4F7F\u7528\u6B64\u7C7B\u578B\u3002</li></ul><p>\u5F53\u4E0D\u4E3B\u52A8\u5199\u660E\u7C7B\u578B\u6CE8\u89E3\u65F6\uFF0CSwift \u4F1A\u9ED8\u8BA4\u91C7\u7EB3 <code>Double</code> \u7C7B\u578B\u6765\u5B58\u50A8\u5C0F\u6570\uFF1A</p>",4),f=s("pre",{class:"w-35 language-swift"},[s("code",{class:"language-swift","v-pre":"true"},[s("span",{class:"token keyword"},"let"),a(" num "),s("span",{class:"token operator"},"="),a(),s("span",{class:"token number"},"1.0"),a(`

`),s("span",{class:"token comment"},"/* \u4F7F\u7528 type(of:) \u5185\u7F6E\u65B9\u6CD5\u6765\u67E5\u8BE2\u7C7B\u578B */"),a(`
`),s("span",{class:"token function"},"print"),s("span",{class:"token punctuation"},"("),s("span",{class:"token function"},"type"),s("span",{class:"token punctuation"},"("),a("of"),s("span",{class:"token punctuation"},":"),a(" num"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")"),a("  "),s("span",{class:"token comment"},"// Double"),a(`
`)])],-1),w=s("h1",null,"\u4E00. Float",-1),b={class:"fr w-30 tip"},y=s("code",null,"e\xB1N",-1),v=s("br",null,null,-1),M=s("code",null,"1.1e-12",-1),z={class:"katex"},F={class:"katex-mathml"},D=o('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1.1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\u2217</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">\u2212</span><span class="mord mtight">12</span></span></span></span></span></span></span></span></span></span></span>',1),B=s("code",null,"Float",-1),E=s("code",null,"-1.1754944e-38",-1),N=s("code",null,"3.4028235e+38",-1),C={class:"katex"},L={class:"katex-mathml"},V=o('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.363em;"></span><span class="mord"><span></span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.363em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">\u2474</span></span></span></span></span></span></span></span></span></span>',1),S=o("<h1>\u4E8C. Double</h1><p>\u4E00\u4E2A <code>Double</code> \u53D8\u91CF\u5360\u636E 8 \u4E2A\u5B57\u8282\uFF0864 \u4F4D\uFF09\u7684\u5185\u5B58\u7A7A\u95F4\uFF0C\u53D6\u503C\u8303\u56F4\u4E3A <code>-2.2250738585072014e-308</code> ~ <code>1.7976931348623157e+308</code>\u3002</p><h1>\u4E09. \u533A\u95F4\u6700\u5927\u6700\u5C0F\u503C</h1><p>\u6BCF\u4E2A\u6D6E\u70B9\u7C7B\u578B\u90FD\u5177\u5907 <code>.leastNormalMagnitude</code> \u548C <code>.greatestFiniteMagnitude</code> \u5C5E\u6027\uFF0C\u5BF9\u5E94\u8BE5\u7C7B\u578B\u53EF\u53D6\u8303\u56F4\u7684\u6700\u5C0F\u503C\u548C\u6700\u5927\u503C\uFF1A</p>",4),A=s("pre",{class:"w-60 language-swift"},[s("code",{class:"language-swift","v-pre":"true"},[s("span",{class:"token function"},"print"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string-literal"},[s("span",{class:"token string"},'"Float \u533A\u95F4\u4E3A: '),s("span",{class:"token interpolation-punctuation punctuation"},"\\("),s("span",{class:"token interpolation"},[s("span",{class:"token operator"},"-"),s("span",{class:"token class-name"},"Float"),s("span",{class:"token punctuation"},"."),a("leastNormalMagnitude")]),s("span",{class:"token interpolation-punctuation punctuation"},")"),s("span",{class:"token string"}," ~ "),s("span",{class:"token interpolation-punctuation punctuation"},"\\("),s("span",{class:"token interpolation"},[s("span",{class:"token class-name"},"Float"),s("span",{class:"token punctuation"},"."),a("greatestFiniteMagnitude")]),s("span",{class:"token interpolation-punctuation punctuation"},")"),s("span",{class:"token string"},'"')]),s("span",{class:"token punctuation"},")"),a(`
`),s("span",{class:"token function"},"print"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string-literal"},[s("span",{class:"token string"},'"Double \u533A\u95F4\u4E3A: '),s("span",{class:"token interpolation-punctuation punctuation"},"\\("),s("span",{class:"token interpolation"},[s("span",{class:"token operator"},"-"),s("span",{class:"token class-name"},"Double"),s("span",{class:"token punctuation"},"."),a("leastNormalMagnitude")]),s("span",{class:"token interpolation-punctuation punctuation"},")"),s("span",{class:"token string"}," ~ "),s("span",{class:"token interpolation-punctuation punctuation"},"\\("),s("span",{class:"token interpolation"},[s("span",{class:"token class-name"},"Double"),s("span",{class:"token punctuation"},"."),a("greatestFiniteMagnitude")]),s("span",{class:"token interpolation-punctuation punctuation"},")"),s("span",{class:"token string"},'"')]),s("span",{class:"token punctuation"},")"),a(`
`)])],-1),j=s("p",null,"\u6253\u5370\u7ED3\u679C\uFF1A",-1),G=s("pre",{class:"w-60 language-swift"},[s("code",{class:"language-swift","v-pre":"true"},[s("span",{class:"token class-name"},"Float"),a(" \u533A\u95F4\u4E3A"),s("span",{class:"token punctuation"},":"),a(),s("span",{class:"token operator"},"-"),s("span",{class:"token number"},"1.1754944e"),s("span",{class:"token operator"},"-"),s("span",{class:"token number"},"38"),a(),s("span",{class:"token operator"},"~"),a(),s("span",{class:"token number"},"3.4028235e"),s("span",{class:"token operator"},"+"),s("span",{class:"token number"},"38"),a(`
`),s("span",{class:"token class-name"},"Double"),a(" \u533A\u95F4\u4E3A"),s("span",{class:"token punctuation"},":"),a(),s("span",{class:"token operator"},"-"),s("span",{class:"token number"},"2.2250738585072014e"),s("span",{class:"token operator"},"-"),s("span",{class:"token number"},"308"),a(),s("span",{class:"token operator"},"~"),a(),s("span",{class:"token number"},"1.7976931348623157e"),s("span",{class:"token operator"},"+"),s("span",{class:"token number"},"308"),a(`
`)])],-1),H=s("h1",null,"\u56DB. \u6D6E\u70B9\u6570\u5B57\u9762\u91CF",-1),I=s("h2",null,"4.1 \u5341\u8FDB\u5236\u6D6E\u70B9\u6570\u5B57\u9762\u91CF",-1),P=s("p",null,[a("\u5341\u8FDB\u5236\u6D6E\u70B9\u6570\u6709\u4E00\u4E2A\u53EF\u9009\u7684\u6307\u6570\uFF08exponent\uFF09\uFF0C\u8868\u793A\u4E3A 10 \u7684\u51E0\u6B21\u65B9\u3002\u6307\u6570\u7684\u6570\u503C\u53EF\u4EE5\u8DDF\u5728\u5927\u5199\u6216\u8005\u5C0F\u5199\u7684 "),s("code",null,"e"),a(" \u540E\u65B9\uFF0C\u4F8B\u5982 "),s("code",null,"e\xB1N"),a(" \u8868\u793A\u300C10 \u7684 \xB1N \u6B21\u65B9\u300D\u3002"),s("br"),a(" \u793A\u4F8B\uFF1A")],-1),R=s("code",null,"1.1e-12",-1),T={class:"katex"},U={class:"katex-mathml"},q=o('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1.1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\u2217</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">\u2212</span><span class="mord mtight">12</span></span></span></span></span></span></span></span></span></span></span>',1),J=s("code",null,"1.1E20",-1),K={class:"katex"},O={class:"katex-mathml"},Q=o('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1.1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\u2217</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">\u2212</span><span class="mord mtight">20</span></span></span></span></span></span></span></span></span></span></span>',1),W=s("h2",null,"4.2 \u5341\u516D\u8FDB\u5236\u6D6E\u70B9\u6570\u5B57\u9762\u91CF",-1),X=s("p",null,[a("Swift \u652F\u6301\u4EE5 "),s("code",null,"0x"),a(" \u524D\u7F00\u5F00\u5934\u6765\u4E66\u5199\u5341\u516D\u8FDB\u5236\u7684\u6D6E\u70B9\u6570\u503C\u3002"),s("br"),a(" \u4E3A\u4E86\u548C\u6574\u6570\u7C7B\u578B\u5B57\u9762\u91CF\u533A\u5206\uFF0C\u5341\u516D\u8FDB\u5236\u6D6E\u70B9\u6570\u7684\u5B57\u9762\u91CF\u5FC5\u987B\u5E26\u6709\u4E00\u4E2A\u6307\u6570\uFF0C\u8868\u793A 2 \u7684\u51E0\u6B21\u65B9\u3002\u6307\u6570\u7684\u6570\u503C\u53EF\u4EE5\u8DDF\u5728\u5927\u5199\u6216\u8005\u5C0F\u5199\u7684 "),s("code",null,"p"),a(" \u540E\u65B9\uFF0C\u4F8B\u5982 "),s("code",null,"p\xB1N"),a(" \u8868\u793A\u300C2 \u7684 \xB1N \u6B21\u65B9\u300D\u3002"),s("br"),a(" \u793A\u4F8B\uFF1A")],-1),Y=s("code",null,"0xFp12",-1),Z={class:"katex"},$={class:"katex-mathml"},ss=o('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">15</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\u2217</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">12</span></span></span></span></span></span></span></span></span></span></span>',1),as=s("code",null,"0xFP-20",-1),ns={class:"katex"},ts={class:"katex-mathml"},es=o('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">15</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\u2217</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">\u2212</span><span class="mord mtight">20</span></span></span></span></span></span></span></span></span></span></span>',1),ls=s("h1",null,"\u4E94. \u6D6E\u70B9\u6570\u8BA1\u7B97\u7684\u7CBE\u5EA6\u95EE\u9898",-1),ps=s("p",null,"\u5F53\u4E24\u4E2A\u6D6E\u70B9\u6570\u5728\u8FDB\u884C\u8BA1\u7B97\u65F6\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u7CBE\u5EA6\u9519\u8BEF\uFF1A",-1),os=s("pre",{class:"w-30 language-swift"},[s("code",{class:"language-swift","v-pre":"true"},[s("span",{class:"token keyword"},"let"),a(" num1 "),s("span",{class:"token operator"},"="),a(),s("span",{class:"token number"},"0.1"),a(`
`),s("span",{class:"token keyword"},"let"),a(" num2 "),s("span",{class:"token operator"},"="),a(),s("span",{class:"token number"},"0.2"),a(`
`),s("span",{class:"token keyword"},"let"),a(" sum "),s("span",{class:"token operator"},"="),a(" num1 "),s("span",{class:"token operator"},"+"),a(` num2

`),s("span",{class:"token function"},"print"),s("span",{class:"token punctuation"},"("),a("sum"),s("span",{class:"token punctuation"},")"),a("  "),s("span",{class:"token comment"},"// 0.30000000000000004"),a(`
`)])],-1),cs=s("p",null,[a("\u4E0A\u65B9\u7684\u793A\u4F8B\u4E2D\u6CA1\u6309\u9884\u671F\u6253\u5370\u51FA "),s("code",null,"0.3"),a("\uFF0C\u8FD9\u662F\u56E0\u4E3A\u5728 "),s("code",null,"0.1 + 0.2"),a(" \u7684\u8BA1\u7B97\u8FC7\u7A0B\u4E2D\u53D1\u751F\u4E86\u4E24\u6B21\u7CBE\u5EA6\u4E22\u5931\u3002")],-1),us=s("div",{class:"fr w-30 tip"},[s("p",null,[a("\u2139\uFE0F \u6807\u6CE8\u2475\uFF1A\u8BE6\u60C5\u53EF\u67E5\u9605"),s("a",{href:"#/swift/appendix?target=2.3"},"\u9644\u5F55 2.3 \u540E\u534A\u90E8\u5206"),a("\u3002")])],-1),is=s("code",null,"0.1",-1),rs=s("code",null,"0.2",-1),ms={class:"katex"},ds={class:"katex-mathml"},hs=o('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.363em;"></span><span class="mord"><span></span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.363em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">\u2475</span></span></span></span></span></span></span></span></span></span>',1),_s=s("br",null,null,-1),gs=s("code",null,"0.1",-1),ks=s("code",null,"0.2",-1),xs=s("code",null,"1",-1),fs=s("p",null,"\u5E38\u89C1\u7684\u89E3\u51B3\u65B9\u6848\u662F\u5148\u5C06\u8981\u88AB\u8BA1\u7B97\u7684\u5C0F\u6570\u90FD\u8F6C\u4E3A\u6574\u6570\uFF0C\u8BA1\u7B97\u540E\u518D\u8F6C\u4E3A\u5C0F\u6570\u5373\u53EF\uFF1A",-1),ws=s("pre",{class:"w-45 language-swift"},[s("code",{class:"language-swift","v-pre":"true"},[s("span",{class:"token keyword"},"let"),a(" num1 "),s("span",{class:"token operator"},"="),a(),s("span",{class:"token number"},"0.1"),a(`
`),s("span",{class:"token keyword"},"let"),a(" num2 "),s("span",{class:"token operator"},"="),a(),s("span",{class:"token number"},"0.2"),a(`
`),s("span",{class:"token keyword"},"var"),a(" sum "),s("span",{class:"token operator"},"="),a(" num1 "),s("span",{class:"token operator"},"*"),a(),s("span",{class:"token number"},"10"),a(),s("span",{class:"token operator"},"+"),a(" num2 "),s("span",{class:"token operator"},"*"),a(),s("span",{class:"token number"},"10"),a("  "),s("span",{class:"token comment"},"// \u5148\u628A\u5C0F\u6570\u5747\u8F6C\u4E3A\u6574\u6570\uFF0C\u518D\u8FDB\u884C\u8BA1\u7B97"),a(`
sum `),s("span",{class:"token operator"},"="),a(" sum "),s("span",{class:"token operator"},"/"),a(),s("span",{class:"token number"},"10"),a("  "),s("span",{class:"token comment"},"// \u518D\u628A\u7ED3\u679C\u6062\u590D\u4E3A\u5C0F\u6570"),a(`

`),s("span",{class:"token function"},"print"),s("span",{class:"token punctuation"},"("),a("sum"),s("span",{class:"token punctuation"},")"),a("  "),s("span",{class:"token comment"},"// 0.3"),a(`
`)])],-1);function bs(ys,vs){const e=c("mn"),p=c("mo"),l=c("mrow"),u=c("msup"),i=c("annotation"),r=c("semantics"),m=c("math"),d=c("mtext");return _(),g(k,null,[x,f,w,s("div",b,[s("p",null,[a("\u2139\uFE0F \u6807\u6CE8\u2474\uFF1A"),y,a(" \u8868\u793A\u300C10 \u7684 \xB1N \u6B21\u65B9\u300D\u3002"),v,a("\u4F8B\u5982 "),M,a(" \u8868\u793A "),s("span",z,[s("span",F,[n(m,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:t(()=>[n(r,null,{default:t(()=>[n(l,null,{default:t(()=>[n(e,null,{default:t(()=>[a("1.1")]),_:1}),n(p,null,{default:t(()=>[a("\u2217")]),_:1}),n(e,null,{default:t(()=>[a("1")]),_:1}),n(u,null,{default:t(()=>[n(e,null,{default:t(()=>[a("0")]),_:1}),n(l,null,{default:t(()=>[n(p,null,{default:t(()=>[a("\u2212")]),_:1}),n(e,null,{default:t(()=>[a("12")]),_:1})]),_:1})]),_:1})]),_:1}),n(i,{encoding:"application/x-tex"},{default:t(()=>[a("1.1 * 10^{-12}")]),_:1})]),_:1})]),_:1})]),D]),a("\u3002")])]),s("p",null,[a("\u4E00\u4E2A "),B,a(" \u53D8\u91CF\u5360\u636E 4 \u4E2A\u5B57\u8282\uFF0832 \u4F4D\uFF09\u7684\u5185\u5B58\u7A7A\u95F4\uFF0C\u53D6\u503C\u8303\u56F4\u4E3A "),E,a(" ~ "),N,s("span",C,[s("span",L,[n(m,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:t(()=>[n(r,null,{default:t(()=>[n(l,null,{default:t(()=>[n(u,null,{default:t(()=>[n(l),n(d,null,{default:t(()=>[a("\u2474")]),_:1})]),_:1})]),_:1}),n(i,{encoding:"application/x-tex"},{default:t(()=>[a("^\u2474")]),_:1})]),_:1})]),_:1})]),V]),a("\u3002")]),S,A,j,G,H,I,P,s("ul",null,[s("li",null,[R,a(" \u8868\u793A "),s("span",T,[s("span",U,[n(m,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:t(()=>[n(r,null,{default:t(()=>[n(l,null,{default:t(()=>[n(e,null,{default:t(()=>[a("1.1")]),_:1}),n(p,null,{default:t(()=>[a("\u2217")]),_:1}),n(e,null,{default:t(()=>[a("1")]),_:1}),n(u,null,{default:t(()=>[n(e,null,{default:t(()=>[a("0")]),_:1}),n(l,null,{default:t(()=>[n(p,null,{default:t(()=>[a("\u2212")]),_:1}),n(e,null,{default:t(()=>[a("12")]),_:1})]),_:1})]),_:1})]),_:1}),n(i,{encoding:"application/x-tex"},{default:t(()=>[a("1.1 * 10^{-12}")]),_:1})]),_:1})]),_:1})]),q]),a("\uFF1B")]),s("li",null,[J,a(" \u8868\u793A "),s("span",K,[s("span",O,[n(m,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:t(()=>[n(r,null,{default:t(()=>[n(l,null,{default:t(()=>[n(e,null,{default:t(()=>[a("1.1")]),_:1}),n(p,null,{default:t(()=>[a("\u2217")]),_:1}),n(e,null,{default:t(()=>[a("1")]),_:1}),n(u,null,{default:t(()=>[n(e,null,{default:t(()=>[a("0")]),_:1}),n(l,null,{default:t(()=>[n(p,null,{default:t(()=>[a("\u2212")]),_:1}),n(e,null,{default:t(()=>[a("20")]),_:1})]),_:1})]),_:1})]),_:1}),n(i,{encoding:"application/x-tex"},{default:t(()=>[a("1.1 * 10^{-20}")]),_:1})]),_:1})]),_:1})]),Q]),a("\u3002")])]),W,X,s("ul",null,[s("li",null,[Y,a(" \u8868\u793A "),s("span",Z,[s("span",$,[n(m,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:t(()=>[n(r,null,{default:t(()=>[n(l,null,{default:t(()=>[n(e,null,{default:t(()=>[a("15")]),_:1}),n(p,null,{default:t(()=>[a("\u2217")]),_:1}),n(u,null,{default:t(()=>[n(e,null,{default:t(()=>[a("2")]),_:1}),n(e,null,{default:t(()=>[a("12")]),_:1})]),_:1})]),_:1}),n(i,{encoding:"application/x-tex"},{default:t(()=>[a("15 * 2^{12}")]),_:1})]),_:1})]),_:1})]),ss]),a("\uFF1B")]),s("li",null,[as,a(" \u8868\u793A "),s("span",ns,[s("span",ts,[n(m,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:t(()=>[n(r,null,{default:t(()=>[n(l,null,{default:t(()=>[n(e,null,{default:t(()=>[a("15")]),_:1}),n(p,null,{default:t(()=>[a("\u2217")]),_:1}),n(u,null,{default:t(()=>[n(e,null,{default:t(()=>[a("2")]),_:1}),n(l,null,{default:t(()=>[n(p,null,{default:t(()=>[a("\u2212")]),_:1}),n(e,null,{default:t(()=>[a("20")]),_:1})]),_:1})]),_:1})]),_:1}),n(i,{encoding:"application/x-tex"},{default:t(()=>[a("15 * 2^{-20}")]),_:1})]),_:1})]),_:1})]),es]),a("\u3002")])]),ls,ps,os,cs,us,s("p",null,[a("\u9996\u6B21\u7CBE\u5EA6\u4E22\u5931\u51FA\u73B0\u5728\u5B58\u50A8 "),is,a(" \u548C "),rs,a(" \u5C0F\u6570\u90E8\u5206\u4E8C\u8FDB\u5236\u65F6\uFF0C\u5185\u5B58\u7A7A\u95F4\u5BF9\u5176\u957F\u5EA6\u8FDB\u884C\u4E86\u622A\u65AD"),s("span",ms,[s("span",ds,[n(m,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:t(()=>[n(r,null,{default:t(()=>[n(l,null,{default:t(()=>[n(u,null,{default:t(()=>[n(l),n(d,null,{default:t(()=>[a("\u2475")]),_:1})]),_:1})]),_:1}),n(i,{encoding:"application/x-tex"},{default:t(()=>[a("^\u2475")]),_:1})]),_:1})]),_:1})]),hs]),a("\u3002"),_s,a(" \u5176\u6B21\u5F53 "),gs,a(" \u548C "),ks,a(" \u5C0F\u6570\u90E8\u5206\u4E8C\u8FDB\u5236\u8FDB\u884C\u76F8\u52A0\u540E\uFF0C\u6700\u7EC8\u7ED3\u679C\u7684\u5C0F\u6570\u4F4D\u53C8\u591A\u51FA\u4E86\u4E00\u4F4D\uFF08\u4E8C\u8005\u6700\u9AD8\u4F4D\u90FD\u662F "),xs,a("\uFF0C\u76F8\u52A0\u53D1\u751F\u4E86\u8FDB\u4F4D\uFF09\uFF0C\u53C8\u9700\u8981\u88AB\u5185\u5B58\u7A7A\u95F4\u8FDB\u884C\u957F\u5EA6\u622A\u65AD\uFF0C\u8FDB\u4E00\u6B65\u5BFC\u81F4\u4E86\u7CBE\u5EA6\u4E22\u5931\u3002")]),fs,ws],64)}const h={render:bs};h.__hmrId="/Users/lanbangjue/Documents/GitHub/devazine/src/pages/swift/markdowns/5.md";h.__toc=[{level:"1",content:"&#x4E00;. Float"},{level:"1",content:"&#x4E8C;. Double"},{level:"1",content:"&#x4E09;.  &#x533A;&#x95F4;&#x6700;&#x5927;&#x6700;&#x5C0F;&#x503C;"},{level:"1",content:"&#x56DB;. &#x6D6E;&#x70B9;&#x6570;&#x5B57;&#x9762;&#x91CF;"},{level:"2",content:"4.1 &#x5341;&#x8FDB;&#x5236;&#x6D6E;&#x70B9;&#x6570;&#x5B57;&#x9762;&#x91CF;"},{level:"2",content:"4.2 &#x5341;&#x516D;&#x8FDB;&#x5236;&#x6D6E;&#x70B9;&#x6570;&#x5B57;&#x9762;&#x91CF;"},{level:"1",content:"&#x4E94;. &#x6D6E;&#x70B9;&#x6570;&#x8BA1;&#x7B97;&#x7684;&#x7CBE;&#x5EA6;&#x95EE;&#x9898;"}];export{h as default};
