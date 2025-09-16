import{_ as a,c as s,o as n,V as p}from"./chunks/framework.96b5c143.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/Earlier/不同系统实现开机自启服务.md","lastUpdated":1681981355000}'),l={name:"blogs/Earlier/不同系统实现开机自启服务.md"},e=p(`<h3 id="最近捣鼓了各种内网穿透-几乎都是服务端-客户端的方式-服务端24小时开启所以不需要做文章-但是客户端需要做到开机自启-比如断电-重启设备后-需要重新与服务端建立连接。" tabindex="-1">最近捣鼓了各种内网穿透，几乎都是服务端+客户端的方式，服务端24小时开启所以不需要做文章，但是客户端需要做到开机自启，比如断电/重启设备后，需要重新与服务端建立连接。 <a class="header-anchor" href="#最近捣鼓了各种内网穿透-几乎都是服务端-客户端的方式-服务端24小时开启所以不需要做文章-但是客户端需要做到开机自启-比如断电-重启设备后-需要重新与服务端建立连接。" aria-label="Permalink to &quot;最近捣鼓了各种内网穿透，几乎都是服务端+客户端的方式，服务端24小时开启所以不需要做文章，但是客户端需要做到开机自启，比如断电/重启设备后，需要重新与服务端建立连接。&quot;">​</a></h3><h2 id="_1-lede路由-以natapp作为示例" tabindex="-1">1.Lede路由（以natapp作为示例） <a class="header-anchor" href="#_1-lede路由-以natapp作为示例" aria-label="Permalink to &quot;1.Lede路由（以natapp作为示例）&quot;">​</a></h2><p><a href="https://natapp.cn/" target="_blank" rel="noreferrer">natapp官网</a>下载客户端</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#赋予执行权限</span></span>
<span class="line"><span style="color:#A6ACCD;">chmod a+x /usr/natapp/natapp</span></span>
<span class="line"><span style="color:#A6ACCD;">#下载配置示例后修改token等参数</span></span>
<span class="line"><span style="color:#A6ACCD;">https://natapp.cn/article/config_ini</span></span>
<span class="line"><span style="color:#A6ACCD;">#运行</span></span>
<span class="line"><span style="color:#A6ACCD;">./natapp</span></span>
<span class="line"><span style="color:#A6ACCD;">#下载启动脚本到 /etc/init.d/</span></span>
<span class="line"><span style="color:#A6ACCD;">https://raw.githubusercontent.com/natapp/natapp_autostart/master/OpenWRT/natapp</span></span>
<span class="line"><span style="color:#A6ACCD;">#授权</span></span>
<span class="line"><span style="color:#A6ACCD;">chmod 755 /etc/init.d/natapp</span></span>
<span class="line"><span style="color:#A6ACCD;">#运行</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/natapp start</span></span>
<span class="line"><span style="color:#A6ACCD;">#开启开机自启</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/natapp enable &amp;&amp; echo on</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#其他相关命令</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/natapp start    #开启</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/natapp stop     #关闭</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/natapp restart  #重启</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/natapp enable &amp;&amp; echo on    #加入开机启动</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/init.d/natapp disable &amp;&amp; echo off  #取消开机启动</span></span></code></pre></div><h2 id="_2-windows-以natapp作为示例" tabindex="-1">2.Windows（以natapp作为示例） <a class="header-anchor" href="#_2-windows-以natapp作为示例" aria-label="Permalink to &quot;2.Windows（以natapp作为示例）&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#下载nssm</span></span>
<span class="line"><span style="color:#A6ACCD;">http://download.natapp.cn/assets/downloads/nssm-2.24-101.rar</span></span>
<span class="line"><span style="color:#A6ACCD;">#安装服务（配置路径，服务名称，启动参数）</span></span>
<span class="line"><span style="color:#A6ACCD;">nssm install natapp</span></span>
<span class="line"><span style="color:#A6ACCD;">#启动服务</span></span>
<span class="line"><span style="color:#A6ACCD;">nssm start natapp</span></span>
<span class="line"><span style="color:#A6ACCD;">#修改服务</span></span>
<span class="line"><span style="color:#A6ACCD;">nssm edit natapp</span></span>
<span class="line"><span style="color:#A6ACCD;">#重启服务</span></span>
<span class="line"><span style="color:#A6ACCD;">nssm restart natapp</span></span>
<span class="line"><span style="color:#A6ACCD;">#删除服务</span></span>
<span class="line"><span style="color:#A6ACCD;">nssm remove natapp</span></span></code></pre></div><h2 id="_3-很简单-linux略过。" tabindex="-1">3.很简单，Linux略过。 <a class="header-anchor" href="#_3-很简单-linux略过。" aria-label="Permalink to &quot;3.很简单，Linux略过。&quot;">​</a></h2>`,7),t=[e];function o(c,i,r,C,A,d){return n(),s("div",null,t)}const y=a(l,[["render",o]]);export{h as __pageData,y as default};
