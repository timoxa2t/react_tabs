(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(3),a=c.n(n),i=c(5),s=c(1),d=(c(10),c(11),c(12),c(4)),b=c.n(d),o=c(0),r=function(t){var e=t.tab,c=t.isActive,n=t.onTabSelected,a=e.id,i=e.title;return Object(o.jsx)("li",{className:b()({"is-active":c}),"data-cy":"Tab",children:Object(o.jsx)("a",{href:"#".concat(a),"data-cy":"TabLink",onClick:function(){c||n(e)},children:i})})};var l=function(t){var e=t.tabs,c=t.onTabSelected,n=function(t,e){return t.find((function(t){return t.id===e}))||t[0]}(e,t.selectedTabId),a=n.id,i=n.content;return Object(o.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(o.jsx)("div",{className:"tabs is-boxed",children:Object(o.jsx)("ul",{children:e.map((function(t){return Object(o.jsx)(r,{tab:t,isActive:t.id===a,onTabSelected:c},t.id)}))})}),Object(o.jsx)("div",{className:"block","data-cy":"TabContent",children:i})]})},j=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}];var u=function(){var t,e=Object(s.useState)(j[0].id),c=Object(i.a)(e,2),n=c[0],a=c[1],d=(t=n,j.find((function(e){return e.id===t}))||j[0]);return Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("h1",{className:"title",children:"Selected tab is ".concat(d.title)}),Object(o.jsx)(l,{tabs:j,onTabSelected:function(t){a(t.id)},selectedTabId:n})]})};a.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b5b4dd3b.chunk.js.map