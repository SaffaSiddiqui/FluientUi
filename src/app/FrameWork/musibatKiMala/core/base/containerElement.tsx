import {elements} from './elemets';
import { elementCategory } from '../enums/elementCategory';
import { elementType } from '../enums/elementType';

export class containerElement extends elements{
    elementTyp: elementType;
    elementCategor: elementCategory;
    children: elements[];

    constructor(
        elementType: elementType,
        elementCategory: elementCategory,
        id: string,
        Name: string,
        title: string,
        children: elements[] = [],
        hidden: boolean = false,
        disabled: boolean = false,
        checked: boolean = false
    ){
        super(id, Name, title, hidden, disabled, checked);
        this.elementTyp = elementType;
        this.elementCategor = elementCategory;
        this.children = children;
    }
}