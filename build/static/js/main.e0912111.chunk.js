(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{19:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t(14),r=t.n(a),o=(t(19),t(3)),u=t(0),i=function(e){var n=e.filter,t=e.handleChange;return Object(u.jsxs)("div",{children:["filter shown with ",Object(u.jsx)("input",{onChange:t,value:n})]})},s=function(e){var n=e.newName,t=e.newNumber,c=e.handleSubmit,a=e.handleNameChange,r=e.handleNumberChange;return Object(u.jsxs)("form",{onSubmit:c,children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{onChange:a,value:n})]}),Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{onChange:r,value:t})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var n=e.persons,t=e.deletePerson;return Object(u.jsx)("div",{children:n.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:[e.name," ",e.number]}),Object(u.jsx)("button",{onClick:function(){return t(e)},children:"X"})]},e.name)}))})},h=function(e){var n=e.message;if(""===n.text)return null;var t="notification ".concat(n.type);return Object(u.jsx)("div",{className:t,children:n.text})},l=t(4),b=t.n(l),j="/api/persons",f=function(){return b.a.get(j).then((function(e){return e.data}))},m=function(e){return b.a.post(j,e).then((function(e){return e.data}))},O=function(e){return b.a.delete("".concat(j,"/").concat(e)).then((function(e){return e.data}))},p=function(e,n){return b.a.put("".concat(j,"/").concat(e),n).then((function(e){return e.data}))},x=function(){var e=Object(c.useState)([]),n=Object(o.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)(""),l=Object(o.a)(r,2),b=l[0],j=l[1],x=Object(c.useState)(""),v=Object(o.a)(x,2),w=v[0],g=v[1],y=Object(c.useState)(""),C=Object(o.a)(y,2),N=C[0],S=C[1],k=Object(c.useState)({text:"",type:""}),D=Object(o.a)(k,2),P=D[0],A=D[1];Object(c.useEffect)((function(){f().then((function(e){a(e)}))}),[]);var E=function(){m({name:b,number:w}).then((function(e){a(t.concat(e)),j(""),g(""),J({text:"Added ".concat(e.name),type:"success"})})).catch((function(e){var n=e.response.data.message;J({text:n,type:"error"})}))},I=function(e){p(e,{name:b,number:w}).then((function(n){var c=t.map((function(t){return t.id!==e?t:n}));a(c),j(""),g(""),J({text:"Changed the number of ".concat(n.name),type:"success"})})).catch((function(e){J({text:"Information of ".concat(b," has already been removed from server"),type:"error"})}))},J=function(e){A(e),setTimeout((function(){A({text:"",type:""})}),3e3)},L=t.filter((function(e){var n=e.name.toLowerCase(),t=e.number,c=N.toLowerCase();return n.includes(c)||t.includes(c)}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(h,{message:P}),Object(u.jsx)(i,{filter:N,handleChange:function(e){S(e.target.value)}}),Object(u.jsx)("h2",{children:"Add new"}),Object(u.jsx)(s,{handleSubmit:function(e){e.preventDefault();var n=t.find((function(e){return e.name===b}));return n&&w&&window.confirm("".concat(b," is already added to phonebook, replace the old number with a new one?"))?I(n.id):n?window.alert("".concat(b," is already added to phonebook")):void E()},handleNameChange:function(e){j(e.target.value)},handleNumberChange:function(e){g(e.target.value)},newName:b,newNumber:w}),Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)(d,{persons:L,deletePerson:function(e){if(window.confirm("Delete ".concat(e.name," ?"))){var n=e.id;O(n).then((function(c){a(t.filter((function(e){return e.id!==n}))),J({text:"Deleted ".concat(e.name),type:"success"})}))}}})]})};r.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.e0912111.chunk.js.map