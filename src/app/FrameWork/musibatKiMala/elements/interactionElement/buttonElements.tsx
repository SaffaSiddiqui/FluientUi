import {JSX} from 'react';
import { interactionElement } from '../../core/base/interactionElement';
import { elementType } from '../../core/enums/elementType';
import { elementCategory } from '../../core/enums/elementCategory';
import {CalendarElement} from './calendar';
import { PrimaryButton, IButtonProps, CompoundButton, Stack, IContextualMenuProps, IIconProps } from '@fluentui/react';
import { DefaultButton, CommandButton } from '@fluentui/react/lib/Button';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();

export class buttonElements extends interactionElement{
    props: IButtonProps;
// calendar
    state = {
    // displayCalendar: false
    };
    constructor(
        id: string,
        Name: string,
        title: string,
        props: IButtonProps = {},
        state: any,
    ){
        super(elementType.button, elementCategory.interaction, id, Name, title);
        this.props = props;
        this.state = {displayCalendar: false};
    }

// calendar:-------
    cal = new CalendarElement(
    'cal1',
    'My Calendar',
    'Select a Date',
    { value: new Date(), onSelectDate: (date) => console.log(date) }
  );

    menuProps: IContextualMenuProps = {
        items: [
            {
            key: 'emailMessage',
            text: 'Email message',
            iconProps: { iconName: 'Mail' },
            },
            {
            key: 'calendarEvent',
            text: 'Calendar event',
            iconProps: { iconName: 'Calendar' },
            //calendar:------
            // onClick: () => {
            //     this.state({ displayCalendar: true });
            // }
            
            },
        ],
    };
    addIcon: IIconProps = { iconName: 'Add' };
// 
 


    renderElement(): JSX.Element{
        return(
            <>
                {/* 1 */}
                <PrimaryButton {...this.props}>{this.props.children}</PrimaryButton>
                {/* 2 */}
                <CompoundButton primary secondaryText="This is the secondary text." {...this.props} disabled={this.disabled} checked={this.checked}>
                    {this.props.children}
                </CompoundButton>
                {/* 3 */}
                <Stack>
                    <DefaultButton
                        text="Standard"
                        split
                        splitButtonAriaLabel="See 2 options"
                        aria-roledescription="split button"
                        menuProps={this.menuProps}
                        // onClick={_alertClicked}
                        {...this.props}
                        disabled={this.disabled}
                        checked={this.checked}
                    >{this.props.children}</DefaultButton>
                </Stack>
                {/* 4 */}
                <CommandButton iconProps={this.addIcon} text="New item" menuProps={this.menuProps} disabled={this.disabled} checked={this.checked} />

{/* //////////////////////// */}
                {/* Show Calendar when state is true */}
            {/* {this.state.displayCalendar && (
                <CalendarElement
                    id="cal1"
                    Name="My Calendar"
                    title="Select a Date"
                    value={new Date()}
                    onSelectDate={(date) => console.log(date)}
                />
            )} */}
            </>
        );
    }

}