import {elements} from './elemets';
import { elementType } from '../enums/elementType';
import { elementCategory } from '../enums/elementCategory';

export class interactionElement extends elements{
    elementType: elementType;
    elementCategory: elementCategory;
    
    constructor(
        elementType: elementType,
        elementCategory: elementCategory,
        id: string,
        Name: string,
        title: string,
        hidden: boolean = false,
        disabled: boolean = false,
        checked: boolean = false
    ){
        super(id ,Name, title, hidden, disabled, checked);
        this.elementType = elementType;
        this.elementCategory = elementCategory;
    }
}