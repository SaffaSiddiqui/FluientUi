import {JSX} from 'react';
import {elementCategory} from '../../core/enums/elementCategory';
import {elementType} from '../../core/enums/elementType';
import {interactionElement} from '../../core/base/interactionElement';
import * as React from 'react';
import { getTheme, mergeStyleSets } from '@fluentui/react/lib/Styling';
import { lorem } from '@fluentui/example-data';
import { ScrollablePane, IScrollablePaneStyles } from '@fluentui/react/lib/ScrollablePane';
import { Sticky, StickyPositionType } from '@fluentui/react/lib/Sticky';
import { IRenderFunction } from '@fluentui/react/lib/Utilities';
import { TooltipHost } from '@fluentui/react/lib/Tooltip';
import { SelectionMode } from '@fluentui/react/lib/Selection';
import {
    DetailsList,
    DetailsListLayoutMode,
    IDetailsListStyles,
    IDetailsHeaderProps,
    ConstrainMode,
    IDetailsFooterProps,
    DetailsRow,
    IDetailsColumnRenderTooltipProps
} from '@fluentui/react/lib/DetailsList';

export interface IScrollablePaneExampleItem {
  color: string;
  text: string;
  index: number;
}
//
export interface IScrollablePaneDetailsListExampleItem {
  key: number | string;
  test1: string;
  test2: string;
  test3: string;
  test4: string;
  test5: string;
  test6: string;
}


export class ScrollablePaneElement extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.ScrollablePane, elementCategory.interaction, id, Name, title);
    }



    theme = getTheme();
    classNames = mergeStyleSets({
        wrapper: {
            height: '40vh',
            position: 'relative',
            maxHeight: 'inherit',
        },
        pane: {
            maxWidth: 400,
            border: '1px solid ' + this.theme.palette.neutralLight,
        },
        sticky: {
            color: this.theme.palette.neutralDark,
            padding: '5px 20px 5px 10px',
            fontSize: '13px',
            borderTop: '1px solid ' + this.theme.palette.black,
            borderBottom: '1px solid ' + this.theme.palette.black,
        },
        textContent: {
            padding: '15px 10px',
        },
    });
    scrollablePaneStyles: Partial<IScrollablePaneStyles> = { root: this.classNames.pane };
    colors = ['#eaeaea', '#dadada', '#d0d0d0', '#c8c8c8', '#a6a6a6', '#c7e0f4', '#71afe5', '#eff6fc', '#deecf9'];
    items = Array.from({ length: 5 }).map((item, index) => ({
        color: this.colors.splice(Math.floor(Math.random() * this.colors.length), 1)[0],
        text: lorem(200),
        index,
    }));
    createContentArea = (item: IScrollablePaneExampleItem) => (
    <div
        key={item.index}
        style={{
            backgroundColor: item.color,
        }}
    >
        <Sticky stickyPosition={StickyPositionType.Both}>
            <div role="heading" aria-level={1} className={this.classNames.sticky}>
                Sticky Component #{item.index + 1}
            </div>
        </Sticky>
        <div className={this.classNames.textContent}>{item.text}</div>
    </div>
    );
    contentAreas = this.items.map(this.createContentArea);
