Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _maskResolver=require('./mask-resolver');var _maskResolver2=_interopRequireDefault(_maskResolver);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

BaseTextComponent=function(_Component){_inherits(BaseTextComponent,_Component);
function BaseTextComponent(props){_classCallCheck(this,BaseTextComponent);var _this=_possibleConstructorReturn(this,(BaseTextComponent.__proto__||Object.getPrototypeOf(BaseTextComponent)).call(this,
props));
_this.state={
type:props.type,
value:'',
options:null};


_this._resolveMaskHandler();return _this;
}_createClass(BaseTextComponent,[{key:'componentDidMount',value:function componentDidMount()

{
this._bindProps(this.props);
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){
this._bindProps(nextProps);
}},{key:'updateValue',value:function updateValue(

text){var _this2=this;
var self=this;

return new Promise(function(resolve,reject){
var maskedText=self._getMaskedValue(text);

if(self._mustUpdateValue(maskedText)){
self.setState({
value:maskedText},
function(){
resolve(maskedText);
});
}else
{
resolve(_this2.state.value);
}
});
}},{key:'isValid',value:function isValid()

{
return this._maskHandler.validate(
this._getDefaultValue(this.state.value),
this.state.options);

}},{key:'getRawValue',value:function getRawValue()

{
return this._maskHandler.getRawValue(
this._getDefaultValue(this.state.value),
this.state.options);

}},{key:'_mustUpdateValue',value:function _mustUpdateValue(

newValue){
return this.state.value!==newValue;
}},{key:'_resolveMaskHandler',value:function _resolveMaskHandler()

{
this._maskHandler=_maskResolver2.default.resolve(this.state.type);
}},{key:'_bindProps',value:function _bindProps(

props){
var self=this;
var changeMaskHandler=this.state.type!==props.type;

self.setState({
type:props.type,
options:props.options},
function(){
if(changeMaskHandler){
self._resolveMaskHandler();
}

var value=self._getDefaultMaskedValue(props.value);

self.setState({
value:value});

});
}},{key:'_getDefaultMaskedValue',value:function _getDefaultMaskedValue(

value){
if(this._getDefaultValue(value)===''){
return'';
}

return this._getMaskedValue(value);
}},{key:'_getMaskedValue',value:function _getMaskedValue(

value){
var oldValue=this.state.value;

return this._maskHandler.getValue(
this._getDefaultValue(value),
this.state.options,
oldValue);
}},{key:'_getDefaultValue',value:function _getDefaultValue(

value){
if(value===undefined||value===null){
return'';
}

return value;
}}]);return BaseTextComponent;}(_react.Component);exports.default=BaseTextComponent;