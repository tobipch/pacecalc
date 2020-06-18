(this.webpackJsonppacecalc=this.webpackJsonppacecalc||[]).push([[0],{79:function(e,t,n){e.exports=n(94)},84:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(9),r=n.n(l),o=(n(84),n(25)),u=n(51),c=n(132),m=n(150),s=n(152),p=n(151),d=n(49),f=n.n(d),h=n(96),v=n(134),g=Object(c.a)((function(e){return{root:{marginTop:e.spacing(1)},headline:{fontWeight:400,borderBottom:"3px solid transparent",borderBottomColor:e.palette.primary.main},subtitle:{marginLeft:e.spacing(1)}}})),E=function(){var e=g();return i.a.createElement(v.a,{container:!0,justify:"center",alignItems:"baseline",className:e.root},i.a.createElement(h.a,{variant:"h1",className:e.headline},"Pacecalc"),i.a.createElement(h.a,{variant:"subtitle2",component:"h2",className:e.subtitle},"v2.1"))},b=n(60),N=n(155),x=function(e){var t="",n=!0;e.inputsWithValue.length>2?(n=!1,t=i.a.createElement(N.a,{severity:"warning"},"Please enter exactly two values of distance, time and pace.")):0===e.inputsWithValue.length?(n=!1,t=i.a.createElement(N.a,{severity:"info"},"Enter two values to calculate the third one!")):1===e.inputsWithValue.length&&(n=!1);var a,l=Object(b.a)(e.inputs);try{for(l.s();!(a=l.n()).done;){var r=a.value;null===r.inputValue.match(/^\d*(\.?\d+?$|\.$)/)&&r.inputValue.length>0&&(n=!1)}}catch(o){l.e(o)}finally{l.f()}return n?e.children:t},w=n(153),F=n(159),y=n(137),k=n(154),V=n(158),z=n(143),O=n(138),j=n(142),W=Object(c.a)((function(e){return{root:{display:"flex",marginBottom:e.spacing(2)},inputField:{textTransform:"capitalize",height:56},inputAdornment:{textTransform:"lowercase"}}})),C=function(e){var t=W(),n=!1,a="";return null===e.value.match(/^\d*(\.?\d+?$|\.$)/)&&e.value.length>0&&(n=!0,a="Only numerical values are allowed."),i.a.createElement(k.a,{className:t.root},i.a.createElement(O.a,{fullWidth:!0},i.a.createElement(V.a,{type:"text",className:t.inputField,label:e.inputName,variant:"outlined",value:e.value,InputProps:{endAdornment:i.a.createElement(z.a,{position:"end",className:t.inputAdornment},e.adornment)},onChange:function(t){return e.change(t,e.inputName)},error:!!n,helperText:n?null:e.inputHelper}),i.a.createElement(j.a,{className:t.inputHelper,error:!0},n?a:" ")))},H=Object(c.a)((function(e){return{iconButton:{height:56,width:56},unitSelect:{height:56,width:"100%"}}})),I=i.a.memo((function(e){var t=H(),n=e.inputs.map((function(n){var a=e.units[n.inputName],l=a.find((function(e){return e.unit===n.inputUnit})),r=void 0===l?null:l.inputHelper,o=a.map((function(e){return i.a.createElement(F.a,{key:e.unit,value:e.unit},e.unit)}));return i.a.createElement(v.a,{container:!0,key:n.inputName,spacing:2},i.a.createElement(v.a,{item:!0,xs:9},i.a.createElement(C,{adornment:n.inputUnit,value:n.inputValue,inputName:n.inputName,change:e.updateInput,clearInput:e.clearInput,inputHelper:null==r?null:r})),i.a.createElement(v.a,{item:!0,xs:2},i.a.createElement(w.a,{className:t.unitSelect,variant:"outlined",value:n.inputUnit,onChange:function(t){return e.updateUnit(t.target.value,n.inputName)}},o)),i.a.createElement(v.a,{item:!0,xs:1},i.a.createElement(y.a,{className:t.iconButton,color:"primary",disabled:!n.inputValue.length,onClick:function(){return e.clearInput(n.inputName)}},i.a.createElement(f.a,null))))}));return i.a.createElement(i.a.Fragment,null,n)})),U=n(136),B=n(157),T=n(145),A=n(149),L=n(148),S=n(144),P=n(146),$=n(147),R=Object(c.a)((function(e){return{resultPaper:{padding:e.spacing(2)},tableBody:{"&:before":{content:"''",display:"block",height:e.spacing(2)}},tableTitle:{textTransform:"capitalize",fontWeight:"500"},tableCell:{width:"50%",borderBottom:"none"},tableCellLeft:{paddingRight:2},tableCellRight:{paddingLeft:2},resultFormat:{fontWeight:"500",float:"left"}}})),J=function(e){var t=R(),n=Object(o.a)(e.inputs),a=n.filter((function(t){return!e.inputsWithValue.includes(t.inputName)}))[0].inputName,l=n.find((function(e){return"distance"===e.inputName})).normalizedValue,r=n.find((function(e){return"time"===e.inputName})).normalizedValue,u=n.find((function(e){return"pace"===e.inputName})).normalizedValue,c={distance:[{format:"mm",tooltip:"millimetres",value:parseFloat((r/(60*u)*1e5).toFixed(2))},{format:"cm",tooltip:"centimetres",value:parseFloat((r/(60*u)*1e4).toFixed(2))},{format:"m",tooltip:"metres",value:parseFloat((r/(60*u)*1e3).toFixed(2))},{format:"km",tooltip:"kilometres",value:parseFloat((r/(60*u)).toFixed(2))},{format:"mi",tooltip:"miles",value:parseFloat((r/(60*u)*1.609344).toFixed(2))}],time:[{format:"sec",tooltip:"seconds",value:parseFloat((l*(60*u)/1e3).toFixed(2))},{format:"min",tooltip:"minutes",value:parseFloat((l*u/1e3).toFixed(2))},{format:"h",tooltip:"hours",value:parseFloat((l*u/1e3/60).toFixed(2))},{format:"d",tooltip:"days",value:parseFloat((l*u/1e3/60/24).toFixed(2))},{format:"mo",tooltip:"months",value:parseFloat((l*u/1e3/60/24/(365/12)).toFixed(2))},{format:"yr",tooltip:"years",value:parseFloat((l*u/1e3/60/365).toFixed(2))}],pace:[{format:"min/km",tooltip:"minutes per kilometre",value:(r/(l/1e3)/60).toFixed(2)},{format:"min/mi",tooltip:"minutes per miles",value:(r/(l/1e3)/60*1.609344).toFixed(2)},{format:"km/h",tooltip:"kilometres per hour",value:(1e3*l/(3600*r)).toFixed(2)},{format:"m/s",tooltip:"metres per second",value:(l/r).toFixed(2)}]};return i.a.createElement(U.a,{elevation:3,className:t.resultPaper},i.a.createElement(S.a,null,i.a.createElement(T.a,{size:"small"},i.a.createElement(P.a,null,i.a.createElement($.a,null,i.a.createElement(L.a,{colSpan:"100%",align:"center"},i.a.createElement(h.a,{variant:"h4",component:"h3",className:t.tableTitle},a)))),i.a.createElement(A.a,{className:t.tableBody},c[a].map((function(e){return i.a.createElement($.a,{key:e.format},i.a.createElement(L.a,{className:"".concat(t.tableCell," ").concat(t.tableCellLeft)},i.a.createElement(h.a,{className:t.resultValue,align:"right"},e.value)),i.a.createElement(L.a,{align:"left",className:"".concat(t.tableCell," ").concat(t.tableCellRight)},i.a.createElement(B.a,{title:e.tooltip,placement:"right",arrow:!0},i.a.createElement(h.a,{className:t.resultFormat,align:"left"},e.format))))}))))))},Q=Object(c.a)((function(e){return{container:{marginBottom:e.spacing(4),marginTop:e.spacing(4)}}})),q=[{inputName:"distance",inputValue:"",inputUnit:"m",normalizedValue:null},{inputName:"time",inputValue:"",inputUnit:"sec",normalizedValue:null},{inputName:"pace",inputValue:"",inputUnit:"min/km",normalizedValue:null}],D=[],G={distance:[{unit:"m",inputHelper:"",normalize:function(e){return e}},{unit:"km",inputHelper:"",normalize:function(e){return 1e3*e}},{unit:"mi",inputHelper:"",normalize:function(e){return 1e3*e*1.609344}}],time:[{unit:"sec",inputHelper:"",normalize:function(e){return e}},{unit:"min",inputHelper:"",normalize:function(e){return 60*e}},{unit:"h",inputHelper:"",normalize:function(e){return 3600*e}}],pace:[{unit:"min/km",inputHelper:"",normalize:function(e){return e}},{unit:"min/mi",inputHelper:"",normalize:function(e){return e/1.609344}}]},K=function(e){var t=Q(),n=Object(a.useState)(q),l=Object(u.a)(n,2),r=l[0],c=l[1],d=Object(a.useState)(D),h=Object(u.a)(d,2),v=h[0],g=h[1];return i.a.createElement("div",{className:"App"},i.a.createElement(E,null),i.a.createElement(m.a,{maxWidth:"md",className:t.container},i.a.createElement(I,{updateInput:function(e,t){var n=Object(o.a)(r),a=n.findIndex((function(e){return e.inputName===t})),i=n.find((function(e){return e.inputName===t})).inputUnit,l=G[t].find((function(e){return e.unit===i}));n[a]={inputName:t,inputValue:e.target.value,inputUnit:i,normalizedValue:void 0===l?null:l.normalize(e.target.value)},c(n);var u=Object(o.a)(v);e.target.value.length&&"0"!==e.target.value||!u.includes(t)?u.includes(t)||"0"===e.target.value||u.push(t):u.splice(u.indexOf(t),1),g(u)},clearInput:function(e){var t=Object(o.a)(r),n=Object(o.a)(v);t.find((function(t){return t.inputName===e})).inputValue="",n.splice(n.indexOf(e),1),c(t),g(n)},updateUnit:function(e,t){var n=Object(o.a)(r),a=n.findIndex((function(e){return e.inputName===t}));n[a].inputUnit=e,n[a].normalizedValue=G[t].find((function(t){return t.unit===e})).normalize(n[a].inputValue),c(n)},units:G,inputs:r}),i.a.createElement(p.a,{fullWidth:!0,onClick:function(){c(q),g(D)},startIcon:i.a.createElement(f.a,null),variant:"contained",color:"primary",disabled:!v.length},"Clear All")),i.a.createElement(s.a,{variant:"middle"}),i.a.createElement(m.a,{maxWidth:"md",className:t.container},i.a.createElement(x,{inputsWithValue:v,inputs:r},i.a.createElement(J,{inputsWithValue:v,inputs:r}))))},M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(i.a.createElement(K,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/pacecalc",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/pacecalc","/service-worker.js");M?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):X(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):X(e)}))}}()}},[[79,1,2]]]);
//# sourceMappingURL=main.a97c12f4.chunk.js.map