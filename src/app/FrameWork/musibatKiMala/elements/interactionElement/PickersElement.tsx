import {JSX} from 'react';
import {elementCategory} from '../../core/enums/elementCategory';
import {elementType} from '../../core/enums/elementType';
import {interactionElement} from '../../core/base/interactionElement';
import * as React from 'react';
import { 
    TagItemSuggestion,
    ITagItemSuggestionStyles,
    ISuggestionItemProps, 
    IPickerItemProps, 
    BasePickerListBelow, 
    IBasePickerProps, 
    TagPicker, 
    IBasePicker, 
    ITag, 
    IInputProps, 
    IBasePickerSuggestionsProps 
} from '@fluentui/react/lib/Pickers';
import { Toggle, IToggleStyles } from '@fluentui/react/lib/Toggle';
import { mergeStyles } from '@fluentui/react/lib/Styling';
import { useBoolean, useId } from '@fluentui/react-hooks';
import { ImageFit } from '@fluentui/react/lib/Image';
import { Persona, PersonaSize } from '@fluentui/react/lib/Persona';
import { IButtonProps } from '@fluentui/react/lib/Button';
import {
    IDocumentCardActionsProps,
    IDocumentCardPreviewProps,
    IDocumentCardProps,
    IDocumentCardTitleProps,
    IDocumentCardActivityProps,
    DocumentCard,
    DocumentCardActions,
    DocumentCardActivity,
    DocumentCardLocation,
    DocumentCardPreview,
    DocumentCardTitle,
} from '@fluentui/react/lib/DocumentCard';




export interface IFullDocumentCardProps {
  documentCardProps?: IDocumentCardProps;
  documentActionsProps?: IDocumentCardActionsProps;
  documentPreviewProps?: IDocumentCardPreviewProps;
  documentActivityProps?: IDocumentCardActivityProps;
  documentTitleProps?: IDocumentCardTitleProps;
}

export interface IDocumentPickerProps extends IBasePickerProps<IFullDocumentCardProps> {}

const DocumentPicker = BasePickerListBelow as new (
  props: IDocumentPickerProps
) => BasePickerListBelow<IDocument>;


export class PickerElement extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.Picker, elementCategory.interaction, id, Name, title);
    }


    rootClass = mergeStyles({
        maxWidth: 500,
    });

    toggleStyles: Partial<IToggleStyles> = { root: { margin: '10px 0' } };

    inputProps: IInputProps = {
        onBlur: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onBlur called'),
        onFocus: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onFocus called'),
    };

    pickerSuggestionsProps: IBasePickerSuggestionsProps = {
        suggestionsHeaderText: 'Suggested tags',
        noResultsFoundText: 'No color tags found',
    };

    testTags: ITag[] = [
        'black',
        'blue',
        'brown',
        'cyan',
        'green',
        'magenta',
        'mauve',
        'orange',
        'pink',
        'purple',
        'red',
        'rose',
        'violet',
        'white',
        'yellow',
    ].map(item => ({ key: item, name: item }));

    listContainsTagList = (tag: ITag, tagList?: ITag[]) => {
        if (!tagList || !tagList.length || tagList.length === 0) {
            return false;
        }
        return tagList.some(compareTag => compareTag.key === tag.key);
        };

        filterSuggestedTags = (filterText: string, tagList: ITag[]): ITag[] => {
        return filterText
            ? this.testTags.filter(
                tag => tag.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0 && !this.listContainsTagList(tag, tagList),
            )
            : [];
    };

    filterSelectedTags = (filterText: string, tagList: ITag[]): ITag[] => {
        return filterText ? this.testTags.filter(tag => tag.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0) : [];
    };

    getTextFromItem = (item: ITag) => item.name;
//
    _rootClass = mergeStyles({
        maxWidth: 500,
    });

    _pickerSuggestionsProps: IBasePickerSuggestionsProps = {
        suggestionsHeaderText: 'Suggested colors',
        noResultsFoundText: 'No color tags found',
    };

    _testTags: ITag[] = [
        'black',
        'blue',
        'brown',
        'cyan',
        'green',
        'magenta',
        'mauve',
        'orange',
        'pink',
        'purple',
        'red',
        'rose',
        'violet',
        'white',
        'yellow',
    ].map(item => ({ key: item, name: item[0].toUpperCase() + item.slice(1) }));

    _listContainsTagList = (tag: ITag, tagList?: ITag[]) => {
    if (!tagList || !tagList.length || tagList.length === 0) {
        return false;
    }
    return tagList.some(compareTag => compareTag.key === tag.key);
    };

    _filterSuggestedTags = (filterText: string, tagList: ITag[]): ITag[] => {
        return filterText
            ? this.testTags.filter(
                tag => tag.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0 && !this.listContainsTagList(tag, tagList),
            )
            : [];
    };

    _getTextFromItem = (item: ITag) => item.name;
