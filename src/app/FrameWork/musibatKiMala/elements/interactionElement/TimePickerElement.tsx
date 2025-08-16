import {JSX} from 'react';
import {elementCategory} from '../../core/enums/elementCategory';
import {elementType} from '../../core/enums/elementType';
import {interactionElement} from '../../core/base/interactionElement';
import * as React from 'react';
import {
    DatePicker,
    TimePicker,
    TimePickerValidationResultData,
    ITimeRange,
    Text,
    IStackTokens,
    Stack,
    IStackStyles,
    IComboBoxStyles,
    IComboBox,
    PrimaryButton,
    Label,
} from '@fluentui/react';


export class TimePickerElement extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.TimePicker, elementCategory.interaction, id, Name, title);
    }
    

    stackStyles: Partial<IStackStyles> = { root: { width: 500 } };
    stackTokens: IStackTokens = { childrenGap: 20 };

    timePickerStyles: Partial<IComboBoxStyles> = {
        optionsContainerWrapper: {
            height: '500px',
        },
        root: {
            width: '500px',
        },
    };
//
    _stackStyles: Partial<IStackStyles> = { root: { width: 500 } };
    _stackTokens: IStackTokens = { childrenGap: 20 };

    _timePickerStyles: Partial<IComboBoxStyles> = {
        optionsContainerWrapper: {
            height: '500px',
        },
        root: {
            width: '500px',
        },
    };
//
    __stackStyles: Partial<IStackStyles> = { root: { width: 500 } };
    __stackTokens: IStackTokens = { childrenGap: 20 };

    __timePickerStyles: Partial<IComboBoxStyles> = {
        optionsContainerWrapper: {
            height: '500px',
        },
        root: {
            width: '500px',
        },
    };
//
    ___stackStyles: Partial<IStackStyles> = { root: { width: 500 } };
    ___stackTokens: IStackTokens = { childrenGap: 20 };
    ___timePickerStyles: Partial<IComboBoxStyles> = {
        optionsContainerWrapper: {
            height: '500px',
        },
        root: {
            width: '500px',
        },
    };
    ___timeRange: ITimeRange = {
        start: 8,
        end: 17,
    };
//
    ____stackStyles: Partial<IStackStyles> = { root: { width: 500 } };
    ____stackTokens: IStackTokens = { childrenGap: 20 };

    ____snapTimeToUpdatedDateAnchor = (datePickerDate: Date, currentTime: Date) => {
        let snappedTime = new Date(currentTime);

        if (currentTime && !isNaN(currentTime.valueOf())) {
            const startAnchor = new Date(datePickerDate);
            const endAnchor = new Date(startAnchor);
            endAnchor.setDate(startAnchor.getDate() + 1);
            if (currentTime < startAnchor || currentTime > endAnchor) {
                snappedTime = new Date(startAnchor);
                snappedTime.setHours(currentTime.getHours());
                snappedTime.setMinutes(currentTime.getMinutes());
                snappedTime.setSeconds(currentTime.getSeconds());
                snappedTime.setMilliseconds(currentTime.getMilliseconds());
            }
        }
        return snappedTime;
    };
//



