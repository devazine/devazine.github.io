import{o as d,c as y,F as m,a as e,p as i,f as o,d as s,e as n}from"./vendor.508f1f42.js";import{C as h}from"./CodePen.6e21d7c7.js";import{_ as x}from"./index.3906e20c.js";import"./createjs.df35218d.js";const _=e("h1",null,"\u4E00. \u53EA\u8BFB\u63A5\u53E3",-1),b=e("p",null,[i("Vue \u63D0\u4F9B\u4E86 "),e("code",null,"readonly"),i(" \u63A5\u53E3\uFF0C\u6765\u9632\u6B62\u6307\u5B9A\u5BF9\u8C61\u7684\u5C5E\u6027\u88AB\u4FEE\u6539\uFF1A")],-1);function j(a,t){return d(),y(m,null,[_,b],64)}const c={render:j};c.__hmrId="/Users/lanbangjue/Documents/GitHub/devazine/src/pages/fe/source-analysis/vue/markdowns/5-1.md";c.__toc=[];const H=o(`<p><code>readonly</code> \u7684\u5B9E\u73B0\u540C\u6837\u501F\u52A9\u4E86 <code>Proxy</code> \u7684\u62E6\u622A\u5668 \u2014\u2014 \u88AB <code>get</code> \u62E6\u622A\u65F6\u6B63\u5E38\u8FD4\u56DE\u6570\u636E\uFF0C\u88AB <code>set</code> \u62E6\u622A\u65F6\u7ED5\u8FC7\u6539\u52A8\u884C\u4E3A\u3002</p><p>\u6539\u52A8\u53C2\u8003\u5982\u4E0B\uFF1A</p><pre class="fr w-50 language-js"><code class="language-js"><span class="token comment">/** baseHandlers.js **/</span>

<span class="token comment">// \u65B0\u589E</span>
<span class="token keyword">const</span> readonlyGet <span class="token operator">=</span> <span class="token function">createGetter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u65B0\u589E</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> readonlyHandlers <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">get</span><span class="token operator">:</span> readonlyGet<span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u76F4\u63A5\u8FD4\u56DE true\uFF0C\u4E0D\u505A\u4FEE\u6539\u64CD\u4F5C</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">deleteProperty</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u76F4\u63A5\u8FD4\u56DE true\uFF0C\u4E0D\u505A\u5220\u9664\u64CD\u4F5C</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><pre class="language-js"><code class="language-javascript"><span class="token comment">/** reactive.js **/</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> readonlyHandlers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./baseHandlers.js&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> readonlyMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">readonly</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> existingProxy <span class="token operator">=</span> readonlyMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>existingProxy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> existingProxy
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>
        target<span class="token punctuation">,</span>
        <span class="token comment">// \u548C reactive \u7684\u533A\u522B\u662F\u4F7F\u7528\u4E86\u53E6\u4E00\u4E2A handler</span>
        readonlyHandlers  
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    readonlyMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> proxy<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> proxy
<span class="token punctuation">}</span>
</code></pre><p>\u4F46\u76EE\u524D <code>createGetter</code> \u65B9\u6CD5\u6240\u751F\u6210\u7684 <code>get</code> \u62E6\u622A\u5668\u662F\u9488\u5BF9\u5E38\u89C4\u54CD\u5E94\u5F0F\u5BF9\u8C61\u7684\u3002\u5BF9\u4E8E\u53EA\u8BFB\u5C5E\u6027\u7684\u5BF9\u8C61\u800C\u8A00\uFF0C\u5B83\u4E0D\u9700\u8981\u6267\u884C\u4F9D\u8D56\u8FFD\u8E2A\u64CD\u4F5C\u3002\u6211\u4EEC\u53EF\u4EE5\u4E3A <code>createGetter</code> \u65B9\u6CD5\u65B0\u589E <code>isReadonly</code> \u53C2\u6570\uFF0C\u6765\u5BF9\u53EA\u8BFB\u7684\u903B\u8F91\u8FDB\u884C\u5904\u7406\uFF1A</p><div class="fr w-45"><p>\u5982\u5DE6\u4FA7\u4EE3\u7801\u6240\u793A\uFF0C<code>get</code> \u62E6\u622A\u5668\u5E76\u975E\u53EA\u662F\u5355\u7EAF\u5730\u5224\u65AD\u662F\u5426\u53EA\u8BFB\uFF0C\u7136\u540E\u8FD4\u56DE <code>Reflect.get</code> \u7684\u7ED3\u679C\uFF0C\u800C\u662F\u4F1A\u987A\u7740\u539F\u6709\u54CD\u5E94\u5F0F\u7684\u903B\u8F91\u8D70\u5230\u6700\u540E\uFF0C\u65B9\u4FBF\u5904\u7406\u5BF9\u8C61\u7684\u6DF1\u5C42\u5C5E\u6027\u3002</p><p>\u4E3A\u65B9\u4FBF\u7406\u89E3\uFF0C\u8FD9\u6BB5\u4EE3\u7801\u53EF\u4EE5\u7B80\u5316\u4E3A\uFF1A</p><pre class="language-js"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">createGetter</span><span class="token punctuation">(</span><span class="token parameter">isReadonly <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">const</span> res <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/** \u7ED5\u8FC7\u5176\u5B83\u54CD\u5E94\u5F0F\u7684\u903B\u8F91... **/</span>
    <span class="token comment">/** \u56E0\u4E3A\u53EA\u8BFB\u5C5E\u6027\u7684\u8BBF\u95EE\u4E0D\u9700\u8981\u505A\u4EFB\u4F55\u4F9D\u8D56\u6536\u96C6\u5904\u7406 **/</span> 

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u786E\u4FDD\u6DF1\u5C42\u5C5E\u6027\u90FD\u80FD\u88AB\u5904\u7406</span>
        <span class="token keyword">return</span> isReadonly <span class="token operator">?</span> <span class="token function">readonly</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">reactive</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><pre class="language-js"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">createGetter</span><span class="token punctuation">(</span><span class="token parameter">isReadonly <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// \u65B0\u589E isReadonly \u53C2\u6570</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u65B0\u589E</span>
        <span class="token keyword">const</span> targetFromMap <span class="token operator">=</span> <span class="token punctuation">(</span>isReadonly <span class="token operator">?</span> readonlyMap <span class="token operator">:</span> proxyMap<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u5C06 proxyMap.get(target) \u6539\u4E3A targetFromMap</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> ReactiveFlags<span class="token punctuation">.</span><span class="token constant">RAW</span> <span class="token operator">&amp;&amp;</span> targetFromMap<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            <span class="token keyword">return</span> target<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">const</span> targetIsArray <span class="token operator">=</span> <span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u65B0\u589E !isReadOnly \u5224\u65AD\u6761\u4EF6\uFF0C\u53EA\u8BFB\u5BF9\u8C61\u6267\u884C\u6570\u7EC4\u65B9\u6CD5\u53EF\u653E\u884C\uFF08\u6BD5\u7ADF\u4F1A\u7ED5\u8FC7\u8FFD\u8E2A\uFF09</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isReadonly <span class="token operator">&amp;&amp;</span> targetIsArray <span class="token operator">&amp;&amp;</span> <span class="token function">hasOwn</span><span class="token punctuation">(</span>arrayInstrumentations<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>arrayInstrumentations<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">const</span> res <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isSymbol</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> builtInSymbols<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> res<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// \u65B0\u589E !isReadOnly \u5224\u65AD\u6761\u4EF6\uFF0C\u53EA\u8BFB\u5BF9\u8C61\u65E0\u987B\u8FFD\u8E2A</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isReadonly<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">track</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u65B0\u589E isReadOnly \u5224\u65AD\u3002\u786E\u4FDD\u5B50\u5B59\u5C5E\u6027\u90FD\u80FD\u88AB\u5904\u7406\u5230</span>
            <span class="token keyword">return</span> isReadonly <span class="token operator">?</span> <span class="token function">readonly</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">reactive</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><h1>\u4E8C. \u6D45\u54CD\u5E94\u548C\u6D45\u53EA\u8BFB\u63A5\u53E3</h1><h2>2.1 \u6D45\u54CD\u5E94</h2><p>\u6709\u65F6\u5019\u6211\u4EEC\u53EA\u5E0C\u671B\u5BF9\u88AB\u4EE3\u7406\u5BF9\u8C61\u7684\u6700\u5916\u5C42\u5C5E\u6027\u505A\u54CD\u5E94\u5F0F\u7684\u5904\u7406\uFF0C\u5BF9\u5176\u5D4C\u5957\u5BF9\u8C61\u7684\u5C5E\u6027\u5219\u4E0D\u505A\u5904\u7406\u3002\u8FD9\u79CD\u80FD\u529B\u7B80\u79F0\u4E3A\u6D45\u54CD\u5E94\uFF0C\u5728 Vue \u4E2D\u5BF9\u5E94\u7684\u63A5\u53E3\u662F <code>shallowReactive</code>\uFF1A</p>`,10);function M(a,t){return H}const l={render:M};l.__hmrId="/Users/lanbangjue/Documents/GitHub/devazine/src/pages/fe/source-analysis/vue/markdowns/5-2.md";l.__toc=[];const O=o(`<p><code>shallowReactive</code> \u7684\u5B9E\u73B0\u539F\u7406\u8F83\u7B80\u5355 \u2014\u2014 \u5728 <code>get</code> \u62E6\u622A\u5668\u4E2D\u76F4\u63A5\u8FD4\u56DE\u7ED3\u679C\u5373\u53EF\uFF0C\u4E0D\u5BF9\u5D4C\u5957\u5C5E\u6027\u8FDB\u884C\u904D\u5386\u3002 <br> \u5177\u4F53\u5B9E\u73B0\u5982\u4E0B\uFF1A</p><pre class="fr w-55 language-js"><code class="language-js"><span class="token comment">/** baseHandlers.js - createGetter **/</span>

<span class="token keyword">function</span> <span class="token function">createGetter</span><span class="token punctuation">(</span><span class="token parameter">isReadonly <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> shallow <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// \u65B0\u589E shallow \u53C2\u6570</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> targetFromMap <span class="token operator">=</span> <span class="token punctuation">(</span>
            isReadonly <span class="token operator">?</span> readonlyMap <span class="token operator">:</span>
                <span class="token punctuation">(</span>shallow <span class="token operator">?</span> shallowReactiveMap <span class="token operator">:</span> proxyMap<span class="token punctuation">)</span>  <span class="token comment">// \u65B0\u589E\u5224\u65AD</span>
        <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> ReactiveFlags<span class="token punctuation">.</span><span class="token constant">RAW</span> <span class="token operator">&amp;&amp;</span> targetFromMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> target<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// ...</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>shallow<span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// \u65B0\u589E\uFF0C\u82E5\u4E3A\u6D45\u54CD\u5E94\uFF0C\u76F4\u63A5\u8FD4\u56DE\u5C5E\u6027\u503C</span>
            <span class="token keyword">return</span> res
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// \u6D45\u54CD\u5E94\u4E0D\u4F1A\u8D70\u5230\u8FD9\u91CC\u6765\uFF0C\u5373\u5D4C\u5957\u5C5E\u6027\u4E0D\u4F1A\u88AB\u5904\u7406\u4E3A\u54CD\u5E94\u5F0F</span>
            <span class="token keyword">return</span> isReadonly <span class="token operator">?</span> <span class="token function">readonly</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">reactive</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><pre class="language-js"><code class="language-javascript"><span class="token comment">/** reactive.js **/</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> shallowReactiveHandlers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./baseHandlers.js&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> shallowReactiveMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> existingProxy <span class="token operator">=</span> shallowReactiveMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>existingProxy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> existingProxy
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>
        target<span class="token punctuation">,</span>
        shallowReactiveHandlers  <span class="token comment">// \u6D45\u54CD\u5E94\u4E13\u5C5E handler</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    shallowReactiveMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> proxy<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> proxy
<span class="token punctuation">}</span>


<span class="token comment">/** baseHandlers.js **/</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> shallowReactiveHandlers <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    mutableHandlers<span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">get</span><span class="token operator">:</span> <span class="token function">createGetter</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">set</span><span class="token operator">:</span> <span class="token function">createSetter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><h2>2.2 \u6D45\u53EA\u8BFB</h2><p>\u5982\u679C\u4F60\u5E0C\u671B\u8BA9\u4E00\u4E2A\u5BF9\u8C61\u7684\u6700\u5916\u5C42\u5C5E\u6027\u4E0D\u88AB\u4FEE\u6539\uFF0C\u4F46\u5176\u5D4C\u5957\u5C5E\u6027\u4F9D\u65E7\u4FDD\u6301\u53EF\u8BFB\u5199\u7684\u80FD\u529B\uFF0C\u53EF\u4EE5\u4F7F\u7528 Vue \u7684 <code>shallowReadonly</code> \u6D45\u53EA\u8BFB\u63A5\u53E3\uFF1A</p>`,5);function I(a,t){return O}const u={render:I};u.__hmrId="/Users/lanbangjue/Documents/GitHub/devazine/src/pages/fe/source-analysis/vue/markdowns/5-3.md";u.__toc=[];const P=o(`<p>\u6D45\u53EA\u8BFB\u7684\u5B9E\u73B0\u8F83\u4E3A\u7B80\u5355\uFF0C\u5B83\u7ED3\u5408\u4E86 <code>readonly</code> \u548C <code>shallowReactive</code> \u7684\u903B\u8F91\uFF1A</p><div class="fr w-50"><pre class="language-js"><code class="language-javascript"><span class="token comment">/** baseHandlers.js **/</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> shallowReadonlyHandlers <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    readonlyHandlers<span class="token punctuation">,</span>  <span class="token comment">// \u590D\u7528 readonly \u7684 handler</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">get</span><span class="token operator">:</span> <span class="token function">createGetter</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>  <span class="token comment">// \u4F20\u5165 isReadonly shallow \u53C2\u6570</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><p>\u8FD9\u91CC\u590D\u7528\u4E86 <code>readonly</code> \u7684 handler\uFF0C\u8FD9\u610F\u5473\u7740\u88AB\u4EE3\u7406\u5BF9\u8C61\u5728 <code>set</code> \u548C <code>deleteProperty</code> \u9636\u6BB5\u4E0D\u4F1A\u505A\u4EFB\u4F55\u64CD\u4F5C\u3002\u540C\u65F6\u91CD\u5199\u4E86 <code>get</code> \u62E6\u622A\u5668\uFF0C\u4F20\u5165\u7684 <code>shallow</code> \u53C2\u6570\u53EF\u4EE5\u786E\u4FDD\u5176\u53EA\u5BF9\u6700\u5916\u5C42\u7684\u5C5E\u6027\u505A\u5904\u7406\u3002</p><blockquote><p>\u{1F4A1} <code>shallowReadonly</code> \u63A5\u53E3\u4EE3\u7406\u540E\u7684\u5BF9\u8C61\uFF0C\u4EC5\u662F\u628A\u6700\u5916\u5C42\u7684\u5C5E\u6027\u88AB\u8BBE\u7F6E\u4E3A\u53EA\u8BFB\u800C\u5DF2\uFF0C\u5176\u4E0D\u5177\u5907\u6536\u96C6\u4F9D\u8D56/\u89E6\u53D1\u526F\u4F5C\u7528\u51FD\u6570\u7684\u80FD\u529B\u3002</p></blockquote></div><pre class="language-js"><code class="language-javascript"><span class="token comment">/** reactive.js **/</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> shallowReadonlyHandlers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./baseHandlers.js&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> shallowReadonlyMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">shallowReadonly</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> existingProxy <span class="token operator">=</span> shallowReadonlyMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>existingProxy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> existingProxy
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>
        target<span class="token punctuation">,</span>
        shallowReadonlyHandlers  <span class="token comment">// \u6D45\u53EA\u8BFB\u4E13\u5C5E handler</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    shallowReadonlyMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> proxy<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> proxy
<span class="token punctuation">}</span>
</code></pre><h1>\u4E09. markRaw</h1><p>\u5982\u679C\u6709\u7684\u5BF9\u8C61\u4F60\u5E0C\u671B\u6C38\u8FDC\u4E0D\u8981\u88AB Vue \u54CD\u5E94\u5F0F\u63A5\u53E3\u7684 <code>Proxy</code> \u6240\u4EE3\u7406\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>markRaw</code> \u65B9\u6CD5\u6765\u5BF9\u8BE5\u5BF9\u8C61\u8FDB\u884C\u6807\u8BB0\uFF1A</p>`,5);function C(a,t){return P}const k={render:C};k.__hmrId="/Users/lanbangjue/Documents/GitHub/devazine/src/pages/fe/source-analysis/vue/markdowns/5-4.md";k.__toc=[];const T=o(`<p><code>markRaw</code> \u4F1A\u7ED9\u5BF9\u8C61\u52A0\u4E0A\u4E00\u4E2A\u4E0D\u53EF\u679A\u4E3E\u7684\u79C1\u6709\u5C5E\u6027 <code>__v_skip</code>\uFF0C\u5728\u8C03\u7528\u54CD\u5E94\u5F0F\u63A5\u53E3\u65F6\u5148\u68C0\u67E5\u5BF9\u8C61\u662F\u5426\u5B58\u5728\u8BE5\u5C5E\u6027\uFF0C\u82E5\u6709\u5219\u8FD4\u56DE\u539F\u59CB\u5BF9\u8C61\u3002</p><p>\u5177\u4F53\u5B9E\u73B0\u5982\u4E0B\uFF1A</p><div class="fr w-60"><p>\u6211\u4EEC\u8FD8\u9700\u7ED9 <code>readonly</code>\u3001<code>shallowReactive</code> \u548C <code>shallowReadonly</code> \u90FD\u52A0\u4E0A\u68C0\u67E5 <code>markRaw</code> \u6807\u8BB0\u5C5E\u6027\u7684\u903B\u8F91\uFF0C\u4E0D\u8FC7\u9274\u4E8E\u8FD9\u4E9B\u65B9\u6CD5\u548C <code>reactive</code> \u65B9\u6CD5\u7684\u7ED3\u6784\u975E\u5E38\u76F8\u8FD1\uFF0C\u53EF\u4EE5\u5BF9\u5176\u505A\u8FDB\u4E00\u6B65\u7684\u5C01\u88C5\uFF1A</p><pre class="language-js"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> map</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> existingProxy <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>existingProxy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> existingProxy
    <span class="token punctuation">}</span>

    <span class="token comment">// \u88AB markRaw \u6807\u8BB0\u4E86\u7684\u5BF9\u8C61\u3001\u975E\u5BF9\u8C61\u7C7B\u578B\u6216\u4E0D\u53EF\u6269\u5C55\u6570\u7EC4\u662F\u4E0D\u80FD\u88AB\u4EE3\u7406\u7684\uFF0C\u76F4\u63A5\u8FD4\u56DE\u539F\u59CB\u5185\u5BB9</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">[</span>ReactiveFlags<span class="token punctuation">.</span><span class="token constant">SKIP</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">isObject</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span>Object<span class="token punctuation">.</span><span class="token function">isExtensible</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
</code></pre></div><pre class="language-js"><code class="language-javascript"><span class="token comment">/** reactive.js **/</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> existingProxy <span class="token operator">=</span> proxyMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>existingProxy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> existingProxy
    <span class="token punctuation">}</span>

    <span class="token comment">// \u65B0\u589E\u5224\u65AD\uFF0C\u5B58\u5728 markRaw \u6807\u8BB0\u5C5E\u6027\u5219\u76F4\u63A5\u8FD4\u56DE\u539F\u59CB\u5185\u5BB9</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>target<span class="token punctuation">[</span>ReactiveFlags<span class="token punctuation">.</span><span class="token constant">SKIP</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> target
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>
        target<span class="token punctuation">,</span>
        mutableHandlers
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    proxyMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> proxy<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> proxy
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">markRaw</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">def</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> ReactiveFlags<span class="token punctuation">.</span><span class="token constant">SKIP</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> value
<span class="token punctuation">}</span>



<span class="token comment">/** shared.js **/</span>
<span class="token comment">/** def \u65B9\u6CD5\u7684\u5B9E\u73B0 **/</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">def</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        value
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><p>\u7559\u610F\u5728\u53F3\u4FA7\u7684 <code>createReactiveObject</code> \u5C01\u88C5\u65B9\u6CD5\u91CC\uFF0C\u6211\u4EEC\u4E0D\u4EC5\u5BF9\u8BA9 <code>markRaw</code> \u6807\u8BB0\u4E86\u7684\u5BF9\u8C61\u8DF3\u8FC7\u4E86\u540E\u7EED\u7684 <code>Proxy</code> \u4EE3\u7406\uFF0C\u987A\u4FBF\u8BA9\u975E\u5BF9\u8C61\u7C7B\u578B\u3001\u4E0D\u53EF\u6269\u5C55\u6570\u7EC4\u4E5F\u90FD\u8DF3\u8FC7\u4E86\u4EE3\u7406\uFF08\u56E0\u4E3A\u5B83\u4EEC\u90FD\u4E0D\u662F\u54CD\u5E94\u5F0F\u63A5\u53E3\u7684\u53D7\u7406\u7C7B\u578B\uFF09\u3002</p><h1>\u56DB. \u5DE5\u5177\u65B9\u6CD5\u8865\u5145</h1><p>Vue \u63D0\u4F9B\u4E86\u4E00\u4E9B\u5DE5\u5177\u65B9\u6CD5\uFF0C\u7528\u4E8E\u8BC6\u522B\u6307\u5B9A\u5BF9\u8C61\u662F\u5426\u88AB\u67D0\u4E2A\u63A5\u53E3\u4EE3\u7406\u8FC7\u3002<br>\u5B83\u4EEC\u7684\u539F\u7406\u548C <code>toRaw</code> \u63A5\u53E3\u7684\u903B\u8F91\u7C7B\u4F3C \u2014\u2014 \u67E5\u8BE2\u5BF9\u8C61\u662F\u5426\u5B58\u5728\u7279\u5B9A\u5C5E\u6027\uFF0C\u67E5\u8BE2\u8FC7\u7A0B\u4F1A\u88AB <code>get</code> \u62E6\u622A\u5668\u62E6\u622A\uFF0C\u5E76\u8FD4\u56DE\u89C4\u5219\u5339\u914D\u7684\u7ED3\u679C\u3002</p><p>\u5177\u4F53\u5B9E\u73B0\u5982\u4E0B\uFF1A</p><pre class="fr w-50 language-js"><code class="language-js"><span class="token comment">/** baseHandlers.js **/</span>

<span class="token keyword">function</span> <span class="token function">createGetter</span><span class="token punctuation">(</span><span class="token parameter">isReadonly <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> shallow <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">const</span> targetFromMap <span class="token operator">=</span> <span class="token punctuation">(</span>isReadonly
            <span class="token operator">?</span> shallow
                <span class="token operator">?</span> shallowReadonlyMap
                <span class="token operator">:</span> readonlyMap
            <span class="token operator">:</span> shallow
                <span class="token operator">?</span> shallowReactiveMap
                <span class="token operator">:</span> proxyMap
        <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> ReactiveFlags<span class="token punctuation">.</span><span class="token constant">IS_REACTIVE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// \u65B0\u589E\u89C4\u5219</span>
            <span class="token keyword">return</span> <span class="token operator">!</span>isReadonly
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> ReactiveFlags<span class="token punctuation">.</span><span class="token constant">IS_READONLY</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// \u65B0\u589E\u89C4\u5219</span>
            <span class="token keyword">return</span> isReadonly
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> ReactiveFlags<span class="token punctuation">.</span><span class="token constant">IS_SHALLOW</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// \u65B0\u589E\u89C4\u5219</span>
            <span class="token keyword">return</span> shallow
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> ReactiveFlags<span class="token punctuation">.</span><span class="token constant">RAW</span> <span class="token operator">&amp;&amp;</span> targetFromMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> target<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><pre class="language-js"><code class="language-javascript"><span class="token comment">/** reactive.js **/</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> ReactiveFlags <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token constant">RAW</span><span class="token operator">:</span> <span class="token string">&#39;__v_raw&#39;</span><span class="token punctuation">,</span>
    <span class="token constant">SKIP</span><span class="token operator">:</span> <span class="token string">&#39;__v_skip&#39;</span><span class="token punctuation">,</span>
    <span class="token constant">IS_REACTIVE</span><span class="token operator">:</span> <span class="token string">&#39;__v_isReactive&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u65B0\u589E</span>
    <span class="token constant">IS_READONLY</span><span class="token operator">:</span> <span class="token string">&#39;__v_isReadonly&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// \u65B0\u589E</span>
    <span class="token constant">IS_SHALLOW</span><span class="token operator">:</span> <span class="token string">&#39;__v_isShallow&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// \u65B0\u589E</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u67E5\u8BE2\u662F\u5426\u662F\u7531 shallowReactive \u6216 shallowReadonly \u521B\u5EFA\u7684\u4EE3\u7406\u5BF9\u8C61</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isShallow</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">(</span>value <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">[</span>ReactiveFlags<span class="token punctuation">.</span><span class="token constant">IS_SHALLOW</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u67E5\u8BE2\u662F\u5426\u662F\u7531 readonly \u521B\u5EFA\u7684\u53EA\u8BFB\u4EE3\u7406</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isReadonly</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">(</span>value <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">[</span>ReactiveFlags<span class="token punctuation">.</span><span class="token constant">IS_READONLY</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u67E5\u8BE2\u662F\u5426\u662F\u7531 reactive \u521B\u5EFA\u7684\u54CD\u5E94\u5F0F\u4EE3\u7406</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isReactive</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isReadonly</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// \u5904\u7406 readonly(reactive(target)) \u573A\u666F</span>
        <span class="token keyword">return</span> <span class="token function">isReactive</span><span class="token punctuation">(</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">[</span>ReactiveFlags<span class="token punctuation">.</span><span class="token constant">RAW</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">(</span>value <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">[</span>ReactiveFlags<span class="token punctuation">.</span><span class="token constant">IS_REACTIVE</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u67E5\u8BE2\u662F\u5426\u7531 reactive \u6216 readonly \u521B\u5EFA\u7684\u4EE3\u7406\u5BF9\u8C61</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isProxy</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">isReactive</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isReadonly</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><h1>\u4E94. \u4EE3\u7406\u96C6\u5408\u7C7B\u578B</h1><p>\u96C6\u5408\u7C7B\u578B\u5305\u62EC\u4E86 <code>Set</code>\u3001<code>Map</code>\u3001<code>WeakSet</code> \u548C <code>WeakMap</code>\uFF0C\u5B83\u4EEC\u548C\u666E\u901A\u7684\u5BF9\u8C61\u7C7B\u578B\u5F88\u4E0D\u4E00\u6837 \u2014\u2014 \u9664\u4E86\u83B7\u53D6\u96C6\u5408\u5143\u7D20\u7684\u6570\u91CF\u4F1A\u76F4\u63A5\u8BBF\u95EE\u5176 <code>size</code> \u5C5E\u6027\uFF0C\u5176\u5B83\u8BBF\u95EE/\u4FEE\u6539\u96C6\u5408\u6570\u636E\u7684\u5F62\u5F0F\u90FD\u662F\u901A\u8FC7\u8C03\u7528\u539F\u751F\u7684\u63A5\u53E3\u65B9\u6CD5\u6765\u5B9E\u73B0\u3002</p><p>\u4E3A\u4E86\u533A\u522B\u4E8E\u5904\u7406\u5E38\u89C4\u5BF9\u8C61\u7684 <code>baseHandler.js</code>\uFF0CVue \u4E13\u95E8\u5C01\u88C5\u4E86\u4E00\u4E2A <code>collectionHandlers.js</code> \u6765\u5904\u7406\u96C6\u5408\u7C7B\u578B\u7684\u54CD\u5E94\u5F0F\u903B\u8F91\u3002</p><p>\u6211\u4EEC\u5148\u770B <code>reactive.js</code> \u6A21\u5757\u7684\u6539\u52A8\uFF1A</p><div class="fr w-45"><pre class="language-js"><code class="language-javascript"><span class="token comment">/** reactive.js - \u7B2C\u4E8C\u90E8\u5206 **/</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//  \u65B0\u589E mutableCollectionHandlers \u53C2\u6570 </span>
    <span class="token keyword">return</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> mutableHandlers<span class="token punctuation">,</span> 
        mutableCollectionHandlers<span class="token punctuation">,</span> proxyMap<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">readonly</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//  \u65B0\u589E readonlyCollectionHandlers \u53C2\u6570 </span>
    <span class="token keyword">return</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> readonlyHandlers<span class="token punctuation">,</span> 
        readonlyCollectionHandlers<span class="token punctuation">,</span> readonlyMap<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//  \u65B0\u589E shallowCollectionHandlers \u53C2\u6570 </span>
    <span class="token keyword">return</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> shallowReactiveHandlers<span class="token punctuation">,</span> 
        shallowCollectionHandlers<span class="token punctuation">,</span> shallowReactiveMap<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">shallowReadonly</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//  \u65B0\u589E shallowReadonlyCollectionHandlers \u53C2\u6570 </span>
    <span class="token keyword">return</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> shallowReadonlyHandlers<span class="token punctuation">,</span> 
        shallowReadonlyCollectionHandlers<span class="token punctuation">,</span> shallowReadonlyMap<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><p>\u5176\u4E2D <code>toRawType</code> \u65B9\u6CD5\u7684\u5B9E\u73B0\u4E3A\uFF1A</p><pre class="language-js"><code class="language-javascript"><span class="token comment">/** shared.js **/</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">toRawType</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4ECE\u7C7B\u4F3C &quot;[object RawType]&quot; \u7684\u5B57\u7B26\u4E32\u4E2D\u62BD\u53D6\u51FA &quot;RawType&quot;</span>
    <span class="token keyword">return</span> <span class="token function">toTypeString</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><pre class="language-js"><code class="language-javascript"><span class="token comment">/** reactive.js - \u7B2C\u4E00\u90E8\u5206 **/</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
    mutableHandlers<span class="token punctuation">,</span> readonlyHandlers<span class="token punctuation">,</span>
    shallowReactiveHandlers<span class="token punctuation">,</span> shallowReadonlyHandlers
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./baseHandlers.js&#39;</span>

<span class="token comment">// \u65B0\u589E</span>
<span class="token keyword">const</span> TargetType <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token constant">COMMON</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token constant">COLLECTION</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u65B0\u589E</span>
<span class="token keyword">function</span> <span class="token function">targetTypeMap</span><span class="token punctuation">(</span><span class="token parameter">rawType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>rawType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&#39;Object&#39;</span><span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token string">&#39;Array&#39;</span><span class="token operator">:</span>
            <span class="token keyword">return</span> TargetType<span class="token punctuation">.</span><span class="token constant">COMMON</span>
        <span class="token keyword">case</span> <span class="token string">&#39;Map&#39;</span><span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token string">&#39;Set&#39;</span><span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token string">&#39;WeakMap&#39;</span><span class="token operator">:</span>
        <span class="token keyword">case</span> <span class="token string">&#39;WeakSet&#39;</span><span class="token operator">:</span>
            <span class="token keyword">return</span> TargetType<span class="token punctuation">.</span><span class="token constant">COLLECTION</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u65B0\u589E collectionHandlers \u53C2\u6570</span>
<span class="token keyword">function</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> handlers<span class="token punctuation">,</span> collectionHandlers<span class="token punctuation">,</span> map</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token comment">// ...</span>

    <span class="token comment">// \u65B0\u589E\u3002toRawType \u53EF\u83B7\u53D6\u5BF9\u8C61\u7C7B\u578B\u540D\u79F0\uFF0C\u5B9E\u73B0\u89C1\u53F3\u65B9</span>
    <span class="token keyword">const</span> targetType <span class="token operator">=</span> <span class="token function">targetTypeMap</span><span class="token punctuation">(</span><span class="token function">toRawType</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>
        target<span class="token punctuation">,</span>
        <span class="token comment">// \u96C6\u5408\u7C7B\u578B\u4F7F\u7528\u4E13\u5C5E\u7684 handlers</span>
        targetType <span class="token operator">===</span> TargetType<span class="token punctuation">.</span><span class="token constant">COLLECTION</span> <span class="token operator">?</span> collectionHandlers <span class="token operator">:</span> handlers 
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> proxy<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> proxy
<span class="token punctuation">}</span>
</code></pre><p>\u6211\u4EEC\u8FD8\u9700\u8981\u5B9E\u73B0 <code>collectionHandlers.js</code> \u6A21\u5757\u4E2D\u7684 <code>mutableHandlers</code>\u3001<code>readonlyHandlers</code>\u3001<code>shallowReactiveHandlers</code> \u548C <code>shallowReadonlyHandlers</code> \u63A5\u53E3\u3002</p><p>\u9274\u4E8E\u96C6\u5408\u7C7B\u578B\u90FD\u662F\u9760\u8C03\u7528\u539F\u751F\u65B9\u6CD5\uFF08\u6216\u8005\u67E5\u8BE2 <code>size</code> \u5C5E\u6027\uFF09\u6765\u8BBF\u95EE\u548C\u4FEE\u6539\u6570\u636E\u7684\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5728\u8FD9\u56DB\u4E2A handler \u4E2D\u914D\u7F6E <code>get</code> \u62E6\u622A\u5668\u5373\u53EF\u3002</p><p><code>collectionHandlers.js</code> \u6A21\u5757\u7684\u5B9E\u73B0\u53C2\u8003\uFF1A</p><div class="fr w-45"><p><code>createInstrumentationGetter</code> \u65B9\u6CD5\u4F1A\u5728\u96C6\u5408\u7C7B\u578B\u8BBF\u95EE <code>size</code> \u5C5E\u6027\uFF0C\u6216\u8C03\u7528 <code>get</code>\u3001<code>has</code>\u3001<code>forEach</code> \u3001\u679A\u4E3E\uFF08<code>keys</code>\u3001<code>values</code>\u3001<code>entries</code>\uFF09\u65B9\u6CD5\u65F6\uFF0C\u5BF9\u4F9D\u8D56\u8FDB\u884C\u6536\u96C6\uFF08\u6267\u884C <code>track</code>\uFF09\uFF1B<br>\u5728\u8C03\u7528 <code>add</code>\u3001<code>set</code>\u3001<code>delete</code>\u3001<code>clear</code> \u65B9\u6CD5\u65F6\uFF0C\u89E6\u53D1\u76F8\u5E94\u7684\u526F\u4F5C\u7528\u51FD\u6570\uFF08\u6267\u884C <code>trigger</code>\uFF09\u3002</p><p>\u9274\u4E8E <code>createInstrumentationGetter</code> \u7684\u5B9E\u73B0\u5F88\u63A5\u8FD1\u4E8E\u6211\u4EEC\u4E4B\u524D\u5BF9\u6570\u7EC4\u6808\u65B9\u6CD5\uFF08\u4F8B\u5982 <code>push</code>\uFF09\u7684\u5904\u7406\uFF0C\u672C\u6587\u4E0D\u518D\u8D58\u8FF0\u3002</p><p><code>collectionHandlers.js</code> \u6A21\u5757\u5B8C\u6574\u7684\u4EE3\u7801\u53EF\u4EE5<a href="https://github.com/devazine/vue-analysis/blob/main/3-reactive/4/collectionHandlers.js">\u70B9\u51FB\u8FD9\u91CC</a>\u83B7\u53D6\u3002</p></div><pre class="language-js"><code class="language-javascript"><span class="token comment">/** collectionHandlers.js **/</span>

<span class="token keyword">function</span> <span class="token function">createInstrumentationGetter</span><span class="token punctuation">(</span><span class="token parameter">isReadonly<span class="token punctuation">,</span> shallow</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// TODO...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> mutableCollectionHandlers <span class="token operator">=</span> <span class="token punctuation">{</span>  <span class="token comment">// \u54CD\u5E94\u5F0F handler</span>
    <span class="token literal-property property">get</span><span class="token operator">:</span> <span class="token function">createInstrumentationGetter</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> shallowCollectionHandlers <span class="token operator">=</span> <span class="token punctuation">{</span>  <span class="token comment">// \u6D45\u54CD\u5E94 handler</span>
    <span class="token literal-property property">get</span><span class="token operator">:</span> <span class="token function">createInstrumentationGetter</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> readonlyCollectionHandlers <span class="token operator">=</span> <span class="token punctuation">{</span>  <span class="token comment">// \u53EA\u8BFB handler</span>
    <span class="token literal-property property">get</span><span class="token operator">:</span> <span class="token function">createInstrumentationGetter</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> shallowReadonlyCollectionHandlers <span class="token operator">=</span> <span class="token punctuation">{</span>  <span class="token comment">// \u6D45\u53EA\u8BFB handler</span>
    <span class="token literal-property property">get</span><span class="token operator">:</span> <span class="token function">createInstrumentationGetter</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre>`,21);function S(a,t){return T}const r={render:S};r.__hmrId="/Users/lanbangjue/Documents/GitHub/devazine/src/pages/fe/source-analysis/vue/markdowns/5-5.md";r.__toc=[];const G={components:{Md5_1:c,Md5_2:l,Md5_3:u,Md5_4:k,Md5_5:r,CodePen:h},setup(){return{}}};function F(a,t,A,V,L,$){const w=s("Md5_1"),p=s("CodePen"),g=s("Md5_2"),f=s("Md5_3"),v=s("Md5_4"),R=s("Md5_5");return d(),y(m,null,[n(w),n(p,{id:"zYRKapK",tab:"html",height:"450"}),n(g),n(p,{id:"bGLwxaY",tab:"html"}),n(f),n(p,{id:"PoQGypa",tab:"html"}),n(v),n(p,{id:"zYRKyvM",tab:"html",height:"450"}),n(R)],64)}var D=x(G,[["render",F]]);export{D as default};