//
    
    __toggleStyles: Partial<IToggleStyles> = { root: { margin: '10px 0' } };

    __inputProps: IInputProps = {
        onFocus: () => console.log('onFocus called'),
        onBlur: () => console.log('onBlur called'),
        'aria-label': 'Document picker',
    };

    __pickerSuggestionsProps: IBasePickerSuggestionsProps = {
        suggestionsHeaderText: 'Suggested documents',
        noResultsFoundText: 'No documents found',
    };

    __rootClass = mergeStyles({
    maxWidth: 500,
    });

    __baseProductionCdnUrl =
    'https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-react-assets/';

    __TestImages = {
        documentPreview: this.__baseProductionCdnUrl + 'document-preview.png',
        documentPreviewTwo: this.__baseProductionCdnUrl + 'document-preview2.png',
        documentPreviewThree: this.__baseProductionCdnUrl + 'document-preview3.png',
        iconPpt: 'https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/assets/item-types/32/pptx.png',
        personaFemale: this.__baseProductionCdnUrl + 'persona-female.png',
    };

    __data: IFullDocumentCardProps[] = [
    {
        documentPreviewProps: {
        previewImages: [
            {
            previewImageSrc: this.__TestImages.documentPreview,
            iconSrc: this.__TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
            accentColor: '#ce4b1f',
            },
        ],
        },
        documentCardProps: {},
        documentActionsProps: {
        actions: [
            {
            iconProps: { iconName: 'Share' },
            onClick: (ev: any) => {
                console.log('You clicked the share action.');
                ev.preventDefault();
                ev.stopPropagation();
            },
            },
            {
            iconProps: { iconName: 'Pin' },
            onClick: (ev: any) => {
                console.log('You clicked the pin action.');
                ev.preventDefault();
                ev.stopPropagation();
            },
            },
            {
            iconProps: { iconName: 'Ringer' },
            onClick: (ev: any) => {
                console.log('You clicked the Ringer action.');
                ev.preventDefault();
                ev.stopPropagation();
            },
            },
        ] as IButtonProps[],
        },
        documentActivityProps: {
        activity: 'Created Feb 23, 2016',
        people: [
            { name: 'Kat Larrson', profileImageSrc: this.__TestImages.personaFemale },
            { name: 'Josh Hancock', profileImageSrc: '', initials: 'JH' },
            { name: 'Tina Dasani', profileImageSrc: this.__TestImages.personaFemale },
        ],
        },
        documentTitleProps: {
        title: 'Document1',
        shouldTruncate: true,
        },
    },
    {
        documentPreviewProps: {
        previewImages: [
            {
            previewImageSrc: this.__TestImages.documentPreview,
            iconSrc: this.__TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
            accentColor: '#ce4b1f',
            },
        ],
        },
        documentCardProps: {},
        documentActionsProps: {
        actions: [
            {
            iconProps: { iconName: 'Share' },
            onClick: (ev: any) => {
                console.log('You clicked the share action.');
                ev.preventDefault();
                ev.stopPropagation();
            },
            },
            {
            iconProps: { iconName: 'Pin' },
            onClick: (ev: any) => {
                console.log('You clicked the pin action.');
                ev.preventDefault();
                ev.stopPropagation();
            },
            },
            {
            iconProps: { iconName: 'Ringer' },
            onClick: (ev: any) => {
                console.log('You clicked the Ringer action.');
                ev.preventDefault();
                ev.stopPropagation();
            },
            },
        ],
        },
        documentActivityProps: {
        activity: 'Created Feb 23, 2016',
        people: [
            { name: 'Kat Larrson', profileImageSrc: this.__TestImages.personaFemale },
            { name: 'Josh Hancock', profileImageSrc: '', initials: 'JH' },
            { name: 'Tina Dasani', profileImageSrc: this.__TestImages.personaFemale },
        ],
        },
        documentTitleProps: {
        title: 'Document2',
        shouldTruncate: true,
        },
    },
    {
        documentPreviewProps: {
        previewImages: [
            {
            previewImageSrc: this.__TestImages.documentPreviewTwo,
            iconSrc: this.__TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
            accentColor: '#ce4b1f',
            },
        ],
        },
        documentCardProps: {},
        documentActionsProps: {
        actions: [
            {
            iconProps: { iconName: 'Share' },
            onClick: (ev: any) => {
                console.log('You clicked the share action.');
                ev.preventDefault();
                ev.stopPropagation();
            },
            },
            {
            iconProps: { iconName: 'Pin' },
            onClick: (ev: any) => {
                console.log('You clicked the pin action.');
                ev.preventDefault();
                ev.stopPropagation();
            },
            },
            {
            iconProps: { iconName: 'Ringer' },
            onClick: (ev: any) => {
                console.log('You clicked the Ringer action.');
                ev.preventDefault();
                ev.stopPropagation();
            },
            },
        ],
        },
        documentActivityProps: {
        activity: 'Created Feb 23, 2016',
        people: [
            { name: 'Kat Larrson', profileImageSrc: this.__TestImages.personaFemale },
            { name: 'Josh Hancock', profileImageSrc: '', initials: 'JH' },
            { name: 'Tina Dasani', profileImageSrc: this.__TestImages.personaFemale },
        ],
        },
        documentTitleProps: {
        title: 'Document3',
        shouldTruncate: true,
        },
    },
    {
        documentPreviewProps: {
        previewImages: [
            {
            previewImageSrc: this.__TestImages.documentPreviewThree,
            iconSrc: this.__TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
            accentColor: '#ce4b1f',
            },
        ],
        },
        documentCardProps: {},
        documentActionsProps: {
        actions: [
            {
            iconProps: { iconName: 'Share' },
            onClick: (ev: any) => {
                console.log('You clicked the share action.');
                ev.preventDefault();
                ev.stopPropagation();
            },
            },
            {
            iconProps: { iconName: 'Pin' },
            onClick: (ev: any) => {
                console.log('You clicked the pin action.');
                ev.preventDefault();
                ev.stopPropagation();
            },
            },
            {
            iconProps: { iconName: 'Ringer' },
            onClick: (ev: any) => {
                console.log('You clicked the Ringer action.');
                ev.preventDefault();
                ev.stopPropagation();
            },
            },
        ],
        },
        documentActivityProps: {
        activity: 'Created Feb 23, 2016',
        people: [
            { name: 'Kat Larrson', profileImageSrc: this.__TestImages.personaFemale },
            { name: 'Josh Hancock', profileImageSrc: '', initials: 'JH' },
            { name: 'Tina Dasani', profileImageSrc: this.__TestImages.personaFemale },
        ],
        },
        documentTitleProps: {
        title: 'Document4',
        shouldTruncate: true,
        },
    },
    ];

    __SuggestedBigItem: (documentProps: IFullDocumentCardProps, itemProps: ISuggestionItemProps<any>) => JSX.Element = (
    documentProps: IFullDocumentCardProps,
    itemProps: ISuggestionItemProps<any>,
    ) => {
    const { documentPreviewProps, documentTitleProps } = documentProps;

    return (
        <Persona
        imageUrl={documentPreviewProps?.previewImages[0].previewImageSrc}
        text={documentTitleProps && documentTitleProps.title}
        size={PersonaSize.size40}
        />
    );
    };

    __log =
    (text: string): (() => void) =>
    (): void =>
        console.log(text);

    __SelectedDocumentItem: (documentProps: IPickerItemProps<IFullDocumentCardProps>) => JSX.Element = (
    documentProps: IPickerItemProps<IFullDocumentCardProps>,
    ) => {
    const { documentActionsProps, documentPreviewProps, documentActivityProps, documentTitleProps } = documentProps.item;
    const actions: IButtonProps[] = documentActionsProps
        ? [
            ...documentActionsProps.actions,
            {
            iconProps: { iconName: 'Cancel' },
            onClick: (ev: any) => {
                if (documentProps.onRemoveItem) {
                documentProps.onRemoveItem();
                }
            },
            },
        ]
        : [];

    return (
        <DocumentCard onClick={this.__log('You clicked the card.')}>
        <DocumentCardPreview {...documentPreviewProps!} />
        <DocumentCardLocation
            location="Marketing Documents"
            locationHref="http://microsoft.com"
            ariaLabel="Location, Marketing Documents"
        />
        <DocumentCardTitle {...documentTitleProps!} />
        <DocumentCardActivity {...documentActivityProps!} />
        <DocumentCardActions actions={actions} />
        </DocumentCard>
    );
    };

    __getTextFromItem = (props: IFullDocumentCardProps): string => {
    return props.documentTitleProps!.title;
    };

    __listContainsDocument = (document: IFullDocumentCardProps, items: IFullDocumentCardProps[]): boolean => {
        if (!items || !items.length || items.length === 0) {
            return false;
        }
        const documentTitle = document.documentTitleProps && document.documentTitleProps.title;
        return items.some(item => (item.documentTitleProps && item.documentTitleProps.title) === documentTitle);
    };

    __onFilterChanged = (filterText: string, items?: IFullDocumentCardProps[]): IFullDocumentCardProps[] => {
        if (!items) {
            return [];
        }
        return filterText
            ? this.__data
                .filter(
                item =>
                    item.documentTitleProps &&
                    item.documentTitleProps.title.toLowerCase().indexOf(filterText.toLowerCase()) === 0,
                )
                .filter(item => !this.__listContainsDocument(item, items))
            : [];
    };
