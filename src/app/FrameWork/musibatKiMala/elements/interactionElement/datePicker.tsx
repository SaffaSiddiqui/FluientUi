import {JSX} from 'react';
import { interactionElement } from '../../core/base/interactionElement';
import { elementType } from '../../core/enums/elementType';
import { elementCategory } from '../../core/enums/elementCategory';
import * as React from 'react';
import {
  DatePicker,
  DayOfWeek,
  Dropdown,
  IDropdownOption,
  mergeStyles,
  defaultDatePickerStrings,
  mergeStyleSets,
  IDatePicker,
  DefaultButton,
  addDays,
} from '@fluentui/react';

export class datePicker extends interactionElement{

    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.DatePicker, elementCategory.Input, id,  Name, title);

    }

    days: IDropdownOption[] = [
        { text: 'Sunday', key: DayOfWeek.Sunday },
        { text: 'Monday', key: DayOfWeek.Monday },
        { text: 'Tuesday', key: DayOfWeek.Tuesday },
        { text: 'Wednesday', key: DayOfWeek.Wednesday },
        { text: 'Thursday', key: DayOfWeek.Thursday },
        { text: 'Friday', key: DayOfWeek.Friday },
        { text: 'Saturday', key: DayOfWeek.Saturday },
    ];
    rootClass = mergeStyles({ maxWidth: 300, selectors: { '> *': { marginBottom: 15 } } });
//
    styles = mergeStyleSets({
        // root: { selectors: { '> *': { marginBottom: 15 } } },
        root: { maxWidth: 300, selectors: { '> *': { marginBottom: 15 } } },
        control: { maxWidth: 300, marginBottom: 15 },
        button: { marginRight: 10 },
    });

//
    onFormatDate = (date?: Date): string => {
        return !date ? '' : date.getDate() + '/' + (date.getMonth() + 1) + '/' + (date.getFullYear() % 100);
    };
//
    renderElement(): JSX.Element{
        const [firstDayOfWeek, setFirstDayOfWeek] = React.useState(DayOfWeek.Sunday);

        const onDropdownChange = React.useCallback((event: React.FormEvent<HTMLDivElement>, option: IDropdownOption) => {
            setFirstDayOfWeek(option.key as number);
        }, []);
//
        const [value, setValue] = React.useState<Date | undefined>();
        const datePickerRef = React.useRef<IDatePicker>(null);

        const onClick = React.useCallback((): void => {
            setValue(undefined);
            datePickerRef.current?.focus();
        }, []);
//
        const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(new Date());
        const goPrevious = React.useCallback(() => {
            setSelectedDate(prevSelectedDate => (prevSelectedDate ? addDays(prevSelectedDate, -1) : undefined));
        }, []);
        const goNext = React.useCallback(() => {
            setSelectedDate(prevSelectedDate => (prevSelectedDate ? addDays(prevSelectedDate, 1) : undefined));
        }, []);
//
        const onParseDateFromString = React.useCallback(
            (newValue: string): Date => {
            const previousValue = value || new Date();
            const newValueParts = (newValue || '').trim().split('/');
            const day =
                newValueParts.length > 0 ? Math.max(1, Math.min(31, parseInt(newValueParts[0], 10))) : previousValue.getDate();
            const month =
                newValueParts.length > 1
                ? Math.max(1, Math.min(12, parseInt(newValueParts[1], 10))) - 1
                : previousValue.getMonth();
            let year = newValueParts.length > 2 ? parseInt(newValueParts[2], 10) : previousValue.getFullYear();
            if (year < 100) {
                year += previousValue.getFullYear() - (previousValue.getFullYear() % 100);
            }
            return new Date(year, month, day);
            },
            [value],
        );
//
        return(
            <>
                {/* 1 */}
                <div className={this.rootClass}>
                <DatePicker
                    firstDayOfWeek={firstDayOfWeek}
                    placeholder="Select a date..."
                    ariaLabel="Select a date"
                    // DatePicker uses English strings by default. For localized apps, you must override this prop.
                    strings={defaultDatePickerStrings}
                />
                <Dropdown
                    label="Select the first day of the week"
                    options={this.days}
                    selectedKey={firstDayOfWeek}
                    onChange={onDropdownChange}
                />
                </div>
                {/* 2 */}
                <div className={this.styles.root}>
                    <div>Validation will happen when the DatePicker loses focus.</div>
                    <DatePicker
                        isRequired
                        label="Date required (with label)"
                        placeholder="Select a date..."
                        ariaLabel="Select a date"
                        className={this.styles.control}
                        // DatePicker uses English strings by default. For localized apps, you must override this prop.
                        strings={defaultDatePickerStrings}
                    />
                    <DatePicker
                        isRequired
                        placeholder="Date required with no label..."
                        ariaLabel="Select a date"
                        className={this.styles.control}
                        strings={defaultDatePickerStrings}
                    />
                </div>
                {/* 3 */}
                <div className={this.styles.root}>
                    <div>
                        Clicking the input field will open the DatePicker, and clicking the field again will dismiss the DatePicker and
                        allow text input. When using keyboard navigation (tabbing into the field), text input is allowed by default, and
                        pressing Enter will open the DatePicker.
                    </div>
                    <DatePicker
                        componentRef={datePickerRef}
                        label="Start date"
                        allowTextInput
                        ariaLabel="Select a date"
                        value={value}
                        onSelectDate={setValue as (date: Date | null | undefined) => void}
                        className={this.styles.control}
                        // DatePicker uses English strings by default. For localized apps, you must override this prop.
                        strings={defaultDatePickerStrings}
                    />
                    <DefaultButton aria-label="Clear the date input" onClick={onClick} text="Clear" />
                </div>
                {/* 4 */}
                <div className={this.styles.root}>
                    <div>
                        Applications can customize how dates are formatted and parsed. Formatted dates can be ambiguous, so the control
                        will avoid parsing the formatted strings of dates selected using the UI when text input is allowed. In this
                        example, we are formatting and parsing dates as dd/MM/yy.
                    </div>
                    <DatePicker
                        componentRef={datePickerRef}
                        label="Start date"
                        allowTextInput
                        ariaLabel="Select a date. Input format is day slash month slash year."
                        value={value}
                        onSelectDate={setValue as (date?: Date) => void}
                        formatDate={this.onFormatDate}
                        parseDateFromString={onParseDateFromString}
                        className={this.styles.control}
                        // DatePicker uses English strings by default. For localized apps, you must override this prop.
                        strings={defaultDatePickerStrings}
                    />
                    <DefaultButton aria-label="Clear the date input" onClick={onClick} text="Clear" />
                    <div>Selected date: {(value || '').toString()}</div>
                </div>
                {/* 5 */}
                <div className={this.styles.root}>
                    <DatePicker
                        value={selectedDate}
                        onSelectDate={setSelectedDate as (date: Date | null | undefined) => void}
                        placeholder="Select a date..."
                        ariaLabel="Select a date"
                        // DatePicker uses English strings by default. For localized apps, you must override this prop.
                        strings={defaultDatePickerStrings}
                    />
                    <div>
                        <DefaultButton className={this.styles.button} onClick={goPrevious} text="Previous" />
                        <DefaultButton className={this.styles.button} onClick={goNext} text="Next" />
                    </div>
                </div>
            </>
        );
    }
}