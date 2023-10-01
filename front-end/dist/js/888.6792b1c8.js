"use strict";(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[888],{62366:function(t,a,e){e.r(a),e.d(a,{default:function(){return w}});var r=function(){var t=this,a=t._self._c;return a("div",[a("a-card",{staticClass:"ant-pro-components-tag-select",attrs:{bordered:!1}},[a("a-form",{attrs:{form:t.form,layout:"inline"}},[a("standard-form-row",{staticStyle:{"padding-bottom":"11px"},attrs:{title:"所属类目",block:""}},[a("a-form-item",[a("tag-select",[a("tag-select-option",{attrs:{value:"Category1"}},[t._v("类目一")]),a("tag-select-option",{attrs:{value:"Category2"}},[t._v("类目二")]),a("tag-select-option",{attrs:{value:"Category3"}},[t._v("类目三")]),a("tag-select-option",{attrs:{value:"Category4"}},[t._v("类目四")]),a("tag-select-option",{attrs:{value:"Category5"}},[t._v("类目五")]),a("tag-select-option",{attrs:{value:"Category6"}},[t._v("类目六")]),a("tag-select-option",{attrs:{value:"Category7"}},[t._v("类目七")]),a("tag-select-option",{attrs:{value:"Category8"}},[t._v("类目八")]),a("tag-select-option",{attrs:{value:"Category9"}},[t._v("类目九")]),a("tag-select-option",{attrs:{value:"Category10"}},[t._v("类目十")])],1)],1)],1),a("standard-form-row",{attrs:{title:"其它选项",grid:"",last:""}},[a("a-row",[a("a-col",{attrs:{lg:8,md:10,sm:10,xs:24}},[a("a-form-item",{attrs:{"wrapper-col":{sm:{span:16},xs:{span:24}},label:"作者"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["author"],expression:"['author']"}],staticStyle:{"max-width":"200px",width:"100%"},attrs:{mode:"multiple",placeholder:"不限"},on:{change:t.handleChange}},[a("a-select-option",{attrs:{value:"lisa"}},[t._v("王昭君")])],1)],1)],1),a("a-col",{attrs:{lg:8,md:10,sm:10,xs:24}},[a("a-form-item",{attrs:{"wrapper-col":{sm:{span:16},xs:{span:24}},label:"好评度"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["rate"],expression:"['rate']"}],staticStyle:{"max-width":"200px",width:"100%"},attrs:{placeholder:"不限"}},[a("a-select-option",{attrs:{value:"good"}},[t._v("优秀")]),a("a-select-option",{attrs:{value:"normal"}},[t._v("普通")])],1)],1)],1)],1)],1)],1)],1),a("div",{staticClass:"ant-pro-pages-list-applications-filterCardList"},[a("a-list",{staticStyle:{"margin-top":"24px"},attrs:{loading:t.loading,"data-source":t.data,grid:{gutter:24,xl:4,lg:3,md:3,sm:2,xs:1}},scopedSlots:t._u([{key:"renderItem",fn:function(e){return a("a-list-item",{},[a("a-card",{attrs:{"body-style":{paddingBottom:20},hoverable:""}},[a("a-card-meta",{attrs:{title:e.title}},[a("template",{slot:"avatar"},[a("a-avatar",{attrs:{size:"small",src:e.avatar}})],1)],2),a("template",{slot:"actions"},[a("a-tooltip",{attrs:{title:"下载"}},[a("a-icon",{attrs:{type:"download"}})],1),a("a-tooltip",{attrs:{title:"编辑"}},[a("a-icon",{attrs:{type:"edit"}})],1),a("a-tooltip",{attrs:{title:"分享"}},[a("a-icon",{attrs:{type:"share-alt"}})],1),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[a("a-icon",{attrs:{type:"ellipsis"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{href:"javascript:;"}},[t._v("1st menu item")])]),a("a-menu-item",[a("a",{attrs:{href:"javascript:;"}},[t._v("2nd menu item")])]),a("a-menu-item",[a("a",{attrs:{href:"javascript:;"}},[t._v("3rd menu item")])])],1)],1)],1),a("div",{},[a("card-info",{attrs:{"active-user":"100","new-user":"999"}})],1)],2)],1)}}])})],1)],1)},s=[],o=e(30381),i=e.n(o),l=e(64896),n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"cardInfo"},[a("div",[a("p",[t._v("活跃用户")]),a("p",[t._v(t._s(t.activeUser))])]),a("div",[a("p",[t._v("新增用户")]),a("p",[t._v(t._s(t.newUser))])])])},c=[],d=(e(9653),{name:"CardInfo",props:{activeUser:{type:[String,Number],default:0},newUser:{type:[String,Number],default:0}}}),p=d,m=e(43736),u=(0,m.Z)(p,n,c,!1,null,"6d6cceb6",null),v=u.exports,g=l.OT.Option,f=l.eM.Item,h={components:{AvatarList:l.eM,AvatarListItem:f,Ellipsis:l.mH,TagSelect:l.OT,TagSelectOption:g,StandardFormRow:l.vy,CardInfo:v},data:function(){return{data:[],form:this.$form.createForm(this),loading:!0}},filters:{fromNow:function(t){return i()(t).fromNow()}},mounted:function(){this.getList()},methods:{handleChange:function(t){},getList:function(){var t=this;this.$http.get("/list/article",{params:{count:8}}).then((function(a){t.data=a.result,t.loading=!1}))}}},_=h,y=(0,m.Z)(_,r,s,!1,null,"2153d42f",null),w=y.exports}}]);