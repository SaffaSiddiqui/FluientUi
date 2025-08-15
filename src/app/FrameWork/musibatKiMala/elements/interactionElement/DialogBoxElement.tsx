import {JSX} from 'react';
import {elementCategory} from '../../core/enums/elementCategory';
import {elementType} from '../../core/enums/elementType';
import {interactionElement} from '../../core/base/interactionElement';
import * as React from 'react';
import { Dialog, DialogType, DialogFooter } from '@fluentui/react/lib/Dialog';
import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button';
import { hiddenContentStyle, mergeStyles } from '@fluentui/react/lib/Styling';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { ContextualMenu } from '@fluentui/react/lib/ContextualMenu';
import { useId, useBoolean } from '@fluentui/react-hooks';
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup';

export class DialogBoxElement extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.Dialog, elementCategory.interaction, id, Name, title);
    }

    dialogStyles = { main: { maxWidth: 450 } };
    dragOptions = {
        moveMenuItemText: 'Move',
        closeMenuItemText: 'Close',
        menu: ContextualMenu,
        keepInBounds: true,
    };
    screenReaderOnly = mergeStyles(hiddenContentStyle);
    dialogContentProps = {
        type: DialogType.normal,
        title: 'Missing Subject',
        closeButtonAriaLabel: 'Close',
        subText: 'Do you want to send this message without a subject?',
    };
//
    _options: IChoiceGroupOption[] = [
        { key: 'A', text: 'Option A' },
        { key: 'B', text: 'Option B' },
        { key: 'C', text: 'Option C', disabled: true },
    ];
    _modelProps = {
        isBlocking: false,
        styles: { main: { maxWidth: 450 } },
    };
    _dialogContentProps = {
        type: DialogType.largeHeader,
        title: 'All emails together',
        subText: 'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.',
    };
//
    modelProps = {
        isBlocking: true,
        topOffsetFixed: true,
    };
    options = [
        {
            key: 'A',
            iconProps: { iconName: 'CalendarDay' },
            text: 'Day',
        },
        {
            key: 'B',
            iconProps: { iconName: 'CalendarWeek' },
            text: 'Week',
        },
        {
            key: 'C',
            iconProps: { iconName: 'Calendar' },
            text: 'Month',
        },
    ];
//

    renderElement(): JSX.Element {

        const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
        const [isDraggable, { toggle: toggleIsDraggable }] = useBoolean(false);
        const labelId: string = useId('dialogLabel');
        const subTextId: string = useId('subTextLabel');

        const modalProps = React.useMemo(
            () => ({
                titleAriaId: labelId,
                subtitleAriaId: subTextId,
                isBlocking: false,
                styles: this.dialogStyles,
                dragOptions: isDraggable ? this.dragOptions : undefined,
            }),
            [isDraggable, labelId, subTextId],
        );
//
        const [_hideDialog, { toggle: _toggleHideDialog }] = useBoolean(true);
//
        const [__hideDialog, { toggle: __toggleHideDialog }] = useBoolean(true);
        const [optionSelected, setOptionSelected] = React.useState('A');

        const onChange = (ev: React.FormEvent<HTMLInputElement>, option: any): void => {
            setOptionSelected(option.key);
        };

        return(
            <>
                {/* 1 */}
                <Toggle label="Is draggable" onChange={toggleIsDraggable} checked={isDraggable} />
                <DefaultButton secondaryText="Opens the Sample Dialog" onClick={toggleHideDialog} text="Open Dialog" />
                <label id={labelId} className={this.screenReaderOnly}>
                    My sample label
                </label>
                <label id={subTextId} className={this.screenReaderOnly}>
                    My sample description
                </label>
                <Dialog
                    hidden={hideDialog}
                    onDismiss={toggleHideDialog}
                    dialogContentProps={this.dialogContentProps}
                    modalProps={modalProps}
                >
                    <DialogFooter>
                        <PrimaryButton onClick={toggleHideDialog} text="Send" />
                        <DefaultButton onClick={toggleHideDialog} text="Don't send" />
                    </DialogFooter>
                </Dialog>
                {/* line break */}
                <br></br><br></br>
                {/* 2 */}
                <DefaultButton secondaryText="Opens the Sample Dialog" onClick={_toggleHideDialog} text="Open Dialog" />
                <Dialog
                    hidden={_hideDialog}
                    onDismiss={_toggleHideDialog}
                    dialogContentProps={this._dialogContentProps}
                    modalProps={this._modelProps}
                >
                    <ChoiceGroup defaultSelectedKey="B" options={this._options} />
                    <DialogFooter>
                        <PrimaryButton onClick={_toggleHideDialog} text="Save" />
                        <DefaultButton onClick={_toggleHideDialog} text="Cancel" />
                    </DialogFooter>
                </Dialog>
                {/* line break */}
                <br></br><br></br>
                {/* 3 */}
                <DefaultButton secondaryText="Opens the Sample Dialog" onClick={__toggleHideDialog} text="Open Dialog" />
                <Dialog hidden={__hideDialog} onDismiss={__toggleHideDialog} modalProps={this.modelProps}>
                    <ChoiceGroup
                        label="Pick one icon"
                        options={this.options}
                        // eslint-disable-next-line react/jsx-no-bind
                        onChange={onChange}
                        required
                    />
                    {optionSelected === 'A' && (
                        <div>
                            <h1>Description</h1>
                            <div>
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.{' '}
                            </div>
                        </div>
                    )}
                    {optionSelected === 'B' && (
                        <div>
                            <h1>Description</h1>
                            <div>
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat.{' '}
                            </div>
                        </div>
                    )}
                    {optionSelected === 'C' && (
                        <div>
                            <h1>Description</h1>
                        </div>
                    )}
                    <DialogFooter>
                        <PrimaryButton onClick={__toggleHideDialog} text="Save" />
                        <DefaultButton onClick={__toggleHideDialog} text="Cancel" />
                    </DialogFooter>
                </Dialog>
            </>
        );
    }
}