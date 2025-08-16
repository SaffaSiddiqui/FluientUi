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
import { toggle } from './FrameWork/musibatKiMala/elements/interactionElement/toggle';
import { commandBar } from './FrameWork/musibatKiMala/elements/interactionElement/commandBar';
import { ContextualMenu } from './FrameWork/musibatKiMala/elements/interactionElement/ContextualMenu';
import { NavElement } from './FrameWork/musibatKiMala/elements/interactionElement/NavElement';
import { PivotElement } from './FrameWork/musibatKiMala/elements/interactionElement/PivotElement';
import { MessageBarElement } from './FrameWork/musibatKiMala/elements/interactionElement/MessageBar';
import { TeachingBubbeElement } from './FrameWork/musibatKiMala/elements/interactionElement/TeachingBubbleElement';
import { CalloutElement } from './FrameWork/musibatKiMala/elements/interactionElement/CalloutElement';
import { DialogBoxElement } from './FrameWork/musibatKiMala/elements/interactionElement/DialogBoxElement';
import { LabelElement } from './FrameWork/musibatKiMala/elements/interactionElement/LabelElement';
import { RatingElement } from './FrameWork/musibatKiMala/elements/interactionElement/RatingElement';
import { SpinButtonElement } from './FrameWork/musibatKiMala/elements/interactionElement/SpinButtonElement';
import { colorPicker } from './FrameWork/musibatKiMala/elements/interactionElement/colorPicker';
import { peoplePicker } from './FrameWork/musibatKiMala/elements/interactionElement/peoplePicker';
import { PickerElement } from './FrameWork/musibatKiMala/elements/interactionElement/PickersElement';
import { SwatchColorPickerElement } from './FrameWork/musibatKiMala/elements/interactionElement/SwatchColorPickerElement';
import { TimePickerElement } from './FrameWork/musibatKiMala/elements/interactionElement/TimePickerElement';
import { ActivityItemElement } from './FrameWork/musibatKiMala/elements/interactionElement/ActivityItemElement';
import { DetailListElement } from './FrameWork/musibatKiMala/elements/interactionElement/DetailsListElement';
import { DocumentCardElement } from './FrameWork/musibatKiMala/elements/interactionElement/DocumentCardElement';
import { FacepileElement } from './FrameWork/musibatKiMala/elements/interactionElement/FacepileElement';
import { GroupedListElement } from './FrameWork/musibatKiMala/elements/interactionElement/GroupedListElement';
import { HoverCardElement } from './FrameWork/musibatKiMala/elements/interactionElement/HoverCardElement';
import { OverflowSetElement } from './FrameWork/musibatKiMala/elements/interactionElement/OverflowSetElement';
import { CoachmarkElement } from './FrameWork/musibatKiMala/elements/interactionElement/CoachmarkElement';
import { ProgressIndicatorElement } from './FrameWork/musibatKiMala/elements/interactionElement/ProgressIndicatorElement';
import { ShimmerElement } from './FrameWork/musibatKiMala/elements/interactionElement/ShimmerElement';
import { SpinnerElement } from './FrameWork/musibatKiMala/elements/interactionElement/SpinnerElement';
import { PanelElement } from './FrameWork/musibatKiMala/elements/interactionElement/PanelElement';
import { ScrollablePaneElement } from './FrameWork/musibatKiMala/elements/interactionElement/ScrollablePaneElement';
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
  
  /* Toggle: */
  const Toggle = new toggle(
    "toggle1", "Toggle", "Toggle"
  )

  /* commandBar: */
  const CommandBar = new commandBar(
    "Bar1", "CommandBar", "CommandBar"
  )

  /* ContextualMenu: */
  const contextualMenu = new ContextualMenu(
    "Cont1", "ContextualMenu", "ContextualMenu"
  )

  /* Navbar: */
  const NavBar = new NavElement(
    "Nav1", "NavBar", "NavBar"
  )

  /* Pivot: */
  const Pivot = new PivotElement(
    "Pivot1", "Pivot", "Pivot"
  )

  /* MessageBar: */
  const MessageBar = new MessageBarElement(
    "Bar1", "MessageBar", "MessageBar"
  )

  /* TeachingBubble: */
  const TeachingBubble = new TeachingBubbeElement(
    "Teaching1", "TeachingBubble", "TeachingBubble"
  )

  /* Callout: */
  const Callout = new CalloutElement(
    "Call1", "Callout", "Callout"
  )

  /* DialogBox: */
  const DialogBox = new DialogBoxElement(
    "Dialog1", "DialogBox", "DialogBox"
  )

  /* Label: */
  const Label = new LabelElement(
    "Label1", "Label", "Label"
  )

  /* Rating: */
  const Rating = new RatingElement(
    "Rating1", "Rating", "Rating" 
  )

  /* SpinButton: */
  const SpinButton = new SpinButtonElement(
    "Spin1", "SpinButton", "SpinButton"
  )

  /* ColorPicker: */
  const ColorPicker = new colorPicker(
    "Color1", "ColorPicker", "ColorPicker"
  )

  /* PeoplePicker: */
  const PeoplePicker = new peoplePicker(
    "Picker1", "PeoplePicker", "PeoplePicker"
  )

  /* Picker: */
  const Picker = new PickerElement(
    "Picker1", "Picker", "Picker"
  )

  /* SwatchColorPicker: */
  const SwatchColorPicker = new SwatchColorPickerElement(
    "Color1", "SwatchColorPicker", "SwatchColorPicker"
  )

  /* TimePicker: */
  const TimePicker = new TimePickerElement(
    "Time1", "TimePicker", "TimePicker"
  )

  /* Activity Item: */
  const ActivityItem = new ActivityItemElement(
    "Item1", "Activity Item", "Activity Item"
  )

  /* DetailList: */
  const DetailList = new DetailListElement(
    "Detail1", "Detail List", "Detail List"
  )

  /* Document Card: */
  const DocumentCard = new DocumentCardElement(
    "Card1", "Document Card", "Document Card"
  )

  /* Facepile: */
  const Facepile = new FacepileElement(
    "Facepile1", "Facepile", "Facepile"
  )

  /* Grouped List: */
  const GroupedList = new GroupedListElement(
    "Group1", "Grouped List", "Grouped List"
  )

  /* Hover Card: */
  const HoverCard = new HoverCardElement(
    "Hover1", "Hover Card", "Hover Card"
  )

  /* OverflowSet: */
  const OverflowSet = new OverflowSetElement(
    "Over1", "OverflowSet", "OverflowSet"
  )

  /* Coachmark: */
  const Coachmark = new CoachmarkElement(
    "Coahmark1", "Coachmark", "Coachmark"
  )

  /* ProgressIndicator */
  const ProgressIndicator = new ProgressIndicatorElement(
    "ProgressIndicator1", "ProgressIndicator", "ProgressIndicator"
  )

  /* Shimmer: */
  const Shimmer = new ShimmerElement(
    "Shimmer1", "Shimmer", "Shimmer"
  )

  /* Spinner: */
  const Spinner = new SpinnerElement(
    "Spinner1", "Spinner", "Spinner"
  )

  /* Panel: */
  const Panel = new PanelElement(
    "Panel1", "Panel", "Panel"
  )

  /* Scrollable Pane: */
  const ScrollablePane = new ScrollablePaneElement(
    "Panel1", "Scrollable Pane", "Scrollable Pane"
  )