//
    gridStyles: Partial<IDetailsListStyles> = {
        root: {
            overflowX: 'scroll',
            selectors: {
            '& [role=grid]': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                height: '60vh',
            },
            },
        },
        headerWrapper: {
            flex: '0 0 auto',
        },
        contentWrapper: {
            flex: '1 1 auto',
            overflow: 'hidden',
        },
    };

    _classNames = mergeStyleSets({
        header: {
            margin: 0,
        },
        row: {
            flex: '0 0 auto',
        },
        focusZone: {
            height: '100%',
            overflowY: 'auto',
            overflowX: 'hidden',
        },
        selectionZone: {
            height: '100%',
            overflow: 'hidden',
        },
    });

    footerItem: IScrollablePaneDetailsListExampleItem = {
        key: 'footer',
        test1: 'Footer 1',
        test2: 'Footer 2',
        test3: 'Footer 3',
        test4: 'Footer 4',
        test5: 'Footer 5',
        test6: 'Footer 6',
    };

    LOREM_IPSUM = (
        'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut ' +
        'labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut ' +
        'aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ' +
        'eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt '
    ).split(' ');
    loremIndex = 0;
    lorem = (wordCount: number): string => {
    const startIndex = this.loremIndex + wordCount > this.LOREM_IPSUM.length ? 0 : this.loremIndex;
    this.loremIndex = startIndex + wordCount;
    return this.LOREM_IPSUM.slice(startIndex, this.loremIndex).join(' ');
    };
    allItems = Array.from({ length: 200 }).map((item, index) => ({
        key: index,
        test1: lorem(4),
        test2: lorem(4),
        test3: lorem(4),
        test4: lorem(4),
        test5: lorem(4),
        test6: lorem(4),
    }));
    columns = Array.from({ length: 6 }).map((item, index) => ({
        key: 'column' + (index + 1),
        name: 'Test ' + (index + 1),
        fieldName: 'test' + (index + 1),
        minWidth: 100,
        maxWidth: 200,
        isResizable: true,
    }));
    onItemInvoked = (item: IScrollablePaneDetailsListExampleItem): void => {
        alert('Item invoked: ' + item.test1);
    };
    onRenderDetailsHeader: IRenderFunction<IDetailsHeaderProps> = (props, defaultRender) => {
        if (!props) {
            return null;
        }
        const onRenderColumnHeaderTooltip: IRenderFunction<IDetailsColumnRenderTooltipProps> = tooltipHostProps => (
            <TooltipHost {...tooltipHostProps} />
        );
        return defaultRender!({
            ...props,
            onRenderColumnHeaderTooltip,
        });
    };
    onRenderDetailsFooter: IRenderFunction<IDetailsFooterProps> = (props, defaultRender) => {
        if (!props) {
            return null;
        }
        return (
            <div className={this._classNames.row}>
            <DetailsRow
                columns={props.columns}
                item={this.footerItem}
                itemIndex={-1}
                selection={props.selection}
                selectionMode={(props.selection && props.selection.mode) || SelectionMode.none}
                rowWidth={props.rowWidth}
            />
            </div>
        );
    };




    renderElement(): JSX.Element {

        const focusZoneProps = {
            className: this._classNames.focusZone,
            'data-is-scrollable': 'true',
        } as React.HTMLAttributes<HTMLElement>;

        return(
            <>
                {/* 1 */}
                <div className={this.classNames.wrapper}>
                    <ScrollablePane
                    scrollContainerFocus={true}
                    scrollContainerAriaLabel="Sticky component example"
                    styles={this.scrollablePaneStyles}
                    >
                    {...this.contentAreas}
                    </ScrollablePane>
                </div>
                {/* 2 */}
                <div>
                    <h1 className={this._classNames.header}>Item list</h1>
                    <DetailsList
                        items={this.allItems}
                        columns={this.columns}
                        setKey="set"
                        layoutMode={DetailsListLayoutMode.fixedColumns}
                        constrainMode={ConstrainMode.unconstrained}
                        onRenderDetailsHeader={this.onRenderDetailsHeader}
                        onRenderDetailsFooter={this.onRenderDetailsFooter}
                        selectionPreservedOnEmptyClick
                        styles={this.gridStyles}
                        ariaLabelForSelectionColumn="Toggle selection"
                        ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                        checkButtonAriaLabel="select row"
                        onItemInvoked={this.onItemInvoked}
                        focusZoneProps={focusZoneProps}
                        selectionZoneProps={{
                        className: this.classNames.selectionZone,
                        }}
                    />
                </div>
            </>
        );
    }
}