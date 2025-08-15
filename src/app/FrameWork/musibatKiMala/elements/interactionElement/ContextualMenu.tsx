import {JSX} from 'react';
import {interactionElement} from '../../core/base/interactionElement';
import { elementCategory } from '../../core/enums/elementCategory';
import { elementType } from '../../core/enums/elementType';
import * as React from 'react';
import { IContextualMenuListProps, IContextualMenuItem, DirectionalHint, IContextualMenuItemProps, ContextualMenuItemType, IContextualMenuProps } from '@fluentui/react/lib/ContextualMenu';
import { DefaultButton, IconButton } from '@fluentui/react/lib/Button';
import { useConst, useBoolean } from '@fluentui/react-hooks';
import { Callout } from '@fluentui/react/lib/Callout';
import { Icon } from '@fluentui/react/lib/Icon';
import { mergeStyleSets, getTheme } from '@fluentui/react/lib/Styling';
import { FocusZoneDirection } from '@fluentui/react/lib/FocusZone';
import { css } from '@fluentui/react/lib/Utilities';
import { ISearchBoxStyles, SearchBox } from '@fluentui/react/lib/SearchBox';
import { Text } from '@fluentui/react/lib/Text';
import { IRenderFunction } from '@fluentui/react/lib/Utilities';
import { KeyCodes } from '@fluentui/react';

export class ContextualMenu extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.ContextualMenu, elementCategory.interaction, id, Name, title);
    }

    menuProps: IContextualMenuProps = {
        shouldFocusOnMount: true,
        items: [
            { key: 'newItem', text: 'New', onClick: () => console.log('New clicked') },
            { key: 'divider_1', itemType: ContextualMenuItemType.Divider },
            { key: 'rename', text: 'Rename', onClick: () => console.log('Rename clicked') },
            { key: 'edit', text: 'Edit', onClick: () => console.log('Edit clicked') },
            { key: 'properties', text: 'Properties', onClick: () => console.log('Properties clicked') },
            { key: 'linkNoTarget', text: 'Link same window', href: 'http://bing.com' },
            { key: 'linkWithTarget', text: 'Link new window', href: 'http://bing.com', target: '_blank' },
            {
                key: 'linkWithOnClick',
                name: 'Link click',
                href: 'http://bing.com',
                onClick: (ev: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
                alert('Link clicked');
                ev.preventDefault();
                },
                target: '_blank',
            },
            {
                key: 'disabled',
                text: 'Disabled item',
                disabled: true,
                onClick: () => console.error('Disabled item should not be clickable.'),
            },
        ],
    };
// 
    theme = getTheme();
    classNames = mergeStyleSets({
        iconContainer: {
            position: 'relative',
            margin: '0 4px',
            height: 32,
            width: 14,
        },
        logoIcon: {
            position: 'absolute',
            left: 0,
            right: 0,
            color: this.theme.palette.themeDarkAlt,
        },
        logoFillIcon: {
            position: 'absolute',
            left: 0,
            right: 0,
            color: this.theme.palette.white,
        },
    });
//
    _menuProps = useConst<IContextualMenuProps>(() => ({
        shouldFocusOnMount: true,
        items: [
            {
                key: 'Later Today',
                iconProps: { iconName: 'Clock' },
                text: 'Later Today',
                secondaryText: '7:00 PM',
            },
            {
                key: 'Tomorrow',
                iconProps: { iconName: 'Coffeescript' },
                text: 'Tomorrow',
                secondaryText: 'Thu. 8:00 AM',
            },
            {
                key: 'This Weekend',
                iconProps: { iconName: 'Vacation' },
                text: 'This Weekend',
                secondaryText: 'Sat. 10:00 AM',
            },
            {
                key: 'Next Week',
                iconProps: { iconName: 'Suitcase' },
                text: 'Next Week',
                secondaryText: 'Mon. 8:00 AM',
            },
        ],
    }));
