import {JSX} from 'react';
import {elementCategory} from '../../core/enums/elementCategory';
import {elementType} from '../../core/enums/elementType';
import {interactionElement} from '../../core/base/interactionElement';
import * as React from 'react';
import { ProgressIndicator } from '@fluentui/react/lib/ProgressIndicator';

export class ProgressIndicatorElement extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.ProgressIndicator, elementCategory.interaction, id, Name, title);
    }

    
    intervalDelay = 100;
    intervalIncrement = 0.01;
//

    renderElement(): JSX.Element {

        const [percentComplete, setPercentComplete] = React.useState(0);
        React.useEffect(() => {
            const id = setInterval(() => {
            setPercentComplete((this.intervalIncrement + percentComplete) % 1);
            }, this.intervalDelay);
            return () => {
            clearInterval(id);
            };
        });

//
        return(
            <>
                {/* 1 */}
                <ProgressIndicator 
                    label="Example title"
                    description="Example description" 
                    percentComplete={percentComplete} 
                />
                {/* line break */}
                <br></br>
                {/* 2 */}
                <ProgressIndicator 
                    label="Example title" 
                    description="Example description"
                />
            </>
        );
    }
}