//
    renderElement(): JSX.Element {

        const [basicExampleTimeString, setBasicExampleTimeString] = React.useState<string>('');
        const [nonDefaultOptionsExampleTimeString, setNonDefaultOptionsExampleTimeString] = React.useState<string>('');
        const basicDateAnchor = new Date('November 25, 2021 09:00:00');
        const nonDefaultOptionsDateAnchor = new Date('February 27, 2023 08:00:00');

        const onBasicExampleChange = React.useCallback((_ev: React.FormEvent<IComboBox>, basicExampleTime: Date) => {
            setBasicExampleTimeString(basicExampleTime.toString());
        }, []);

        const onNonDefaultOptionsExampleChange = React.useCallback((_: any, nonDefaultOptionsExampleTime: Date) => {
            setNonDefaultOptionsExampleTimeString(nonDefaultOptionsExampleTime?.toString());
        }, []);

        const timeRange: ITimeRange = {
            start: 8,
            end: 14,
        };
//
        const dateAnchor = new Date('February 27, 2023 08:00:00');
        const [time, setTime] = React.useState<Date>(new Date('February 27, 2023 10:00:00'));

        const onControlledExampleChange = React.useCallback((_: any, newTime: Date) => {
            setTime(newTime);
        }, []);
//
        const [customTimeString, setCustomTimeString] = React.useState<string>('');
        const _dateAnchor = new Date('February 27, 2023 08:00:00');
        const onFormatDate = React.useCallback((date: Date) => `Custom prefix + ${date.toLocaleTimeString()}`, []);
        const onValidateUserInput = React.useCallback((userInput: string) => {
            if (!userInput.includes('Custom prefix +')) {
            return 'Your input is missing "Custom prefix +"';
            }
            return '';
        }, []);

        const onChange = React.useCallback((_: any, time: Date) => {
            console.log('Selected time: ', time);
            setCustomTimeString(time.toString());
        }, []);
//
        const __dateAnchor = new Date('February 27, 2023 08:00:00');
        const [__time, __setTime] = React.useState<Date>(new Date('January 1, 2023 08:00:00'));
        const [disableButton, setDisableButton] = React.useState<boolean>(false);

        const __onControlledExampleChange = React.useCallback((_: any, newTime: Date) => {
            __setTime(newTime);
        }, []);

        const onValidationResult = React.useCallback(
            (_: any, timePickerValidationResultData: TimePickerValidationResultData) => {
                if (timePickerValidationResultData.errorMessage !== undefined) {
                    console.log('Validation error message received: ', timePickerValidationResultData.errorMessage);
                    setDisableButton(timePickerValidationResultData.errorMessage.length > 0);
                }
            },
            [],
        );
//
        const currentDate = new Date('2023-02-01 05:00:00');
        const [datePickerDate, setDatePickerDate] = React.useState<Date>(currentDate);
        const [currentTime, setCurrentTime] = React.useState<Date>();

        const onSelectDate = React.useCallback(
            (selectedDate: Date) => {
            setDatePickerDate(selectedDate);
            if (currentTime) {
                const snappedTime = this.____snapTimeToUpdatedDateAnchor(selectedDate, currentTime);
                setCurrentTime(snappedTime);
            }
            },
            [currentTime],
        );

        const onTimePickerChange = React.useCallback((_ev: React.FormEvent<IComboBox>, date: Date) => {
            setCurrentTime(date);
        }, []);



//
        return(
            <>
                {/* 1 */}
                <Stack tokens={this.stackTokens} styles={this.stackStyles}>
                    <TimePicker
                        placeholder="Basic example placeholder"
                        styles={this.timePickerStyles}
                        useHour12
                        allowFreeform
                        autoComplete="on"
                        label="TimePicker basic example"
                        onChange={onBasicExampleChange}
                        dateAnchor={basicDateAnchor}
                    />
                    <Text>{`⚓ Date anchor: ${basicDateAnchor.toString()}`}</Text>
                    <Text>{`⌚ Selected time: ${basicExampleTimeString ? basicExampleTimeString : '<no time selected>'}`}</Text>
                    <TimePicker
                        styles={this.timePickerStyles}
                        showSeconds
                        allowFreeform
                        increments={15}
                        autoComplete="on"
                        label="TimePicker with non default options"
                        placeholder="Non default options placeholder"
                        timeRange={timeRange}
                        dateAnchor={nonDefaultOptionsDateAnchor}
                        onChange={onNonDefaultOptionsExampleChange}
                    />
                    <Text>{`⚓ Date anchor: ${nonDefaultOptionsDateAnchor.toString()}`}</Text>
                    <Text>{`⌚ Selected time: ${
                        nonDefaultOptionsExampleTimeString ? nonDefaultOptionsExampleTimeString : '<no time selected>'
                    }`}</Text>
                </Stack>
                {/* line break */}
                <br></br><br></br>
                {/* 2 */}
                <Stack tokens={this._stackTokens} styles={this._stackStyles}>
                    <TimePicker
                        styles={this._timePickerStyles}
                        showSeconds
                        allowFreeform
                        increments={15}
                        autoComplete="on"
                        label="Controlled TimePicker with non default options"
                        dateAnchor={dateAnchor}
                        value={time}
                        onChange={onControlledExampleChange}
                    />
                    <Text>{`⚓ Date anchor: ${dateAnchor.toString()}`}</Text>
                    <Text>{`⌚ Selected time: ${time ? time.toString() : '<no time selected>'}`}</Text>
                </Stack>
                {/* line break */}
                <br></br><br></br>
                {/* 3 */}
                <Stack tokens={this.__stackTokens} styles={this.__stackStyles}>
                    <TimePicker
                        placeholder="Custom time strings example placeholder"
                        styles={this.__timePickerStyles}
                        onFormatDate={onFormatDate}
                        onValidateUserInput={onValidateUserInput}
                        onChange={onChange}
                        useHour12
                        allowFreeform={false}
                        dateAnchor={_dateAnchor}
                        autoComplete="on"
                        label="TimePicker with custom time strings"
                    />
                    <Text>{`⚓ Date anchor: ${_dateAnchor.toString()}`}</Text>
                    <Text>{`⌚ Selected time: ${customTimeString ? customTimeString : '<no time selected>'}`}</Text>
                </Stack>
                {/* line break */}
                <br></br><br></br>
                {/* 4 */}
                <Stack tokens={this.___stackTokens} styles={this.___stackStyles}>
                    <TimePicker
                        styles={this.___timePickerStyles}
                        allowFreeform
                        useHour12
                        increments={15}
                        autoComplete="on"
                        label="Controlled TimePicker with onValidationResult handling"
                        dateAnchor={__dateAnchor}
                        value={__time}
                        onChange={__onControlledExampleChange}
                        onValidationResult={onValidationResult}
                        timeRange={timeRange}
                    />
                    <Text>{`⚓ Date anchor: ${__dateAnchor.toString()}`}</Text>
                    <Text>{`⌚ Selected time: ${__time ? time.toString() : '<no time selected>'}`}</Text>

                    <Label>
                        To trigger the TimePicker validation error and disable the button, enter a time outside the range of 8AM and 5PM
                        or an invalid-formatted date.
                    </Label>
                    <PrimaryButton text={'Sample submit button'} disabled={disableButton} />
                </Stack>
                {/*  */}
                <Stack tokens={this.____stackTokens} styles={this.____stackStyles}>
                    <Label>{'DatePicker and TimePicker combination'}</Label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridColumnGap: '3px' }}>
                        <DatePicker
                        placeholder="Select a date..."
                        value={datePickerDate}
                        onSelectDate={onSelectDate}
                        ariaLabel="Date picker"
                        />
                        <TimePicker
                        placeholder="Select a time"
                        dateAnchor={datePickerDate}
                        value={currentTime}
                        onChange={onTimePickerChange}
                        ariaLabel="Time picker"
                        />
                    </div>
                    <Text>{`⚓ Date anchor: ${datePickerDate.toString()}`}</Text>
                    <Text>{`⌚ Selected time: ${currentTime ? currentTime.toString() : '<no time selected>'}`}</Text>
                </Stack>
            </>
        );
    }
}