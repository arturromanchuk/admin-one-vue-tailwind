import{a as d}from"./FormField-41ad3716.js";import{G as p,o as a,p as u,a2 as f,a3 as y,c as b,q as s}from"./index-6a9948d3.js";const g={__name:"FormCheckRadioGroup",props:{options:{type:Object,default:()=>{}},name:{type:String,required:!0},type:{type:String,default:"checkbox",validator:e=>["checkbox","radio","switch"].includes(e)},componentClass:{type:String,default:null},isColumn:Boolean,modelValue:{type:[Array,String,Number,Boolean],default:null}},emits:["update:modelValue"],setup(e,{emit:m}){const r=e,l=p({get:()=>r.modelValue,set:t=>{m("update:modelValue",t)}});return(t,o)=>(a(),u("div",{class:s(["flex justify-start flex-wrap -mb-3",{"flex-col":e.isColumn}])},[(a(!0),u(f,null,y(e.options,(c,n)=>(a(),b(d,{key:n,modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=i=>l.value=i),type:e.type,name:e.name,"input-value":n,label:c,class:s([e.componentClass,"mr-6 mb-3 last:mr-0"])},null,8,["modelValue","type","name","input-value","label","class"]))),128))],2))}};export{g as _};