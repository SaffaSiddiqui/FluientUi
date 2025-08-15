import {JSX} from 'react';
import {elementCategory} from '../../core/enums/elementCategory';
import {elementType} from '../../core/enums/elementType';
import {interactionElement} from '../../core/base/interactionElement';
import * as React from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { Checkbox } from '@fluentui/react/lib/Checkbox';
import { IPersonaProps, Persona } from '@fluentui/react/lib/Persona';
import { assign } from '@fluentui/react/lib/Utilities';
import { DefaultButton, IButtonStyles } from '@fluentui/react/lib/Button';
import {
    IBasePickerSuggestionsProps,
    IPeoplePickerItemSelectedProps,
    NormalPeoplePicker,
    PeoplePickerItem,
    ValidationState,
    CompactPeoplePicker,
} from '@fluentui/react/lib/Pickers';
import { people, mru } from '@fluentui/example-data';


export class peoplePicker extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.PeoplePicker, elementCategory.interaction, id, Name, title);
    }

    suggestionProps: IBasePickerSuggestionsProps = {
        suggestionsHeaderText: 'Suggested People',
        mostRecentlyUsedHeaderText: 'Suggested Contacts',
        noResultsFoundText: 'No results found',
        loadingText: 'Loading',
        showRemoveButtons: true,
        suggestionsAvailableAlertText: 'People Picker Suggestions available',
        suggestionsContainerAriaLabel: 'Suggested contacts',
    };

    checkboxStyles = {
        root: {
            marginTop: 10,
        },
    };

    doesTextStartWith(text: string, filterText: string): boolean {
    return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
    }

    removeDuplicates(personas: IPersonaProps[], possibleDupes: IPersonaProps[]) {
    return personas.filter(persona => !this.listContainsPersona(persona, possibleDupes));
    }

    listContainsPersona(persona: IPersonaProps, personas: IPersonaProps[]) {
    if (!personas || !personas.length || personas.length === 0) {
        return false;
    }
    return personas.filter(item => item.text === persona.text).length > 0;
    }

    convertResultsToPromise(results: IPersonaProps[]): Promise<IPersonaProps[]> {
    return new Promise<IPersonaProps[]>((resolve, reject) => setTimeout(() => resolve(results), 2000));
    }

    getTextFromItem(persona: IPersonaProps): string {
    return persona.text as string;
    }

    validateInput(input: string): ValidationState {
    if (input.indexOf('@') !== -1) {
        return ValidationState.valid;
    } else if (input.length > 1) {
        return ValidationState.warning;
    } else {
        return ValidationState.invalid;
    }
    }

    /**
     * Takes in the picker input and modifies it in whichever way
     * the caller wants, i.e. parsing entries copied from Outlook (sample
     * input: "Aaron Reid <aaron>").
     *
     * @param input The text entered into the picker.
     */
    onInputChange(input: string): string {
    const outlookRegEx = /<.*>/g;
    const emailAddress = outlookRegEx.exec(input);

    if (emailAddress && emailAddress[0]) {
        return emailAddress[0].substring(1, emailAddress[0].length - 1);
    }

    return input;
    }
//
    _suggestionProps: IBasePickerSuggestionsProps = {
        suggestionsHeaderText: 'Suggested People',
        mostRecentlyUsedHeaderText: 'Suggested Contacts',
        noResultsFoundText: 'No results found',
        loadingText: 'Loading',
        showRemoveButtons: true,
        suggestionsAvailableAlertText: 'People Picker Suggestions available',
        suggestionsContainerAriaLabel: 'Suggested contacts',
    };
    _checkboxStyles = {
        root: {
            marginTop: 10,
        },
    };
//
    _doesTextStartWith(text: string, filterText: string): boolean {
    return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
    }

    _removeDuplicates(personas: IPersonaProps[], possibleDupes: IPersonaProps[]) {
    return personas.filter(persona => !this._listContainsPersona(persona, possibleDupes));
    }

    _listContainsPersona(persona: IPersonaProps, personas: IPersonaProps[]) {
    if (!personas || !personas.length || personas.length === 0) {
        return false;
    }
    return personas.filter(item => item.text === persona.text).length > 0;
    }

    _convertResultsToPromise(results: IPersonaProps[]): Promise<IPersonaProps[]> {
    return new Promise<IPersonaProps[]>((resolve, reject) => setTimeout(() => resolve(results), 2000));
    }

    _getTextFromItem(persona: IPersonaProps): string {
    return persona.text as string;
    }

    _validateInput(input: string): ValidationState {
    if (input.indexOf('@') !== -1) {
        return ValidationState.valid;
    } else if (input.length > 1) {
        return ValidationState.warning;
    } else {
        return ValidationState.invalid;
    }
    }
