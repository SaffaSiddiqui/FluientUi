import {JSX} from 'react';
import {elementCategory} from '../../core/enums/elementCategory';
import {elementType} from '../../core/enums/elementType';
import {interactionElement} from '../../core/base/interactionElement';
import * as React from 'react';
import { Checkbox, ICheckboxStyles } from '@fluentui/react/lib/Checkbox';
import { Dropdown, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { Facepile, IFacepilePersona, OverflowButtonType } from '@fluentui/react/lib/Facepile';
import { PersonaSize, PersonaPresence } from '@fluentui/react/lib/Persona';
import { Slider } from '@fluentui/react/lib/Slider';
import { facepilePersonas } from '@fluentui/example-data';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { useBoolean } from '@fluentui/react-hooks';
import { Announced } from '@fluentui/react';

export class FacepileElement extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.Facepile, elementCategory.interaction, id, Name, title);
    }

    styles = mergeStyleSets({
        container: {
            maxWidth: 300,
        },
        control: {
            paddingTop: 20,
        },
        slider: {
            margin: '10px 0',
        },
        checkbox: {
            paddingTop: 15,
        },
        dropdown: {
            paddingTop: 0,
            margin: '10px 0',
        },
    });

    dropdownOptions = [
        { key: PersonaSize.size8, text: PersonaSize[PersonaSize.size8] },
        { key: PersonaSize.size24, text: PersonaSize[PersonaSize.size24] },
        { key: PersonaSize.size32, text: PersonaSize[PersonaSize.size32] },
        { key: PersonaSize.size40, text: PersonaSize[PersonaSize.size40] },
        { key: PersonaSize.size48, text: PersonaSize[PersonaSize.size48] },
    ];

    checkboxStyles: Partial<ICheckboxStyles> = { root: { margin: '10px 0' } };

    getPersonaPresence = (personaName: string): PersonaPresence => {
        const presences = [
            PersonaPresence.away,
            PersonaPresence.busy,
            PersonaPresence.online,
            PersonaPresence.offline,
            PersonaPresence.offline,
        ];
        return presences[personaName.charCodeAt(1) % 5];
    };
//
    _styles = mergeStyleSets({
        container: {
            maxWidth: 300,
        },
        control: {
            paddingTop: 20,
        },
        slider: {
            margin: '10px 0',
        },
        dropdown: {
            paddingTop: 0,
            margin: '10px 0',
        },
    });
    _dropdownOptions = [
    { key: OverflowButtonType.none, text: OverflowButtonType[OverflowButtonType.none] },
    { key: OverflowButtonType.descriptive, text: OverflowButtonType[OverflowButtonType.descriptive] },
    { key: OverflowButtonType.downArrow, text: OverflowButtonType[OverflowButtonType.downArrow] },
    { key: OverflowButtonType.more, text: OverflowButtonType[OverflowButtonType.more] },
    ];
//
    overflowButtonProps = {
        ariaLabel: 'More users',
        onClick: (ev: React.MouseEvent<HTMLButtonElement>) => alert('overflow icon clicked'),
    };
//




