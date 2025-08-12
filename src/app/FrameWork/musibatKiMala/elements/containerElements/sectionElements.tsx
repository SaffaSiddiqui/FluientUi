import {JSX} from 'react';
import {containerElement} from '../../core/base/containerElement';
import { elementCategory } from '../../core/enums/elementCategory';
import { elementType } from '../../core/enums/elementType';

export class sectionElements extends containerElement{
    constructor(
        id: string,
        Name: string,
        title: string,
        children: any[] = []
    ){
        super(
            elementType.section,
            elementCategory.container,
            id,
            Name,
            title,
            children
        );
    }
    renderElement(): JSX.Element{
        return(
            <section>
                <h2>{this.title}</h2>
                {this.children.map((child,index) => (   
                    <div key={index}>{child.renderElement()}</div>
                ))}
            </section>
        );
    }
}