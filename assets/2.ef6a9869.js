import{f as s}from"./vendor.508f1f42.js";const n=s(`<h1>\u4E00. \u7C7B\u578B\u5B89\u5168</h1><div class="fr w-45 tip indent"><p>\u5F3A\u5236\u7C7B\u578B\u5B9A\u4E49\uFF0C\u4E14\u8981\u6C42\u540E\u7EED\u7684\u4F7F\u7528\u5FC5\u987B\u4E25\u683C\u7B26\u5408\u5B9A\u4E49\uFF0C\u8FD9\u79CD\u89C4\u8303\u53EF\u4EE5\u8BA9\u7F16\u8BD1\u5668\u5728\u7F16\u8BD1\u9636\u6BB5\u5C31\u63D0\u524D\u611F\u77E5\u5230\u9519\u8BEF\u5E76\u901A\u77E5\u5F00\u53D1\u8005\uFF0C\u4ECE\u800C\u89C4\u907F\u53EF\u80FD\u5B58\u5728\u7684\u95EE\u9898\uFF08\u800C\u4E0D\u662F\u7B49\u5230\u5E94\u7528\u53D1\u5E03\u540E\uFF0C\u5916\u90E8\u7684\u7528\u6237\u5728\u4F7F\u7528\u65F6\u624D\u53D1\u73B0\u95EE\u9898\uFF09\u3002</p><p>\u4F8B\u5982\u5728\u5316\u5B66\u5B9E\u9A8C\u5BA4\u91CC\uFF0C\u6C27\u5316\u5242\u548C\u8FD8\u539F\u5242\u662F\u4E25\u7981\u653E\u5728\u4E00\u8D77\u7684\uFF08\u4F1A\u53D1\u751F\u7206\u70B8\uFF09\u3002\u90A3\u5C31\u9700\u8981\u628A\u6BCF\u4E00\u4E2A\u5316\u5B66\u5242\u6807\u6CE8\u6E05\u695A\u5B83\u662F\u4EC0\u4E48\uFF0C\u7136\u540E\u5728\u4F7F\u7528\u524D\u5148\u7531\u4E13\u4EBA\u628A\u5173\uFF0C\u4E0D\u5141\u8BB8\u628A\u6807\u6709\u201C\u6C27\u5316\u5242\u201D\u7684\u7269\u54C1\u653E\u5165\u6807\u6709\u201C\u8FD8\u539F\u5242\u201D\u7684\u7269\u54C1\u4E2D\uFF0C\u8FDB\u800C\u907F\u514D\u5371\u9669\u53D1\u751F\u3002</p></div><p>Swift \u662F\u4E00\u79CD<strong>\u5F3A\u7C7B\u578B\u8BED\u8A00</strong>\uFF0C\u4F1A\u8981\u6C42\u53D8\u91CF\u5728\u4F7F\u7528\u524D\u5FC5\u987B\u5148\u5B9A\u4E49\u5176\u7C7B\u578B\uFF0C\u4E14\u5728\u540E\u7EED\u7684\u4F7F\u7528\u4E2D\u4E5F\u5FC5\u987B\u4FDD\u6301\u5176\u539F\u672C\u7684\u6570\u636E\u7C7B\u578B\uFF08\u9664\u975E\u7ECF\u8FC7\u5F3A\u5236\u8F6C\u6362\uFF09\u3002</p><p>\u4F8B\u5982\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u7C7B\u578B\u4E3A\u6574\u578B\uFF08\u6574\u6570\u7C7B\u578B\uFF09\u7684\u53D8\u91CF\uFF0C\u5728\u540E\u7EED\u5F00\u53D1\u4E2D\u5982\u679C\u5C06\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u6570\u636E\u8D4B\u503C\u7ED9\u5B83\uFF0C\u7F16\u8BD1\u5668\u4F1A\u76F4\u63A5\u62A5\u9519\uFF1A</p><pre class="language-swift"><code class="language-javascript"><span class="token keyword">var</span> year <span class="token operator">=</span> <span class="token number">2023</span>
year <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span>  <span class="token comment">// \u62A5\u9519\uFF1ACannot assign value of type &#39;String&#39; to type &#39;Int&#39;</span>
</code></pre><p>\u56E0\u4E3A\u53D8\u91CF <code>year</code> \u53EA\u80FD\u63A5\u53D7\u6574\u578B\u7684\u6570\u503C\uFF0C\u65E0\u6CD5\u63A5\u53D7\u5B57\u7B26\u4E32\u6216\u5176\u5B83\u975E\u6574\u578B\u7684\u6570\u503C\u3002</p><h1>\u4E8C. \u6CE8\u91CA</h1><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u6CE8\u91CA\u7684\u5F62\u5F0F\u5728\u4EE3\u7801\u4E2D\u4E66\u5199\u4E00\u4E9B\u6CE8\u89E3\uFF08\u4F8B\u5982\u4E0A\u65B9\u4EE3\u7801\u5757\u4E2D\u7684\u201C\u62A5\u9519\u201D\u63CF\u8FF0\uFF09\uFF0C\u8BA9\u4EE3\u7801\u7684\u903B\u8F91\u80FD\u4EE5\u4E66\u9762\u7684\u5F62\u5F0F\u88AB\u9605\u8BFB\u3002 <br> \u6CE8\u91CA\u662F\u9762\u5411\u5F00\u53D1\u8005\u7684\uFF08\u800C\u975E\u673A\u5668\uFF09\uFF0CSwift \u7684\u7F16\u8BD1\u5668\u5C06\u4F1A\u5728\u7F16\u8BD1\u4EE3\u7801\u65F6\u81EA\u52A8\u5FFD\u7565\u6389\u6CE8\u91CA\u90E8\u5206\uFF0C\u6240\u4EE5\u4E0D\u7528\u62C5\u5FC3\u6CE8\u91CA\u4F1A\u5F71\u54CD\u4EE3\u7801\u7684\u6267\u884C\u3002</p><h2>2.1 \u5355\u884C\u6CE8\u91CA</h2><div class="fr w-45 tip"><p>\u{1F4A1} \u5728 Playground \u6216 Xcode \u4E2D\uFF0C\u5982\u679C\u6709\u6BB5\u4EE3\u7801\u6211\u4EEC\u6682\u65F6\u4E0D\u60F3\u6267\u884C\uFF0C\u4F46\u53C8\u60F3\u4FDD\u7559\u8BE5\u6BB5\u4EE3\u7801\uFF0C\u53EF\u4EE5\u9009\u4E2D\u5BF9\u5E94\u5185\u5BB9\u540E\u6309\u4E0B\u5FEB\u6377\u952E <code>command</code> + <code>/</code> \u5C06\u5176\u8F6C\u4E3A\u6CE8\u91CA\u3002</p><p>\u82E5\u9009\u4E2D\u7684\u5185\u5BB9\u5DF2\u7ECF\u662F\u6CE8\u91CA\uFF0C\u5FEB\u6377\u952E <code>command</code> + <code>/</code> \u5C06\u4F1A\u53BB\u6389\u6CE8\u91CA\u7B26\u53F7\uFF1A</p><p><img src="https://raw.githubusercontent.com/devazine2022/assets/main/swift-1.gif" alt></p></div><p>\u5728 Swift \u4E2D\u53EF\u4EE5\u4F7F\u7528\u201C\u53CC\u6B63\u659C\u6760\uFF08<code>//</code>\uFF09+ \u5355\u884C\u6CE8\u91CA\u5185\u5BB9\u201D\u7684\u5F62\u5F0F\u6765\u4E66\u5199\u5355\u884C\u6CE8\u91CA\uFF1A</p><pre class="language-swift"><code class="language-javascript"><span class="token comment">// \u5B9A\u4E49\u4E86\u4E00\u4E2A\u503C\u4E3A 1 \u7684\u53D8\u91CF a</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>

a <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">1</span>  <span class="token comment">// a \u7684\u503C\u4F1A\u53D8\u4E3A 2</span>
</code></pre><h2>2.2 \u591A\u884C\u6CE8\u91CA</h2><p>\u5728 Swift \u4E2D\u53EF\u4EE5\u4F7F\u7528\u201C<code>/*</code> + \u6CE8\u91CA\u5185\u5BB9\uFF08\u53EF\u6362\u884C\uFF09 + <code>*/</code>\u201D\u7684\u5F62\u5F0F\u6765\u4E66\u5199\u5355\u884C\u6CE8\u91CA\uFF1A</p><pre class="language-swift"><code class="language-javascript"><span class="token comment">/* \u5B9A\u4E49\u4E86\u4E00\u4E2A\u521D\u59CB\u503C\u4E3A 1 \u7684\u53D8\u91CF a\uFF0C
\u540E\u7EED a \u4F1A\u88AB\u52A0 1 */</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>

a <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">1</span>
</code></pre><p>\u53E6\u5916\uFF0C\u591A\u884C\u6CE8\u91CA\u652F\u6301\u5D4C\u5957\u7684\u5199\u6CD5\uFF1A</p><pre class="w-50 language-swift"><code class="language-swift"><span class="token comment">/* \u8FD9\u662F\u7B2C\u4E00\u4E2A\u591A\u884C\u6CE8\u91CA\u7684\u5F00\u5934
/* \u8FD9\u662F\u7B2C\u4E8C\u4E2A\u88AB\u5D4C\u5957\u7684\u591A\u884C\u6CE8\u91CA */
\u8FD9\u662F\u7B2C\u4E00\u4E2A\u591A\u884C\u6CE8\u91CA\u7684\u7ED3\u5C3E */</span>
</code></pre>`,17);function e(o,p){return n}const a={render:e};a.__hmrId="/Users/lanbangjue/Documents/GitHub/devazine/src/pages/swift/markdowns/2.md";a.__toc=[];export{a as default};