//
    renderElement(): JSX.Element {

        const [imagesFadeIn, { toggle: toggleImagesFadeIn }] = useBoolean(true);
        const [numberOfFaces, setNumberOfFaces] = React.useState(3);
        const [personaSize, setPersonaSize] = React.useState(PersonaSize.size32);

        const personas = React.useMemo(() => facepilePersonas.slice(0, numberOfFaces), [numberOfFaces]);
        const overflowPersonas = React.useMemo(() => facepilePersonas.slice(numberOfFaces), [numberOfFaces]);

        const getPersonaProps = React.useCallback(
            (persona: IFacepilePersona) => ({
            imageShouldFadeIn: imagesFadeIn,
            presence: this.getPersonaPresence(persona.personaName!),
            }),
            [imagesFadeIn],
        );

        const onChangePersonaSize = (event: React.FormEvent<HTMLDivElement>, value: IDropdownOption): void => {
            setPersonaSize(value.key as PersonaSize);
        };

        const onChangePersonaNumber = (value: number): void => {
            setNumberOfFaces(value);
        };
//
        const [displayedPersonas, setDisplayedPersonas] = React.useState(5);
        const [overflowButtonType, setOverflowButtonType] = React.useState(OverflowButtonType.none);

        const overflowButtonProps = {
            ariaLabel: 'More users',
            onClick: (ev: React.MouseEvent<HTMLButtonElement>) => alert('overflow icon clicked'),
        };

        const onChangeType = (event: React.FormEvent<HTMLDivElement>, value: IDropdownOption): void => {
            setOverflowButtonType(value.key as OverflowButtonType);
        };

        const _onChangePersonaNumber = (value: number): void => {
            setDisplayedPersonas(value);
        };
//
        const [_numberOfFaces, _setNumberOfFaces] = React.useState(0);
        const _personas = React.useMemo(() => facepilePersonas.slice(0, _numberOfFaces), [_numberOfFaces]);
        const addButtonProps = React.useMemo(
            () => ({
            ariaLabel: 'Add a new person to the Facepile',
            onClick: (ev: React.MouseEvent<HTMLButtonElement>) => {
                _setNumberOfFaces(_numberOfFaces + 1);
            },
            }),
            [_numberOfFaces],
        );


//
        return(
            <>
                {/* 1 */}
                <div className={this.styles.container}>
                    <Facepile
                        personaSize={personaSize}
                        personas={personas}
                        overflowPersonas={overflowPersonas}
                        getPersonaProps={getPersonaProps}
                        ariaDescription="To move through the items use left and right arrow keys."
                        ariaLabel="Example list of Facepile personas"
                    />
                    <div className={this.styles.control}>
                        <Slider
                            label="Number of Personas:"
                            className={this.styles.slider}
                            min={1}
                            max={5}
                            step={1}
                            showValue
                            value={numberOfFaces}
                            // eslint-disable-next-line react/jsx-no-bind
                            onChange={onChangePersonaNumber}
                        />
                        <Dropdown
                            label="Persona Size:"
                            selectedKey={personaSize}
                            className={this.styles.dropdown}
                            options={this.dropdownOptions}
                            // eslint-disable-next-line react/jsx-no-bind
                            onChange={onChangePersonaSize}
                        />
                        <Checkbox
                            className={this.styles.checkbox}
                            styles={this.checkboxStyles}
                            label="Fade In"
                            checked={imagesFadeIn}
                            onChange={toggleImagesFadeIn}
                        />
                    </div>
                </div>
                {/* 2 */}
                <div className={this._styles.container}>
                    <Facepile
                        personas={facepilePersonas}
                        maxDisplayablePersonas={displayedPersonas}
                        overflowButtonType={overflowButtonType}
                        overflowButtonProps={overflowButtonProps}
                        ariaDescription={'To move through the items use left and right arrow keys.'}
                        ariaLabel={'Example list of Facepile personas'}
                    />
                    <div className={this._styles.control}>
                        <Slider
                            label="Number of Personas:"
                            className={this._styles.slider}
                            min={1}
                            max={5}
                            step={1}
                            showValue
                            value={displayedPersonas}
                            // eslint-disable-next-line react/jsx-no-bind
                            onChange={_onChangePersonaNumber}
                        />
                        <Dropdown
                            label="Overflow Button Type:"
                            className={this._styles.dropdown}
                            selectedKey={overflowButtonType}
                            options={this._dropdownOptions}
                            // eslint-disable-next-line react/jsx-no-bind
                            onChange={onChangeType}
                        />
                    </div>
                </div>
                {/* 3 */}
                {numberOfFaces > 0 ? (
                    <Announced message={`New person added, currently ${_numberOfFaces} in the Facepile.`} aria-live="assertive" />
                ) : null}
                <Facepile
                    personas={_personas}
                    maxDisplayablePersonas={5}
                    overflowButtonProps={this.overflowButtonProps}
                    overflowButtonType={OverflowButtonType.descriptive}
                    showAddButton
                    addButtonProps={addButtonProps}
                    ariaDescription="To move through the items use left and right arrow keys."
                />
            </>
        );
    }
}