import {JSX} from 'react';
import {elementCategory} from '../../core/enums/elementCategory';
import {elementType} from '../../core/enums/elementType';
import {interactionElement} from '../../core/base/interactionElement';
import * as React from 'react';
import { IconButton, IButtonStyles, CommandBarButton } from '@fluentui/react/lib/Button';
import { Link } from '@fluentui/react/lib/Link';
import { DirectionalHint, TooltipHost, Checkbox } from '@fluentui/react';
import { IOverflowSetItemProps, OverflowSet } from '@fluentui/react/lib/OverflowSet';


export class OverflowSetElement extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.OverflowSet, elementCategory.interaction, id, Name, title);
    }


    noOp = () => undefined;

    onRenderItem = (item: IOverflowSetItemProps): JSX.Element => {
        return (
            <Link styles={{ root: { marginRight: 10 } }} onClick={item.onClick}>
                {item.name}
            </Link>
        );
    };


    onRenderOverflowButton = (overflowItems: any[] | undefined): JSX.Element => {
    const buttonStyles: Partial<IButtonStyles> = {
        root: {
            minWidth: 0,
            padding: '0 4px',
            alignSelf: 'stretch',
            height: 'auto',
        },
    };
    return (
        <IconButton
            title="More options"
            styles={buttonStyles}
            menuIconProps={{ iconName: 'More' }}
            menuProps={{ items: overflowItems! }}
        />
    );
    };
//
    _noOp = () => undefined;

    _onRenderItemStyles = {
        root: { padding: '10px' },
    };
    _onRenderOverflowButtonStyles = {
        root: { padding: '10px' },
        menuIcon: { fontSize: '16px' },
    };

    _onRenderItem = (item: IOverflowSetItemProps): JSX.Element => {
        return (
            <TooltipHost content={item.title} directionalHint={DirectionalHint.rightCenter}>
            <CommandBarButton
                aria-label={item.name}
                styles={this._onRenderItemStyles}
                iconProps={{ iconName: item.icon }}
                onClick={item.onClick}
            />
            </TooltipHost>
        );
    };
    _onRenderOverflowButton = (overflowItems: any[] | undefined): JSX.Element => {
        return (
            <TooltipHost content="More items" directionalHint={DirectionalHint.rightCenter}>
                <CommandBarButton
                    aria-label="More items"
                    styles={this._onRenderOverflowButtonStyles}
                    menuIconProps={{ iconName: 'More' }}
                    menuProps={{ items: overflowItems! }}
                />
            </TooltipHost>
        );
    };
//
    __noOp = () => undefined;

    __checkboxStyles = {
        root: {
            marginRight: 5,
        },
    };

    __onRenderItem = (item: IOverflowSetItemProps): JSX.Element => {
        if (item.onRender) {
            return item.onRender(item);
        }
        return <CommandBarButton iconProps={{ iconName: item.icon }} menuProps={item.subMenuProps} text={item.name} />;
    };

    __onRenderOverflowButton = (overflowItems: any[] | undefined): JSX.Element => {
        const buttonStyles: Partial<IButtonStyles> = {
            root: {
                minWidth: 0,
                padding: '0 4px',
                alignSelf: 'stretch',
                height: 'auto',
            },
        };
        return (
            <CommandBarButton
                ariaLabel="More items"
                styles={buttonStyles}
                menuIconProps={{ iconName: 'More' }}
                menuProps={{ items: overflowItems! }}
            />
        );
    };
//
    ___noOp = () => undefined;

    ___onRenderItem = (item: IOverflowSetItemProps): JSX.Element => {
        return (
            <Link styles={{ root: { marginRight: 10 } }} onClick={item.onClick}>
                {item.name}
            </Link>
        );
    };

    ___onRenderOverflowButton = (overflowItems: any[] | undefined): JSX.Element => {
        const buttonStyles: Partial<IButtonStyles> = {
            root: {
                minWidth: 0,
                padding: '0 4px',
                alignSelf: 'stretch',
                height: 'auto',
            },
        };
        return (
            <IconButton
                title="More options"
                styles={buttonStyles}
                menuIconProps={{ iconName: 'More' }}
                menuProps={{ items: overflowItems! }}
            />
        );
    };





