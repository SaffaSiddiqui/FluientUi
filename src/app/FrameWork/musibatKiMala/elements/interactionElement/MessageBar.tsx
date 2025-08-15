import {JSX} from 'react';
import {elementCategory} from '../../core/enums/elementCategory';
import {elementType} from '../../core/enums/elementType';
import {interactionElement} from '../../core/base/interactionElement';
import * as React from 'react';
import {
  Link,
  Stack,
  StackItem,
  MessageBar,
  MessageBarType,
  ChoiceGroup,
  IStackProps,
  MessageBarButton,
  Text,
  IChoiceGroupStyles,
} from '@fluentui/react';
import { useWindow } from '@fluentui/react-window-provider';


interface IExampleProps {
            resetChoice?: () => void;
        }

export class MessageBarElement extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.MessageBar, elementCategory.interaction, id, Name, title);
    }


    horizontalStackProps: IStackProps = {
        horizontal: true,
        wrap: true,
        tokens: { childrenGap: 16 },
    };
    verticalStackProps: IStackProps = {
        grow: true,
        styles: { root: { overflow: 'hidden', width: '60%' } },
        tokens: { childrenGap: 20 },
    };
    choiceGroupStyles: Partial<IChoiceGroupStyles> = { label: { maxWidth: 250 } };

    DefaultExample = () => (
        <MessageBar>
            Info (default) MessageBar.
            <Link href="www.bing.com" target="_blank" underline>
                Visit our website.
            </Link>
        </MessageBar>
    );

    ErrorExample = (p: IExampleProps) => (
        <MessageBar
            messageBarType={MessageBarType.error}
            isMultiline={false}
            onDismiss={p.resetChoice}
            dismissButtonAriaLabel="Close"
        >
            Error MessageBar with single line, with dismiss button.
            <Link href="www.bing.com" target="_blank" underline>
                Visit our website.
            </Link>
        </MessageBar>
    );

    BlockedExample = (p: IExampleProps) => (
        <MessageBar
            messageBarType={MessageBarType.blocked}
            isMultiline={false}
            onDismiss={p.resetChoice}
            dismissButtonAriaLabel="Close"
            truncated={true}
            // eslint-disable-next-line @typescript-eslint/no-deprecated
            overflowButtonAriaLabel="See more"
        >
            <b>Blocked MessageBar - single line, with dismiss button and truncated text.</b> Truncation is not available if you
            use action buttons or multiline and should be used sparingly. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Morbi luctus, purus a lobortis tristique, odio augue pharetra metus, ac placerat nunc mi nec dui. Vestibulum
            aliquam et nunc semper scelerisque. Curabitur vitae orci nec quam condimentum porttitor et sed lacus. Vivamus ac
            efficitur leo. Cras faucibus mauris libero, ac placerat erat euismod et. Donec pulvinar commodo odio sit amet
            faucibus. In hac habitasse platea dictumst. Duis eu ante commodo, condimentum nibh pellentesque, laoreet enim. Fusce
            massa lorem, ultrices eu mi a, fermentum suscipit magna. Integer porta purus pulvinar, hendrerit felis eget,
            condimentum mauris.
        </MessageBar>
    );

    SevereExample = (p: IExampleProps) => (
        <MessageBar
            messageBarType={MessageBarType.severeWarning}
            actions={
            <div>
                <MessageBarButton>Yes</MessageBarButton>
                <MessageBarButton>No</MessageBarButton>
            </div>
            }
        >
            SevereWarning MessageBar with action buttons which defaults to multiline.
            <Link href="www.bing.com" target="_blank" underline>
                Visit our website.
            </Link>
        </MessageBar>
    );

    SuccessExample = () => (
        <MessageBar
            actions={
            <div>
                <MessageBarButton>Yes</MessageBarButton>
                <MessageBarButton>No</MessageBarButton>
            </div>
            }
            messageBarType={MessageBarType.success}
            isMultiline={false}
        >
            Success MessageBar with single line and action buttons.
            <Link href="www.bing.com" target="_blank" underline>
                Visit our website.
            </Link>
        </MessageBar>
    );

    WarningExample = (p: IExampleProps) => {
        const [showExpandButton, setShowExpandButton] = React.useState(false);

        function onResize() {
            const messageBarMessage = document.getElementById('warningMessageBar') as HTMLDivElement;

            if (messageBarMessage) {
                const temp = messageBarMessage.cloneNode(true) as any;

                temp.style.position = 'fixed';
                temp.style.overflow = 'visible';
                temp.style.whiteSpace = 'nowrap';
                temp.style.visibility = 'hidden';

                (messageBarMessage.parentElement as any).appendChild(temp);

                const fullWidth = temp.getBoundingClientRect().width;
                const displayWidth = messageBarMessage.getBoundingClientRect().width;

                setShowExpandButton(fullWidth > displayWidth);

                (messageBarMessage.parentElement as any).removeChild(temp);
            }
        }

        const win = useWindow();
        React.useEffect(() => {
            // The setTimeout is needed for the initial render because the
            // contents of the MessageBar is wrapped in a DelayedRender.
            setTimeout(onResize, 0);

            win && win.addEventListener('resize', onResize);

            return () => {
                win && win.removeEventListener('resize', onResize);
            };
        }, [win]);

        return (
            <MessageBar
                id="warningMessageBar"
                messageBarType={MessageBarType.warning}
                isMultiline={false}
                onDismiss={p.resetChoice}
                dismissButtonAriaLabel="Close"
                actions={
                    <div>
                        <MessageBarButton>Action</MessageBarButton>
                    </div>
                }
                showExpandButton={showExpandButton}
            >
                Warning MessageBar content.
                <Link href="www.bing.com" target="_blank" underline>
                    Visit our website.
                </Link>
            </MessageBar>
        );
    };

    WarningExample2 = (p: IExampleProps) => (
        <MessageBar
            onDismiss={p.resetChoice}
            dismissButtonAriaLabel="Close"
            messageBarType={MessageBarType.warning}
            actions={
                <div>
                    <MessageBarButton>Yes</MessageBarButton>
                    <MessageBarButton>No</MessageBarButton>
                </div>
            }
        >
            <b>Warning defaults to multiline</b>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus, purus a
            lobortis tristique, odio augue pharetra metus, ac placerat nunc mi nec dui. Vestibulum aliquam et nunc semper
            scelerisque. Curabitur vitae orci nec quam condimentum porttitor et sed lacus. Vivamus ac efficitur leo. Cras
            faucibus mauris libero, ac placerat erat euismod et. Donec pulvinar commodo odio sit amet faucibus. In hac habitasse
            platea dictumst. Duis eu ante commodo, condimentum nibh pellentesque, laoreet enim. Fusce massa lorem, ultrices eu
            mi a, fermentum suscipit magna. Integer porta purus pulvinar, hendrerit felis eget, condimentum mauris.
            <Link href="www.bing.com" target="_blank" underline>
                Visit our website.
            </Link>
        </MessageBar>
    );

    choiceOptions = [
        { key: 'all', text: 'Show all' },
        { key: 'default', text: 'Info (default)' },
        { key: 'error', text: 'Error' },
        { key: 'blocked', text: 'Blocked' },
        { key: 'severe', text: 'SevereWarning' },
        { key: 'success', text: 'Success' },
        { key: 'warning', text: 'Warning - single line' },
        { key: 'warning2', text: 'Warning - multiline' },
    ];