//
    __menuProps = useConst<IContextualMenuProps>(() => ({
        items: [
            {
                key: 'section1',
                itemType: ContextualMenuItemType.Section,
                sectionProps: {
                topDivider: true,
                bottomDivider: true,
                title: 'Actions',
                items: [
                    { key: 'newItem', text: 'New' },
                    { key: 'deleteItem', text: 'Delete' },
                ],
                },
            },
            {
                key: 'section2',
                itemType: ContextualMenuItemType.Section,
                sectionProps: {
                title: 'Social',
                items: [
                    { key: 'share', text: 'Share' },
                    { key: 'print', text: 'Print' },
                    { key: 'music', text: 'Music' },
                ],
                },
            },
            {
                key: 'section3',
                itemType: ContextualMenuItemType.Section,
                sectionProps: {
                title: 'Navigation',
                items: [{ key: 'Bing', text: 'Go to Bing', href: 'http://www.bing.com', target: '_blank' }],
                },
            },
        ],
    }));
//
    keys: string[] = [
        'newItem',
        'share',
        'mobile',
        'enablePrint',
        'enableMusic',
        'newSub',
        'emailMessage',
        'calendarEvent',
        'disabledNewSub',
        'disabledEmailMessage',
        'disabledCalendarEvent',
        'splitButtonSubMenuLeftDirection',
        'emailMessageLeft',
        'calendarEventLeft',
        'disabledPrimarySplit',
    ];