//
    renderElement(): JSX.Element {
        

        return(
            <>
                {/* 1 */}
                <OverflowSet
                    aria-label="Basic Menu Example"
                        items={[
                            {
                                key: 'item1',
                                name: 'Link 1',
                                onClick: this.noOp,
                            },
                            {
                                key: 'item2',
                                name: 'Link 2',
                                onClick: this.noOp,
                            },
                            {
                                key: 'item3',
                                name: 'Link 3',
                                onClick: this.noOp,
                            },
                        ]}
                        overflowItems={[
                            {
                                key: 'item4',
                                name: 'Overflow Link 1',
                                onClick: this.noOp,
                            },
                            {
                                key: 'item5',
                                name: 'Overflow Link 2',
                                onClick: this.noOp,
                            },
                        ]}
                    onRenderOverflowButton={this.onRenderOverflowButton}
                    onRenderItem={this.onRenderItem}
                />
                {/* line break */}
                <br></br>
                {/* 2 */}
                <OverflowSet
                    aria-label="Vertical Example"
                    vertical
                        items={[
                            {
                                key: 'item1',
                                icon: 'Add',
                                name: 'Add',
                                title: 'Add',
                                ariaLabel: 'New. Use left and right arrow keys to navigate',
                                onClick: this._noOp,
                            },
                            {
                                key: 'item2',
                                icon: 'Upload',
                                name: 'Upload',
                                title: 'Upload',
                                onClick: this._noOp,
                            },
                            {
                                key: 'item3',
                                icon: 'Share',
                                name: 'Share',
                                title: 'Share',
                                onClick: this._noOp,
                            },
                        ]}
                        overflowItems={[
                            {
                                key: 'item4',
                                name: 'Overflow Link 1',
                                onClick: this._noOp,
                            },
                            {
                                key: 'item5',
                                name: 'Overflow Link 2',
                                onClick: this._noOp,
                            },
                        ]}
                    onRenderOverflowButton={this._onRenderOverflowButton}
                    onRenderItem={this._onRenderItem}
                />
                {/* line break */}
                <br></br>
                {/* 3 */}
                <OverflowSet
                    aria-label="Custom Example"
                    items={[
                        {
                            key: 'checkbox',
                            onRender: () => {
                            return <Checkbox label="A Checkbox" styles={this.__checkboxStyles} />;
                            },
                        },
                        {
                            key: 'newItem',
                            name: 'New',
                            icon: 'Add',
                            ariaLabel: 'New. Use left and right arrow keys to navigate',
                            onClick: this.__noOp,
                            subMenuProps: {
                            items: [
                                {
                                key: 'emailMessage',
                                name: 'Email message',
                                iconProps: { iconName: 'Mail' },
                                },
                                {
                                key: 'calendarEvent',
                                name: 'Calendar event',
                                iconProps: { iconName: 'Calendar' },
                                },
                            ],
                            },
                        },
                        {
                            key: 'upload',
                            name: 'Upload',
                            icon: 'Upload',
                            onClick: this.__noOp,
                        },
                        {
                            key: 'share',
                            name: 'Share',
                            icon: 'Share',
                            onClick: this.__noOp,
                        },
                    ]}
                    overflowItems={[
                        {
                            key: 'move',
                            name: 'Move to...',
                            iconProps: { iconName: 'MoveToFolder' },
                            onClick: this.__noOp,
                        },
                        {
                            key: 'copy',
                            name: 'Copy to...',
                            iconProps: { iconName: 'Copy' },
                            onClick: this.__noOp,
                        },
                        {
                            key: 'rename',
                            name: 'Rename...',
                            iconProps: { iconName: 'Edit' },
                            onClick: this.__noOp,
                        },
                        {
                            key: 'disabled',
                            name: 'Disabled...',
                            iconProps: { iconName: 'Cancel' },
                            disabled: true,
                            onClick: this.__noOp,
                        },
                    ]}
                    onRenderOverflowButton={this.__onRenderOverflowButton}
                    onRenderItem={this.__onRenderItem}
                />
                {/* line break */}
                <br></br>
                {/* 4 */}
                <OverflowSet
                    aria-label="Basic Menu Example"
                    items={[
                    {
                        key: 'item3',
                        name: 'Link 3',
                        onClick: this.___noOp,
                    },
                    {
                        key: 'item2',
                        name: 'Link 2',
                        onClick: this.___noOp,
                    },
                    {
                        key: 'item1',
                        name: 'Link 1',
                        onClick: this.___noOp,
                    },
                    ]}
                    overflowItems={[
                    {
                        key: 'item4',
                        name: 'Overflow Link 1',
                        onClick: this.___noOp,
                    },
                    {
                        key: 'item5',
                        name: 'Overflow Link 2',
                        onClick: this.___noOp,
                    },
                    ]}
                    onRenderOverflowButton={this.___onRenderOverflowButton}
                    onRenderItem={this.___onRenderItem}
                    overflowSide={'start'}
                />
            </>
        );
    }
}