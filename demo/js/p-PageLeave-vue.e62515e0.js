(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["p-PageLeave-vue"],{1874:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" 你在 "),a("strong",{staticClass:"text-strong"},[e._v(e._s(e.pageTime))]),e._v(" 秒前打开本页面 ")])},i=[],c={name:"PageTimer",data:function(){return{openTime:new Date,pageTime:0}},mounted:function(){this.updatePageTime()},activated:function(){this.updatePageTime()},deactivated:function(){this.clearPageTimer()},beforeDestroy:function(){this.clearPageTimer()},methods:{calcPageTime:function(){this.pageTime=Math.floor((new Date-this.openTime)/1e3)},updatePageTime:function(){this.calcPageTime(),this.clearPageTimer(),this.pageTimer=setInterval(this.calcPageTime,1e3)},clearPageTimer:function(){clearInterval(this.pageTimer)}}},r=c,o=a("2877"),s=Object(o["a"])(r,n,i,!1,null,null,null);t["a"]=s.exports},"5e6b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("页面离开确认")]),a("page-timer"),a("p",[e._v(" 页面在页签关闭/刷新/被替换时将会确认提示 ")]),a("p",[a("a",{staticClass:"demo-btn",on:{click:function(t){return e.$tabs.refresh(null,!0,!1)}}},[e._v(" 刷新页签 ")]),a("a",{staticClass:"demo-btn",on:{click:function(t){return e.$tabs.close({force:!1})}}},[e._v(" 关闭页签 ")]),a("router-link",{staticClass:"demo-btn",attrs:{to:"?id="+(+(e.$route.query.id||0)+1)}},[e._v(" 替换页签 ")]),a("router-link",{staticClass:"demo-btn",attrs:{to:"/default/page/1"}},[e._v(" 离开路由 ")]),a("a",{staticClass:"demo-btn",on:{click:e.reload}},[e._v(" 刷新浏览器 ")])],1)],1)},i=[],c=(a("99af"),a("d3b7"),a("1874")),r={name:"PageLeave",components:{PageTimer:c["a"]},beforePageLeave:function(e,t){if("unload"===t)return"您在“".concat(e.title,"”页签的更改尚未完成，是否要离开？");var a={close:"关闭",refresh:"刷新",replace:"替换",leave:"离开"}[t],n="您确认要".concat(a,"页签“").concat(e.title,"”吗？");return new Promise((function(e,t){confirm(n)?e():t("您拒绝了".concat(a,"页签"))}))},methods:{reload:function(){location.reload()}}},o=r,s=a("2877"),l=Object(s["a"])(o,n,i,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=p-PageLeave-vue.e62515e0.js.map