//
    filteredItemsStyle: React.CSSProperties = {
        width: '100%',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
    searchBoxStyles: ISearchBoxStyles = {
        root: { margin: '8px' },
    };

    menuItems: IContextualMenuItem[] = [
        { key: 'newItem', text: 'New', onClick: () => console.log('New clicked') },
        { key: 'rename', text: 'Rename', onClick: () => console.log('Rename clicked') },
        { key: 'edit', text: 'Edit', onClick: () => console.log('Edit clicked') },
        { key: 'properties', text: 'Properties', onClick: () => console.log('Properties clicked') },
        { key: 'linkNoTarget', text: 'Link same window', href: 'http://bing.com' },
        { key: 'linkWithTarget', text: 'Link new window', href: 'http://bing.com', target: '_blank' },
        {
            key: 'linkWithOnClick',
            text: 'Link click',
            href: 'http://bing.com',
            onClick: (ev: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
            alert('Link clicked');
            ev.preventDefault();
            },
            target: '_blank',
        },
        {
            key: 'disabled',
            text: 'Disabled item',
            disabled: true,
            onClick: () => console.error('Disabled item should not be clickable.'),
        },
    ];
    
//





//
    renderElement(): JSX.Element {

        const [showCallout, { setTrue: onShowCallout, setFalse: onHideCallout }] = useBoolean(false);

        const menuProps: IContextualMenuProps = useConst({
            shouldFocusOnMount: true,
            items: [
                {
                    key: 'openInWord',
                    text: 'Open in Word',
                    iconProps: {},
                    onRenderIcon: (props: IContextualMenuItemProps) => {
                    return (
                        <span className={this.classNames.iconContainer}>
                        <Icon iconName="WordLogoFill16" className={this.classNames.logoFillIcon} />
                        <Icon iconName="WordLogo16" className={this.classNames.logoIcon} />
                        </span>
                    );
                    },
                },
                { key: 'newItem', iconProps: { iconName: 'Add' }, text: 'New' },
                {
                    key: 'upload',
                    onClick: onShowCallout,
                    iconProps: { iconName: 'Upload', style: { color: 'salmon' } },
                    text: 'Upload (Click for popup)',
                    title: 'Upload a file',
                },
                { key: 'divider_1', itemType: ContextualMenuItemType.Divider },
                { key: 'share', iconProps: { iconName: 'Share' }, text: 'Share' },
                { key: 'print', iconProps: { iconName: 'Print' }, text: 'Print' },
                { key: 'music', iconProps: { iconName: 'MusicInCollectionFill' }, text: 'Music' },
            ],
        });
//
    const [selection, setSelection] = React.useState<{ [key: string]: boolean }>({});

    const onToggleSelect = React.useCallback(
        (ev?: React.MouseEvent<HTMLButtonElement>, item?: IContextualMenuItemProp): void => {
        ev && ev.preventDefault();

        if (item) {
            setSelection({ ...selection, [item.key]: selection[item.key] === undefined ? true : !selection[item.key] });
        }
        },
        [selection],
    );

    const _menuProps: IContextualMenuProps = React.useMemo(
        () => ({
        shouldFocusOnMount: true,
        items: [
            { key: this.keys[0], text: 'New', canCheck: true, isChecked: selection[this.keys[0]], onClick: onToggleSelect },
            { key: this.keys[1], text: 'Share', canCheck: true, isChecked: selection[this.keys[1]], onClick: onToggleSelect },
            { key: this.keys[2], text: 'Mobile', canCheck: true, isChecked: selection[this.keys[2]], onClick: onToggleSelect },
            { key: 'divider_1', itemType: ContextualMenuItemType.Divider },
            { key: this.keys[3], text: 'Print', canCheck: true, isChecked: selection[this.keys[3]], onClick: onToggleSelect },
            { key: this.keys[4], text: 'Music', canCheck: true, isChecked: selection[this.keys[4]], onClick: onToggleSelect },
            {
                key: this.keys[5],
                iconProps: {
                    iconName: 'MusicInCollectionFill',
                },
                subMenuProps: {
                    items: [
                    {
                        key: this.keys[6],
                        text: 'Email message',
                        canCheck: true,
                        isChecked: selection[this.keys[6]],
                        onClick: onToggleSelect,
                    },
                    {
                        key: this.keys[7],
                        text: 'Calendar event',
                        canCheck: true,
                        isChecked: selection[this.keys[7]],
                        onClick: onToggleSelect,
                    },
                    ],
                },
                text: 'Split Button',
                canCheck: true,
                isChecked: selection[this.keys[5]],
                split: true,
                onClick: onToggleSelect,
            },
            {
                key: this.keys[8],
                iconProps: {
                    iconName: 'MusicInCollectionFill',
                },
                subMenuProps: {
                    items: [
                    {
                        key: this.keys[9],
                        text: 'Email message',
                        canCheck: true,
                        isChecked: selection[this.keys[9]],
                        onClick: onToggleSelect,
                    },
                    {
                        key: this.keys[10],
                        text: 'Calendar event',
                        canCheck: true,
                        isChecked: selection[this.keys[10]],
                        onClick: onToggleSelect,
                    },
                    ],
                },
                text: 'Split Button',
                canCheck: true,
                checked: true,
                isChecked: selection[this.keys[8]],
                split: true,
                onClick: onToggleSelect,
                disabled: true,
            },
            {
                key: this.keys[11],
                iconProps: {
                    iconName: 'MusicInCollectionFill',
                },
                subMenuProps: {
                    directionalHint: DirectionalHint.leftCenter,
                    items: [
                    {
                        key: this.keys[12],
                        text: 'Email message',
                        canCheck: true,
                        isChecked: selection[this.keys[12]],
                        onClick: onToggleSelect,
                    },
                    {
                        key: this.keys[13],
                        text: 'Calendar event',
                        canCheck: true,
                        isChecked: selection[this.keys[13]],
                        onClick: onToggleSelect,
                    },
                    ],
                },
                text: 'Split Button Left Menu',
                canCheck: true,
                isChecked: selection[this.keys[11]],
                split: true,
                onClick: onToggleSelect,
            },
            {
                key: this.keys[12],
                iconProps: {
                    iconName: 'MusicInCollectionFill',
                },
                subMenuProps: {
                    items: [
                    {
                        key: this.keys[12],
                        name: 'Email message',
                        canCheck: true,
                        isChecked: selection[this.keys[12]],
                        onClick: onToggleSelect,
                    },
                    ],
                },
                name: 'Split Button Disabled Primary',
                split: true,
                primaryDisabled: true,
            },
            {
                key: this.keys[13],
                iconProps: {
                    iconName: selection[this.keys[13]] ? 'SingleBookmarkSolid' : 'SingleBookmark',
                },
                name: selection[this.keys[13]] ? 'Toggled command no checkmark' : 'Toggle command no checkmark',
                canCheck: false,
                isChecked: selection[this.keys[13]],
                onClick: onToggleSelect,
            },
        ],
        }),
        [selection, onToggleSelect],
    );
//
    const __menuProps = useConst<IContextualMenuProps>(() => ({
        shouldFocusOnMount: true,
        directionalHint: DirectionalHint.bottomLeftEdge,
        className: classNames.menu,
        items: [
            { key: 'newItem', text: 'New' },
            { key: 'upload', text: 'Upload' },
            { key: 'divider_1', itemType: ContextualMenuItemType.Divider },
            {
                key: 'charm',
                text: 'Charm',
                subMenuProps: {
                focusZoneProps: { direction: FocusZoneDirection.bidirectional },
                items: [
                    { key: 'none', text: 'None' },
                    { key: 'bulb', text: 'Lightbulb', onRender: renderCharmMenuItem, className: classNames.item },
                    { key: 'run', text: 'Running', onRender: renderCharmMenuItem, className: classNames.item },
                    { key: 'plane', text: 'Airplane', onRender: renderCharmMenuItem, className: classNames.item },
                    { key: 'page', text: 'Page', onRender: renderCharmMenuItem, className: classNames.item },
                    { key: 'cake', text: 'Cake', onRender: renderCharmMenuItem, className: classNames.item },
                    { key: 'soccer', text: 'Soccer', onRender: renderCharmMenuItem, className: classNames.item },
                    { key: 'home', text: 'Home', onRender: renderCharmMenuItem, className: classNames.item },
                    { key: 'emoji', text: 'Emoji2', onRender: renderCharmMenuItem, className: classNames.item },
                    { key: 'work', text: 'Work', onRender: renderCharmMenuItem, className: classNames.item },
                    { key: 'coffee', text: 'Coffee', onRender: renderCharmMenuItem, className: classNames.item },
                    { key: 'people', text: 'People', onRender: renderCharmMenuItem, className: classNames.item },
                    { key: 'stopwatch', text: 'Stopwatch', onRender: renderCharmMenuItem, className: classNames.item },
                    { key: 'music', text: 'MusicInCollectionFill', onRender: renderCharmMenuItem, className: classNames.item },
                    { key: 'lock', text: 'Lock', onRender: renderCharmMenuItem, className: classNames.item },
                ],
                },
            },
            {
                key: 'categories',
                text: 'Categorize',
                subMenuProps: {
                items: [
                    {
                        key: 'categories',
                        text: 'categories',
                        categoryList: [
                            { name: 'Personal', color: 'yellow' },
                            { name: 'Work', color: 'green' },
                            { name: 'Birthday', color: 'blue' },
                            { name: 'Spam', color: 'grey' },
                            { name: 'Urgent', color: 'red' },
                            { name: 'Hobbies', color: 'black' },
                        ],
                        onRender: renderCategoriesList,
                    },
                    { key: 'divider_1', itemType: ContextualMenuItemType.Divider },
                    { key: 'clear', text: 'Clear categories' },
                    { key: 'manage', text: 'Manage categories' },
                ],
                },
            },
        ],
    }));
//
    const [items, setItems] = React.useState(this.menuItems);

    const onAbort = React.useCallback(() => {
        setItems(this.menuItems);
    }, []);

    const onChange = React.useCallback((ev: React.ChangeEvent<HTMLInputElement>, newValue: string) => {
        const filteredItems = this.menuItems.filter(
        item => item.text && item.text.toLowerCase().indexOf(newValue.toLowerCase()) !== -1,
        );

        if (!filteredItems || !filteredItems.length) {
        filteredItems.push({
            key: 'no_results',
            onRender: (item, dismissMenu) => (
            <div key="no_results" style={this.filteredItemsStyle}>
                <Icon iconName="SearchIssue" title="No actions found" />
                <span>No actions found</span>
            </div>
            ),
        });
        }

        setItems(filteredItems);
    }, []);

    const onKeyDown = React.useCallback((e: any) => {
        /* Key Up, but we are not at the beginning of the text: stop event propagation to prevent ContextualMenu to focus */
        if (e.target.selectionStart > 0 && e.which === KeyCodes.up) {
        e.stopPropagation();
        }
        /* Key Down, but we are not at the end of the text: stop event propagation to prevent ContextualMenu to focus */
        if (e.target.selectionStart !== e.target.value.length && e.which === KeyCodes.down) {
        e.stopPropagation();
        }
    }, []);

    const onDismiss = React.useCallback(() => {
        setItems(this.menuItems);
    }, []);

    const renderMenuList = React.useCallback(
        (menuListProps: IContextualMenuListProps, defaultRender: IRenderFunction<IContextualMenuListProps>) => {
        return (
            <div>
            <div style={{ borderBottom: '1px solid #ccc' }}>
                <SearchBox
                ariaLabel="Filter actions by text"
                placeholder="Filter actions"
                onAbort={onAbort}
                onChange={onChange}
                onKeyDown={onKeyDown}
                styles={this.searchBoxStyles}
                />
            </div>
            {defaultRender(menuListProps)}
            </div>
        );
        },
        [onAbort, onChange, onKeyDown],
    );

    const ___menuProps = React.useMemo(
        () => ({
        calloutProps: {
            // This is needed for Android devices since focus automatically goes to the first focusable element in the
            // callout, which in this case is the SearchBox. This in turn opens the keyboard, which on the aforementioned
            // Android devices causes a window resize that will dismiss the menu if this prop is not set to true.
            preventDismissOnResize: true,
        },
        onRenderMenuList: renderMenuList,
        title: 'Actions',
        shouldFocusOnMount: true,
        items,
        focusZoneProps: {
            shouldInputLoseFocusOnArrowKey: () => true /* Allow up and down arrows to move focus out of the SearchBox */,
        },
        onDismiss,
        }),
        [items, renderMenuList, onDismiss],
    );
//
    const ____menuProps = useConst<IContextualMenuProps>(() => ({
        shouldFocusOnMount: true,
        items: [
            {
                key: 'Actions',
                itemType: ContextualMenuItemType.Header,
                text: 'Actions',
                itemProps: { lang: 'en-us' },
            },
            {
                key: 'upload',
                iconProps: { iconName: 'Upload', style: { color: 'salmon' } },
                text: 'Upload',
                title: 'Upload a file',
            },
            { key: 'rename', text: 'Rename' },
            {
                key: 'share',
                iconProps: { iconName: 'Share' },
                subMenuProps: {
                    items: [
                        { key: 'sharetoemail', text: 'Share to Email', iconProps: { iconName: 'Mail' } },
                        { key: 'sharetofacebook', text: 'Share to Facebook' },
                        { key: 'sharetotwitter', text: 'Share to Twitter', iconProps: { iconName: 'Share' } },
                    ],
                },
                text: 'Sharing',
            },
            {
                key: 'navigation',
                itemType: ContextualMenuItemType.Header,
                text: 'Navigation',
            },
            { key: 'properties', text: 'Properties' },
            { key: 'print', iconProps: { iconName: 'Print' }, text: 'Print' },
            { key: 'Bing', text: 'Go to Bing', href: 'http://www.bing.com', target: '_blank' },
        ],
    }));
//
    const menuItems: IContextualMenuItem[] = [
        {
            key: 'newItem',
            subMenuProps: {
                items: [
                { key: 'emailMessage', text: 'Email message', ariaDescription: 'Emails are fun' },
                {
                    key: 'calendarEvent',
                    text: 'Calendar event',
                    ariaDescription: 'Calendar events are even more fun',
                },
                ],
            },
            href: 'https://bing.com',
            text: 'New',
            target: '_blank',
            ariaDescription: 'Additional information about new item',
        },
        {
            key: 'share',
            subMenuProps: {
                items: [
                { key: 'sharetotwitter', text: 'Share to Twitter' },
                { key: 'sharetofacebook', text: 'Share to Facebook' },
                {
                    key: 'sharetoemail',
                    text: 'Share to Email',
                    subMenuProps: {
                    items: [
                        { key: 'sharetooutlook_1', text: 'Share to Outlook', title: 'Share to Outlook' },
                        { key: 'sharetogmail_1', text: 'Share to Gmail', title: 'Share to Gmail' },
                    ],
                    },
                },
                ],
            },
            text: 'Share',
            ariaDescription: 'Additional information about share item',
        },
        {
            key: 'shareSplit',
            split: true,
            'aria-roledescription': 'split button',
            subMenuProps: {
                items: [
                { key: 'sharetotwittersplit', text: 'Share to Twitter' },
                { key: 'sharetofacebooksplit', text: 'Share to Facebook' },
                {
                    key: 'sharetoemailsplit',
                    text: 'Share to Email',
                    subMenuProps: {
                    items: [
                        { key: 'sharetooutlooksplit_1', text: 'Share to Outlook', title: 'Share to Outlook' },
                        { key: 'sharetogmailsplit_1', text: 'Share to Gmail', title: 'Share to Gmail' },
                    ],
                    },
                },
                ],
            },
            text: 'Share w/ Split',
            ariaDescription: 'Additional information about share split item',
        },
    ];
    const _____menuProps = useConst<IContextualMenuProps>(() => ({
        items: menuItems,
    }));





//        
        return(
            <>
                {/* 1 */}
                <DefaultButton text="Click for ContextualMenu" menuProps={this.menuProps} />
                {/* line breake */}
                <br></br><br></br><br></br>
                {/* 2 */}
                <div>
                    <DefaultButton text="Click for ContextualMenu" menuProps={menuProps} />
                    {showCallout && (
                        <Callout setInitialFocus onDismiss={onHideCallout}>
                        <DefaultButton onClick={onHideCallout} text="Hello Popup" />
                        </Callout>
                    )}
                </div>
                {/* line breake */}
                <br></br><br></br>
                {/* 3 */}
                <DefaultButton text="Click for ContextualMenu" menuProps={this._menuProps} />
                {/* line breake */}
                <br></br><br></br>
                {/* 4 */}
                <DefaultButton text="Click for ContextualMenu" menuProps={this.__menuProps} />
                {/* line breake */}
                <br></br><br></br>
                {/* 5 */}
                <DefaultButton text="Click for ContextualMenu" menuProps={_menuProps} />
                {/* line breake */}
                <br></br><br></br>
                {/* 6 */}
                <DefaultButton text="Click for ContextualMenu" menuProps={__menuProps} />
                {/* line breake */}
                <br></br><br></br>
                {/* 7 */}
                <p>
                <Text>
                    Warning: adding an input to a menu is not technically allowed, and will trigger errors in Accessibility
                    Insights and axe-core. However, real world accessibility issues are minimal and not blocking.
                </Text>
                </p>
                <DefaultButton text="Click for ContextualMenu" menuProps={___menuProps} />
                {/* line breake */}
                <br></br><br></br>
                {/* 8 */}
                 <p>
                    Note: this example demonstrates how to use the Header menu item type as a standalone menu item. For semantically
                    grouped options, refer to the <code>Contextual Menu with section headers</code> example.
                </p>
                <DefaultButton text="Click for ContextualMenu" menuProps={____menuProps} />
                {/* line breake */}
                <br></br><br></br>
                {/* 9 */}
                <DefaultButton text="Click for ContextualMenu" menuProps={_____menuProps} />
            </>
        );
    }
}


