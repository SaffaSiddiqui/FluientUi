import {JSX} from 'react';
import {elementCategory} from '../../core/enums/elementCategory';
import {elementType} from '../../core/enums/elementType';
import {interactionElement} from '../../core/base/interactionElement';
import * as React from 'react';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { mergeStyles } from '@fluentui/react/lib/Styling';
import { useBoolean, useSetInterval, useConst } from '@fluentui/react-hooks';
import { Persona, PersonaSize, PersonaPresence } from '@fluentui/react/lib/Persona';
import { createListItems, IExampleItem } from '@fluentui/example-data';
import { 
    createTheme,
    mergeStyleSets,
    IColumn, 
    buildColumns, 
    SelectionMode, 
    IListProps, 
    Shimmer, 
    ShimmerElementType, 
    ShimmerElementsGroup,
    ShimmeredDetailsList, 
    IShimmerStyleProps,
    IShimmerStyles,
    IShimmerElement, 
    ThemeProvider 
} from '@fluentui/react';



interface IShimmerApplicationExampleState {
  lastIntervalId: number;
  visibleCount: number;
}


export class ShimmerElement extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.Shimmer, elementCategory.interaction, id, Name, title);
    }


    wrapperClass = mergeStyles({
        padding: 2,
        selectors: {
            '& > .ms-Shimmer-container': {
            margin: '10px 0',
            },
        },
    });
    shimmerWithElementFirstRow = [
        { type: ShimmerElementType.circle },
        { type: ShimmerElementType.gap, width: '2%' },
        { type: ShimmerElementType.line },
    ];
    shimmerWithElementSecondRow = [
        { type: ShimmerElementType.circle, height: 24 },
        { type: ShimmerElementType.gap, width: '2%' },
        { type: ShimmerElementType.line, height: 16, width: '20%' },
        { type: ShimmerElementType.gap, width: '5%' },
        { type: ShimmerElementType.line, height: 16, width: '20%' },
        { type: ShimmerElementType.gap, width: '10%' },
        { type: ShimmerElementType.line, height: 16, width: '15%' },
        { type: ShimmerElementType.gap, width: '10%' },
        { type: ShimmerElementType.line, height: 16 },
    ];
    shimmerWithElementThirdRow = [
        { type: ShimmerElementType.circle, height: 24 },
        { type: ShimmerElementType.gap, width: '2%' },
        { type: ShimmerElementType.line, height: 16, width: '20%' },
        { type: ShimmerElementType.gap, width: '5%' },
        { type: ShimmerElementType.line, height: 16, width: '20%' },
        { type: ShimmerElementType.gap, width: '10%' },
        { type: ShimmerElementType.line, height: 16, width: '15%' },
        { type: ShimmerElementType.gap, width: '10%' },
        { type: ShimmerElementType.line, height: 16 },
    ];
    shimmerVerticalElement: IShimmerElement[] = [
        { type: ShimmerElementType.circle },
        { type: ShimmerElementType.gap, width: '2%' },
        { type: ShimmerElementType.circle, height: 15, verticalAlign: 'top' },
        { type: ShimmerElementType.gap, width: '2%' },
        { type: ShimmerElementType.line, verticalAlign: 'bottom', width: '20%' },
        { type: ShimmerElementType.gap, width: '2%' },
        { type: ShimmerElementType.line, height: 5, verticalAlign: 'top', width: '20%' },
        { type: ShimmerElementType.gap, width: '2%' },
        { type: ShimmerElementType.line, height: 16, width: '15%' },
        { type: ShimmerElementType.gap, width: '2%' },
        { type: ShimmerElementType.line, height: 10, verticalAlign: 'bottom' },
    ];
