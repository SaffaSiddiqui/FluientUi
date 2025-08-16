import {JSX} from 'react';
import {elementCategory} from '../../core/enums/elementCategory';
import {elementType} from '../../core/enums/elementType';
import {interactionElement} from '../../core/base/interactionElement';
import * as React from 'react';
import { IActivityItemProps, ActivityItem, Icon, Link, mergeStyleSets } from '@fluentui/react';
import { TestImages } from '@fluentui/example-data';

export class ActivityItemElement extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.ActivityItem, elementCategory.interaction, id, Name, title);
    }


    classNames = mergeStyleSets({
        exampleRoot: {
            marginTop: '20px',
        },
        nameText: {
            fontWeight: 'bold',
        },
    });

    /* eslint-disable react/jsx-no-bind */
    activityItemExamples = [
        {
            key: 1,
            activityDescription: [
            <Link
                key={1}
                className={this.classNames.nameText}
                onClick={() => {
                alert('A name was clicked.');
                }}
            >
                Philippe Lampros
            </Link>,
            <span key={2}> commented</span>,
            ],
            activityIcon: <Icon iconName={'Message'} />,
            comments: [
            <span key={1}>Hello! I am making a comment and mentioning </span>,
            <Link
                key={2}
                className={this.classNames.nameText}
                onClick={() => {
                alert('An @mentioned name was clicked.');
                }}
            >
                @Anđela Debeljak
            </Link>,
            <span key={3}> in the text of the comment.</span>,
            ],
            timeStamp: 'Just now',
        },
        {
            key: 2,
            activityDescription: [
            <Link
                key={1}
                className={this.classNames.nameText}
                onClick={() => {
                alert('A name was clicked.');
                }}
            >
                Lisha Refai
            </Link>,
            <span key={2}> deleted </span>,
            <span key={3} className={this.classNames.nameText}>
                DocumentTitle.docx
            </span>,
            ],
            activityIcon: <Icon iconName={'Trash'} />,
            timeStamp: '2 hours ago',
        },
        {
            key: 3,
            activityDescription: [
            <Link
                key={1}
                className={this.classNames.nameText}
                onClick={() => {
                alert('A name was clicked.');
                }}
            >
                Julian Arvidsson
            </Link>,
            <span key={2}> moved </span>,
            <Link
                key={3}
                className={this.classNames.nameText}
                onClick={() => {
                alert('A document was clicked.');
                }}
            >
                PresentationTitle.pptx
            </Link>,
            <span key={4}> to </span>,
            <Link
                key={5}
                className={this.classNames.nameText}
                onClick={() => {
                alert('A folder was clicked.');
                }}
            >
                Destination Folder
            </Link>,
            ],
            activityIcon: <Icon iconName={'FabricMovetoFolder'} />,
            timeStamp: 'Yesterday',
        },
    ];
//
    _classNames = mergeStyleSets({
        exampleRoot: {
            marginTop: '20px',
        },
        nameText: {
            fontWeight: 'bold',
        },
    });
//
    __classNames = mergeStyleSets({
    exampleRoot: {
        marginTop: '20px',
    },
    nameText: {
        fontWeight: 'bold',
    },
    });

    __activityItemExamples: Partial<IActivityItemProps & React.ClassAttributes<{}>>[] = [
    {
        key: 1,
        activityDescription: [
        <span key={1} className={this.__classNames.nameText}>
            Tahlia Whittle
        </span>,
        <span key={2}> edited this file</span>,
        ],
        activityPersonas: [{ imageUrl: TestImages.personaFemale }],
        isCompact: true,
    },
    {
        key: 2,
        activityDescription: [
        <span key={1} className={this.__classNames.nameText}>
            Patrick Loton
        </span>,
        <span key={2}> and </span>,
        <span key={3} className={this.__classNames.nameText}>
            {' '}
            6 others
        </span>,
        ],
        activityPersonas: [
        { imageInitials: 'PT', text: 'Robert Larsson' },
        { imageUrl: TestImages.personaMale },
        { imageInitials: 'EC', text: 'Eduarda Costa' },
        ],
        isCompact: true,
    },
    {
        key: 3,
        activityDescription: [
        <span key={1} className={this.__classNames.nameText}>
            Sabrina De Luca
        </span>,
        <span key={2}> added this file</span>,
        ],
        activityIcon: <Icon iconName={'Add'} />,
        isCompact: true,
    },
    {
        key: 4,
        activityDescription: [
        <span key={1} className={this.__classNames.nameText}>
            Chuan Rojumanong
        </span>,
        <span key={2}> shared this file</span>,
        ],
        activityIcon: <Icon iconName={'Share'} />,
        isCompact: true,
    },
    ];






