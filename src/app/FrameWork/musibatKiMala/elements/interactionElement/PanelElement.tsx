import {JSX} from 'react';
import {elementCategory} from '../../core/enums/elementCategory';
import {elementType} from '../../core/enums/elementType';
import {interactionElement} from '../../core/base/interactionElement';
import * as React from 'react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { Panel, PanelType, IPanelProps } from '@fluentui/react/lib/Panel';
import { useBoolean } from '@fluentui/react-hooks';
import { Link } from '@fluentui/react/lib/Link';
import { TextField } from '@fluentui/react/lib/TextField';
import { IRenderFunction } from '@fluentui/react/lib/Utilities';
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import { Dropdown, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { Dialog, DialogFooter, DialogType } from '@fluentui/react/lib/Dialog';






 // The panel type and description are passed in by the PanelSizesExample component (later in this file)
    const PanelExample: React.FunctionComponent<{ panelType: PanelType; description: string }> = props => {
    const { description, panelType } = props;
    const [isOpen2, { setTrue: openPanel2, setFalse: dismissPanel2 }] = useBoolean(false);

    const a = 'aeiou'.indexOf(description[0]) === -1 ? 'a' : 'an'; // grammar...

    return (
        <div>
        <DefaultButton text="Open panel" onClick={openPanel2} />
        <Panel
            isOpen={isOpen2}
            onDismiss={dismissPanel2}
            type={panelType}
            customWidth={panelType === PanelType.custom || panelType === PanelType.customNear ? '888px' : undefined}
            closeButtonAriaLabel="Close"
            headerText="Sample panel"
        >
            <p>
            This is {a} <strong>{description}</strong> panel
            {panelType === PanelType.smallFixedFar ? ' (the default size)' : ''}.
            </p>
            <p>
            Select this size using <code>{`type={PanelType.${PanelType[panelType]}}`}</code>.
            </p>
        </Panel>
        </div>
    );
    }
//



export class PanelElement extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.Panel, elementCategory.interaction, id, Name, title);
    }


   
    options: IDropdownOption[] = [
        { text: 'Small (default)', key: String(PanelType.smallFixedFar) },
        { text: 'Small, near side', key: String(PanelType.smallFixedNear) },
        { text: 'Medium', key: String(PanelType.medium) },
        { text: 'Large', key: String(PanelType.large) },
        { text: 'Large fixed-width', key: String(PanelType.largeFixed) },
        { text: 'Extra large', key: String(PanelType.extraLarge) },
        { text: 'Full-width (fluid)', key: String(PanelType.smallFluid) },
        { text: 'Custom (example: 888px)', key: String(PanelType.custom) },
        { text: 'Custom (example: 888px), near side', key: String(PanelType.customNear) },
    ];
    dropdownStyles = { root: { maxWidth: 250, marginBottom: 16 } };
    firstPStyle = { marginTop: 0 };
//

    buttonStyles = { root: { marginRight: 8 } };
//
    explanation =
        'This panel uses "light dismiss" behavior: it can be closed by clicking or tapping ' +
        'the area outside the panel (or using the close button as usual).';
//
    contentExplanation =
        'Try typing something in this text field, closing the panel, and re-opening the panel. ' +
        " The text field's contents should still be here when the panel re-opens.";
//
    _explanation = 'When this panel is closed, a confirmation dialog will appear.';
    dialogContentProps = {
        type: DialogType.normal,
        title: 'Are you sure you want to close the panel?',
    };
    dialogModalProps = {
        isBlocking: true,
        styles: { main: { maxWidth: 450 } },
    };
//
    __explanation =
        'This panel has custom content in the navigation region (the part at the top which normally ' +
        'contains the close button). If the custom content replaces the close button, be sure to provide ' +
        'some other obvious way for users to close the panel.';
    searchboxStyles = { root: { margin: '5px', height: 'auto', width: '100%' } };




///
    renderElement(): JSX.Element {

        const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);
