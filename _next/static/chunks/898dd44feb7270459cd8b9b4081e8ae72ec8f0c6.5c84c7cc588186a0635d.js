(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{IZhJ:function(e,t,a){"use strict";var o=a("1OyB"),s=a("vuIU"),c=a("JX7q"),i=a("Ji7U"),n=a("md7G"),r=a("foSv"),l=a("rePB"),d=a("q1tI"),m=a.n(d),u=a("wx14"),p=a("zLVn"),f=a("TSYQ"),b=a.n(f),w=(a("K9S6"),a("17x9")),h=a.n(w),v={type:h.a.string,tooltip:h.a.bool,as:h.a.elementType},x=m.a.forwardRef((function(e,t){var a=e.as,o=void 0===a?"div":a,s=e.className,c=e.type,i=void 0===c?"valid":c,n=e.tooltip,r=void 0!==n&&n,l=Object(p.a)(e,["as","className","type","tooltip"]);return m.a.createElement(o,Object(u.a)({},l,{ref:t,className:b()(s,i+"-"+(r?"tooltip":"feedback"))}))}));x.displayName="Feedback",x.propTypes=v;var y=x,g=m.a.createContext({controlId:void 0}),N=a("vUet"),j=m.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,s=e.bsCustomPrefix,c=e.className,i=e.type,n=void 0===i?"checkbox":i,r=e.isValid,l=void 0!==r&&r,f=e.isInvalid,w=void 0!==f&&f,h=e.isStatic,v=e.as,x=void 0===v?"input":v,y=Object(p.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),j=Object(d.useContext)(g),O=j.controlId,I=j.custom?[s,"custom-control-input"]:[o,"form-check-input"],C=I[0],P=I[1];return o=Object(N.a)(C,P),m.a.createElement(x,Object(u.a)({},y,{ref:t,type:n,id:a||O,className:b()(c,o,l&&"is-valid",w&&"is-invalid",h&&"position-static")}))}));j.displayName="FormCheckInput";var O=j,I=m.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.bsCustomPrefix,s=e.className,c=e.htmlFor,i=Object(p.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),n=Object(d.useContext)(g),r=n.controlId,l=n.custom?[o,"custom-control-label"]:[a,"form-check-label"],f=l[0],w=l[1];return a=Object(N.a)(f,w),m.a.createElement("label",Object(u.a)({},i,{ref:t,htmlFor:c||r,className:b()(s,a)}))}));I.displayName="FormCheckLabel";var C=I,P=m.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,s=e.bsCustomPrefix,c=e.inline,i=void 0!==c&&c,n=e.disabled,r=void 0!==n&&n,l=e.isValid,f=void 0!==l&&l,w=e.isInvalid,h=void 0!==w&&w,v=e.feedbackTooltip,x=void 0!==v&&v,j=e.feedback,I=e.className,P=e.style,E=e.title,k=void 0===E?"":E,F=e.type,S=void 0===F?"checkbox":F,_=e.label,R=e.children,L=e.custom,T=e.as,M=void 0===T?"input":T,V=Object(p.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),B="switch"===S||L,D=B?[s,"custom-control"]:[o,"form-check"],A=D[0],q=D[1];o=Object(N.a)(A,q);var J=Object(d.useContext)(g).controlId,U=Object(d.useMemo)((function(){return{controlId:a||J,custom:B}}),[J,B,a]),z=null!=_&&!1!==_&&!R,G=m.a.createElement(O,Object(u.a)({},V,{type:"switch"===S?"checkbox":S,ref:t,isValid:f,isInvalid:h,isStatic:!z,disabled:r,as:M}));return m.a.createElement(g.Provider,{value:U},m.a.createElement("div",{style:P,className:b()(I,o,B&&"custom-"+S,i&&o+"-inline")},R||m.a.createElement(m.a.Fragment,null,G,z&&m.a.createElement(C,{title:k},_),(f||h)&&m.a.createElement(y,{type:f?"valid":"invalid",tooltip:x},j))))}));P.displayName="FormCheck",P.Input=O,P.Label=C;var E=P,k=m.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,s=e.bsCustomPrefix,c=e.className,i=e.isValid,n=e.isInvalid,r=e.lang,l=e.as,f=void 0===l?"input":l,w=Object(p.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),h=Object(d.useContext)(g),v=h.controlId,x=h.custom?[s,"custom-file-input"]:[o,"form-control-file"],y=x[0],j=x[1];return o=Object(N.a)(y,j),m.a.createElement(f,Object(u.a)({},w,{ref:t,id:a||v,type:"file",lang:r,className:b()(c,o,i&&"is-valid",n&&"is-invalid")}))}));k.displayName="FormFileInput";var F=k,S=m.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.bsCustomPrefix,s=e.className,c=e.htmlFor,i=Object(p.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),n=Object(d.useContext)(g),r=n.controlId,l=n.custom?[o,"custom-file-label"]:[a,"form-file-label"],f=l[0],w=l[1];return a=Object(N.a)(f,w),m.a.createElement("label",Object(u.a)({},i,{ref:t,htmlFor:c||r,className:b()(s,a),"data-browse":i["data-browse"]}))}));S.displayName="FormFileLabel";var _=S,R=m.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,s=e.bsCustomPrefix,c=e.disabled,i=void 0!==c&&c,n=e.isValid,r=void 0!==n&&n,l=e.isInvalid,f=void 0!==l&&l,w=e.feedbackTooltip,h=void 0!==w&&w,v=e.feedback,x=e.className,j=e.style,O=e.label,I=e.children,C=e.custom,P=e.lang,E=e["data-browse"],k=e.as,S=void 0===k?"div":k,R=e.inputAs,L=void 0===R?"input":R,T=Object(p.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),M=C?[s,"custom"]:[o,"form-file"],V=M[0],B=M[1];o=Object(N.a)(V,B);var D=Object(d.useContext)(g).controlId,A=Object(d.useMemo)((function(){return{controlId:a||D,custom:C}}),[D,C,a]),q=null!=O&&!1!==O&&!I,J=m.a.createElement(F,Object(u.a)({},T,{ref:t,isValid:r,isInvalid:f,disabled:i,as:L,lang:P}));return m.a.createElement(g.Provider,{value:A},m.a.createElement(S,{style:j,className:b()(x,o,C&&"custom-file")},I||m.a.createElement(m.a.Fragment,null,C?m.a.createElement(m.a.Fragment,null,J,q&&m.a.createElement(_,{"data-browse":E},O)):m.a.createElement(m.a.Fragment,null,q&&m.a.createElement(_,null,O),J),(r||f)&&m.a.createElement(y,{type:r?"valid":"invalid",tooltip:h},v))))}));R.displayName="FormFile",R.Input=F,R.Label=_;var L=R,T=(a("2W6z"),m.a.forwardRef((function(e,t){var a,o,s=e.bsPrefix,c=e.bsCustomPrefix,i=e.type,n=e.size,r=e.htmlSize,l=e.id,f=e.className,w=e.isValid,h=void 0!==w&&w,v=e.isInvalid,x=void 0!==v&&v,y=e.plaintext,j=e.readOnly,O=e.custom,I=e.as,C=void 0===I?"input":I,P=Object(p.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),E=Object(d.useContext)(g).controlId,k=O?[c,"custom"]:[s,"form-control"],F=k[0],S=k[1];if(s=Object(N.a)(F,S),y)(o={})[s+"-plaintext"]=!0,a=o;else if("file"===i){var _;(_={})[s+"-file"]=!0,a=_}else if("range"===i){var R;(R={})[s+"-range"]=!0,a=R}else if("select"===C&&O){var L;(L={})[s+"-select"]=!0,L[s+"-select-"+n]=n,a=L}else{var T;(T={})[s]=!0,T[s+"-"+n]=n,a=T}return m.a.createElement(C,Object(u.a)({},P,{type:i,size:r,ref:t,readOnly:j,id:l||E,className:b()(f,a,h&&"is-valid",x&&"is-invalid")}))})));T.displayName="FormControl";var M=Object.assign(T,{Feedback:y}),V=m.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,s=e.children,c=e.controlId,i=e.as,n=void 0===i?"div":i,r=Object(p.a)(e,["bsPrefix","className","children","controlId","as"]);a=Object(N.a)(a,"form-group");var l=Object(d.useMemo)((function(){return{controlId:c}}),[c]);return m.a.createElement(g.Provider,{value:l},m.a.createElement(n,Object(u.a)({},r,{ref:t,className:b()(o,a)}),s))}));V.displayName="FormGroup";var B=V,D=a("JI6e"),A=m.a.forwardRef((function(e,t){var a=e.as,o=void 0===a?"label":a,s=e.bsPrefix,c=e.column,i=e.srOnly,n=e.className,r=e.htmlFor,l=Object(p.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),f=Object(d.useContext)(g).controlId;s=Object(N.a)(s,"form-label");var w="col-form-label";"string"===typeof c&&(w=w+"-"+c);var h=b()(n,s,i&&"sr-only",c&&w);return r=r||f,c?m.a.createElement(D.a,Object(u.a)({as:"label",className:h,htmlFor:r},l)):m.a.createElement(o,Object(u.a)({ref:t,className:h,htmlFor:r},l))}));A.displayName="FormLabel",A.defaultProps={column:!1,srOnly:!1};var q=A,J=m.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,s=e.as,c=void 0===s?"small":s,i=e.muted,n=Object(p.a)(e,["bsPrefix","className","as","muted"]);return a=Object(N.a)(a,"form-text"),m.a.createElement(c,Object(u.a)({},n,{ref:t,className:b()(o,a,i&&"text-muted")}))}));J.displayName="FormText";var U=J,z=m.a.forwardRef((function(e,t){return m.a.createElement(E,Object(u.a)({},e,{ref:t,type:"switch"}))}));z.displayName="Switch",z.Input=E.Input,z.Label=E.Label;var G=z,H=a("YdCC"),Z=Object(H.a)("form-row"),K=m.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.inline,s=e.className,c=e.validated,i=e.as,n=void 0===i?"form":i,r=Object(p.a)(e,["bsPrefix","inline","className","validated","as"]);return a=Object(N.a)(a,"form"),m.a.createElement(n,Object(u.a)({},r,{ref:t,className:b()(s,c&&"was-validated",o&&a+"-inline")}))}));K.displayName="Form",K.defaultProps={inline:!1},K.Row=Z,K.Group=B,K.Control=M,K.Check=E,K.File=L,K.Switch=G,K.Label=q,K.Text=U;var W=K,Y=a("3Z9Z"),Q=(a("LxH/"),a("rFV7")),X=a("Nduc"),$=m.a.createElement;function ee(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,o=Object(r.a)(e);if(t){var s=Object(r.a)(this).constructor;a=Reflect.construct(o,arguments,s)}else a=o.apply(this,arguments);return Object(n.a)(this,a)}}var te=function(e){Object(i.a)(a,e);var t=ee(a);function a(e){var s;return Object(o.a)(this,a),s=t.call(this,e),Object(l.a)(Object(c.a)(s),"handleSubmit",(function(e){e.preventDefault(),s.changeMessage();fetch("https://api.ipify.org?format=jsonp?callback=?",{method:"GET"}).then((function(e){return e.text()})).then((function(e){var t=Object.assign({},s.state.form_data);t.ip_cliente=e,s.setState({form_data:t}),s.authentication()})).catch(s.setState({error:!0}))})),s.state={show:!1,form_data:{name:"",phone:"",email:"",comments:"",ip_cliente:"",destination:2}},s.handleInputChange=s.handleInputChange.bind(Object(c.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(c.a)(s)),s.sendData=s.sendData.bind(Object(c.a)(s)),s.changeMessage=s.changeMessage.bind(Object(c.a)(s)),s}return Object(s.a)(a,[{key:"handleInputChange",value:function(e){var t=Object.assign({},this.state.form_data);t[e.target.name]=e.target.value,this.setState({form_data:t})}},{key:"sendData",value:function(e){var t="".concat(X.NewsLetter.server,"/save_email");fetch(t,{method:"POST",body:JSON.stringify(this.state.form_data),headers:{"Content-Type":"application/json","access-token":e}}).then((function(e){return e.json()})).catch(this.setState({error:!0}))}},{key:"authentication",value:function(){var e=this,t="".concat(X.NewsLetter.server,"/auth"),a=new URLSearchParams;a.append("user",X.NewsLetter.user),a.append("password",X.NewsLetter.password),fetch(t,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a.toString(),json:!0}).then((function(e){return e.json()})).then((function(t){Object.keys(t).includes("token")&&e.sendData(t.token)})).catch()}},{key:"changeMessage",value:function(){var e=this.state.show;this.setState({show:!e})}},{key:"render",value:function(){return $("div",null,$("div",null,$("div",{className:"AdvertisingForm-formColumn"}),$(W,{onSubmit:this.handleSubmit},$(Y.a,null,$(D.a,{md:6},$("div",{className:"Index-formInput"},$("label",null,"Nombre*"),$(W.Control,{className:"Index-formInputText",type:"text",name:"name",id:"name",required:!0,onChange:this.handleInputChange}))),$(D.a,{md:6},$("div",{className:"Index-formInput"},$("label",null,"Compa\xf1ia"),$(W.Control,{className:"Index-formInputText",type:"text",name:"company",id:"company",onChange:this.handleInputChange})))),$(Y.a,null,$(D.a,{md:6},$("div",{className:"Index-formInput"},$("label",null,"Tel\xe9fono*"),$(W.Control,{className:"Index-formInputText",type:"number",name:"phone",id:"phone",required:!0,onChange:this.handleInputChange}))),$(D.a,{md:6},$("div",{className:"Index-formInput"},$("label",null,"Email*"),$(W.Control,{className:"Index-formInputText",type:"email",name:"email",id:"email",required:!0,onChange:this.handleInputChange})))),$(Y.a,null,$(D.a,null,$("div",{className:"Index-formInput"},$("label",null,"Mensaje"),$(W.Control,{as:"textarea",rows:"3",name:"comments",id:"comments",onChange:this.handleInputChange})))),$("div",{className:this.state.show?"Index-showMessage":"Index-hideMessage"},$("p",null,"Formulario enviado"),$(Q.a,{theme:"Button_form",click:this.changeMessage,content:"Regresar al formulario"})),$(Y.a,null,$(D.a,{md:4},$(Q.a,{type:"submit",theme:"Button-form",content:"ENVIAR"})),$(D.a,{md:8},$("div",{className:"Text Index-formButtonSection"},$("div",null,$("a",{href:"/pauta-digital"},"Pol\xedticas de Pauta Digital*")),$("div",null,$("a",{href:"/pauta-impresa"},"Pol\xedticas de Pauta Impresa*"))))))))}}]),a}(m.a.Component);t.a=te},K9S6:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];function o(){for(var e=arguments.length,a=Array(e),o=0;o<e;o++)a[o]=arguments[o];var s=null;return t.forEach((function(e){if(null==s){var t=e.apply(void 0,a);null!=t&&(s=t)}})),s}return(0,c.default)(o)};var o,s=a("pvIh"),c=(o=s)&&o.__esModule?o:{default:o};e.exports=t.default},Nduc:function(e){e.exports=JSON.parse('{"siteName":"El Espectador","siteLogo":"https://www.elespectador.com/profiles/ee/modules/features/ft_ee_menus/img/logo-elespectador.png","siteDomainURL":"https://www.elespectador.com","twitterURL":"https://twitter.com/elespectador","facebookURL":"https://www.facebook.com/elespectadorcom","instagramURL":"https://www.instagram.com/elespectador/","youtubeURL":"https://www.youtube.com/user/Elespectadorcom?sub_confirmation=1","suscribeLink":"https://www.elespectador.com/suscripcion-digital/","exclusiveContentLink":"https://www.elespectador.com/contenido-exclusivo/","sportsLiveLink":"https://www.elespectador.com/deportes/partidos-de-futbol-hoy-en-vivo/?utm_source=elespectador.com&utm_medium=referral&utm_campaign=Boton-Parrilla-Header","loginLink":"https://www.elespectador.com/login/","sites":["el-espectador"],"Red_de_portales":{"circulodeexperiencias.com":"https://www.facebook.com/CirculoDeExperienciasElEspectador/","foros.elespectador.com":"http://foros.elespectador.com/","bibo.elespectador.com":"http://bibo.elespectador.com/","caracolnext.com":"https://www.caracolnext.com/","caracoltv.com":"https://www.caracoltv.com/","noticiascaracol.com":"https://www.noticiascaracol.com","golcaracol.com":"https://www.golcaracol.com","caracolplay.com":"https://www.caracolplay.com","caracoltvcorporativo.com":"https://www.caracoltvcorporativo.com/","bluradio.com":"https://www.bluradio.com/","lakalle.com":"https://www.lakalle.com","hjck.com":"https://hjck.com/","shock.co":"https://www.shock.co/","Volk":"https://volkgames.com/"},"Servicios":{"Paute con nosotros":"https://www.elespectador.com/paute-con-nosotros/","Suscripciones impresas":"http://suscripciones.elespectador.com/","C\xedrculo de experiencias":"https://www.facebook.com/CirculoDeExperienciasElEspectador/","Foros El Espectador":"http://foros.elespectador.com/","Edictos y avisos judiciales":"http://judiciales.elespectador.com/"},"NewsLetter":{"user":"043bd90b2533e322d34ce78476703751","password":"8bdd08542fbe197f348d38c1ba986923","server":"https://personalizados.elespectador.com/service-nw-pc"},"Secciones":{"Opini\xf3n":"https://www.elespectador.com/opinion/","Salud":"https://www.elespectador.com/noticias/salud/","Judicial":"https://www.elespectador.com/noticias/judicial/","Educaci\xf3n":"https://www.elespectador.com/noticias/educacion/","Pol\xedtica":"https://www.elespectador.com/noticias/politica/","Actualidad":"https://www.elespectador.com/noticias/actualidad/","Investigaci\xf3n":"https://www.elespectador.com/noticias/investigacion/","Alto Turmequ\xe9":"https://www.elespectador.com/nptocias/alto-turmeque&","Econom\xeda":"https://www.elespectador.com/noticias/economia","Blogs":"https://blogs.elespectador.com/","Bogot\xe1":"https://www.elespectador.com/noticias/bogota/","Mundo Destinos":"https://www.elespectador.com/noticias/mundo-destinos/","Nacional":"https://www.elespectador.com/noticias/nacional/","Autos":"https://www.elespectador.com/noticias/autos/","El Mundo":"https://www.elespectador.com/noticias/el-mundo/","Deportes":"https://www.elespectador.com/deportes/","Tecnolog\xeda":"https://www.elespectador.com/noticias/tecnologia/","Entretenimiento":"https://www.elespectador.com/entretenimiento/","Cultura":"https://www.elespectador.com/noticias/cultura","Hor\xf3scopo":"https://www.elespectador.com/entretenimiento/horoscopo/","Ciencia":"https://www.elespectador.com/noticias/ciencia/","Colombia 2020":"https://www.elespectador.com/colombia2020/","Medio Ambiente":"https://www.elespectador.com/noticias/medio-ambiente","Cromos":"https://www.elespectador.com/cromos/"},"Digital":{"Formatos Est\xe1ndar":"/digital/formatos-estandar/","Formatos Premium":"/digital/formatos-premium","Video":"/digital/video"},"Contenidos_Patrocinados":{"Especiales Miltimedia":"/contenidos-patrocinados/especiales-multimedia","Formatos Premium":"https://www.elespectador.com/opinion/","Videos":"https://www.elespectador.com/noticias/judicial/"}}')},pvIh:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,a,o,s,c,i){var n=s||"<<anonymous>>",r=i||o;if(null==a[o])return t?new Error("Required "+c+" `"+r+"` was not specified in `"+n+"`."):null;for(var l=arguments.length,d=Array(l>6?l-6:0),m=6;m<l;m++)d[m-6]=arguments[m];return e.apply(void 0,[a,o,n,c,r].concat(d))}var a=t.bind(null,!1);return a.isRequired=t.bind(null,!0),a},e.exports=t.default},rFV7:function(e,t,a){"use strict";var o=a("q1tI"),s=a.n(o),c=a("cWnB"),i=s.a.createElement;t.a=function(e){var t=i(c.a,{id:e._id?e._id:null,href:e.link,onClick:e.click,className:"Button ".concat(e.theme),type:e.type},e.content);return e.menu&&(t=i("div",{className:"Button Button-Dropdown ".concat(e.theme)},i("p",{className:"Button-Title"},e.content),i("a",{href:"Button Button-Dropdown ".concat(e.theme)}),i("div",{className:"Button Button-Menu  ".concat(e.style)},e.children))),t}}}]);