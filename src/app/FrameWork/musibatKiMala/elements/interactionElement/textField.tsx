import {JSX} from 'react';
import {interactionElement} from '../../core/base/interactionElement';
import { elementCategory } from '../../core/enums/elementCategory';
import { elementType } from '../../core/enums/elementType';
import * as React from 'react';
import { TextField, MaskedTextField, ITextFieldStyles } from '@fluentui/react/lib/TextField';
import { Stack, IStackTokens, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import { useBoolean } from '@fluentui/react-hooks';
import { lorem } from '@fluentui/example-data';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { Icon, IIconStyles } from '@fluentui/react/lib/Icon';
import { Text } from '@fluentui/react/lib/Text';

export class textField extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.TextField, elementCategory.interaction, id, Name, title);
    }

    stackTokens = { childrenGap: 50 };
    iconProps = { iconName: 'Calendar' };
    stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
    columnProps: Partial<IStackProps> = {
        tokens: { childrenGap: 15 },
        styles: { root: { width: 300 } },
    };
//   
    textFieldStyles: Partial<ITextFieldStyles> = { fieldGroup: { width: 300 } };
    narrowTextFieldStyles: Partial<ITextFieldStyles> = { fieldGroup: { width: 100 } };
    _stackTokens = { childrenGap: 15 };
//
    _stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
    __stackTokens = { childrenGap: 50 };
    dummyText: string = lorem(100);
    _columnProps: Partial<IStackProps> = {
        tokens: { childrenGap: 15 },
        styles: { root: { width: 300 } },
    };
//  
    ___stackTokens = { childrenGap: 50 };
    __stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
    __columnProps: Partial<IStackProps> = {
        tokens: { childrenGap: 15 },
        styles: { root: { width: 300 } },
    };
//
    maskFormat: { [key: string]: RegExp } = {
    '*': /[a-zA-Z0-9_]/,
    };
    ____stackTokens = { maxWidth: 300 };
//
    ___stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
    _____stackTokens = { childrenGap: 50 };
//
    _sstackTokens: IStackTokens = {
        childrenGap: 20,
        maxWidth: 350,
    };

    richErrorIconStyles: Partial<IIconStyles> = { root: { color: 'red' } };
    richErrorStackStyles: Partial<IStackStyles> = { root: { height: 24 } };
    richErrorStackTokens: IStackTokens = { childrenGap: 8 };

    getErrorMessage = (value: string): string => {
        return value.length < 3 ? '' : `Input value length must be less than 3. Actual length is ${value.length}.`;
    };

    getErrorMessagePromise = (value: string): Promise<string> => {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getErrorMessage(value)), 5000);
        });
    };

    getRichErrorMessage = (value: string) => {
        return value.length < 3 ? (
            ''
        ) : (
            <Stack styles={this.richErrorStackStyles} verticalAlign="center" horizontal tokens={this.richErrorStackTokens}>
            <Icon iconName="Error" styles={this.richErrorIconStyles} />
            <Text variant="smallPlus">Input value length must be less than 3. Actual length is {value.length}.</Text>
            </Stack>
        );
    };
//

