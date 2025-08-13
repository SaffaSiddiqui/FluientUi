import {JSX} from 'react';
import {interactionElement} from '../../core/base/interactionElement';
import { elementCategory } from '../../core/enums/elementCategory';
import { elementType } from '../../core/enums/elementType';
import * as React from 'react';
import { Slider, IStackTokens, Stack, IStackStyles } from '@fluentui/react';

export class slider extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.slider, elementCategory.interaction, id, Name, title);
    }

    stackStyles: Partial<IStackStyles> = { root: { maxWidth: 300 } };
    stackTokens: IStackTokens = { childrenGap: 20 };
    sliderAriaValueText = (value: number) => `${value} percent`;
    sliderValueFormat = (value: number) => `${value}%`;
//
    _stackStyles: Partial<IStackStyles> = { root: { height: 200 } };
    _stackTokens: IStackTokens = { childrenGap: 20 };
    valueFormat = (value: number) => `${value}%`;
//
    __stackStyles: Partial<IStackStyles> = { root: { maxWidth: 300 } };
    __stackTokens: IStackTokens = { childrenGap: 20 };
    _sliderAriaValueText = (value: number) => `${value} percent`;
    _sliderValueFormat = (value: number) => `${value}%`;
//
    renderElement(): JSX.Element {
        const [sliderValue, setSliderValue] = React.useState(0);
        const sliderOnChange = (value: number) => setSliderValue(value);
//
        const [_sliderValue, _setSliderValue] = React.useState(0);
        const [sliderLowerValue, setSliderLowerValue] = React.useState(0);
        const onChange = (_: unknown, range: [number, number]) => {
            setSliderLowerValue(range[0]);
            setSliderValue(range[1]);
        };
//
        return(
            <>
                {/* 1 */}
                <Stack tokens={this.stackTokens} styles={this.stackStyles}>
                    <Slider aria-label="Basic example" />
                    <Slider label="Snapping slider example" min={0} max={50} step={10} defaultValue={20} showValue snapToStep />
                    <Slider label="Disabled example" min={50} max={500} step={50} defaultValue={300} showValue disabled />
                    <Slider
                        label="Controlled example"
                        max={10}
                        value={sliderValue}
                        showValue
                        // eslint-disable-next-line react/jsx-no-bind
                        onChange={sliderOnChange}
                    />
                    <Slider
                        label="Example with formatted value"
                        max={100}
                        ariaValueText={this.sliderAriaValueText}
                        valueFormat={this.sliderValueFormat}
                        showValue
                    />
                    <Slider label="Origin from zero" min={-5} max={5} step={1} defaultValue={2} showValue originFromZero />
                </Stack>
                {/* 2 */}
                <Stack horizontal tokens={this._stackTokens} styles={this._stackStyles}>
                    <Slider // prettier-ignore
                        label="Basic"
                        min={1}
                        max={5}
                        step={1}
                        defaultValue={2}
                        showValue
                        vertical
                    />
                    <Slider // prettier-ignore
                        label="Disabled"
                        min={50}
                        max={500}
                        step={50}
                        defaultValue={300}
                        showValue
                        vertical
                        disabled
                    />
                    <Slider // prettier-ignore
                        label="Controlled"
                        max={10}
                        vertical
                        showValue
                    />
                    <Slider // prettier-ignore
                        label="Formatted value"
                        max={100}
                        valueFormat={this.valueFormat}
                        showValue
                        vertical
                    />
                    <Slider // prettier-ignore
                        label="Origin from zero"
                        min={-5}
                        max={15}
                        step={1}
                        defaultValue={5}
                        showValue
                        vertical
                        originFromZero
                    />
                </Stack>
                {/* 3 */}
                <Stack tokens={this.__stackTokens} styles={this.__stackStyles}>
                    <Slider ranged label="Range slider" min={0} max={10} defaultValue={8} defaultLowerValue={2} />
                    <Slider label="Disabled example" min={50} max={500} step={50} defaultValue={300} showValue disabled ranged />
                    <Slider
                        label="Controlled example"
                        max={10}
                        ranged
                        value={sliderValue}
                        lowerValue={sliderLowerValue}
                        showValue
                        // eslint-disable-next-line react/jsx-no-bind
                        onChange={onChange}
                    />
                    <Slider
                        label="Example with formatted value"
                        max={100}
                        ariaValueText={this._sliderAriaValueText}
                        valueFormat={this._sliderValueFormat}
                        ranged
                        showValue
                    />
                    <Slider label="Origin from zero" min={-5} max={5} step={1} defaultValue={2} showValue originFromZero ranged />
                </Stack>
                <Stack horizontal tokens={this.__stackTokens} styles={{ root: { height: 200 } }}>
                    <Slider // prettier-ignore
                        label="Range slider vertical"
                        ranged
                        min={1}
                        max={5}
                        step={1}
                        defaultValue={2}
                        showValue
                        vertical
                    />
                </Stack>
            </>
        );
    }
}