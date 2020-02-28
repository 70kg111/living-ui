(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{143:function(t,e,n){},144:function(t,e,n){},145:function(t,e,n){"use strict";var o=n(143);n.n(o).a},149:function(t,e,n){"use strict";var o={name:"GuluIcon",props:["name"]},i=(n(145),n(29)),s=Object(i.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon"},[e("use",{attrs:{"xlink:href":"#i-"+this.name}})])}),[],!1,null,"8fdc7570",null);e.a=s.exports},154:function(t,e,n){"use strict";var o=n(144);n.n(o).a},158:function(t,e,n){},159:function(t,e,n){"use strict";n(13);var o={name:"GuluButton",components:{"g-icon":n(149).a},props:{icon:{},loading:{type:Boolean,default:!1},iconPosition:{type:String,default:"left",validator:function(t){return"left"===t||"right"===t}}},mounted:function(){n.e(1).then(n.t.bind(null,247,7)).then((function(t){}))}},i=(n(154),n(29)),s=Object(i.a)(o,(function(){var t,e=this,n=e.$createElement,o=e._self._c||n;return o("button",{staticClass:"g-button",class:(t={},t["icon-"+e.iconPosition]=!0,t),on:{click:function(t){return e.$emit("click")}}},[e.icon&&!e.loading?o("g-icon",{staticClass:"icon",attrs:{name:e.icon}}):e._e(),e._v(" "),e.loading?o("g-icon",{staticClass:"loading icon",attrs:{name:"loading"}}):e._e(),e._v(" "),o("div",{staticClass:"content"},[e._t("default")],2)],1)}),[],!1,null,"fa0c1932",null);e.a=s.exports},189:function(t,e,n){"use strict";var o=n(158);n.n(o).a},197:function(t,e,n){"use strict";n(98);var o={name:"GuluPopover",props:{position:{type:String,default:"top",validator:function(t){return["top","bottom","left","right"].indexOf(t)>=0}},trigger:{type:String,default:"click",validator:function(t){return["click","hover"].indexOf(t)>=0}}},data:function(){return{visible:!1}},mounted:function(){"click"===this.trigger?this.$refs.popover.addEventListener("click",this.onClick):(this.$refs.popover.addEventListener("mouseenter",this.open),this.$refs.popover.addEventListener("mouseleave",this.close))},destroyed:function(){"click"===this.trigger?this.$refs.popover.removeEventListener("click",this.onClick):(this.$refs.popover.removeEventListener("mouseenter",this.open),this.$refs.popover.removeEventListener("mouseleave",this.close))},computed:{openEvent:function(){return"click"===this.trigger?"click":"mouseenter"},closeEvent:function(){return"click"===this.trigger?"click":"mouseleave"}},methods:{positionContent:function(){var t=this.$refs,e=t.contentWrapper,n=t.triggerWrapper;document.body.appendChild(e);var o=n.getBoundingClientRect(),i=o.width,s=o.height,r=o.top,c=o.left,l=e.getBoundingClientRect().height,a={top:{top:r+window.scrollY,left:c+window.scrollX},bottom:{top:r+s+window.scrollY,left:c+window.scrollX},left:{top:r+window.scrollY+(s-l)/2,left:c+window.scrollX},right:{top:r+window.scrollY+(s-l)/2,left:c+window.scrollX+i}};e.style.left=a[this.position].left+"px",e.style.top=a[this.position].top+"px"},onClickDocument:function(t){this.$refs.popover&&(this.$refs.popover===t.target||this.$refs.popover.contains(t.target))||this.$refs.contentWrapper&&(this.$refs.contentWrapper===t.target||this.$refs.contentWrapper.contains(t.target))||this.close()},open:function(){var t=this;this.visible=!0,this.$nextTick((function(){t.positionContent(),document.addEventListener("click",t.onClickDocument)}))},close:function(){this.visible=!1,document.removeEventListener("click",this.onClickDocument)},onClick:function(t){this.$refs.triggerWrapper.contains(t.target)&&(!0===this.visible?this.close():this.open())}}},i=(n(189),n(29)),s=Object(i.a)(o,(function(){var t,e=this.$createElement,n=this._self._c||e;return n("div",{ref:"popover",staticClass:"popover"},[this.visible?n("div",{ref:"contentWrapper",staticClass:"content-wrapper",class:(t={},t["position-"+this.position]=!0,t)},[this._t("content",null,{close:this.close})],2):this._e(),this._v(" "),n("span",{ref:"triggerWrapper",staticStyle:{display:"inline-block"}},[this._t("default")],2)])}),[],!1,null,"6f0e0352",null);e.a=s.exports},261:function(t,e,n){"use strict";n.r(e);var o=n(197),i=n(159),s={name:"popover-demos",components:{"g-popover":o.a,"g-button":i.a}},r=n(29),c=Object(r.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("g-popover",[n("g-button",[t._v("上方弹出")]),t._v(" "),n("template",{slot:"content"},[t._v("\n            弹出内容\n        ")])],2),t._v(" "),n("g-popover",{attrs:{position:"bottom"}},[n("g-button",[t._v("下方弹出")]),t._v(" "),n("template",{slot:"content"},[t._v("\n            弹出内容\n        ")])],2),t._v(" "),n("g-popover",{attrs:{position:"left"}},[n("g-button",[t._v("左边弹出")]),t._v(" "),n("template",{slot:"content"},[t._v("\n            弹出内容\n        ")])],2),t._v(" "),n("g-popover",{attrs:{position:"right"}},[n("g-button",[t._v("右边弹出")]),t._v(" "),n("template",{slot:"content"},[t._v("\n            弹出内容\n        ")])],2)],1)}),[],!1,null,"44a33328",null);e.default=c.exports}}]);