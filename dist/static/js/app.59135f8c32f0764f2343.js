webpackJsonp([1],Array(26).concat([function(e,t,r){"use strict";var s=r(54),n=r.n(s),a=n.a.create({baseURL:"https://api-wfeedme.herokuapp.com",headers:new Headers({"Content-Type":"application/json",Accept:"application/json"})});t.a=a},,,,,,,,,,,,,,,,,function(e,t,r){var s=r(1)(r(86),r(140),null,null);e.exports=s.exports},function(e,t,r){"use strict";var s=r(9),n=r(129),a=r(74),i=r(75);s.a.use(n.a);var o={en:a.a,es:i.a},u=new n.a({messages:o});t.a=u},function(e,t,r){"use strict";var s={};s.install=function(e){e.prototype.$bus=new e},t.a=s},function(e,t,r){"use strict";var s=r(9),n=r(151),a=r(132),i=r.n(a),o=r(138),u=r.n(o),c=r(137),l=r.n(c),p=r(133),d=r.n(p);s.a.use(n.a),t.a=new n.a({mode:"history",routes:[{path:"/",name:"home",component:i.a},{path:"/sent",name:"sent",component:u.a},{path:"/report/:hash",name:"report",props:!0,component:l.a},{path:"*",name:"notFound",component:d.a}]})},function(e,t,r){"use strict";var s=r(9),n=r(3),a=r(78),i=r(77),o=r(79);s.a.use(n.b),t.a=new n.b.Store({modules:{project:a.a,issue:i.a,report:o.a}})},function(e,t,r){"use strict";var s=r(27),n=r.n(s),a={_default:function(e){return"The value is not valid."},after:function(e,t){var r=n()(t,2),s=r[0];return"The must be after "+(r[1]?"or equal to ":"")+s+"."},alpha_dash:function(e){return"The may contain alpha-numeric characters as well as dashes and underscores."},alpha_num:function(e){return"The may only contain alpha-numeric characters."},alpha_spaces:function(e){return"The may only contain alphabetic characters as well as spaces."},alpha:function(e){return"The may only contain alphabetic characters."},before:function(e,t){var r=n()(t,2),s=r[0];return"The must be before "+(r[1]?"or equal to ":"")+s+"."},between:function(e,t){var r=n()(t,2);return"The must be between "+r[0]+" and "+r[1]+"."},confirmed:function(e){return"The confirmation does not match."},credit_card:function(e){return"The is invalid."},date_between:function(e,t){var r=n()(t,2);return"The must be between "+r[0]+" and "+r[1]+"."},date_format:function(e,t){return"The must be in the format "+n()(t,1)[0]+"."},decimal:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["*"],r=n()(t,1),s=r[0];return"The must be numeric and may contain "+("*"===s?"":s)+" decimal points."},digits:function(e,t){return"The must be numeric and exactly contain "+n()(t,1)[0]+" digits."},dimensions:function(e,t){var r=n()(t,2);return"The must be "+r[0]+" pixels by "+r[1]+" pixels."},email:function(e){return"The must be a valid email."},ext:function(e){return"The must be a valid file."},image:function(e){return"The must be an image."},in:function(e){return"The must be a valid value."},ip:function(e){return"The must be a valid ip address."},max:function(e,t){return"The may not be greater than "+n()(t,1)[0]+" characters."},max_value:function(e,t){return"The must be "+n()(t,1)[0]+" or less."},mimes:function(e){return"The must have a valid file type."},min:function(e,t){return"The must be at least "+n()(t,1)[0]+" characters."},min_value:function(e,t){return"The must be "+n()(t,1)[0]+" or more."},not_in:function(e){return"The must be a valid value."},numeric:function(e){return"The may only contain numeric characters."},regex:function(e){return"The format is invalid."},required:function(e){return"The field is required."},size:function(e,t){return"The must be less than "+n()(t,1)[0]+" KB."},url:function(e){return"The is not a valid URL."}},i={name:"en",messages:a,attributes:{}};t.a=i},function(e,t,r){"use strict";var s=r(27),n=r.n(s),a={after:function(e,t){return"El campo debe ser posterior a "+n()(t,1)[0]+"."},alpha_dash:function(e){return"El campo solo debe contener letras, números y guiones."},alpha_num:function(e){return"El campo solo debe contener letras y números."},alpha_spaces:function(e){return"El campo solo debe contener letras y espacios."},alpha:function(e){return"El campo solo debe contener letras."},before:function(e,t){return"El campo debe ser anterior a "+n()(t,1)[0]+"."},between:function(e,t){var r=n()(t,2);return"El campo debe estar entre "+r[0]+" y "+r[1]+"."},confirmed:function(e,t){return"El campo no coincide con "+n()(t,1)[0]+"."},credit_card:function(e,t){var r=n()(t,1);r[0];return"El campo es inválido."},date_between:function(e,t){var r=n()(t,2);return"El campo debe estar entre "+r[0]+" y "+r[1]+"."},date_format:function(e,t){return"El campo debe tener formato formato "+n()(t,1)[0]+"."},decimal:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["*"],r=n()(t,1),s=r[0];return"El campo debe ser númerico y contener "+("*"===s?"":s)+" puntos decimales."},digits:function(e,t){return"El campo debe ser númerico y contener exactamente "+n()(t,1)[0]+" dígitos."},dimensions:function(e,t){var r=n()(t,2);return"El campo debe ser de "+r[0]+" pixeles por "+r[1]+" pixeles."},email:function(e){return"El campo debe ser un correo electrónico válido."},ext:function(e){return"El campo debe ser un archivo válido."},image:function(e){return"El campo debe ser una imagen."},in:function(e){return"El campo debe ser un valor válido."},ip:function(e){return"El campo debe ser una dirección ip válida."},max:function(e,t){return"El campo no debe ser mayor a "+n()(t,1)[0]+" caracteres."},max_value:function(e,t){return"El campo debe de ser "+n()(t,1)[0]+" o menor."},mimes:function(e){return"El campo debe ser un tipo de archivo válido."},min:function(e,t){return"El campo debe tener al menos "+n()(t,1)[0]+" caracteres."},min_value:function(e,t){return"El campo debe ser "+n()(t,1)[0]+" o superior."},not_in:function(e){return"El campo debe ser un valor válido."},numeric:function(e){return"El campo debe contener solo caracteres númericos."},regex:function(e){return"El formato del campo no es válido."},required:function(e){return"El campo es obligatorio."},size:function(e,t){return"El campo debe ser menor a "+n()(t,1)[0]+" KB."},url:function(e){return"El campo no es una URL válida."}},i={name:"es",messages:a,attributes:{}};t.a=i},,function(e,t,r){r(122);var s=r(1)(r(80),r(141),null,null);e.exports=s.exports},function(e,t,r){r(125);var s=r(1)(null,r(150),"data-v-e7137b7a",null);e.exports=s.exports},,,,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";var s=r(26),n={};n.findProjectByHash=function(e){return s.a.get("/project/"+e).then(function(e){return e.data})},t.a=n},function(e,t,r){"use strict";var s=r(26),n={};n.createReport=function(e){return s.a.post("/project/"+e.project.id+"/issues",{report:e}).then(function(e){return e.data})},t.a=n},function(e,t,r){"use strict";t.a={welcome:"Welcome FeedMe",title:"Let {project} be incredible",type:"Issue type",priority:"Priority",criticity:"Criticity",level:{maximum:"Maximum",medium:"Medium",minimum:"Minimum",low:"Low",high:"High"},types:{error:"Error",upgrade:"Upgrade"},buttons:{back:"Back",next:"Next",add:"Add Issue",edit:"Edit",delete:"Delete",finish:"Send report"},step1:{title:"Personal info",subtitle:"Tell us about you",name:"What is your name?",holderName:"Joe Doe",mail:"Complete your mail",holderMail:"joe.doe@wolox.com.ar"},step2:{title:"Report charge",subtitle:"Add all issues found",desc:"Description",descLabel:"Describe the error founded",errorMsg:"Please, add at least one issue to continue"},step3:{title:"Confirmation",subtitle:"Check the data below",errorMsg:"There was an error, the report could not be loaded"},sent:{thanks:"{name} thank you for your support!",finish:"Finish"},issueList:{issues:"Issues",errorMsg:"No issues added"}}},function(e,t,r){"use strict";t.a={welcome:"Bienvenido a FeedMe",title:"Hagamos que {project} sea increible",type:"Tipo de incidencia",priority:"Prioridad",criticity:"Criticidad",level:{maximum:"Máxima",medium:"Media",minimum:"Mínima",low:"Baja",high:"Alta"},types:{error:"Error",upgrade:"Mejora"},buttons:{back:"Anterior",next:"Siguiente",add:"Agregar error",edit:"Editar",delete:"Eliminar",finish:"Enviar reporte"},step1:{title:"Datos personales",subtitle:"Cuentanos sobre tí",name:"¿Cuál es tu nombre?",holderName:"Juan Perez",mail:"Completa tu mail",holderMail:"juan.perez@wolox.com.ar"},step2:{title:"Carga del reporte",subtitle:"Agrega todas las inconsistencias encontradas",desc:"Descripción",descLabel:"Describa el error encontrado",errorMsg:"Por favor, ingrese por lo menos una incidencia para poder continuar"},step3:{title:"Confirmación",subtitle:"Compruebe los datos a continuación",errorMsg:"Hubo un error, no se pudo cargar el reporte"},sent:{thanks:"¡{name} muchas gracias por tu aporte!",finish:"Finalizar"},issueList:{issues:"Incidencias",errorMsg:"No hay incidencias cargadas"}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(9),n=r(50),a=r.n(n),i=r(53),o=r.n(i),u=r(51),c=r.n(u),l=r(46),p=r(47),d=r(44),m=r(48),f=r(49),v=r(52),h=r.n(v),b=r(45);n.Validator.addLocale(f.a),n.Validator.addLocale(m.a),s.a.config.productionTip=!1,s.a.use(a.a,{locale:"en"}),s.a.use(b.a),s.a.use(o.a),s.a.component("loader",h.a),new s.a({el:"#app",router:l.a,store:p.a,i18n:d.a,template:"<App/>",components:{App:c.a}})},function(e,t,r){"use strict";var s={issue:{desc:"",type:"1",criticity:"1",priority:"1"}},n={issue:function(){return s.issue}},a={updateIssue:function(e,t){e.issue=t}},i={updateIssue:function(e,t){(0,e.commit)("updateIssue",t)},clearIssue:function(e){(0,e.commit)("updateIssue",{desc:"",type:"1",criticity:"1",priority:"1"})}};t.a={state:s,getters:n,actions:i,mutations:a}},function(e,t,r){"use strict";var s=r(72),n={project:null,projectNotFound:!1},a={project:function(){return n.project},projectNotFound:function(){return n.projectNotFound}},i={setProject:function(e,t){e.project=t,e.projectNotFound=!1},projectNotFound:function(e,t){e.projectNotFound=t}},o={findProyect:function(e,t){var r=e.commit;s.a.findProjectByHash(t).then(function(e){if(e){var t=e;r("projectNotFound",!1),r("setProject",t),r("updateProject",t)}else r("projectNotFound",!0)})}};t.a={state:n,getters:a,actions:o,mutations:i}},function(e,t,r){"use strict";var s={report:{project:{},owner:{},issues:[]}},n={report:function(){return s.report},getIssueByIndex:function(e){return s.report.issues[e]}},a={updateProject:function(e,t){e.report.project=t},updateOwner:function(e,t){e.report.owner=t},addIssue:function(e,t){var r=t;e.report.issues.push(r)},editIssue:function(e,t,r){e.report.issues[t]=r},removeIssue:function(e,t){e.report.issues.splice(t,1)},clearReport:function(e){e.report={project:{},owner:{},issues:[]}}},i={updateProject:function(e,t){(0,e.commit)("updateProject",t)},updateOwner:function(e,t){(0,e.commit)("updateOwner",t)},addIssue:function(e,t){(0,e.commit)("addIssue",t)},editIssue:function(e,t,r){(0,e.commit)("editIssue",t,r)},removeIssue:function(e,t){(0,e.commit)("removeIssue",t)},clearReport:function(e){(0,e.commit)("clearReport")}};t.a={state:s,getters:n,actions:i,mutations:a}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(131),n=r.n(s),a=r(130),i=r.n(a);t.default={name:"app",components:{FmHeader:n.a,FmFooter:i.a}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(4),n=r.n(s),a=r(3);t.default={computed:n()({},r.i(a.a)({project:"project"}))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"home",data:function(){return{code:"",errorMsg:null,msg:"Welcome to Your Vue.js App"}},methods:{searchByCode:function(){var e=this;this.$validator.validateAll().then(function(t){e.errorMsg=e.errors,t&&e.$router.push("/report/"+e.code)})}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{owner:{name:"",mail:""}}},methods:{nextStep:function(){var e=this;this.$validator.validateAll().then(function(t){t&&(e.$store.dispatch("updateOwner",e.owner),e.$bus.$emit("changeStep",2))})}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(4),n=r.n(s),a=r(3),i=r(43),o=r.n(i);t.default={components:{IssueList:o.a},data:function(){return{errorMsg:null,priorities:[{text:this.$t("level.low"),value:"1"},{text:this.$t("level.medium"),value:"2"},{text:this.$t("level.high"),value:"3"}],criticities:[{text:this.$t("level.minimum"),value:"1"},{text:this.$t("level.medium"),value:"2"},{text:this.$t("level.maximum"),value:"3"}],types:[{text:this.$t("types.error"),value:"1"},{text:this.$t("types.upgrade"),value:"2"}]}},computed:n()({},r.i(a.a)({report:"report",issue:"issue"})),methods:{addIssue:function(){var e=this;this.errorMsg=null,this.$validator.validateAll().then(function(t){t&&(e.$store.dispatch("addIssue",e.issue),e.$store.dispatch("clearIssue"))})},nextStep:function(){this.errorMsg=null,this.report.issues.length>0?this.$bus.$emit("changeStep",3):this.errorMsg=this.$t("step2.errorMsg")},backStep:function(){this.$bus.$emit("changeStep",1)}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(4),n=r.n(s),a=r(73),i=r(3),o=r(43),u=r.n(o);t.default={data:function(){return{errorMsg:null}},components:{IssueList:u.a},computed:n()({},r.i(i.a)({report:"report"})),methods:{onComplete:function(){var e=this;a.a.createReport(this.report).then(function(t){e.$router.push("/sent")}).catch(function(){e.errorMsg=e.$t("step3.errorMsg")})},backStep:function(){this.$bus.$emit("changeStep",2)}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(4),n=r.n(s),a=r(3);t.default={computed:n()({},r.i(a.a)({report:"report",issue:"issue"})),methods:{editIssue:function(e){var t=this.report.issues.indexOf(e);this.$bus.$emit("changeStep",2),this.$store.dispatch("removeIssue",t),this.$store.dispatch("updateIssue",e)},removeIssue:function(e){var t=this.report.issues.indexOf(e);this.$store.dispatch("removeIssue",t)}},filters:{elipsis:function(e){return e.length>=50?e.slice(0,50)+"...":e}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(4),n=r.n(s),a=r(3),i=r(134),o=r.n(i),u=r(135),c=r.n(u),l=r(136),p=r.n(l);t.default={data:function(){return{step:0}},props:["hash"],computed:n()({},r.i(a.a)({project:"project",projectNotFound:"projectNotFound"})),created:function(){this.$store.dispatch("findProyect",this.hash)},mounted:function(){this.$bus.$on("changeStep",this.changeStep)},components:{Step1:o.a,Step2:c.a,Step3:p.a},methods:{changeStep:function(e){this.step=e}},watch:{project:function(){var e=this.project.locale;this.$validator.setLocale(e),this.$i18n.locale=e},projectNotFound:function(){this.projectNotFound&&this.$router.push("/notFound")}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(4),n=r.n(s),a=r(3);t.default={computed:n()({},r.i(a.a)({report:"report"})),beforeMount:function(){this.report.owner.name||this.$router.push("/")},methods:{clear:function(){this.$store.dispatch("clearIssue"),this.$store.dispatch("clearReport"),this.$router.push("/")}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjUuNDMgODYuNiI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzM1MzUzNTt9LmJ7ZmlsbDpub25lO3N0cm9rZTojMzYzNjM2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo1cHg7fS5je2lzb2xhdGlvbjppc29sYXRlO2ZvbnQtc2l6ZTo0NXB4O2ZpbGw6IzM2MzYzNjtmb250LWZhbWlseTpGcmVkb2thT25lLVJlZ3VsYXIsIEZyZWRva2EgT25lO2xldHRlci1zcGFjaW5nOi0wLjAxZW07fS5ke2xldHRlci1zcGFjaW5nOjBlbTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPlJlY3Vyc28gM3hoZHBpPC90aXRsZT48cGF0aCBjbGFzcz0iYSIgZD0iTTU5LjksMjguNWMtOC43LDAtMTQuNCw3LjEtMTkuNSwxMy40QzM2LjEsNDcuMiwzMiw1Mi4yLDI3LDUyLjJjLTUuMiwwLTguNC01LjMtOC40LTkuMSwwLTMuNSwzLjUtOC43LDktOC43YTkuODgsOS44OCwwLDAsMSw4LjIsNC41LDMsMywwLDEsMCw1LjEtMy4xYy0uMi0uMy00LjUtNy4zLTEzLjItNy4zQTE1LjE0LDE1LjE0LDAsMCwwLDEyLjgsNDMuMWMwLDcuMSw1LjksMTUuMSwxNC4zLDE1LjEsNy44LDAsMTMtNi40LDE4LjEtMTIuNiw0LjYtNS43LDktMTEuMiwxNC45LTExLjIsMy41LDAsNS43LDEuMiw3LDMuNmExMS4yMSwxMS4yMSwwLDAsMS0uMywxMC4zLDYuMTcsNi4xNywwLDAsMS01LjksMy41LDExLjc0LDExLjc0LDAsMCwxLTkuNS00LjksMy4zMiwzLjMyLDAsMCwwLTUtLjUsMy4wNywzLjA3LDAsMCwwLC4yLDQuMWMwLC4xLjEuMS4yLjJhMTcuNDgsMTcuNDgsMCwwLDAsMTQuMSw3YzEwLDAsMTMuMi05LjgsMTMuMi0xNC41YTE3LjM5LDE3LjM5LDAsMCwwLTEuNy03LjlDNzAuNiwzMi4yLDY3LjIsMjguNSw1OS45LDI4LjVaIi8+PGNpcmNsZSBjbGFzcz0iYiIgY3g9IjQzLjMiIGN5PSI0My4zIiByPSI0MC44Ii8+PHRleHQgY2xhc3M9ImMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMy4wNyA1OC4xNikiPmY8dHNwYW4gY2xhc3M9ImQiIHg9IjE5LjgiIHk9IjAiPmVlZG1lPC90c3Bhbj48L3RleHQ+PC9zdmc+"},,function(e,t,r){r(124);var s=r(1)(null,r(149),"data-v-cbda1034",null);e.exports=s.exports},function(e,t,r){r(123);var s=r(1)(r(81),r(147),"data-v-89754850",null);e.exports=s.exports},function(e,t,r){var s=r(1)(r(82),r(148),null,null);e.exports=s.exports},function(e,t,r){var s=r(1)(null,r(146),null,null);e.exports=s.exports},function(e,t,r){var s=r(1)(r(83),r(144),null,null);e.exports=s.exports},function(e,t,r){var s=r(1)(r(84),r(143),null,null);e.exports=s.exports},function(e,t,r){var s=r(1)(r(85),r(142),null,null);e.exports=s.exports},function(e,t,r){r(121);var s=r(1)(r(87),r(139),null,null);e.exports=s.exports},function(e,t,r){var s=r(1)(r(88),r(145),null,null);e.exports=s.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"issue"},[e.project?r("v-stepper",{attrs:{vertical:"vertical"},model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[r("v-container",{attrs:{fluid:"fluid"}},[r("h2",[e._v(e._s(e.$t("welcome")))]),r("h3",[e._v(" "+e._s(e.$t("title",{project:e.project.name})))]),r("v-stepper-step",{attrs:{step:"1",complete:e.step>1}},[e._v(e._s(e.$t("step1.title"))),r("small",[e._v(" "+e._s(e.$t("step1.subtitle")))])]),r("v-stepper-content",{attrs:{step:"1"}},[r("step1")],1),r("v-stepper-step",{attrs:{step:"2",complete:e.step>2}},[e._v(" "+e._s(e.$t("step2.title"))),r("small",[e._v(" "+e._s(e.$t("step2.subtitle")))])]),r("v-stepper-content",{attrs:{step:"2"}},[r("step2")],1),r("v-stepper-step",{attrs:{step:"3",complete:e.step>3}},[e._v(" "+e._s(e.$t("step3.title"))),r("small",[e._v(" "+e._s(e.$t("step3.subtitle")))])]),r("v-stepper-content",{attrs:{step:"3"}},[r("step3")],1)],1)],1):r("loader")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-list",{attrs:{"two-line":""}},[r("h5",{staticClass:"text-xs-left"},[e._v(e._s(e.$t("issueList.issues")))]),e._l(e.report.issues,function(t,s){return r("v-list-tile",{key:s},[r("v-list-tile-content",[r("v-list-tile-title",[r("b",[e._v("Nº "+e._s(s+1))])]),r("v-list-tile-sub-title",{staticClass:"grey--text text--darken-4"},[r("b",[e._v(e._s(e.$t("type"))+": ")]),e._v(" "+e._s(t.type)+"\n"),r("b",[e._v(e._s(e.$t("priority"))+": ")]),e._v(" "+e._s(t.priority)+"\n"),r("b",[e._v(e._s(e.$t("criticity"))+": ")]),e._v(" "+e._s(t.criticity)+" ")]),r("v-list-tile-sub-title",[e._v(e._s(e._f("elipsis")(t.desc)))])],1),r("v-list-tile-action",[r("v-icon",{staticClass:"blue--text text--lighten-1",on:{click:function(r){e.editIssue(t)}}},[e._v("edit")]),r("v-icon",{staticClass:"red--text text--lighten-1",on:{click:function(r){e.removeIssue(t)}}},[e._v("delete")])],1),s+1<e.report.issues.length?r("v-divider"):e._e()],1)}),0===e.report.issues.length?r("p",[e._v(e._s(e.$t("issueList.errorMsg")))]):e._e()],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{toolbar:"toolbar",footer:"footer","fill-height":"fill-height"}},[r("fm-header"),r("main",[r("v-container",{attrs:{fluid:"fluid"}},[r("router-view")],1)],1),r("fm-footer")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"step3 reportDetail"},[r("v-container",[r("h4",[e._v(" "+e._s(e.report.owner.name))]),r("span",[e._v("  "+e._s(e.report.owner.mail))])]),r("issue-list"),e.errorMsg?r("span",{staticClass:"span error-msg"},[e._v(" "+e._s(e.errorMsg))]):e._e(),r("v-btn",{attrs:{primary:"primary",round:"round"},on:{click:e.onComplete}},[e._v(e._s(e.$t("buttons.finish")))]),r("v-btn",{attrs:{round:"round"},on:{click:e.backStep}},[e._v(e._s(e.$t("buttons.back")))])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("label",{staticClass:"label"},[e._v(e._s(e.$t("step2.descLabel")))]),r("v-layout",{attrs:{row:"row"}},[r("v-flex",{attrs:{xs12:"xs12"}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"desc",label:e.$t("step2.desc"),textarea:"textarea",counter:"counter",max:"250"},model:{value:e.issue.desc,callback:function(t){e.issue.desc=t},expression:"issue.desc"}}),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.first("desc"),expression:"errors.first('desc')"}],staticClass:"span error-msg"},[e._v(" "+e._s(e.errors.first("desc")))])],1)],1),r("v-layout",{attrs:{row:"row"}},[r("v-flex",{attrs:{xs12:"xs12"}},[r("label",{staticClass:"label"},[e._v(e._s(e.$t("type")))]),r("v-select",{attrs:{label:"$t('types.error')",name:"type",segmented:"segmented",items:e.types},model:{value:e.issue.type,callback:function(t){e.issue.type=t},expression:"issue.type"}})],1)],1),r("v-layout",{attrs:{row:"row"}},[r("v-flex",{attrs:{xs12:"xs12",sm6:"sm6"}},[r("label",{staticClass:"label"},[e._v(e._s(e.$t("priority")))]),r("v-select",{attrs:{label:"$t('level.minimum')",name:"priority",segmented:"segmented",items:e.priorities},model:{value:e.issue.priority,callback:function(t){e.issue.priority=t},expression:"issue.priority"}})],1),r("v-flex",{attrs:{xs12:"xs12",sm6:"sm6"}},[r("label",{staticClass:"label"},[e._v(e._s(e.$t("criticity")))]),r("v-select",{attrs:{label:"$t('level.minimum')",name:"criticity",segmented:"segmented",items:e.criticities},model:{value:e.issue.criticity,callback:function(t){e.issue.criticity=t},expression:"issue.criticity"}})],1)],1),r("v-layout",{attrs:{row:"row"}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"xs12"}},[r("v-btn",{staticClass:"white--text",attrs:{secondary:"secondary",round:"round",small:"small"},on:{click:e.addIssue}},[e._v(e._s(e.$t("buttons.add")))])],1)],1),r("v-layout",{attrs:{row:"row"}},[r("v-container",[r("issue-list")],1)],1),e.errorMsg?r("span",{staticClass:"span error-msg"},[e._v(" "+e._s(e.errorMsg))]):e._e(),r("v-btn",{attrs:{primary:"primary",round:"round"},on:{click:e.nextStep}},[e._v(e._s(e.$t("buttons.next")))]),r("v-btn",{attrs:{round:"round",outline:"outline"},on:{click:e.backStep}},[e._v(e._s(e.$t("buttons.back")))])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"step1",attrs:{fluid:"fluid"}},[r("v-layout",{attrs:{row:"row",wrap:"wrap"}},[r("label",{staticClass:"label"},[e._v(" "+e._s(e.$t("step1.name")))])]),r("v-layout",{attrs:{row:"row",wrap:"wrap"}},[r("v-flex",{attrs:{xs12:"xs12"}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"name",type:"text",placeholder:e.$t("step1.holderName")},model:{value:e.owner.name,callback:function(t){e.owner.name=t},expression:"owner.name"}}),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.first("name"),expression:"errors.first('name')"}],staticClass:"span error-msg"},[e._v(" "+e._s(e.errors.first("name")))])],1)],1),r("v-layout",{attrs:{row:"row",wrap:"wrap"}},[r("label",{staticClass:"label"},[e._v(" "+e._s(e.$t("step1.mail")))])]),r("v-layout",{attrs:{row:"row",wrap:"wrap"}},[r("v-flex",{attrs:{xs12:"xs12"}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{name:"mail",type:"email",placeholder:e.$t("step1.holderMail")},model:{value:e.owner.mail,callback:function(t){e.owner.mail=t},expression:"owner.mail"}})],1),r("v-flex",{attrs:{xs12:"xs12"}},[r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.first("mail"),expression:"errors.first('mail')"}],staticClass:"span error-msg"},[e._v(" "+e._s(e.errors.first("mail")))])])],1),r("v-btn",{attrs:{primary:"primary",round:"round"},on:{click:e.nextStep}},[e._v(" "+e._s(e.$t("buttons.next")))])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"end"},[r("h3",[e._v(" "+e._s(e.$t("sent.thanks",{name:e.report.owner.name})))]),r("button",{on:{click:e.clear}},[e._v(" "+e._s(e.$t("sent.finish")))])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("h1",[e._v(" 404 - Not Found")])},staticRenderFns:[]}},function(e,t,r){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-toolbar",[s("router-link",{attrs:{to:{path:"/"}}},[s("img",{attrs:{src:r(128),width:"150"}})]),s("v-spacer"),s("v-toolbar-items",{staticClass:"hidden-xs"},[s("v-btn",{attrs:{disabled:"disabled",flat:"flat"}},[e._v("  "+e._s(e.project?e.project.name:""))])],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:"fluid"}},[r("v-layout",[r("v-flex",{attrs:{xs8:"xs8","offset-xs2":"offset-xs2"}},[r("h1",[e._v(" Bienvenido a FeedMe")]),r("h3",[e._v(" Ahora podes brindarnos feedback de manera rápida y sencilla.")]),r("h6",[e._v(" No necesitas iniciar sesión, ingresa a la URL que se fue administrada y comenza a disfrutar de la experiencia FeedMe.")]),r("h6",[e._v(" O ingresa el código de la URL aca para ser redirigido.")])])],1),r("v-layout",[r("v-flex",{attrs:{xs8:"xs8","offset-xs2":"offset-xs2"}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"text-xs-center",attrs:{name:"code",type:"text"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),e.errorMsg?r("span",{staticClass:"span error-msg"},[e._v(" "+e._s(e.errorMsg.items[0].msg))]):e._e(),r("div",[r("v-btn",{attrs:{principal:"principal",dark:"dark"},on:{click:e.searchByCode}},[e._v(" Buscar")])],1)],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-footer",{staticClass:"text-xs-center"},[r("v-spacer",[e._v("© "+e._s((new Date).getFullYear())+" - Made with "),r("b",{staticClass:"red--text"},[e._v("❤ ")]),e._v("by QA")])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:"fluid"}},[r("v-layout",[r("div",{staticClass:"loader"})])],1)},staticRenderFns:[]}}]),[76]);
//# sourceMappingURL=app.59135f8c32f0764f2343.js.map