(function(e){function t(t){for(var l,n,i=t[0],o=t[1],c=t[2],u=0,m=[];u<i.length;u++)n=i[u],s[n]&&m.push(s[n][0]),s[n]=0;for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],l=!0,i=1;i<a.length;i++){var o=a[i];0!==s[o]&&(l=!1)}l&&(r.splice(t--,1),e=n(n.s=a[0]))}return e}var l={},s={app:0},r=[];function n(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=l,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(a,l,function(t){return e[t]}.bind(null,l));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=o;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"142c":function(e,t,a){},2856:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var l=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{padding:"100px"},attrs:{id:"app"}},[a("el-table",{attrs:{rows:e.rows,structure:e.structure,detailed:!0},on:{"row-clicked":e.handleRowClicked},scopedSlots:e._u([{key:"link",fn:function(t){return[a("a",{attrs:{href:"#"},on:{click:function(t){return t.stopPropagation(),e.handleClick(t)}}},[e._v("Click me!")])]}}])})],1)},r=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"salamander-table"},[a("div",{staticClass:"table-filter"},[e._l(e.structure.filter(function(e){return e.visible}),function(t,l){return a("div",{key:l,staticClass:"table-cell table-header",class:["type-"+t.type,"size-"+t.size]},["select"===t.type?a("p-check",{staticClass:"p-curve p-svg p-jelly table-check",attrs:{color:"primary",name:"check"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[a("span",{staticClass:"vue-table-checkmark-icon svg svg-icon",attrs:{slot:"extra"},slot:"extra"})]):a("span",{staticClass:"small c-pointer"},[t.sortable?a("span",{on:{click:function(a){a.preventDefault(),e.order={type:t.type,column:t.key,asc:!!e.order&&!e.order.asc}}}},[a("span",{staticClass:"us-none"},[e._v(e._s(t.label))]),a("svg",{staticClass:"sort-icon",class:[e.order&&e.order.column===t.key?{asc:e.order.asc,desc:!e.order.asc}:null],attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 5 8"}},[a("g",[a("path",{staticClass:"top",attrs:{fill:"#0f3261",d:"M4.633 5c.391 0 .485.248.207.559L2.752 7.884a.333.333 0 0 1-.505 0L.16 5.56C-.118 5.25-.024 5 .366 5z"}})]),a("g",[a("path",{staticClass:"bottom",attrs:{fill:"#0f3261",d:"M4.633 3c.391 0 .485-.248.207-.559L2.752.116a.333.333 0 0 0-.505 0L.16 2.44C-.118 2.75-.024 3 .366 3z"}})])])]):a("span",[e._v("\n                    "+e._s(t.label)+"\n                ")])])],1)}),a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:function(){e.showAlterTableColumns=!1},expression:"() => { showAlterTableColumns = false  }"}],staticClass:"table-cell table-edit",on:{click:function(t){e.showAlterTableColumns=!e.showAlterTableColumns}}},[a("span",{staticClass:"change-columns"},[e._v("Change")]),e.showAlterTableColumns?a("div",{staticClass:"alter-table-columns",on:{click:function(e){e.stopPropagation()}}},e._l(e.structure.filter(function(e){return e.label}),function(t,l){return a("div",{key:l,staticClass:"item"},[a("p-check",{staticClass:"p-curve p-svg p-jelly table-check",attrs:{color:"primary",name:"check"},model:{value:t.visible,callback:function(a){e.$set(t,"visible",a)},expression:"item.visible"}},[a("span",{staticClass:"vue-table-checkmark-icon svg svg-icon",attrs:{slot:"extra"},slot:"extra"}),e._v("\n                        "+e._s(t.label)+"\n                    ")])],1)}),0):e._e()])],2),a("div",{staticClass:"table-container",style:{"max-height":e.height}},e._l(e.filteredRows,function(t,l){return a("el-row",{key:l+(t.selected?"_selected":""),class:{"can-hover":e.detailed},attrs:{data:t,structure:e.structure,editable:e.editable},on:{click:function(a){return e.rowClicked(t.id)}},scopedSlots:e._u([e._l(e.structure.filter(function(e){return"slot"===e.type}),function(a){return{key:a.key,fn:function(){return[e._t(a.key,null,{row:t})]},proxy:!0}})],null,!0)})}),1)])},i=[],o=(a("ac6a"),a("55dd"),a("386d"),a("6762"),a("2fdb"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table-row"},[e._l(e.structure.filter(function(e){return e.visible}),function(t,l){return a("div",{key:l,staticClass:"table-cell",class:["type-"+t.type,"size-"+t.size],on:{click:function(a){return e.handleClick(t.type)}}},["select"===t.type?a("p-check",{staticClass:"p-curve p-svg p-jelly",attrs:{color:"primary",name:"check"},model:{value:e.data.selected,callback:function(t){e.$set(e.data,"selected",t)},expression:"data.selected"}},[a("span",{staticClass:"vue-table-checkmark-icon svg svg-icon",attrs:{slot:"extra"},slot:"extra"})]):e._e(),"user"===t.type?[a("div",{staticClass:"avatar sm text-avatar"},[a("span",[e._v(e._s(e.data.first_name.charAt(0))+" "+e._s(e.data.last_name?e.data.last_name.charAt(0):""))])]),a("div",{staticClass:"small my-auto"},[e._v("\n                "+e._s(e.data.first_name)+"\n                "+e._s(e.data.last_name)+"\n            ")])]:e._e(),"text"===t.type?a("div",{staticClass:"small my-auto"},[e._v("\n            "+e._s(e.data[t.key])+"\n        ")]):e._e(),"translated"===t.type?a("div",{staticClass:"small my-auto"},[e._v("\n            "+e._s(e.translate("table."+e.data[t.key]))+"\n        ")]):e._e(),"date"===t.type?a("div",{staticClass:"small my-auto"},[e._v("\n            "+e._s(e.displayDate(e.data[t.key]))+"\n        ")]):e._e(),"slot"===t.type?a("div",{staticClass:"small my-auto"},[e._t(t.key)],2):e._e(),"boolean"===t.type&&e.data[t.key]?a("svg",{staticClass:"boolean-check success",attrs:{slot:"extra",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},slot:"extra"},[a("g",[a("g",[a("g",[a("path",{attrs:{fill:"#c0ae66",d:"M16.496 0a.75.75 0 0 0-.516.227l-9.97 9.97-3.97-3.97a.75.75 0 1 0-1.06 1.06l4.5 4.5a.75.75 0 0 0 1.06 0l10.5-10.5A.75.75 0 0 0 16.496 0z"}})])])])]):e._e(),"boolean"!==t.type||e.data[t.key]?e._e():a("svg",{staticClass:"boolean-check error",attrs:{slot:"extra",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},slot:"extra"},[a("g",[a("g",[a("g",[a("path",{attrs:{fill:"#ff2d55",d:"M1.12.368a.75.75 0 0 0-.523 1.287L7.942 9 .597 16.345a.75.75 0 1 0 1.061 1.06l7.345-7.344 7.344 7.345a.75.75 0 1 0 1.061-1.061L10.063 9l7.345-7.345a.75.75 0 1 0-1.06-1.06L9.002 7.94 1.658.595A.75.75 0 0 0 1.12.368z"}})])])])]),"label"===t.type?a("div",{staticClass:"small my-auto cell-label"},[e._v("\n            "+e._s(e.data[t.key])+"\n        ")]):e._e(),"labels"===t.type?a("div",{staticClass:"cell-labels"},[e.data[t.key].length>0?a("div",{staticClass:"label"},[e._v("\n                "+e._s(e.translate(e.data[t.key][0]))+"\n            ")]):e._e(),e.data[t.key].length-1>0?a("div",{staticClass:"label-extra"},[e._v("\n                +"+e._s(e.data[t.key].length-1)+"\n            ")]):e._e()]):e._e()],2)}),e.editable?a("div",{staticClass:"table-cell table-edit ml-auto d-flex pr-0"},[a("svg",{staticClass:"settings-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 4 16"},on:{click:function(e){e.stopPropagation()}}},[a("g",[a("g",[a("path",{attrs:{fill:"#1d232d",d:"M.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm0-6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm0 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"}})])])])]):e._e()],2)}),c=[],d=a("2624"),u=a.n(d),m={components:{PCheck:u.a},props:{data:{type:Object,required:!0},structure:{type:Array,required:!0},editable:{type:Boolean,default:!0}},methods:{handleClick:function(e){"select"!==e&&this.$emit("click")},translate:function(e){return"function"===typeof this.$t?this.$t(e):e},displayDate:function(e){"function"===typeof this.$moment&&this.$moment(e).format("DD MMM YYYY");var t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=new Date(e);return a.getDate()+" "+t[a.getMonth()]+" "+a.getFullYear()}}},b=m,p=a("2877"),f=Object(p["a"])(b,o,c,!1,null,null,null);f.options.__file="row.vue";var v=f.exports,h={components:{ElRow:v,PCheck:u.a},props:{rows:{type:Array,required:!0},height:{type:String,default:"600px"},structure:{type:Array,require:!0},detailed:{type:Boolean,require:!1,default:!1},searchable:{type:Array,require:!1,default:function(){return[]}},editable:{type:Boolean,default:!1},theme:{default:function(){return{primary:"#0f3261",success:"green",error:"#f72d55",icons:"#0f3261"}}}},data:function(){return{selected:!1,showAlterTableColumns:!1,order:null,localRows:[],search:""}},mounted:function(){this.localRows=this.rows;var e=document.documentElement;this.theme.primary&&e.style.setProperty("--salamander-theme-primary",this.theme.primary),this.theme.success&&e.style.setProperty("--salamander-theme-success",this.theme.success),this.theme.warning&&e.style.setProperty("--salamander-theme-warning",this.theme.warning),this.theme.danger&&e.style.setProperty("--salamander-theme-danger",this.theme.danger),this.theme.icons&&e.style.setProperty("--salamander-theme-icons",this.theme.icons)},methods:{rowClicked:function(e){this.detailed&&this.$emit("row-clicked",e)}},computed:{filteredRows:function(){var e=this,t=[];return t=this.searchable.length>0?this.localRows.filter(function(t){if(e.searchable.some(function(a){return t[a].toLowerCase().includes(e.search.toLowerCase())}))return t}):this.localRows,this.order&&("text"===this.order.type&&t.sort(function(t,a){if(t[e.order.column]&&a[e.order.column])return t[e.order.column].localeCompare(a[e.order.column])}),"number"===this.order.type&&t.sort(function(t,a){return t[e.order.column]-a[e.order.column]}),"user"===this.order.type&&t.sort(function(e,t){if(e.first_name&&t.first_name)return e.first_name.localeCompare(t.first_name)}),"date"===this.order.type&&t.sort(function(t,a){return new Date(t[e.order.column])-new Date(a[e.order.column])}),"boolean"===this.order.type&&t.sort(function(t,a){return t[e.order.column]-a[e.order.column]}),this.order.asc&&t.reverse()),t}},watch:{rows:function(){this.localRows=this.rows},selected:function(){var e=this.selected;this.localRows.forEach(function(t,a){t.selected=e})}},directives:{"click-outside":{bind:function(e,t){var a=t.modifiers.bubble,l=function(l){(a||!e.contains(l.target)&&e!==l.target)&&t.value(l)};e.__vueClickOutside__=l,document.getElementById("app").addEventListener("click",l,!0)},unbind:function(e){document.getElementById("app").removeEventListener("click",e.__vueClickOutside__),e.__vueClickOutside__=null}}}},y=h,_=(a("7b98"),a("aad2"),Object(p["a"])(y,n,i,!1,null,null,null));_.options.__file="table.vue";var g=_.exports,k={name:"app",components:{ElTable:g},methods:{handleClick:function(){alert("Clicked on slot content")},handleRowClicked:function(e){alert("Clicked on row with id: "+e)}},data:function(){return{rows:[{id:1,first_name:"Alexander",last_name:"Salamander",email:"alexander@salamander.be",active:!0,labels:["label 1"],registered:"2019-01-08"},{id:2,first_name:"Mr.",last_name:"Salamander",email:"mr@salamander.be",active:!1,labels:["label 1","label 2","label 3"],registered:"2019-01-08"},{id:3,first_name:"Mr.",last_name:"Baldwin",email:"baldwin@salamander.be",active:!1,labels:["label 1","label 2"],registered:"2019-01-08"},{id:4,first_name:"Alexander",last_name:"Salamander",email:"alexander@salamander.be",active:!0,labels:["label 1"],registered:"2019-01-08"},{id:5,first_name:"Mr.",last_name:"Salamander",email:"mr@salamander.be",active:!1,labels:["label 1","label 2","label 3"],registered:"2019-01-08"},{id:6,first_name:"Mr.",last_name:"Baldwin",email:"baldwin@salamander.be",active:!1,labels:["label 1","label 2"],registered:"2019-01-08"},{id:7,first_name:"Alexander",last_name:"Salamander",email:"alexander@salamander.be",active:!0,labels:["label 1"],registered:"2019-01-08"},{id:8,first_name:"Mr.",last_name:"Salamander",email:"mr@salamander.be",active:!1,labels:["label 1","label 2","label 3"],registered:"2019-01-08"},{id:9,first_name:"Mr.",last_name:"Baldwin",email:"baldwin@salamander.be",active:!1,labels:["label 1","label 2"],registered:"2019-01-08"},{id:10,first_name:"Alexander",last_name:"Salamander",email:"alexander@salamander.be",active:!0,labels:["label 1"],registered:"2019-01-08"},{id:11,first_name:"Mr.",last_name:"Salamander",email:"mr@salamander.be",active:!1,labels:["label 1","label 2","label 3"],registered:"2019-01-08"},{id:12,first_name:"Mr.",last_name:"Baldwin",email:"baldwin@salamander.be",active:!1,labels:["label 1","label 2"],registered:"2019-01-08"}],structure:[{visible:!0,label:null,type:"select",sortable:!1},{visible:!0,label:"User",type:"user",sortable:!0},{visible:!0,label:"Email",type:"text",key:"email",sortable:!0},{visible:!0,label:"Active.",type:"boolean",key:"active",sortable:!0,size:"xsmall"},{visible:!0,label:"Labels.",type:"labels",key:"labels",sortable:!0,size:"normal"},{visible:!0,label:"Registered",type:"date",key:"registered",sortable:!0,size:"small"},{visible:!0,label:"Link",type:"slot",key:"link",size:"normal"}]}}},w=k,C=(a("5c0b"),Object(p["a"])(w,s,r,!1,null,null,null));C.options.__file="App.vue";var x=C.exports;new l["a"]({render:function(e){return e(x)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var l=a("2856"),s=a.n(l);s.a},"7b98":function(e,t,a){"use strict";var l=a("142c"),s=a.n(l);s.a},aad2:function(e,t,a){"use strict";var l=a("d362"),s=a.n(l);s.a},d362:function(e,t,a){}});
//# sourceMappingURL=app.1e0bb01a.js.map