//
        const [option, setOption] = React.useState<IDropdownOption>(this.options[0]);
        const updateOption = React.useCallback((ev: any, opt: IDropdownOption) => setOption(opt), []);
        const description = option.text.toLowerCase().replace(' (default)', '');
//
        const [_isOpen, { setTrue: _openPanel, setFalse: _dismissPanel }] = useBoolean(false);

        // This panel doesn't actually save anything; the buttons are just an example of what
        // someone might want to render in a panel footer.
        const onRenderFooterContent = React.useCallback(
            () => (
            <div>
                <PrimaryButton onClick={_dismissPanel} styles={this.buttonStyles}>
                Save
                </PrimaryButton>
                <DefaultButton onClick={_dismissPanel}>Cancel</DefaultButton>
            </div>
            ),
            [dismissPanel],
        );
//
        const [__isOpen, { setTrue: __openPanel, setFalse: __dismissPanel }] = useBoolean(false);
//
        const [___isOpen, { setTrue: ___openPanel, setFalse: ___dismissPanel }] = useBoolean(false);
//
        const [isOpen6, { setTrue: openPanel6, setFalse: dismissPanel6 }] = useBoolean(false);
//
        const [isPanelOpen7, setIsPanelOpen7] = React.useState(false);
        const [isDialogVisible7, setIsDialogVisible7] = React.useState(false);

        const openPanel7 = React.useCallback(() => setIsPanelOpen7(true), []);
        const onDismiss7 = React.useCallback((ev?: React.SyntheticEvent | KeyboardEvent) => {
            if (ev) {
            // Instead of closing the panel immediately, cancel that action and show a dialog
            ev.preventDefault();
            setIsDialogVisible7(true);
            }
        }, []);

        const hideDialog = React.useCallback(() => setIsDialogVisible7(false), []);
        const hideDialogAndPanel = React.useCallback(() => {
            setIsPanelOpen7(false);
            setIsDialogVisible7(false);
        }, []);
//
        const [isOpen8, { setTrue: openPanel8, setFalse: dismissPanel8 }] = useBoolean(false);

        const onRenderNavigationContent: IRenderFunction<IPanelProps> = React.useCallback(
            (props, defaultRender) => (
            <>
                <SearchBox
                placeholder="Search here..."
                styles={this.searchboxStyles}
                ariaLabel="Sample search box. Does not actually search anything."
                />
                {
                // This custom navigation still renders the close button (defaultRender).
                // If you don't use defaultRender, be sure to provide some other way to close the panel.
                defaultRender!(props)
                }
            </>
            ),
            [],
        );