/* 6 */
function renderCharmMenuItem(item: IContextualMenuItem, dismissMenu: () => void): JSX.Element {
  return (
    <IconButton
      iconProps={{ iconName: item.text }}
      className="ms-ContextualMenu-link"
      data-is-focusable
      onClick={dismissMenu}
    />
  );
}

function renderCategoriesList(item: IContextualMenuItem): JSX.Element {
  return (
    <ul className={classNames.categoriesList}>
      <li className="ms-ContextualMenu-item">
        {item.categoryList.map((category: { name: string; color: string }) => (
          <DefaultButton
            className={css('ms-ContextualMenu-link', classNames.button)}
            role="menuitem"
            key={category.name}
          >
            <div>
              <span style={{ backgroundColor: category.color, width: 24, height: 24, verticalAlign: 'top' }} />
              <span className="ms-ContextualMenu-itemText">{category.name}</span>
            </div>
          </DefaultButton>
        ))}
      </li>
    </ul>
  );
}

const classNames = mergeStyleSets({
  menu: {
    textAlign: 'center',
    maxWidth: 180,
    selectors: {
      '.ms-ContextualMenu-item': {
        height: 'auto',
      },
    },
  },
  item: {
    display: 'inline-block',
    width: 40,
    height: 40,
    lineHeight: 40,
    textAlign: 'center',
    verticalAlign: 'middle',
    marginBottom: 8,
    cursor: 'pointer',
    selectors: {
      '&:hover': {
        backgroundColor: '#eaeaea',
      },
    },
  },
  categoriesList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  button: {
    width: '40%',
    margin: '2%',
  },
});