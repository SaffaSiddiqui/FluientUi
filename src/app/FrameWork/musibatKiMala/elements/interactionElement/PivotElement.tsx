import {JSX} from 'react';
import {elementCategory} from '../../core/enums/elementCategory';
import {elementType} from '../../core/enums/elementType';
import {interactionElement} from '../../core/base/interactionElement';
import * as React from 'react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { useBoolean } from '@fluentui/react-hooks';
import { Fabric, Toggle, Icon, IStyleSet, Label, ILabelStyles, Pivot, IPivotItemProps, PivotItem } from '@fluentui/react';

export class PivotElement extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.Pivot, elementCategory.interaction, id, Name, title);
    }

    labelStyles: Partial<IStyleSet<ILabelStyles>> = {
        root: { marginTop: 10 },
    };
//
    _customRenderer(
        link?: IPivotItemProps,
        defaultRenderer?: (link?: IPivotItemProps) => JSX.Element | null,
    ): JSX.Element | null {
    if (!link || !defaultRenderer) {
        return null;
    }
    return (
        <span style={{ flex: '0 1 100%' }}>
        {defaultRenderer({ ...link, itemIcon: undefined })}
        <Icon iconName={link.itemIcon} style={{ color: 'red' }} />
        </span>
    );
    }
//
    __customRenderer(
    link?: IPivotItemProps,
    defaultRenderer?: (link?: IPivotItemProps) => JSX.Element | null,
    ): JSX.Element | null {
    if (!link || !defaultRenderer) {
        return null;
    }

    return (
        <span style={{ flex: '0 1 100%' }}>
        {defaultRenderer({ ...link, itemIcon: undefined })}
        <Icon iconName={link.itemIcon} style={{ color: 'red' }} />
        </span>
    );
    }

    renderElement(): JSX.Element {

        const [selectedKey, setSelectedKey] = React.useState(0);
        const onButtonClick = () => {
            setSelectedKey((selectedKey + 1) % 3);
        };
//
        const [overflow, { toggle: toggleOverflow }] = useBoolean(true);
        const [tabs, { toggle: toggleTabs }] = useBoolean(false);
        const [rtl, { toggle: toggleRtl }] = useBoolean(false);

        return(
            <>
                {/* 1 */}
                <Pivot aria-label="Basic Pivot Example">
                    <PivotItem
                        headerText="My Files"
                        headerButtonProps={{
                        'data-order': 1,
                        'data-title': 'My Files Title',
                        }}
                    >
                        <Label styles={this.labelStyles}>Pivot #1</Label>
                    </PivotItem>
                    <PivotItem headerText="Recent">
                        <Label styles={this.labelStyles}>Pivot #2</Label>
                    </PivotItem>
                    <PivotItem headerText="Shared with me">
                        <Label styles={this.labelStyles}>Pivot #3</Label>
                    </PivotItem>
                </Pivot>
                {/* 2 */}
                <div>
                    <Pivot aria-label="Count and Icon Pivot Example">
                        <PivotItem headerText="My Files" itemCount={42} itemIcon="Emoji2">
                            <Label styles={this.labelStyles}>Pivot #1</Label>
                        </PivotItem>
                        <PivotItem itemCount={23} itemIcon="Recent">
                            <Label styles={this.labelStyles}>Pivot #2</Label>
                        </PivotItem>
                        <PivotItem headerText="Placeholder" itemIcon="Globe">
                            <Label styles={this.labelStyles}>Pivot #3</Label>
                        </PivotItem>
                        <PivotItem headerText="Shared with me" itemIcon="Ringer" itemCount={1}>
                            <Label styles={this.labelStyles}>Pivot #4</Label>
                        </PivotItem>
                        <PivotItem headerText="Customized Rendering" itemIcon="Globe" itemCount={10} onRenderItemLink={this._customRenderer}>
                            <Label styles={this.labelStyles}>Customized Rendering</Label>
                        </PivotItem>
                    </Pivot>
                </div>
                {/* 3 */}
                <div>
                    <Pivot aria-label="Links of Tab Style Pivot Example" linkFormat="tabs">
                        <PivotItem headerText="Foo">
                            <Label>Pivot #1</Label>
                        </PivotItem>
                        <PivotItem headerText="Bar">
                            <Label>Pivot #2</Label>
                        </PivotItem>
                        <PivotItem headerText="Bas">
                            <Label>Pivot #3</Label>
                        </PivotItem>
                        <PivotItem headerText="Biz">
                            <Label>Pivot #4</Label>
                        </PivotItem>
                    </Pivot>
                </div>
                {/* 4 */}
                <div>
                    <Pivot aria-label="Override Selected Item Pivot Example" selectedKey={String(selectedKey)}>
                        <PivotItem headerText="My Files" itemKey="0">
                            <Label>Pivot #1</Label>
                        </PivotItem>
                        <PivotItem headerText="Recent" itemKey="1">
                            <Label>Pivot #2</Label>
                        </PivotItem>
                        <PivotItem headerText="Shared with me" itemKey="2">
                            <Label>Pivot #3</Label>
                        </PivotItem>
                    </Pivot>
                    {/* eslint-disable-next-line react/jsx-no-bind */}
                    <DefaultButton onClick={onButtonClick}>Select next item</DefaultButton>
                </div>
                {/* 5 */}
                <div style={{ background: '#EEE' }}>
                    <Toggle label="overflow" offText="none" onText="menu" checked={overflow} onChange={toggleOverflow} />
                    <Toggle label="linkFormat" offText="links" onText="tabs" checked={tabs} onChange={toggleTabs} />
                    <Toggle label="direction" offText="ltr" onText="rtl" checked={rtl} onChange={toggleRtl} />
                </div>
                {/* eslint-disable-next-line @typescript-eslint/no-deprecated */}
                <Fabric dir={rtl ? 'rtl' : 'ltr'}>
                    <Pivot
                    aria-label="Pivot Overflow Menu Example"
                    linkFormat={tabs ? 'tabs' : 'links'}
                    overflowBehavior={overflow ? 'menu' : 'none'}
                    overflowAriaLabel="more items"
                    >
                        <PivotItem headerText="My Files">
                            <Label>Pivot #1</Label>
                        </PivotItem>
                        <PivotItem itemCount={23} itemIcon="Recent">
                            <Label>Pivot #2</Label>
                        </PivotItem>
                        <PivotItem headerText="Placeholder" itemIcon="Globe">
                            <Label>Pivot #3</Label>
                        </PivotItem>
                        <PivotItem headerText="Shared with me" itemIcon="Ringer" itemCount={1}>
                            <Label>Pivot #4</Label>
                        </PivotItem>
                        <PivotItem headerText="Custom Renderer" itemIcon="Airplane" onRenderItemLink={this.__customRenderer}>
                            <Label>Pivot #5</Label>
                        </PivotItem>
                        <PivotItem headerText="This tab has a relatively long title">
                            <Label>Pivot #6</Label>
                        </PivotItem>
                        <PivotItem headerText="Short">
                            <Label>Pivot #7</Label>
                        </PivotItem>
                        <PivotItem headerText="The Last Tab">
                            <Label>Pivot #8</Label>
                        </PivotItem>
                    </Pivot>
                </Fabric>
            </>
        );
    }
}