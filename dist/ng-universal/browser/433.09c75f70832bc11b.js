"use strict";(self.webpackChunkng_universal=self.webpackChunkng_universal||[]).push([[433],{433:(Fn,me,d)=>{d.d(me,{Fj:()=>b,on:()=>at,Oe:()=>pe,CE:()=>R,NI:()=>tt,u:()=>ot,cw:()=>S,sg:()=>P,x0:()=>T,u5:()=>Mn,wO:()=>lt,JJ:()=>Pt,JL:()=>Tt,F:()=>I,On:()=>et,wV:()=>nt,c5:()=>ut,UX:()=>Dn,Q7:()=>U,kI:()=>Ge,_Y:()=>Kt});var o=d(4650),ct=d(6895),ge=d(8306),_e=d(4742),ye=d(8421),ve=d(7669),Ce=d(5403),Ve=d(3268),Ae=d(1810),De=d(457),be=d(4004);let ht=(()=>{class n{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),g=(()=>{class n extends ht{}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const h=new o.OlP("NgValueAccessor"),Ee={provide:h,useExisting:(0,o.Gpc)(()=>b),multi:!0},we=new o.OlP("CompositionEventMode");let b=(()=>{class n extends ht{constructor(t,r,i){super(t,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Oe(){const n=(0,ct.q)()?(0,ct.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(t){this.setProperty("value",t??"")}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(we,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,r){1&t&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([Ee]),o.qOj]}),n})();function f(n){return null==n||("string"==typeof n||Array.isArray(n))&&0===n.length}function pt(n){return null!=n&&"number"==typeof n.length}const l=new o.OlP("NgValidators"),p=new o.OlP("NgAsyncValidators"),Se=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class Ge{static min(e){return function mt(n){return e=>{if(f(e.value)||f(n))return null;const t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}(e)}static max(e){return function gt(n){return e=>{if(f(e.value)||f(n))return null;const t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}(e)}static required(e){return _t(e)}static requiredTrue(e){return function yt(n){return!0===n.value?null:{required:!0}}(e)}static email(e){return vt(e)}static minLength(e){return Ct(e)}static maxLength(e){return function Vt(n){return e=>pt(e.value)&&e.value.length>n?{maxlength:{requiredLength:n,actualLength:e.value.length}}:null}(e)}static pattern(e){return At(e)}static nullValidator(e){return null}static compose(e){return Ot(e)}static composeAsync(e){return wt(e)}}function _t(n){return f(n.value)?{required:!0}:null}function vt(n){return f(n.value)||Se.test(n.value)?null:{email:!0}}function Ct(n){return e=>f(e.value)||!pt(e.value)?null:e.value.length<n?{minlength:{requiredLength:n,actualLength:e.value.length}}:null}function At(n){if(!n)return F;let e,t;return"string"==typeof n?(t="","^"!==n.charAt(0)&&(t+="^"),t+=n,"$"!==n.charAt(n.length-1)&&(t+="$"),e=new RegExp(t)):(t=n.toString(),e=n),r=>{if(f(r.value))return null;const i=r.value;return e.test(i)?null:{pattern:{requiredPattern:t,actualValue:i}}}}function F(n){return null}function Mt(n){return null!=n}function Dt(n){return(0,o.QGY)(n)?(0,De.D)(n):n}function bt(n){let e={};return n.forEach(t=>{e=null!=t?{...e,...t}:e}),0===Object.keys(e).length?null:e}function Ft(n,e){return e.map(t=>t(n))}function Et(n){return n.map(e=>function Be(n){return!n.validate}(e)?e:t=>e.validate(t))}function Ot(n){if(!n)return null;const e=n.filter(Mt);return 0==e.length?null:function(t){return bt(Ft(t,e))}}function j(n){return null!=n?Ot(Et(n)):null}function wt(n){if(!n)return null;const e=n.filter(Mt);return 0==e.length?null:function(t){return function Me(...n){const e=(0,ve.jO)(n),{args:t,keys:r}=(0,_e.D)(n),i=new ge.y(s=>{const{length:a}=t;if(!a)return void s.complete();const c=new Array(a);let y=a,C=a;for(let H=0;H<a;H++){let dt=!1;(0,ye.Xf)(t[H]).subscribe((0,Ce.x)(s,bn=>{dt||(dt=!0,C--),c[H]=bn},()=>y--,void 0,()=>{(!y||!dt)&&(C||s.next(r?(0,Ae.n)(r,c):c),s.complete())}))}});return e?i.pipe((0,Ve.Z)(e)):i}(Ft(t,e).map(Dt)).pipe((0,be.U)(bt))}}function L(n){return null!=n?wt(Et(n)):null}function Nt(n,e){return null===n?[e]:Array.isArray(n)?[...n,e]:[n,e]}function St(n){return n._rawValidators}function Gt(n){return n._rawAsyncValidators}function q(n){return n?Array.isArray(n)?n:[n]:[]}function E(n,e){return Array.isArray(n)?n.includes(e):n===e}function Bt(n,e){const t=q(e);return q(n).forEach(i=>{E(t,i)||t.push(i)}),t}function xt(n,e){return q(e).filter(t=>!E(n,t))}class kt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=j(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=L(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e){this.control&&this.control.reset(e)}hasError(e,t){return!!this.control&&this.control.hasError(e,t)}getError(e,t){return this.control?this.control.getError(e,t):null}}class u extends kt{get formDirective(){return null}get path(){return null}}class m extends kt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class It{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Pt=(()=>{class n extends It{constructor(t){super(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(m,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,r){2&t&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[o.qOj]}),n})(),Tt=(()=>{class n extends It{constructor(t){super(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(u,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,r){2&t&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[o.qOj]}),n})();const V="VALID",w="INVALID",v="PENDING",A="DISABLED";function z(n){return(N(n)?n.validators:n)||null}function Ut(n){return Array.isArray(n)?j(n):n||null}function J(n,e){return(N(e)?e.asyncValidators:n)||null}function Ht(n){return Array.isArray(n)?L(n):n||null}function N(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}function jt(n,e,t){const r=n.controls;if(!(e?Object.keys(r):r).length)throw new o.vHH(1e3,"");if(!r[t])throw new o.vHH(1001,"")}function Lt(n,e,t){n._forEachChild((r,i)=>{if(void 0===t[i])throw new o.vHH(1002,"")})}class Q{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=e,this._rawAsyncValidators=t,this._composedValidatorFn=Ut(this._rawValidators),this._composedAsyncValidatorFn=Ht(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===V}get invalid(){return this.status===w}get pending(){return this.status==v}get disabled(){return this.status===A}get enabled(){return this.status!==A}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._rawValidators=e,this._composedValidatorFn=Ut(e)}setAsyncValidators(e){this._rawAsyncValidators=e,this._composedAsyncValidatorFn=Ht(e)}addValidators(e){this.setValidators(Bt(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Bt(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(xt(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(xt(e,this._rawAsyncValidators))}hasValidator(e){return E(this._rawValidators,e)}hasAsyncValidator(e){return E(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=v,!1!==e.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=A,this.errors=null,this._forEachChild(r=>{r.disable({...e,onlySelf:!0})}),this._updateValue(),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...e,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=V,this._forEachChild(r=>{r.enable({...e,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors({...e,skipPristineCheck:t}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===V||this.status===v)&&this._runAsyncValidator(e.emitEvent)),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?A:V}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=v,this._hasOwnPendingAsyncValidator=!0;const t=Dt(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(!1!==t.emitEvent)}get(e){let t=e;return null==t||(Array.isArray(t)||(t=t.split(".")),0===t.length)?null:t.reduce((r,i)=>r&&r._find(i),this)}getError(e,t){const r=t?this.get(t):this;return r&&r.errors?r.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?A:this.errors?w:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(v)?v:this._anyControlsHaveStatus(w)?w:V}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){N(e)&&null!=e.updateOn&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(e){return null}}class S extends Q{constructor(e,t,r){super(z(t),J(r,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,r={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){Lt(this,0,e),Object.keys(e).forEach(r=>{jt(this,!0,r),this.controls[r].setValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){null!=e&&(Object.keys(e).forEach(r=>{const i=this.controls[r];i&&i.patchValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((r,i)=>{r.reset(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,r)=>(e[r]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,r)=>!!r._syncPendingControls()||t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{const r=this.controls[t];r&&e(r,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(const[t,r]of Object.entries(this.controls))if(this.contains(t)&&e(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,r,i)=>((r.enabled||this.disabled)&&(t[i]=r.value),t))}_reduceChildren(e,t){let r=e;return this._forEachChild((i,s)=>{r=t(r,i,s)}),r}_allControlsDisabled(){for(const e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}}function G(n,e){return[...e.path,n]}function M(n,e){Z(n,e),e.valueAccessor.writeValue(n.value),n.disabled&&e.valueAccessor.setDisabledState?.(!0),function je(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&qt(n,e)})}(n,e),function qe(n,e){const t=(r,i)=>{e.valueAccessor.writeValue(r),i&&e.viewToModelUpdate(r)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}(n,e),function Le(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&qt(n,e),"submit"!==n.updateOn&&n.markAsTouched()})}(n,e),function He(n,e){if(e.valueAccessor.setDisabledState){const t=r=>{e.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}(n,e)}function B(n,e,t=!0){const r=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(r),e.valueAccessor.registerOnTouched(r)),k(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function x(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Z(n,e){const t=St(n);null!==e.validator?n.setValidators(Nt(t,e.validator)):"function"==typeof t&&n.setValidators([t]);const r=Gt(n);null!==e.asyncValidator?n.setAsyncValidators(Nt(r,e.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();x(e._rawValidators,i),x(e._rawAsyncValidators,i)}function k(n,e){let t=!1;if(null!==n){if(null!==e.validator){const i=St(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==e.validator);s.length!==i.length&&(t=!0,n.setValidators(s))}}if(null!==e.asyncValidator){const i=Gt(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==e.asyncValidator);s.length!==i.length&&(t=!0,n.setAsyncValidators(s))}}}const r=()=>{};return x(e._rawValidators,r),x(e._rawAsyncValidators,r),t}function qt(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Yt(n,e){Z(n,e)}function X(n,e){if(!n.hasOwnProperty("model"))return!1;const t=n.model;return!!t.isFirstChange()||!Object.is(e,t.currentValue)}function Wt(n,e){n._syncPendingControls(),e.forEach(t=>{const r=t.control;"submit"===r.updateOn&&r._pendingChange&&(t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function K(n,e){if(!e)return null;let t,r,i;return Array.isArray(e),e.forEach(s=>{s.constructor===b?t=s:function We(n){return Object.getPrototypeOf(n.constructor)===g}(s)?r=s:i=s}),i||r||t||null}const Je={provide:u,useExisting:(0,o.Gpc)(()=>I)},D=(()=>Promise.resolve(null))();let I=(()=>{class n extends u{constructor(t,r){super(),this.submitted=!1,this._directives=new Set,this.ngSubmit=new o.vpe,this.form=new S({},j(t),L(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){D.then(()=>{const r=this._findContainer(t.path);t.control=r.registerControl(t.name,t.control),M(t.control,t),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){D.then(()=>{const r=this._findContainer(t.path);r&&r.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){D.then(()=>{const r=this._findContainer(t.path),i=new S({});Yt(i,t),r.registerControl(t.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){D.then(()=>{const r=this._findContainer(t.path);r&&r.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,r){D.then(()=>{this.form.get(t.path).setValue(r)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,Wt(this.form,this._directives),this.ngSubmit.emit(t),!1}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(l,10),o.Y36(p,10))},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,r){1&t&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([Je]),o.qOj]}),n})();function zt(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}function Jt(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const tt=class extends Q{constructor(e=null,t,r){super(z(t),J(r,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),N(t)&&(t.nonNullable||t.initialValueIsDefault)&&(this.defaultValue=Jt(e)?e.value:e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){zt(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){zt(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(e){Jt(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};let Qt=(()=>{class n extends u{ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return G(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const Xe={provide:m,useExisting:(0,o.Gpc)(()=>et)},Xt=(()=>Promise.resolve(null))();let et=(()=>{class n extends m{constructor(t,r,i,s,a){super(),this._changeDetectorRef=a,this.control=new tt,this._registered=!1,this.update=new o.vpe,this._parent=t,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=K(0,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){const r=t.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),X(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){M(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(t){Xt.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){const r=t.isDisabled.currentValue,i=0!==r&&(0,o.D6c)(r);Xt.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?G(t,this._parent):[t]}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(u,9),o.Y36(l,10),o.Y36(p,10),o.Y36(h,10),o.Y36(o.sBO,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[o._Bn([Xe]),o.qOj,o.TTD]}),n})(),Kt=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})();const Ke={provide:h,useExisting:(0,o.Gpc)(()=>nt),multi:!0};let nt=(()=>{class n extends g{writeValue(t){this.setProperty("value",t??"")}registerOnChange(t){this.onChange=r=>{t(""==r?null:parseFloat(r))}}}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(t,r){1&t&&o.NdJ("input",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},features:[o._Bn([Ke]),o.qOj]}),n})(),te=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})();const rt=new o.OlP("NgModelWithFormControlWarning"),on={provide:u,useExisting:(0,o.Gpc)(()=>P)};let P=(()=>{class n extends u{constructor(t,r){super(),this.validators=t,this.asyncValidators=r,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new o.vpe,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(k(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const r=this.form.get(t.path);return M(r,t),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){B(t.control||null,t,!1),function ze(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,Wt(this.form,this.directives),this.ngSubmit.emit(t),!1}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const r=t.control,i=this.form.get(t.path);r!==i&&(B(r||null,t),(n=>n instanceof tt)(i)&&(M(i,t),t.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const r=this.form.get(t.path);Yt(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const r=this.form.get(t.path);r&&function Ye(n,e){return k(n,e)}(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Z(this.form,this),this._oldForm&&k(this._oldForm,this)}_checkFormPresent(){}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(l,10),o.Y36(p,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,r){1&t&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([on]),o.qOj,o.TTD]}),n})();const sn={provide:u,useExisting:(0,o.Gpc)(()=>T)};let T=(()=>{class n extends Qt{constructor(t,r,i){super(),this._parent=t,this._setValidators(r),this._setAsyncValidators(i)}_checkParentType(){oe(this._parent)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(u,13),o.Y36(l,10),o.Y36(p,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""]],inputs:{name:["formGroupName","name"]},features:[o._Bn([sn]),o.qOj]}),n})();const an={provide:u,useExisting:(0,o.Gpc)(()=>R)};let R=(()=>{class n extends u{constructor(t,r,i){super(),this._parent=t,this._setValidators(r),this._setAsyncValidators(i)}ngOnInit(){this._checkParentType(),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return G(null==this.name?this.name:this.name.toString(),this._parent)}_checkParentType(){oe(this._parent)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(u,13),o.Y36(l,10),o.Y36(p,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formArrayName",""]],inputs:{name:["formArrayName","name"]},features:[o._Bn([an]),o.qOj]}),n})();function oe(n){return!(n instanceof T||n instanceof P||n instanceof R)}const ln={provide:m,useExisting:(0,o.Gpc)(()=>ot)};let ot=(()=>{class n extends m{constructor(t,r,i,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.update=new o.vpe,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=K(0,s)}set isDisabled(t){}ngOnChanges(t){this._added||this._setUpControl(),X(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return G(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(t){return new(t||n)(o.Y36(u,13),o.Y36(l,10),o.Y36(p,10),o.Y36(h,10),o.Y36(rt,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[o._Bn([ln]),o.qOj,o.TTD]}),n})();let _=(()=>{class n{constructor(){this._validator=F}ngOnChanges(t){if(this.inputName in t){const r=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):F,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return null!=t}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=o.lG2({type:n,features:[o.TTD]}),n})();const _n={provide:l,useExisting:(0,o.Gpc)(()=>U),multi:!0};let U=(()=>{class n extends _{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=o.D6c,this.createValidator=t=>_t}enabled(t){return t}}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,r){2&t&&o.uIk("required",r._enabled?"":null)},inputs:{required:"required"},features:[o._Bn([_n]),o.qOj]}),n})();const vn={provide:l,useExisting:(0,o.Gpc)(()=>at),multi:!0};let at=(()=>{class n extends _{constructor(){super(...arguments),this.inputName="email",this.normalizeInput=o.D6c,this.createValidator=t=>vt}enabled(t){return t}}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["","email","","formControlName",""],["","email","","formControl",""],["","email","","ngModel",""]],inputs:{email:"email"},features:[o._Bn([vn]),o.qOj]}),n})();const Cn={provide:l,useExisting:(0,o.Gpc)(()=>lt),multi:!0};let lt=(()=>{class n extends _{constructor(){super(...arguments),this.inputName="minlength",this.normalizeInput=t=>function ae(n){return"number"==typeof n?n:parseInt(n,10)}(t),this.createValidator=t=>Ct(t)}}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["","minlength","","formControlName",""],["","minlength","","formControl",""],["","minlength","","ngModel",""]],hostVars:1,hostBindings:function(t,r){2&t&&o.uIk("minlength",r._enabled?r.minlength:null)},inputs:{minlength:"minlength"},features:[o._Bn([Cn]),o.qOj]}),n})();const An={provide:l,useExisting:(0,o.Gpc)(()=>ut),multi:!0};let ut=(()=>{class n extends _{constructor(){super(...arguments),this.inputName="pattern",this.normalizeInput=t=>t,this.createValidator=t=>At(t)}}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["","pattern","","formControlName",""],["","pattern","","formControl",""],["","pattern","","ngModel",""]],hostVars:1,hostBindings:function(t,r){2&t&&o.uIk("pattern",r._enabled?r.pattern:null)},inputs:{pattern:"pattern"},features:[o._Bn([An]),o.qOj]}),n})(),fe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[te]}),n})(),Mn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[fe]}),n})(),Dn=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:rt,useValue:t.warnOnNgModelWithFormControl}]}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[fe]}),n})();class pe extends Q{constructor(e,t,r){super(z(t),J(r,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,r={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(e,t={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,r={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),t&&(this.controls.splice(i,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){Lt(this,0,e),e.forEach((r,i)=>{jt(this,!1,i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){null!=e&&(e.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((r,i)=>{r.reset(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,r)=>!!r._syncPendingControls()||t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,r)=>{e(t,r)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(const e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}}}}]);