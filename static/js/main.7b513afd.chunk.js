(this["webpackJsonpstarting-react"]=this["webpackJsonpstarting-react"]||[]).push([[0],{13:function(e,n,t){},17:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var a,r,l,o,c=t(0),i=t.n(c),u=t(5),m=t.n(u),s=(t(13),t(3)),d=t(1),E=t(2),g=(t(17),function(e){var n=e.pokemon,t=e.onClick;return i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",{key:n.id},i.a.createElement("td",null,n.name.english),i.a.createElement("td",null,n.type.join(", ")),i.a.createElement("td",null,i.a.createElement("button",{onClick:function(){return t(n)}},"More Information"))))}),f=function(e){var n=e.name.english,t=e.base;return i.a.createElement("div",null,i.a.createElement("h2",null,n),i.a.createElement("table",null,i.a.createElement("tbody",null,Object.keys(t).map((function(e){return i.a.createElement("tr",{key:e},i.a.createElement("td",null,e),i.a.createElement("td",null,t[e]))})))))},h=E.a.h1(a||(a=Object(d.a)(["\n  text-align: center;\n  color: orange;\n"]))),p=E.a.div(r||(r=Object(d.a)(["\n  margin: auto;\n  width: 800px;\n  padding-top: 1em;\n"]))),b=E.a.div(l||(l=Object(d.a)(["\n  display: grid;~\n  grid-template-columns: 80% 20%;\n  grid-column-gap: 1rem;\n"]))),v=E.a.input(o||(o=Object(d.a)(["\n  width: 100%;\n  padding: 0.2rem;\n  font-size: large;\n"])));var k=function(){var e=i.a.useState(""),n=Object(s.a)(e,2),t=n[0],a=n[1],r=i.a.useState(null),l=Object(s.a)(r,2),o=l[0],c=l[1],u=i.a.useState(null),m=Object(s.a)(u,2),d=m[0],E=m[1];return i.a.useEffect((function(){fetch("/starting-react/pokemon.json").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]),o?i.a.createElement(p,null,i.a.createElement(h,null,"Pokemon Search"),i.a.createElement(b,null,i.a.createElement("div",null,i.a.createElement(v,{type:"text",value:t,onChange:function(e){return a(e.target.value)}}),i.a.createElement("table",{width:"100%"},i.a.createElement("tbody",null,o.filter((function(e){return e.name.english.toLocaleLowerCase().includes(t.toLocaleLowerCase())})).slice(0,20).map((function(e){return i.a.createElement(g,{pokemon:e,onClick:function(e){return E(e)}})}))))),d&&i.a.createElement(f,d))):i.a.createElement("div",null,"Loading data")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,n,t){e.exports=t(18)}},[[8,1,2]]]);
//# sourceMappingURL=main.7b513afd.chunk.js.map