(this.webpackJsonpoms=this.webpackJsonpoms||[]).push([[0],{36:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(10),r=c.n(s),o=(c(36),c(17)),l=c.n(o),i=c(27),j=c(5),d=c.p+"static/media/office-2.5582bc03.jpeg",b=c(4),m=c(11),u=c.n(m),h=c(3);var O=function(){var e=Object(a.useState)("password"),t=Object(j.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)("fa fa-eye-slash"),r=Object(j.a)(s,2),o=r[0],m=r[1],O=Object(a.useState)(""),x=Object(j.a)(O,2),p=x[0],f=x[1],g=Object(a.useState)(""),k=Object(j.a)(g,2),v=k[0],N=k[1],S=Object(b.f)(),y=Object(a.useState)(!1),w=Object(j.a)(y,2),C=w[0],I=w[1],U=Object(a.useState)(!1),A=Object(j.a)(U,2),E=A[0],R=A[1],P=localStorage.getItem("tokenAdmin"),T=localStorage.getItem("tokenUser");Object(a.useEffect)((function(){S(P?"/home":T?"/dashboard":"/")}),[P,T,S]);var B=function(){var e=Object(i.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,u.a.post("".concat("https://omsbackendapi.herokuapp.com/","api/login"),{name:p,password:v});case 4:200===(c=e.sent).data.status&&(!0===c.data.response.user.admin?(localStorage.setItem("tokenAdmin",JSON.stringify(c.data.response.token)),S("/home")):!1===c.data.response.user.admin&&(localStorage.setItem("tokenUsers",JSON.stringify(c.data.response.token)),S("/dashboard"))),e.next=14;break;case 8:e.prev=8,e.t0=e.catch(1),f(p),N(""),422===e.t0.response.status&&R(!0),401===e.t0.response.status&&I(!0);case 14:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){if(!0===C||!0===E){var e=setTimeout((function(){C&&I(!1),E&&R(!1)}),5e3);return function(){clearTimeout(e)}}}),[E,C]),Object(h.jsx)("div",{className:"main",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"left-side col-md-6 col-sm-12",children:Object(h.jsx)("img",{src:d,alt:"background",className:"back-image"})}),Object(h.jsxs)("div",{className:"right-side col-md-6 col-sm-12 d-flex flex-column justify-content-center px-5",children:[Object(h.jsxs)("h1",{children:["Welcome to",Object(h.jsx)("span",{className:"d-block",children:" Office Administration System"})]}),Object(h.jsx)("p",{children:"We make job life easy for everone"}),Object(h.jsx)("div",{className:"alert alert-danger text-center m-3 ".concat(!0===E?"d-block":"d-none"),role:"alert",children:"Name or password cannot be empty!"}),Object(h.jsx)("div",{className:"alert alert-danger text-center m-3 ".concat(!0===C?"d-block":"d-none"),role:"alert",children:"Name or Password is incorrect!"}),Object(h.jsxs)("form",{className:"my-3",onSubmit:B,children:[Object(h.jsxs)("div",{className:"form-group mb-3",children:[Object(h.jsx)("label",{children:"User Name"}),Object(h.jsx)("input",{onChange:function(e){f(e.target.value)},type:"text",className:"form-control",placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1"})]}),Object(h.jsxs)("div",{className:"form-group mb-3",children:[Object(h.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Password"}),Object(h.jsx)("input",{onChange:function(e){N(e.target.value)},type:c,className:"form-control",id:"exampleInputPassword1",placeholder:"\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf"}),Object(h.jsx)("span",{className:"togglePassword",onClick:function(){"password"===c?(n("text"),m("fa fa-eye")):(n("password"),m("fa fa-eye-slash"))},children:Object(h.jsx)("i",{className:o})})]}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("button",{className:"btn btn-danger float-right",type:"submit",children:"Login"})})]})]})]})})},x=c(9),p=c(6);var f=function(){var e=localStorage.getItem("tokenAdmin"),t=Object(a.useState)([]),c=Object(j.a)(t,2),n=c[0],s=c[1],r=Object(b.f)(),o=function(){u.a.get("".concat("https://omsbackendapi.herokuapp.com/","api/index"),{headers:{Authorization:"Bearer 48|KLRu1k2HXCX2RN9CPRlHCBWshR69CU37rtpxa9kG"}}).then((function(e){e.data.users?s(e.data.users):s([])})).catch((function(e){return console.log(e)}))};return Object(a.useEffect)((function(){e?o():r("/")}),[e,r]),Object(h.jsxs)("div",{className:"container home",children:[Object(h.jsx)(p.i,{color:"dark",dark:!0,className:"mb-3",children:Object(h.jsxs)(p.k,{className:"w-100 mx-3",children:[Object(h.jsx)(p.b,{lg:9,children:Object(h.jsx)(p.j,{href:"/home",className:"m-3",children:" OAS Team"})}),Object(h.jsx)(p.b,{lg:3,children:Object(h.jsx)(p.g,{children:Object(h.jsxs)(p.h,{children:[Object(h.jsx)(x.b,{className:"btn btn-primary m-2",to:"/add",children:"Add User"}),Object(h.jsx)(x.b,{className:"btn btn-light m-2",to:"/",onClick:function(){e&&localStorage.removeItem("tokenAdmin")},children:"Log out"})]})})})]})}),Object(h.jsxs)("table",{className:"table table-striped border ",children:[Object(h.jsx)("thead",{className:" bg-dark text-white ",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Id"}),Object(h.jsx)("th",{scope:"col",children:"Username"}),Object(h.jsx)("th",{scope:"col",children:"Email"}),Object(h.jsx)("th",{scope:"col",children:"Operations"})]})}),Object(h.jsx)("tbody",{children:n.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"row",children:e.id}),Object(h.jsx)("td",{children:e.name}),Object(h.jsx)("td",{children:e.email}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return t=e.id,void u.a.delete("".concat("https://omsbackendapi.herokuapp.com/","api/delete/").concat(t),{headers:{Authorization:"Bearer 48|KLRu1k2HXCX2RN9CPRlHCBWshR69CU37rtpxa9kG"}}).then((function(e){o()})).catch((function(e){return console.log(e)}));var t},children:"Delete"})})]},t)}))})]})]})},g=c(14),k=c(18),v=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)({username:"",email:""}),r=Object(j.a)(s,2),o=r[0],l=r[1],i=Object(b.f)(),d=o.username,m=o.email,O=function(e){l(Object(k.a)(Object(k.a)({},o),{},Object(g.a)({},e.target.name,e.target.value)))};Object(a.useEffect)((function(){if(!0===c){var e=setTimeout((function(){n(!1)}),5e3);return function(){clearTimeout(e)}}}),[c]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{className:"text-center mb-4",children:"Add a user"}),Object(h.jsx)("div",{className:"alert alert-danger text-center m-3 ".concat(!0===c?"d-block":"d-none"),role:"alert",children:"Name or email address is invalid!"}),Object(h.jsxs)(p.c,{className:"container m-3",onSubmit:function(e){return function(e){e.preventDefault(),u.a.post("".concat("https://omsbackendapi.herokuapp.com/","api/register"),{name:o.username,email:o.email},{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e),l({username:"",email:""}),i("/home")})).catch((function(e){return 422===e.response.status?n(!0):n(!1)}))}(e)},children:[Object(h.jsxs)(p.d,{children:[Object(h.jsx)(p.f,{children:"Name"}),Object(h.jsx)(p.e,{type:"text",name:"username",placeholder:"Enter Name",value:d,onChange:function(e){return O(e)}})]}),Object(h.jsxs)(p.d,{children:[Object(h.jsx)(p.f,{children:"Email"}),Object(h.jsx)(p.e,{type:"email",placeholder:"Enter email",value:m,name:"email",onChange:function(e){return O(e)}})]}),Object(h.jsx)(p.a,{type:"submit",color:"success",children:"Submit"}),Object(h.jsx)(x.b,{to:"/home",className:"btn btn-danger m-2",children:"Cancel"})]})]})};var N=function(){var e=localStorage.getItem("tokenUsers"),t=Object(b.f)();return Object(a.useEffect)((function(){t(e?"/dashboard":"/")}),[e,t]),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{children:"welcome"}),Object(h.jsx)(x.b,{className:"btn btn-warning m-2",to:"/",onClick:function(){e&&localStorage.removeItem("tokenUsers")},children:"Log out"})]})};var S=function(){var e=localStorage.getItem("tokenAdmin"),t=localStorage.getItem("tokenUser");return Object(h.jsx)(x.a,{children:Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{exact:!0,path:"/",element:Object(h.jsx)(O,{})}),Object(h.jsx)(b.a,{exact:!0,path:"/home",element:Object(h.jsx)(f,{})}),Object(h.jsx)(b.a,{exact:!0,path:"/dashboard",element:Object(h.jsx)(N,{})}),t&&Object(h.jsx)(b.a,{exact:!0,path:"/dashboard",element:Object(h.jsx)(N,{})}),e&&Object(h.jsx)(b.a,{exact:!0,path:"/home",element:Object(h.jsx)(f,{})}),Object(h.jsx)(b.a,{exact:!0,path:"/add",element:Object(h.jsx)(v,{})}),Object(h.jsx)(b.a,{exact:!0,path:"*",element:Object(h.jsx)(O,{})})]})})};c(59),c(60),c(61);r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.6178d7ec.chunk.js.map