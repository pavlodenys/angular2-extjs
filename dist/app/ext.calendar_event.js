"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ext_base_1 = require('./ext.base');
var extcalendar_eventMetaData = (function () {
    function extcalendar_eventMetaData() {
    }
    extcalendar_eventMetaData.XTYPE = 'calendar-event';
    extcalendar_eventMetaData.INPUTNAMES = [
        'defaultTitle',
        'endDate',
        'mode',
        'model',
        'palette',
        'resize',
        'startDate',
        'timeFormat',
        'title',
        'touchAction',
        'view',
        'fit',
        'config'
    ];
    extcalendar_eventMetaData.OUTPUTS = [
        { name: 'ready', parameters: '' }
    ];
    extcalendar_eventMetaData.OUTPUTNAMES = [
        'ready'
    ];
    return extcalendar_eventMetaData;
}());
var extcalendar_event = (function (_super) {
    __extends(extcalendar_event, _super);
    function extcalendar_event(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extcalendar_eventMetaData);
    }
    extcalendar_event.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extcalendar_event.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extcalendar_eventMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extcalendar_event.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extcalendar_event.prototype, "dynamicRef", void 0);
    extcalendar_event = __decorate([
        core_1.Component({
            selector: 'ext-' + extcalendar_eventMetaData.XTYPE,
            inputs: extcalendar_eventMetaData.INPUTNAMES,
            outputs: extcalendar_eventMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extcalendar_event; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extcalendar_event);
    return extcalendar_event;
}(ext_base_1.extbase));
exports.extcalendar_event = extcalendar_event;