//












    
    
    renderElement(): JSX.Element {

        const [choice, setChoice] = React.useState<string | undefined>(undefined);
        const showAll = choice === 'all';

        const resetChoice = React.useCallback(() => setChoice(undefined), []);
//

        return(
            <>
                <div>
                    <Text block>
                        Because screen readers will immediately read any MessageBar(s) on page load, the examples are hidden by default.
                        Use the buttons below to choose an example to show.
                    </Text>
                    <br />
                    <Stack {...this.horizontalStackProps}>
                        <StackItem disableShrink>
                            <ChoiceGroup
                                styles={this.choiceGroupStyles}
                                label="Select a MessageBar example"
                                selectedKey={choice}
                                // eslint-disable-next-line react/jsx-no-bind
                                onChange={(e, v) => setChoice(v!.key)}
                                options={this.choiceOptions}
                            />
                        </StackItem>
                        <Stack {...this.verticalStackProps}>
                            {(choice === 'default' || showAll) && <this.DefaultExample />}
                            {(choice === 'error' || showAll) && <this.ErrorExample resetChoice={resetChoice} />}
                            {(choice === 'blocked' || showAll) && <this.BlockedExample resetChoice={resetChoice} />}
                            {(choice === 'severe' || showAll) && <this.SevereExample resetChoice={resetChoice} />}
                            {(choice === 'success' || showAll) && <this.SuccessExample />}
                            {(choice === 'warning' || showAll) && <this.WarningExample resetChoice={resetChoice} />}
                            {(choice === 'warning2' || showAll) && <this.WarningExample2 resetChoice={resetChoice} />}
                        </Stack>
                    </Stack>
                </div>
            </>
        );
    }
}