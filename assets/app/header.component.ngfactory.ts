/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './header.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/router/src/directives/router_link_active';
import * as import11 from '@angular/core/src/linker/query_list';
import * as import12 from '@angular/router/src/directives/router_link';
import * as import13 from '@angular/router/src/router';
import * as import14 from '@angular/core/src/linker/element_ref';
import * as import15 from '@angular/router/src/router_state';
import * as import16 from '@angular/common/src/location/location_strategy';
import * as import17 from '@angular/core/src/security';
var renderType_HeaderComponent_Host:import0.RenderComponentType = (null as any);
class _View_HeaderComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _HeaderComponent_0_4:import3.HeaderComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_HeaderComponent_Host0,renderType_HeaderComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-header',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_HeaderComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HeaderComponent_0_4 = new import3.HeaderComponent();
    this._appEl_0.initComponent(this._HeaderComponent_0_4,[],compView_0);
    compView_0.create(this._HeaderComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.HeaderComponent) && (0 === requestNodeIndex))) { return this._HeaderComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_HeaderComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_HeaderComponent_Host === (null as any))) { (renderType_HeaderComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_HeaderComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const HeaderComponentNgFactory:import9.ComponentFactory<import3.HeaderComponent> = new import9.ComponentFactory<import3.HeaderComponent>('app-header',viewFactory_HeaderComponent_Host0,import3.HeaderComponent);
const styles_HeaderComponent:any[] = [];
var renderType_HeaderComponent:import0.RenderComponentType = (null as any);
class _View_HeaderComponent0 extends import1.AppView<import3.HeaderComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _RouterLinkActive_7_3:import10.RouterLinkActive;
  _query_RouterLink_7_0:import11.QueryList<any>;
  _query_RouterLinkWithHref_7_1:import11.QueryList<any>;
  _el_8:any;
  _RouterLinkWithHref_8_3:import12.RouterLinkWithHref;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _RouterLinkActive_11_3:import10.RouterLinkActive;
  _query_RouterLink_11_0:import11.QueryList<any>;
  _query_RouterLinkWithHref_11_1:import11.QueryList<any>;
  _el_12:any;
  _RouterLinkWithHref_12_3:import12.RouterLinkWithHref;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  /*private*/ _expr_0:any;
  _arr_0:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  _arr_1:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_HeaderComponent0,renderType_HeaderComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'header',(null as any));
    this.renderer.setElementAttribute(this._el_1,'class','row');
    this._text_2 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'nav',(null as any));
    this.renderer.setElementAttribute(this._el_3,'class','col-md-8 col-md-offset-2');
    this._text_4 = this.renderer.createText(this._el_3,'\n                ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_3,'ul',(null as any));
    this.renderer.setElementAttribute(this._el_5,'class','nav nav-pills');
    this._text_6 = this.renderer.createText(this._el_5,'\n                    ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_5,'li',(null as any));
    this.renderer.setElementAttribute(this._el_7,'routerLinkActive','active');
    this._RouterLinkActive_7_3 = new import10.RouterLinkActive(this.parentInjector.get(import13.Router),new import14.ElementRef(this._el_7),this.renderer);
    this._query_RouterLink_7_0 = new import11.QueryList<any>();
    this._query_RouterLinkWithHref_7_1 = new import11.QueryList<any>();
    this._el_8 = this.renderer.createElement(this._el_7,'a',(null as any));
    this._RouterLinkWithHref_8_3 = new import12.RouterLinkWithHref(this.parentInjector.get(import13.Router),this.parentInjector.get(import15.ActivatedRoute),this.parentInjector.get(import16.LocationStrategy));
    this._text_9 = this.renderer.createText(this._el_8,'Messenger',(null as any));
    this._text_10 = this.renderer.createText(this._el_5,'\n                    ',(null as any));
    this._el_11 = this.renderer.createElement(this._el_5,'li',(null as any));
    this.renderer.setElementAttribute(this._el_11,'routerLinkActive','active');
    this._RouterLinkActive_11_3 = new import10.RouterLinkActive(this.parentInjector.get(import13.Router),new import14.ElementRef(this._el_11),this.renderer);
    this._query_RouterLink_11_0 = new import11.QueryList<any>();
    this._query_RouterLinkWithHref_11_1 = new import11.QueryList<any>();
    this._el_12 = this.renderer.createElement(this._el_11,'a',(null as any));
    this._RouterLinkWithHref_12_3 = new import12.RouterLinkWithHref(this.parentInjector.get(import13.Router),this.parentInjector.get(import15.ActivatedRoute),this.parentInjector.get(import16.LocationStrategy));
    this._text_13 = this.renderer.createText(this._el_12,'Authentication',(null as any));
    this._text_14 = this.renderer.createText(this._el_5,'\n                ',(null as any));
    this._text_15 = this.renderer.createText(this._el_3,'\n            ',(null as any));
    this._text_16 = this.renderer.createText(this._el_1,'\n        ',(null as any));
    this._text_17 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_8,'click',this.eventHandler(this._handle_click_8_0.bind(this)));
    this._arr_0 = import4.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_12,'click',this.eventHandler(this._handle_click_12_0.bind(this)));
    this._arr_1 = import4.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._text_16,
      this._text_17
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.RouterLinkWithHref) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._RouterLinkWithHref_8_3; }
    if (((token === import10.RouterLinkActive) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._RouterLinkActive_7_3; }
    if (((token === import12.RouterLinkWithHref) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._RouterLinkWithHref_12_3; }
    if (((token === import10.RouterLinkActive) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._RouterLinkActive_11_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_0:any = 'active';
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._RouterLinkActive_7_3.routerLinkActive = currVal_0;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLinkActive'] = new import7.SimpleChange(this._expr_0,currVal_0);
      this._expr_0 = currVal_0;
    }
    if ((changes !== (null as any))) { this._RouterLinkActive_7_3.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_2:any = this._arr_0('/messages');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._RouterLinkWithHref_8_3.routerLink = currVal_2;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_2,currVal_2);
      this._expr_2 = currVal_2;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_8_3.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_4:any = 'active';
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._RouterLinkActive_11_3.routerLinkActive = currVal_4;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLinkActive'] = new import7.SimpleChange(this._expr_4,currVal_4);
      this._expr_4 = currVal_4;
    }
    if ((changes !== (null as any))) { this._RouterLinkActive_11_3.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_6:any = this._arr_1('/auth');
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._RouterLinkWithHref_12_3.routerLink = currVal_6;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_6,currVal_6);
      this._expr_6 = currVal_6;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_12_3.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_RouterLink_7_0.dirty) {
        this._query_RouterLink_7_0.reset([]);
        this._RouterLinkActive_7_3.links = this._query_RouterLink_7_0;
        this._query_RouterLink_7_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_7_1.dirty) {
        this._query_RouterLinkWithHref_7_1.reset([this._RouterLinkWithHref_8_3]);
        this._RouterLinkActive_7_3.linksWithHrefs = this._query_RouterLinkWithHref_7_1;
        this._query_RouterLinkWithHref_7_1.notifyOnChanges();
      }
      if (this._query_RouterLink_11_0.dirty) {
        this._query_RouterLink_11_0.reset([]);
        this._RouterLinkActive_11_3.links = this._query_RouterLink_11_0;
        this._query_RouterLink_11_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_11_1.dirty) {
        this._query_RouterLinkWithHref_11_1.reset([this._RouterLinkWithHref_12_3]);
        this._RouterLinkActive_11_3.linksWithHrefs = this._query_RouterLinkWithHref_11_1;
        this._query_RouterLinkWithHref_11_1.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_7_3.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_11_3.ngAfterContentInit(); }
    }
    const currVal_3:any = this._RouterLinkWithHref_8_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementProperty(this._el_8,'href',this.viewUtils.sanitizer.sanitize(import17.SecurityContext.URL,currVal_3));
      this._expr_3 = currVal_3;
    }
    const currVal_7:any = this._RouterLinkWithHref_12_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementProperty(this._el_12,'href',this.viewUtils.sanitizer.sanitize(import17.SecurityContext.URL,currVal_7));
      this._expr_7 = currVal_7;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_8_3.ngOnDestroy();
    this._RouterLinkActive_7_3.ngOnDestroy();
    this._RouterLinkWithHref_12_3.ngOnDestroy();
    this._RouterLinkActive_11_3.ngOnDestroy();
  }
  private _handle_click_8_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_8_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
  private _handle_click_12_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_12_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_HeaderComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.HeaderComponent> {
  if ((renderType_HeaderComponent === (null as any))) { (renderType_HeaderComponent = viewUtils.createRenderComponentType('D:/webdesign/Messenger-Angular2-Nodejs-/assets/app/header.component.ts class HeaderComponent - inline template',0,import8.ViewEncapsulation.None,styles_HeaderComponent,{})); }
  return new _View_HeaderComponent0(viewUtils,parentInjector,declarationEl);
}