//
    renderElement(): JSX.Element {

        /* eslint-disable react/jsx-no-bind */
        const activityItemExamples: (IActivityItemProps & { key: string | number })[] = [
            {
            key: 1,
            activityDescription: [
                <Link
                key={1}
                className={this._classNames.nameText}
                onClick={() => {
                    alert('A name was clicked.');
                }}
                >
                Jack Howden
                </Link>,
                <span key={2}> renamed </span>,
                <span key={3} className={this._classNames.nameText}>
                DocumentTitle.docx
                </span>,
            ],
            activityPersonas: [{ imageUrl: TestImages.personaMale }],
            comments: 'Hello, this is the text of my basic comment!',
            timeStamp: '23m ago',
            },
            {
            key: 2,
            activityDescription: [
                <Link
                key={1}
                className={this._classNames.nameText}
                onClick={() => {
                    alert('A name was clicked.');
                }}
                >
                Javiera Márquez
                </Link>,
                <span key={2}> and </span>,
                <Link
                key={3}
                className={this._classNames.nameText}
                onClick={() => {
                    alert('A name was clicked.');
                }}
                >
                Amelia Povalіy
                </Link>,
                <span key={4}> edited </span>,
                <Link
                key={5}
                className={this._classNames.nameText}
                onClick={() => {
                    alert('A document was clicked.');
                }}
                >
                SpreadsheetTitle.xlsx
                </Link>,
            ],
            activityPersonas: [{ imageInitials: 'JM', text: 'Javiera Márquez' }, { imageUrl: TestImages.personaFemale }],
            timeStamp: '9:27 am',
            },
            {
            key: 3,
            activityDescription: [
                <Link
                key={1}
                className={this._classNames.nameText}
                onClick={() => {
                    alert('A name was clicked.');
                }}
                >
                Robert Larsson
                </Link>,
                <span key={2}> and </span>,
                <Link
                key={3}
                className={this._classNames.nameText}
                onClick={() => {
                    alert('A name was clicked.');
                }}
                >
                2 others
                </Link>,
                <span key={4}> commented </span>,
            ],
            activityPersonas: [
                { imageInitials: 'RL', text: 'Robert Larsson' },
                { imageUrl: TestImages.personaMale },
                { imageUrl: TestImages.personaFemale },
            ],
            timeStamp: '3 days ago',
            },
            {
            key: 4,
            activityDescription: [
                <Link
                key={1}
                className={this._classNames.nameText}
                onClick={() => {
                    alert('A name was clicked.');
                }}
                >
                Jin Cheng
                </Link>,
                <span key={2}> and </span>,
                <Link
                key={3}
                className={this._classNames.nameText}
                onClick={() => {
                    alert('A name was clicked.');
                }}
                >
                5 others
                </Link>,
                <span key={4}> edited this file</span>,
            ],
            activityPersonas: [
                { imageInitials: 'JC', text: 'Jin Cheng' },
                { imageUrl: TestImages.personaMale },
                { imageInitials: 'AL', text: 'Annie Lindqvist' },
                { imageUrl: TestImages.personaFemale },
                { imageUrl: TestImages.personaMale },
                { imageUrl: TestImages.personaMale },
            ],
            timeStamp: 'August 3, 2017',
            },
        ];
//




//
        return(
            <>
                {/* 1 */}
                <div>
                    {this.activityItemExamples.map((item: { key: string | number }) => (
                        <ActivityItem {...item} key={item.key} className={this.classNames.exampleRoot} />
                    ))}
                </div>
                {/* line break: */}
                <br></br><br></br>
                {/* 2 */}
                <div>
                    {activityItemExamples.map((item: { key: string | number }) => (
                        <ActivityItem {...item} key={item.key} className={this._classNames.exampleRoot} />
                    ))}
                </div>
                {/* line break: */}
                <br></br><br></br>
                {/* 3 */}
                <div>
                    {activityItemExamples.map((item: { key: string | number }) => (
                        <ActivityItem {...(item as IActivityItemProps)} key={item.key} className={this.__classNames.exampleRoot} />
                    ))}
                </div>
            </>
        );
    }
}