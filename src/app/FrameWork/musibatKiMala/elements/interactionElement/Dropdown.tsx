import {JSX} from 'react';
import {interactionElement} from '../../core/base/interactionElement';
import { elementCategory } from '../../core/enums/elementCategory';
import { elementType } from '../../core/enums/elementType';
import * as React from 'react';
import { IStackTokens, Stack } from '@fluentui/react/lib/Stack';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption, IDropdownProps, IDropdown } from '@fluentui/react/lib/Dropdown';
import { Icon } from '@fluentui/react/lib/Icon';
import { Label } from '@fluentui/react/lib/Label';
import { IconButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { useBoolean } from '@fluentui/react-hooks';

export class DropdownElement extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.Dropdown, elementCategory.interaction, id, Name, title);
    }

    dropdownStyles: Partial<IDropdownStyles> = {
        dropdown: { width: 300 },
        dropdownOptionText: { overflow: 'visible', whiteSpace: 'normal' },
        dropdownItem: { height: 'auto' },
    };

    options: IDropdownOption[] = [
        { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
        { key: 'apple', text: 'Apple' },
        { key: 'banana', text: 'Banana' },
        { key: 'orange', text: 'Orange', disabled: true },
        { key: 'grape', text: 'Grape' },
        { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
        { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
        { key: 'broccoli', text: 'Broccoli' },
        { key: 'carrot', text: 'Carrot' },
        { key: 'lettuce', text: 'Lettuce' },
    ];
    stackTokens: IStackTokens = { childrenGap: 20 };
//
    dropdownControlledExampleOptions = [
        { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
        { key: 'apple', text: 'Apple' },
        { key: 'banana', text: 'Banana' },
        { key: 'orange', text: 'Orange', disabled: true },
        { key: 'grape', text: 'Grape' },
        { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
        { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
        { key: 'broccoli', text: 'Broccoli' },
        { key: 'carrot', text: 'Carrot' },
        { key: 'lettuce', text: 'Lettuce' },
    ];
//
    DropdownControlledMultiExampleOptions = [
        { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
        { key: 'apple', text: 'Apple' },
        { key: 'banana', text: 'Banana' },
        { key: 'orange', text: 'Orange', disabled: true },
        { key: 'grape', text: 'Grape' },
        { key: 'watermelon', text: 'Watermelon', hidden: true },
        { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
        { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
        { key: 'broccoli', text: 'Broccoli' },
        { key: 'carrot', text: 'Carrot' },
        { key: 'lettuce', text: 'Lettuce' },
    ];

//    
    exampleOptions: IDropdownOption[] = [
        { key: 'Header', text: 'Options', itemType: DropdownMenuItemType.Header },
        { key: 'A', text: 'Option a', data: { icon: 'Memo' } },
        { key: 'B', text: 'Option b', data: { icon: 'Print' } },
        { key: 'C', text: 'Option c', data: { icon: 'ShoppingCart' } },
        { key: 'D', text: 'Option d', data: { icon: 'Train' } },
        { key: 'E', text: 'Option e', data: { icon: 'Repair' } },
        { key: 'divider_2', text: '-', itemType: DropdownMenuItemType.Divider },
        { key: 'Header2', text: 'More options', itemType: DropdownMenuItemType.Header },
        { key: 'F', text: 'Option f', data: { icon: 'Running' } },
        { key: 'G', text: 'Option g', data: { icon: 'EmojiNeutral' } },
        { key: 'H', text: 'Option h', data: { icon: 'ChatInviteFriend' } },
        { key: 'I', text: 'Option i', data: { icon: 'SecurityGroup' } },
        { key: 'J', text: 'Option j', data: { icon: 'AddGroup' } },
    ];
    iconStyles = { marginRight: '8px' };

    onRenderLabel = (props: IDropdownProps): JSX.Element => {
        return (
            <Stack horizontal verticalAlign="center">
            <Label>{props.label}</Label>
            <IconButton
                iconProps={{ iconName: 'Info' }}
                title="Info"
                ariaLabel="Info"
                styles={{ root: { marginBottom: -3 } }}
            />
            </Stack>
        );
    };

    onRenderOption = (option: IDropdownOption): JSX.Element => {
    return (
        <div>
        {option.data && option.data.icon && (
            <Icon style={this.iconStyles} iconName={option.data.icon} aria-hidden="true" title={option.data.icon} />
        )}
        <span>{option.text}</span>
        </div>
    );
    };

    onRenderTitle = (options: IDropdownOption[]): JSX.Element => {
    const option = options[0];
    return (
        <div>
        {option.data && option.data.icon && (
            <Icon style={this.iconStyles} iconName={option.data.icon} aria-hidden="true" title={option.data.icon} />
        )}
        <span>{option.text}</span>
        </div>
    );
    };

    onRenderCaretDown = (): JSX.Element => {
        return <Icon iconName="CirclePlus" />;
    };

    onRenderPlaceholder = (props: IDropdownProps): JSX.Element => {
    return (
        <div className="dropdownExample-placeholder">
            <Icon style={this.iconStyles} iconName={'MessageFill'} aria-hidden="true" />
            <span>{props.placeholder}</span>
        </div>
    );
    };

//
    _options: IDropdownOption[] = [
        {
            key: 'fruitsHeader',
            text: 'Fruits',
            itemType: DropdownMenuItemType.Header,
        },
        { key: 'apple', text: 'Apple' },
        { key: 'banana', text: 'Banana' },
        { key: 'orange', text: 'Orange', disabled: true },
        {
            key: 'grape',
            text: 'Grape with some super long text, maybe this includes muscat too',
        },
        { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
        {
            key: 'vegetablesHeader',
            text: 'Vegetables',
            itemType: DropdownMenuItemType.Header,
        },
        { key: 'broccoli', text: 'Broccoli' },
        { key: 'carrot', text: 'Carrot' },
        { key: 'lettuce', text: 'Lettuce' },
    ];
//
    DropdownErrorExampleOptions = [
        { key: 'A', text: 'Option a' },
        { key: 'B', text: 'Option b' },
        { key: 'C', text: 'Option c' },
        { key: 'D', text: 'Option d' },
        { key: 'E', text: 'Option e' },
    ];


    renderElement(): JSX.Element {

        const [selectedItem, setSelectedItem] = React.useState<IDropdownOption>();
        const onChange = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
            setSelectedItem(item);
        };
//
        const [selectedKeys, setSelectedKeys] = React.useState<string[]>([]);

        const _onChange = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
            if (item) {
            setSelectedKeys(
                item.selected ? [...selectedKeys, item.key as string] : selectedKeys.filter(key => key !== item.key),
            );
            }
        };
//
        const [showError, { toggle: toggleShowError }] = useBoolean(false);
//
        const dropdownRef = React.createRef<IDropdown>();
        const onSetFocus = () => dropdownRef.current!.focus(true);
//
        return(
            <>
                {/* 1 */}
                <Stack tokens={this.stackTokens}>
                    <Dropdown
                        placeholder="Select an option"
                        label="Basic uncontrolled example"
                        options={this.options}
                        styles={this.dropdownStyles}
                    />
                    <Dropdown
                        label="Disabled example with defaultSelectedKey"
                        defaultSelectedKey="broccoli"
                        options={this.options}
                        disabled={true}
                        styles={this.dropdownStyles}
                    />
                    <Dropdown
                        placeholder="Select options"
                        label="Multi-select uncontrolled example"
                        defaultSelectedKeys={['apple', 'banana', 'grape']}
                        multiSelect
                        options={this.options}
                        styles={this.dropdownStyles}
                    />
                </Stack>
                {/* 2   Controlled single-select Dropdown*/}
                <Dropdown
                    label="single-select controlled example"
                    selectedKey={selectedItem ? selectedItem.key : undefined}
                    // eslint-disable-next-line react/jsx-no-bind
                    onChange={onChange}
                    placeholder="Select an option"
                    options={this.dropdownControlledExampleOptions}
                    styles={this.dropdownStyles}
                />
                {/* 3    Controlled multi-select Dropdown */}
                <Dropdown
                    placeholder="Select options"
                    label="Multi-select controlled example"
                    selectedKeys={selectedKeys}
                    // eslint-disable-next-line react/jsx-no-bind
                    onChange={_onChange}
                    multiSelect
                    options={this.DropdownControlledMultiExampleOptions}
                    styles={this.dropdownStyles}
                />
                {/* 4 */}
                <Stack tokens={this.stackTokens}>
                    <Dropdown
                    placeholder="Select an option"
                    label="Custom example"
                    ariaLabel="Custom dropdown example"
                    onRenderPlaceholder={this.onRenderPlaceholder}
                    onRenderTitle={this.onRenderTitle}
                    onRenderOption={this.onRenderOption}
                    onRenderCaretDown={this.onRenderCaretDown}
                    styles={this.dropdownStyles}
                    options={this.exampleOptions}
                    />
                    <Dropdown
                    placeholder="Select an option"
                    label="Custom label"
                    ariaLabel="Custom dropdown label example"
                    styles={this.dropdownStyles}
                    options={this.exampleOptions}
                    onRenderLabel={this.onRenderLabel}
                    />
                </Stack>
                {/* 5 */}
                <Stack tokens={this.stackTokens}>
                    <Dropdown
                        placeholder="Select an option"
                        label="Wrapping option text example"
                        options={this._options}
                        styles={this.dropdownStyles}
                    />
                </Stack>
                {/* 6 */}
                <Stack horizontal tokens={this.stackTokens} verticalAlign="start">
                    <Toggle label="Show error message" onText="Yes" offText="No" checked={showError} onChange={toggleShowError} />
                    <Dropdown
                        placeholder="Select an option"
                        label="Dropdown with error message"
                        options={this.DropdownErrorExampleOptions}
                        errorMessage={showError ? 'This dropdown has an error' : undefined}
                        styles={this.dropdownStyles}
                    />
                </Stack>
                {/* 7 */}
                <Stack tokens={this.stackTokens} verticalAlign="end">
                    <Stack horizontal tokens={this.stackTokens} verticalAlign="end">
                        <Dropdown
                            componentRef={dropdownRef}
                            placeholder="Select an option"
                            label="Required dropdown example"
                            options={[
                                { key: 'A', text: 'Option a', title: 'I am option a.' },
                                { key: 'B', text: 'Option b' },
                                { key: 'C', text: 'Option c', disabled: true },
                                { key: 'D', text: 'Option d' },
                                { key: 'E', text: 'Option e' },
                            ]}
                            required
                            styles={this.dropdownStyles}
                        />
                        <PrimaryButton
                            text="Set focus"
                            // eslint-disable-next-line react/jsx-no-bind
                            onClick={onSetFocus}
                        />
                    </Stack>
                    <Dropdown
                        placeholder="Required with no label"
                        ariaLabel="Required dropdown example"
                        options={[
                            { key: 'A', text: 'Option a', title: 'I am option a.' },
                            { key: 'B', text: 'Option b' },
                            { key: 'C', text: 'Option c', disabled: true },
                            { key: 'D', text: 'Option d' },
                            { key: 'E', text: 'Option e' },
                        ]}
                        required={true}
                        styles={this.dropdownStyles}
                    />
                </Stack>
            </>
        );

    }
}