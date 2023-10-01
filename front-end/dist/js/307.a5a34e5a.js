(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[307],{10307:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return k}});r(82526),r(41817);var a=function(){var t=this,e=t._self._c;return e("page-header-wrapper",[e("a-card",{attrs:{bordered:!1}},[e("a-row",[e("a-col",{attrs:{sm:8,xs:24}},[e("info",{attrs:{title:"我的待办",value:"8个任务",bordered:!0}})],1),e("a-col",{attrs:{sm:8,xs:24}},[e("info",{attrs:{title:"本周任务平均处理时间",value:"32分钟",bordered:!0}})],1),e("a-col",{attrs:{sm:8,xs:24}},[e("info",{attrs:{title:"本周完成任务数",value:"24个"}})],1)],1)],1),e("a-card",{staticStyle:{"margin-top":"24px"},attrs:{bordered:!1,title:"标准列表"}},[e("div",{attrs:{slot:"extra"},slot:"extra"},[e("a-radio-group",{model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[e("a-radio-button",{attrs:{value:"all"}},[t._v("全部")]),e("a-radio-button",{attrs:{value:"processing"}},[t._v("进行中")]),e("a-radio-button",{attrs:{value:"waiting"}},[t._v("等待中")])],1),e("a-input-search",{staticStyle:{"margin-left":"16px",width:"272px"}})],1),e("div",{staticClass:"operate"},[e("a-button",{staticStyle:{width:"100%"},attrs:{type:"dashed",icon:"plus"},on:{click:t.add}},[t._v("添加")])],1),e("a-list",{attrs:{size:"large",pagination:{showSizeChanger:!0,showQuickJumper:!0,pageSize:5,total:50}}},t._l(t.data,(function(r,a){return e("a-list-item",{key:a},[e("a-list-item-meta",{attrs:{description:r.description}},[e("a-avatar",{attrs:{slot:"avatar",size:"large",shape:"square",src:r.avatar},slot:"avatar"}),e("a",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(r.title))])],1),e("div",{attrs:{slot:"actions"},slot:"actions"},[e("a",{on:{click:function(e){return t.edit(r)}}},[t._v("编辑")])]),e("div",{attrs:{slot:"actions"},slot:"actions"},[e("a-dropdown",[e("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[e("a-menu-item",[e("a",[t._v("编辑")])]),e("a-menu-item",[e("a",[t._v("删除")])])],1),e("a",[t._v("更多"),e("a-icon",{attrs:{type:"down"}})],1)],1)],1),e("div",{staticClass:"list-content"},[e("div",{staticClass:"list-content-item"},[e("span",[t._v("Owner")]),e("p",[t._v(t._s(r.owner))])]),e("div",{staticClass:"list-content-item"},[e("span",[t._v("开始时间")]),e("p",[t._v(t._s(r.startAt))])]),e("div",{staticClass:"list-content-item"},[e("a-progress",{staticStyle:{width:"180px"},attrs:{percent:r.progress.value,status:r.progress.status?r.progress.status:null}})],1)])],1)})),1)],1)],1)},s=[],n=function(){var t=this,e=t._self._c;return e("a-form",{attrs:{form:t.form},on:{submit:t.handleSubmit}},[e("a-form-item",{attrs:{label:"任务名称",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"请输入任务名称"}]}],expression:"['title', {rules:[{required: true, message: '请输入任务名称'}]}]"}]})],1),e("a-form-item",{attrs:{label:"开始时间",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["startAt",{rules:[{required:!0,message:"请选择开始时间"}]}],expression:"['startAt', {rules:[{required: true, message: '请选择开始时间'}]}]"}],staticStyle:{width:"100%"},attrs:{valueFormat:"YYYY-MM-DD HH:mm"}})],1),e("a-form-item",{attrs:{label:"任务负责人",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["owner",{rules:[{required:!0,message:"请选择开始时间"}]}],expression:"['owner', {rules:[{required: true, message: '请选择开始时间'}]}]"}]},[e("a-select-option",{attrs:{value:0}},[t._v("付晓晓")]),e("a-select-option",{attrs:{value:1}},[t._v("周毛毛")])],1)],1),e("a-form-item",{attrs:{label:"产品描述",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["description"],expression:"['description']"}]})],1)],1)},o=[],l=(r(41539),r(25030)),i=r.n(l),u=["title","startAt","owner","description"],c={name:"TaskForm",props:{record:{type:Object,default:null}},data:function(){return{labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},form:this.$form.createForm(this)}},mounted:function(){this.record&&this.form.setFieldsValue(i()(this.record,u))},methods:{onOk:function(){return new Promise((function(t){t(!0)}))},onCancel:function(){return new Promise((function(t){t(!0)}))},handleSubmit:function(){var t=this.form.validateFields;this.visible=!0,t((function(t,e){}))}}},p=c,d=r(43736),v=(0,d.Z)(p,n,o,!1,null,null,null),m=v.exports,f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-info"},[e("span",[t._v(t._s(t.title))]),e("p",[t._v(t._s(t.value))]),t.bordered?e("em"):t._e()])},h=[],g={name:"Info",props:{title:{type:String,default:""},value:{type:String,default:""},bordered:{type:Boolean,default:!1}}},b=g,w=(0,d.Z)(b,f,h,!1,null,"79fa4e49",null),y=w.exports,C=[];C.push({title:"Alipay",avatar:"https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",description:"那是一种内在的东西， 他们到达不了，也无法触及的",owner:"付晓晓",startAt:"2018-07-26 22:44",progress:{value:90}}),C.push({title:"Angular",avatar:"https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png",description:"希望是一个好东西，也许是最好的，好东西是不会消亡的",owner:"曲丽丽",startAt:"2018-07-26 22:44",progress:{value:54}}),C.push({title:"Ant Design",avatar:"https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png",description:"生命就像一盒巧克力，结果往往出人意料",owner:"林东东",startAt:"2018-07-26 22:44",progress:{value:66}}),C.push({title:"Ant Design Pro",avatar:"https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png",description:"城镇中有那么多的酒馆，她却偏偏走进了我的酒馆",owner:"周星星",startAt:"2018-07-26 22:44",progress:{value:30}}),C.push({title:"Bootstrap",avatar:"https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png",description:"那时候我只会想自己想要什么，从不想自己拥有什么",owner:"吴加好",startAt:"2018-07-26 22:44",progress:{status:"exception",value:100}});var _={name:"StandardList",components:{TaskForm:m,Info:y},data:function(){return{data:C,status:"all"}},methods:{add:function(){this.$dialog(m,{record:{},on:{ok:function(){},cancel:function(){},close:function(){}}},{title:"新增",width:700,centered:!0,maskClosable:!1})},edit:function(t){this.$dialog(m,{record:t,on:{ok:function(){},cancel:function(){},close:function(){}}},{title:"操作",width:700,centered:!0,maskClosable:!1})}}},j=_,x=(0,d.Z)(j,a,s,!1,null,"9fcba204",null),k=x.exports},25030:function(t,e,r){var a=1/0,s=9007199254740991,n="[object Arguments]",o="[object Function]",l="[object GeneratorFunction]",i="[object Symbol]",u="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,c="object"==typeof self&&self&&self.Object===Object&&self,p=u||c||Function("return this")();function d(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}function v(t,e){var r=-1,a=t?t.length:0,s=Array(a);while(++r<a)s[r]=e(t[r],r,t);return s}function m(t,e){var r=-1,a=e.length,s=t.length;while(++r<a)t[s+r]=e[r];return t}var f=Object.prototype,h=f.hasOwnProperty,g=f.toString,b=p.Symbol,w=f.propertyIsEnumerable,y=b?b.isConcatSpreadable:void 0,C=Math.max;function _(t,e,r,a,s){var n=-1,o=t.length;r||(r=A),s||(s=[]);while(++n<o){var l=t[n];e>0&&r(l)?e>1?_(l,e-1,r,a,s):m(s,l):a||(s[s.length]=l)}return s}function j(t,e){return t=Object(t),x(t,e,(function(e,r){return r in t}))}function x(t,e,r){var a=-1,s=e.length,n={};while(++a<s){var o=e[a],l=t[o];r(l,o)&&(n[o]=l)}return n}function k(t,e){return e=C(void 0===e?t.length-1:e,0),function(){var r=arguments,a=-1,s=C(r.length-e,0),n=Array(s);while(++a<s)n[a]=r[e+a];a=-1;var o=Array(e+1);while(++a<e)o[a]=r[a];return o[e]=n,d(t,this,o)}}function A(t){return z(t)||O(t)||!!(y&&t&&t[y])}function S(t){if("string"==typeof t||I(t))return t;var e=t+"";return"0"==e&&1/t==-a?"-0":e}function O(t){return q(t)&&h.call(t,"callee")&&(!w.call(t,"callee")||g.call(t)==n)}var z=Array.isArray;function F(t){return null!=t&&N(t.length)&&!B(t)}function q(t){return D(t)&&F(t)}function B(t){var e=P(t)?g.call(t):"";return e==o||e==l}function N(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=s}function P(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function D(t){return!!t&&"object"==typeof t}function I(t){return"symbol"==typeof t||D(t)&&g.call(t)==i}var M=k((function(t,e){return null==t?{}:j(t,v(_(e,1),S))}));t.exports=M}}]);