//
    renderElement(): JSX.Element {

        const [firstTextFieldValue, setFirstTextFieldValue] = React.useState('');
        const [secondTextFieldValue, setSecondTextFieldValue] = React.useState('');
        const onChangeFirstTextFieldValue = React.useCallback(
            (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
            setFirstTextFieldValue(newValue || '');
            },
            [],
        );
        const onChangeSecondTextFieldValue = React.useCallback(
            (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
            if (!newValue || newValue.length <= 5) {
                setSecondTextFieldValue(newValue || '');
            }
            },
            [],
        );
//
        const containerRef = React.useRef<HTMLDivElement>(null);
        const [multiline, { toggle: toggleMultiline }] = useBoolean(false);

        const onChange = (_: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newText: string): void => {
            const newMultiline = newText.length > 50;
            if (newMultiline !== multiline) {
            toggleMultiline();
            }
        };
//
        const columnProps: Partial<IStackProps> = {
            tokens: { childrenGap: 15 },
            styles: { root: { width: 300 } },
        };
//
        const [showFields, { toggle: toggleShowFields }] = useBoolean(false);
//
        return(
            <>
                {/* 1 */}
                <form noValidate autoComplete="off">
                    <Stack horizontal tokens={this.stackTokens} styles={this.stackStyles}>
                        <Stack {...this.columnProps}>
                            <TextField label="Standard" />
                            <TextField label="Disabled" disabled defaultValue="I am disabled" />
                            <TextField label="Read-only" readOnly defaultValue="I am read-only" />
                            <TextField label="Required " required />
                            <TextField ariaLabel="Required without visible label" required />
                            <TextField label="With error message" errorMessage="Error message" />
                        </Stack>
                        <Stack {...this.columnProps}>
                            <MaskedTextField label="With input mask" mask="m\ask: (999) 999 - 9999" title="A 10 digit number" />
                            <TextField label="With an icon" iconProps={this.iconProps} />
                            <TextField label="With placeholder" placeholder="Please enter text here" />
                            <TextField label="Disabled with placeholder" disabled placeholder="I am disabled" />
                            {/* All password fields should be rendered inside of a form */}
                            <TextField
                                label="Password with reveal button"
                                type="password"
                                canRevealPassword
                                revealPasswordAriaLabel="Show password"
                            />
                        </Stack>
                    </Stack>
                </form>
                {/* line break */}
                <br></br>
                {/* 2 */}
                <Stack tokens={this._stackTokens}>
                    <TextField
                        label="Basic controlled TextField"
                        value={firstTextFieldValue}
                        onChange={onChangeFirstTextFieldValue}
                        styles={this.textFieldStyles}
                    />
                    <TextField
                        label="Controlled TextField limiting length of value to 5"
                        value={secondTextFieldValue}
                        onChange={onChangeSecondTextFieldValue}
                        styles={this.narrowTextFieldStyles}
                    />
                </Stack>
                {/* line break */}
                <br></br>
                {/* 3 */}
                <Stack horizontal tokens={this.__stackTokens} styles={this._stackStyles}>
                    <Stack {...this._columnProps}>
                        <TextField label="Standard" multiline rows={3} />
                        <TextField label="Disabled" multiline rows={3} disabled defaultValue={this.dummyText} />
                        <TextField label="Non-resizable" multiline resizable={false} />
                    </Stack>

                    <Stack {...this._columnProps}>
                        {/*
                        When using autoAdjustHeight, if the TextField extends past the container's height and the container allows
                        scrolling, deleting a line scrolls the container to the top. To avoid this, use the scrollable container's ref
                        in scrollContainerRef to preserve the scrollTop property.
                        */}
                        <div ref={containerRef} style={{ maxHeight: '300px', overflowY: 'scroll' }}>
                        <TextField label="With auto adjusting height" multiline autoAdjustHeight scrollContainerRef={containerRef} />
                        </div>
                        <TextField
                            label="Switches from single to multiline if more than 50 characters are entered"
                            multiline={multiline}
                            // eslint-disable-next-line react/jsx-no-bind
                            onChange={onChange}
                        />
                    </Stack>
                </Stack>
                {/* line break */}
                <br></br>
                {/* 4 */}
                <Stack horizontal tokens={this.___stackTokens} styles={this.__stackStyles}>
                    <Stack {...this.__columnProps}>
                        <TextField label="Standard:" underlined />
                        <TextField label="Disabled:" underlined disabled defaultValue="I am disabled" />
                        <TextField label="Required:" underlined required placeholder="Enter text here" />
                    </Stack>
                    <Stack {...this.__columnProps}>
                        <TextField label="Borderless single-line TextField" borderless placeholder="No borders here, folks." />
                        <TextField label="Borderless multi-line TextField" borderless multiline placeholder="No borders here, folks." />
                    </Stack>
                </Stack>
                {/* line break */}
                <br></br>
                {/* 5 */}
                <Stack tokens={this.____stackTokens}>
                    <p>The mask has been modified here to allow "_"</p>
                    <MaskedTextField label="With input mask" mask="m\ask: ****" maskFormat={this.maskFormat} maskChar="?" />
                </Stack>
                {/* line break */}
                <br></br>
                {/* 6 */}
                <Stack horizontal tokens={this._____stackTokens} styles={this.___stackStyles}>
                    <Stack {...columnProps}>
                        <TextField // prettier-ignore
                        label="With prefix"
                        prefix="https://"
                        />
                        <TextField // prettier-ignore
                        label="Disabled with prefix"
                        prefix="https://"
                        disabled
                        />
                    </Stack>
                    <Stack {...columnProps}>
                        <TextField // prettier-ignore
                        label="With suffix"
                        suffix=".com"
                        />
                        <TextField label="With prefix and suffix" prefix="https://" suffix=".com" />
                    </Stack>
                </Stack>
                {/* line break */}
                <br></br>
                {/* 7 */}
                <Stack tokens={this._sstackTokens}>
                    <Toggle label="Show text fields" inlineLabel checked={showFields} onChange={toggleShowFields} />
                    {showFields && (
                        <>
                            <strong>Hint: the input length must be less than 3.</strong>
                            <TextField label="String-based validation" onGetErrorMessage={this.getErrorMessage} />
                            <TextField label="Promise-based validation" onGetErrorMessage={this.getErrorMessagePromise} />
                            <TextField
                                label="String-based validation on render"
                                defaultValue="Shows an error message on render"
                                onGetErrorMessage={this.getErrorMessage}
                            />
                            <TextField
                                label="String-based validation only on change"
                                defaultValue="Validates only on input change, not on render"
                                onGetErrorMessage={this.getErrorMessage}
                                validateOnLoad={false}
                            />
                            <TextField
                                label="Promise-based validation"
                                defaultValue="Shows an error message 5 seconds after render"
                                onGetErrorMessage={this.getErrorMessagePromise}
                            />
                            <TextField
                                label="Both description and error message"
                                defaultValue="Shows description and error message on render"
                                description="Field description"
                                onGetErrorMessage={this.getErrorMessage}
                            />
                            <TextField
                                label="Deferred string-based validation"
                                placeholder="Validates after user stops typing for 2 seconds"
                                onGetErrorMessage={this.getErrorMessage}
                                deferredValidationTime={2000}
                            />
                            <TextField
                                label="Validates only on focus and blur"
                                placeholder="Validates only on input focus and blur"
                                onGetErrorMessage={this.getErrorMessage}
                                validateOnFocusIn
                                validateOnFocusOut
                            />
                            <TextField
                                label="Validates only on blur"
                                placeholder="Validates only on input blur"
                                onGetErrorMessage={this.getErrorMessage}
                                validateOnFocusOut
                            />
                            <TextField
                                label="Underlined field:"
                                defaultValue="This value is too long"
                                underlined
                                onGetErrorMessage={this.getErrorMessage}
                            />
                            <TextField
                                label="Uses the errorMessage property to set an error state"
                                placeholder="This field always has an error"
                                errorMessage="This is a statically set error message"
                            />
                            <TextField
                                label="Custom rich error message"
                                defaultValue="This value is too long"
                                onGetErrorMessage={this.getRichErrorMessage}
                            />
                        </>
                    )}
                </Stack>
            </>
        );
    }
}