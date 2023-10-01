"use strict";(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[985],{34985:function(t,e,o){o.r(e),o.d(e,{default:function(){return g}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"account-settings-info-view"},[e("a-row",{attrs:{gutter:16,type:"flex",justify:"center"}},[e("a-col",{attrs:{order:t.isMobile?2:1,md:24,lg:16}},[e("a-form",{attrs:{layout:"vertical"}},[e("a-form-item",{attrs:{label:t.$t("account.settings.basic.nickname")}},[e("a-input",{attrs:{placeholder:t.$t("account.settings.basic.nickname-message")}})],1),e("a-form-item",{attrs:{label:t.$t("account.settings.basic.profile")}},[e("a-textarea",{attrs:{rows:"4",placeholder:t.$t("account.settings.basic.profile-message")}})],1),e("a-form-item",{attrs:{label:t.$t("account.settings.basic.email"),required:!1}},[e("a-input",{attrs:{placeholder:"example@ant.design"}})],1),e("a-form-item",[e("a-button",{attrs:{type:"primary"}},[t._v(t._s(t.$t("account.settings.basic.update")))])],1)],1)],1),e("a-col",{style:{minHeight:"180px"},attrs:{order:1,md:24,lg:8}},[e("div",{staticClass:"ant-upload-preview",on:{click:function(e){return t.$refs.modal.edit(1)}}},[e("a-icon",{staticClass:"upload-icon",attrs:{type:"cloud-upload-o"}}),e("div",{staticClass:"mask"},[e("a-icon",{attrs:{type:"plus"}})],1),e("img",{attrs:{src:t.option.img}})],1)])],1),e("avatar-modal",{ref:"modal",on:{ok:t.setavatar}})],1)},i=[],n=function(){var t=this,e=t._self._c;return e("a-modal",{attrs:{title:"修改头像",visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading,width:800,footer:null},on:{cancel:t.cancelHandel}},[e("a-row",[e("a-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[e("vue-cropper",{ref:"cropper",attrs:{img:t.options.img,info:!0,autoCrop:t.options.autoCrop,autoCropWidth:t.options.autoCropWidth,autoCropHeight:t.options.autoCropHeight,fixedBox:t.options.fixedBox},on:{realTime:t.realTime}})],1),e("a-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[e("div",{staticClass:"avatar-upload-preview"},[e("img",{style:t.previews.img,attrs:{src:t.previews.url}})])])],1),e("br"),e("a-row",[e("a-col",{attrs:{lg:2,md:2}},[e("a-upload",{attrs:{name:"file",beforeUpload:t.beforeUpload,showUploadList:!1}},[e("a-button",{attrs:{icon:"upload"}},[t._v("选择图片")])],1)],1),e("a-col",{attrs:{lg:{span:1,offset:2},md:2}},[e("a-button",{attrs:{icon:"plus"},on:{click:function(e){return t.changeScale(1)}}})],1),e("a-col",{attrs:{lg:{span:1,offset:1},md:2}},[e("a-button",{attrs:{icon:"minus"},on:{click:function(e){return t.changeScale(-1)}}})],1),e("a-col",{attrs:{lg:{span:1,offset:1},md:2}},[e("a-button",{attrs:{icon:"undo"},on:{click:t.rotateLeft}})],1),e("a-col",{attrs:{lg:{span:1,offset:1},md:2}},[e("a-button",{attrs:{icon:"redo"},on:{click:t.rotateRight}})],1),e("a-col",{attrs:{lg:{span:2,offset:6},md:2}},[e("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.finish("blob")}}},[t._v("保存")])],1)],1)],1)},r=[],s=(o(41539),o(78783),o(33948),o(60285),o(41637),{data:function(){return{visible:!1,id:null,confirmLoading:!1,fileList:[],uploading:!1,options:{img:"",autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixedBox:!0},previews:{}}},methods:{edit:function(t){this.visible=!0,this.id=t},close:function(){this.id=null,this.visible=!1},cancelHandel:function(){this.close()},changeScale:function(t){t=t||1,this.$refs.cropper.changeScale(t)},rotateLeft:function(){this.$refs.cropper.rotateLeft()},rotateRight:function(){this.$refs.cropper.rotateRight()},beforeUpload:function(t){var e=this,o=new FileReader;return o.readAsDataURL(t),o.onload=function(){e.options.img=o.result},!1},finish:function(t){var e=this,o=this,a=new FormData;"blob"===t?this.$refs.cropper.getCropBlob((function(t){var i=window.URL.createObjectURL(t);e.model=!0,e.modelSrc=i,a.append("file",t,e.fileName),e.$http.post("https://www.mocky.io/v2/5cc8019d300000980a055e76",a,{contentType:!1,processData:!1,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(t){o.$message.success("上传成功"),o.$emit("ok",t.url),o.visible=!1}))})):this.$refs.cropper.getCropData((function(t){e.model=!0,e.modelSrc=t}))},okHandel:function(){var t=this;t.confirmLoading=!0,setTimeout((function(){t.confirmLoading=!1,t.close(),t.$message.success("上传头像成功")}),2e3)},realTime:function(t){this.previews=t}}}),c=s,l=o(43736),u=(0,l.Z)(c,n,r,!1,null,"04bacecc",null),p=u.exports,d=o(22373),f={mixins:[d.c],components:{AvatarModal:p},data:function(){return{preview:{},option:{img:"/avatar2.jpg",info:!0,size:1,outputType:"jpeg",canScale:!1,autoCrop:!0,autoCropWidth:180,autoCropHeight:180,fixedBox:!0,fixed:!0,fixedNumber:[1,1]}}},methods:{setavatar:function(t){this.option.img=t}}},m=f,h=(0,l.Z)(m,a,i,!1,null,"7b41badc",null),g=h.exports},22373:function(t,e,o){o.d(e,{c:function(){return n}});var a=o(23711),i=o(20629),n={computed:(0,a.Z)((0,a.Z)({},(0,i.rn)({layout:function(t){return t.app.layout},navTheme:function(t){return t.app.theme},primaryColor:function(t){return t.app.color},colorWeak:function(t){return t.app.weak},fixedHeader:function(t){return t.app.fixedHeader},fixedSidebar:function(t){return t.app.fixedSidebar},contentWidth:function(t){return t.app.contentWidth},autoHideHeader:function(t){return t.app.autoHideHeader},isMobile:function(t){return t.app.isMobile},sideCollapsed:function(t){return t.app.sideCollapsed},multiTab:function(t){return t.app.multiTab}})),{},{isTopMenu:function(){return"topmenu"===this.layout}}),methods:{isSideMenu:function(){return!this.isTopMenu}}}}}]);