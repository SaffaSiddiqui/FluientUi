import {JSX} from 'react';
import {interactionElement} from '../../core/base/interactionElement';
import { elementCategory } from '../../core/enums/elementCategory';
import { elementType } from '../../core/enums/elementType';
import * as React from 'react';
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { TooltipHost } from '@fluentui/react/lib/Tooltip';
import { useId } from '@fluentui/react-hooks';

export class toggle extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.Toggle, elementCategory.interaction, id, Name, title);
    }

    stackTokens: IStackTokens = { childrenGap: 10 };

    _onChange(ev: React.MouseEvent<HTMLElement>, checked?: boolean) {
        console.log('toggle is ' + (checked ? 'checked' : 'not checked'));
    }
//
    buttonStyles = {
        root: {
            background: 'transparent',
            border: 'none',
            minWidth: '16px',
            padding: 0,
        },
    };
    onChange(ev: React.MouseEvent<HTMLElement>, checked?: boolean) {
        console.log('toggle is ' + (checked ? 'checked' : 'not checked'));
    }
//
    renderElement(): JSX.Element {

        const [showTooltip, setShowTooltip] = React.useState(false);
        const tooltipId = useId('tooltipId');
        const iconWithTooltip = (
            <>
            <TooltipHost content={showTooltip ? 'Info tooltip' : undefined} id={tooltipId}>
                <DefaultButton
                aria-label={'more info'}
                aria-describedby={showTooltip ? tooltipId : undefined}
                // eslint-disable-next-line react/jsx-no-bind
                onClick={() => setShowTooltip(!showTooltip)}
                styles={this.buttonStyles}
                iconProps={{ iconName: 'Info' }}
                />
            </TooltipHost>
            </>
        );


        return(
            <>
                {/* 1 */}
                <Stack tokens={this.stackTokens}>
                    <Toggle label="Enabled and checked" defaultChecked onText="On" offText="Off" onChange={this._onChange} />
                    <Toggle label="Enabled and unchecked" onText="On" offText="Off" onChange={this._onChange} />
                    <Toggle label="Disabled and checked" defaultChecked disabled onText="On" offText="Off" />
                    <Toggle label="Disabled and unchecked" disabled onText="On" offText="Off" />
                    <Toggle label="With inline label" inlineLabel onText="On" offText="Off" onChange={this._onChange} />
                    <Toggle label="Disabled with inline label" inlineLabel disabled onText="On" offText="Off" />
                    <Toggle label="With inline label and without onText and offText" inlineLabel onChange={this._onChange} />
                    <Toggle label="Disabled with inline label and without onText and offText" inlineLabel disabled />
                    <Toggle
                        label="Enabled and checked (ARIA 1.0 compatible)"
                        defaultChecked
                        onText="On"
                        offText="Off"
                        onChange={this._onChange}
                        role="checkbox"
                    />
                </Stack>
                {/* 2 */}
                <Stack tokens={this.stackTokens}>
                    <Toggle label={<div>Custom label {iconWithTooltip}</div>} onText="On" offText="Off" onChange={this.onChange} />

                    <Toggle
                        label={<div>Custom inline label {iconWithTooltip}</div>}
                        inlineLabel
                        onText="On"
                        offText="Off"
                        onChange={this.onChange}
                    />
                </Stack>
            </>
        );
    }
}