//
    _wrapperClass = mergeStyles({
        padding: 2,
        selectors: {
            '& > .ms-Shimmer-container': {
            margin: '10px 0',
            },
        },
    });
    _wrapperStyle = { display: 'flex' };
    _getCustomElementsExampleOne = (): JSX.Element => {
        return (
            <div style={this._wrapperStyle}>
                <ShimmerElementsGroup
                    shimmerElements={[
                        { type: ShimmerElementType.line, width: 40, height: 40 },
                        { type: ShimmerElementType.gap, width: 10, height: 40 },
                    ]}
                />
                <ShimmerElementsGroup
                    flexWrap
                    shimmerElements={[
                        { type: ShimmerElementType.line, width: 300, height: 10 },
                        { type: ShimmerElementType.line, width: 200, height: 10 },
                        { type: ShimmerElementType.gap, width: 100, height: 20 },
                    ]}
                />
            </div>
        );
    };

    _getCustomElementsExampleTwo = (): JSX.Element => {
        return (
            <div style={this._wrapperStyle}>
                <ShimmerElementsGroup
                    shimmerElements={[
                        { type: ShimmerElementType.circle, height: 40 },
                        { type: ShimmerElementType.gap, width: 10, height: 40 },
                    ]}
                />
                <ShimmerElementsGroup
                    flexWrap
                    shimmerElements={[
                        { type: ShimmerElementType.line, width: 400, height: 10 },
                        { type: ShimmerElementType.gap, width: 100, height: 20 },
                        { type: ShimmerElementType.line, width: 500, height: 10 },
                    ]}
                />
            </div>
        );
    };

    _getCustomElementsExampleThree = (): JSX.Element => {
        return (
            <div style={this._wrapperStyle}>
                <ShimmerElementsGroup
                    width={'90px'}
                    shimmerElements={[
                        { type: ShimmerElementType.line, height: 80, width: 80 },
                        { type: ShimmerElementType.gap, width: 10, height: 80 },
                    ]}
                />
                <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                    <ShimmerElementsGroup
                        shimmerElements={[
                            { type: ShimmerElementType.circle, height: 40 },
                            { type: ShimmerElementType.gap, width: 10, height: 40 },
                        ]}
                    />
                    <ShimmerElementsGroup
                        flexWrap
                        width={'calc(100% - 50px)'}
                        shimmerElements={[
                            { type: ShimmerElementType.line, width: '90%', height: 10 },
                            { type: ShimmerElementType.gap, width: '10%', height: 20 },
                            { type: ShimmerElementType.line, width: '100%', height: 10 },
                        ]}
                    />
                    <ShimmerElementsGroup
                        flexWrap
                        width={'100%'}
                        shimmerElements={[
                            { type: ShimmerElementType.line, width: '80%', height: 10, verticalAlign: 'bottom' },
                            { type: ShimmerElementType.gap, width: '20%', height: 20 },
                            { type: ShimmerElementType.line, width: '40%', height: 10, verticalAlign: 'bottom' },
                            { type: ShimmerElementType.gap, width: '2%', height: 20 },
                            { type: ShimmerElementType.line, width: '58%', height: 10, verticalAlign: 'bottom' },
                        ]}
                    />
                </div>
            </div>
        );
    };
//
    __wrapperClass = mergeStyles({
        padding: 2,
        selectors: {
            '& > .ms-Shimmer-container': {
            margin: '10px 0',
            },
        },
    });
    __wrapperStyles = { display: 'flex' };

    __getCustomElements = (): JSX.Element => {
        return (
            <div style={this.__wrapperStyles}>
                <ShimmerElementsGroup
                    shimmerElements={[
                        { type: ShimmerElementType.circle, height: 40 },
                        { type: ShimmerElementType.gap, width: 16, height: 40 },
                    ]}
                />
                <ShimmerElementsGroup
                    flexWrap
                    width="100%"
                    shimmerElements={[
                        { type: ShimmerElementType.line, width: '100%', height: 10, verticalAlign: 'bottom' },
                        { type: ShimmerElementType.line, width: '90%', height: 8 },
                        { type: ShimmerElementType.gap, width: '10%', height: 20 },
                    ]}
                />
            </div>
        );
    };
