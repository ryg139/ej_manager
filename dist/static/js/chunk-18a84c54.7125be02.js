(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18a84c54"],{"171f":function(e,t,r){"use strict";var l=r("7d73"),s=r.n(l);s.a},"7d73":function(e,t,r){},c42d:function(e,t,r){"use strict";r.r(t);var l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"custermer"},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.toAddHandler}},[e._v("添加")]),e._v(" "),r("div",{staticClass:"select"},[r("el-input",{attrs:{clearable:"true",placeholder:"请输入状态"},model:{value:e.list.status,callback:function(t){e.$set(e.list,"status",t)},expression:"list.status"}}),e._v(" "),r("div",{staticClass:"btn"},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.submitHanlderbyStatus}},[e._v("查询")])],1)],1),e._v(" "),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.custermers,stripe:""}},[r("el-table-column",{attrs:{align:"center",prop:"id",label:"编号",width:"80px"}}),e._v(" "),r("el-table-column",{attrs:{align:"center",prop:"realname",label:"姓名"}}),e._v(" "),r("el-table-column",{attrs:{align:"center",prop:"telephone",label:"手机号"}}),e._v(" "),r("el-table-column",{attrs:{align:"center",prop:"status",label:"状态"}}),e._v(" "),r("el-table-column",{attrs:{align:"center",fixed:"right",label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.deleteHandler(t.row.id)}}},[e._v("删除")]),e._v(" "),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.editHandler(t.row)}}},[e._v("编辑")]),e._v(" "),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.detailsHandler(t.row.id)}}},[e._v("详情")])]}}])})],1),e._v(" "),r("el-pagination",{attrs:{layout:"total,prev, pager, next","page-size":this.list.pageSize,total:e.total},on:{"current-change":e.changePageNum}}),e._v(" "),r("el-dialog",{attrs:{title:e.title,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{attrs:{clearable:"true",placeholder:"请输入用户名"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"姓名",prop:"realname"}},[r("el-input",{attrs:{clearable:"true",placeholder:"请输入姓名"},model:{value:e.form.realname,callback:function(t){e.$set(e.form,"realname",t)},expression:"form.realname"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"手机号",prop:"telephone"}},[r("el-input",{attrs:{clearable:"true",placeholder:"请输入手机号"},model:{value:e.form.telephone,callback:function(t){e.$set(e.form,"telephone",t)},expression:"form.telephone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password",clearable:"true",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"状态",prop:"status"}},[r("el-select",{attrs:{placeholder:"请选择状态"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[r("el-option",{attrs:{label:"禁用",value:"禁用"}}),e._v(" "),r("el-option",{attrs:{label:"启用",value:"启用"}})],1)],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){return e.close("ruleForm")}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submit("ruleForm")}}},[e._v("确 定")])],1)],1)],1)},s=[],a=r("db72"),i=r("2f62"),o={data:function(){return{list:{page:0,pageSize:6},title:"添加顾客信息",form:{},ruleForm:{username:"",realname:"",telephone:"",password:"",status:""},dialogFormVisible:!1,rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],realname:[{required:!0,message:"请输入姓名",trigger:"blur"}],telephone:[{required:!0,message:"请输入手机号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],status:[{required:!0,message:"请选择状态",trigger:"change"}]}}},created:function(){this.queryCustermer(this.list)},computed:Object(a["a"])({},Object(i["d"])("custermer",["custermers","total"])),methods:Object(a["a"])({},Object(i["b"])("custermer",["findAllcustermer","saveCustermer","deleteCustermer","queryCustermer"]),{toAddHandler:function(){this.form={},this.dialogFormVisible=!0},close:function(e){this.dialogFormVisible=!1,this.$refs[e].resetFields()},submit:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.saveCustermer(t.form),t.dialogFormVisible=!1,t.$message({showClose:!0,message:"更新成功",type:"success"})}))},deleteHandler:function(e){var t=this;this.$confirm("此操作将永久删除这条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.deleteCustermer(e),t.$message({type:"success",message:"删除成功!"})})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},editHandler:function(e){this.title="修改顾客信息",this.form=e,this.dialogFormVisible=!0},detailsHandler:function(e){this.$router.push({name:"details",params:{id:e}})},changePageNum:function(e){this.list.page=e-1,this.queryCustermer(this.list)},submitHanlderbyStatus:function(){this.queryCustermer(this.list)},bacthDeletehandler:function(){}})},n=o,u=(r("171f"),r("2877")),c=Object(u["a"])(n,l,s,!1,null,"e6d50b70",null);t["default"]=c.exports}}]);