"use client";

import { IButtonProps, ICalendar } from '@fluentui/react';
import {buttonElements} from './FrameWork/musibatKiMala/elements/interactionElement/buttonElements';
import {checkboxElement} from './FrameWork/musibatKiMala/elements/interactionElement/checkbox';
import { datePicker } from './FrameWork/musibatKiMala/elements/interactionElement/datePicker';
import { DropdownElement } from './FrameWork/musibatKiMala/elements/interactionElement/Dropdown';
// import {CalendarElement} from './FrameWork/musibatKiMala/elements/interactionElement/calendar';

export default function Home() {

  /*button: */
  const saveButton = new buttonElements("btn1","saveButtton","Save",{
    children: "Save Widget",
    onClick: () => alert("Saved!"),
    disabled: false,
  } as IButtonProps);
  const cancelButton = new buttonElements("btn2","cancelButtton","Cancel",{
    children: "Cancel",
    onClick: () => alert("Cancelled!"),
    disabled: false,
  } as IButtonProps);

  /* calendar: */
  // const cal = new CalendarElement(
  //   'cal1',
  //   'My Calendar',
  //   'Select a Date',
  //   { value: new Date(), onSelectDate: (date) => console.log(date) }
  // );

  /* checkbox: */
  const box = new checkboxElement(
    "box1","my box", "select a date",
  )

  const datepicker = new datePicker(
    "pick1","my datepicker", 'select date',
  )

  /* dropdown: */
  const dropdown = new DropdownElement(
    "drop1", "dropdown", "Dropdown",
  )

  return (
    <>
      <div style={{display: "flex", gap: "10px", padding:"10px"}}>
        {/* button: */}
        {saveButton.renderElement()}
        {cancelButton.renderElement()}
        
      </div>

      {/* calendar: */}
      {/* <div>{cal.renderElement()}</div> */}


      {/* checkbox: */}
      <div style={{ marginTop: "10px", display: "flex", gap: "10px", padding:"10px"}}>
        {box.renderElement()}
      </div>

      {/* datePicker */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {datepicker.renderElement()}
      </div>

      {/* dropdown: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {dropdown.renderElement()}
      </div>

    </>
  );
}
