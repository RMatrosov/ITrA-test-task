(this.webpackJsonpimagepage=this.webpackJsonpimagepage||[]).push([[0],{127:function(e,r,n){"use strict";n.r(r);var t=n(0),a=n.n(t),o=n(24),c=n.n(o),d=(n(98),n(99),n(171)),i=n(172),m=n(17),u=n(168),s=n(173),l=n(174),p=n(175),b=n(176),j=n(177),f=n(164),O=n(84),h=n.n(O),g=n(2),x=Object(f.a)({text:{height:100},deleteBtn:{position:"absolute",right:5,top:5},card:{position:"relative"}}),v=function(e){var r=e.card,n=e.onCardDelete,t=e.setCardToPopup,a=x();return Object(g.jsxs)(u.a,{sx:{width:150},className:a.card,children:[Object(g.jsxs)(s.a,{onClick:function(){return t(r)},children:[Object(g.jsx)(l.a,{component:"img",height:"150",image:r.thumbnailUrl,alt:r.title}),Object(g.jsx)(p.a,{children:Object(g.jsx)(b.a,{gutterBottom:!0,variant:"body1",className:a.text,children:r.title})})]}),Object(g.jsx)(j.a,{"aria-label":"delete",onClick:function(){return n(r.id)},className:a.deleteBtn,children:Object(g.jsx)(h.a,{})})]})},y=n(30),C=n.n(y),E=n(46),w="SET_LOADED",T="SET_IMAGES",_="DELETE_CARD",S="SET_OPEN",I="SET_CURRENT_IMAGES",k="SET_TOTAL_ITEM_COUNT",B="SET_CURRENT_PAGE",N="SET_SORT_BY",P=n(64),D=n.n(P),L=function(){var e=Object(E.a)(C.a.mark((function e(r,n,t){var a,o,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="http://jsonplaceholder.typicode.com".concat(t?"/albums/".concat(t):"","/photos?").concat(r?"_page=".concat(r):""),e.prev=1,e.next=4,D.a.get(a);case 4:return o=e.sent,c=o.data,e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r,n,t){return e.apply(this,arguments)}}(),A=function(){var e=Object(E.a)(C.a.mark((function e(r){var n,t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://jsonplaceholder.typicode.com".concat(r?"/albums/".concat(r):"","/photos?"),e.prev=1,e.next=4,D.a.get(n);case 4:return t=e.sent,a=t.data,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}(),G=function(e){return{type:S,payload:e}},R=function(){var e=Object(m.b)(),r=Object(m.c)((function(e){return e.images})),n=r.images,t=r.isLoaded;function a(r){window.confirm("Delete?")&&e(function(e){return{type:_,payload:e}}(r))}function o(r){e(function(e){return{type:I,payload:e}}(r)),e(G(!0))}return Object(g.jsx)("div",{children:Object(g.jsx)(d.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:4,children:t?n.map((function(e){return Object(g.jsx)(d.a,{item:!0,xs:6,sm:3,md:3,children:Object(g.jsx)(v,{card:e,setCardToPopup:o,onCardDelete:a})},e.id)})):Array(10).fill(0).map((function(e,r){return Object(g.jsx)(d.a,{item:!0,xs:6,sm:3,md:3,children:Object(g.jsx)(i.a,{variant:"rectangular",width:150,height:287},r)},r)}))})})},M=n(180),U=n(163),F=n(167),W=Object(f.a)({btnGroup:{display:"flex",alignItems:"center",justifyContent:"center",paddingTop:40,paddingBottom:40}}),z=function(){var e=Object(m.b)(),r=W(),n=Object(m.c)((function(e){return e.paginate})),t=n.totalItemCount,a=n.currentPage,o=n.defaultItemsCount,c=Math.ceil(t/o);return Object(g.jsx)("div",{className:r.btnGroup,children:Object(g.jsx)(U.a,{spacing:2,children:Object(g.jsx)(F.a,{page:a,count:c,onChange:function(r,n){e(function(e){return{type:B,payload:e}}(n))},variant:"outlined",shape:"rounded"})})})},J=n(165),X=n(178),V={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:600,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},Y=function(){var e=Object(m.b)(),r=Object(m.c)((function(e){return e.images})),n=r.popupOpen,t=r.currentImages;return Object(g.jsx)("div",{children:Object(g.jsx)(J.a,{open:n,onClose:function(){e(G(!1))},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(g.jsx)(X.a,{sx:V,children:Object(g.jsx)(l.a,{component:"img",height:"600",image:null===t||void 0===t?void 0:t.url,alt:null===t||void 0===t?void 0:t.title})})})})},q=n(169),H=n(179),K=[{name:"all",order:""},{name:"1",order:"1"},{name:"2",order:"2"},{name:"3",order:"3"},{name:"4",order:"4"},{name:"5",order:"5"},{name:"6",order:"6"},{name:"7",order:"7"},{name:"8",order:"8"},{name:"9",order:"9"},{name:"10",order:"10"},{name:"11",order:"11"},{name:"12",order:"12"},{name:"13",order:"13"},{name:"14",order:"14"},{name:"15",order:"15"},{name:"16",order:"16"},{name:"17",order:"17"},{name:"18",order:"18"},{name:"19",order:"19"},{name:"20",order:"20"},{name:"21",order:"21"},{name:"22",order:"22"},{name:"23",order:"23"},{name:"24",order:"24"},{name:"25",order:"25"},{name:"26",order:"26"},{name:"27",order:"27"},{name:"28",order:"28"},{name:"29",order:"29"},{name:"30",order:"30"},{name:"31",order:"31"},{name:"32",order:"32"},{name:"33",order:"33"},{name:"34",order:"34"},{name:"35",order:"35"},{name:"36",order:"36"},{name:"37",order:"37"},{name:"38",order:"38"},{name:"39",order:"39"},{name:"40",order:"40"},{name:"41",order:"41"},{name:"42",order:"42"},{name:"43",order:"43"},{name:"44",order:"44"},{name:"45",order:"45"},{name:"46",order:"46"},{name:"47",order:"47"},{name:"48",order:"48"},{name:"49",order:"49"},{name:"50",order:"50"},{name:"51",order:"51"},{name:"52",order:"52"},{name:"53",order:"53"},{name:"54",order:"54"},{name:"55",order:"55"},{name:"56",order:"56"},{name:"57",order:"57"},{name:"58",order:"58"},{name:"59",order:"59"},{name:"60",order:"60"},{name:"61",order:"61"},{name:"62",order:"62"},{name:"63",order:"63"},{name:"64",order:"64"},{name:"65",order:"65"},{name:"66",order:"66"},{name:"67",order:"67"},{name:"68",order:"68"},{name:"69",order:"69"},{name:"70",order:"70"},{name:"71",order:"71"},{name:"72",order:"72"},{name:"73",order:"73"},{name:"74",order:"74"},{name:"75",order:"75"},{name:"76",order:"76"},{name:"77",order:"77"},{name:"78",order:"78"},{name:"79",order:"79"},{name:"80",order:"80"},{name:"81",order:"81"},{name:"82",order:"82"},{name:"83",order:"83"},{name:"84",order:"84"},{name:"85",order:"85"},{name:"86",order:"86"},{name:"87",order:"87"},{name:"88",order:"88"},{name:"89",order:"89"},{name:"90",order:"90"},{name:"91",order:"91"},{name:"92",order:"92"},{name:"93",order:"93"},{name:"94",order:"94"},{name:"95",order:"95"},{name:"96",order:"96"},{name:"97",order:"97"},{name:"98",order:"98"},{name:"99",order:"99"},{name:"100",order:"100"}],Q=Object(f.a)({root:{margin:"40px 0 40px 0",width:"100%"},btnGroup:{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},btn:{backgroundColor:"#f9f9f9",transition:"background-color 0.1s ease-in-out",margin:"0 auto",height:20,fontSize:"x-small",fontWeight:"bold","&:hover":{border:"1px solid black"}},activeBtn:{backgroundColor:"#282828",color:"#fff",fontWeight:"bold",transition:"background-color 0.1s ease-in-out",margin:"0 auto",height:20,width:20,fontSize:"x-small","&:hover":{backgroundColor:"#282828"}}}),Z=function(e){var r=e.onSortBy,n=Q(),t=Object(m.c)((function(e){return e.sort.sortBy})).name;return Object(g.jsx)(q.a,{component:"fieldset",className:n.root,children:Object(g.jsx)("div",{className:n.btnGroup,children:K.map((function(e,a){return Object(g.jsx)(H.a,{onClick:function(){return r(e)},className:t===e.name?n.activeBtn:n.btn,children:e.name},"".concat(e.name,"_").concat(a))}))})})};var $=function(){var e=Object(m.b)(),r=Object(m.c)((function(e){return e.paginate})).currentPage,n=Object(m.c)((function(e){return e.sort.sortBy})),a=n.name,o=n.order;return Object(t.useEffect)((function(){e(function(e,r,n){return function(){var t=Object(E.a)(C.a.mark((function t(a){var o,c;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:w,payload:!1}),t.next=3,L(e,r,n);case 3:return o=t.sent,t.next=6,A(n);case 6:c=t.sent,a({type:T,payload:o}),a({type:k,payload:c.length});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(r,a,o))}),[e,r,a,o]),Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)(M.a,{maxWidth:"md",children:[Object(g.jsx)(Z,{onSortBy:function(r){var n=r.order,t=r.name;e(function(e,r){return{type:N,payload:{name:e,order:r}}}(t,n))}}),Object(g.jsx)(Y,{}),Object(g.jsx)(R,{}),Object(g.jsx)(z,{})]})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,181)).then((function(r){var n=r.getCLS,t=r.getFID,a=r.getFCP,o=r.getLCP,c=r.getTTFB;n(e),t(e),a(e),o(e),c(e)}))},re=n(38),ne=n(86),te=n(16),ae=function(e,r){var n=e.images.filter((function(e){return e.id!==r}));return Object(te.a)(Object(te.a)({},e),{},{images:n})},oe={images:[],isLoaded:!1,popupOpen:!1,currentImages:null},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case T:return Object(te.a)(Object(te.a)({},e),{},{images:r.payload,isLoaded:!0});case w:return Object(te.a)(Object(te.a)({},e),{},{isLoaded:r.payload});case S:return Object(te.a)(Object(te.a)({},e),{},{popupOpen:r.payload});case I:return Object(te.a)(Object(te.a)({},e),{},{currentImages:r.payload});case _:return ae(e,r.payload);default:return e}},de={totalItemCount:0,currentPage:1,defaultItemsCount:10},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case k:return Object(te.a)(Object(te.a)({},e),{},{totalItemCount:r.payload});case B:return Object(te.a)(Object(te.a)({},e),{},{currentPage:r.payload});default:return e}},me={sortBy:{order:null,name:"all"}},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,r=arguments.length>1?arguments[1]:void 0;return r.type===N?Object(te.a)(Object(te.a)({},e),{},{sortBy:r.payload}):e},se=Object(re.b)({images:ce,paginate:ie,sort:ue}),le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||re.c,pe=Object(re.d)(se,le(Object(re.a)(ne.a)));c.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(m.a,{store:pe,children:Object(g.jsx)($,{})})}),document.getElementById("root")),ee()},98:function(e,r,n){},99:function(e,r,n){}},[[127,1,2]]]);
//# sourceMappingURL=main.13d938b8.chunk.js.map