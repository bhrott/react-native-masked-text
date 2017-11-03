Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _tinymask=require('tinymask');var _tinymask2=_interopRequireDefault(_tinymask);
var _base=require('./_base.mask');var _base2=_interopRequireDefault(_base);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var DEFAULT_TRANSLATION={
'9':function _(val){
return val.replace(/[^0-9]+/g,'');
},
'A':function A(val){
return val.replace(/[^a-zA-Z]+/g,'');
},
'S':function S(val){
return val.replace(/[^a-zA-Z0-9]+/g,'');
},
'*':function _(val){
return val;
}};


var invalidValues=[null,undefined,''];var

CustomMask=function(_BaseMask){_inherits(CustomMask,_BaseMask);function CustomMask(){_classCallCheck(this,CustomMask);return _possibleConstructorReturn(this,(CustomMask.__proto__||Object.getPrototypeOf(CustomMask)).apply(this,arguments));}_createClass(CustomMask,[{key:'getKeyboardType',value:function getKeyboardType()




{
return"default";
}},{key:'getValue',value:function getValue(

value,settings){
if(value===''){
return value;
}var
mask=settings.mask;
var translation=this.mergeSettings(DEFAULT_TRANSLATION,settings.translation);

var masked=new _tinymask2.default(mask,{translation:translation}).mask(this.removeWhiteSpaces(value));
return masked;
}},{key:'getRawValue',value:function getRawValue(

maskedValue,settings){
if(!!settings&&settings.getRawValue){
return settings.getRawValue(maskedValue,settings);
}

return maskedValue;
}},{key:'validate',value:function validate(

value,settings){
if(!!settings&&settings.validator){
return settings.validator(value,settings);
}

return true;
}}],[{key:'getType',value:function getType(){return'custom';}}]);return CustomMask;}(_base2.default);exports.default=CustomMask;