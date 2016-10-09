import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
// Ext Class - Ext.navigation.View
class extnavigationviewMetaData {
	public static XTYPE: string = 'navigationview';
	public static INPUTNAMES: string[] = [
		'activeItem',
		'alwaysOnTop',
		'autoDestroy',
		'axisLock',
		'baseCls',
		'bind',
		'border',
		'bottom',
		'cardSwitchAnimation',
		'centered',
		'cls',
		'contentEl',
		'control',
		'controller',
		'data',
		'defaultBackButtonText',
		'defaultListenerScope',
		'defaults',
		'defaultType',
		'disabled',
		'docked',
		'draggable',
		'enterAnimation',
		'exitAnimation',
		'flex',
		'floated',
		'fullscreen',
		'height',
		'hidden',
		'hideAnimation',
		'hideOnMaskTap',
		'html',
		'id',
		'itemId',
		'items',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'layout',
		'left',
		'listeners',
		'manageBorders',
		'margin',
		'masked',
		'maxHeight',
		'maxWidth',
		'minHeight',
		'minWidth',
		'modal',
		'navigationBar',
		'padding',
		'plugins',
		'publishes',
		'record',
		'reference',
		'referenceHolder',
		'relative',
		'renderTo',
		'right',
		'scrollable',
		'session',
		'shadow',
		'shim',
		'showAnimation',
		'style',
		'styleHtmlCls',
		'styleHtmlContent',
		'toFrontOnShow',
		'tooltip',
		'top',
		'touchAction',
		'tpl',
		'tplWriteMode',
		'translatable',
		'twoWayBindable',
		'ui',
		'useBodyElement',
		'userCls',
		'useTitleForBackButtonText',
		'viewModel',
		'width',
		'x',
		'xtype',
		'y',
		'zIndex',
		'fit',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'activate',parameters:'newActiveItem,navigationview,oldActiveItem'},
		{name:'add',parameters:'navigationview,item,index'},
		{name:'added',parameters:'navigationview,container,index'},
		{name:'back',parameters:'navigationview'},
		{name:'beforehide',parameters:'navigationview'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'navigationview'},
		{name:'beforetofront',parameters:'navigationview'},
		{name:'deactivate',parameters:'oldActiveItem,navigationview,newActiveItem'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'navigationview'},
		{name:'floatingchange',parameters:'navigationview,positioned'},
		{name:'fullscreen',parameters:'navigationview'},
		{name:'hide',parameters:'navigationview'},
		{name:'initialize',parameters:'navigationview'},
		{name:'move',parameters:'navigationview,item,toIndex,fromIndex'},
		{name:'moved',parameters:'navigationview,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'pop',parameters:'navigationview,view'},
		{name:'positionedchange',parameters:'navigationview,positioned'},
		{name:'push',parameters:'navigationview,view'},
		{name:'remove',parameters:'navigationview,item,index'},
		{name:'removed',parameters:'navigationview,container,index'},
		{name:'renderedchange',parameters:'navigationview,item,rendered'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'navigationview'},
		{name:'tofront',parameters:'navigationview'},
		{name:'updatedata',parameters:'navigationview,newData'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'activate',
		'add',
		'added',
		'back',
		'beforehide',
		'beforeorientationchange',
		'beforeshow',
		'beforetofront',
		'deactivate',
		'destroy',
		'erased',
		'floatingchange',
		'fullscreen',
		'hide',
		'initialize',
		'move',
		'moved',
		'orientationchange',
		'painted',
		'pop',
		'positionedchange',
		'push',
		'remove',
		'removed',
		'renderedchange',
		'resize',
		'show',
		'tofront',
		'updatedata',
		'ready'
];
}
@Component({
  selector: 'ext-' + extnavigationviewMetaData.XTYPE,
	inputs: extnavigationviewMetaData.INPUTNAMES,
	outputs: extnavigationviewMetaData.OUTPUTNAMES,
	providers: [{provide: extbase, useExisting: forwardRef(() => extnavigationview)}],
	template: '<template #dynamic></template>'
})
export class extnavigationview extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extnavigationviewMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,extnavigationviewMetaData);}
}