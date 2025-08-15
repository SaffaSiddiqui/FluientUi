import {JSX} from 'react';
import {elementCategory} from '../../core/enums/elementCategory';
import {elementType} from '../../core/enums/elementType';
import {interactionElement} from '../../core/base/interactionElement';
import * as React from 'react';
import { DefaultButton, IButtonProps } from '@fluentui/react/lib/Button';
import { TeachingBubble } from '@fluentui/react/lib/TeachingBubble';
import { useBoolean, useId } from '@fluentui/react-hooks';
import { DirectionalHint } from '@fluentui/react/lib/Callout';
import { IImageProps } from '@fluentui/react/lib/Image';

export class TeachingBubbeElement extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.TeachingBubble, elementCategory.interaction, id, Name, title);
    }
    
    examplePrimaryButtonProps: IButtonProps = {
        children: 'Try it out',
    };
//
    _exampleImageProps: IImageProps = {
    src: 'https://fabricweb.azureedge.net/fabric-website/placeholders/364x180.png',
    alt: 'Example placeholder image',
    };

    _examplePrimaryButtonProps: IButtonProps = {
    children: 'Try it out',
    };
//
    __examplePrimaryButtonProps: IButtonProps = {
        children: 'Next',
    };

    renderElement(): JSX.Element {

        const buttonId = useId('targetButton');
        const [teachingBubbleVisible, { toggle: toggleTeachingBubbleVisible }] = useBoolean(false);
        const exampleSecondaryButtonProps: IButtonProps = React.useMemo(
            () => ({
                children: 'Maybe later',
                onClick: toggleTeachingBubbleVisible,
            }),
            [toggleTeachingBubbleVisible],
        );
//
        const _buttonId = useId('targetButton');
        const [_teachingBubbleVisible, { toggle: _toggleTeachingBubbleVisible }] = useBoolean(false);
//
        const __buttonId = useId('targetButton');
        const [__teachingBubbleVisible, { toggle: __toggleTeachingBubbleVisible }] = useBoolean(false);

        const _exampleSecondaryButtonProps: IButtonProps = React.useMemo(
            () => ({
            children: 'Maybe later',
            onClick: __toggleTeachingBubbleVisible,
            }),
            [__toggleTeachingBubbleVisible],
        );
//
        const ___buttonId = useId('targetButton');
        const [___teachingBubbleVisible, { toggle: ___toggleTeachingBubbleVisible }] = useBoolean(false);

        const ___exampleSecondaryButtonProps: IButtonProps = React.useMemo(
            () => ({
            children: 'Previous',
            onClick: ___toggleTeachingBubbleVisible,
            }),
            [___toggleTeachingBubbleVisible],
        );        

        return(
            <>
                {/* 1 */}
                <div>
                    <DefaultButton
                        id={buttonId}
                        onClick={toggleTeachingBubbleVisible}
                        text={teachingBubbleVisible ? 'Hide TeachingBubble' : 'Show TeachingBubble'}
                    />
                    {teachingBubbleVisible && (
                        <TeachingBubble
                            target={`#${buttonId}`}
                            primaryButtonProps={this.examplePrimaryButtonProps}
                            secondaryButtonProps={exampleSecondaryButtonProps}
                            onDismiss={toggleTeachingBubbleVisible}
                            headline="Discover what’s trending around you"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni
                            harum non?
                        </TeachingBubble>
                    )}
                </div>
                {/* line break */}
                <br></br><br></br>
                {/* 2 */}
                <div>
                    <DefaultButton
                        id={_buttonId}
                        onClick={_toggleTeachingBubbleVisible}
                        text={_teachingBubbleVisible ? 'Hide TeachingBubble' : 'Show TeachingBubble'}
                    />
                    {_teachingBubbleVisible && (
                        <TeachingBubble
                            calloutProps={{ directionalHint: DirectionalHint.bottomCenter }}
                            target={`#${_buttonId}`}
                            isWide={true}
                            hasCloseButton={true}
                            closeButtonAriaLabel="Close"
                            onDismiss={_toggleTeachingBubbleVisible}
                            headline="Discover what’s trending around you"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni
                            harum non?
                        </TeachingBubble>
                    )}
                </div>
                {/* line break */}
                <br></br><br></br>
                {/* 3 */}
                <div>
                    <DefaultButton
                        id={__buttonId}
                        onClick={__toggleTeachingBubbleVisible}
                        text={__teachingBubbleVisible ? 'Hide TeachingBubble' : 'Show TeachingBubble'}
                    />
                    {__teachingBubbleVisible && (
                        <TeachingBubble
                            target={`#${__buttonId}`}
                            illustrationImage={this._exampleImageProps}
                            primaryButtonProps={this._examplePrimaryButtonProps}
                            secondaryButtonProps={_exampleSecondaryButtonProps}
                            onDismiss={__toggleTeachingBubbleVisible}
                            headline="Discover what’s trending around you"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni
                            harum non?
                        </TeachingBubble>
                    )}
                </div>
                {/* line break */}
                <br></br><br></br>
                {/* 4 */}
                <div>
                    <DefaultButton
                        id={___buttonId}
                        onClick={___toggleTeachingBubbleVisible}
                        text={___teachingBubbleVisible ? 'Hide TeachingBubble' : 'Show TeachingBubble'}
                    />
                    {___teachingBubbleVisible && (
                        <TeachingBubble
                        target={`#${___buttonId}`}
                        primaryButtonProps={this.__examplePrimaryButtonProps}
                        secondaryButtonProps={___exampleSecondaryButtonProps}
                        onDismiss={___toggleTeachingBubbleVisible}
                        footerContent="2 of 3"
                        headline="Discover what’s trending around you"
                        >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni
                        harum non?
                        </TeachingBubble>
                    )}
                </div>
            </>
        );
    }
}