//
    ITEMS_COUNT: number = 200;
    INTERVAL_DELAY: number = 1200;
    toggleStyle: React.CSSProperties = {
        marginBottom: '20px',
    };
    shimmeredDetailsListProps: IListProps = {
        renderedWindowsAhead: 0,
        renderedWindowsBehind: 0,
    };

    fileIcons: { name: string }[] = [
        { name: 'accdb' },
        { name: 'audio' },
        { name: 'code' },
        { name: 'csv' },
        { name: 'docx' },
        { name: 'dotx' },
        { name: 'mpt' },
        { name: 'model' },
        { name: 'one' },
        { name: 'onetoc' },
        { name: 'pdf' },
        { name: 'photo' },
        { name: 'pptx' },
        { name: 'presentation' },
        { name: 'potx' },
        { name: 'pub' },
        { name: 'rtf' },
        { name: 'spreadsheet' },
        { name: 'txt' },
        { name: 'vector' },
        { name: 'vsdx' },
        { name: 'xlsx' },
        { name: 'xltx' },
        { name: 'xsn' },
    ];

    randomFileIcon = (): { docType: string; url: string } => {
    const docType: string = this.fileIcons[Math.floor(Math.random() * this.fileIcons.length) + 0].name;
    return {
        docType,
        url: `https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/assets/item-types/16/${docType}.svg`,
    };
    };

    onRenderItemColumn = (item: IExampleItem, index: number, column: IColumn): JSX.Element | string | number => {
        if (column.key === 'thumbnail') {
            return <img src={item.thumbnail} />;
        }
        return item[column.key as keyof IExampleItem];
    };

    exampleItems: IExampleItem[] = createListItems(this.ITEMS_COUNT).map((item: IExampleItem) => {
        const randomFileType = this.randomFileIcon();
        return { ...item, thumbnail: randomFileType.url };
    });
//
    customThemeForShimmer = createTheme({
        palette: {
            // palette slot used in Shimmer for main background
            neutralLight: '#bdd4ed',
            // palette slot used in Shimmer for tip of the moving wave
            neutralLighter: '#7AAFE7',
            // palette slot used in Shimmer for all the space around the shimmering elements
            white: '#0078D4',
        },
    });

    shimmerElements = [
        { type: ShimmerElementType.circle, height: 24 },
        { type: ShimmerElementType.gap, width: '2%' },
        { type: ShimmerElementType.line, height: 16, width: '20%' },
        { type: ShimmerElementType.gap, width: '5%' },
        { type: ShimmerElementType.line, height: 16, width: '20%' },
        { type: ShimmerElementType.gap, width: '10%' },
        { type: ShimmerElementType.line, height: 16, width: '15%' },
        { type: ShimmerElementType.gap, width: '10%' },
        { type: ShimmerElementType.line, height: 16 },
    ];

    classNames = mergeStyleSets({
        wrapper: {
            selectors: {
                '& > .ms-Shimmer-container': {
                    margin: '10px 0',
                },
            },
        },
        themedBackgroundWrapper: {
            padding: 20,
            margin: '10px 0',
            height: 100,
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'stretch',
            // using the palette color to match the gaps and borders of the shimmer.
            background: this.customThemeForShimmer.palette.white,
            selectors: {
                '& > .ms-Shimmer-container': {
                    flexGrow: 1,
                },
            },
        },
        themedBackgroundWrapper2: {
            width: 400,
            height: 100,
            margin: '10px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // using the palette color to match the gaps and borders of the shimmer.
            background: this.customThemeForShimmer.palette.white,
            outline: `1px solid ${this.customThemeForShimmer.palette.neutralPrimary}`,
            outlineOffset: '-10px',
        },
        indent: {
            paddingLeft: 18,
        },
    });

    // Passing a color to match the background color of the containing div.
    getCustomElements = (backgroundColor?: string) => {
        return (
            <div style={{ display: 'flex' }}>
            <ShimmerElementsGroup
                backgroundColor={backgroundColor}
                shimmerElements={[
                    { type: ShimmerElementType.circle, height: 40 },
                    { type: ShimmerElementType.gap, width: 16, height: 40 },
                ]}
            />
            <ShimmerElementsGroup
                backgroundColor={backgroundColor}
                flexWrap
                width="100%"
                shimmerElements={[
                    { type: ShimmerElementType.line, width: '100%', height: 10, verticalAlign: 'bottom' },
                    { type: ShimmerElementType.line, width: '90%', height: 8 },
                    { type: ShimmerElementType.gap, width: '10%', height: 20 },
                ]}
            />
            </div>
        );
    };

    getShimmerStyles = (props: IShimmerStyleProps): IShimmerStyles => {
        return {
            shimmerWrapper: [
                {
                    backgroundColor: '#deecf9',
                },
            ],
            shimmerGradient: [
                {
                    backgroundColor: '#deecf9',
                    backgroundImage:
                    'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, #c7e0f4 50%, rgba(255, 255, 255, 0) 100%)',
                },
            ],
        };
    };
