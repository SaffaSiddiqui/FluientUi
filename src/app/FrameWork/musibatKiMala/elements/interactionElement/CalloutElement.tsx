import {JSX} from 'react';
import {elementCategory} from '../../core/enums/elementCategory';
import {elementType} from '../../core/enums/elementType';
import {interactionElement} from '../../core/base/interactionElement';
import * as React from 'react';
import { FocusTrapCallout, FocusZone, FocusZoneTabbableElements, Stack, getTheme, Callout, Link, mergeStyleSets, DelayedRender, Text, FontWeights } from '@fluentui/react';
import { useBoolean, useId } from '@fluentui/react-hooks';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';

export class CalloutElement extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.Callout, elementCategory.interaction, id, Name,  title);
    }

    styles = mergeStyleSets({
        button: {
            width: 130,
        },
        callout: {
            width: 320,
            maxWidth: '90%',
            padding: '20px 24px',
        },
        title: {
            marginBottom: 12,
            fontWeight: FontWeights.semilight,
        },
        link: {
            display: 'block',
            marginTop: 20,
        },
    });
//
    _styles = mergeStyleSets({
        button: {
            width: 130,
        },
        callout: {
            width: 320,
            padding: '20px 24px',
        },
    });
//
    theme = getTheme();
    __styles = mergeStyleSets({
        callout: {
            width: 320,
            padding: '20px 24px',
            background: this.theme.semanticColors.bodyBackground,
        },
        title: {
            marginBottom: 12,
            fontWeight: FontWeights.semilight,
        },
        actions: {
            marginTop: 20,
        },
    });
//
    ___styles = mergeStyleSets({
        callout: {
            width: 320,
            padding: '20px 24px',
        },
        title: {
            marginBottom: 12,
            fontWeight: FontWeights.semilight,
        },
        buttons: {
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 20,
        },
    });


    renderElement(): JSX.Element {

        const [isCalloutVisible, { toggle: toggleIsCalloutVisible }] = useBoolean(false);
        const buttonId = useId('callout-button');
        const labelId = useId('callout-label');
        const descriptionId = useId('callout-description');
//
        const [_isCalloutVisible, { toggle: _toggleIsCalloutVisible }] = useBoolean(false);
        const _buttonId = useId('callout-button');
//
        const [__isCalloutVisible, { toggle: __toggleIsCalloutVisible }] = useBoolean(false);
        const __buttonId = useId('callout-button');
        const __labelId = useId('callout-label');
//
        const [___isCalloutVisible, { toggle: ___toggleIsCalloutVisible }] = useBoolean(false);
        const ____buttonId = useId('callout-button');
//

        return(
            <>
                {/* 1 */}
                <DefaultButton
                    id={buttonId}
                    onClick={toggleIsCalloutVisible}
                    text={isCalloutVisible ? 'Hide callout' : 'Show callout'}
                    className={this.styles.button}
                />
                {isCalloutVisible && (
                    <Callout
                        className={this.styles.callout}
                        ariaLabelledBy={labelId}
                        ariaDescribedBy={descriptionId}
                        role="dialog"
                        gapSpace={0}
                        target={`#${buttonId}`}
                        onDismiss={toggleIsCalloutVisible}
                        setInitialFocus
                    >
                        <Text as="h1" block variant="xLarge" className={this.styles.title} id={labelId}>
                            Callout title here
                        </Text>
                        <Text block variant="small" id={descriptionId}>
                            Message body is optional. If help documentation is available, consider adding a link to learn more at the
                            bottom.
                        </Text>
                        <Link href="http://microsoft.com" target="_blank" className={this.styles.link}>
                            Sample link
                        </Link>
                    </Callout>
                )}
                {/* line break */}
                <br></br><br></br>
                {/* 2 */}
                <DefaultButton
                    id={_buttonId}
                    onClick={_toggleIsCalloutVisible}
                    text={_isCalloutVisible ? 'Hide callout' : 'Show callout'}
                    className={this._styles.button}
                />
                {_isCalloutVisible && (
                    <Callout className={this._styles.callout} target={`#${_buttonId}`} onDismiss={_toggleIsCalloutVisible} role="alert">
                        <DelayedRender>
                            <Text variant="small">
                                This message is treated as an aria-live assertive status message, and will be read by a screen reader
                                regardless of focus.
                            </Text>
                        </DelayedRender>
                    </Callout>
                )}
                {/* line break */}
                <br></br><br></br>
                {/* 3 */}
                <DefaultButton id={__buttonId} text="Show callout" onClick={__toggleIsCalloutVisible} />
                {__isCalloutVisible && (
                    <Callout
                        coverTarget
                        ariaLabelledBy={__labelId}
                        role="dialog"
                        className={this.__styles.callout}
                        onDismiss={__toggleIsCalloutVisible}
                        target={`#${__buttonId}`}
                        isBeakVisible={false}
                        setInitialFocus
                    >
                        <Text block variant="xLarge" className={this.__styles.title} id={__labelId}>
                            I'm covering the target!
                        </Text>
                        <div className={this.__styles.actions}>
                            <DefaultButton onClick={__toggleIsCalloutVisible} text="Click to dismiss" />
                        </div>
                    </Callout>
                )}
                {/* line break */}
                <br></br><br></br>
                {/* 4 */}
                <DefaultButton id={____buttonId} onClick={___toggleIsCalloutVisible} text="Show callout" />
                {___isCalloutVisible ? (
                    <FocusTrapCallout
                        role="alertdialog"
                        className={this.___styles.callout}
                        gapSpace={0}
                        target={`#${____buttonId}`}
                        onDismiss={___toggleIsCalloutVisible}
                        setInitialFocus
                    >
                        <Text block variant="xLarge" className={this.___styles.title}>
                            Focus trapping callout
                        </Text>
                        <Text block variant="small">
                            Content is wrapped in a FocusTrapZone so the user cannot accidentally tab or focus out of this callout. Use
                            the buttons to close.
                        </Text>
                        {/* This FocusZone allows the user to go between buttons with the arrow keys.
                            It's not related to or required for FocusTrapCallout's built-in focus trapping. */}
                        <FocusZone handleTabKey={FocusZoneTabbableElements.all} isCircularNavigation>
                            <Stack
                                className={this.___styles.buttons}
                                // eslint-disable-next-line @typescript-eslint/no-deprecated
                                gap={8}
                                horizontal
                            >
                                <PrimaryButton onClick={___toggleIsCalloutVisible}>Done</PrimaryButton>
                                <DefaultButton onClick={___toggleIsCalloutVisible}>Cancel</DefaultButton>
                            </Stack>
                        </FocusZone>
                    </FocusTrapCallout>
                ) : null}
            </>
        );
    }
}