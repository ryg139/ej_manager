(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0da516"],{"6aa6":function(e,r,d){"use strict";d.r(r);var t=function(){var e=this,r=e.$createElement,d=e._self._c||r;return d("div",{staticClass:"details"},[d("el-link",{attrs:{type:"primary"},on:{click:e.backHandler}},[e._v("返回")]),e._v(" "),d("p",[e._v("订单编号："+e._s(e.orderbyid.id))]),e._v(" "),d("p",[e._v("下单时间："+e._s(e.orderbyid.orderTime))]),e._v(" "),d("p",[e._v("订单状态："+e._s(e.orderbyid.status))]),e._v(" "),d("p",[e._v("员工编号："+e._s(e.orderbyid.waiterId))]),e._v(" "),d("p",[e._v("顾客："+e._s(e.orderbyid.customer.realname))]),e._v(" "),d("p",[e._v("顾客手机号："+e._s(e.orderbyid.customer.telephone))])],1)},a=[],i=d("db72"),n=d("2f62"),o={data:function(){return{}},created:function(){this.findOrderbyId(this.$route.params.id)},computed:Object(i["a"])({},Object(n["d"])("order",["orderbyid"])),methods:Object(i["a"])({},Object(n["b"])("order",["findOrderbyId"]),{backHandler:function(){this.$router.push({name:"order"})}})},s=o,c=d("2877"),u=Object(c["a"])(s,t,a,!1,null,null,null);r["default"]=u.exports}}]);