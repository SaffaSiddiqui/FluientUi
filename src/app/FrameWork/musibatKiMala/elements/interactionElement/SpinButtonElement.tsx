import {JSX} from 'react';
import {elementCategory} from '../../core/enums/elementCategory';
import {elementType} from '../../core/enums/elementType';
import {interactionElement} from '../../core/base/interactionElement';
import * as React from 'react';
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
import { IButtonStyles } from '@fluentui/react/lib/Button';
import { IStyleFunction } from '@fluentui/react/lib/Utilities';
import { ISpinButtonStyleProps, SpinButton, ISpinButtonStyles, IIconProps, Position } from '@fluentui/react';

export class SpinButtonElement extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.SpinButton, elementCategory.interaction, id, Name, title);
    }

    stackTokens: IStackTokens = { childrenGap: 20 };
    // By default the field grows to fit available width. Constrain the width instead.
    styles: Partial<ISpinButtonStyles> = { spinButtonWrapper: { width: 75 } };
//
    _stackTokens: IStackTokens = { childrenGap: 20 };
    _iconProps: IIconProps = { iconName: 'IncreaseIndentLegacy' };
    // By default the field grows to fit available width. Constrain the width instead.
    _styles: Partial<ISpinButtonStyles> = { spinButtonWrapper: { width: 75 } };
//
    __styles: Partial<ISpinButtonStyles> = { spinButtonWrapper: { width: 75 } };
//
    suffix = ' cm';
    min = 0;
    max = 100;
    // By default the field grows to fit available width. Constrain the width instead.
    ___styles: Partial<ISpinButtonStyles> = { spinButtonWrapper: { width: 75 } };

    /** Remove the suffix or any other text after the numbers, or return undefined if not a number */
    getNumericPart = (value: string): number | undefined => {
        const valueRegex = /^(\d+(\.\d+)?).*/;
        if (valueRegex.test(value)) {
            const numericValue = Number(value.replace(valueRegex, '$1'));
            return isNaN(numericValue) ? undefined : numericValue;
        }
        return undefined;
    };

    /** Increment the value (or return nothing to keep the previous value if invalid) */
    onIncrement = (value: string, event?: React.SyntheticEvent<HTMLElement>): string | void => {
        const numericValue = this.getNumericPart(value);
        if (numericValue !== undefined) {
            return String(Math.min(numericValue + 2, this.max)) + this.suffix;
        }
    };

    /** Decrement the value (or return nothing to keep the previous value if invalid) */
    onDecrement = (value: string, event?: React.SyntheticEvent<HTMLElement>): string | void => {
        const numericValue = this.getNumericPart(value);
        if (numericValue !== undefined) {
            return String(Math.max(numericValue - 2, this.min)) + this.suffix;
        }
    };

    /**
     * Clamp the value within the valid range (or return nothing to keep the previous value
     * if there's not valid numeric input)
     */
    onValidate = (value: string, event?: React.SyntheticEvent<HTMLElement>): string | void => {
        let numericValue = this.getNumericPart(value);
        if (numericValue !== undefined) {
            numericValue = Math.min(numericValue, this.max);
            numericValue = Math.max(numericValue, this.min);
            return String(numericValue) + this.suffix;
        }
    };

    /** This will be called after each change */
    onChange = (event: React.SyntheticEvent<HTMLElement>, value?: string): void => {
        console.log('Value changed to ' + value);
    };
//
    ____styles: IStyleFunction<ISpinButtonStyleProps, ISpinButtonStyles> = (props: ISpinButtonStyleProps) => {
        const { isFocused, theme } = props;
        return {
            spinButtonWrapper: [
                { width: 75 },
                // Example of conditional styling based on component state
                isFocused && {
                    outline: '5px solid ' + theme.palette.yellow,
                },
            ],
        };
    };
    upArrowButtonStyles: Partial<IButtonStyles> = {
        rootChecked: {
            backgroundColor: 'green',
        },
        rootPressed: {
            backgroundColor: 'green',
        },
    };
    downArrowButtonStyles: Partial<IButtonStyles> = {
        rootChecked: {
            backgroundColor: 'red',
        },
        rootPressed: {
            backgroundColor: 'red',
        },
    };
//
    // By default the field grows to fit available width. Constrain the width instead.
    _____styles: Partial<ISpinButtonStyles> = { spinButtonWrapper: { width: 75 } };   


