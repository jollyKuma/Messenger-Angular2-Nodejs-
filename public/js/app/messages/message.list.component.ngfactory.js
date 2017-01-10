/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './message.list.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './message.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/common/src/directives/ng_for';
import * as import12 from '@angular/core/src/linker/template_ref';
import * as import13 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import14 from './message.component';
import * as import15 from './message.component.ngfactory';
var renderType_MessageListComponent_Host = null;
var _View_MessageListComponent_Host0 = (function (_super) {
    __extends(_View_MessageListComponent_Host0, _super);
    function _View_MessageListComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MessageListComponent_Host0, renderType_MessageListComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MessageListComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('app-message-list', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_MessageListComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._MessageListComponent_0_4 = new import3.MessageListComponent(this.parentInjector.get(import8.MessageService));
        this._appEl_0.initComponent(this._MessageListComponent_0_4, [], compView_0);
        compView_0.create(this._MessageListComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_MessageListComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.MessageListComponent) && (0 === requestNodeIndex))) {
            return this._MessageListComponent_0_4;
        }
        return notFoundResult;
    };
    _View_MessageListComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._MessageListComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_MessageListComponent_Host0;
}(import1.AppView));
function viewFactory_MessageListComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MessageListComponent_Host === null)) {
        (renderType_MessageListComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_MessageListComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var MessageListComponentNgFactory = new import10.ComponentFactory('app-message-list', viewFactory_MessageListComponent_Host0, import3.MessageListComponent);
var styles_MessageListComponent = [];
var renderType_MessageListComponent = null;
var _View_MessageListComponent0 = (function (_super) {
    __extends(_View_MessageListComponent0, _super);
    function _View_MessageListComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MessageListComponent0, renderType_MessageListComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MessageListComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n        ', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_1, 'class', 'col-md-8 col-md-offset-2');
        this._text_2 = this.renderer.createText(this._el_1, '\n            ', null);
        this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1, null);
        this._appEl_3 = new import2.AppElement(3, 1, this, this._anchor_3);
        this._TemplateRef_3_5 = new import12.TemplateRef_(this._appEl_3, viewFactory_MessageListComponent1);
        this._NgFor_3_6 = new import11.NgFor(this._appEl_3.vcRef, this._TemplateRef_3_5, this.parentInjector.get(import13.IterableDiffers), this.ref);
        this._text_4 = this.renderer.createText(this._el_1, '\n        ', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._anchor_3,
            this._text_4,
            this._text_5
        ], [], []);
        return null;
    };
    _View_MessageListComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import12.TemplateRef) && (3 === requestNodeIndex))) {
            return this._TemplateRef_3_5;
        }
        if (((token === import11.NgFor) && (3 === requestNodeIndex))) {
            return this._NgFor_3_6;
        }
        return notFoundResult;
    };
    _View_MessageListComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_0 = this.context.messages;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgFor_3_6.ngForOf = currVal_0;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_0, currVal_0);
            this._expr_0 = currVal_0;
        }
        if ((changes !== null)) {
            this._NgFor_3_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_3_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_MessageListComponent0;
}(import1.AppView));
export function viewFactory_MessageListComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MessageListComponent === null)) {
        (renderType_MessageListComponent = viewUtils.createRenderComponentType('D:/webdesign/Messenger-Angular2-Nodejs-/assets/app/messages/message.list.component.ts class MessageListComponent - inline template', 0, import9.ViewEncapsulation.None, styles_MessageListComponent, {}));
    }
    return new _View_MessageListComponent0(viewUtils, parentInjector, declarationEl);
}
var _View_MessageListComponent1 = (function (_super) {
    __extends(_View_MessageListComponent1, _super);
    function _View_MessageListComponent1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MessageListComponent1, renderType_MessageListComponent, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MessageListComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'app-message', null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import15.viewFactory_MessageComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._MessageComponent_0_4 = new import14.MessageComponent(this.parent.parentInjector.get(import8.MessageService));
        this._appEl_0.initComponent(this._MessageComponent_0_4, [], compView_0);
        compView_0.create(this._MessageComponent_0_4, [], null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return null;
    };
    _View_MessageListComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.MessageComponent) && (0 === requestNodeIndex))) {
            return this._MessageComponent_0_4;
        }
        return notFoundResult;
    };
    _View_MessageListComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.$implicit;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._MessageComponent_0_4.message = currVal_0;
            this._expr_0 = currVal_0;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_MessageListComponent1;
}(import1.AppView));
function viewFactory_MessageListComponent1(viewUtils, parentInjector, declarationEl) {
    return new _View_MessageListComponent1(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=message.list.component.ngfactory.js.map