"use client";

import { IButtonProps, ICalendar } from '@fluentui/react';
import {buttonElements} from './FrameWork/musibatKiMala/elements/interactionElement/buttonElements';
import {checkboxElement} from './FrameWork/musibatKiMala/elements/interactionElement/checkbox';
import { datePicker } from './FrameWork/musibatKiMala/elements/interactionElement/datePicker';
import { DropdownElement } from './FrameWork/musibatKiMala/elements/interactionElement/Dropdown';
import { link } from './FrameWork/musibatKiMala/elements/interactionElement/link';
import { modal } from './FrameWork/musibatKiMala/elements/interactionElement/Modal';
import { popup } from './FrameWork/musibatKiMala/elements/interactionElement/popup';
import { slider } from './FrameWork/musibatKiMala/elements/interactionElement/slider';
import { choiceGroup } from './FrameWork/musibatKiMala/elements/interactionElement/choiceGroup';
import { searchBox } from './FrameWork/musibatKiMala/elements/interactionElement/searchBox';
import { textField } from './FrameWork/musibatKiMala/elements/interactionElement/textField';
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

  /* link: */
  const Link = new link(
    "link1", "link", "link"
  )

  /* modal: */
  const  Modal = new modal(
    "modal1", "Modal", "modal"
  )

  /*  popup: */
  const Popup = new popup(
    "popup1", "Popup", "popup"
  )

  /* slider: */
  const Slider = new slider(
    "slider1", "slider", "slider"
  )

  /* ChoiceGroup: */
  const ChoiceGroup = new choiceGroup(
    "choice1", "ChoiceGroup", "ChoiceGroup"
  )

  /* SearchBox: */
  const SearchBox = new searchBox(
    "box1", "SearchBox", "SearchBox"
  )

  /* TextField: */
  const TextField = new textField(
    "field1", "TextField", "TextField"
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

      {/* link: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {Link.renderElement()}
      </div>

      {/* modal: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {Modal.renderElement()}
      </div>

      {/* Popup: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {Popup.renderElement()}
      </div>

      {/* slider: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {Slider.renderElement()}
      </div>

      {/* ChoiceGroup: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {ChoiceGroup.renderElement()}
      </div>

      {/* SearchBox: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {SearchBox.renderElement()}
      </div>

      {/* TextField: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {TextField.renderElement()}
      </div>

    </>
  );
}