//
        return(
            <>
                {/* 1 */}
                <div>
                    <DefaultButton text="Open panel" onClick={openPanel} />
                    <Panel
                        headerText="Sample panel"
                        isOpen={isOpen}
                        onDismiss={dismissPanel}
                        // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
                        closeButtonAriaLabel="Close"
                    >
                        <p>Content goes here.</p>
                    </Panel>
                </div>
                {/* line break */}
                <br></br><br></br>
                {/* 2 */}
                <div>
                    <p style={this.firstPStyle}>
                        See the{' '}
                        <Link href="https://developer.microsoft.com/en-us/fluentui#/controls/web/panel#PanelType" underline>
                        PanelType documentation
                        </Link>{' '}
                        for details on how each option affects panel sizing at different screen widths.
                    </p>
                    <p>
                        All panels are anchored to the far side of the screen (right in LTR, left in RTL) unless otherwise specified.
                    </p>
                    <Dropdown
                        label="Choose a panel size:"
                        options={this.options}
                        selectedKey={option.key}
                        onChange={updateOption}
                        styles={this.dropdownStyles}
                    />
                    <PanelExample panelType={Number(option.key)} description={description} />
                </div>
                {/* line break */}
                <br></br><br></br>
                {/* 3 */}
                <div>
                    <DefaultButton text="Open panel" onClick={_openPanel} />
                    <Panel
                        isOpen={_isOpen}
                        onDismiss={_dismissPanel}
                        headerText="Panel with footer at bottom"
                        closeButtonAriaLabel="Close"
                        onRenderFooterContent={onRenderFooterContent}
                        // Stretch panel content to fill the available height so the footer is positioned
                        // at the bottom of the page
                        isFooterAtBottom={true}
                    >
                        <p>Content goes here.</p>
                    </Panel>
                </div>
                {/* line break */}
                <br></br><br></br>
                {/* 4 */}
                <div>
                    {this.explanation}
                    <br />
                    <br />
                    <DefaultButton text="Open panel" onClick={__openPanel} />
                    <Panel
                        isLightDismiss
                        isOpen={__isOpen}
                        onDismiss={__dismissPanel}
                        closeButtonAriaLabel="Close"
                        headerText="Light dismiss panel"
                    >
                        <p>{this.explanation}</p>
                    </Panel>
                </div>
                {/* line break */}
                <br></br><br></br>
                {/* 5 */}
                <div>
                    When dismissed, this panel will be hidden instead of destroyed. This is useful for cases in which the panel
                    contains state which must be preserved across times that the panel is opened. <br />
                    <br />
                    <DefaultButton text="Open panel" onClick={___openPanel} />
                    <Panel
                        isOpen={___isOpen}
                        closeButtonAriaLabel="Close"
                        isHiddenOnDismiss={true}
                        headerText="Panel - Hidden on dismiss"
                        onDismiss={___dismissPanel}
                    >
                        <div>
                        {this.contentExplanation}
                        <br />
                        <br />
                        <TextField ariaLabel={this.contentExplanation} />
                        </div>
                    </Panel>
                </div>
                {/* line break */}
                <br></br><br></br>
                {/* 6 */}
                <div>
                    This panel can only be closed by clicking a button inside the panel content. (Don't use this behavior unless
                    absolutely necessary.)
                    <br />
                    <br />
                    <DefaultButton text="Open panel" onClick={openPanel6} />
                    <Panel
                        // To entirely disable the default dismiss behavior:
                        // 1. Don't provide an onDismiss prop
                        isOpen={isOpen6} // 2. Control the visibility
                        hasCloseButton={false} // 3. Hide the close button
                        headerText="Controlled panel"
                    >
                        <p>This panel can only be closed by clicking the button below.</p>
                        <DefaultButton onClick={dismissPanel6} text="Close panel" />
                    </Panel>
                </div>
                {/* line break */}
                <br></br><br></br>
                {/* 7 */}
                <div>
                    {this._explanation}
                    <br />
                    <br />
                    <DefaultButton text="Open panel" onClick={openPanel7} />
                    <Panel
                        headerText="Panel with custom close behavior"
                        isOpen={isPanelOpen7}
                        onDismiss={onDismiss7}
                        closeButtonAriaLabel="Close"
                    >
                        <p>{this._explanation}</p>
                    </Panel>
                    {isDialogVisible7 && (
                        <Dialog
                        hidden={false}
                        onDismiss={hideDialog}
                        dialogContentProps={this.dialogContentProps}
                        modalProps={this.dialogModalProps}
                        >
                        <DialogFooter>
                            <PrimaryButton onClick={hideDialogAndPanel} text="Yes" />
                            <DefaultButton onClick={hideDialog} text="No" />
                        </DialogFooter>
                        </Dialog>
                    )}
                </div>
                {/* line break */}
                <br></br><br></br>
                {/* 8 */}
                <div>
                    {this.__explanation}
                    <br />
                    <br />
                    <DefaultButton text="Open panel" onClick={openPanel8} />
                    <Panel
                        headerText="Panel with custom navigation content"
                        onRenderNavigationContent={onRenderNavigationContent}
                        isOpen={isOpen8}
                        onDismiss={dismissPanel8}
                        closeButtonAriaLabel="Close"
                    >
                        <div>
                        <p>{this.__explanation}</p>
                        </div>
                    </Panel>
                </div>
            </>
        );
    }
}