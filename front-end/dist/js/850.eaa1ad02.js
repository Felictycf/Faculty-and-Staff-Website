"use strict";(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[850],{2850:function(t,e,a){a.r(e),a.d(e,{default:function(){return o}});var r=function(){var t=this,e=t._self._c;return e("page-header-wrapper",{attrs:{"tab-list":t.tabList,"tab-active-key":t.tabActiveKey,"tab-change":t.handleTabChange},scopedSlots:t._u([{key:"content",fn:function(){return[e("div",{staticClass:"ant-pro-page-header-search"},[e("a-input-search",{staticStyle:{width:"80%","max-width":"522px"},attrs:{size:"large"},scopedSlots:t._u([{key:"enterButton",fn:function(){return[t._v(" 搜索 ")]},proxy:!0}])})],1)]},proxy:!0}])},[e("router-view")],1)},s=[],c=function(t){switch(t){case"/list/search/article":return"1";case"/list/search/project":return"2";case"/list/search/application":return"3";default:return"1"}},i={name:"SearchLayout",data:function(){return{tabList:[{key:"1",tab:"文章"},{key:"2",tab:"项目"},{key:"3",tab:"应用"}],tabActiveKey:"1",search:!0}},created:function(){var t=this;this.tabActiveKey=c(this.$route.path),this.$watch("$route",(function(e){t.tabActiveKey=c(e.path)}))},methods:{handleTabChange:function(t){switch(this.tabActiveKey=t,t){case"1":this.$router.push("/list/search/article");break;case"2":this.$router.push("/list/search/project");break;case"3":this.$router.push("/list/search/application");break;default:this.$router.push("/workplace")}}}},n=i,u=a(1001),h=(0,u.Z)(n,r,s,!1,null,"0ef77de4",null),o=h.exports}}]);