//
    renderElement(): JSX.Element {

        const [value, setValue] = React.useState('5');
        const onChange = React.useCallback((event: React.SyntheticEvent<HTMLElement>, newValue?: string) => {
            if (newValue !== undefined) {
            // In reality this might have some additional validation or other special handling
            setValue(newValue);
            }
        }, []);
        // This SpinButton is controlled because it sets `value` instead of `defaultValue`.
        // This means that it will call `onChange` when the user makes updates, but those updates will
        // only be respected if `onChange` causes an update to the `value` prop.

        return(
            <>
                {/* 1 */}
                <Stack tokens={this.stackTokens}>
                    <SpinButton
                        label="Basic SpinButton"
                        defaultValue="0"
                        min={0}
                        max={100}
                        step={1}
                        incrementButtonAriaLabel="Increase value by 1"
                        decrementButtonAriaLabel="Decrease value by 1"
                        styles={this.styles}
                    />
                    <SpinButton
                        label="Decimal SpinButton"
                        defaultValue="0"
                        min={0}
                        max={10}
                        step={0.1}
                        incrementButtonAriaLabel="Increase value by 0.1"
                        decrementButtonAriaLabel="Decrease value by 0.1"
                        styles={this.styles}
                    />
                    <SpinButton
                        label="Disabled SpinButton"
                        disabled={true}
                        defaultValue="25"
                        min={0}
                        max={100}
                        step={1}
                        incrementButtonAriaLabel="Increase value by 1"
                        decrementButtonAriaLabel="Decrease value by 1"
                        styles={this.styles}
                    />
                </Stack>
                {/* line break */}
                <br></br><br></br>
                {/* 2 */}
                <Stack tokens={this._stackTokens}>
                    <SpinButton
                        label="With icon"
                        iconProps={this._iconProps}
                        defaultValue="0"
                        min={0}
                        max={100}
                        step={1}
                        incrementButtonAriaLabel="Increase value by 1"
                        decrementButtonAriaLabel="Decrease value by 1"
                        styles={this._styles}
                    />
                    <SpinButton
                        label="Disabled with icon"
                        iconProps={this._iconProps}
                        disabled={true}
                        defaultValue="0"
                        min={0}
                        max={100}
                        step={1}
                        incrementButtonAriaLabel="Increase value by 1"
                        decrementButtonAriaLabel="Decrease value by 1"
                        styles={this._styles}
                    />
                </Stack>
                {/* line break */}
                <br></br><br></br>
                {/* 3 */}
                <SpinButton
                    label="With label above"
                    labelPosition={Position.top}
                    defaultValue="0"
                    min={0}
                    max={100}
                    step={1}
                    incrementButtonAriaLabel="Increase value by 1"
                    decrementButtonAriaLabel="Decrease value by 1"
                    styles={this.__styles}
                />
                {/* line break */}
                <br></br><br></br>
                {/* 4 */}
                <div>
                    This SpinButton includes a suffix in the value and defines custom <code>onIncrement</code>,{' '}
                    <code>onDecrement</code>, and <code>onValidate</code> handlers which work with the suffix. It also has an{' '}
                    <code>onChange</code> handler.)
                    <br />
                    <br />
                    <SpinButton
                        label="With suffix"
                        defaultValue={'7' + this.suffix}
                        min={this.min}
                        max={this.max}
                        onValidate={this.onValidate}
                        onIncrement={this.onIncrement}
                        onDecrement={this.onDecrement}
                        onChange={this.onChange}
                        incrementButtonAriaLabel="Increase value by 2"
                        decrementButtonAriaLabel="Decrease value by 2"
                        styles={this.___styles}
                    />
                </div>
                {/* line break */}
                <br></br><br></br>
                {/* 5 */}
                <SpinButton
                    styles={this.____styles}
                    upArrowButtonStyles={this.upArrowButtonStyles}
                    downArrowButtonStyles={this.downArrowButtonStyles}
                    defaultValue="0"
                    label="Custom styled SpinButton"
                    min={0}
                    max={100}
                    step={1}
                    incrementButtonAriaLabel="Increase value by 1"
                    decrementButtonAriaLabel="Decrease value by 1"
                />
                {/* line break */}
                <br></br><br></br>
                {/* 6 */}
                <SpinButton
                    label="Controlled SpinButton"
                    value={value}
                    min={0}
                    max={100}
                    step={1}
                    onChange={onChange}
                    incrementButtonAriaLabel="Increase value by 1"
                    decrementButtonAriaLabel="Decrease value by 1"
                    styles={this._____styles}
                />
            </>
        );
    }
}