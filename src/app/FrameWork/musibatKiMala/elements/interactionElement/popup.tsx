import {JSX} from 'react';
import { interactionElement } from '../../core/base/interactionElement';
import { elementType } from '../../core/enums/elementType';
import { elementCategory } from '../../core/enums/elementCategory';
import * as React from 'react';
import { mergeStyleSets ,Popup, FocusTrapZone, Layer, Overlay } from '@fluentui/react';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { useBoolean } from '@fluentui/react-hooks';

export class popup extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.popup, elementCategory.interaction, id, Name, title);
    }

    popupStyles = mergeStyleSets({
        root: {
            background: 'rgba(0, 0, 0, 0.2)',
            bottom: '0',
            left: '0',
            position: 'fixed',
            right: '0',
            top: '0',
        },
        content: {
            background: 'white',
            left: '50%',
            maxWidth: '400px',
            padding: '0 2em 2em',
            position: 'absolute',
            top: '50%',
            transform: 'translate(-50%, -50%)',
        },
    });

    renderElement(): JSX.Element {
        const [isPopupVisible, { toggle: toggleIsPopupVisible }] = useBoolean(false);
//        
        const [_isPopupVisible, { setTrue: showPopup, setFalse: hidePopup }] = useBoolean(false);
        return(
            <>
                {/* 1 */}
                <DefaultButton onClick={toggleIsPopupVisible} text="Show popup" />
                {isPopupVisible && (
                    <Popup>
                        <h2>Example Popup</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </Popup>
                )}
                {/*  */}
                <br></br><br></br>
                {/* 2 */}
                <DefaultButton onClick={showPopup} text="Show modal popup" />
                {_isPopupVisible && (
                    <Layer>
                    <Popup
                        className={this.popupStyles.root}
                        role="dialog"
                        aria-modal="true"
                        onDismiss={hidePopup}
                        // eslint-disable-next-line @typescript-eslint/no-deprecated
                        enableAriaHiddenSiblings={true}
                    >
                        <Overlay onClick={hidePopup} />
                        <FocusTrapZone>
                        <div role="document" className={this.popupStyles.content}>
                            <h2>Example Popup</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                            </p>
                            <DefaultButton onClick={hidePopup}>Close Popup</DefaultButton>
                        </div>
                        </FocusTrapZone>
                    </Popup>
                    </Layer>
                )}
            </>
        );
    }
}