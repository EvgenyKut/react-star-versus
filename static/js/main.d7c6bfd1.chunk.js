(this["webpackJsonpstar-v"]=this["webpackJsonpstar-v"]||[]).push([[0],{33:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),r=a.n(n),c=a(26),i=a.n(c),o=a(13),l=a(3),h=a(4),d=a(6),j=a(5),u=(a(33),a(12)),m=a.n(u),b=a(17),p=function e(){var t=this;Object(l.a)(this,e),this._apiBase="https://swapi.py4e.com/api",this._imageBase="https://starwars-visualguide.com/assets/img",this.getResourse=function(){var e=Object(b.a)(m.a.mark((function e(a){var s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(a));case 2:if((s=e.sent).ok){e.next=5;break}throw new Error("Could not fetch this url: ".concat(t._apiBase).concat(a,".\n    Status: ").concat(s.status," "));case 5:return e.next=7,s.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._extractId=function(e){return e.url.match(/\/([0-9]*)\/$/)[1]},this.getAllPeople=Object(b.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResourse("/people");case 2:return a=e.sent,e.abrupt("return",a.results.map(t._transformPerson));case 4:case"end":return e.stop()}}),e)}))),this._transformPerson=function(e){return{id:t._extractId(e),name:e.name,mass:e.mass,length:e.height,birth:e.birth_year}},this.getPerson=function(){var e=Object(b.a)(m.a.mark((function e(a){var s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResourse("/people/".concat(a));case 2:return s=e.sent,e.abrupt("return",t._transformPerson(s));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllStarships=Object(b.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResourse("/starships");case 2:return a=e.sent,e.abrupt("return",a.results.map(t._transformStarship));case 4:case"end":return e.stop()}}),e)}))),this._transformStarship=function(e){return{id:t._extractId(e),name:e.name,length:e.MGLT,mass:e.length,hyperdrive:e.hyperdrive_rating,speed:e.MGLT,class:e.starship_class}},this.getStarship=function(){var e=Object(b.a)(m.a.mark((function e(a){var s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResourse("/starships/".concat(a));case 2:return s=e.sent,e.abrupt("return",t._transformStarship(s));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getPersonImage=function(e){var a=e.id;return"".concat(t._imageBase,"/characters/").concat(a,".jpg")},this.getStarshipImage=function(e){var a=e.id;return"".concat(t._imageBase,"/starships/").concat(a,".jpg")}},O=r.a.createContext(),v=O.Provider,f=O.Consumer,g=a(52),x=a(53),N=(a(35),function(e){var t=e.logo,a=e.value,n=e.dimension,r=e.variant,c=e.max;e.clazz;return Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:"logoBar",children:t}),Object(s.jsx)("div",{className:"bar",children:Object(s.jsx)(x.a,{animated:!0,now:a,striped:!0,max:c,variant:"".concat(r),label:"".concat(a," ").concat(n)})})]})}),A=(a(36),a(16)),S=function(e,t){return function(a){Object(d.a)(r,a);var n=Object(j.a)(r);function r(){var e;Object(l.a)(this,r);for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return(e=n.call.apply(n,[this].concat(a))).swapiService=new p,e.state={data:null},e}return Object(h.a)(r,[{key:"componentDidMount",value:function(){var e=this;t().then((function(t){e.setState({data:t})}))}},{key:"render",value:function(){var t=this.state.data;return t?Object(s.jsx)(e,Object(A.a)(Object(A.a)({},this.props),{},{data:t})):Object(s.jsx)("h2",{children:"Loading..."})}}]),r}(n.Component)},E=function(e){return function(t){return Object(s.jsx)(f,{children:function(a){return Object(s.jsx)(e,Object(A.a)(Object(A.a)({},t),{},{swapiService:a}))}})}},U=(a(37),a(38),function(){return Object(s.jsx)("div",{className:"lds-css",children:Object(s.jsxs)("div",{className:"lds-double-ring",children:[Object(s.jsx)("div",{}),Object(s.jsx)("div",{})]})})}),I=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={item:{},loading:!0,image:null},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.updateItem()}},{key:"componentDidUpdate",value:function(e){this.props.shipId!==e.shipId&&(this.setState({loading:!0}),this.updateItem())}},{key:"updateItem",value:function(){var e=this,t=this.props,a=t.shipId,s=t.getImageUrl,n=t.getDataItem;a&&n(a).then((function(t){e.setState({item:t,loading:!1,image:s(t)})}))}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.image,n=e.item;return t?Object(s.jsx)(U,{}):Object(s.jsxs)("div",{className:"person-card",children:[Object(s.jsx)("img",{className:"person-image",src:a,alt:"person"}),Object(s.jsx)("h5",{className:"item-name",children:n.name})]})}}]),a}(n.Component),w=E((function(e){var t=e.shipId,a=e.swapiService,n=a.getStarshipImage,r=a.getStarship;return Object(s.jsx)(I,{shipId:t,getImageUrl:n,getDataItem:r})})),k=E((function(e){var t=e.personId,a=e.swapiService,n=a.getPersonImage,r=a.getPerson;return Object(s.jsx)(I,{shipId:t,getImageUrl:n,getDataItem:r})})),y=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.health,a=e.attack,n=e.teamList,r=e.shipId,c=e.team,i=n.map((function(e){return Object(s.jsx)(k,{personId:e},e)})),o=c.toUpperCase();return Object(s.jsxs)("div",{className:"col-md-5 height",children:[Object(s.jsx)("div",{className:"header",children:Object(s.jsxs)("h1",{children:[o," TEAM"]})}),Object(s.jsxs)("div",{className:"battleArea",children:[Object(s.jsxs)("div",{className:"headBlock",children:[" ",Object(s.jsx)(w,{shipId:r}),Object(s.jsxs)("div",{className:"bars",children:[Object(s.jsx)(N,{value:t,logo:"Health",dimension:"hp",variant:"success",max:600}),Object(s.jsx)(N,{value:a,logo:"Attack",dimension:"damage",variant:"danger",max:400})," "]})]}),Object(s.jsxs)("div",{className:"photo-box",children:[Object(s.jsxs)("h4",{children:["Brave ",c," team:"]}),Object(s.jsx)("div",{className:"photos",children:i})]})]})]})}}]),a}(n.Component),W=(a(39),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.result,a=e.scores,n=1===t?"REBEL":"EMPIRE";return 0===t&&(a*=-1),Object(s.jsxs)("div",{className:"result-bar",children:[Object(s.jsx)("h2",{children:n}),Object(s.jsx)("span",{className:"scores",children:"WIN"}),Object(s.jsx)("h4",{children:"with"}),Object(s.jsxs)("span",{className:"scores-points",children:[a," points"]})]})}}]),a}(n.Component)),M=a(14),L=(a(40),function(e){var t=e.update,a=e.restart,n=t?Object(s.jsx)("span",{children:"(but we already sent droids to fix it)"}):Object(s.jsx)(M.b,{to:"/",children:Object(s.jsx)("span",{children:"(You can try to return to your Galaxy)"})}),r=a?Object(s.jsx)("span",{children:"(This battle is finished)"}):Object(s.jsx)("span",{children:"something has gone terribly wrong"});return Object(s.jsxs)("div",{className:"error-indicator",children:[Object(s.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABcVBMVEUAAACUMUKVNESUNUaTNEWTNEWTNUWUNEWUNEWUNEWTNEWUNEWUNEWVNEWVNESUNUeWMkOUNUWVNEWUNEWTM0aVNUSSN0mVNUaUNEWUNEWUNEWVNESSNESWLUuUNESUNEWUNEafQECUNEaUNUWXNEaUMkaUNEWVNUaVM0SUNEWUM0WdO06UM0SVM0WSNkeVNUCUNEWUNEWVNEaUNESTMUWVMkSXOEiUNEWUNUSVNUSVK0CUNEWVNEWQN0OUNEaVNESUNEWAQED/AACUNEWZM02UNEaTNUaVM0SVNUaUNEaTNESSN0mUNEWUNUaZMzOUNEWVM0WUNEWTNkWUNEWVNEaXLkaUNEWUNEWXOUKUNEWVM0WUNkWSMkeUNEWUNUWUNEWUNEWVNUSUM0aTNUaTMkSUNEaUNESUNEWUNESPMECUNEWUNkOUNEWTNESUNUaTNEWZM0CUNEWVNEaUNUWVNUWSNUSUNEWUNEWTNESUNEUAAAAeSPByAAAAeXRSTlMAH155k63H4fjr07qiiWwrLn7O45pSDh2N3vuvMRGK97AIde4sTOJqeP2pDaTaLxjIwYRPGikg7FZlDNK2F8aoegQB2wpYhzxbko4c9j4Fnn3zNNS7FsuyG/FzUT3+jF3lwm5XR2Lya3AQ+ibqU6WmFNZx6TBESqdASVNu+gAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCRwPAQ3scZC+AAACoUlEQVRYw6WX+WPSMBTH6z11OhXva4hnFR0MdBsymGzshLmjKEMZG7svd3jmv7fJo23SJDQl35+S9/I+TV7SHIYh16nTZ86eO3+h6+Kly91XrvYY4XTt+g3EKnLz1m3V6Dt37yGR7j94qBL+6HEvkioaiHgSe4raKvqsbfzzFyhIXS/bxL8yA+NtvX4j635cJdzW23fC+L6E1yTZn0qnU/1JCaH3vSD+Q8T1Dww6xsEBMWGIj898dL3ZYc88nOWjc/mRT1x8Ier6R8dox9goByiKEjDuus0J1jNhqgAmPfcUWFLT0ykoTSkAZkqeu4wNs2To2VlcLisAPnteM4MNc1CZI+k1AwE9dpP5Bfu7MYQWiWURmnoVq0KKC/Me50vGBXzFc4MLVbvbxLIEbZZIBQ+n1mqao3ryzYn/jmv15WKxYSG0Qkyr0GSVVFbsUqS5hrVcFw2FXbBpbFqH8joupyXr2QXM1BkzTN7GJkKbGzChQYAt1pwswNIulyFJhWQQwPLZt9kp2pbFO0nc2fXZS3t0/F5JFu9M4yTn2T/w4g/2hcH0J34I/IdH4Ds6lHydBiREDczj+MlJ/NhECoDgfbg9oLCrCah0Ev+TAvyy5yMfUt2/KcAfhBqGjrQBYYfQ9APCJjHvB4SdRg4QdiHxAFjKrS0L1LDkgL8cAH6mGmOrhukB/M6tbRuEt3d1wI5KFmP4jKqwI3PPBUsBUCUta6zRORe2FABWw85tM8Ia11oA37auLsnB0gHAPdps+bupBPAOVz5RagDneOenShFAXzA6yQF7xVHXP249KyoHW0utQC/o8RAA4T2Rumh2BqCvusFDEFx1mct2sIZEfehLKMcLr/v6Dw5D+8lj6D+69J99hvbDE0vz6Uuk9/gGKT3//wOKqXrHYMfrIgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wOS0yOFQxNTowMToxMyswMjowMIL/AEkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDktMjhUMTU6MDE6MTMrMDI6MDDzorj1AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==",alt:"error icon"}),Object(s.jsx)("span",{className:"boom",children:"BOOM!"}),r,n]})}),C=(a(46),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.restart;return Object(s.jsxs)("div",{className:"row mb2 test",children:[Object(s.jsx)("div",{className:"col-md-1"}),Object(s.jsx)("div",{className:"col-md-10",children:Object(s.jsx)(L,{update:!1,restart:e})}),Object(s.jsx)("div",{className:"col-md-1"})]})}}]),a}(n.Component)),B=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){for(var e=this.props,t=e.health,a=e.attack,n=e.teamList,r=e.shipId,c=[4,11,12,67,21,44],i=[],o=1;o<=3;){var l=c[Math.round(5*Math.random())];i.includes(l)||(i.push(l),o++)}var h=[9,22,48,28,22][Math.round(4*Math.random())],d=Math.round(300*Math.random())+200,j=Math.round(200*Math.random())+200,u=(t-j-(d-a)).toFixed(1),m=u>0?1:0;return console.log(n),0===n.length?Object(s.jsx)(C,{}):Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"row mb2 test",children:[Object(s.jsx)(y,{health:t,attack:a,teamList:n,shipId:r,team:"rebel"}),Object(s.jsx)("div",{className:"col-md-2",children:Object(s.jsx)(W,{result:m,scores:u})}),Object(s.jsx)(y,{health:d,attack:j,teamList:i,shipId:h,team:"empire"})]}),Object(s.jsx)(C,{restart:!0})]})}}]),a}(n.Component),T=(a(47),function(){return Object(s.jsx)("div",{className:"welcomeArea",children:Object(s.jsxs)("div",{className:"main",children:[Object(s.jsxs)("span",{className:"welcomeText",children:[" ","It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship. Choose the strongest team, start battle and win!"]}),Object(s.jsx)("div",{className:"goBtn",children:Object(s.jsx)(M.b,{to:"/chose_a_team",className:"link",children:Object(s.jsx)("div",{className:"StartBtn",children:Object(s.jsx)(g.a,{className:"StartBtn",variant:"warning",size:"lg",children:"Let's go!"})})})})]})})}),V=(a(48),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.score,a=e.label;return t?Object(s.jsxs)("div",{className:"item",children:[Object(s.jsxs)("p",{children:["Available ",a]}),Object(s.jsx)("span",{className:"scores",children:t})]}):Object(s.jsxs)("div",{className:"item",children:["Starship"===a?Object(s.jsx)("p",{children:"Starship"}):Object(s.jsx)("p",{children:"Team"}),Object(s.jsx)("div",{className:"check",children:Object(s.jsx)("i",{className:"fa fa-check  fa-5x green scoreCheck","aria-hidden":"true"})})]})}}]),a}(n.Component)),P=(a(49),"list-group-item"),D=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).clearItems=function(t){var a=e.props.selectedItems;return t.filter((function(e){return a.includes(Number(e.id))}))},e.renderItems=function(t){var a=e.props,n=a.onItemSelected,r=a.onSelect,c=a.activeItemsList;return t.map((function(e){var t=e.name,a=e.id;return P=c.includes(a)?"list-group-item important":"list-group-item",Object(s.jsxs)("li",{className:P,onClick:function(){return n(a)},children:[t,Object(s.jsx)("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:function(){return r(a)},children:Object(s.jsx)("i",{className:"fa fa-plus fa-lg"})})]},a)}))},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.data,t=this.renderItems(this.clearItems(e));return Object(s.jsx)("div",{children:Object(s.jsx)("ul",{className:"item-list list-group",children:t})})}}]),a}(n.Component),F=new p,R=F.getAllPeople,H=F.getAllStarships,G=S(D,R),Q=S(D,H),z=(a(50),function(e){var t=e.item,a=e.field,n=e.label;return Object(s.jsxs)("li",{className:"list-group-item",children:[Object(s.jsx)("span",{className:"term",children:n}),Object(s.jsx)("span",{children:t[a]})]})}),K=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={item:{},loading:!0,image:null},e.swapiService=new p,e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.updateItem()}},{key:"componentDidUpdate",value:function(e){this.props.itemId!==e.itemId&&(this.setState({loading:!0}),this.updateItem())}},{key:"updateItem",value:function(){var e=this,t=this.props,a=t.itemId,s=t.getImageUrl,n=t.getDataItem;a&&n(a).then((function(t){e.setState({item:t,loading:!1,image:s(t)})}))}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.image,n=e.item,c=this.state.item,i=c.name,o=c.mass,l=c.length;return t?Object(s.jsx)(U,{}):Object(s.jsxs)("div",{className:"person-details card",children:[Object(s.jsx)("img",{className:"person-image",src:a,alt:"person"}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h4",{children:i}),Object(s.jsx)("ul",{className:"list-group list-group-flush",children:r.a.Children.map(this.props.children,(function(e){return r.a.cloneElement(e,{item:n})}))}),Object(s.jsx)("span",{className:"starWarsSpan",children:"Health"}),Object(s.jsx)(x.a,{animated:!0,now:o,striped:!0,variant:"success",max:100,label:"".concat(o," hp")}),Object(s.jsx)("span",{className:"starWarsSpan",children:"Attack"}),Object(s.jsx)(x.a,{animated:!0,now:l,striped:!0,max:200,variant:"danger",label:"".concat(l," damage")})]})]})}}]),a}(n.Component),Z=E((function(e){var t=e.itemId,a=e.swapiService,n=a.getPersonImage,r=a.getPerson;return Object(s.jsxs)(K,{itemId:t,getImageUrl:n,getDataItem:r,children:[Object(s.jsx)(z,{field:"birth",label:"Birth"}),Object(s.jsx)(z,{field:"length",label:"Height"})]})})),X=E((function(e){var t=e.itemId,a=e.swapiService,n=a.getStarshipImage,r=a.getStarship;return Object(s.jsxs)(K,{itemId:t,getImageUrl:n,getDataItem:r,children:[Object(s.jsx)(z,{field:"hyperdrive",label:"Hyperdrive Rating"}),Object(s.jsx)(z,{field:"class",label:"Class"})]})})),_=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={label:"soldiers",selectedItems:[1,2,3,5,9]},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onSelect,a=e.onPersonSelected,r=e.soldiersList,c=e.score,i=e.itemId;return Object(s.jsxs)(n.Fragment,{children:[Object(s.jsx)("div",{className:"col-md-5",children:Object(s.jsx)(G,{onItemSelected:a,onSelect:t,activeItemsList:r,selectedItems:this.state.selectedItems})}),Object(s.jsx)("div",{className:"col-md-2",children:Object(s.jsx)(V,{score:c,label:this.state.label})}),Object(s.jsx)("div",{className:"col-md-5",children:Object(s.jsx)(Z,{itemId:i})})]})}}]),a}(n.Component),J=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={label:"Starship",selectedItems:[5,10,12,13,11]},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.onShipSelect,a=e.onStarshipSelected,r=e.shipsList,c=e.scoreShips,i=e.itemId;return Object(s.jsxs)(n.Fragment,{children:[Object(s.jsx)("div",{className:"col-md-5",children:Object(s.jsx)(Q,{onItemSelected:a,onSelect:t,activeItemsList:r,selectedItems:this.state.selectedItems})}),Object(s.jsx)("div",{className:"col-md-2",children:Object(s.jsx)(V,{score:c,label:this.state.label})}),Object(s.jsx)("div",{className:"col-md-5",children:Object(s.jsx)(X,{itemId:i})})]})}}]),a}(n.Component),q=a(7),Y=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).swapiService=new p,e.maxId=100,e.state={selectedPerson:1,selectedStarship:10,soldiersList:[],shipsList:[],personList:null,starshipsList:null,score:3,scoreShips:1,person:{},names:{},healthArr:[],healthObj:{},massObj:{},massArr:[],lengthArr:[],lengthObj:{},attackObj:{},attackArr:[],health:0,attack:0,mass:0,length:0,hasError:!1},e.onPersonSelected=function(t){e.setState({selectedPerson:t})},e.onStarshipSelected=function(t){e.setState({selectedStarship:t})},e.onSelect=function(t,a){e.setState((function(e){var a=e.soldiersList,s=e.score,n=e.health,r=(e.personList,e.healthObj),c=e.healthArr,i=e.attackObj,l=e.attackArr,h=e.attack;if(!a.includes(t)){var d=s,j=[].concat(Object(o.a)(a),[t]);d--,j.length>3&&(j=j.slice(1),d=0);var u=Object(o.a)(c);j.forEach((function(e){u.includes(r[e])||(u.push(r[e]),u.length>3&&(u=u.slice(1)))}));var m;m=u.reduce((function(e,t){return e+ +t}),0);var b=Object(o.a)(l);j.forEach((function(e){b.includes(i[e])||(b.push(i[e]),b.length>3&&(b=b.slice(1)))}));var p;return p=b.reduce((function(e,t){return e+ +t}),0),{soldiersList:j,score:d,healthArr:u,health:m,attack:p}}}))},e.onShipSelect=function(t){e.setState((function(e){var a=e.shipsList,s=e.scoreShips,n=e.mass,r=(e.personList,e.massObj),c=e.massArr,i=e.lengthObj,l=e.lengthArr,h=e.length;if(!a.includes(t)){var d=s,j=[].concat(Object(o.a)(a),[t]);d--,j.length>1&&(j=j.slice(1),d=0);var u=Object(o.a)(c);j.forEach((function(e){u.includes(r[e])||(u.push(r[e]),u.length>1&&(u=u.slice(1)))}));var m;m=u.reduce((function(e,t){return e+ +t}),0);var b=Object(o.a)(l);j.forEach((function(e){b.includes(i[e])||(b.push(i[e]),b.length>1&&(b=b.slice(1)))}));var p;return p=b.reduce((function(e,t){return e+ +t}),0),{shipsList:j,scoreShips:d,massArr:u,mass:m,length:p}}}))},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.swapiService.getAllPeople().then((function(t){var a=Object(o.a)(t),s={},n={},r={};a.forEach((function(e){s[e.id]=e.length})),a.forEach((function(e){n[e.id]=e.mass})),a.forEach((function(e){r[e.id]=e.name})),e.setState({personList:t,healthObj:s,attackObj:n,names:r})})),this.swapiService.getAllStarships().then((function(t){var a=Object(o.a)(t),s={},n={};a.forEach((function(e){s[e.id]=e.mass})),a.forEach((function(e){n[e.id]=e.length})),e.setState({starshipsList:t,massObj:s,lengthObj:n})}))}},{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){var e=this.state,t=e.attack,a=e.health,r=e.soldiersList,c=e.hasError,i=e.score,o=e.selectedPerson,l=e.shipsList,h=e.mass,d=e.length,j=e.scoreShips,u=e.selectedStarship;if(c)return Object(s.jsx)(L,{});var m=Object(s.jsx)(B,{attack:t+d,health:a+h,shipId:l,teamList:r,names:this.state.names}),b=Object(s.jsx)(J,{onStarshipSelected:this.onStarshipSelected,onShipSelect:this.onShipSelect,shipsList:l,itemId:u,scoreShips:j}),p=Object(s.jsx)(_,{onPersonSelected:this.onPersonSelected,onSelect:this.onSelect,soldiersList:r,itemId:o,score:i}),O=!(r.length>=3&&l.length>=1),f=O?"Choose team and ship!":null,x=Object(s.jsxs)(n.Fragment,{children:[Object(s.jsxs)("div",{className:"row mb2",children:[Object(s.jsx)("div",{className:"col-md-1"}),Object(s.jsx)("div",{className:"col-md-10",children:Object(s.jsxs)("div",{className:"Header",children:[Object(s.jsxs)("div",{className:"BarsHeader",children:[Object(s.jsx)(N,{value:a+h,logo:"Health",dimension:"hp",variant:"success",max:600}),Object(s.jsx)(N,{value:t+d,logo:"Attack",dimension:"damage",variant:"danger",max:300})]}),Object(s.jsx)("div",{className:"goBtn2",children:Object(s.jsx)("div",{title:f,children:Object(s.jsx)(M.b,{to:"/battle",className:"link",children:Object(s.jsx)(g.a,{className:"fightBtn",variant:"warning",size:"lg",disabled:O,children:"Fight!"})})})})]})})]}),Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"row mb2",children:p})}),Object(s.jsx)("div",{className:"row mb2",children:b})]});return Object(s.jsx)(v,{value:this.swapiService,children:Object(s.jsx)(M.a,{children:Object(s.jsxs)(q.d,{children:[Object(s.jsx)(q.b,{path:"/",component:T,exact:!0}),Object(s.jsx)(q.b,{path:"/Chose_a_team",render:function(){return Object(s.jsx)("div",{children:x})},exact:!0}),Object(s.jsx)(q.b,{path:"/battle",render:function(){return Object(s.jsx)("div",{children:m})},exact:!0}),Object(s.jsx)(q.a,{to:"/"})]})})})}}]),a}(n.Component);i.a.render(Object(s.jsx)(Y,{}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.d7c6bfd1.chunk.js.map