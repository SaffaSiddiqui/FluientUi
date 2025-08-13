import {JSX} from 'react';
import {interactionElement} from '../../core/base/interactionElement';
import { elementCategory } from '../../core/enums/elementCategory';
import { elementType } from '../../core/enums/elementType';
import * as React from 'react';
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup';
import { TestImages } from '@fluentui/example-data';  //npm install @fluentui/example-data
import { Label } from '@fluentui/react/lib/Label';
import { Icon } from '@fluentui/react/lib/Icon';
import { Stack } from '@fluentui/react/lib/Stack';
import { useId } from '@fluentui/react-hooks';
import { mergeStyles } from '@fluentui/react/lib/Styling';
import { CatIcon } from '@fluentui/react-icons-mdl2'; //npm install @fluentui/react-icons-mdl2


export class choiceGroup extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.ChoiceGroup, elementCategory.interaction, id, Name, title);
    }

    options: IChoiceGroupOption[] = [
        { key: 'A', text: 'Option A' },
        { key: 'B', text: 'Option B' },
        { key: 'C', text: 'Option C', disabled: true },
        { key: 'D', text: 'Option D' },
    ];
    _onChange(ev: React.FormEvent<HTMLInputElement>, option: IChoiceGroupOption): void {
        console.dir(option);
    }
//
    _options: IChoiceGroupOption[] = [
        {
            key: 'bar',
            imageSrc: TestImages.choiceGroupBarUnselected,
            imageAlt: 'Bar chart',
            selectedImageSrc: TestImages.choiceGroupBarSelected,
            imageSize: { width: 32, height: 32 },
            text: 'Bar',
        },
        {
            key: 'pie',
            imageSrc: TestImages.choiceGroupPieUnselected,
            imageAlt: 'Pie chart',
            selectedImageSrc: TestImages.choiceGroupPieSelected,
            imageSize: { width: 32, height: 32 },
            text: 'Pie',
        },
    ];    
//
    __options: IChoiceGroupOption[] = [
        { key: 'day', text: 'Day', iconProps: { iconName: 'CalendarDay' } },
        { key: 'week', text: 'Week', iconProps: { iconName: 'CalendarWeek' } },
        { key: 'month', text: 'Month', iconProps: { iconName: 'Calendar' }, disabled: true },
    ];
//
    ___options: IChoiceGroupOption[] = [
        { key: 'A', text: 'Option A' },
        { key: 'B', text: 'Option B' },
        { key: 'C', text: 'Option C', disabled: true },
        { key: 'D', text: 'Option D' },
    ];
    __onChange(ev: React.FormEvent<HTMLInputElement>, option: IChoiceGroupOption): void {
        console.dir(option);
    }
//
    optionRootClass = mergeStyles({ display: 'flex', alignItems: 'center', gap: '5px' });
    ____options: IChoiceGroupOption[] = [
    {
        key: 'A',
        text: 'A label with an icon',
        ariaLabel: 'A label with a cat icon',
        onRenderField: (props, render) => {
        return (
            <div className={this.optionRootClass}>
            {render!(props)}
            <CatIcon />
            </div>
        );
        },
    },
    { key: 'B', text: 'Option B', styles: { root: { border: '1px solid green' } } },
    { key: 'C', text: 'Option C', disabled: true },
    { key: 'D', text: 'Option D' },
    ];
//


    renderElement(): JSX.Element {
        const [selectedKey, setSelectedKey] = React.useState<string | undefined>('B');
        const onChange = React.useCallback((ev: React.SyntheticEvent<HTMLElement>, option: IChoiceGroupOption) => {
            setSelectedKey(option.key);
        }, []);
//  
        const labelId = useId('labelElement');
//
        return(
            <>
                {/* 1 */}
                <ChoiceGroup 
                    defaultSelectedKey="B" 
                    options={this.options} 
                    onChange={this._onChange} 
                    label="Pick one" 
                    required={true} 
                />
                {/* 2 */}
                <ChoiceGroup 
                    selectedKey={selectedKey} 
                    options={this.options} 
                    onChange={onChange} 
                    label="Pick one" 
                />
                {/* 3 */}
                <ChoiceGroup label="Pick one image" defaultSelectedKey="bar" options={this._options} />
                <p>
                    Warning: this ChoiceGroup option layout restricts the space that label text has to expand and wrap. This can
                    cause issues for accessibility, when zoom and text spacing increase the length of words and lines, and also
                    internationalization, since translated text length will vary.
                </p>
                <p>We recommend using the standard layout with an inline image for labels longer than a single short word.</p>
                {/* 4 */}
                 <ChoiceGroup label="Pick one icon" defaultSelectedKey="day" options={this.__options} />
                <p>
                    Warning: this ChoiceGroup option layout restricts the space that label text has to expand and wrap. This can
                    cause issues for accessibility, when zoom and text spacing increase the length of words and lines, and also
                    internationalization, since translated text length will vary.
                </p>
                <p>We recommend using the standard layout with an inline icon for labels longer than a single short word.</p>
                {/* 5 */}
                <div>
                    {/* ONLY do this if you need to customize the label.
                    In most cases you should use ChoiceGroup's built-in `label` prop instead. */}
                    <Label id={labelId}>
                        <Stack horizontal verticalAlign="center">
                        <span>Custom label&nbsp;&nbsp;</span>
                        <Icon iconName="Filter" />
                        </Stack>
                    </Label>
                    <ChoiceGroup
                        // This is usually what you should do
                        // label="Normal label"
                        defaultSelectedKey="B"
                        options={this.___options}
                        onChange={this.__onChange}
                        ariaLabelledBy={labelId}
                    />
                </div>
                {/* 6 */}
                <ChoiceGroup 
                    defaultSelectedKey="B" 
                    options={this.____options} 
                    label="Pick one" 
                    />
            </>
        );
    }
}