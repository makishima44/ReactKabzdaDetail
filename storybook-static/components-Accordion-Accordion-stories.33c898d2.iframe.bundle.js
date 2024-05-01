/*! For license information please see components-Accordion-Accordion-stories.33c898d2.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_simple=self.webpackChunkreact_simple||[]).push([[851],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("@storybook/core-events/preview-errors"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/components/Accordion/Accordion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AccordionDemo:()=>AccordionDemo,CollapsedAccordion:()=>CollapsedAccordion,OpenedAccordion:()=>OpenedAccordion,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Accordion_stories});var dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Accordion(props){return console.log("Accorion rendering"),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(AccordionTitle,{title:props.titleValue,onChange:props.onChange}),!props.collapsed&&(0,jsx_runtime.jsx)(AccordionBody,{items:props.items,onClick:props.onClick})]})}const AccordionTitle=react.memo(AccordionTitleMemo);function AccordionTitleMemo(props){return console.log("AccordionTitle rendering"),(0,jsx_runtime.jsx)("h3",{onClick:event=>props.onChange(),children:props.title})}const AccordionBody=react.memo(AccordionBodyMemo);function AccordionBodyMemo(props){return console.log("AccordionTitle rendering"),(0,jsx_runtime.jsx)("ul",{children:props.items.map(((el,index)=>(0,jsx_runtime.jsx)("li",{onClick:()=>{props.onClick(el.value)},children:el.title},index)))})}Accordion.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{titleValue:{required:!0,tsType:{name:"string"},description:""},collapsed:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\r\n  title: string;\r\n  value: any;\r\n}",signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"value",value:{name:"any",required:!0}}]}}],raw:"ItemType[]"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""}}};const Accordion_stories={component:Accordion},onCHangeCallpack=(0,dist.XI)("хуй"),onClickCallback=(0,dist.XI)("some item was clicked"),CollapsedAccordion=()=>(0,jsx_runtime.jsx)(Accordion,{titleValue:"Collapsed Accordion",collapsed:!0,onChange:onCHangeCallpack,items:[],onClick:onClickCallback}),OpenedAccordion=()=>(0,jsx_runtime.jsx)(Accordion,{titleValue:"Opened Accordion",collapsed:!1,onChange:()=>{},items:[{title:"Dimych",value:1},{title:"Valera",value:2},{title:"Artem",value:3},{title:"Victor",value:4}],onClick:onClickCallback}),AccordionDemo=()=>{const[collapsed,setCollapsed]=(0,react.useState)(!1);return(0,jsx_runtime.jsx)(Accordion,{titleValue:"Accordion",collapsed,onChange:()=>{setCollapsed(!collapsed)},items:[{title:"Dimych",value:1},{title:"Valera",value:2},{title:"Artem",value:3},{title:"Victor",value:4}],onClick:onClickCallback})};CollapsedAccordion.parameters={...CollapsedAccordion.parameters,docs:{...CollapsedAccordion.parameters?.docs,source:{originalSource:'() => {\n  return <Accordion titleValue={"Collapsed Accordion"} collapsed={true} onChange={onCHangeCallpack} items={[]} onClick={onClickCallback} />;\n}',...CollapsedAccordion.parameters?.docs?.source}}},OpenedAccordion.parameters={...OpenedAccordion.parameters,docs:{...OpenedAccordion.parameters?.docs,source:{originalSource:'() => {\n  return <Accordion titleValue={"Opened Accordion"} collapsed={false} onChange={() => {}} items={[{\n    title: "Dimych",\n    value: 1\n  }, {\n    title: "Valera",\n    value: 2\n  }, {\n    title: "Artem",\n    value: 3\n  }, {\n    title: "Victor",\n    value: 4\n  }]} onClick={onClickCallback} />;\n}',...OpenedAccordion.parameters?.docs?.source}}},AccordionDemo.parameters={...AccordionDemo.parameters,docs:{...AccordionDemo.parameters?.docs,source:{originalSource:'() => {\n  const [collapsed, setCollapsed] = useState(false);\n  return <Accordion titleValue={"Accordion"} collapsed={collapsed} onChange={() => {\n    setCollapsed(!collapsed);\n  }} items={[{\n    title: "Dimych",\n    value: 1\n  }, {\n    title: "Valera",\n    value: 2\n  }, {\n    title: "Artem",\n    value: 3\n  }, {\n    title: "Victor",\n    value: 4\n  }]} onClick={onClickCallback} />;\n}',...AccordionDemo.parameters?.docs?.source}}};const __namedExportsOrder=["CollapsedAccordion","OpenedAccordion","AccordionDemo"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);