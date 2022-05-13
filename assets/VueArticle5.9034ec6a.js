import{o,c as e,F as c,a as n,p as s,f as k,b as t,e as a}from"./vendor.f5d03871.js";import{C as x}from"./CodePen.66805176.js";import{_ as R}from"./index.47471d8b.js";import"./createjs.043c64f6.js";const h=n("h1",null,"\u4E00. \u53EA\u8BFB\u63A5\u53E3",-1),j=n("p",null,[s("Vue \u63D0\u4F9B\u4E86 "),n("code",null,"readonly"),s(" \u63A5\u53E3\uFF0C\u6765\u9632\u6B62\u6307\u5B9A\u5BF9\u8C61\u7684\u5C5E\u6027\u88AB\u4FEE\u6539\uFF1A")],-1);function b(p,l){return o(),e(c,null,[h,j],64)}const r={render:b};r.__hmrId="C:/Users/vajoy/Documents/devazine/src/pages/vue/markdowns/5-1.md";r.__toc=[{level:"1",content:"&#x4E00;. &#x53EA;&#x8BFB;&#x63A5;&#x53E3;"}];const M=n("p",null,[n("code",null,"readonly"),s(" \u7684\u5B9E\u73B0\u540C\u6837\u501F\u52A9\u4E86 "),n("code",null,"Proxy"),s(" \u7684\u62E6\u622A\u5668 \u2014\u2014 \u88AB "),n("code",null,"get"),s(" \u62E6\u622A\u65F6\u6B63\u5E38\u8FD4\u56DE\u6570\u636E\uFF0C\u88AB "),n("code",null,"set"),s(" \u62E6\u622A\u65F6\u7ED5\u8FC7\u6539\u52A8\u884C\u4E3A\u3002")],-1),P=n("p",null,"\u6539\u52A8\u53C2\u8003\u5982\u4E0B\uFF1A",-1),$=n("pre",{class:"fr w-50 language-js"},[n("code",{class:"language-js","v-pre":"true"},[n("span",{class:"token comment"},"/** baseHandlers.js **/"),s(`

`),n("span",{class:"token comment"},"// \u65B0\u589E"),s(`
`),n("span",{class:"token keyword"},"const"),s(" readonlyGet "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createGetter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// \u65B0\u589E"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" readonlyHandlers "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"get"),n("span",{class:"token operator"},":"),s(" readonlyGet"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// \u76F4\u63A5\u8FD4\u56DE true\uFF0C\u4E0D\u505A\u4FEE\u6539\u64CD\u4F5C"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"deleteProperty"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("target"),n("span",{class:"token punctuation"},","),s(" key")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// \u76F4\u63A5\u8FD4\u56DE true\uFF0C\u4E0D\u505A\u5220\u9664\u64CD\u4F5C"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])],-1),H=n("pre",{class:"language-js"},[n("code",{class:"language-javascript","v-pre":"true"},[n("span",{class:"token comment"},"/** reactive.js **/"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" readonlyHandlers "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./baseHandlers.js'"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" readonlyMap "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"WeakMap"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"readonly"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" existingProxy "),n("span",{class:"token operator"},"="),s(" readonlyMap"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("existingProxy"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` existingProxy
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" proxy "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Proxy"),n("span",{class:"token punctuation"},"("),s(`
        target`),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// \u548C reactive \u7684\u533A\u522B\u662F\u4F7F\u7528\u4E86\u53E6\u4E00\u4E2A handler"),s(`
        readonlyHandlers  
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    readonlyMap`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},","),s(" proxy"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` proxy
`),n("span",{class:"token punctuation"},"}"),s(`
`)])],-1),F=k(`<p>\u4F46\u76EE\u524D <code>createGetter</code> \u65B9\u6CD5\u6240\u751F\u6210\u7684 <code>get</code> \u62E6\u622A\u5668\u662F\u9488\u5BF9\u5E38\u89C4\u54CD\u5E94\u5F0F\u5BF9\u8C61\u7684\u3002\u5BF9\u4E8E\u53EA\u8BFB\u5C5E\u6027\u7684\u5BF9\u8C61\u800C\u8A00\uFF0C\u5B83\u4E0D\u9700\u8981\u6267\u884C\u4F9D\u8D56\u8FFD\u8E2A\u64CD\u4F5C\u3002\u6211\u4EEC\u53EF\u4EE5\u4E3A <code>createGetter</code> \u65B9\u6CD5\u65B0\u589E <code>isReadonly</code> \u53C2\u6570\uFF0C\u6765\u5BF9\u53EA\u8BFB\u7684\u903B\u8F91\u8FDB\u884C\u5904\u7406\uFF1A</p><div class="fr w-45"><p>\u5982\u5DE6\u4FA7\u4EE3\u7801\u6240\u793A\uFF0C<code>get</code> \u62E6\u622A\u5668\u5E76\u975E\u53EA\u662F\u5355\u7EAF\u5730\u5224\u65AD\u662F\u5426\u53EA\u8BFB\uFF0C\u7136\u540E\u8FD4\u56DE <code>Reflect.get</code> \u7684\u7ED3\u679C\uFF0C\u800C\u662F\u4F1A\u987A\u7740\u539F\u6709\u54CD\u5E94\u5F0F\u7684\u903B\u8F91\u8D70\u5230\u6700\u540E\uFF0C\u65B9\u4FBF\u5904\u7406\u5BF9\u8C61\u7684\u6DF1\u5C42\u5C5E\u6027\u3002</p><p>\u4E3A\u65B9\u4FBF\u7406\u89E3\uFF0C\u8FD9\u6BB5\u4EE3\u7801\u53EF\u4EE5\u7B80\u5316\u4E3A\uFF1A</p><pre class="language-js"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">createGetter</span><span class="token punctuation">(</span><span class="token parameter">isReadonly <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">const</span> res <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/** \u7ED5\u8FC7\u5176\u5B83\u54CD\u5E94\u5F0F\u7684\u903B\u8F91... **/</span>
    <span class="token comment">/** \u56E0\u4E3A\u53EA\u8BFB\u5C5E\u6027\u7684\u8BBF\u95EE\u4E0D\u9700\u8981\u505A\u4EFB\u4F55\u4F9D\u8D56\u6536\u96C6\u5904\u7406 **/</span> 

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u786E\u4FDD\u6DF1\u5C42\u5C5E\u6027\u90FD\u80FD\u88AB\u5904\u7406</span>
        <span class="token keyword">return</span> isReadonly <span class="token operator">?</span> <span class="token function">readonly</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">reactive</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,2),I=n("pre",{class:"language-js"},[n("code",{class:"language-javascript","v-pre":"true"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"createGetter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("isReadonly "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s("  "),n("span",{class:"token comment"},"// \u65B0\u589E isReadonly \u53C2\u6570"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("target"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},","),s(" receiver")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// \u65B0\u589E"),s(`
        `),n("span",{class:"token keyword"},"const"),s(" targetFromMap "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("isReadonly "),n("span",{class:"token operator"},"?"),s(" readonlyMap "),n("span",{class:"token operator"},":"),s(" proxyMap"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"// \u5C06 proxyMap.get(target) \u6539\u4E3A targetFromMap"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("key "),n("span",{class:"token operator"},"==="),s(" ReactiveFlags"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"RAW"),s(),n("span",{class:"token operator"},"&&"),s(" targetFromMap"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(` 
            `),n("span",{class:"token keyword"},"return"),s(" target"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token keyword"},"const"),s(" targetIsArray "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"isArray"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"// \u65B0\u589E !isReadOnly \u5224\u65AD\u6761\u4EF6\uFF0C\u53EA\u8BFB\u5BF9\u8C61\u6267\u884C\u6570\u7EC4\u65B9\u6CD5\u53EF\u653E\u884C\uFF08\u6BD5\u7ADF\u4F1A\u7ED5\u8FC7\u8FFD\u8E2A\uFF09"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("isReadonly "),n("span",{class:"token operator"},"&&"),s(" targetIsArray "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token function"},"hasOwn"),n("span",{class:"token punctuation"},"("),s("arrayInstrumentations"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" Reflect"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("arrayInstrumentations"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},","),s(" receiver"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token keyword"},"const"),s(" res "),n("span",{class:"token operator"},"="),s(" Reflect"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},","),s(" receiver"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"isSymbol"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"&&"),s(" builtInSymbols"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"has"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token comment"},"// \u65B0\u589E !isReadOnly \u5224\u65AD\u6761\u4EF6\uFF0C\u53EA\u8BFB\u5BF9\u8C61\u65E0\u987B\u8FFD\u8E2A"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("isReadonly"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"track"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"isObject"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// \u65B0\u589E isReadOnly \u5224\u65AD\u3002\u786E\u4FDD\u5B50\u5B59\u5C5E\u6027\u90FD\u80FD\u88AB\u5904\u7406\u5230"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" isReadonly "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token function"},"readonly"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])],-1),A=n("h1",null,"\u4E8C. \u6D45\u54CD\u5E94\u548C\u6D45\u53EA\u8BFB\u63A5\u53E3",-1),C=n("h2",null,"2.1 \u6D45\u54CD\u5E94",-1),S=n("p",null,[s("\u6709\u65F6\u5019\u6211\u4EEC\u53EA\u5E0C\u671B\u5BF9\u88AB\u4EE3\u7406\u5BF9\u8C61\u7684\u6700\u5916\u5C42\u5C5E\u6027\u505A\u54CD\u5E94\u5F0F\u7684\u5904\u7406\uFF0C\u5BF9\u5176\u5D4C\u5957\u5BF9\u8C61\u7684\u5C5E\u6027\u5219\u4E0D\u505A\u5904\u7406\u3002\u8FD9\u79CD\u80FD\u529B\u7B80\u79F0\u4E3A\u6D45\u54CD\u5E94\uFF0C\u5728 Vue \u4E2D\u5BF9\u5E94\u7684\u63A5\u53E3\u662F "),n("code",null,"shallowReactive"),s("\uFF1A")],-1);function E(p,l){return o(),e(c,null,[M,P,$,H,F,I,A,C,S],64)}const i={render:E};i.__hmrId="C:/Users/vajoy/Documents/devazine/src/pages/vue/markdowns/5-2.md";i.__toc=[{level:"1",content:"&#x4E8C;. &#x6D45;&#x54CD;&#x5E94;&#x548C;&#x6D45;&#x53EA;&#x8BFB;&#x63A5;&#x53E3;"},{level:"2",content:"2.1 &#x6D45;&#x54CD;&#x5E94;"}];const O=n("p",null,[n("code",null,"shallowReactive"),s(" \u7684\u5B9E\u73B0\u539F\u7406\u8F83\u7B80\u5355 \u2014\u2014 \u5728 "),n("code",null,"get"),s(" \u62E6\u622A\u5668\u4E2D\u76F4\u63A5\u8FD4\u56DE\u7ED3\u679C\u5373\u53EF\uFF0C\u4E0D\u5BF9\u5D4C\u5957\u5C5E\u6027\u8FDB\u884C\u904D\u5386\u3002 "),n("br"),s(" \u5177\u4F53\u5B9E\u73B0\u5982\u4E0B\uFF1A")],-1),V=n("pre",{class:"fr w-55 language-js"},[n("code",{class:"language-js","v-pre":"true"},[n("span",{class:"token comment"},"/** baseHandlers.js - createGetter **/"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"createGetter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("isReadonly "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(" shallow "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s("  "),n("span",{class:"token comment"},"// \u65B0\u589E shallow \u53C2\u6570"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("target"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},","),s(" receiver")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"const"),s(" targetFromMap "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s(`
            isReadonly `),n("span",{class:"token operator"},"?"),s(" readonlyMap "),n("span",{class:"token operator"},":"),s(`
                `),n("span",{class:"token punctuation"},"("),s("shallow "),n("span",{class:"token operator"},"?"),s(" shallowReactiveMap "),n("span",{class:"token operator"},":"),s(" proxyMap"),n("span",{class:"token punctuation"},")"),s("  "),n("span",{class:"token comment"},"// \u65B0\u589E\u5224\u65AD"),s(`
        `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("key "),n("span",{class:"token operator"},"==="),s(" ReactiveFlags"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"RAW"),s(),n("span",{class:"token operator"},"&&"),s(" targetFromMap"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" target"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token comment"},"// ..."),s(`

        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("shallow"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s("  "),n("span",{class:"token comment"},"// \u65B0\u589E\uFF0C\u82E5\u4E3A\u6D45\u54CD\u5E94\uFF0C\u76F4\u63A5\u8FD4\u56DE\u5C5E\u6027\u503C"),s(`
            `),n("span",{class:"token keyword"},"return"),s(` res
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"isObject"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s("  "),n("span",{class:"token comment"},"// \u6D45\u54CD\u5E94\u4E0D\u4F1A\u8D70\u5230\u8FD9\u91CC\u6765\uFF0C\u5373\u5D4C\u5957\u5C5E\u6027\u4E0D\u4F1A\u88AB\u5904\u7406\u4E3A\u54CD\u5E94\u5F0F"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" isReadonly "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token function"},"readonly"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])],-1),D=n("pre",{class:"language-js"},[n("code",{class:"language-javascript","v-pre":"true"},[n("span",{class:"token comment"},"/** reactive.js **/"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" shallowReactiveHandlers "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./baseHandlers.js'"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" shallowReactiveMap "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"WeakMap"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"shallowReactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" existingProxy "),n("span",{class:"token operator"},"="),s(" shallowReactiveMap"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("existingProxy"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` existingProxy
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" proxy "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Proxy"),n("span",{class:"token punctuation"},"("),s(`
        target`),n("span",{class:"token punctuation"},","),s(`
        shallowReactiveHandlers  `),n("span",{class:"token comment"},"// \u6D45\u54CD\u5E94\u4E13\u5C5E handler"),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    shallowReactiveMap`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},","),s(" proxy"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` proxy
`),n("span",{class:"token punctuation"},"}"),s(`


`),n("span",{class:"token comment"},"/** baseHandlers.js **/"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" shallowReactiveHandlers "),n("span",{class:"token operator"},"="),s(" Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"assign"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    mutableHandlers`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"get"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"createGetter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"set"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"createSetter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},")"),s(`
`)])],-1),G=n("h2",null,"2.2 \u6D45\u53EA\u8BFB",-1),B=n("p",null,[s("\u5982\u679C\u4F60\u5E0C\u671B\u8BA9\u4E00\u4E2A\u5BF9\u8C61\u7684\u6700\u5916\u5C42\u5C5E\u6027\u4E0D\u88AB\u4FEE\u6539\uFF0C\u4F46\u5176\u5D4C\u5957\u5C5E\u6027\u4F9D\u65E7\u4FDD\u6301\u53EF\u8BFB\u5199\u7684\u80FD\u529B\uFF0C\u53EF\u4EE5\u4F7F\u7528 Vue \u7684 "),n("code",null,"shallowReadonly"),s(" \u6D45\u53EA\u8BFB\u63A5\u53E3\uFF1A")],-1);function W(p,l){return o(),e(c,null,[O,V,D,G,B],64)}const d={render:W};d.__hmrId="C:/Users/vajoy/Documents/devazine/src/pages/vue/markdowns/5-3.md";d.__toc=[{level:"2",content:"2.2 &#x6D45;&#x53EA;&#x8BFB;"}];const L=k(`<p>\u6D45\u53EA\u8BFB\u7684\u5B9E\u73B0\u8F83\u4E3A\u7B80\u5355\uFF0C\u5B83\u7ED3\u5408\u4E86 <code>readonly</code> \u548C <code>shallowReactive</code> \u7684\u903B\u8F91\uFF1A</p><div class="fr w-50"><pre class="language-js"><code class="language-javascript"><span class="token comment">/** baseHandlers.js **/</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> shallowReadonlyHandlers <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    readonlyHandlers<span class="token punctuation">,</span>  <span class="token comment">// \u590D\u7528 readonly \u7684 handler</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">get</span><span class="token operator">:</span> <span class="token function">createGetter</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>  <span class="token comment">// \u4F20\u5165 isReadonly shallow \u53C2\u6570</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><p>\u8FD9\u91CC\u590D\u7528\u4E86 readonly \u7684 handler\uFF0C\u8FD9\u610F\u5473\u7740\u88AB\u4EE3\u7406\u5BF9\u8C61\u5728 <code>set</code> \u548C <code>deleteProperty</code> \u9636\u6BB5\u4E0D\u4F1A\u505A\u4EFB\u4F55\u64CD\u4F5C\u3002\u540C\u65F6\u91CD\u5199\u4E86 <code>get</code> \u62E6\u622A\u5668\uFF0C\u4F20\u5165\u7684 <code>shallow</code> \u53C2\u6570\u53EF\u4EE5\u786E\u4FDD\u5176\u53EA\u5BF9\u6700\u5916\u5C42\u7684\u5C5E\u6027\u505A\u5904\u7406\u3002</p><blockquote><p>\u{1F4A1} <code>shallowReadonly</code> \u63A5\u53E3\u4EE3\u7406\u540E\u7684\u5BF9\u8C61\uFF0C<strong>\u5E76\u975E\u54CD\u5E94\u5F0F\u5BF9\u8C61</strong>\uFF0C\u4EC5\u4EC5\u662F\u6700\u5916\u5C42\u7684\u5C5E\u6027\u88AB\u8BBE\u7F6E\u4E3A\u53EA\u8BFB\u800C\u5DF2\u3002</p></blockquote></div>`,2),z=n("pre",{class:"language-js"},[n("code",{class:"language-javascript","v-pre":"true"},[n("span",{class:"token comment"},"/** reactive.js **/"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" shallowReadonlyHandlers "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./baseHandlers.js'"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" shallowReadonlyMap "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"WeakMap"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"shallowReadonly"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" existingProxy "),n("span",{class:"token operator"},"="),s(" shallowReadonlyMap"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("existingProxy"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` existingProxy
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" proxy "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Proxy"),n("span",{class:"token punctuation"},"("),s(`
        target`),n("span",{class:"token punctuation"},","),s(`
        shallowReadonlyHandlers  `),n("span",{class:"token comment"},"// \u6D45\u53EA\u8BFB\u4E13\u5C5E handler"),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    shallowReadonlyMap`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},","),s(" proxy"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` proxy
`),n("span",{class:"token punctuation"},"}"),s(`
`)])],-1),K=n("h1",null,"\u4E09. markRaw",-1),N=n("p",null,[s("\u5982\u679C\u6709\u7684\u5BF9\u8C61\u4F60\u5E0C\u671B\u6C38\u8FDC\u4E0D\u8981\u88AB Vue \u54CD\u5E94\u5F0F\u63A5\u53E3\u7684 "),n("code",null,"Proxy"),s(" \u6240\u4EE3\u7406\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),n("code",null,"markRaw"),s(" \u65B9\u6CD5\u6765\u5BF9\u8BE5\u5BF9\u8C61\u8FDB\u884C\u6807\u8BB0\uFF1A")],-1);function Y(p,l){return o(),e(c,null,[L,z,K,N],64)}const y={render:Y};y.__hmrId="C:/Users/vajoy/Documents/devazine/src/pages/vue/markdowns/5-4.md";y.__toc=[{level:"1",content:"&#x4E09;. markRaw"}];const U=k(`<p><code>markRaw</code> \u4F1A\u7ED9\u5BF9\u8C61\u52A0\u4E0A\u4E00\u4E2A\u4E0D\u53EF\u679A\u4E3E\u7684\u79C1\u6709\u5C5E\u6027 <code>__v_skip</code>\uFF0C\u5728\u8C03\u7528\u54CD\u5E94\u5F0F\u63A5\u53E3\u65F6\u5148\u68C0\u67E5\u5BF9\u8C61\u662F\u5426\u5B58\u5728\u8BE5\u5C5E\u6027\uFF0C\u82E5\u6709\u5219\u8FD4\u56DE\u539F\u59CB\u5BF9\u8C61\u3002</p><p>\u5177\u4F53\u5B9E\u73B0\u5982\u4E0B\uFF1A</p><div class="fr w-55"><p>\u6211\u4EEC\u8FD8\u9700\u7ED9 <code>readonly</code>\u3001<code>shallowReactive</code> \u548C <code>shallowReadonly</code> \u90FD\u52A0\u4E0A\u68C0\u67E5 <code>markRaw</code> \u6807\u8BB0\u5C5E\u6027\u7684\u903B\u8F91\uFF0C\u4E0D\u8FC7\u9274\u4E8E\u8FD9\u4E9B\u65B9\u6CD5\u548C <code>reactive</code> \u65B9\u6CD5\u7684\u7ED3\u6784\u975E\u5E38\u76F8\u8FD1\uFF0C\u53EF\u4EE5\u5BF9\u5176\u505A\u8FDB\u4E00\u6B65\u7684\u5C01\u88C5\uFF1A</p><pre class="language-js"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> map</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> existingProxy <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>existingProxy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> existingProxy
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>target<span class="token punctuation">[</span>ReactiveFlags<span class="token punctuation">.</span><span class="token constant">SKIP</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> target
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>
        target<span class="token punctuation">,</span>
        handler
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> proxy<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> proxy
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> mutableHandlers<span class="token punctuation">,</span> proxyMap<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">readonly</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> readonlyHandlers<span class="token punctuation">,</span> readonlyMap<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> shallowReactiveHandlers<span class="token punctuation">,</span> shallowReactiveMap<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">shallowReadonly</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> shallowReadonlyHandlers<span class="token punctuation">,</span> shallowReadonlyMap<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),T=n("pre",{class:"language-js"},[n("code",{class:"language-javascript","v-pre":"true"},[n("span",{class:"token comment"},"/** reactive.js **/"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" existingProxy "),n("span",{class:"token operator"},"="),s(" proxyMap"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("existingProxy"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` existingProxy
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},"// \u65B0\u589E\u5224\u65AD\uFF0C\u5B58\u5728 markRaw \u6807\u8BB0\u5C5E\u6027\u5219\u76F4\u63A5\u8FD4\u56DE\u539F\u59CB\u5BF9\u8C61"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},"["),s("ReactiveFlags"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"SKIP"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` target
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" proxy "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Proxy"),n("span",{class:"token punctuation"},"("),s(`
        target`),n("span",{class:"token punctuation"},","),s(`
        mutableHandlers
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    proxyMap`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},","),s(" proxy"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` proxy
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"markRaw"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"def"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},","),s(" ReactiveFlags"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"SKIP"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(` value
`),n("span",{class:"token punctuation"},"}"),s(`



`),n("span",{class:"token comment"},"/** shared.js **/"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"def"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("obj"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},","),s(" value")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    Object`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"defineProperty"),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"configurable"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"enumerable"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        value
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])],-1),q=n("h1",null,"\u56DB. \u5DE5\u5177\u65B9\u6CD5\u8865\u5145",-1),Q=n("p",null,[s("Vue \u63D0\u4F9B\u4E86\u4E00\u4E9B\u5DE5\u5177\u65B9\u6CD5\uFF0C\u7528\u4E8E\u8BC6\u522B\u6307\u5B9A\u5BF9\u8C61\u662F\u5426\u88AB\u67D0\u4E2A\u63A5\u53E3\u4EE3\u7406\u8FC7\u3002"),n("br"),s("\u5B83\u4EEC\u7684\u539F\u7406\u548C "),n("code",null,"toRaw"),s(" \u63A5\u53E3\u7684\u903B\u8F91\u7C7B\u4F3C \u2014\u2014 \u67E5\u8BE2\u5BF9\u8C61\u662F\u5426\u5B58\u5728\u7279\u5B9A\u5C5E\u6027\uFF0C\u67E5\u8BE2\u8FC7\u7A0B\u4F1A\u88AB "),n("code",null,"get"),s(" \u62E6\u622A\u5668\u62E6\u622A\uFF0C\u5E76\u8FD4\u56DE\u89C4\u5219\u5339\u914D\u7684\u7ED3\u679C\u3002")],-1),J=n("p",null,"\u5177\u4F53\u5B9E\u73B0\u5982\u4E0B\uFF1A",-1),X=n("pre",{class:"fr w-50 language-js"},[n("code",{class:"language-js","v-pre":"true"},[n("span",{class:"token comment"},"/** baseHandlers.js **/"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"createGetter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("isReadonly "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(" shallow "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("target"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},","),s(" receiver")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

        `),n("span",{class:"token keyword"},"const"),s(" targetFromMap "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s(`isReadonly
            `),n("span",{class:"token operator"},"?"),s(` shallow
                `),n("span",{class:"token operator"},"?"),s(` shallowReadonlyMap
                `),n("span",{class:"token operator"},":"),s(` readonlyMap
            `),n("span",{class:"token operator"},":"),s(` shallow
                `),n("span",{class:"token operator"},"?"),s(` shallowReactiveMap
                `),n("span",{class:"token operator"},":"),s(` proxyMap
        `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("key "),n("span",{class:"token operator"},"==="),s(" ReactiveFlags"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"IS_REACTIVE"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s("  "),n("span",{class:"token comment"},"// \u65B0\u589E\u89C4\u5219"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"!"),s(`isReadonly
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("key "),n("span",{class:"token operator"},"==="),s(" ReactiveFlags"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"IS_READONLY"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s("  "),n("span",{class:"token comment"},"// \u65B0\u589E\u89C4\u5219"),s(`
            `),n("span",{class:"token keyword"},"return"),s(` isReadonly
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("key "),n("span",{class:"token operator"},"==="),s(" ReactiveFlags"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"IS_SHALLOW"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s("  "),n("span",{class:"token comment"},"// \u65B0\u589E\u89C4\u5219"),s(`
            `),n("span",{class:"token keyword"},"return"),s(` shallow
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("key "),n("span",{class:"token operator"},"==="),s(" ReactiveFlags"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"RAW"),s(),n("span",{class:"token operator"},"&&"),s(" targetFromMap"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(" target"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token comment"},"// ..."),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])],-1),Z=n("pre",{class:"language-js"},[n("code",{class:"language-javascript","v-pre":"true"},[n("span",{class:"token comment"},"/** reactive.js **/"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" ReactiveFlags "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token constant"},"RAW"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'__v_raw'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token constant"},"SKIP"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'__v_skip'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token constant"},"IS_REACTIVE"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'__v_isReactive'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// \u65B0\u589E"),s(`
    `),n("span",{class:"token constant"},"IS_READONLY"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'__v_isReadonly'"),n("span",{class:"token punctuation"},","),s("  "),n("span",{class:"token comment"},"// \u65B0\u589E"),s(`
    `),n("span",{class:"token constant"},"IS_SHALLOW"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'__v_isShallow'"),n("span",{class:"token punctuation"},","),s("  "),n("span",{class:"token comment"},"// \u65B0\u589E"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// \u67E5\u8BE2\u662F\u5426\u662F\u7531 shallowReactive \u6216 shallowReadonly \u521B\u5EFA\u7684\u4EE3\u7406\u5BF9\u8C61"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"isShallow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"("),s("value "),n("span",{class:"token operator"},"&&"),s(" value"),n("span",{class:"token punctuation"},"["),s("ReactiveFlags"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"IS_SHALLOW"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u67E5\u8BE2\u662F\u5426\u662F\u7531 readonly \u521B\u5EFA\u7684\u53EA\u8BFB\u4EE3\u7406"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"isReadonly"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`  
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"("),s("value "),n("span",{class:"token operator"},"&&"),s(" value"),n("span",{class:"token punctuation"},"["),s("ReactiveFlags"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"IS_READONLY"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u67E5\u8BE2\u662F\u5426\u662F\u7531 reactive \u521B\u5EFA\u7684\u54CD\u5E94\u5F0F\u4EE3\u7406"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"isReactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`  
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"isReadonly"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s("  "),n("span",{class:"token comment"},"// \u5904\u7406 readonly(reactive(target)) \u573A\u666F"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"isReactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"["),s("ReactiveFlags"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"RAW"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"("),s("value "),n("span",{class:"token operator"},"&&"),s(" value"),n("span",{class:"token punctuation"},"["),s("ReactiveFlags"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"IS_REACTIVE"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u67E5\u8BE2\u662F\u5426\u7531 reactive \u6216 readonly \u521B\u5EFA\u7684\u4EE3\u7406\u5BF9\u8C61"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"isProxy"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"isReactive"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token function"},"isReadonly"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])],-1);function nn(p,l){return o(),e(c,null,[U,T,q,Q,J,X,Z],64)}const w={render:nn};w.__hmrId="C:/Users/vajoy/Documents/devazine/src/pages/vue/markdowns/5-5.md";w.__toc=[{level:"1",content:"&#x56DB;. &#x5DE5;&#x5177;&#x65B9;&#x6CD5;&#x8865;&#x5145;"}];const sn={components:{Md5_1:r,Md5_2:i,Md5_3:d,Md5_4:y,Md5_5:w,CodePen:x},setup(){return{}}};function an(p,l,tn,on,en,cn){const m=t("Md5_1"),u=t("CodePen"),g=t("Md5_2"),f=t("Md5_3"),_=t("Md5_4"),v=t("Md5_5");return o(),e(c,null,[a(m),a(u,{id:"zYRKapK",tab:"html",height:"450"}),a(g),a(u,{id:"bGLwxaY",tab:"html"}),a(f),a(u,{id:"PoQGypa",tab:"html"}),a(_),a(u,{id:"zYRKyvM",tab:"html",height:"450"}),a(v)],64)}var rn=R(sn,[["render",an]]);export{rn as default};
