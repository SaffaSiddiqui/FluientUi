import {JSX} from 'react';
import {elementCategory} from '../../core/enums/elementCategory';
import {elementType} from '../../core/enums/elementType';
import {interactionElement} from '../../core/base/interactionElement';
import * as React from 'react';
import { Label } from '@fluentui/react/lib/Label';
import { TextField } from '@fluentui/react/lib/TextField';
import { useId } from '@fluentui/react-hooks';

export class LabelElement extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.Label, elementCategory.interaction, id, Name, title);
    }

    renderElement(): JSX.Element {

        const textFieldId = useId('anInput');

        return(
            <>
                <div>
                    <Label>I'm a Label</Label>
                    <Label disabled>I'm a disabled Label</Label>
                    <Label required>I'm a required Label</Label>
                    <Label htmlFor={textFieldId}>A Label for An Input</Label>
                    <TextField id={textFieldId} />
                </div>
            </>
        );
    }
}