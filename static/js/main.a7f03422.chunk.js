(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,function(e,t,a){e.exports={background:"ContactForm_background__RkETX",container:"ContactForm_container__2t4gu",screen:"ContactForm_screen__6MFyB",screenHeader:"ContactForm_screenHeader__uwuJ9",screenHeaderLeft:"ContactForm_screenHeaderLeft__86va8",screenHeaderButton:"ContactForm_screenHeaderButton__37tIv",close:"ContactForm_close__3oON-",maximize:"ContactForm_maximize__1tOJl",minimize:"ContactForm_minimize__1LfBf",screenHeaderRight:"ContactForm_screenHeaderRight__2eODr",screenHeaderEllipsis:"ContactForm_screenHeaderEllipsis__2kGel",screenBody:"ContactForm_screenBody__Auk6c",screenBodyItem:"ContactForm_screenBodyItem__2CzGl",left:"ContactForm_left__1L3qp",appTitle:"ContactForm_appTitle__KtmBM",appContact:"ContactForm_appContact__1Kl-A",appFormGroup:"ContactForm_appFormGroup__HFfRz",appFormControl:"ContactForm_appFormControl__2ZFbc",appFormButton:"ContactForm_appFormButton___7UP7"}},,,,,,function(e,t,a){e.exports={card:"Contact_card__qDjZ_",cardContent:"Contact_cardContent__19BGb",cardButton:"Contact_cardButton__3Qqm0"}},,function(e,t,a){e.exports={screenBodyItem:"Filter_screenBodyItem__1caZY",left:"Filter_left__2ItLk",appFormGroup:"Filter_appFormGroup__2riYK",appFormControl:"Filter_appFormControl__ca6X5"}},,,function(e,t,a){e.exports={container:"ContactList_container__UJ0M3",cardContainer:"ContactList_cardContainer__RmCCj"}},,,function(e,t,a){e.exports={container:"Container_container__3krLY"}},,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(14),o=a.n(r),s=(a(20),a(21),a(13)),i=a(11),l=a(3),d=a(4),m=a(6),u=a(5),j=a(25),p=a(15),b=a.n(p),h=a(0);var _=function(e){var t=e.children;return Object(h.jsx)("div",{className:b.a.container,children:t})},O=a(8),f=a(1),C=a.n(f),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var a=t.target,n=a.name,c=a.value;e.setState(Object(O.a)({},n,c))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(h.jsx)("form",{onSubmit:this.handleSubmit,children:Object(h.jsx)("div",{className:C.a.background,children:Object(h.jsx)("div",{className:C.a.container,children:Object(h.jsxs)("div",{className:C.a.screen,children:[Object(h.jsxs)("div",{className:C.a.screenHeader,children:[Object(h.jsxs)("div",{className:C.a.screenHeaderLeft,children:[Object(h.jsx)("div",{className:"".concat(C.a.screenHeaderButton," ").concat(C.a.close)}),Object(h.jsx)("div",{className:"".concat(C.a.screenHeaderButton," ").concat(C.a.maximize)}),Object(h.jsx)("div",{className:"".concat(C.a.screenHeaderButton," ").concat(C.a.minimize)})]}),Object(h.jsxs)("div",{className:C.a.screenHeaderRight,children:[Object(h.jsx)("div",{className:C.a.screenHeaderEllipsis}),Object(h.jsx)("div",{className:C.a.screenHeaderEllipsis}),Object(h.jsx)("div",{className:C.a.screenHeaderEllipsis})]})]}),Object(h.jsx)("div",{className:C.a.screenBody,children:Object(h.jsxs)("div",{className:C.a.screenBodyItem,children:[Object(h.jsxs)("label",{className:C.a.appFormGroup,children:["Name",Object(h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange,className:C.a.appFormControl})]}),Object(h.jsxs)("label",{className:C.a.appFormGroup,children:["Number",Object(h.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange,className:C.a.appFormControl})]}),Object(h.jsx)("button",{className:C.a.appFormButton,children:"Add contact"})]})})]})})})})}}]),a}(n.Component),x=v,F=a(9),N=a.n(F),g=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.filter,a=e.onChange;return Object(h.jsx)("div",{className:N.a.screenBodyItem,children:Object(h.jsxs)("label",{className:N.a.appFormGroup,children:["Find contacts by name",Object(h.jsx)("input",{type:"text",name:"filter",value:t,onChange:a,className:N.a.appFormControl})]})})}}]),a}(n.Component),y=g,B=a(12),k=a.n(B),H=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:k.a.container,children:Object(h.jsx)("ul",{className:"list ".concat(k.a.cardContainer),children:this.props.children})})}}]),a}(n.Component),S=H,I=a(7),z=a.n(I),w=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.contact,a=t.name,n=t.number,c=t.id,r=e.deleteContact;return Object(h.jsx)("li",{className:z.a.card,children:Object(h.jsxs)("div",{className:z.a.cardContent,children:[Object(h.jsx)("p",{className:z.a.cardInfo,children:a}),Object(h.jsx)("p",{className:z.a.cardInfo,children:n}),Object(h.jsx)("button",{className:z.a.cardButton,onClick:function(){return r(c)},children:"Delete contact"})]})})}}]),a}(n.Component),A=w,G=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[],filter:""},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.formSubmitHandler=function(t){var a=e.state.contacts,n=t.name,c=Object(j.a)(),r=Object(i.a)(Object(i.a)({},t),{},{id:c});a.some((function(e){return e.name.includes(n)}))?window.alert("".concat(n," is already in contacts")):e.setState((function(e){var t=e.contacts;return{contacts:[].concat(Object(s.a)(t),[r])}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.filterContacts=function(){var t=e.state,a=t.contacts,n=t.filter;return console.log(a),Object(s.a)(a).filter((function(e){return e.name.toLowerCase().includes(n)}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("contacts"));e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(e,t){t.contacts.length!==this.state.contacts.length&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.filterContacts,t=this.formSubmitHandler,a=this.changeFilter,n=this.deleteContact,c=this.state.filter,r=e();return Object(h.jsxs)(_,{children:[Object(h.jsx)("h1",{className:"title",children:"Phonebook"}),Object(h.jsx)(x,{onSubmit:t}),Object(h.jsx)("h2",{className:"title",children:"Contacts"}),Object(h.jsx)(y,{onChange:a,filter:c}),Object(h.jsx)(S,{deleteContact:n,children:r.map((function(e){var t=Object(j.a)();return Object(h.jsx)(A,{contact:e,deleteContact:n},t)}))})]})}}]),a}(n.Component),L=G;o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.a7f03422.chunk.js.map