import{y as x,J as g,a0 as U,c as D,w as e,_ as A,o as M,a as o,a1 as k,f as _,i as n,d as t,u as l,h as v,A as h,e as p,C as $,b as W,j as m,a2 as O,a3 as I,a4 as c,a5 as j,a6 as E,a7 as S,a8 as R,a9 as F,l as J}from"./index.ebbecb62.js";import{_ as w}from"./SectionTitle.6a4a9bf9.js";import{_ as P}from"./FormField.89c1882c.js";import{_ as N}from"./FormCheckRadioGroup.51dbcd24.js";import{C as q}from"./CardBoxComponentEmpty.3c065482.js";const z=n("p",null,"This is sample modal",-1),G=n("p",null,"This is sample modal",-1),H=n("p",null,"This is sample modal",-1),K=m(" Dark mode "),L={class:"text-center py-24 lg:py-12 text-gray-500 dark:text-slate-400"},Q=m(" Modal examples "),X={class:"space-y-12"},Y=n("div",{class:"space-y-3"},[n("p",null,"Click to see in action")],-1),Z=n("div",{class:"space-y-3"},[n("h1",{class:"text-2xl"}," Unhandled exception "),n("p",null,"Click to see in action")],-1),ll=n("div",{class:"space-y-3"},[n("h1",{class:"text-2xl"}," Success "),n("p",null,"Click to see in action")],-1),ol=n("h1",{class:"text-2xl text-gray-500 dark:text-slate-400"}," Notifications ",-1),el={class:"flex items-center justify-center mt-6"},tl=n("b",null,"Info state",-1),nl=m(". NotificationBar "),il=n("b",null,"Success state",-1),al=m(". NotificationBar "),sl=n("b",null,"Warning state",-1),ul=m(". NotificationBar "),dl=n("b",null,"Danger state",-1),cl=m(". NotificationBar "),rl=n("b",null,"Contrast",-1),fl=m(". NotificationBar "),ml=n("b",null,"White",-1),_l=m(". NotificationBar "),bl=m("Buttons"),hl=m("Cards"),pl={class:"grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2"},xl=n("div",{class:"text-center py-24 lg:py-12 text-gray-500 dark:text-slate-400"}," With title ",-1),gl=n("div",{class:"text-center py-24 lg:py-12 text-gray-500 dark:text-slate-400"}," With title, icons & footer ",-1),$l={__name:"UiView",setup(vl){const C=x(!1),B=x(!1),y=x(!1),V=x([]),f=g(()=>V.value.indexOf("outline")>-1),b=x([]),i=g(()=>b.value.indexOf("outline")>-1),a=g(()=>b.value.indexOf("small")>-1),s=g(()=>b.value.indexOf("disabled")>-1),u=g(()=>b.value.indexOf("rounded")>-1),T=U();return(wl,d)=>(M(),D(A,null,{default:e(()=>[o(k,{modelValue:C.value,"onUpdate:modelValue":d[0]||(d[0]=r=>C.value=r),title:"Please confirm action","button-label":"Confirm","has-cancel":""},{default:e(()=>[z]),_:1},8,["modelValue"]),o(k,{modelValue:B.value,"onUpdate:modelValue":d[1]||(d[1]=r=>B.value=r),"large-title":"Unhandled exception",button:"danger",shake:""},{default:e(()=>[G]),_:1},8,["modelValue"]),o(k,{modelValue:y.value,"onUpdate:modelValue":d[2]||(d[2]=r=>y.value=r),"large-title":"Success",button:"success"},{default:e(()=>[H]),_:1},8,["modelValue"]),o(w,{first:""},{default:e(()=>[K]),_:1}),o(v,null,{default:e(()=>[o(_,{class:"md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto"},{default:e(()=>[n("div",L,[o(t,{label:"Toggle",color:"contrast",onClick:d[3]||(d[3]=r=>l(T).setDarkMode())})])]),_:1})]),_:1}),o(w,null,{default:e(()=>[Q]),_:1}),o(v,null,{default:e(()=>[n("div",X,[o(_,{title:"Confirm modal","header-button-icon":l(O),class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto","is-hoverable":"",onClick:d[4]||(d[4]=r=>C.value=!0)},{footer:e(()=>[o(h,null,{default:e(()=>[o(t,{label:"Confirm",color:"info"}),o(t,{label:"Cancel",color:"info",outline:""})]),_:1})]),default:e(()=>[Y]),_:1},8,["header-button-icon"]),o(_,{class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto","is-hoverable":"",onClick:d[5]||(d[5]=r=>B.value=!0)},{footer:e(()=>[o(h,null,{default:e(()=>[o(t,{label:"Done",color:"danger"})]),_:1})]),default:e(()=>[Z]),_:1}),o(_,{class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto","is-hoverable":"",onClick:d[6]||(d[6]=r=>y.value=!0)},{footer:e(()=>[o(t,{label:"Done",color:"success"})]),default:e(()=>[ll]),_:1})])]),_:1}),o(w,{custom:""},{default:e(()=>[ol,n("div",el,[o(N,{modelValue:V.value,"onUpdate:modelValue":d[7]||(d[7]=r=>V.value=r),type:"switch",name:"notifications-switch",options:{outline:"Outline"}},null,8,["modelValue"])])]),_:1}),o(v,null,{default:e(()=>[o(p,{color:"info",icon:l(I),outline:l(f)},{right:e(()=>[o(t,{icon:l(c),label:"Button",color:"info",outline:l(f),small:""},null,8,["icon","outline"])]),default:e(()=>[tl,nl]),_:1},8,["icon","outline"]),o(p,{color:"success",icon:l(j),outline:l(f)},{right:e(()=>[o(t,{icon:l(c),label:"Button",color:"success",outline:l(f),small:""},null,8,["icon","outline"])]),default:e(()=>[il,al]),_:1},8,["icon","outline"]),o(p,{color:"warning",icon:l(E),outline:l(f)},{right:e(()=>[o(t,{icon:l(c),label:"Button",color:"warning",outline:l(f),small:""},null,8,["icon","outline"])]),default:e(()=>[sl,ul]),_:1},8,["icon","outline"]),o(p,{color:"danger",icon:l(S),outline:l(f)},{right:e(()=>[o(t,{icon:l(c),label:"Button",color:"danger",outline:l(f),small:""},null,8,["icon","outline"])]),default:e(()=>[dl,cl]),_:1},8,["icon","outline"]),o(p,{color:"contrast",icon:l(R),outline:l(f)},{default:e(()=>[rl,fl]),_:1},8,["icon","outline"]),o(p,{color:"white",icon:l(F),outline:l(f)},{default:e(()=>[ml,_l]),_:1},8,["icon","outline"])]),_:1}),o(w,null,{default:e(()=>[bl]),_:1}),o(v,null,{default:e(()=>[o(_,null,{default:e(()=>[o(P,{label:"Settings"},{default:e(()=>[o(N,{modelValue:b.value,"onUpdate:modelValue":d[8]||(d[8]=r=>b.value=r),name:"buttons-switch",type:"switch",options:{outline:"Outline",small:"Small",rounded:"Rounded",disabled:"Disabled"}},null,8,["modelValue"])]),_:1}),o($),o(h,null,{default:e(()=>[o(t,{color:"white",label:"Button",small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["small","outline","disabled","rounded-full"]),o(t,{color:"contrast",label:"Button",small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["small","outline","disabled","rounded-full"]),o(t,{color:"info",label:"Button",small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["small","outline","disabled","rounded-full"]),o(t,{color:"success",label:"Button",small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["small","outline","disabled","rounded-full"]),o(t,{color:"warning",label:"Button",small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["small","outline","disabled","rounded-full"]),o(t,{color:"danger",label:"Button",small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["small","outline","disabled","rounded-full"])]),_:1}),o($),o(h,null,{default:e(()=>[o(t,{color:"white",label:"Button",icon:l(c),small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["icon","small","outline","disabled","rounded-full"]),o(t,{color:"contrast",label:"Button",icon:l(c),small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["icon","small","outline","disabled","rounded-full"]),o(t,{color:"info",label:"Button",icon:l(c),small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["icon","small","outline","disabled","rounded-full"]),o(t,{color:"success",label:"Button",icon:l(c),small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["icon","small","outline","disabled","rounded-full"]),o(t,{color:"warning",label:"Button",icon:l(c),small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["icon","small","outline","disabled","rounded-full"]),o(t,{color:"danger",label:"Button",icon:l(c),small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["icon","small","outline","disabled","rounded-full"])]),_:1}),o($),o(h,null,{default:e(()=>[o(t,{color:"white",icon:l(c),small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["icon","small","outline","disabled","rounded-full"]),o(t,{color:"contrast",icon:l(c),small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["icon","small","outline","disabled","rounded-full"]),o(t,{color:"info",icon:l(c),small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["icon","small","outline","disabled","rounded-full"]),o(t,{color:"success",icon:l(c),small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["icon","small","outline","disabled","rounded-full"]),o(t,{color:"warning",icon:l(c),small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["icon","small","outline","disabled","rounded-full"]),o(t,{color:"danger",icon:l(c),small:l(a),outline:l(i),disabled:l(s),"rounded-full":l(u)},null,8,["icon","small","outline","disabled","rounded-full"])]),_:1})]),_:1})]),_:1}),o(w,null,{default:e(()=>[hl]),_:1}),o(v,null,{default:e(()=>[n("div",pl,[o(_,{title:"With Title",mb:""},{default:e(()=>[xl]),_:1}),o(_,{title:"Title, Icons & Footer",icon:l(J),"header-button-icon":l(O)},{footer:e(()=>[o(h,null,{default:e(()=>[o(t,{label:"Confirm",color:"info"}),o(t,{label:"Cancel",color:"info",outline:""})]),_:1})]),default:e(()=>[gl]),_:1},8,["icon","header-button-icon"])]),o(W,{icon:l(S),title:"Empty variation"},null,8,["icon"]),o(_,null,{default:e(()=>[o(q)]),_:1})]),_:1})]),_:1}))}};export{$l as default};
