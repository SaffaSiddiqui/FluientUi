import {JSX} from 'react';
import {interactionElement} from '../../core/base/interactionElement';
import { elementCategory } from '../../core/enums/elementCategory';
import { elementType } from '../../core/enums/elementType';
import * as React from 'react';
import { Checkbox, Stack } from '@fluentui/react';
import { ICheckboxProps } from '@fluentui/react/lib/Checkbox';
import { Link } from '@fluentui/react/lib/Link';

export class checkboxElement extends interactionElement{

    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.checkbox, elementCategory.interaction, id, Name, title);
    }

    // Used to add spacing between example checkboxes
    stackTokens = { childrenGap: 10 };

    _onChange(ev?: React.FormEvent<HTMLElement | HTMLInputElement>, isChecked?: boolean) {
        console.log(`The option has been changed to ${isChecked}.`);
    }
    
    // Optional extra props to pass through to the input element
    inputProps: ICheckboxProps['inputProps'] = {
        onFocus: () => console.log('Checkbox is focused'),
        onBlur: () => console.log('Checkbox is blurred'),
        // Passing data-* props is supported but currently requires casting
        ...({ 'data-foo': 'bar' } as any),
    };

    _renderLabelWithLink() {
        return (
            <span>
            Custom-rendered label with a link to{' '}
            <Link href="https://www.microsoft.com" target="_blank" underline>
                Microsoft home page
            </Link>
            </span>
        );
    }
    
//
    renderElement(): JSX.Element {

        const [isIndeterminate, setIsIndeterminate] = React.useState(true);
        const [isChecked, setIsChecked] = React.useState(false);
        const onChange = React.useCallback(
            (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, newChecked?: boolean) => {
            if (isIndeterminate) {
                // If the checkbox was indeterminate, the first click should remove the indeterminate state
                // without affecting the checked state
                setIsIndeterminate(false);
            } else {
                setIsChecked(!!newChecked);
            }
            },
            [isIndeterminate],
        );
//
        return(
            <>
                {/* 1 */}
                <Stack tokens={this.stackTokens}>
                    <Checkbox label="Unchecked checkbox (uncontrolled)" onChange={this._onChange} />

                    <Checkbox label="Checked checkbox (uncontrolled)" defaultChecked onChange={this._onChange} />

                    <Checkbox label="Disabled checkbox" disabled />

                    <Checkbox label="Disabled checked checkbox" disabled defaultChecked />
                </Stack>
                {/* 2 */}
                <Stack tokens={this.stackTokens}>
                    <Checkbox label="Controlled checkbox" defaultChecked />

                    <Checkbox label='Checkbox rendered with boxSide "end"' boxSide="end" />

                    <Checkbox label="Checkbox with link inside the label" onRenderLabel={this._renderLabelWithLink} />

                    {/* Checkbox doesn't currently support passing arbitrary native props through the root.
                    However, props for the hidden checkbox input element can be passed through `inputProps`. */}
                    <Checkbox label="Checkbox with extra props for the input (including data-*)" inputProps={this.inputProps} />
                </Stack>
                {/* 3 */}
                <Stack tokens={this.stackTokens}>
                    <Checkbox label="Indeterminate checkbox (uncontrolled)" defaultIndeterminate />
                    <Checkbox
                        label="Indeterminate checkbox which defaults to true when clicked (uncontrolled)"
                        defaultIndeterminate
                        defaultChecked={true}
                    />
                    <Checkbox label="Disabled indeterminate checkbox" disabled defaultIndeterminate />
                    <Checkbox
                        label="Indeterminate checkbox (controlled)"
                        indeterminate={isIndeterminate}
                        checked={isChecked}
                        onChange={onChange}
                    />
                </Stack>
            </>
        );
    }

    
}