//
    ___rootClass = mergeStyles({
        maxWidth: 500,
    });

    ___pickerSuggestionsProps: IBasePickerSuggestionsProps = {
        suggestionsHeaderText: 'Suggested colors',
        noResultsFoundText: 'No color tags found',
    };

    ___testTags: ITag[] = [
        'black',
        'blue',
        'brown',
        'cyan',
        'green',
        'magenta',
        'mauve',
        'orange',
        'pink',
        'purple',
        'red',
        'rose',
        'violet',
        'white',
        'yellow',
    ].map(item => ({ key: item, name: item[0].toUpperCase() + item.slice(1) }));

    ___listContainsTagList = (tag: ITag, tagList?: ITag[]) => {
        if (!tagList || !tagList.length || tagList.length === 0) {
            return false;
        }
        return tagList.some(compareTag => compareTag.key === tag.key);
    };

    ___filterSuggestedTags = (filterText: string, tagList: ITag[]): ITag[] => {
        return filterText
            ? this.___testTags.filter(
                tag => tag.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0 && !this.___listContainsTagList(tag, tagList),
            )
            : [];
    };

    ___getTextFromItem = (item: ITag) => item.name;
//
    ____rootClass = mergeStyles({
        maxWidth: 500,
    });

    ____inputProps: IInputProps = {
        onBlur: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onBlur called'),
        onFocus: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onFocus called'),
    };

    ____pickerSuggestionsProps: IBasePickerSuggestionsProps = {
        suggestionsHeaderText: 'Suggested tags',
        noResultsFoundText: 'No tags found',
    };

    ____testTags: ITag[] = [
        'A short tag',
        'A very long tag that spans more than the entire width of the picker and forces the text to wrap',
        'A second very long tag that spans more than the entire width of the picker and forces the text to wrap',
        'A third very long tag that spans more than the entire width of the picker and forces the text to wrap',
    ].map(item => ({ key: item, name: item }));

    ____filterSelectedTags = (filterText: string, tagList: ITag[]): ITag[] => {
        return filterText ? this.____testTags.filter(tag => tag.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0) : [];
    };

    ____getTextFromItem = (item: ITag) => item.name;

    ____tagStyles: Partial<ITagItemSuggestionStyles> = {
    suggestionTextOverflow: {
        height: 'auto',
        whiteSpace: 'normal',
        maxWidth: 500,
    },
    };

    ____onRenderSuggestionItem = (props: ITag) => {
        return <TagItemSuggestion styles={this.____tagStyles}>{props.name}</TagItemSuggestion>;
    };



