import { ChangeDetectorRef } from '@angular/core';
import { EventEmitter, ElementRef } from '@angular/core';
import { FormArray } from '@angular/forms';
import { AbstractComponent, AbstractHandleComponent } from './abstract.component';
import { DragDropConfig } from './dnd.config';
import { DragDropService, DragDropSortableService } from './dnd.service';
import * as i0 from "@angular/core";
export declare class SortableContainer extends AbstractComponent {
    private _sortableDataService;
    set draggable(value: boolean);
    private _sortableData;
    private sortableHandler;
    set sortableData(sortableData: Array<any> | FormArray);
    get sortableData(): Array<any> | FormArray;
    set dropzones(value: Array<string>);
    constructor(elemRef: ElementRef, dragDropService: DragDropService, config: DragDropConfig, cdr: ChangeDetectorRef, _sortableDataService: DragDropSortableService);
    _onDragEnterCallback(event: Event): void;
    getItemAt(index: number): any;
    indexOf(item: any): number;
    removeItemAt(index: number): void;
    insertItemAt(item: any, index: number): void;
    static ɵfac: i0.ɵɵFactoryDef<SortableContainer, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<SortableContainer, "[dnd-sortable-container]", never, { "draggable": "dragEnabled"; "sortableData": "sortableData"; "dropzones": "dropZones"; }, {}, never>;
}
export declare class SortableComponent extends AbstractComponent {
    private _sortableContainer;
    private _sortableDataService;
    index: number;
    set draggable(value: boolean);
    set droppable(value: boolean);
    /**
     * The data that has to be dragged. It can be any JS object
     */
    dragData: any;
    /**
     * Drag allowed effect
     */
    set effectallowed(value: string);
    /**
     * Drag effect cursor
     */
    set effectcursor(value: string);
    /**
     * Callback function called when the drag action ends with a valid drop action.
     * It is activated after the on-drop-success callback
     */
    onDragSuccessCallback: EventEmitter<any>;
    onDragStartCallback: EventEmitter<any>;
    onDragOverCallback: EventEmitter<any>;
    onDragEndCallback: EventEmitter<any>;
    onDropSuccessCallback: EventEmitter<any>;
    constructor(elemRef: ElementRef, dragDropService: DragDropService, config: DragDropConfig, _sortableContainer: SortableContainer, _sortableDataService: DragDropSortableService, cdr: ChangeDetectorRef);
    _onDragStartCallback(event: Event): void;
    _onDragOverCallback(event: Event): void;
    _onDragEndCallback(event: Event): void;
    _onDragEnterCallback(event: Event): void;
    _onDropCallback(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDef<SortableComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<SortableComponent, "[dnd-sortable]", never, { "index": "sortableIndex"; "draggable": "dragEnabled"; "droppable": "dropEnabled"; "dragData": "dragData"; "effectallowed": "effectAllowed"; "effectcursor": "effectCursor"; }, { "onDragSuccessCallback": "onDragSuccess"; "onDragStartCallback": "onDragStart"; "onDragOverCallback": "onDragOver"; "onDragEndCallback": "onDragEnd"; "onDropSuccessCallback": "onDropSuccess"; }, never>;
}
export declare class SortableHandleComponent extends AbstractHandleComponent {
    constructor(elemRef: ElementRef, dragDropService: DragDropService, config: DragDropConfig, _Component: SortableComponent, cdr: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDef<SortableHandleComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<SortableHandleComponent, "[dnd-sortable-handle]", never, {}, {}, never>;
}
