import {JSX} from 'react';
import {elementCategory} from '../../core/enums/elementCategory';
import {elementType} from '../../core/enums/elementType';
import {interactionElement} from '../../core/base/interactionElement';
import * as React from 'react';
import { Spinner, SpinnerSize } from '@fluentui/react/lib/Spinner';
import { Label } from '@fluentui/react/lib/Label';
import { IStackTokens, IStackProps, Stack } from '@fluentui/react/lib/Stack';

export class SpinnerElement extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){

        super(elementType.Spinner, elementCategory.interaction, id, Name, title);
    }

    // This is just for laying out the label and spinner (spinners don't have to be inside a Stack)
    rowProps: IStackProps = { horizontal: true, verticalAlign: 'center' };
    tokens = {
        sectionStack: {
            childrenGap: 10,
        },
        spinnerStack: {
            childrenGap: 20,
        },
    };
//






    renderElement(): JSX.Element {

        const stackTokens: IStackTokens = {
            childrenGap: 20,
            maxWidth: 250,
        };

        return(
            <>
                {/* 1 */}
                <Stack tokens={this.tokens.sectionStack}>
                    <Stack {...this.rowProps} tokens={this.tokens.spinnerStack}>
                        <Label>Extra small spinner</Label>
                        <Spinner size={SpinnerSize.xSmall} />
                    </Stack>

                    <Stack {...this.rowProps} tokens={this.tokens.spinnerStack}>
                        <Label>Small spinner</Label>
                        <Spinner size={SpinnerSize.small} />
                    </Stack>

                    <Stack {...this.rowProps} tokens={this.tokens.spinnerStack}>
                        <Label>Medium spinner</Label>
                        <Spinner size={SpinnerSize.medium} />
                    </Stack>

                    <Stack {...this.rowProps} tokens={this.tokens.spinnerStack}>
                        <Label>Large spinner</Label>
                        <Spinner size={SpinnerSize.large} />
                    </Stack>
                </Stack>
                {/* line break */}
                <br></br><br></br>
                {/* 2 */}
                <Stack tokens={stackTokens}>
                    <div>
                        <Label>Spinner with label positioned below</Label>
                        <Spinner label="I am definitely loading..." />
                    </div>

                    <div>
                        <Label>Spinner with label positioned above</Label>
                        <Spinner label="Seriously, still loading..." ariaLive="assertive" labelPosition="top" />
                    </div>

                    <div>
                        <Label>Spinner with label positioned to right</Label>
                        <Spinner label="Wait, wait..." ariaLive="assertive" labelPosition="right" />
                    </div>

                    <div>
                        <Label>Spinner with label positioned to left</Label>
                        <Spinner label="Nope, still loading..." ariaLive="assertive" labelPosition="left" />
                    </div>
                </Stack>
            </>
        );
    }
}