/////////
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

      {/* Toggle: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {Toggle.renderElement()}
      </div>

      {/* CommandBar: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {CommandBar.renderElement()}
      </div>

      {/* ContextualMenu: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {contextualMenu.renderElement()}
      </div>

      {/* NavBar: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {NavBar.renderElement()}
      </div>

      {/* Pivot: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {Pivot.renderElement()}
      </div>
      
      {/* MessageBar: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {MessageBar.renderElement()}
      </div>
      
      {/* TeachingBubble: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {TeachingBubble.renderElement()}
      </div>

      {/* Callout: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {Callout.renderElement()}
      </div>

      {/* DialogBox: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {DialogBox.renderElement()}
      </div>

      {/* Label: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {Label.renderElement()}
      </div>

      {/* Rating: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {Rating.renderElement()}
      </div>

      {/* SpinButton: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {SpinButton.renderElement()}
      </div>

      {/* ColorPicker: */}
      {/* <div style={{ marginTop: "20px", padding:"10px"}}>
        {ColorPicker.renderElement()}
      </div> */}

      {/* PeoplePicker: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {PeoplePicker.renderElement()}
      </div>

      {/* Picker: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {Picker.renderElement()}
      </div>

      {/* SwatchColorPicker: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {SwatchColorPicker.renderElement()}
      </div>

      {/* TimePicker: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {TimePicker.renderElement()}
      </div>

      {/* Activity Item: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {ActivityItem.renderElement()}
      </div>

      {/* Detail List: */}
      {/* <div style={{ marginTop: "20px", padding:"10px"}}>
        {DetailList.renderElement()}
      </div> */}

      {/* Document Card: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {DocumentCard.renderElement()}
      </div>

      {/* Facepile: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {Facepile.renderElement()}
      </div>

      {/* Grouped List: */}
      {/* <div style={{ marginTop: "20px", padding:"10px"}}>
        {GroupedList.renderElement()}
      </div> */}

      {/* Hover Card: */}
      {/* <div style={{ marginTop: "20px", padding:"10px"}}>
        {HoverCard.renderElement()}
      </div> */}

      {/* OverflowSet */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {OverflowSet.renderElement()}
      </div>

      {/* Coachmark */}
      <div style={{ marginTop: "20px", padding:"100px"}}>
        {Coachmark.renderElement()}
      </div>

      {/* ProgressIndicator */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {ProgressIndicator.renderElement()}
      </div>

      {/* Shimmer */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {Shimmer.renderElement()}
      </div>

      {/* Spinner: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {Spinner.renderElement()}
      </div>

      {/* Panel */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {Panel.renderElement()}
      </div>

      {/* Scrollable Pane: */}
      <div style={{ marginTop: "20px", padding:"10px"}}>
        {ScrollablePane.renderElement()}
      </div>

    </>
  );
}
