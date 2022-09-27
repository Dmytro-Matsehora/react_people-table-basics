(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{35:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(24),a=c(9),r=(c(33),c(34),c(4)),s=c(22),j=c(7),i=c(5),l=c(2),o=c(0),b=(c(35),c(3)),h=function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})};function d(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(37);var x=c(15),O=c.n(x),p=function(e){var t=e.to,c=e.text;return Object(b.jsx)(a.b,{end:!0,to:t,className:function(e){var t=e.isActive;return O()("navbar-item",{"has-background-grey-lighter":t})},children:c})},u=function(e){var t=e.to,c=e.text;return Object(b.jsx)(a.b,{to:t,className:function(e){var t=e.isActive;return O()("navbar-item",{"has-background-grey-lighter":t})},children:c})},m=function(e){var t=e.to,c=e.person,n=Object(l.j)().pathname;return Object(b.jsxs)("tr",{"data-cy":"person",className:"/people/".concat(c.slug)===n?"has-background-warning":"",children:[Object(b.jsx)("td",{children:Object(b.jsx)(a.b,{to:t,className:O()({"has-text-danger":"f"===c.sex}),children:c.name})}),Object(b.jsx)("td",{children:c.sex}),Object(b.jsx)("td",{children:c.born}),Object(b.jsx)("td",{children:c.died}),Object(b.jsx)("td",{children:c.mother?Object(b.jsx)(a.b,{to:"/people/".concat(c.mother.slug),className:O()({"has-text-danger":"f"===c.mother.sex}),children:c.mother.name}):c.motherName||"-"}),Object(b.jsx)("td",{children:c.father?Object(b.jsx)(a.b,{to:"/people/".concat(c.father.slug),children:c.father.name}):c.fatherName||"-"})]})},f=function(e){var t=e.people;return Object(b.jsx)("div",{className:"block",children:Object(b.jsx)("div",{className:"box table-container",children:Object(b.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Sex"}),Object(b.jsx)("th",{children:"Born"}),Object(b.jsx)("th",{children:"Died"}),Object(b.jsx)("th",{children:"Mother"}),Object(b.jsx)("th",{children:"Father"})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsx)(m,{to:"/people/".concat(e.slug),person:e})}))})]})})})},v=function(){return Object(b.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"})},g=function(){var e=Object(o.useState)(null),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(o.useState)(!1),x=Object(i.a)(a,2),O=x[0],m=x[1],g=function(){var e=Object(j.a)(Object(r.a)().mark((function e(){var t,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d();case 3:t=e.sent,c=t.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{mother:t.find((function(t){return t.name===e.motherName})),father:t.find((function(t){return t.name===e.fatherName}))})})),n(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),m(!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return g(),Object(b.jsxs)("div",{"data-cy":"app",children:[Object(b.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"navbar-brand",children:[Object(b.jsx)(p,{to:"/",text:"Home"}),Object(b.jsx)(u,{to:"people",text:"People"})]})})}),Object(b.jsx)("main",{className:"section",children:Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{path:"/",element:Object(b.jsx)("h1",{className:"title",children:"Home Page"})}),Object(b.jsx)(l.b,{path:"home",element:Object(b.jsx)(l.a,{to:"/",replace:!0})}),Object(b.jsxs)(l.b,{path:"people",children:[Object(b.jsx)(l.b,{index:!0,element:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"title",children:"People Page"}),!c&&!O&&Object(b.jsx)(h,{}),O&&Object(b.jsx)(v,{}),c&&c.length<1&&Object(b.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),c&&Object(b.jsx)(f,{people:c})]})}),Object(b.jsx)(l.b,{path:":slug",element:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"title",children:"People Page"}),!c&&!O&&Object(b.jsx)(h,{}),O&&Object(b.jsx)(v,{}),c&&Object(b.jsx)(f,{people:c})]})})]}),Object(b.jsx)(l.b,{path:"*",element:Object(b.jsx)("h1",{className:"title",children:"Page not found"})})]})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(b.jsx)(a.a,{children:Object(b.jsx)(g,{})}))}},[[38,1,2]]]);
//# sourceMappingURL=main.4e905c41.chunk.js.map