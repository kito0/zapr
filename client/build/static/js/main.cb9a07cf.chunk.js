(this.webpackJsonpzapr=this.webpackJsonpzapr||[]).push([[0],{113:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),c=a.n(r),o=a(10),i=a.n(o),s=a(16),l=a(25),d=a(20),b=a(90),j=Object(b.a)({palette:{primary:{main:"rgb(15, 15, 15)",contrastText:"#959b9b"},secondary:{main:"#5e3333",contrastText:"#959b9b"}}}),u=(a(113),a(169)),p=a(14),h=Object(u.a)((function(e){return{space:{height:"70px"},logo:{maxWidth:"100px",filter:"brightness(61%)"},menuButton:{marginRight:e.spacing(4)},title:{marginLeft:e.spacing(2)},search:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(p.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(p.b)(e.palette.common.white,.2)},width:"100%",marginLeft:e.spacing(20),marginRight:e.spacing(40)},searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%",paddingLeft:e.spacing(6)},inputInput:{padding:e.spacing(1,1,1,0),transition:e.transitions.create("width"),width:"100%"},usernav:{position:"absolute",right:"10px"},userButton:{margin:"0 7px","&:hover":{color:"#5e3333"}}}})),x=a(89),O=a.n(x),g=a(175),m=a(176),f=a(178),v=a(179),y=a(171),N=a(173),w=a(174),T=a(65),C=a(194),A=a(177),E=Object(r.createContext)(null);function R(){var e=h(),t=Object(d.b)(),a=t.isAuthenticated,o=t.logout,i=Object(r.useContext)(E),b=(i.search,i.setSearch),j=c.a.useState(null),u=Object(s.a)(j,2),p=(u[0],u[1]);return Object(n.jsxs)("div",{className:e.header,children:[Object(n.jsx)(y.a,{color:"primary",children:Object(n.jsxs)(N.a,{children:[Object(n.jsx)("img",{src:"https://i.pinimg.com/originals/cc/11/7f/cc117f49be98a60dcf1c3e380cbb86b9.gif",alt:"logo",className:e.logo}),Object(n.jsx)(l.a,{children:Object(n.jsx)(w.a,{component:l.b,to:"/",children:Object(n.jsx)(T.a,{variant:"h4",color:"secondary",className:e.title,children:Object(n.jsx)(l.b,{to:"/",children:"Zapr"})})})}),Object(n.jsxs)("div",{className:e.search,children:[Object(n.jsx)("div",{className:e.searchIcon,children:Object(n.jsx)(g.a,{})}),Object(n.jsx)(C.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){return b(e.target.value)}})]}),a&&Object(n.jsxs)("div",{className:e.usernav,children:[Object(n.jsx)(w.a,{component:l.b,to:"/newBlog",color:"inherit",className:e.userButton,children:Object(n.jsx)(m.a,{})}),Object(n.jsx)(w.a,{"aria-label":"show 17 new notifications",color:"inherit",className:e.userButton,children:Object(n.jsx)(A.a,{color:"secondary",children:Object(n.jsx)(f.a,{})})}),Object(n.jsx)(w.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",onClick:function(e){p(e.currentTarget)},color:"inherit",className:e.userButton,children:Object(n.jsx)(v.a,{})}),Object(n.jsx)(w.a,{color:"inherit",className:e.userButton,children:Object(n.jsx)(O.a,{onClick:function(){return o({returnTo:window.location.origin})}})})]})]})}),Object(n.jsx)("div",{className:e.space})]})}var S=a(11),k=a(64),I=a(4),B=Object(u.a)((function(e){return{li:{listStyleType:"none"},blogcard:{width:"100%",maxWidth:"400px",marginBottom:"20px",boxShadow:"10px 10px 5px rgba(0, 0, 0, 0.5)",backgroundColor:"rgba(0,0,0,0.3)"},card:{backgroundColor:"rgba(0,0,0,0.3)",color:"grey",width:"400px"},avatar:{backgroundColor:"rgba(50,30,30,0.5)"},media:{height:"144px",width:"100%"},footer:{display:"inline-block"},exp:{position:"relative",paddingLeft:"240px"},expand:{transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}})),L=a(182),D=a(186),_=a(187),P=a(188),G=a(180),W=a(181),F=a(195),H=a(91),M=a(196),q=a(183),z=a(184),J=a(185),Z=a(189),U=a(29),Y=a.n(U),V=a(52),X=a(92),K=a(26),Q=function(e,t){switch(t.type){case"GET_TRANSACTIONS":return Object(K.a)(Object(K.a)({},e),{},{loading:!1,transactions:t.payload});case"GET_BLOG":return Object(K.a)(Object(K.a)({},e),{},{loading:!1,blog:t.payload});case"DELETE_TRANSACTION":return Object(K.a)(Object(K.a)({},e),{},{transactions:e.transactions.filter((function(e){return e._id!==t.payload}))});case"ADD_TRANSACTION":return Object(K.a)(Object(K.a)({},e),{},{transactions:[].concat(Object(X.a)(e.transactions),[t.payload])});case"TRANSACTION_ERROR":return Object(K.a)(Object(K.a)({},e),{},{error:t.payload});default:return e}},$=a(53),ee=a.n($),te={transactions:[],blog:{},error:null,loading:!0},ae=Object(r.createContext)(te),ne=function(e){var t=e.children,a=Object(r.useReducer)(Q,te),c=Object(s.a)(a,2),o=c[0],i=c[1];function l(){return(l=Object(V.a)(Y.a.mark((function e(){var t;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.a.get("/api/transactions");case 3:t=e.sent,i({type:"GET_TRANSACTIONS",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),i({type:"TRANSACTION_ERR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(){return(d=Object(V.a)(Y.a.mark((function e(t){var a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.a.get("/api/transactions/blog/"+t);case 3:a=e.sent,i({type:"GET_BLOG",payload:a.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function b(){return(b=Object(V.a)(Y.a.mark((function e(t){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.a.delete("/api/transactions/".concat(t));case 3:i({type:"DELETE_TRANSACTION",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),i({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function j(){return(j=Object(V.a)(Y.a.mark((function e(t){var a,n;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json"}},console.log("POST ATTEMPTED"),e.prev=2,e.next=5,ee.a.post("/api/transactions",t,a);case 5:n=e.sent,i({type:"ADD_TRANSACTION",payload:n.data.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),i({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}return Object(n.jsx)(ae.Provider,{value:{transactions:o.transactions,blog:o.blog,error:o.error,laoding:o.loading,getTransactions:function(){return l.apply(this,arguments)},getBlog:function(e){return d.apply(this,arguments)},deleteTransaction:function(e){return b.apply(this,arguments)},addTransaction:function(e){return j.apply(this,arguments)}},children:t})};function re(e){var t=e.transaction,a=Object(d.b)().user,o=B(),i=Object(r.useContext)(ae).deleteTransaction,b=Object(r.useState)(null),j=Object(s.a)(b,2),u=j[0],p=j[1],h=c.a.useState(!1),x=Object(s.a)(h,2),O=x[0],g=x[1],m=a.name.split(" "),f="";try{f=f+m[0].charAt(0)+m[1].charAt(0)}catch(y){f+=m[0].charAt(0)}var v=function(){p(null)};return Object(n.jsx)("div",{className:o.blogcard,children:Object(n.jsxs)(G.a,{className:o.card,children:[Object(n.jsx)(W.a,{avatar:Object(n.jsx)(F.a,{"aria-label":"user",className:o.avatar,children:f}),action:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(w.a,{"aria-label":"settings","aria-haspopup":"true",color:"secondary",onClick:function(e){p(e.currentTarget)},children:Object(n.jsx)(L.a,{})}),Object(n.jsx)(H.a,{id:"simple-menu",anchorEl:u,keepMounted:!0,open:Boolean(u),onClose:v,children:Object(n.jsx)(M.a,{onClick:function(){v(),i(t._id)},children:"Delete"})})]}),title:t.title,subheader:t.timestamp}),Object(n.jsx)(l.b,{to:"/blog/"+t._id,children:Object(n.jsx)(q.a,{className:o.media,image:"https://www.ilac.com/wp-content/uploads/2019/06/placeholder-600x400.png",title:"img title"})}),Object(n.jsxs)("div",{className:o.footer,children:[Object(n.jsx)(z.a,{children:Object(n.jsxs)(T.a,{variant:"body2",component:"p",children:[t.description,Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),t.createdAt.slice(0,10)]})}),Object(n.jsxs)(J.a,{disableSpacing:!0,children:[Object(n.jsx)(w.a,{"aria-label":"add to favorites",color:"secondary",children:Object(n.jsx)(D.a,{})}),Object(n.jsx)(w.a,{"aria-label":"share",color:"secondary",children:Object(n.jsx)(_.a,{})}),Object(n.jsx)("div",{className:o.exp,children:Object(n.jsx)(w.a,{className:Object(I.a)(o.expand,Object(k.a)({},o.expandOpen,O)),onClick:function(){g(!O)},"aria-expanded":O,"aria-label":"show more",color:"secondary",children:Object(n.jsx)(P.a,{})})})]}),Object(n.jsx)(Z.a,{in:O,timeout:"auto",unmountOnExit:!0,children:Object(n.jsx)(z.a,{children:Object(n.jsx)(T.a,{children:t.body})})})]})]})})}var ce=Object(u.a)((function(e){return{viewA:{width:"40%",height:"100%",maxHeight:"83.8vh",overflowY:"scroll",position:"relative",paddingLeft:"20px",paddingTop:"2vh"},viewB:{width:"60%",maxHeight:"83.8vh",overflowY:"scroll",padding:"1% 3%",display:"flex"},home:{display:"flex",maxHeight:"83.8vh"}}})),oe=Object(u.a)((function(e){return{blog:{width:"100%",maxWidth:"700px",height:"450px",boxShadow:"rgba(0, 0, 0, 0.2) 5px 5px, rgba(0, 0, 0, 0.15) 10px 10px, rgba(0, 0, 0, 0.1) 15px 15px, rgba(0, 0, 0, 0.075) 20px 20px, rgba(0, 0, 0, 0.05) 25px 25px",backgroundColor:"rgba(0,0,0,0.3)"},card:{backgroundColor:"rgba(0,0,0,.3)",color:"grey",width:"100%",height:"100%"},content:{padding:"10px 30px"}}}));function ie(){var e=oe(),t=Object(r.useContext)(ae),a=t.blog,c=t.getBlog,o=Object(d.b)().user,i=Object(S.f)().id;return console.log("BLOG RENDERED"),Object(r.useEffect)((function(){c(i)}),[c&&i]),Object(n.jsx)("div",{className:e.blog,children:Object(n.jsx)(G.a,{className:e.card,children:Object(n.jsxs)("div",{className:e.content,children:[Object(n.jsx)("h1",{children:a.title}),Object(n.jsx)("p",{children:Object(n.jsx)("small",{children:"Author: "+o.name})}),Object(n.jsx)("p",{children:a.description})," ",Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:a.body})]})})})}var se=Object(u.a)((function(e){return{newblog:{width:"100%",maxWidth:"700px",height:"450px",boxShadow:"10px 10px 5px rgba(0, 0, 0, 0.5)",backgroundColor:"rgba(0,0,0,0.3)"},card:{backgroundColor:"rgba(0,0,0,.3)",color:"grey",width:"100%",height:"100%"},box:{display:"flex",flexDirection:"column",alignItems:"flex-start",padding:"20px"},textfield:{color:"grey",alignSelf:"center",marginBottom:"10px",background:"transparent",backgroundColor:"rgba(0,0,0,0.1)"},button:{alignSelf:"center",margin:"5px 0px"},input:{color:"#959b9b"}}})),le=a(193),de=a(190);function be(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)(""),i=Object(s.a)(o,2),l=i[0],b=i[1],j=Object(r.useState)(""),u=Object(s.a)(j,2),p=u[0],h=u[1],x=Object(d.b)(),O=x.user,g=x.isAuthenticated,m=x.isLoading,f=se(),v=Object(r.useContext)(ae).addTransaction;if(m)return Object(n.jsx)("div",{children:"Loading ..."});return console.log("NEW BLOG PAGE RENDERED"),g&&Object(n.jsx)("div",{className:f.newblog,children:Object(n.jsx)(G.a,{className:f.card,children:Object(n.jsx)("div",{className:f.box,children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:a,description:l,body:p,user:O.name};v(t)},children:[Object(n.jsx)(le.a,{variant:"filled",label:"Title",color:"secondary",onChange:function(e){return c(e.target.value)},className:f.textfield,required:!0,fullWidth:!0,InputProps:{className:f.input},InputLabelProps:{className:f.input}}),Object(n.jsx)(le.a,{variant:"filled",label:"Description",color:"secondary",onChange:function(e){return b(e.target.value)},className:f.textfield,required:!0,fullWidth:!0,InputProps:{className:f.input},InputLabelProps:{className:f.input}}),Object(n.jsx)(le.a,{variant:"outlined",label:"Body",color:"secondary",onChange:function(e){return h(e.target.value)},className:f.textfield,required:!0,fullWidth:!0,multiline:!0,rows:"10",InputProps:{className:f.input},InputLabelProps:{className:f.input}}),Object(n.jsx)(de.a,{variant:"contained",type:"submit",color:"secondary",className:f.button,children:"Post"})]})})})})}function je(){var e=ce(),t=Object(r.useContext)(ae),a=t.transactions,c=t.getTransactions,o=Object(r.useContext)(E),i=o.search,l=o.setSearch,d=Object(r.useState)([]),b=Object(s.a)(d,2),j=b[0],u=b[1];return Object(r.useEffect)((function(){c()}),[]),Object(r.useEffect)((function(){u(""!==i?a.filter((function(e){return e.title.toLowerCase().includes(i.toLowerCase())})):a)}),[i,l,a]),console.log("HOME RENDERED"),console.log("search: "+i),console.log(j),console.log(a),Object(n.jsxs)("div",{className:e.home,children:[Object(n.jsx)("div",{className:e.viewA,children:j.reverse().map((function(e){return Object(n.jsx)(re,{transaction:e},e._id)}))}),Object(n.jsx)("div",{className:e.viewB,children:Object(n.jsxs)(S.c,{children:[Object(n.jsx)(S.a,{path:"/blog/:id",children:Object(n.jsx)(ie,{})}),Object(n.jsx)(S.a,{path:"/newBlog",children:Object(n.jsx)(be,{})})]})})]})}var ue=a(192),pe=a(191);function he(){var e=Object(d.b)(),t=e.isLoading,a=e.isAuthenticated,c=e.error,o=e.loginWithRedirect,i=Object(r.useState)(""),b=Object(s.a)(i,2),u=b[0],p=b[1];return t?Object(n.jsx)(pe.a,{color:"primary",size:"100"}):c?Object(n.jsxs)("div",{children:["Oops... ",c.message]}):a?Object(n.jsx)(ue.a,{theme:j,children:Object(n.jsx)(l.a,{children:Object(n.jsx)(ne,{children:Object(n.jsxs)(E.Provider,{value:{search:u,setSearch:p},children:[Object(n.jsx)(R,{}),Object(n.jsx)(je,{})]})})})}):o()}var xe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,197)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};i.a.render(Object(n.jsx)(d.a,{domain:"kito0.us.auth0.com",clientId:"ZcMjaUtV1COyXj6D78AT6s6ZJCpcmcIr",redirectUri:window.location.origin,children:Object(n.jsx)(he,{})}),document.getElementById("root")),xe()}},[[138,1,2]]]);
//# sourceMappingURL=main.cb9a07cf.chunk.js.map