//






//
    renderElement(): JSX.Element {

        const [examplePersona, setExamplePersona] = React.useState({});
        const [contentOne, setContentOne] = React.useState('');
        const [isDataLoadedOne, { toggle: toggleIsDataLoadedOne }] = useBoolean(false);
        const [isDataLoadedTwo, { toggle: toggleIsDataLoadedTwo }] = useBoolean(false);

        const getContentOne = (ev: React.MouseEvent<HTMLElement>, checked: boolean): void => {
            toggleIsDataLoadedOne();
            setContentOne(!isDataLoadedOne ? 'Congratulations!!! You have successfully loaded the content. ' : '');
        };

        const getContentTwo = (ev: React.MouseEvent<HTMLElement>, checked: boolean): void => {
            toggleIsDataLoadedTwo();
            setExamplePersona(
            !isDataLoadedTwo
                ? {
                    imageUrl:
                    'https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-react-assets/persona-female.png',
                    imageInitials: 'AL',
                    primaryText: 'Annie Lindqvist',
                    secondaryText: 'Software Engineer',
                }
                : {},
            );
        };
//
        const { current: state } = React.useRef<IShimmerApplicationExampleState>({
            lastIntervalId: 0,
            visibleCount: 0,
        });

        const [items, setItems] = React.useState<(IExampleItem | null)[] | undefined>(undefined);

        const shimmerColumns: IColumn[] = useConst(() => {
            const currentItems = createListItems(1);
            const columns: IColumn[] = buildColumns(currentItems);
            for (const column of columns) {
                if (column.key === 'thumbnail') {
                    column.name = 'FileType';
                    column.minWidth = 16;
                    column.maxWidth = 16;
                    column.isIconOnly = true;
                    column.iconName = 'Page';
                    break;
                }
            }
            return columns;
        });

        const { setInterval, clearInterval } = useSetInterval();

        const onLoadData = React.useCallback(
            (ev: React.MouseEvent<HTMLElement>, checked: boolean): void => {
                const loadMoreItems = (): void => {
                    state.visibleCount = Math.min(this.exampleItems.length, state.visibleCount + 2);

                    setItems(this.exampleItems.map((current, index) => (index < state.visibleCount ? current : null)) as IExampleItem[]);
                };

                state.visibleCount = 0;
                if (checked) {
                    loadMoreItems();
                    state.lastIntervalId = setInterval(loadMoreItems, this.INTERVAL_DELAY);
                } else {
                    setItems(undefined);
                    clearInterval(state.lastIntervalId);
                }
            },
            [clearInterval, setInterval, state],
        );
//





        return(
            <>
                {/* 1 */}
                <ThemeProvider className={this.wrapperClass}>
                    Basic Shimmer with no elements provided. It defaults to a line of 16px height.
                    <Shimmer />
                    <Shimmer width="75%" />
                    <Shimmer width="50%" />
                    Basic Shimmer with elements provided.
                    <Shimmer shimmerElements={this.shimmerWithElementFirstRow} />
                    <Shimmer shimmerElements={this.shimmerWithElementSecondRow} />
                    <Shimmer width="70%" shimmerElements={this.shimmerWithElementThirdRow} />
                    Variations of vertical alignment for Circles and Lines.
                    <Shimmer shimmerElements={this.shimmerVerticalElement} />
                </ThemeProvider>
                {/* line break */}
                <br></br><br></br>
                {/* 2 */}
                <ThemeProvider className={this._wrapperClass}>
                    Using ShimmerElementsGroup component to build complex structures of the placeholder you need.
                    <Shimmer customElementsGroup={this._getCustomElementsExampleOne()} width="350" />
                    <Shimmer customElementsGroup={this._getCustomElementsExampleTwo()} width="550" />
                    <Shimmer customElementsGroup={this._getCustomElementsExampleThree()} width="90%" />
                </ThemeProvider>
                {/* line break */}
                <br></br><br></br>
                {/* 3 */}
                <div className={this.__wrapperClass}>
                    <Toggle
                        checked={isDataLoadedOne}
                        // eslint-disable-next-line react/jsx-no-bind
                        onChange={getContentOne}
                        onText="Toggle to show shimmer"
                        offText="Toggle to load content"
                    />
                    <Shimmer isDataLoaded={isDataLoadedOne} ariaLabel="Loading content">
                        <div
                        style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            lineHeight: '1',
                            minHeight: '16px',
                        }}
                        >
                        {contentOne}
                        {contentOne}
                        {contentOne}
                        </div>
                    </Shimmer>
                    <Toggle
                        checked={isDataLoadedTwo}
                        // eslint-disable-next-line react/jsx-no-bind
                        onChange={getContentTwo}
                        onText="Toggle to show shimmer"
                        offText="Toggle to load content"
                    />
                    <Shimmer customElementsGroup={this.__getCustomElements()} width="300" isDataLoaded={isDataLoadedTwo}>
                        <Persona {...examplePersona} size={PersonaSize.size40} presence={PersonaPresence.away} />
                    </Shimmer>
                </div>
                {/*  */}
                <Toggle
                    style={this.toggleStyle}
                    label="Toggle to load content"
                    onChange={onLoadData}
                    onText="Content"
                    offText="Shimmer"
                />
                <div>
                    <ShimmeredDetailsList
                        setKey="items"
                        items={items || []}
                        columns={shimmerColumns}
                        selectionMode={SelectionMode.none}
                        onRenderItemColumn={this.onRenderItemColumn}
                        enableShimmer={!items}
                        ariaLabelForShimmer="Content is being fetched"
                        ariaLabelForGrid="Item details"
                        listProps={this.shimmeredDetailsListProps}
                    />
                </div>
                {/*  */}
                <div>
                    Style overrides of shimmering wave and space around in cases where Shimmer is placed on backgrounds different
                    than the main background of the app. There are several scenarios that can be considered bellow:
                </div>
                <div>
                    <b>1.</b> The recommended way by using the <b>shimmerColors</b> prop which in turn has 2 sub-scenarios:
                </div>
                <div className={this.classNames.indent}>
                    <b>a. </b>When using
                    <b>shimmerElements</b> prop to build the placeholder you can pass all 3 possible colors to
                    <b>shimmerColors</b> prop.
                </div>
                <div className={this.classNames.themedBackgroundWrapper}>
                    <Shimmer
                    shimmerColors={{
                        shimmer: this.customThemeForShimmer.palette.themeTertiary,
                        shimmerWave: this.customThemeForShimmer.palette.themeSecondary,
                        background: this.customThemeForShimmer.palette.white,
                    }}
                    shimmerElements={this.shimmerElements}
                    />
                </div>
                <div className={this.classNames.indent}>
                    <b>b. </b>When using <b>customElementsGroup</b> prop to build the placeholder:
                </div>
                <div className={this.classNames.themedBackgroundWrapper2}>
                    <Shimmer
                    customElementsGroup={this.getCustomElements(this.customThemeForShimmer.palette.white)}
                    width="300"
                    shimmerColors={{
                        shimmer: this.customThemeForShimmer.palette.themeTertiary,
                        shimmerWave: this.customThemeForShimmer.palette.themeSecondary,
                    }}
                    />
                </div>
                <div>
                    <b>2. </b>Another way of doing it by using <b>Customizer</b> component wrapper.
                </div>
                <ThemeProvider theme={this.customThemeForShimmer}>
                    <div className={this.classNames.themedBackgroundWrapper2}>
                    <Shimmer customElementsGroup={this.getCustomElements()} width="300" />
                    </div>
                </ThemeProvider>
                <div>
                    <b>3. </b>Style overrides of shimmering wave using <b>styles</b> prop.
                </div>
                <div className={this.classNames.wrapper}>
                    <Shimmer width="75%" styles={this.getShimmerStyles} />
                    <Shimmer width="75%" styles={this.getShimmerStyles} />
                    <Shimmer width="75%" styles={this.getShimmerStyles} />
                    <Shimmer width="75%" styles={this.getShimmerStyles} />
                    <Shimmer width="75%" styles={this.getShimmerStyles} />
                </div>
            </>
        );
    }
}