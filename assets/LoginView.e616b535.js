import{t as p,c as f,w as a,a9 as _,o as c,a as e,f as b,q as w,x as V,y as g,d as r,z as n,u as m,aa as $,F as y,Y as h}from"./index.5bdd6623.js";import{_ as k}from"./SectionFullScreen.97b715a3.js";import{_ as t,a as x}from"./FormField.945208d9.js";const v={__name:"LoginView",setup(P){const o=p({login:"john.doe",pass:"highly-secure-password-fYjUw-",remember:["remember"]}),i=$(),u=()=>{i.push("/dashboard")};return(U,s)=>(c(),f(_,null,{default:a(()=>[e(k,{bg:"purplePink"},{default:a(({cardClass:d})=>[e(b,{class:w(d),form:"",onSubmit:V(u,["prevent"])},{footer:a(()=>[e(g,null,{default:a(()=>[e(r,{type:"submit",color:"info",label:"Login"}),e(r,{to:"/dashboard",color:"info",outline:"",label:"Back"})]),_:1})]),default:a(()=>[e(t,{label:"Login",help:"Please enter your login"},{default:a(()=>[e(n,{modelValue:o.login,"onUpdate:modelValue":s[0]||(s[0]=l=>o.login=l),icon:m(y),name:"login",autocomplete:"username"},null,8,["modelValue","icon"])]),_:1}),e(t,{label:"Password",help:"Please enter your password"},{default:a(()=>[e(n,{modelValue:o.pass,"onUpdate:modelValue":s[1]||(s[1]=l=>o.pass=l),icon:m(h),type:"password",name:"password",autocomplete:"current-password"},null,8,["modelValue","icon"])]),_:1}),e(x,{modelValue:o.remember,"onUpdate:modelValue":s[2]||(s[2]=l=>o.remember=l),name:"remember",options:{remember:"Remember"}},null,8,["modelValue"])]),_:2},1032,["class","onSubmit"])]),_:1})]),_:1}))}};export{v as default};
