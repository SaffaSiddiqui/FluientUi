import {JSX} from 'react';
import {interactionElement} from '../../core/base/interactionElement';
import { elementCategory } from '../../core/enums/elementCategory';
import { elementType } from '../../core/enums/elementType';
import * as React from 'react';
import { SearchBox, ISearchBoxStyles } from '@fluentui/react/lib/SearchBox';
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
import { IIconProps } from '@fluentui/react/lib/Icon';

export class searchBox extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.SearchBox, elementCategory.interaction, id, Name, title);
    }

    stackTokens: Partial<IStackTokens> = { childrenGap: 20 };
    filterIcon: IIconProps = { iconName: 'Filter' };
    searchBoxStyles: Partial<ISearchBoxStyles> = { root: { width: 200 } };

//    
    renderElement(): JSX.Element {
        return(
            <>
                {/* 1 */}
                <Stack tokens={this.stackTokens}>
                    <SearchBox placeholder="Search" onSearch={newValue => console.log('value is ' + newValue)} />
                    <SearchBox
                        placeholder="Search with no animation"
                        onSearch={newValue => console.log('value is ' + newValue)}
                        disableAnimation
                    />
                </Stack>
                {/* line brake */}
                <br></br><br></br>
                {/* 2 */}
                <SearchBox placeholder="Search" underlined={true} />
                {/* line brake */}
                <br></br><br></br>
                {/* 3 */}
                <SearchBox placeholder="Filter" iconProps={this.filterIcon} />
                {/* line brake */}
                <br></br><br></br>
                {/* 4 */}
                <SearchBox
                    styles={this.searchBoxStyles}
                    placeholder="Search"
                    onEscape={ev => {
                    console.log('Custom onEscape Called');
                    }}
                    onClear={ev => {
                    console.log('Custom onClear Called');
                    }}
                    onChange={(_, newValue) => console.log('SearchBox onChange fired: ' + newValue)}
                    onSearch={newValue => console.log('SearchBox onSearch fired: ' + newValue)}
                />
            </>
        );
    }
}