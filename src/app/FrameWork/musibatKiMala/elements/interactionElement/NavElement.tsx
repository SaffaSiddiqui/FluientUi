import {JSX} from 'react';
import {interactionElement} from '../../core/base/interactionElement';
import { elementCategory } from '../../core/enums/elementCategory';
import { elementType } from '../../core/enums/elementType';
import * as React from 'react';
import { Nav, INavLink, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';

export class NavElement extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.Navbar,elementCategory.interaction, id, Name, title);
    }

    navStyles: Partial<INavStyles> = {
        root: {
            width: 208,
            height: 350,
            boxSizing: 'border-box',
            border: '1px solid #eee',
            overflowY: 'auto',
        },
    };

    navLinkGroups: INavLinkGroup[] = [
        {
            links: [
                {
                    name: 'Home',
                    url: 'http://example.com',
                    expandAriaLabel: 'Expand Home section',
                    links: [
                        {
                            name: 'Activity',
                            url: 'http://msn.com',
                            key: 'key1',
                            target: '_blank',
                        },
                        {
                            name: 'MSN',
                            url: 'http://msn.com',
                            disabled: true,
                            key: 'key2',
                            target: '_blank',
                        },
                    ],
                    isExpanded: true,
                },
                {
                    name: 'Documents',
                    url: 'http://example.com',
                    key: 'key3',
                    isExpanded: true,
                    target: '_blank',
                },
                {
                    name: 'Pages',
                    url: 'http://msn.com',
                    key: 'key4',
                    target: '_blank',
                },
                {
                    name: 'Notebook',
                    url: 'http://msn.com',
                    key: 'key5',
                    disabled: true,
                },
                {
                    name: 'Communication and Media',
                    url: 'http://msn.com',
                    key: 'key6',
                    target: '_blank',
                },
                {
                    name: 'News',
                    url: 'http://cnn.com',
                    icon: 'News',
                    key: 'key7',
                    target: '_blank',
                },
            ],
        },
    ];
    _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
        if (item && item.name === 'News') {
            alert('News link clicked');
        }
    }
//
    _navStyles: Partial<INavStyles> = { root: { width: 300 } };

    _navLinkGroups: INavLinkGroup[] = [
        {
            name: 'Basic components',
            expandAriaLabel: 'Show more Basic components',
            links: [
                {
                    key: 'ActivityItem',
                    name: 'ActivityItem',
                    url: '#/examples/activityitem',
                },
                {
                    key: 'Breadcrumb',
                    name: 'Breadcrumb',
                    url: '#/examples/breadcrumb',
                },
                {
                    key: 'Button',
                    name: 'Button',
                    url: '#/examples/button',
                },
            ],
        },
        {
            name: 'Extended components',
            expandAriaLabel: 'Show more Extended components',
            links: [
                {
                    key: 'ColorPicker',
                    name: 'ColorPicker',
                    url: '#/examples/colorpicker',
                },
                {
                    key: 'ExtendedPeoplePicker',
                    name: 'ExtendedPeoplePicker',
                    url: '#/examples/extendedpeoplepicker',
                },
                {
                    key: 'GroupedList',
                    name: 'GroupedList',
                    url: '#/examples/groupedlist',
                },
            ],
        },
        {
            name: 'Utilities',
            expandAriaLabel: 'Show more Utilities',
            links: [
                {
                    key: 'FocusTrapZone',
                    name: 'FocusTrapZone',
                    url: '#/examples/focustrapzone',
                },
                {
                    key: 'FocusZone',
                    name: 'FocusZone',
                    url: '#/examples/focuszone',
                },
                {
                    key: 'MarqueeSelection',
                    name: 'MarqueeSelection',
                    url: '#/examples/marqueeselection',
                },
            ],
        },
    ];
//
    __navLinkGroups: INavLinkGroup[] = [
        {
            links: [
                {
                    name: 'Parent link 1',
                    url: 'http://example.com',
                    target: '_blank',
                    expandAriaLabel: 'Show more Parent link 1',
                    links: [
                        {
                            name: 'Child link 1',
                            url: 'http://example.com',
                            target: '_blank',
                        },
                        {
                            name: 'Child link 2',
                            url: 'http://example.com',
                            target: '_blank',
                            expandAriaLabel: 'Show more Child link 2',
                            links: [
                            {
                                name: '3rd level link 1',
                                url: 'http://example.com',
                                target: '_blank',
                            },
                            {
                                name: '3rd level link 2',
                                url: 'http://example.com',
                                target: '_blank',
                            },
                            ],
                        },
                        {
                            name: 'Child link 3',
                            url: 'http://example.com',
                            target: '_blank',
                        },
                    ],
                },
                {
                    name: 'Parent link 2',
                    url: 'http://example.com',
                    target: '_blank',
                    expandAriaLabel: 'Show more Parent link 2',
                    links: [
                        {
                            name: 'Child link 4',
                            url: 'http://example.com',
                            target: '_blank',
                        },
                    ],
                },
            ],
        },
    ];
//
    __navStyles: Partial<INavStyles> = { root: { width: 300 } };
    ___navLinkGroups: INavLinkGroup[] = [
        {
            name: 'Basic components',
            links: [
                {
                    key: 'ActivityItem',
                    name: 'ActivityItem',
                    url: '#/examples/activityitem',
                },
                {
                    key: 'Breadcrumb',
                    name: 'Breadcrumb',
                    url: '#/examples/breadcrumb',
                },
                {
                    key: 'Button',
                    name: 'Button',
                    url: '#/examples/button',
                },
            ],
        },
    ];
//
    ____navLinkGroups: INavLinkGroup[] = [
        {
            name: 'Pages',
            links: [
                { name: 'Activity', url: 'http://msn.com', key: 'key1', target: '_blank' },
                { name: 'News', url: 'http://msn.com', key: 'key2', target: '_blank' },
            ],
        },
        {
            name: 'More pages',
            links: [
                { name: 'Settings', url: 'http://msn.com', key: 'key3', target: '_blank' },
                { name: 'Notes', url: 'http://msn.com', key: 'key4', target: '_blank' },
            ],
        },
    ];
    _onRenderGroupHeader(group: INavLinkGroup): JSX.Element {
        return <h3>{group.name}</h3>;
    }








    renderElement(): JSX.Element {
        return(
            <>
                {/* 1 */}
                <Nav
                    onLinkClick={this._onLinkClick}
                    selectedKey="key3"
                    ariaLabel="Nav basic example"
                    styles={this.navStyles}
                    groups={this.navLinkGroups}
                />
                {/* line break */}
                <br></br><br></br>
                {/* 2 */}
                <Nav 
                    styles={this._navStyles} 
                    ariaLabel="Nav example similar to one found in this demo page" 
                    groups={this._navLinkGroups} 
                />
                {/* line break */}
                <br></br><br></br>
                {/* 3 */}
                <Nav 
                    ariaLabel="Nav example with nested links" 
                    groups={this.__navLinkGroups} 
                />
                {/* line break */}
                <br></br><br></br>
                {/* 4 */}
                <Nav
                    styles={this.__navStyles}
                    groups={this.___navLinkGroups}
                    focusZoneProps={{
                        defaultTabbableElement: "a[title='Breadcrumb']",
                        allowFocusRoot: false,
                    }}
                />
                {/* line break */}
                <br></br><br></br>
                {/* 5 */}
                <Nav
                    onRenderGroupHeader={this._onRenderGroupHeader}
                    ariaLabel="Nav example with custom group headers"
                    groups={this.____navLinkGroups}
                />
            </>
        );
    }
}