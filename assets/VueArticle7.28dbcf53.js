import{o,c as e,F as l,a as n,p as s,f as k,d as t,e as a}from"./vendor.508f1f42.js";import{C as v}from"./CodePen.3ae9d5b3.js";import{_ as g}from"./index.98d17a87.js";import"./createjs.df35218d.js";const h=n("h1",null,"\u4E00. toRef \u548C toRefs",-1),R=n("p",null,[s("\u901A\u8FC7 "),n("code",null,"reactive"),s(" \u4EE3\u7406\u540E\u7684\u54CD\u5E94\u5F0F\u5BF9\u8C61\u662F\u4E0D\u652F\u6301\u89E3\u6784\u7684\uFF0C\u4F8B\u5982\u4E0B\u65B9\u7684\u4EE3\u7801\u4E0D\u4F1A\u6309\u9884\u671F\u6267\u884C\uFF1A")],-1);function b(c,p){return o(),e(l,null,[h,R],64)}const r={render:b};r.__hmrId="/Users/lanbangjue/Documents/GitHub/devazine/src/pages/fe/source-analysis/vue/markdowns/7-1.md";r.__toc=[{level:"1",content:"&#x4E00;. toRef &#x548C; toRefs"}];const j=n("code",null,"toRef",-1),x=n("code",null,"toRefs",-1),V=n("code",null,"ref",-1),$=n("code",null,"value",-1),C=n("br",null,null,-1);function M(c,p){return o(),e("p",null,[j,s(" \u548C "),x,s(" \u5C31\u662F\u7528\u6765\u89E3\u51B3\u8BE5\u95EE\u9898\u7684\uFF0C\u5B83\u4EEC\u53EF\u4EE5\u628A\u54CD\u5E94\u5F0F\u5BF9\u8C61\u5185\u7684\u5355\u4E2A\u6216\u591A\u4E2A\u5C5E\u6027\uFF0C\u8F6C\u5316\u4E3A "),V,s(" \u5B9E\u4F8B\u7684\u5F62\u5F0F\uFF0C\u901A\u8FC7 "),$,s(" \u5C5E\u6027\u6765\u8BBF\u95EE/\u4FEE\u6539\u5BF9\u5E94\u7684\u503C\uFF0C\u5E76\u89E6\u53D1\u76F8\u5E94\u7684\u526F\u4F5C\u7528\u51FD\u6570\u3002 "),C,s("\u50CF\u4E0A\u9762\u7684\u4EE3\u7801\u53EF\u4EE5\u5229\u7528\u8FD9\u4E24\u4E2A\u63A5\u53E3\u6765\u5904\u7406\uFF1A")])}const i={render:M};i.__hmrId="/Users/lanbangjue/Documents/GitHub/devazine/src/pages/fe/source-analysis/vue/markdowns/7-2.md";i.__toc=[];const I=k(`<p>\u5B83\u4EEC\u7684\u5B9E\u73B0\u6BD4\u8F83\u7B80\u5355\uFF0C\u4F9D\u65E7\u662F\u5229\u7528 <code>getter</code> \u548C <code>setter</code> \u6765\u62E6\u622A <code>value</code> \u5C5E\u6027\u7684\u8BF7\u6C42 \u2014\u2014 \u5F53\u8BBF\u95EE <code>value</code> \u5C5E\u6027\u65F6\uFF0C\u8FD4\u56DE\u54CD\u5E94\u5F0F\u5BF9\u8C61\u5BF9\u5E94\u7684\u5C5E\u6027\u503C\uFF1B\u5F53\u4FEE\u6539 <code>value</code> \u5C5E\u6027\u65F6\uFF0C\u76F4\u63A5\u4FEE\u6539\u54CD\u5E94\u5F0F\u5BF9\u8C61\u3002 <br> \u63A5\u53E3\u5B9E\u73B0\u5982\u4E0B\uFF1A</p><div class="fr w-45"><pre class="language-js"><code class="language-javascript"><span class="token comment">/** ref.js **/</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">toRef</span><span class="token punctuation">(</span><span class="token parameter">object<span class="token punctuation">,</span> key<span class="token punctuation">,</span> defaultValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> val <span class="token operator">=</span> object<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token keyword">return</span> <span class="token function">isRef</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
        <span class="token operator">?</span> val
        <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ObjectRefImpl</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> key<span class="token punctuation">,</span> defaultValue<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">toRefs</span><span class="token punctuation">(</span><span class="token parameter">object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> ret <span class="token operator">=</span> <span class="token function">isArray</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ret<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div>`,2),H=n("pre",{class:"language-js"},[n("code",{class:"language-javascript","v-pre":"true"},[n("span",{class:"token comment"},"/** ref.js **/"),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"ObjectRefImpl"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("object"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},","),s(" defaultValue")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s("  "),n("span",{class:"token comment"},"// defaultValue \u662F\u7F3A\u7701\u503C"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("__v_isRef "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("_object "),n("span",{class:"token operator"},"="),s(" object"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("_key "),n("span",{class:"token operator"},"="),s(" key"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("_defaultValue "),n("span",{class:"token operator"},"="),s(" defaultValue"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"get"),s(),n("span",{class:"token function"},"value"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"const"),s(" val "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("_object"),n("span",{class:"token punctuation"},"["),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("_key"),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" val "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token keyword"},"undefined"),s(),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("_defaultValue "),n("span",{class:"token operator"},":"),s(` val
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"set"),s(),n("span",{class:"token function"},"value"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"newVal"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("_object"),n("span",{class:"token punctuation"},"["),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("_key"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(` newVal
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])],-1),P=k("<p>\u7740\u91CD\u5173\u6CE8 <code>ObjectRefImpl</code> \u548C <code>toRef</code> \u7684\u5B9E\u73B0\u5373\u53EF\uFF0C<code>toRefs</code> \u4E0D\u5916\u4E4E\u662F\u904D\u5386\u4F20\u5165\u7684\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u518D\u590D\u7528 <code>toRef</code> \u63A5\u53E3\u6765\u6620\u5C04\u5168\u90E8\u7684\u5C5E\u6027\u3002</p><h1>\u4E8C. customRef</h1><p>Vue \u63D0\u4F9B\u4E86\u4E00\u4E2A\u81EA\u5B9A\u4E49\u63A5\u53E3 <code>customRef</code>\uFF0C\u53EF\u4EE5\u8BA9\u7528\u6237\u51B3\u5B9A <code>ref</code> \u5B9E\u4F8B\u6267\u884C <code>track</code> \u548C <code>trigger</code> \u7684\u65F6\u673A\u3002 <br><code>customRef</code> \u63A5\u6536\u4E00\u4E2A\u5DE5\u5382\u51FD\u6570\u4E3A\u53C2\u6570\uFF0C\u8BE5\u5DE5\u5382\u51FD\u6570\u53C8\u5305\u542B <code>track</code> \u548C <code>trigger</code> \u4E24\u4E2A\u51FD\u6570\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u4E14\u5FC5\u987B\u8FD4\u56DE\u5E26\u6709 <code>get</code> \u548C <code>set</code> \u5C5E\u6027\u65B9\u6CD5\u7684\u5BF9\u8C61\u3002 <br>\u4E0B\u65B9\u793A\u4F8B\u901A\u8FC7 <code>customRef</code> \u63A5\u53E3\uFF0C\u81EA\u5B9A\u4E49\u4E86\u4E00\u4E2A\u53EA\u63A5\u53D7\u5076\u6570\u8D4B\u503C\u7684 <code>ref</code>\uFF1A</p>",3);function U(c,p){return o(),e(l,null,[I,H,P],64)}const d={render:U};d.__hmrId="/Users/lanbangjue/Documents/GitHub/devazine/src/pages/fe/source-analysis/vue/markdowns/7-3.md";d.__toc=[{level:"1",content:"&#x4E8C;. customRef"}];const B=k('<p><code>customRef</code> \u7684\u5B9E\u73B0\u5982\u4E0B\uFF1A</p><div class="fr w-50"><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u5728\u7C7B <code>CustomRefImpl</code> \u4E2D\u5229\u7528\u4E86\u95ED\u5305\u7684\u80FD\u529B\uFF0C\u5C06\u4F20\u5165\u5DE5\u5382\u51FD\u6570\u7684\u6267\u884C\u7ED3\u679C\uFF08<code>get</code> \u548C <code>set</code>\uFF09\u5C01\u5B58\u4E3A\u5185\u90E8\u5C5E\u6027\uFF0C\u5E76\u62E6\u622A\u7528\u6237\u5BF9 <code>value</code> \u5C5E\u6027\u7684\u8BBF\u95EE\u548C\u4FEE\u6539\u6765\u8C03\u7528 <code>get</code> \u548C <code>set</code>\u65B9\u6CD5\u3002</p><p>\u53E6\u5916\u5728 <code>CustomRefImpl</code> \u4E2D\u4E5F\u5C06\u5DE5\u5382\u51FD\u6570\u7684\u4E24\u4E2A\u53C2\u6570\u5B9A\u4E49\u4E3A\u8C03\u7528 <code>trackRefValue</code> \u548C <code>triggerRefValue</code> \u7684\u65B9\u6CD5\uFF0C\u7528\u6237\u5728\u5916\u90E8\u6267\u884C\u8FD9\u4E24\u4E2A\u53C2\u6570\uFF0C\u5373\u53EF\u8C03\u7528\u4F9D\u8D56\u6536\u96C6\u548C\u89E6\u53D1\u526F\u4F5C\u7528\u7684\u80FD\u529B\u3002</p><p>\u5E38\u89C4\u8981\u6C42\u5728\u5DE5\u5382\u51FD\u6570\u8FD4\u56DE\u7684 <code>get</code> \u4E2D\u53BB\u8C03\u7528 <code>track</code>\uFF0C\u5728 <code>set</code> \u4E2D\u53BB\u8C03\u7528 <code>trigger</code>\u3002</p></div>',2),W=n("pre",{class:"language-js"},[n("code",{class:"language-javascript","v-pre":"true"},[n("span",{class:"token comment"},"/** ref.js **/"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"customRef"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"factory"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"CustomRefImpl"),n("span",{class:"token punctuation"},"("),s("factory"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"CustomRefImpl"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"factory"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("__v_isRef "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" get"),n("span",{class:"token punctuation"},","),s(" set "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"factory"),n("span",{class:"token punctuation"},"("),s(`
            `),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"trackRefValue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"triggerRefValue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("_get "),n("span",{class:"token operator"},"="),s(" get"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("_set "),n("span",{class:"token operator"},"="),s(" set"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"get"),s(),n("span",{class:"token function"},"value"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"_get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"set"),s(),n("span",{class:"token function"},"value"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"newVal"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"_set"),n("span",{class:"token punctuation"},"("),s("newVal"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])],-1),z=n("h1",null,"\u4E09. proxyRefs",-1),G=n("p",null,[s("\u5982\u679C\u4E00\u4E2A\u5BF9\u8C61\u4E2D\u5B58\u5728\u67D0\u4E2A\u5C5E\u6027\u6307\u5411 "),n("code",null,"ref"),s(" \u5B9E\u4F8B\uFF0C\u6BCF\u6B21\u6211\u4EEC\u5728\u4F7F\u7528\u65F6\uFF08\u65E0\u8BBA\u662F\u8BBF\u95EE\uFF0C\u6291\u6216\u4FEE\u6539\uFF09\uFF0C\u90FD\u9700\u8981\u8BBF\u95EE\u5176 "),n("code",null,"value"),s(" \u5C5E\u6027\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5F00\u53D1\u73AF\u8282\u7684\u5FC3\u667A\u8D1F\u62C5\u3002 "),n("br"),s(" \u793A\u4F8B\u4EE3\u7801\uFF1A")],-1),O=n("pre",{class:"w-45 language-js"},[n("code",{class:"language-js","v-pre":"true"},[s("  "),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" ref"),n("span",{class:"token punctuation"},","),s(" effect "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" Vue"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" div "),n("span",{class:"token operator"},"="),s(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelector"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" info "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Hello'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" obj "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(" info "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  
  `),n("span",{class:"token function"},"effect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    div`),n("span",{class:"token punctuation"},"."),s("innerText "),n("span",{class:"token operator"},"="),s(" obj"),n("span",{class:"token punctuation"},"."),s("info"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},";"),s("  "),n("span",{class:"token comment"},"// \u9700\u8981\u591A\u6253\u4E00\u4E2A .value"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  
  obj`),n("span",{class:"token punctuation"},"."),s("info"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'Bye~'"),n("span",{class:"token punctuation"},";"),s("  "),n("span",{class:"token comment"},"// \u9700\u8981\u591A\u6253\u4E00\u4E2A .value"),s(`
`)])],-1),D=k(`<p>\u5F97\u76CA\u4E8E <code>Proxy</code> \u7684\u62E6\u622A\u673A\u5236\uFF0C\u53EF\u4EE5\u62E6\u622A\u7528\u6237\u5BF9\u5BF9\u8C61\u5C5E\u6027\u7684\u8BBF\u95EE\uFF0C\u518D\u5728\u62E6\u622A\u5668\u4E2D\u8FD4\u56DE/\u4FEE\u6539\u5BF9\u5E94\u5C5E\u6027\u7684 <code>value</code> \u503C\u5373\u53EF\u3002 <br> \u6211\u4EEC\u57FA\u4E8E\u8BE5\u539F\u7406\u6765\u65B0\u589E\u4E00\u4E2A <code>proxyRefs</code> \u63A5\u53E3\uFF1A</p><div class="fr w-50"><p>\u5176\u4E2D <code>unref</code> \u7528\u4E8E\u8FD4\u56DE <code>ref</code> \u5B9E\u4F8B\u7684 <code>value</code> \u503C\uFF1A</p><pre class="language-js"><code class="language-javascript"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">unref</span><span class="token punctuation">(</span><span class="token parameter">ref</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">isRef</span><span class="token punctuation">(</span>ref<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">(</span>ref<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">:</span> ref
<span class="token punctuation">}</span>
</code></pre><p>\u53E6\u5916\u4E3A\u4E86\u4FDD\u8BC1\u4EE3\u7801\u7684\u5065\u58EE\u6027\uFF0C\u6211\u4EEC\u5728 <code>proxyRefs</code> \u5165\u53E3\u5904\u65B0\u589E\u4E00\u4E2A\u5224\u65AD\uFF0C\u82E5\u4F20\u5165\u7684\u5BF9\u8C61\u5C5E\u4E8E\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE\uFF1A</p><pre class="language-js"><code class="language-javascript"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">proxyRefs</span><span class="token punctuation">(</span><span class="token parameter">objectWithRefs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">isReactive</span><span class="token punctuation">(</span>objectWithRefs<span class="token punctuation">)</span>  <span class="token comment">// \u65B0\u589E\u5224\u65AD</span>
        <span class="token operator">?</span> objectWithRefs <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>objectWithRefs<span class="token punctuation">,</span> shallowUnwrapHandlers<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><blockquote><p>\u{1F4A1} Vue \u5B98\u65B9\u5E76\u4E0D\u63A8\u8350\u540C\u65F6\u4F7F\u7528 <code>Proxy</code> \u548C <code>getter / setter</code> \u7684\u80FD\u529B\uFF0C\u6240\u4EE5 <code>proxyRefs</code> \u63A5\u53E3\u672A\u6536\u5F55\u5728\u5BF9\u5916\u7684\u5B98\u65B9\u6587\u6863\u4E2D\u3002</p></blockquote></div>`,2),E=n("pre",{class:"language-js"},[n("code",{class:"language-javascript","v-pre":"true"},[n("span",{class:"token comment"},"/** ref.js **/"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"proxyRefs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"objectWithRefs"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Proxy"),n("span",{class:"token punctuation"},"("),s("objectWithRefs"),n("span",{class:"token punctuation"},","),s(" shallowUnwrapHandlers"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(" shallowUnwrapHandlers "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function-variable function"},"get"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("target"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},","),s(" receiver")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"unref"),n("span",{class:"token punctuation"},"("),s("Reflect"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},","),s(" receiver"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function-variable function"},"set"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("target"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},","),s(" receiver")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"const"),s(" oldValue "),n("span",{class:"token operator"},"="),s(" target"),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"isRef"),n("span",{class:"token punctuation"},"("),s("oldValue"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token operator"},"!"),n("span",{class:"token function"},"isRef"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            oldValue`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(` value
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" Reflect"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},","),s(" value"),n("span",{class:"token punctuation"},","),s(" receiver"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])],-1),N=n("p",null,[s("\u73B0\u5728\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 "),n("code",null,"proxyRefs"),s(" \u63A5\u53E3\u6765\u5FEB\u6377\u64CD\u4F5C\u542B\u6709 "),n("code",null,"ref"),s(" \u5B9E\u4F8B\u5C5E\u6027\u7684\u5BF9\u8C61\u4E86\uFF1A")],-1);function q(c,p){return o(),e(l,null,[B,W,z,G,O,D,E,N],64)}const f={render:q};f.__hmrId="/Users/lanbangjue/Documents/GitHub/devazine/src/pages/fe/source-analysis/vue/markdowns/7-4.md";f.__toc=[{level:"1",content:"&#x4E09;. proxyRefs"}];const A={components:{Md7_1:r,Md7_2:i,Md7_3:d,Md7_4:f,CodePen:v},setup(){return{}}};function F(c,p,S,T,J,L){const _=t("Md7_1"),u=t("CodePen"),y=t("Md7_2"),m=t("Md7_3"),w=t("Md7_4");return o(),e(l,null,[a(_),a(u,{id:"OJvzpjr",tab:"html",height:"400"}),a(y),a(u,{id:"VwXypQx",tab:"html",height:"400"}),a(m),a(u,{id:"poLpwmB",tab:"html"}),a(w),a(u,{id:"GRxyPOB",tab:"html"})],64)}var Z=g(A,[["render",F]]);export{Z as default};