//
    renderElement(): JSX.Element {

        // All pickers extend from BasePicker specifying the item type.
        const picker = React.useRef<IBasePicker<ITag>>(null);
        const [tagPicker, { toggle: toggleIsTagPickerVisible }] = useBoolean(false);
        const onItemSelected = React.useCallback((item: ITag): ITag | null => {
            if (picker.current && this.listContainsTagList(item, picker.current.items)) {
            return null;
            }
            return item;
        }, []);
//
        const pickerId = useId('inline-picker');
//
        const [__isPickerDisabled, { toggle: __toggleIsPickerDisabled }] = useBoolean(false);
//
        const ___pickerId = useId('custom-icon-picker');
//
        const ____pickerId = useId('wrapped-picker');
        const ____picker = React.useRef<IBasePicker<ITag>>(null);

//
        return(
            <>
                {/* 1 */}
                <div className={this.rootClass}>
                    <Toggle
                        styles={this.toggleStyles}
                        label="Disable tag picker"
                        checked={tagPicker}
                        onChange={toggleIsTagPickerVisible}
                    />
                    <label htmlFor="picker1">
                        Filter items in suggestions: This picker will filter added items from the search suggestions.
                    </label>
                    <TagPicker
                        removeButtonAriaLabel="Remove"
                        selectionAriaLabel="Selected colors"
                        onResolveSuggestions={this.filterSuggestedTags}
                        getTextFromItem={this.getTextFromItem}
                        pickerSuggestionsProps={this.pickerSuggestionsProps}
                        disabled={tagPicker}
                        inputProps={{
                        ...this.inputProps,
                        id: 'picker1',
                        }}
                    />
                    <br />
                    <label htmlFor="picker2">
                        Filter items on selected: This picker will show already-added suggestions but will not add duplicate tags.
                    </label>
                    <TagPicker
                        removeButtonAriaLabel="Remove"
                        selectionAriaLabel="Selected colors"
                        componentRef={picker}
                        onResolveSuggestions={this.filterSelectedTags}
                        onItemSelected={onItemSelected}
                        getTextFromItem={this.getTextFromItem}
                        pickerSuggestionsProps={this.pickerSuggestionsProps}
                        disabled={tagPicker}
                        inputProps={{
                        ...this.inputProps,
                        id: 'picker2',
                        }}
                    />
                </div>
                {/* line break */}
                <br></br><br></br>
                {/* 2 */}
                <div className={this._rootClass}>
                    <label htmlFor={pickerId}>Choose a color</label>
                    <TagPicker
                        removeButtonAriaLabel="Remove"
                        selectionAriaLabel="Selected colors"
                        onResolveSuggestions={this._filterSuggestedTags}
                        getTextFromItem={this._getTextFromItem}
                        pickerSuggestionsProps={this._pickerSuggestionsProps}
                        itemLimit={4}
                        // this option tells the picker's callout to render inline instead of in a new layer
                        pickerCalloutProps={{ doNotLayer: true }}
                        inputProps={{
                        id: pickerId,
                        }}
                    />
                    <div
                        // since this example is an inline picker, it needs some forced space below
                        // so when embedded in the docssite, the dropdown shows up
                        style={{ height: '10em' }}
                    />
                </div>
                {/* line break */}
                <br></br><br></br>
                {/* 3 */}
                <div className={this.__rootClass}>
                    <Toggle
                        styles={this.__toggleStyles}
                        label="Disable document picker"
                        checked={__isPickerDisabled}
                        onChange={__toggleIsPickerDisabled}
                    />
                    <DocumentPicker
                        removeButtonAriaLabel="Remove"
                        onRenderSuggestionsItem={this.__SuggestedBigItem as any}
                        onResolveSuggestions={this.__onFilterChanged}
                        onRenderItem={this.__SelectedDocumentItem}
                        getTextFromItem={this.__getTextFromItem}
                        pickerSuggestionsProps={this.__pickerSuggestionsProps}
                        selectionAriaLabel="Selected documents"
                        selectionRole="group"
                        disabled={__isPickerDisabled}
                        inputProps={this.__inputProps}
                    />
                </div>
                {/* line break */}
                <br></br><br></br>
                {/* 4 */}
                <div className={this.___rootClass}>
                    <label htmlFor={___pickerId}>Choose a color</label>
                    <TagPicker
                        removeButtonAriaLabel="Remove"
                        selectionAriaLabel="Selected colors"
                        onResolveSuggestions={this.___filterSuggestedTags}
                        getTextFromItem={this.___getTextFromItem}
                        pickerSuggestionsProps={this.___pickerSuggestionsProps}
                        removeButtonIconProps={{ iconName: 'Delete' }}
                        itemLimit={4}
                        pickerCalloutProps={{ doNotLayer: true }}
                        inputProps={{
                        id: ___pickerId,
                        }}
                    />
                </div>
                {/* line break */}
                <br></br><br></br>
                {/* 5 */}
                <div className={this.____rootClass}>
                    <label htmlFor={____pickerId}>Choose a tag</label>
                    <TagPicker
                        onRenderSuggestionsItem={this.____onRenderSuggestionItem}
                        removeButtonAriaLabel="Remove"
                        selectionAriaLabel="Selected tags"
                        componentRef={____picker}
                        onResolveSuggestions={this.____filterSelectedTags}
                        getTextFromItem={this.____getTextFromItem}
                        pickerSuggestionsProps={this.____pickerSuggestionsProps}
                        inputProps={{
                        ...this.____inputProps,
                        id: ____pickerId,
                        }}
                    />
                </div>
            </>
        );
    }
}