//
    __suggestionProps: IBasePickerSuggestionsProps = {
        suggestionsHeaderText: 'Suggested People',
        mostRecentlyUsedHeaderText: 'Suggested Contacts',
        noResultsFoundText: 'No results found',
        loadingText: 'Loading',
        showRemoveButtons: true,
        suggestionsAvailableAlertText: 'People Picker Suggestions available',
        suggestionsContainerAriaLabel: 'Suggested contacts',
    };

    __checkboxStyles = {
        root: {
            marginTop: 10,
        },
    };

    __doesTextStartWith(text: string, filterText: string): boolean {
        return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
    }

    __removeDuplicates(personas: IPersonaProps[], possibleDupes: IPersonaProps[]) {
        return personas.filter(persona => !this.__listContainsPersona(persona, possibleDupes));
    }

    __listContainsPersona(persona: IPersonaProps, personas: IPersonaProps[]) {
        if (!personas || !personas.length || personas.length === 0) {
            return false;
        }
        return personas.filter(item => item.text === persona.text).length > 0;
    }

    __convertResultsToPromise(results: IPersonaProps[]): Promise<IPersonaProps[]> {
        return new Promise<IPersonaProps[]>((resolve, reject) => setTimeout(() => resolve(results), 2000));
    }

    __getTextFromItem(persona: IPersonaProps): string {
        return persona.text as string;
    }

    __validateInput(input: string): ValidationState {
        if (input.indexOf('@') !== -1) {
            return ValidationState.valid;
        } else if (input.length > 1) {
            return ValidationState.warning;
        } else {
            return ValidationState.invalid;
        }
    }
//
    ___suggestionProps: IBasePickerSuggestionsProps = {
        suggestionsHeaderText: 'Suggested People',
        mostRecentlyUsedHeaderText: 'Suggested Contacts',
        noResultsFoundText: 'No results found',
        loadingText: 'Loading',
        showRemoveButtons: true,
        suggestionsAvailableAlertText: 'People Picker Suggestions available',
        suggestionsContainerAriaLabel: 'Suggested contacts',
    };

    ___limitedSearchAdditionalProps: IBasePickerSuggestionsProps = {
        searchForMoreText: 'Load all Results',
        resultsMaximumNumber: 10,
        searchingText: 'Searching...',
    };

    ___limitedSearchSuggestionProps: IBasePickerSuggestionsProps = assign(this.___limitedSearchAdditionalProps, this.___suggestionProps);

    ___checkboxStyles = {
        root: {
            marginTop: 10,
        },
    };

    ___doesTextStartWith(text: string, filterText: string): boolean {
        return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
    }

    ___removeDuplicates(personas: IPersonaProps[], possibleDupes: IPersonaProps[]) {
        return personas.filter(persona => !this.___listContainsPersona(persona, possibleDupes));
    }

    ___listContainsPersona(persona: IPersonaProps, personas: IPersonaProps[]) {
        if (!personas || !personas.length || personas.length === 0) {
            return false;
        }
        return personas.filter(item => item.text === persona.text).length > 0;
    }

    ___convertResultsToPromise(results: IPersonaProps[]): Promise<IPersonaProps[]> {
        return new Promise<IPersonaProps[]>((resolve, reject) => setTimeout(() => resolve(results), 2000));
    }

    ___getTextFromItem(persona: IPersonaProps): string {
        return persona.text as string;
    }

    ___renderFooterText(): JSX.Element {
        return <div>No additional results</div>;
    }
//
    ____suggestionProps: IBasePickerSuggestionsProps = {
        suggestionsHeaderText: 'Suggested People',
        mostRecentlyUsedHeaderText: 'Suggested Contacts',
        noResultsFoundText: 'No results found',
        loadingText: 'Loading',
        showRemoveButtons: true,
        suggestionsAvailableAlertText: 'People Picker Suggestions available',
        suggestionsContainerAriaLabel: 'Suggested contacts',
    };

    ____checkboxStyles = {
        root: {
            marginTop: 10,
        },
    };

    ____doesTextStartWith(text: string, filterText: string): boolean {
        return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
    }

    ____removeDuplicates(personas: IPersonaProps[], possibleDupes: IPersonaProps[]) {
        return personas.filter(persona => !this.____listContainsPersona(persona, possibleDupes));
    }

    ____listContainsPersona(persona: IPersonaProps, personas: IPersonaProps[]) {
        if (!personas || !personas.length || personas.length === 0) {
            return false;
        }
        return (
            personas.filter(item => item.text !== undefined && persona.text !== undefined && item.text.startsWith(persona.text))
            .length > 0
        );
    }

    ____convertResultsToPromise(results: IPersonaProps[]): Promise<IPersonaProps[]> {
        return new Promise<IPersonaProps[]>((resolve, reject) => setTimeout(() => resolve(results), 2000));
    }

    ____getTextFromItem(persona: IPersonaProps): string {
        return persona.text as string;
    }

    ____validateInput(input: string): ValidationState {
        if (input.indexOf('@') !== -1) {
            return ValidationState.valid;
        } else if (input.length > 1) {
            return ValidationState.warning;
        } else {
            return ValidationState.invalid;
        }
    }

    ____onItemSelected(item: IPersonaProps): Promise<IPersonaProps> {
        const processedItem = { ...item };
        processedItem.text = `${item.text} (selected)`;
        return new Promise<IPersonaProps>((resolve, reject) => setTimeout(() => resolve(processedItem), 250));
    }
