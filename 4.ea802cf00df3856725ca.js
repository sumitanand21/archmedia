(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{pjqy:function(t,e,i){"use strict";i.r(e),i.d(e,"UserSpecsModule",(function(){return N}));var a=i("ofXK"),n=i("rDax"),o=i("+rOU"),s=i("fXoL"),l=i("FKr1"),r=i("cH1L"),c=i("XNiG"),g=i("NXyV"),d=i("LRne"),h=i("pLZG"),u=i("IzEk"),p=i("JX91"),m=i("R0Ic"),_=i("FtGj"),f=i("u47x");function b(t,e){}class y{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.maxWidth="80vw",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.autoFocus=!0,this.restoreFocus=!0,this.closeOnNavigation=!0}}const C={dialogContainer:Object(m.l)("dialogContainer",[Object(m.i)("void, exit",Object(m.j)({opacity:0,transform:"scale(0.7)"})),Object(m.i)("enter",Object(m.j)({transform:"none"})),Object(m.k)("* => enter",Object(m.e)("150ms cubic-bezier(0, 0, 0.2, 1)",Object(m.j)({transform:"none",opacity:1}))),Object(m.k)("* => void, * => exit",Object(m.e)("75ms cubic-bezier(0.4, 0.0, 0.2, 1)",Object(m.j)({opacity:0})))])};let v=(()=>{class t extends o.a{constructor(t,e,i,a,n,o){super(),this._elementRef=t,this._focusTrapFactory=e,this._changeDetectorRef=i,this._config=n,this._focusMonitor=o,this._animationStateChanged=new s.n,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this.attachDomPortal=t=>(this._portalOutlet.hasAttached(),this._portalOutlet.attachDomPortal(t)),this._ariaLabelledBy=n.ariaLabelledBy||null,this._document=a}_initializeWithAttachedContent(){this._setupFocusTrap(),this._capturePreviouslyFocusedElement(),this._focusDialogContainer()}attachComponentPortal(t){return this._portalOutlet.hasAttached(),this._portalOutlet.attachComponentPortal(t)}attachTemplatePortal(t){return this._portalOutlet.hasAttached(),this._portalOutlet.attachTemplatePortal(t)}_recaptureFocus(){this._containsFocus()||(!this._config.autoFocus||!this._focusTrap.focusInitialElement())&&this._elementRef.nativeElement.focus()}_trapFocus(){this._config.autoFocus?this._focusTrap.focusInitialElementWhenReady():this._containsFocus()||this._elementRef.nativeElement.focus()}_restoreFocus(){const t=this._elementFocusedBeforeDialogWasOpened;if(this._config.restoreFocus&&t&&"function"==typeof t.focus){const e=this._document.activeElement,i=this._elementRef.nativeElement;e&&e!==this._document.body&&e!==i&&!i.contains(e)||(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_setupFocusTrap(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement)}_capturePreviouslyFocusedElement(){this._document&&(this._elementFocusedBeforeDialogWasOpened=this._document.activeElement)}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const t=this._elementRef.nativeElement,e=this._document.activeElement;return t===e||t.contains(e)}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(s.l),s.Lb(f.d),s.Lb(s.h),s.Lb(a.d,8),s.Lb(y),s.Lb(f.c))},t.\u0275dir=s.Gb({type:t,viewQuery:function(t,e){var i;1&t&&s.oc(o.b,!0),2&t&&s.hc(i=s.Yb())&&(e._portalOutlet=i.first)},features:[s.xb]}),t})(),O=(()=>{class t extends v{constructor(){super(...arguments),this._state="enter"}_onAnimationDone({toState:t,totalTime:e}){"enter"===t?(this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})):"exit"===t&&(this._restoreFocus(),this._animationStateChanged.next({state:"closed",totalTime:e}))}_onAnimationStart({toState:t,totalTime:e}){"enter"===t?this._animationStateChanged.next({state:"opening",totalTime:e}):"exit"!==t&&"void"!==t||this._animationStateChanged.next({state:"closing",totalTime:e})}_startExitAnimation(){this._state="exit",this._changeDetectorRef.markForCheck()}}return t.\u0275fac=function(e){return w(e||t)},t.\u0275cmp=s.Fb({type:t,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1","aria-modal","true",1,"mat-dialog-container"],hostVars:6,hostBindings:function(t,e){1&t&&s.qc("@dialogContainer.start",(function(t){return e._onAnimationStart(t)}))("@dialogContainer.done",(function(t){return e._onAnimationDone(t)})),2&t&&(s.Tb("id",e._id),s.Bb("role",e._config.role)("aria-labelledby",e._config.ariaLabel?null:e._ariaLabelledBy)("aria-label",e._config.ariaLabel)("aria-describedby",e._config.ariaDescribedBy||null),s.rc("@dialogContainer",e._state))},features:[s.xb],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,e){1&t&&s.sc(0,b,0,0,"ng-template",0)},directives:[o.b],styles:[".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],encapsulation:2,data:{animation:[C.dialogContainer]}}),t})();const w=s.Sb(O);let x=0;class P{constructor(t,e,i="mat-dialog-"+x++){this._overlayRef=t,this._containerInstance=e,this.id=i,this.disableClose=this._containerInstance._config.disableClose,this._afterOpened=new c.a,this._afterClosed=new c.a,this._beforeClosed=new c.a,this._state=0,e._id=i,e._animationStateChanged.pipe(Object(h.a)(t=>"opened"===t.state),Object(u.a)(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(Object(h.a)(t=>"closed"===t.state),Object(u.a)(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),t.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._afterClosed.next(this._result),this._afterClosed.complete(),this.componentInstance=null,this._overlayRef.dispose()}),t.keydownEvents().pipe(Object(h.a)(t=>t.keyCode===_.h&&!this.disableClose&&!Object(_.r)(t))).subscribe(t=>{t.preventDefault(),j(this,"keyboard")}),t.backdropClick().subscribe(()=>{this.disableClose?this._containerInstance._recaptureFocus():j(this,"mouse")})}close(t){this._result=t,this._containerInstance._animationStateChanged.pipe(Object(h.a)(t=>"closing"===t.state),Object(u.a)(1)).subscribe(e=>{this._beforeClosed.next(t),this._beforeClosed.complete(),this._overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=1,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._afterClosed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._overlayRef.backdropClick()}keydownEvents(){return this._overlayRef.keydownEvents()}updatePosition(t){let e=this._getPositionStrategy();return t&&(t.left||t.right)?t.left?e.left(t.left):e.right(t.right):e.centerHorizontally(),t&&(t.top||t.bottom)?t.top?e.top(t.top):e.bottom(t.bottom):e.centerVertically(),this._overlayRef.updatePosition(),this}updateSize(t="",e=""){return this._getPositionStrategy().width(t).height(e),this._overlayRef.updatePosition(),this}addPanelClass(t){return this._overlayRef.addPanelClass(t),this}removePanelClass(t){return this._overlayRef.removePanelClass(t),this}getState(){return this._state}_finishDialogClose(){this._state=2,this._overlayRef.dispose()}_getPositionStrategy(){return this._overlayRef.getConfig().positionStrategy}}function j(t,e,i){return void 0!==t._containerInstance&&(t._containerInstance._closeInteractionType=e),t.close(i)}const M=new s.q("MatDialogData"),D=new s.q("mat-dialog-default-options"),k=new s.q("mat-dialog-scroll-strategy"),R={provide:k,deps:[n.a],useFactory:function(t){return()=>t.scrollStrategies.block()}};let A=(()=>{class t{constructor(t,e,i,a,n,o,s,l,r){this._overlay=t,this._injector=e,this._defaultOptions=i,this._parentDialog=a,this._overlayContainer=n,this._dialogRefConstructor=s,this._dialogContainerType=l,this._dialogDataToken=r,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new c.a,this._afterOpenedAtThisLevel=new c.a,this._ariaHiddenElements=new Map,this.afterAllClosed=Object(g.a)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Object(p.a)(void 0))),this._scrollStrategy=o}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){const t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}open(t,e){(e=function(t,e){return Object.assign(Object.assign({},e),t)}(e,this._defaultOptions||new y)).id&&this.getDialogById(e.id);const i=this._createOverlay(e),a=this._attachDialogContainer(i,e),n=this._attachDialogContent(t,a,i,e);return this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(n),n.afterClosed().subscribe(()=>this._removeOpenDialog(n)),this.afterOpened.next(n),a._initializeWithAttachedContent(),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_createOverlay(t){const e=this._getOverlayConfig(t);return this._overlay.create(e)}_getOverlayConfig(t){const e=new n.b({positionStrategy:this._overlay.position().global(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,disposeOnNavigation:t.closeOnNavigation});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachDialogContainer(t,e){const i=s.r.create({parent:e&&e.viewContainerRef&&e.viewContainerRef.injector||this._injector,providers:[{provide:y,useValue:e}]}),a=new o.c(this._dialogContainerType,e.viewContainerRef,i,e.componentFactoryResolver);return t.attach(a).instance}_attachDialogContent(t,e,i,a){const n=new this._dialogRefConstructor(i,e,a.id);if(t instanceof s.M)e.attachTemplatePortal(new o.f(t,null,{$implicit:a.data,dialogRef:n}));else{const i=this._createInjector(a,n,e),s=e.attachComponentPortal(new o.c(t,a.viewContainerRef,i));n.componentInstance=s.instance}return n.updateSize(a.width,a.height).updatePosition(a.position),n}_createInjector(t,e,i){const a=t&&t.viewContainerRef&&t.viewContainerRef.injector,n=[{provide:this._dialogContainerType,useValue:i},{provide:this._dialogDataToken,useValue:t.data},{provide:this._dialogRefConstructor,useValue:e}];return!t.direction||a&&a.get(r.b,null)||n.push({provide:r.b,useValue:{value:t.direction,change:Object(d.a)()}}),s.r.create({parent:a||this._injector,providers:n})}_removeOpenDialog(t){const e=this.openDialogs.indexOf(t);e>-1&&(this.openDialogs.splice(e,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((t,e)=>{t?e.setAttribute("aria-hidden",t):e.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const t=this._overlayContainer.getContainerElement();if(t.parentElement){const e=t.parentElement.children;for(let i=e.length-1;i>-1;i--){let a=e[i];a===t||"SCRIPT"===a.nodeName||"STYLE"===a.nodeName||a.hasAttribute("aria-live")||(this._ariaHiddenElements.set(a,a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))}}}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(n.a),s.Lb(s.r),s.Lb(void 0),s.Lb(void 0),s.Lb(n.c),s.Lb(void 0),s.Lb(s.O),s.Lb(s.O),s.Lb(s.q))},t.\u0275dir=s.Gb({type:t}),t})(),T=(()=>{class t extends A{constructor(t,e,i,a,n,o,s){super(t,e,a,o,s,n,P,O,M)}}return t.\u0275fac=function(e){return new(e||t)(s.Ub(n.a),s.Ub(s.r),s.Ub(a.h,8),s.Ub(D,8),s.Ub(k),s.Ub(t,12),s.Ub(n.c))},t.\u0275prov=s.Hb({token:t,factory:t.\u0275fac}),t})(),L=(()=>{class t{constructor(t,e,i){this.dialogRef=t,this._elementRef=e,this._dialog=i,this.type="button"}ngOnInit(){this.dialogRef||(this.dialogRef=function(t,e){let i=t.nativeElement.parentElement;for(;i&&!i.classList.contains("mat-dialog-container");)i=i.parentElement;return i?e.find(t=>t.id===i.id):null}(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){const e=t._matDialogClose||t._matDialogCloseResult;e&&(this.dialogResult=e.currentValue)}_onButtonClick(t){j(this.dialogRef,0===t.screenX&&0===t.screenY?"keyboard":"mouse",this.dialogResult)}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(P,8),s.Lb(s.l),s.Lb(T))},t.\u0275dir=s.Gb({type:t,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,e){1&t&&s.Xb("click",(function(t){return e._onButtonClick(t)})),2&t&&s.Bb("aria-label",e.ariaLabel||null)("type",e.type)},inputs:{type:"type",dialogResult:["mat-dialog-close","dialogResult"],ariaLabel:["aria-label","ariaLabel"],_matDialogClose:["matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[s.yb]}),t})(),F=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(e){return new(e||t)},providers:[T,R],imports:[[n.d,o.e,l.f],l.f]}),t})();var E=i("tyNb"),I=i("NFeN");let S=(()=>{class t{constructor(t,e){this.dialogRef=t,this.data=e}ngOnInit(){this.url=this.data.url}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(P),s.Lb(M))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-gallery-dialog"]],decls:5,vars:1,consts:[[1,"gallery-dialog-wrap"],["mat-dialog-close","","aria-label","close",1,"close-icon"],[1,"gallery-dialog"],[1,"img-new",3,"src"]],template:function(t,e){1&t&&(s.Qb(0,"div",0),s.Qb(1,"mat-icon",1),s.tc(2,"close"),s.Pb(),s.Qb(3,"div",2),s.Mb(4,"img",3),s.Pb(),s.Pb()),2&t&&(s.Ab(4),s.fc("src",e.url,s.lc))},directives:[I.a,L],styles:[".gallery-dialog-wrap[_ngcontent-%COMP%]{position:relative}.gallery-dialog[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.4196078431372549)}.img-new[_ngcontent-%COMP%]{object-fit:cover;max-width:80vw;max-height:80vh}.close-icon[_ngcontent-%COMP%]{position:absolute;right:12px;top:12px;font-size:22px;color:#fff}"]}),t})();function B(t,e){if(1&t){const t=s.Rb();s.Qb(0,"div",6),s.Qb(1,"div",7),s.tc(2),s.Pb(),s.Qb(3,"div",8),s.Xb("click",(function(){s.jc(t);const i=e.$implicit;return s.Zb().openGalleryModal(i.url)})),s.Mb(4,"img",9),s.Mb(5,"div",10),s.Pb(),s.Pb()}if(2&t){const t=e.$implicit;s.Ab(2),s.uc(t.tags),s.Ab(2),s.fc("src",t.url,s.lc)}}let z=(()=>{class t{constructor(t){this.dialog=t,this.imageUrl=[{url:"./assets/images/wedding.jpg",tags:"#wedding #love #weddinginspo"},{url:"./assets/images/rocks.jpg",tags:"#rocks #hard #bold"},{url:"./assets/images/mist.jpg",tags:"#moist #heaven"},{url:"./assets/images/mountainskies.jpg",tags:"#peak #inspiration"},{url:"./assets/images/nature.jpg",tags:"#nature #life #uplift"},{url:"./assets/images/paris.jpg",tags:"#love #effil"},{url:"./assets/images/269530.jpg",tags:"#wedding #love #weddinginspo"},{url:"./assets/images/269548.jpg",tags:"#rocks #hard #bold"},{url:"./assets/images/2204712.jpg",tags:"#moist #heaven"},{url:"./assets/images/3200191.jpg",tags:"#peak #inspiration"},{url:"./assets/images/amazing-universe-facebook-cover.jpg",tags:"#nature #life #uplift"},{url:"./assets/images/coffee.jpg",tags:"#love #effil"},{url:"./assets/images/colored-smoke.jpg",tags:"#wedding #love #weddinginspo"},{url:"./assets/images/conjucton.jpg",tags:"#rocks #hard #bold"},{url:"./assets/images/ocean.jpg",tags:"#moist #heaven"},{url:"./assets/images/redcc.jpg",tags:"#peak #inspiration"},{url:"./assets/images/winter.jpg",tags:"#nature #life #uplift"},{url:"./assets/images/world.jpg",tags:"#love #effil"},{url:"./assets/images/wp1833197.jpg",tags:"#wedding #love #weddinginspo"}]}ngOnInit(){}openGalleryModal(t){this.dialog.open(S,{maxWidth:"80vw",maxHeight:"80vh",panelClass:"display-model",data:{url:t}})}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(T))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-gallery"]],decls:7,vars:1,consts:[[1,"gallery-main"],[1,"gallery-header"],[1,"header-text"],[1,"gallery-wrap"],[1,"gallery-column"],["class","card-wrap",4,"ngFor","ngForOf"],[1,"card-wrap"],[1,"tags-wrap"],[1,"img-wrap",3,"click"],[1,"img-item",3,"src"],[1,"overlay-img"]],template:function(t,e){1&t&&(s.Qb(0,"div",0),s.Qb(1,"div",1),s.Qb(2,"div",2),s.tc(3," Image Gallery "),s.Pb(),s.Pb(),s.Qb(4,"div",3),s.Qb(5,"div",4),s.sc(6,B,6,2,"div",5),s.Pb(),s.Pb(),s.Pb()),2&t&&(s.Ab(6),s.fc("ngForOf",e.imageUrl))},directives:[a.k],styles:[".gallery-main[_ngcontent-%COMP%]{min-height:100%;width:100%;display:flex;flex-direction:column;background:linear-gradient(90deg,rgba(51,128,183,.2901960784313726),rgba(208,39,39,.12156862745098039))}.gallery-main[_ngcontent-%COMP%]   .gallery-header[_ngcontent-%COMP%]{font-size:18px;display:flex;align-items:center;justify-content:center;padding:32px 0}.gallery-main[_ngcontent-%COMP%]   .gallery-header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%]{font-size:32px;font-weight:500;box-shadow:0 4px 10px -11px rgba(0,0,0,.611764705882353);border-radius:4px;line-height:normal;background:linear-gradient(#14b7a2,rgba(56,47,183,.9490196078431372));-webkit-background-clip:text;background-clip:text;color:transparent}.gallery-main[_ngcontent-%COMP%]   .gallery-wrap[_ngcontent-%COMP%]{flex:1 1 auto;width:100%;margin:0}.gallery-main[_ngcontent-%COMP%]   .gallery-wrap[_ngcontent-%COMP%]   .gallery-column[_ngcontent-%COMP%]{display:grid;grid-gap:10px;padding:10px;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));grid-auto-rows:250px;grid-auto-flow:dense}.gallery-main[_ngcontent-%COMP%]   .gallery-wrap[_ngcontent-%COMP%]   .gallery-column[_ngcontent-%COMP%]   .card-wrap[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column}.gallery-main[_ngcontent-%COMP%]   .gallery-wrap[_ngcontent-%COMP%]   .gallery-column[_ngcontent-%COMP%]   .tags-wrap[_ngcontent-%COMP%]{display:flex;padding:8px;color:#00f}.gallery-main[_ngcontent-%COMP%]   .gallery-wrap[_ngcontent-%COMP%]   .gallery-column[_ngcontent-%COMP%]   .img-wrap[_ngcontent-%COMP%]{width:100%;flex:1 1 auto;overflow:hidden;transition:.5s;position:relative}.gallery-main[_ngcontent-%COMP%]   .gallery-wrap[_ngcontent-%COMP%]   .gallery-column[_ngcontent-%COMP%]   .img-wrap[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.gallery-main[_ngcontent-%COMP%]   .gallery-wrap[_ngcontent-%COMP%]   .gallery-column[_ngcontent-%COMP%]   .img-wrap[_ngcontent-%COMP%]:hover   .overlay-img[_ngcontent-%COMP%]{display:inherit}.gallery-main[_ngcontent-%COMP%]   .gallery-wrap[_ngcontent-%COMP%]   .gallery-column[_ngcontent-%COMP%]   .img-wrap[_ngcontent-%COMP%]   .overlay-img[_ngcontent-%COMP%]{display:none;top:0;background-color:rgba(33,120,202,.3686274509803922);height:100%;width:100%;position:absolute}.gallery-main[_ngcontent-%COMP%]   .gallery-wrap[_ngcontent-%COMP%]   .gallery-column[_ngcontent-%COMP%]   .img-item[_ngcontent-%COMP%]{width:100%;height:100%;max-height:100%;object-fit:cover;transition:.5s}.gallery-main[_ngcontent-%COMP%]   .gallery-wrap[_ngcontent-%COMP%]   .gallery-column[_ngcontent-%COMP%]   .img-item[_ngcontent-%COMP%]:hover{transform:scale(1.1)}"]}),t})();const Q=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Fb({type:t,selectors:[["app-user-specs"]],decls:2,vars:0,consts:[[1,"user-spec"]],template:function(t,e){1&t&&(s.Qb(0,"div",0),s.Mb(1,"router-outlet"),s.Pb())},directives:[E.i],styles:[".user-spec[_ngcontent-%COMP%]{height:100%;width:100%}"]}),t})(),children:[{path:"",redirectTo:"gallery",pathMatch:"full"},{path:"gallery",component:z}]},{path:"**",redirectTo:"userview",pathMatch:"full"}];let H=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(e){return new(e||t)},imports:[[E.h.forChild(Q)],E.h]}),t})(),N=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(e){return new(e||t)},imports:[[a.c,F,I.b,H]]}),t})()}}]);