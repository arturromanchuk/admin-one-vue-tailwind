import{U as n,L as t,ac as c,ad as i,ae as l,af as d,o as u,s as g,w as p,n as m,p as f,u as w,S}from"./index.d436d301.js";const B={__name:"SectionFullScreen",props:{bg:{type:String,required:!0,validator:e=>["login","error"].includes(e)}},setup(e){const s=e,r=n(),a=t(()=>{switch(s.bg){case"login":return r.darkMode?l:d;case"error":return r.darkMode?c:i}return""});return(o,_)=>(u(),g(S,{class:f(["flex min-h-screen items-center justify-center",w(a)])},{default:p(()=>[m(o.$slots,"default",{cardClass:"w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl",cardRounded:"rounded-lg"})]),_:3},8,["class"]))}};export{B as _};