//
    _____suggestionProps: IBasePickerSuggestionsProps = {
    suggestionsHeaderText: 'Suggested People',
    mostRecentlyUsedHeaderText: 'Suggested Contacts',
    noResultsFoundText: 'No results found',
    loadingText: 'Loading',
    showRemoveButtons: true,
    suggestionsAvailableAlertText: 'People Picker Suggestions available',
    suggestionsContainerAriaLabel: 'Suggested contacts',
    };

    _____checkboxStyles = {
        root: {
            marginTop: 10,
        },
    };

    _____defaultButtonStyles: Partial<IButtonStyles> = { root: { height: 'auto' } };

    _____doesTextStartWith(text: string, filterText: string): boolean {
        return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
    }

    _____removeDuplicates(personas: IPersonaProps[], possibleDupes: IPersonaProps[]) {
        return personas.filter(persona => !this._____listContainsPersona(persona, possibleDupes));
    }

    _____listContainsPersona(persona: IPersonaProps, personas: IPersonaProps[]) {
        if (!personas || !personas.length || personas.length === 0) {
            return false;
        }
        return personas.filter(item => item.text === persona.text).length > 0;
    }

    _____convertResultsToPromise(results: IPersonaProps[]): Promise<IPersonaProps[]> {
        return new Promise<IPersonaProps[]>((resolve, reject) => setTimeout(() => resolve(results), 2000));
    }

    _____getTextFromItem(persona: IPersonaProps): string {
        return persona.text as string;
    }
//







