"use strict";(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[848],{99848:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-header-index-wide"},[e("a-card",{style:{height:"100%"},attrs:{bordered:!1,bodyStyle:{padding:"16px 0",height:"100%"}}},[e("div",{staticClass:"account-settings-info-main",class:{mobile:t.isMobile}},[e("div",{staticClass:"account-settings-info-left"},[e("a-menu",{style:{border:"0",width:t.isMobile?"560px":"auto"},attrs:{mode:t.isMobile?"horizontal":"inline",selectedKeys:t.selectedKeys,type:"inner"},on:{openChange:t.onOpenChange}},[e("a-menu-item",{key:"/account/settings/basic"},[e("router-link",{attrs:{to:{name:"BasicSettings"}}},[t._v(" "+t._s(t.$t("account.settings.menuMap.basic"))+" ")])],1),e("a-menu-item",{key:"/account/settings/security"},[e("router-link",{attrs:{to:{name:"SecuritySettings"}}},[t._v(" "+t._s(t.$t("account.settings.menuMap.security"))+" ")])],1),e("a-menu-item",{key:"/account/settings/custom"},[e("router-link",{attrs:{to:{name:"CustomSettings"}}},[t._v(" "+t._s(t.$t("account.settings.menuMap.custom"))+" ")])],1),e("a-menu-item",{key:"/account/settings/binding"},[e("router-link",{attrs:{to:{name:"BindingSettings"}}},[t._v(" "+t._s(t.$t("account.settings.menuMap.binding"))+" ")])],1),e("a-menu-item",{key:"/account/settings/notification"},[e("router-link",{attrs:{to:{name:"NotificationSettings"}}},[t._v(" "+t._s(t.$t("account.settings.menuMap.notification"))+" ")])],1)],1)],1),e("div",{staticClass:"account-settings-info-right"},[e("div",{staticClass:"account-settings-info-title"},[e("span",[t._v(t._s(t.$t(t.$route.meta.title)))])]),e("route-view")],1)])])],1)},o=[],a=(n(92222),n(4897)),s=n(22373),u={components:{RouteView:a.Ws},mixins:[s.c],data:function(){return{mode:"inline",openKeys:[],selectedKeys:[],preview:{},option:{img:"/avatar2.jpg",info:!0,size:1,outputType:"jpeg",canScale:!1,autoCrop:!0,autoCropWidth:180,autoCropHeight:180,fixedBox:!0,fixed:!0,fixedNumber:[1,1]},pageTitle:""}},mounted:function(){this.updateMenu()},methods:{onOpenChange:function(t){this.openKeys=t},updateMenu:function(){var t=this.$route.matched.concat();this.selectedKeys=[t.pop().path]}},watch:{$route:function(t){this.updateMenu()}}},r=u,c=n(43736),p=(0,c.Z)(r,i,o,!1,null,"33986ed2",null),d=p.exports},22373:function(t,e,n){n.d(e,{c:function(){return a}});var i=n(23711),o=n(20629),a={computed:(0,i.Z)((0,i.Z)({},(0,o.rn)({layout:function(t){return t.app.layout},navTheme:function(t){return t.app.theme},primaryColor:function(t){return t.app.color},colorWeak:function(t){return t.app.weak},fixedHeader:function(t){return t.app.fixedHeader},fixedSidebar:function(t){return t.app.fixedSidebar},contentWidth:function(t){return t.app.contentWidth},autoHideHeader:function(t){return t.app.autoHideHeader},isMobile:function(t){return t.app.isMobile},sideCollapsed:function(t){return t.app.sideCollapsed},multiTab:function(t){return t.app.multiTab}})),{},{isTopMenu:function(){return"topmenu"===this.layout}}),methods:{isSideMenu:function(){return!this.isTopMenu}}}}}]);