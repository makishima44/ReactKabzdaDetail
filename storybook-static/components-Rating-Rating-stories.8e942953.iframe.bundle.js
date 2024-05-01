/*! For license information please see components-Rating-Rating-stories.8e942953.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_simple=self.webpackChunkreact_simple||[]).push([[823],{"./src/components/Rating/Rating.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EmptyRating:()=>EmptyRating,Rating1:()=>Rating1,Rating2:()=>Rating2,Rating3:()=>Rating3,Rating4:()=>Rating4,Rating5:()=>Rating5,RatingChanging:()=>RatingChanging,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Rating_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Rating(props){return console.log("Rating rendering"),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Star,{selected:props.value>0,onClick:props.onClick,value:1}),(0,jsx_runtime.jsx)(Star,{selected:props.value>1,onClick:props.onClick,value:2}),(0,jsx_runtime.jsx)(Star,{selected:props.value>2,onClick:props.onClick,value:3}),(0,jsx_runtime.jsx)(Star,{selected:props.value>3,onClick:props.onClick,value:4}),(0,jsx_runtime.jsx)(Star,{selected:props.value>4,onClick:props.onClick,value:5})]})}const Star=react.memo(StarMemo);function StarMemo(props){return console.log("Star rendering"),(0,jsx_runtime.jsx)("span",{onClick:()=>{props.onClick(props.value)},children:props.selected?(0,jsx_runtime.jsx)("b",{children:"star "}):"star "})}Rating.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{value:{required:!0,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 4 | 5",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"4"},{name:"literal",value:"5"}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: RatingValueType) => void",signature:{arguments:[{type:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 4 | 5",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"4"},{name:"literal",value:"5"}]},name:"value"}],return:{name:"void"}}},description:""}}};const Rating_stories={title:"Rating stories",component:Rating},EmptyRating=()=>(0,jsx_runtime.jsx)(Rating,{value:0,onClick:x=>x}),Rating1=()=>(0,jsx_runtime.jsx)(Rating,{value:1,onClick:x=>x}),Rating2=()=>(0,jsx_runtime.jsx)(Rating,{value:2,onClick:x=>x}),Rating3=()=>(0,jsx_runtime.jsx)(Rating,{value:3,onClick:x=>x}),Rating4=()=>(0,jsx_runtime.jsx)(Rating,{value:4,onClick:x=>x}),Rating5=()=>(0,jsx_runtime.jsx)(Rating,{value:5,onClick:x=>x}),RatingChanging=()=>{const[rating,setRating]=(0,react.useState)(5);return(0,jsx_runtime.jsx)(Rating,{value:rating,onClick:setRating})};EmptyRating.parameters={...EmptyRating.parameters,docs:{...EmptyRating.parameters?.docs,source:{originalSource:"() => {\n  return <Rating value={0} onClick={x => x} />;\n}",...EmptyRating.parameters?.docs?.source}}},Rating1.parameters={...Rating1.parameters,docs:{...Rating1.parameters?.docs,source:{originalSource:"() => {\n  return <Rating value={1} onClick={x => x} />;\n}",...Rating1.parameters?.docs?.source}}},Rating2.parameters={...Rating2.parameters,docs:{...Rating2.parameters?.docs,source:{originalSource:"() => {\n  return <Rating value={2} onClick={x => x} />;\n}",...Rating2.parameters?.docs?.source}}},Rating3.parameters={...Rating3.parameters,docs:{...Rating3.parameters?.docs,source:{originalSource:"() => {\n  return <Rating value={3} onClick={x => x} />;\n}",...Rating3.parameters?.docs?.source}}},Rating4.parameters={...Rating4.parameters,docs:{...Rating4.parameters?.docs,source:{originalSource:"() => {\n  return <Rating value={4} onClick={x => x} />;\n}",...Rating4.parameters?.docs?.source}}},Rating5.parameters={...Rating5.parameters,docs:{...Rating5.parameters?.docs,source:{originalSource:"() => {\n  return <Rating value={5} onClick={x => x} />;\n}",...Rating5.parameters?.docs?.source}}},RatingChanging.parameters={...RatingChanging.parameters,docs:{...RatingChanging.parameters?.docs,source:{originalSource:"() => {\n  const [rating, setRating] = useState<RatingValueType>(5);\n  return <Rating value={rating} onClick={setRating} />;\n}",...RatingChanging.parameters?.docs?.source}}};const __namedExportsOrder=["EmptyRating","Rating1","Rating2","Rating3","Rating4","Rating5","RatingChanging"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);