//
    renderElement(): JSX.Element {

        const [delayResults, setDelayResults] = React.useState(false);
        const [isPickerDisabled, setIsPickerDisabled] = React.useState(false);
        const [pickerLabel, setPickerLabel] = React.useState<string | undefined>('Choose People');
        const [showPickerLabel, setShowPickerLabel] = React.useState(false);
        const [isPickerRequired, setIsPickerRequired] = React.useState(false);
        const [showSecondaryText, setShowSecondaryText] = React.useState(false);
        const [mostRecentlyUsed, setMostRecentlyUsed] = React.useState<IPersonaProps[]>(mru);
        const [peopleList, setPeopleList] = React.useState<IPersonaProps[]>(people);

        const picker = React.useRef(null);

        const onFilterChanged = (
            filterText: string,
            currentPersonas: IPersonaProps[],
            limitResults?: number,
        ): IPersonaProps[] | Promise<IPersonaProps[]> => {
            if (filterText) {
            let filteredPersonas: IPersonaProps[] = filterPersonasByText(filterText);

            filteredPersonas = this.removeDuplicates(filteredPersonas, currentPersonas);
            filteredPersonas = limitResults ? filteredPersonas.slice(0, limitResults) : filteredPersonas;
            return filterPromise(filteredPersonas);
            } else {
            return [];
            }
        };

        const filterPersonasByText = (filterText: string): IPersonaProps[] => {
            return peopleList.filter(item => this.doesTextStartWith(item.text as string, filterText));
        };

        const filterPromise = (personasToReturn: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> => {
            if (delayResults) {
            return this.convertResultsToPromise(personasToReturn);
            } else {
            return personasToReturn;
            }
        };

        const returnMostRecentlyUsed = (currentPersonas: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> => {
            return filterPromise(this.removeDuplicates(mostRecentlyUsed, currentPersonas));
        };

        const onRemoveSuggestion = (item: IPersonaProps): void => {
            const indexPeopleList: number = peopleList.indexOf(item);
            const indexMostRecentlyUsed: number = mostRecentlyUsed.indexOf(item);

            if (indexPeopleList >= 0) {
            const newPeople: IPersonaProps[] = peopleList
                .slice(0, indexPeopleList)
                .concat(peopleList.slice(indexPeopleList + 1));
            setPeopleList(newPeople);
            }

            if (indexMostRecentlyUsed >= 0) {
            const newSuggestedPeople: IPersonaProps[] = mostRecentlyUsed
                .slice(0, indexMostRecentlyUsed)
                .concat(mostRecentlyUsed.slice(indexMostRecentlyUsed + 1));
            setMostRecentlyUsed(newSuggestedPeople);
            }
        };

        const renderItemWithSecondaryText = (props: IPeoplePickerItemSelectedProps) => {
            const newProps = {
            ...props,
            item: {
                ...props.item,
                ValidationState: ValidationState.valid,
                showSecondaryText: true,
            },
            };

            return <PeoplePickerItem {...newProps} />;
        };

        const onDisabledButtonClick = (): void => {
            setIsPickerDisabled(!isPickerDisabled);
        };

        const onShowLabelButtonClick = (): void => {
            setShowPickerLabel(!showPickerLabel);
        };

        const onPickerLabelChange = (_: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string): void => {
            setPickerLabel(newValue ?? '');
        };

        const onRequiredButtonClick = (): void => {
            setIsPickerRequired(!isPickerRequired);
        };

        const onToggleDelayResultsChange = (): void => {
            setDelayResults(!delayResults);
        };

        const onToggleShowSecondaryText = (): void => {
            setShowSecondaryText(!showSecondaryText);
        };

        const onGetErrorMessage = React.useCallback(
            (items: IPersonaProps[]): string | JSX.Element | PromiseLike<string | JSX.Element> | undefined => {
            return isPickerRequired && (items || []).length === 0 ? 'Please fill out this field.' : undefined;
            },
            [isPickerRequired],
        );
//
        const [_delayResults, _setDelayResults] = React.useState(false);
        const [_isPickerDisabled, _setIsPickerDisabled] = React.useState(false);
        const [_mostRecentlyUsed, _setMostRecentlyUsed] = React.useState<IPersonaProps[]>(mru);
        const [_peopleList, _setPeopleList] = React.useState<IPersonaProps[]>(people);

        const _picker = React.useRef(null);

        const _onFilterChanged = (
            filterText: string,
            currentPersonas: IPersonaProps[],
            limitResults?: number,
        ): IPersonaProps[] | Promise<IPersonaProps[]> => {
            if (filterText) {
            let filteredPersonas: IPersonaProps[] = _filterPersonasByText(filterText);

            filteredPersonas = this._removeDuplicates(filteredPersonas, currentPersonas);
            filteredPersonas = limitResults ? filteredPersonas.slice(0, limitResults) : filteredPersonas;
            return _filterPromise(filteredPersonas);
            } else {
            return [];
            }
        };

        const _filterPersonasByText = (filterText: string): IPersonaProps[] => {
            return _peopleList.filter(item => this._doesTextStartWith(item.text as string, filterText));
        };

        const _filterPromise = (personasToReturn: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> => {
            if (_delayResults) {
            return this._convertResultsToPromise(personasToReturn);
            } else {
            return personasToReturn;
            }
        };

        const _returnMostRecentlyUsed = (currentPersonas: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> => {
            return _filterPromise(this._removeDuplicates(_mostRecentlyUsed, currentPersonas));
        };

        const _onRemoveSuggestion = (item: IPersonaProps): void => {
            const indexPeopleList: number = _peopleList.indexOf(item);
            const indexMostRecentlyUsed: number = _mostRecentlyUsed.indexOf(item);

            if (indexPeopleList >= 0) {
            const newPeople: IPersonaProps[] = peopleList
                .slice(0, indexPeopleList)
                .concat(_peopleList.slice(indexPeopleList + 1));
            _setPeopleList(newPeople);
            }

            if (indexMostRecentlyUsed >= 0) {
            const newSuggestedPeople: IPersonaProps[] = _mostRecentlyUsed
                .slice(0, indexMostRecentlyUsed)
                .concat(_mostRecentlyUsed.slice(indexMostRecentlyUsed + 1));
            _setMostRecentlyUsed(newSuggestedPeople);
            }
        };

        const _onDisabledButtonClick = (): void => {
            _setIsPickerDisabled(!_isPickerDisabled);
        };

        const _onToggleDelayResultsChange = (): void => {
            _setDelayResults(!_delayResults);
        };
//
        const [__delayResults, __setDelayResults] = React.useState(false);
        const [__isPickerDisabled, __setIsPickerDisabled] = React.useState(false);
        const [__mostRecentlyUsed, __setMostRecentlyUsed] = React.useState<IPersonaProps[]>(mru);
        const [__peopleList, __setPeopleList] = React.useState<IPersonaProps[]>(people);

        const __picker = React.useRef(null);

        const __onFilterChanged = (
            filterText: string,
            currentPersonas: IPersonaProps[],
            limitResults?: number,
        ): IPersonaProps[] | Promise<IPersonaProps[]> => {
            if (filterText) {
            let filteredPersonas: IPersonaProps[] = filterPersonasByText(filterText);

            filteredPersonas = this.__removeDuplicates(filteredPersonas, currentPersonas);
            filteredPersonas = limitResults ? filteredPersonas.slice(0, limitResults) : filteredPersonas;
            return filterPromise(filteredPersonas);
            } else {
            return [];
            }
        };

        const __filterPersonasByText = (filterText: string): IPersonaProps[] => {
            return __peopleList.filter(item => this.__doesTextStartWith(item.text as string, filterText));
        };

        const __filterPromise = (personasToReturn: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> => {
            if (__delayResults) {
            return this.__convertResultsToPromise(personasToReturn);
            } else {
            return personasToReturn;
            }
        };

        const __returnMostRecentlyUsed = (currentPersonas: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> => {
            return __filterPromise(this.__removeDuplicates(__mostRecentlyUsed, currentPersonas));
        };

        const __onRemoveSuggestion = (item: IPersonaProps): void => {
            const indexPeopleList: number = __peopleList.indexOf(item);
            const indexMostRecentlyUsed: number = __mostRecentlyUsed.indexOf(item);

            if (indexPeopleList >= 0) {
            const newPeople: IPersonaProps[] = __peopleList
                .slice(0, indexPeopleList)
                .concat(__peopleList.slice(indexPeopleList + 1));
            __setPeopleList(newPeople);
            }

            if (indexMostRecentlyUsed >= 0) {
            const newSuggestedPeople: IPersonaProps[] = __mostRecentlyUsed
                .slice(0, indexMostRecentlyUsed)
                .concat(__mostRecentlyUsed.slice(indexMostRecentlyUsed + 1));
            __setMostRecentlyUsed(newSuggestedPeople);
            }
        };

        const __onDisabledButtonClick = (): void => {
            __setIsPickerDisabled(!__isPickerDisabled);
        };

        const __onToggleDelayResultsChange = (): void => {
            __setDelayResults(!__delayResults);
        };
//
        const [___delayResults, ___setDelayResults] = React.useState(false);
        const [___isPickerDisabled, ___setIsPickerDisabled] = React.useState(false);
        const [___mostRecentlyUsed, ___setMostRecentlyUsed] = React.useState<IPersonaProps[]>(mru);
        const [___peopleList, ___setPeopleList] = React.useState<IPersonaProps[]>(people);

        const ___picker = React.useRef(null);

        const ___onFilterChangedWithLimit = (
            filterText: string,
            currentPersonas: IPersonaProps[],
        ): IPersonaProps[] | Promise<IPersonaProps[]> => {
            return ___onFilterChanged(filterText, currentPersonas, 3);
        };

        const ___onFilterChanged = (
            filterText: string,
            currentPersonas: IPersonaProps[],
            limitResults?: number,
        ): IPersonaProps[] | Promise<IPersonaProps[]> => {
            if (filterText) {
            let filteredPersonas: IPersonaProps[] = ___filterPersonasByText(filterText);

            filteredPersonas = this.___removeDuplicates(filteredPersonas, currentPersonas);
            filteredPersonas = limitResults ? filteredPersonas.slice(0, limitResults) : filteredPersonas;
            return ___filterPromise(filteredPersonas);
            } else {
            return [];
            }
        };

        const ___filterPersonasByText = (filterText: string): IPersonaProps[] => {
            return ___peopleList.filter(item => this.___doesTextStartWith(item.text as string, filterText));
        };

        const ___filterPromise = (personasToReturn: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> => {
            if (___delayResults) {
            return this.___convertResultsToPromise(personasToReturn);
            } else {
            return personasToReturn;
            }
        };

        const ___returnMostRecentlyUsedWithLimit = (
            currentPersonas: IPersonaProps[],
        ): IPersonaProps[] | Promise<IPersonaProps[]> => {
            return ___filterPromise(this.___removeDuplicates(___mostRecentlyUsed, currentPersonas).slice(0, 3));
        };

        const ___onRemoveSuggestion = (item: IPersonaProps): void => {
            const indexPeopleList: number = ___peopleList.indexOf(item);
            const indexMostRecentlyUsed: number = ___mostRecentlyUsed.indexOf(item);

            if (indexPeopleList >= 0) {
            const newPeople: IPersonaProps[] = ___peopleList
                .slice(0, indexPeopleList)
                .concat(___peopleList.slice(indexPeopleList + 1));
            ___setPeopleList(newPeople);
            }

            if (indexMostRecentlyUsed >= 0) {
            const newSuggestedPeople: IPersonaProps[] = ___mostRecentlyUsed
                .slice(0, indexMostRecentlyUsed)
                .concat(___mostRecentlyUsed.slice(indexMostRecentlyUsed + 1));
            ___setMostRecentlyUsed(newSuggestedPeople);
            }
        };

        this.___limitedSearchSuggestionProps.resultsFooter = this.___renderFooterText;

        const ___onDisabledButtonClick = (): void => {
            ___setIsPickerDisabled(!___isPickerDisabled);
        };

        const ___onToggleDelayResultsChange = (): void => {
            ___setDelayResults(!___delayResults);
        };
//
        const [____delayResults, ____setDelayResults] = React.useState(false);
        const [____isPickerDisabled, ____setIsPickerDisabled] = React.useState(false);
        const [____mostRecentlyUsed, ____setMostRecentlyUsed] = React.useState<IPersonaProps[]>(mru);
        const [____peopleList, ____setPeopleList] = React.useState<IPersonaProps[]>(people);

        const ____picker = React.useRef(null);

        const ____onFilterChanged = (
            filterText: string,
            currentPersonas: IPersonaProps[],
            limitResults?: number,
        ): IPersonaProps[] | Promise<IPersonaProps[]> => {
            if (filterText) {
            let filteredPersonas: IPersonaProps[] = ____filterPersonasByText(filterText);

            filteredPersonas = this.____removeDuplicates(filteredPersonas, currentPersonas);
            filteredPersonas = limitResults ? filteredPersonas.slice(0, limitResults) : filteredPersonas;
            return filterPromise(filteredPersonas);
            } else {
            return [];
            }
        };

        const ____filterPersonasByText = (filterText: string): IPersonaProps[] => {
            return ____peopleList.filter(item => this.____doesTextStartWith(item.text as string, filterText));
        };

        const ____filterPromise = (personasToReturn: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> => {
            if (____delayResults) {
            return this.____convertResultsToPromise(personasToReturn);
            } else {
            return personasToReturn;
            }
        };

        const ____returnMostRecentlyUsed = (currentPersonas: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> => {
            return ____filterPromise(this.____removeDuplicates(____mostRecentlyUsed, currentPersonas));
        };

        const ____onRemoveSuggestion = (item: IPersonaProps): void => {
            const indexPeopleList: number = ____peopleList.indexOf(item);
            const indexMostRecentlyUsed: number = ____mostRecentlyUsed.indexOf(item);

            if (indexPeopleList >= 0) {
            const newPeople: IPersonaProps[] = ____peopleList
                .slice(0, indexPeopleList)
                .concat(____peopleList.slice(indexPeopleList + 1));
            ____setPeopleList(newPeople);
            }

            if (indexMostRecentlyUsed >= 0) {
            const newSuggestedPeople: IPersonaProps[] = ____mostRecentlyUsed
                .slice(0, indexMostRecentlyUsed)
                .concat(____mostRecentlyUsed.slice(indexMostRecentlyUsed + 1));
            ____setMostRecentlyUsed(newSuggestedPeople);
            }
        };

        const ____onDisabledButtonClick = (): void => {
            ____setIsPickerDisabled(!____isPickerDisabled);
        };

        const ____onToggleDelayResultsChange = (): void => {
            ____setDelayResults(!____delayResults);
        };
//
        const [_____currentSelectedItems, _____setCurrentSelectedItems] = React.useState<IPersonaProps[]>([]);
        const [_____delayResults, _____setDelayResults] = React.useState(false);
        const [_____isPickerDisabled, _____setIsPickerDisabled] = React.useState(false);
        const [_____peopleList] = React.useState<IPersonaProps[]>(people);

        const _____picker = React.useRef(null);

        const _____onFilterChanged = (
            filterText: string,
            currentPersonas: IPersonaProps[],
            limitResults?: number,
        ): IPersonaProps[] | Promise<IPersonaProps[]> => {
            if (filterText) {
            let filteredPersonas: IPersonaProps[] = _____filterPersonasByText(filterText);

            filteredPersonas = this._____removeDuplicates(filteredPersonas, currentPersonas);
            filteredPersonas = limitResults ? filteredPersonas.slice(0, limitResults) : filteredPersonas;
            return _____filterPromise(filteredPersonas);
            } else {
            return [];
            }
        };

        const _____filterPersonasByText = (filterText: string): IPersonaProps[] => {
            return _____peopleList.filter(item => this._____doesTextStartWith(item.text as string, filterText));
        };

        const _____filterPromise = (personasToReturn: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> => {
            if (_____delayResults) {
            return this._____convertResultsToPromise(personasToReturn);
            } else {
            return personasToReturn;
            }
        };

        const _____onItemsChange = (items: any[]): void => {
            _____setCurrentSelectedItems(items);
        };

        const controlledItems = [];
        for (let i = 0; i < 5; i++) {
            const item = _____peopleList[i];
            if (_____currentSelectedItems!.indexOf(item) === -1) {
            controlledItems.push(_____peopleList[i]);
            }
        }

        const _____onDisabledButtonClick = (): void => {
            _____setIsPickerDisabled(!_____isPickerDisabled);
        };

        const _____onToggleDelayResultsChange = (): void => {
            _____setDelayResults(!_____delayResults);
        };






//
        return(
            <>
                {/* 1 */}
                <div>
                    <NormalPeoplePicker
                        label={showPickerLabel ? pickerLabel : undefined}
                        // eslint-disable-next-line react/jsx-no-bind
                        onResolveSuggestions={onFilterChanged}
                        // eslint-disable-next-line react/jsx-no-bind, @typescript-eslint/no-deprecated
                        onEmptyInputFocus={returnMostRecentlyUsed}
                        getTextFromItem={this.getTextFromItem}
                        pickerSuggestionsProps={this.suggestionProps}
                        className={'ms-PeoplePicker'}
                        key={'normal'}
                        // eslint-disable-next-line react/jsx-no-bind
                        onRemoveSuggestion={onRemoveSuggestion}
                        onRenderItem={showSecondaryText ? renderItemWithSecondaryText : undefined}
                        onValidateInput={this.validateInput}
                        selectionAriaLabel={'Selected contacts'}
                        removeButtonAriaLabel={'Remove'}
                        inputProps={{
                        onBlur: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onBlur called'),
                        onFocus: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onFocus called'),
                        'aria-label': 'People Picker',
                        }}
                        componentRef={picker}
                        onInputChange={this.onInputChange}
                        resolveDelay={300}
                        disabled={isPickerDisabled}
                        required={isPickerRequired}
                        onGetErrorMessage={onGetErrorMessage}
                    />
                    <Checkbox
                        label="Disable People Picker"
                        checked={isPickerDisabled}
                        // eslint-disable-next-line react/jsx-no-bind
                        onChange={onDisabledButtonClick}
                        styles={this.checkboxStyles}
                    />
                    <Checkbox
                        label="Delay Suggestion Results"
                        defaultChecked={delayResults}
                        // eslint-disable-next-line react/jsx-no-bind
                        onChange={onToggleDelayResultsChange}
                        styles={this.checkboxStyles}
                    />
                    <Checkbox
                        label="Show Secondary Text"
                        defaultChecked={showSecondaryText}
                        // eslint-disable-next-line react/jsx-no-bind
                        onChange={onToggleShowSecondaryText}
                        styles={this.checkboxStyles}
                    />
                    <Checkbox
                        label="Required People Picker"
                        checked={isPickerRequired}
                        // eslint-disable-next-line react/jsx-no-bind
                        onChange={onRequiredButtonClick}
                        styles={this.checkboxStyles}
                    />
                    <Checkbox
                        label="Show Label"
                        checked={showPickerLabel}
                        // eslint-disable-next-line react/jsx-no-bind
                        onChange={onShowLabelButtonClick}
                        styles={this.checkboxStyles}
                    />
                    {showPickerLabel && (
                        <TextField
                        label={'People Picker Label'}
                        value={pickerLabel}
                        // eslint-disable-next-line react/jsx-no-bind
                        onChange={onPickerLabelChange}
                        />
                    )}
                </div>
                {/* line break */}
                <br></br><br></br>
                {/* 2 */}
                <div>
                    <CompactPeoplePicker
                        // eslint-disable-next-line react/jsx-no-bind
                        onResolveSuggestions={_onFilterChanged}
                        // eslint-disable-next-line react/jsx-no-bind, @typescript-eslint/no-deprecated
                        onEmptyInputFocus={_returnMostRecentlyUsed}
                        getTextFromItem={this._getTextFromItem}
                        pickerSuggestionsProps={this._suggestionProps}
                        selectionAriaLabel={'Selected contacts'}
                        removeButtonAriaLabel={'Remove'}
                        className={'ms-PeoplePicker'}
                        // eslint-disable-next-line react/jsx-no-bind
                        onRemoveSuggestion={_onRemoveSuggestion}
                        onValidateInput={this._validateInput}
                        inputProps={{
                        onBlur: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onBlur called'),
                        onFocus: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onFocus called'),
                        'aria-label': 'People Picker',
                        }}
                        componentRef={_picker}
                        resolveDelay={300}
                        disabled={_isPickerDisabled}
                    />
                    <Checkbox
                        label="Disable People Picker"
                        checked={_isPickerDisabled}
                        // eslint-disable-next-line react/jsx-no-bind
                        onChange={_onDisabledButtonClick}
                        styles={this._checkboxStyles}
                    />
                    <Checkbox
                        label="Delay Suggestion Results"
                        defaultChecked={_delayResults}
                        // eslint-disable-next-line react/jsx-no-bind
                        onChange={_onToggleDelayResultsChange}
                        styles={this._checkboxStyles}
                    />
                </div>
                {/* line break */}
                <br></br><br></br>
                {/* 3 */}
                <div>
                    <CompactPeoplePicker
                        // eslint-disable-next-line react/jsx-no-bind
                        onResolveSuggestions={__onFilterChanged}
                        // eslint-disable-next-line react/jsx-no-bind, @typescript-eslint/no-deprecated
                        onEmptyInputFocus={__returnMostRecentlyUsed}
                        getTextFromItem={this.__getTextFromItem}
                        className={'ms-PeoplePicker'}
                        defaultSelectedItems={__peopleList.slice(0, 3)}
                        key={'list'}
                        selectionAriaLabel={'Selected contacts'}
                        removeButtonAriaLabel={'Remove'}
                        pickerSuggestionsProps={this.__suggestionProps}
                        // eslint-disable-next-line react/jsx-no-bind
                        onRemoveSuggestion={__onRemoveSuggestion}
                        onValidateInput={this.__validateInput}
                        inputProps={{
                        onBlur: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onBlur called'),
                        onFocus: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onFocus called'),
                        'aria-label': 'People Picker',
                        }}
                        componentRef={__picker}
                        resolveDelay={300}
                        disabled={__isPickerDisabled}
                    />
                    <Checkbox
                        label="Disable People Picker"
                        checked={__isPickerDisabled}
                        // eslint-disable-next-line react/jsx-no-bind
                        onChange={__onDisabledButtonClick}
                        styles={this.__checkboxStyles}
                    />
                    <Checkbox
                        label="Delay Suggestion Results"
                        defaultChecked={__delayResults}
                        // eslint-disable-next-line react/jsx-no-bind
                        onChange={__onToggleDelayResultsChange}
                        styles={this.__checkboxStyles}
                    />
                </div>
                {/* line break */}
                <br></br><br></br>
                {/* 4 */}
                <div>
                    <CompactPeoplePicker
                        /* eslint-disable react/jsx-no-bind */
                        onResolveSuggestions={___onFilterChangedWithLimit}
                        // eslint-disable-next-line @typescript-eslint/no-deprecated
                        onEmptyInputFocus={___returnMostRecentlyUsedWithLimit}
                        getTextFromItem={this.___getTextFromItem}
                        className={'ms-PeoplePicker'}
                        onGetMoreResults={___onFilterChanged}
                        pickerSuggestionsProps={this.___limitedSearchSuggestionProps}
                        selectionAriaLabel={'Selected contacts'}
                        removeButtonAriaLabel={'Remove'}
                        onRemoveSuggestion={___onRemoveSuggestion}
                        /* eslint-enable react/jsx-no-bind */
                        inputProps={{
                        onBlur: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onBlur called'),
                        onFocus: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onFocus called'),
                        'aria-label': 'People Picker',
                        }}
                        componentRef={___picker}
                        resolveDelay={300}
                        disabled={___isPickerDisabled}
                    />
                    <Checkbox
                        label="Disable People Picker"
                        checked={___isPickerDisabled}
                        // eslint-disable-next-line react/jsx-no-bind
                        onChange={___onDisabledButtonClick}
                        styles={this.___checkboxStyles}
                    />
                    <Checkbox
                        label="Delay Suggestion Results"
                        defaultChecked={___delayResults}
                        // eslint-disable-next-line react/jsx-no-bind
                        onChange={___onToggleDelayResultsChange}
                        styles={this.___checkboxStyles}
                    />
                </div>
                {/* line break */}
                <br></br><br></br>
                {/* 5 */}
                <div>
                    <NormalPeoplePicker
                        // eslint-disable-next-line react/jsx-no-bind
                        onResolveSuggestions={____onFilterChanged}
                        // eslint-disable-next-line react/jsx-no-bind, @typescript-eslint/no-deprecated
                        onEmptyInputFocus={____returnMostRecentlyUsed}
                        getTextFromItem={this.____getTextFromItem}
                        pickerSuggestionsProps={this.____suggestionProps}
                        className={'ms-PeoplePicker'}
                        // eslint-disable-next-line react/jsx-no-bind
                        onRemoveSuggestion={____onRemoveSuggestion}
                        onValidateInput={this.____validateInput}
                        selectionAriaLabel={'Selected contacts'}
                        removeButtonAriaLabel={'Remove'}
                        onItemSelected={this.____onItemSelected}
                        inputProps={{
                        onBlur: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onBlur called'),
                        onFocus: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onFocus called'),
                        'aria-label': 'People Picker',
                        }}
                        componentRef={____picker}
                        resolveDelay={300}
                        disabled={____isPickerDisabled}
                    />
                    <Checkbox
                        label="Disable People Picker"
                        checked={____isPickerDisabled}
                        // eslint-disable-next-line react/jsx-no-bind
                        onChange={____onDisabledButtonClick}
                        styles={this.____checkboxStyles}
                    />
                    <Checkbox
                        label="Delay Suggestion Results"
                        defaultChecked={____delayResults}
                        // eslint-disable-next-line react/jsx-no-bind
                        onChange={____onToggleDelayResultsChange}
                        styles={this.____checkboxStyles}
                    />
                </div>
                {/* line break */}
                <br></br><br></br>
                {/* 6 */}
                <div>
                    <div>
                        <NormalPeoplePicker
                        // eslint-disable-next-line react/jsx-no-bind
                        onResolveSuggestions={_____onFilterChanged}
                        getTextFromItem={this._____getTextFromItem}
                        pickerSuggestionsProps={this._____suggestionProps}
                        className={'ms-PeoplePicker'}
                        key={'controlled'}
                        selectionAriaLabel={'Selected contacts'}
                        removeButtonAriaLabel={'Remove'}
                        selectedItems={_____currentSelectedItems}
                        // eslint-disable-next-line react/jsx-no-bind
                        onChange={_____onItemsChange}
                        inputProps={{
                            onBlur: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onBlur called'),
                            onFocus: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onFocus called'),
                            'aria-label': 'Contacts',
                        }}
                        componentRef={_____picker}
                        resolveDelay={300}
                        disabled={_____isPickerDisabled}
                        />
                        <label> Click to Add a person </label>
                        {controlledItems.map((item, index) => (
                        <div key={index}>
                            <DefaultButton
                                styles={this._____defaultButtonStyles}
                                // eslint-disable-next-line react/jsx-no-bind
                                onClick={() => _____setCurrentSelectedItems(_____currentSelectedItems.concat([item]))}
                                >
                                <Persona {...item} />
                            </DefaultButton>
                        </div>
                        ))}
                    </div>
                    <Checkbox
                        label="Disable People Picker"
                        checked={_____isPickerDisabled}
                        // eslint-disable-next-line react/jsx-no-bind
                        onChange={_____onDisabledButtonClick}
                        styles={this._____checkboxStyles}
                    />
                    <Checkbox
                        label="Delay Suggestion Results"
                        defaultChecked={_____delayResults}
                        // eslint-disable-next-line react/jsx-no-bind
                        onChange={_____onToggleDelayResultsChange}
                        styles={this._____checkboxStyles}
                    />
                </div>
            </>
        );
    }
}