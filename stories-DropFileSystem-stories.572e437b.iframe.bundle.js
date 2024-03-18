"use strict";(self.webpackChunkfile_upload_hooks=self.webpackChunkfile_upload_hooks||[]).push([[293],{"./src/stories/DropFileSystem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DropFileSystem:()=>DropFileSystem,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DropFileSystem_stories});var react=__webpack_require__("./node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const src_useDropData=function(ref,options){var _useState=_sliced_to_array((0,react.useState)(!1),2),isOver=_useState[0],setIsOver=_useState[1],_useState1=_sliced_to_array((0,react.useState)(null),2),dataTransfer=_useState1[0],setDataTransfer=_useState1[1];return(0,react.useEffect)((function(){var _ref_current,_ref_current1,_ref_current2,_ref_current3,_ref_current4;if(!(null==options?void 0:options.disabled)){var onDragOver=function(event){event.preventDefault(),setIsOver(!0)},onDragEnter=function(event){event.preventDefault(),setIsOver(!0)},onDragLeave=function(){setIsOver(!1)},onDragExit=function(){setIsOver(!1)},onDrop=function(event){event.preventDefault(),setIsOver(!1),setDataTransfer(event.dataTransfer)};return null===(_ref_current=ref.current)||void 0===_ref_current||_ref_current.addEventListener("dragover",onDragOver),null===(_ref_current1=ref.current)||void 0===_ref_current1||_ref_current1.addEventListener("dragenter",onDragEnter),null===(_ref_current2=ref.current)||void 0===_ref_current2||_ref_current2.addEventListener("dragleave",onDragLeave),null===(_ref_current3=ref.current)||void 0===_ref_current3||_ref_current3.addEventListener("dragexit",onDragExit),null===(_ref_current4=ref.current)||void 0===_ref_current4||_ref_current4.addEventListener("drop",onDrop),function(){var _ref_current,_ref_current1,_ref_current2,_ref_current3,_ref_current4;null===(_ref_current=ref.current)||void 0===_ref_current||_ref_current.removeEventListener("dragover",onDragOver),null===(_ref_current1=ref.current)||void 0===_ref_current1||_ref_current1.removeEventListener("dragenter",onDragEnter),null===(_ref_current2=ref.current)||void 0===_ref_current2||_ref_current2.removeEventListener("dragleave",onDragLeave),null===(_ref_current3=ref.current)||void 0===_ref_current3||_ref_current3.removeEventListener("dragexit",onDragExit),null===(_ref_current4=ref.current)||void 0===_ref_current4||_ref_current4.removeEventListener("drop",onDrop)}}}),[ref.current,options]),[isOver,dataTransfer]};function utils_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _to_consumable_array(arr){return function _array_without_holes(arr){if(Array.isArray(arr))return utils_array_like_to_array(arr)}(arr)||function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function utils_unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return utils_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return utils_array_like_to_array(o,minLen)}(arr)||function _non_iterable_spread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}function getParent(fileEntry){return _getParent.apply(this,arguments)}function _getParent(){return(_getParent=_async_to_generator((function(fileEntry){var err;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return _state.trys.push([0,2,,3]),[4,new Promise((function(resolve,reject){return fileEntry.getParent((function(file){resolve(file.fullPath)}),reject)}))];case 1:return[2,_state.sent()];case 2:return err=_state.sent(),console.error("get_parent_error: ",err),[2];case 3:return[2]}}))}))).apply(this,arguments)}function getFileIntoShape(fileEntry){return _getFileIntoShape.apply(this,arguments)}function _getFileIntoShape(){return(_getFileIntoShape=_async_to_generator((function(fileEntry){var parentPath,err;return _ts_generator(this,(function(_state){switch(_state.label){case 0:return _state.trys.push([0,3,,4]),[4,getParent(fileEntry)];case 1:return parentPath=_state.sent(),[4,new Promise((function(resolve,reject){return fileEntry.file((function(file){var data={file,path:fileEntry.fullPath,folderPath:parentPath};resolve(data)}),reject)}))];case 2:return[2,_state.sent()];case 3:return err=_state.sent(),console.error("get_file_into_shape: ",err),[2];case 4:return[2]}}))}))).apply(this,arguments)}function readDirs(dirReader){return _readDirs.apply(this,arguments)}function _readDirs(){return(_readDirs=_async_to_generator((function(dirReader){var entries,readEntries,_entries;return _ts_generator(this,(function(_state){switch(_state.label){case 0:entries=[],_state.label=1;case 1:return[4,entriesPromise(dirReader)];case 2:readEntries=_state.sent(),(_entries=entries).push.apply(_entries,_to_consumable_array(readEntries)),_state.label=3;case 3:if(readEntries.length>0)return[3,1];_state.label=4;case 4:return[2,entries]}}))}))).apply(this,arguments)}function entriesPromise(dirReader){return _entriesPromise.apply(this,arguments)}function _entriesPromise(){return(_entriesPromise=_async_to_generator((function(dirReader){return _ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,new Promise((function(resolve,reject){dirReader.readEntries(resolve,reject)}))];case 1:return[2,_state.sent()]}}))}))).apply(this,arguments)}var getFileExtension=function(filename,options){if(!filename)return"";var ext=(/[^./\\]*$/.exec(filename)||[""])[0];return(null==options?void 0:options.preserveCase)?ext:ext.toUpperCase()},cleanFileName=function(name){return name.replace(/[&\/\\#, +()$~%'":*?<>{}]/g,"_")},excludedExtensions=["DS_STORE"];function processDataTransfer(dataTransfer){return _processDataTransfer.apply(this,arguments)}function _processDataTransfer(){return _processDataTransfer=_async_to_generator((function(dataTransfer){var allowedExtensions,files,emptyFolders,folders,list,i,entry,fileShape,filename,extension,_list,parentPath,result,_arguments=arguments;return _ts_generator(this,(function(_state){switch(_state.label){case 0:if(allowedExtensions=_arguments.length>1&&void 0!==_arguments[1]?_arguments[1]:[],!dataTransfer)throw new Error("No data transfer found");for(files=[],emptyFolders=[],folders=[],list=[],i=0;i<dataTransfer.length;i++)list.push(dataTransfer[i].webkitGetAsEntry());_state.label=1;case 1:return list.length>0?(entry=list.shift())?entry.isFile?[4,getFileIntoShape(entry)]:[3,3]:[3,6]:[3,7];case 2:if(fileShape=_state.sent()){if(filename=cleanFileName(fileShape.file.name),extension=getFileExtension(filename),excludedExtensions.includes(extension))return[3,1];if(allowedExtensions.length&&!allowedExtensions.includes(extension))return[3,1];files.push(fileShape)}return[3,6];case 3:return entry.isDirectory?[4,getParent(entry)]:[3,6];case 4:return parentPath=_state.sent(),[4,readDirs(entry.createReader())];case 5:(result=_state.sent())&&result.length||emptyFolders.push(entry.fullPath),(_list=list).push.apply(_list,_to_consumable_array(result)),folders.push({path:entry.fullPath,parentPath,name:entry.name}),_state.label=6;case 6:return[3,1];case 7:return[2,{files,folders,emptyFolders}]}}))})),_processDataTransfer.apply(this,arguments)}function useDropFileSystem_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function useDropFileSystem_asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function useDropFileSystem_sliced_to_array(arr,i){return function useDropFileSystem_array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function useDropFileSystem_iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function useDropFileSystem_unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return useDropFileSystem_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return useDropFileSystem_array_like_to_array(o,minLen)}(arr,i)||function useDropFileSystem_non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function useDropFileSystem_ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}const src_useDropFileSystem=function(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref_extensions=_ref.extensions,extensions=void 0===_ref_extensions?[]:_ref_extensions,_ref_disabled=_ref.disabled,disabled=void 0!==_ref_disabled&&_ref_disabled,ref=(0,react.useRef)(null),_useState=useDropFileSystem_sliced_to_array((0,react.useState)(null),2),result=_useState[0],setResult=_useState[1],_useDropData=useDropFileSystem_sliced_to_array(src_useDropData(ref,{disabled}),2),isOver=_useDropData[0],dropData=_useDropData[1];return(0,react.useEffect)((function(){(null==dropData?void 0:dropData.items.length)&&function useDropFileSystem_async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){useDropFileSystem_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){useDropFileSystem_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}((function(){var result;return useDropFileSystem_ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,processDataTransfer(null==dropData?void 0:dropData.items,extensions)];case 1:return result=_state.sent(),setResult(result),[2]}}))}))()}),[dropData,extensions]),[result,ref,isOver]};var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),main=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/stories/main.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(main.A,options);main.A&&main.A.locals&&main.A.locals;function DropFileSystem_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function DropFileSystem_stories_sliced_to_array(arr,i){return function DropFileSystem_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function DropFileSystem_stories_iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function DropFileSystem_stories_unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return DropFileSystem_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return DropFileSystem_stories_array_like_to_array(o,minLen)}(arr,i)||function DropFileSystem_stories_non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var DropFileSystem=function(){var _useDropFileSystem=DropFileSystem_stories_sliced_to_array(src_useDropFileSystem(),3),result=_useDropFileSystem[0],ref=_useDropFileSystem[1],style=function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({width:300,height:200,margin:"20px auto",border:"1px solid #000",display:"flex",alignItems:"center",justifyContent:"center"},_useDropFileSystem[2]?{border:"1px solid green",outline:"1px solid green",background:"#fefefe"}:{});return react.createElement("div",{style:{padding:10,width:500,margin:"0 auto"}},react.createElement("h1",null,react.createElement("strong",null,"useDropFileSystem")),react.createElement("p",null,"Use this hook to get both files and folders that are dragged into the drop zone. Sample below:"),react.createElement("div",{ref,style},"Drop files here"),react.createElement("pre",null,JSON.stringify(result,null,4)))};const DropFileSystem_stories={title:"File",component:DropFileSystem,parameters:{}};DropFileSystem.parameters={...DropFileSystem.parameters,docs:{...DropFileSystem.parameters?.docs,source:{originalSource:"() => {\n  const [result, ref, isOver] = useDropFileSystem();\n  const style: React.CSSProperties = {\n    width: 300,\n    height: 200,\n    margin: '20px auto',\n    border: '1px solid #000',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    ...(isOver ? {\n      border: '1px solid green',\n      outline: '1px solid green',\n      background: '#fefefe'\n    } : {})\n  };\n  return <div style={{\n    padding: 10,\n    width: 500,\n    margin: '0 auto'\n  }}>\n            <h1>\n                <strong>useDropFileSystem</strong>\n            </h1>\n            <p>\n                Use this hook to get both files and folders that are dragged\n                into the drop zone. Sample below:\n            </p>\n            <div ref={ref} style={style}>\n                Drop files here\n            </div>\n            <pre>{JSON.stringify(result, null, 4)}</pre>\n        </div>;\n}",...DropFileSystem.parameters?.docs?.source}}};const __namedExportsOrder=["DropFileSystem"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./src/stories/main.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"pre {\n    background-color: #fafafa;\n    font-size: 0.8rem;\n    overflow-x: scroll;\n    padding: 1.125em;\n}\n\npre code {\n    color: #000;\n}\n\np {\n    margin: 0;\n}\n","",{version:3,sources:["webpack://./src/stories/main.css"],names:[],mappings:"AAAA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,SAAS;AACb",sourcesContent:["pre {\n    background-color: #fafafa;\n    font-size: 0.8rem;\n    overflow-x: scroll;\n    padding: 1.125em;\n}\n\npre code {\n    color: #000;\n}\n\np {\n    margin: 0;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);