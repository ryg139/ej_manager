(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22637a"],{e85f:function(t,r,e){"use strict";e.r(r);var s=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("el-link",{attrs:{type:"primary"},on:{click:t.backHandler}},[t._v("返回")]),t._v(" "),e("p",[t._v("产品名称："+t._s(this.$route.params.id.name))]),t._v(" "),e("p",[t._v("产品价格："+t._s(this.$route.params.id.price))]),t._v(" "),e("p",[t._v("产品描述："+t._s(this.$route.params.id.description))]),t._v(" "),e("p",[t._v("产品主图:")]),e("div",{staticClass:"block"},[e("el-image",{attrs:{size:120,src:"http://134.175.100.63:8686/group1/"+this.src}})],1)],1)},a=[],i={data:function(){return{src:this.$route.params.id.photo}},created:function(){},methods:{backHandler:function(){this.$router.push({name:"product"})}}},n=i,c=e("2877"),o=Object(c["a"])(n,s,a,!1,null,null,null);r["default"]=o.exports}}]);