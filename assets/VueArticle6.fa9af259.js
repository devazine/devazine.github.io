import{f as c,d as s,o as k,c as i,e as n,F as r}from"./vendor.508f1f42.js";import{C as d}from"./CodePen.6e21d7c7.js";import{_ as f}from"./index.3906e20c.js";import"./createjs.df35218d.js";const m=c(`<h1>\u4E00. ref \u7684\u57FA\u7840\u5B9E\u73B0</h1><p>\u5728\u524D\u4E09\u7AE0\u6211\u4EEC\u4ECB\u7ECD\u4E86\u5F15\u7528\u7C7B\u578B\u7684\u54CD\u5E94\u5F0F\u5B9E\u73B0\uFF0C\u5176\u5E95\u5C42\u91C7\u7528\u4E86 <code>Proxy</code> \u53BB\u62E6\u622A\u7528\u6237\u5BF9\u5404\u5C5E\u6027\u7684\u64CD\u4F5C\u3002 <br> \u7136\u800C <code>Proxy</code> \u63A5\u53E3\u53EA\u80FD\u4EE3\u7406\u5F15\u7528\u7C7B\u578B\uFF0C\u5982\u679C\u5E0C\u671B\u5BF9\u4E00\u4E2A\u539F\u59CB\u7C7B\u578B\u5B9E\u73B0\u54CD\u5E94\u5F0F\u64CD\u4F5C\uFF0C\u53EA\u80FD\u53E6\u8F9F\u8E4A\u5F84\u3002\u5176\u4E2D\u4E00\u4E2A\u53D6\u5DE7\u7684\u529E\u6CD5\uFF0C\u662F\u5C06\u539F\u59CB\u7C7B\u578B\u5305\u88F9\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u518D\u901A\u8FC7 <code>getter</code> \u548C <code>setter</code> \u7684\u65B9\u6CD5\u5BF9\u5176\u64CD\u4F5C\u8FDB\u884C\u62E6\u622A\uFF1A</p><div class="fr w-55"><p>\u8FD9\u91CC\u6CA1\u6709\u4F7F\u7528 <code>Proxy</code> \u7684\u539F\u56E0\u4E5F\u5F88\u7B80\u5355 \u2014\u2014 \u539F\u59CB\u7C7B\u578B\u4E0D\u50CF\u5F15\u7528\u7C7B\u578B\u90A3\u6837\u9700\u8981\u64CD\u4F5C\u5404\u79CD\u5C5E\u6027\uFF0C\u5E38\u89C4\u53EA\u4F1A\u8BBF\u95EE/\u8BBE\u7F6E\u5176\u672C\u8EAB\u3002</p><p>\u6211\u4EEC\u8FD8\u9700\u8981\u5728 <code>getter</code> \u8BBF\u95EE\u5668\u4E2D\u5BF9\u539F\u59CB\u7C7B\u578B\u8FDB\u884C\u4F9D\u8D56\u6536\u96C6\uFF0C\u5E76\u5728 <code>setter</code> \u8BBE\u7F6E\u5176\u4E2D\u89E6\u53D1\u6536\u96C6\u5230\u7684\u526F\u4F5C\u7528\u51FD\u6570\u3002\u4E0D\u8FC7\u8FD9\u5757\u7684\u5904\u7406\uFF0C\u53EA\u9700\u8981\u590D\u7528\u524D\u51E0\u7AE0\u5DF2\u7ECF\u5C01\u88C5\u597D\u7684 <code>trackEffects</code> \u548C <code>triggerEffects</code> \u65B9\u6CD5\u5373\u53EF\u3002</p></div><pre class="language-js"><code class="language-javascript"><span class="token keyword">const</span> <span class="token function-variable function">ref</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">rawValue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// \u62E6\u622A\u8BBF\u95EE\u64CD\u4F5C</span>
      <span class="token comment">// TODO: track</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8FD9\u91CC\u9700\u8981\u8FFD\u8E2A\u4F9D\u8D56...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> rawValue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">set</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// \u62E6\u622A\u8BBE\u7F6E\u64CD\u4F5C</span>
      <span class="token comment">// TODO: trigger</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8FD9\u91CC\u9700\u8981\u89E6\u53D1\u526F\u4F5C\u7528\u51FD\u6570...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      rawValue <span class="token operator">=</span> newVal<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;Hello!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
msg<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;Bye~!&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>\u6211\u4EEC\u8FDB\u4E00\u6B65\u5C01\u88C5 <code>ref</code> \u63A5\u53E3\uFF0C\u8BA9\u5176\u8FD4\u56DE\u4E00\u4E2A\u7C7B\u7684\u793A\u4F8B\uFF0C\u65B9\u4FBF\u5B9A\u4E49\u4E00\u4E9B\u5185\u90E8\u5C5E\u6027\u3002<br>\u7136\u540E\u5F15\u5165 <code>trackEffects</code> \u548C <code>triggerEffects</code> \u65B9\u6CD5\u6765\u8FFD\u8E2A\u548C\u89E6\u53D1\u4F9D\u8D56\uFF1A</p><div class="fr w-45"><p>\u4E3A\u4E86\u907F\u514D\u91CD\u590D\u5904\u7406\u4F20\u5165\u7684\u539F\u59CB\u7C7B\u578B\uFF0C\u53EF\u4EE5\u5728 <code>ref</code> \u5165\u53E3\u5904\u65B0\u589E\u5224\u65AD\uFF1A</p><pre class="language-js"><code class="language-javascript"><span class="token comment">/** ref.js **/</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isRef</span><span class="token punctuation">(</span><span class="token parameter">r</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// \u65B0\u589E\u65B9\u6CD5</span>
    <span class="token keyword">return</span> <span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">(</span>r <span class="token operator">&amp;&amp;</span> r<span class="token punctuation">.</span>__v_isRef <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isRef</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// \u65B0\u589E\u5224\u65AD</span>
        <span class="token keyword">return</span> value
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RefImpl</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">RefImpl</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>__v_isRef <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>  <span class="token comment">// \u65B0\u589E\u6807\u8BB0</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u7565...</span>
<span class="token punctuation">}</span>
</code></pre><p>\u5982\u4E0A\uFF0C\u6211\u4EEC\u4E3A <code>ref</code> \u5B9E\u4F8B\uFF08\u51C6\u786E\u7684\u8BF4\uFF0C\u662F <code>RefImpl</code> \u7684\u5B9E\u4F8B\uFF09\u65B0\u589E\u4E86\u4E00\u4E2A <code>__v_isRef</code> \u6807\u8BB0\uFF0C\u5728 <code>ref</code> \u521D\u59CB\u5316\u65F6\u5148\u5224\u65AD\u4F20\u5165\u503C\u662F\u5426\u542B\u6709\u8BE5\u6807\u8BB0\uFF0C\u82E5\u6709\u5219\u8868\u793A\u4F20\u5165\u503C\u5DF2\u662F <code>ref</code> \u5B9E\u4F8B\uFF0C\u76F4\u63A5\u8FD4\u56DE\u5373\u53EF\u3002</p><p>\u81F3\u6B64\u6211\u4EEC\u4FBF\u5B9E\u73B0\u4E86\u4E00\u4E2A\u6700\u57FA\u7840\u7684\u539F\u59CB\u7C7B\u578B\u54CD\u5E94\u5F0F\u5904\u7406\u63A5\u53E3\uFF0C\u8BFB\u8005\u53EF\u4EE5<a href="https://github.com/devazine/vue-analysis/tree/main/4-ref">\u70B9\u51FB\u8FD9\u91CC</a>\u83B7\u53D6\u793A\u4F8B\u4EE3\u7801\u3002</p></div><pre class="language-js"><code class="language-javascript"><span class="token comment">/** ref.js **/</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
    trackEffects<span class="token punctuation">,</span>
    triggerEffects
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./effect.js&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> hasChanged <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./shared.js&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RefImpl</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">RefImpl</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">trackRefValue</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u4F9D\u8D56\u6536\u96C6</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">set</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasChanged</span><span class="token punctuation">(</span>newVal<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_value <span class="token operator">=</span> newVal<span class="token punctuation">;</span>
            <span class="token function">triggerRefValue</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u89E6\u53D1\u6536\u96C6\u5230\u7684\u526F\u4F5C\u7528\u51FD\u6570</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">trackRefValue</span><span class="token punctuation">(</span><span class="token parameter">ref</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">trackEffects</span><span class="token punctuation">(</span>ref<span class="token punctuation">.</span>dep <span class="token operator">||</span> <span class="token punctuation">(</span>ref<span class="token punctuation">.</span>dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">triggerRefValue</span><span class="token punctuation">(</span><span class="token parameter">ref</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">triggerEffects</span><span class="token punctuation">(</span>ref<span class="token punctuation">.</span>dep<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><h1>\u4E8C. \u517C\u5BB9\u975E\u539F\u59CB\u7C7B\u578B</h1><h2>2.1 RefImpl \u4E2D\u7684\u517C\u5BB9\u5904\u7406</h2><p>\u5728\u524D\u9762\u6211\u4EEC\u53EA\u8003\u8651\u4E86\u5BF9\u539F\u59CB\u7C7B\u578B\u7684\u5904\u7406\uFF0C\u5982\u679C\u7528\u6237\u4F20\u5165\u4E86\u4E00\u4E2A\u5F15\u7528\u7C7B\u578B\uFF0C\u8FD8\u9700\u8981\u5728 <code>RefImpl</code> \u4E2D\u5BF9\u5176\u8FDB\u884C\u517C\u5BB9\u5904\u7406\uFF0C\u5C06\u5B9E\u4F8B\u5C5E\u6027 <code>value</code> \u6307\u5411\u7ECF\u7531 <code>reactive</code> \u63A5\u53E3\u5904\u7406\u8FC7\u7684\u4EE3\u7406\u5BF9\u8C61\u3002</p><p>\u6539\u52A8\u5982\u4E0B\uFF1A</p><div class="fr w-40"><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u5728\u6784\u9020\u51FD\u6570\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86 <code>toRaw</code> \u63A5\u53E3\u6765\u83B7\u53D6\u4F20\u5165\u53C2\u6570\u7684\u539F\u59CB\u503C\uFF0C\u5E76\u5B58\u5165 <code>_rawValue</code> \u5C5E\u6027\u4E2D\uFF0C\u65B9\u4FBF\u5728 <code>setter</code> \u4E2D\u5BF9\u6BD4\u65B0\u65E7\u7684\u503C\u662F\u5426\u4E00\u81F4\u3002<br>\u8FD9\u6837\u5373\u4F7F\u7528\u6237\u4F20\u5165 <code>ref</code> \u7684\u662F\u4E00\u4E2A\u88AB <code>reactive</code> \u4EE3\u7406\u8FC7\u7684\u5BF9\u8C61\uFF0C\u4E5F\u4E0D\u4F1A\u6709\u95EE\u9898\u3002</p><p>\u53E6\u5916 <code>this._value</code> \u90FD\u6307\u5411\u4E86\u7531 <code>toReactive</code> \u5904\u7406\u8FC7\u7684\u503C\uFF0C\u6B64\u4E3E\u4E5F\u662F\u4E3A\u4E86\u517C\u5BB9\u7528\u6237\u4F20\u5165\u5BF9\u8C61\uFF0C\u751A\u81F3\u662F\u88AB <code>reactive</code> \u63A5\u53E3\u4EE3\u7406\u8FC7\u7684\u5BF9\u8C61\u7684\u573A\u666F\u3002</p></div><pre class="language-js"><code class="language-javascript"><span class="token comment">/** ref.js **/</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> toRaw<span class="token punctuation">,</span> toReactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./reactive.js&#39;</span>  <span class="token comment">// \u65B0\u589E</span>

<span class="token keyword">class</span> <span class="token class-name">RefImpl</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>__v_isRef <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_rawValue <span class="token operator">=</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u65B0\u589E _rawValue \u5C5E\u6027\u7528\u4E8E\u4FDD\u7BA1\u539F\u59CB\u503C</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_value <span class="token operator">=</span> <span class="token function">toReactive</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u8C03\u7528 toReactive</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">trackRefValue</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">set</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        newVal <span class="token operator">=</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u65B0\u589E</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasChanged</span><span class="token punctuation">(</span>newVal<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_rawValue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// \u4FEE\u6539 this._value \u4E3A this._rawValue</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_rawValue <span class="token operator">=</span> newVal<span class="token punctuation">;</span>  <span class="token comment">// \u4FEE\u6539 this._value \u4E3A this._rawValue</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_value <span class="token operator">=</span> <span class="token function">toReactive</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u65B0\u589E</span>
            <span class="token function">triggerRefValue</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><p>\u73B0\u5728\u6211\u4EEC\u8BD5\u8BD5\u5F80 <code>ref</code> \u91CC\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61/\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u4F1A\u770B\u5230\u5B83\u4EEC\u90FD\u80FD\u6309\u9884\u671F\u6B63\u5E38\u6267\u884C\uFF1A</p>`,14);function w(t,o){return m}const a={render:w};a.__hmrId="/Users/lanbangjue/Documents/GitHub/devazine/src/pages/fe/source-analysis/vue/markdowns/6-1.md";a.__toc=[];const v=c(`<h2>2.2 trackRefValue \u4E2D\u7684\u517C\u5BB9\u5904\u7406</h2><p>\u4ECE\u4E0A\u9762\u7684\u793A\u4F8B\u53EF\u4EE5\u77E5\u9053\uFF0C\u5982\u679C\u76F4\u63A5\u91CD\u7F6E <code>ref</code> \u5B9E\u4F8B\u7684 <code>value</code> \u65B9\u6CD5\uFF0C\u662F\u53EF\u4EE5\u6B63\u5E38\u6267\u884C\u7684\u3002<br> \u4F46\u5982\u679C\u7528\u6237\u4F20\u5165\u4E86\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4E14\u8981\u4FEE\u6539 <code>value</code> \u6307\u5411\u7684\u54CD\u5E94\u5F0F\u5BF9\u8C61\u5C5E\u6027\uFF0C\u4F1A\u51FA\u73B0\u62A5\u9519\uFF1A</p><div class="fr w-50"><p>\u8FD9\u662F\u56E0\u4E3A\u6211\u4EEC\u5DF2\u7ECF\u628A\u4F20\u5165\u5BF9\u8C61\u4EA4\u7ED9 <code>toReactive</code> \u63A5\u53E3\u5904\u7406\uFF0C\u5B83\u4F1A\u7ECF\u7531 <code>reactive</code> \u63A5\u53E3\u53BB\u6536\u96C6\u4F9D\u8D56\u548C\u89E6\u53D1\u526F\u4F5C\u7528\u51FD\u6570\uFF0C\u5F53\u6267\u884C\u5DE6\u4FA7\u4EE3\u7801\u7684 <code>msg.value.info</code> \u65F6\uFF0C\u4F1A\u5148\u89E6\u53D1 <code>info</code> \u5C5E\u6027\u6536\u96C6\u5230\u7684\u526F\u4F5C\u7528\u51FD\u6570\uFF0C\u5E76\u91CD\u7F6E <code>activeEffect</code>\uFF1A</p><pre class="language-js"><code class="language-javascript"><span class="token comment">/** effect.js **/</span>

<span class="token keyword">export</span> <span class="token keyword">let</span> activeEffect<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ReactiveEffect</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7565...</span>
    <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u7565...</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            activeEffect <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>parent<span class="token punctuation">;</span>  <span class="token comment">// \u91CD\u7F6E</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><p>\u7D27\u63A5\u7740 <code>msg.value</code> \u88AB\u8BBF\u95EE\u65F6\u4F1A\u89E6\u53D1 <code>trackEffects</code> \u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u5185\u627E\u4E0D\u5230 <code>activeEffect.deps</code> \u8FDB\u800C\u62A5\u9519\u3002</p></div><pre class="language-html"><code class="language-javascript"><span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;module&quot;</span><span class="token operator">&gt;</span>

  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./ref.js&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> effect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./effect.js&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token string">&#39;Hello!&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    div<span class="token punctuation">.</span>innerText <span class="token operator">=</span> msg<span class="token punctuation">.</span>value<span class="token punctuation">.</span>info<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u76F4\u63A5\u4FEE\u6539\u54CD\u5E94\u5F0F\u5BF9\u8C61\u7684 info \u5C5E\u6027\uFF0C</span>
    <span class="token comment">// \u4F1A\u62A5\u9519 Cannot read properties of undefined (reading &#39;deps&#39;)</span>
    msg<span class="token punctuation">.</span>value<span class="token punctuation">.</span>info <span class="token operator">=</span> <span class="token string">&#39;Bye~&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><p>\u56E0\u6B64\u6211\u4EEC\u9700\u8981\u5728\u6267\u884C <code>trackEffects</code> \u65B9\u6CD5\u524D\uFF0C\u5148\u5224\u65AD <code>reactive</code> \u662F\u5426\u5DF2\u7ECF\u5148\u5BF9\u4F20\u5165\u5BF9\u8C61\u505A\u4E86\u54CD\u5E94\u5904\u7406\uFF0C\u5982\u679C\u662F\uFF0C\u5219\u4E0D\u518D\u591A\u6B64\u4E00\u4E3E\u3002 <br>\u6539\u52A8\u5982\u4E0B\uFF1A</p><div class="fr w-45"><blockquote><p>\u5176\u4E2D\u5224\u65AD <code>shouldTrack</code> \u662F\u4E3A\u4E86\u907F\u514D\u6570\u7EC4\u6808\u65B9\u6CD5\u5FAA\u73AF\u9012\u5F52\u7684\u95EE\u9898\uFF0C\u5177\u4F53\u53EF\u4EE5\u56DE\u987E<a href="https://devazine.github.io/#/source-analysis/vue/3/">\u300Areactive \u7684\u5B9E\u73B0\uFF08\u4E0A\uFF09\u300B</a>3.3.2 \u5C0F\u8282\u7684\u5185\u5BB9\u3002</p></blockquote></div><pre class="language-js"><code class="language-javascript"><span class="token comment">/** ref.js **/</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
    shouldTrack<span class="token punctuation">,</span>  <span class="token comment">// \u65B0\u589E</span>
    activeEffect<span class="token punctuation">,</span>  <span class="token comment">// \u65B0\u589E</span>
    trackEffects<span class="token punctuation">,</span>
    triggerEffects
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./effect.js&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">trackRefValue</span><span class="token punctuation">(</span><span class="token parameter">ref</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>shouldTrack <span class="token operator">&amp;&amp;</span> activeEffect<span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// \u65B0\u589E</span>
        <span class="token function">trackEffects</span><span class="token punctuation">(</span>ref<span class="token punctuation">.</span>dep <span class="token operator">||</span> <span class="token punctuation">(</span>ref<span class="token punctuation">.</span>dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><h1>\u4E09. shallowRef \u7684\u5B9E\u73B0</h1><p>\u5F80 <code>ref</code> \u91CC\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u5E76\u975E Vue \u6240\u63D0\u5021\u7684\u884C\u4E3A\uFF0C\u56E0\u4E3A\u90A3\u6837\u4E00\u65B9\u9762\u4F7F\u7528\u4E86 <code>getter</code> \u548C <code>setter</code>\uFF0C\u4E00\u65B9\u9762\u53C8\u4F1A\u8C03\u7528 <code>reative</code> \u63A5\u53E3\u4F7F\u7528 <code>Proxy</code> \u53BB\u6DF1\u5C42\u4EE3\u7406\u8BE5\u5BF9\u8C61\u3002</p><p>\u53E6\u5916\uFF0C<code>ref</code> \u4EE3\u7406\u540E\u7684\u5B9E\u4F8B\uFF0C\u672C\u8D28\u5E94\u8BE5\u662F\u7ED3\u6784\u975E\u5E38\u7B80\u5355\u7684\u6570\u636E\uFF0C\u53EA\u5173\u6CE8\u5176 <code>value</code> \u5C5E\u6027\u7684\u83B7\u53D6\u548C\u4FEE\u6539\u5373\u53EF\u3002<br>\u4E0B\u9762\u7684\u5199\u6CD5\u6709\u6096 <code>ref</code> \u7684\u7406\u5FF5\uFF1A</p><pre class="w-45 language-js"><code class="language-js">refInstance<span class="token punctuation">.</span>value<span class="token punctuation">.</span>certainProp <span class="token operator">=</span> <span class="token string">&#39;xxx&#39;</span><span class="token punctuation">;</span>
</code></pre><p>\u5BF9\u6B64 Vue \u63D0\u4F9B\u4E86\u4E00\u4E2A <code>shallowRef</code> \u7684\u63A5\u53E3\uFF0C\u5F53\u4F20\u5165\u5BF9\u8C61\u65F6\uFF0C\u4E0D\u518D\u4F1A\u88AB <code>Proxy</code> \u4EE3\u7406\uFF0C\u4E5F\u53EA\u5141\u8BB8\u7528\u6237\u4FEE\u6539 <code>value</code> \u5C5E\u6027\u3002 <br>\u5B98\u65B9 demo \u5982\u4E0B\uFF1A</p><pre class="w-45 language-js"><code class="language-js"><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

state<span class="token punctuation">.</span>value<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">2</span>  <span class="token comment">// \u65E0\u6CD5\u89E6\u53D1 trigger</span>

state<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span>  <span class="token comment">// \u53EF\u4EE5\u89E6\u53D1 trigger</span>
</code></pre><p><code>shallowRef</code> \u7684\u5B9E\u73B0\u5176\u5B9E\u5F88\u7B80\u5355\uFF0C\u53EA\u662F\u5728 <code>RefImpl</code> \u4E2D\u65B0\u589E\u4E86 <code>isShallow</code> \u53C2\u6570\u5E76\u505A\u5224\u65AD\uFF0C\u5982\u679C\u662F shallow \u6A21\u5F0F\u5219\u7ED5\u8FC7 <code>toReactive</code> \u63A5\u53E3\u3002<br> \u5176\u63A5\u53E3\u5B9E\u73B0\u5982\u4E0B\uFF1A</p><div class="fr w-40"><p>\u8C03\u7528 <code>RefImpl</code> \u7684\u4E24\u4E2A\u63A5\u53E3 <code>ref</code> \u548C <code>shallowRef</code> \u4F20\u5165\u5BF9\u5E94\u7684 <code>isShallow</code> \u53C2\u6570\u5373\u53EF\uFF1A</p><pre class="language-js"><code class="language-javascript"><span class="token comment">/** ref.js **/</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// if (isRef(value)) {</span>
    <span class="token comment">//     return value</span>
    <span class="token comment">// }</span>
    <span class="token keyword">return</span> <span class="token function">createRef</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>  <span class="token comment">// \u65B0\u589E false \u53C2\u6570</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u65B0\u589E</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">createRef</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u65B0\u589E</span>
<span class="token keyword">function</span> <span class="token function">createRef</span><span class="token punctuation">(</span><span class="token parameter">rawValue<span class="token punctuation">,</span> shallow</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isRef</span><span class="token punctuation">(</span>rawValue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> rawValue
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RefImpl</span><span class="token punctuation">(</span>rawValue<span class="token punctuation">,</span> shallow<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><pre class="language-js"><code class="language-javascript"><span class="token comment">/** ref.js **/</span>

<span class="token keyword">class</span> <span class="token class-name">RefImpl</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> isShallow</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// \u65B0\u589E isShallow \u53C2\u6570</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>__v_isRef <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token comment">// this._rawValue = newVal;</span>
        <span class="token comment">// this._value = toReactive(newVal);</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_rawValue <span class="token operator">=</span> isShallow <span class="token operator">?</span> value <span class="token operator">:</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u65B0\u589E</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_value <span class="token operator">=</span> isShallow <span class="token operator">?</span> value <span class="token operator">:</span> <span class="token function">toReactive</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>  <span class="token comment">// \u65B0\u589E</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>__v_isShallow <span class="token operator">=</span> isShallow<span class="token punctuation">;</span>  <span class="token comment">// \u65B0\u589E</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">trackRefValue</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">set</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// newVal = toRaw(newVal);</span>
        newVal <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>__v_isShallow <span class="token operator">?</span> newVal <span class="token operator">:</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u65B0\u589E</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasChanged</span><span class="token punctuation">(</span>newVal<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_rawValue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_rawValue <span class="token operator">=</span> newVal<span class="token punctuation">;</span>
            <span class="token comment">// this._value = toReactive(newVal);</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>__v_isShallow <span class="token operator">?</span> newVal <span class="token operator">:</span> <span class="token function">toReactive</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u65B0\u589E</span>
            <span class="token function">triggerRefValue</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><p>\u5728\u7EBF\u793A\u4F8B\uFF1A</p>`,17);function y(t,o){return v}const p={render:y};p.__hmrId="/Users/lanbangjue/Documents/GitHub/devazine/src/pages/fe/source-analysis/vue/markdowns/6-2.md";p.__toc=[];const g={components:{Md6_1:a,Md6_2:p,CodePen:d},setup(){return{}}};function h(t,o,_,R,V,j){const l=s("Md6_1"),e=s("CodePen"),u=s("Md6_2");return k(),i(r,null,[n(l),n(e,{id:"mdxqzzP",tab:"html",height:"500"}),n(u),n(e,{id:"YzaYXGM",tab:"html",height:"500"})],64)}var S=f(g,[["render",h]]);export{S as default};
