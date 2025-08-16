import {JSX} from 'react';
import {elementCategory} from '../../core/enums/elementCategory';
import {elementType} from '../../core/enums/elementType';
import {interactionElement} from '../../core/base/interactionElement';
import * as React from 'react';
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardActions,
  DocumentCardLocation,
  DocumentCardDetails,
  DocumentCardPreview,
  DocumentCardTitle,
  DocumentCardLogo,
  DocumentCardStatus,
  IDocumentCardLogoProps,
  DocumentCardImage,
  IDocumentCardStyles,
  IDocumentCardPreviewProps,
  DocumentCardType,
  IDocumentCardActivityPerson,
} from '@fluentui/react/lib/DocumentCard';
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
import { IIconProps } from '@fluentui/react/lib/Icon';
import { getTheme, mergeStyles } from '@fluentui/react/lib/Styling';
import { ImageFit } from '@fluentui/react/lib/Image';
import { TestImages } from '@fluentui/example-data';

export class DocumentCardElement extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.DocumentCard, elementCategory.interaction, id, Name, title);
    }

    previewProps: IDocumentCardPreviewProps = {
    previewImages: [
        {
        name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
        linkProps: {
            href: 'http://bing.com',
            target: '_blank',
        },
        previewImageSrc: TestImages.documentPreview,
        iconSrc: TestImages.iconPpt,
        imageFit: ImageFit.cover,
        width: 318,
        height: 196,
        },
    ],
    };
    DocumentCardActivityPeople = [{ name: 'Annie Lindqvist', profileImageSrc: TestImages.personaFemale }];
//
    _previewProps: IDocumentCardPreviewProps = {
    getOverflowDocumentCountText: (overflowCount: number) => `+${overflowCount} more`,
    previewImages: [
        {
        name: '2016 Conference Presentation',
        linkProps: {
            href: 'http://bing.com',
            target: '_blank',
        },
        previewImageSrc: TestImages.documentPreview,
        iconSrc: TestImages.iconPpt,
        imageFit: ImageFit.cover,
        width: 318,
        height: 196,
        },
        {
        name: 'New Contoso Collaboration for Conference Presentation Draft',
        linkProps: {
            href: 'http://bing.com',
            target: '_blank',
        },
        previewImageSrc: TestImages.documentPreviewTwo,
        iconSrc: TestImages.iconPpt,
        imageFit: ImageFit.cover,
        width: 318,
        height: 196,
        },
        {
        name: 'Spec Sheet for design',
        linkProps: {
            href: 'http://bing.com',
            target: '_blank',
        },
        previewImageSrc: TestImages.documentPreviewThree,
        iconSrc: TestImages.iconPpt,
        imageFit: ImageFit.cover,
        width: 318,
        height: 196,
        },
        {
        name: 'Contoso Marketing Presentation',
        linkProps: {
            href: 'http://bing.com',
            target: '_blank',
        },
        previewImageSrc: TestImages.documentPreview,
        iconSrc: TestImages.iconPpt,
        imageFit: ImageFit.cover,
        width: 318,
        height: 196,
        },
        {
        name: 'Notes from Ignite conference',
        linkProps: {
            href: 'http://bing.com',
            target: '_blank',
        },
        previewImageSrc: TestImages.documentPreviewTwo,
        iconSrc: TestImages.iconPpt,
        imageFit: ImageFit.cover,
        width: 318,
        height: 196,
        },
        {
        name: 'FY17 Cost Projections',
        linkProps: {
            href: 'http://bing.com',
            target: '_blank',
        },
        previewImageSrc: TestImages.documentPreviewThree,
        iconSrc: TestImages.iconPpt,
        imageFit: ImageFit.cover,
        width: 318,
        height: 196,
        },
    ],
    };
    onActionClick = (action: string, ev: React.MouseEvent<HTMLElement>): void => {
    console.log(`You clicked the ${action} action`);
    ev.stopPropagation();
    ev.preventDefault();
    };

    documentCardActions = [
    {
        iconProps: { iconName: 'Share' },
        onClick: this.onActionClick.bind(this, 'share'),
        ariaLabel: 'share action',
    },
    {
        iconProps: { iconName: 'Pin' },
        onClick: this.onActionClick.bind(this, 'pin'),
        ariaLabel: 'pin action',
    },
    {
        iconProps: { iconName: 'Ringer' },
        onClick: this.onActionClick.bind(this, 'notifications'),
        ariaLabel: 'notifications action',
    },
    ];
//
    people: IDocumentCardActivityPerson[] = [
        { name: 'Annie Lindqvist', profileImageSrc: TestImages.personaFemale },
        { name: 'Roko Kolar', profileImageSrc: '', initials: 'RK' },
        { name: 'Aaron Reid', profileImageSrc: TestImages.personaMale },
        { name: 'Christian Bergqvist', profileImageSrc: '', initials: 'CB' },
    ];

    oneNoteIconProps: IIconProps = {
        iconName: 'OneNoteLogo',
        styles: { root: { color: '#813a7c', fontSize: '120px', width: '120px', height: '120px' } },
    };
//
    conversationTileClass = mergeStyles({ height: 182 });
    
    _people: IDocumentCardActivityPerson[] = [
        { name: 'Annie Lindqvist', profileImageSrc: TestImages.personaFemale },
        { name: 'Roko Kolar', profileImageSrc: '', initials: 'RK' },
        { name: 'Aaron Reid', profileImageSrc: TestImages.personaMale },
        { name: 'Christian Bergqvist', profileImageSrc: '', initials: 'CB' },
        { name: 'Greta Lundberg', profileImageSrc: TestImages.personaFemale },
        { name: 'Maor Sharitt', profileImageSrc: TestImages.personaMale },
        { name: 'Velatine Lourvric', profileImageSrc: '', initials: 'VL' },
        { name: 'Kat Larrson', profileImageSrc: TestImages.personaFemale },
    ];




//
    renderElement(): JSX.Element {

        const stackTokens: IStackTokens = { childrenGap: 20 };
        const theme = getTheme();
        const { palette, fonts } = theme;

        const people: IDocumentCardActivityPerson[] = [
        { name: 'Annie Lindqvist', profileImageSrc: TestImages.personaFemale },
        { name: 'Roko Kolar', profileImageSrc: '', initials: 'RK' },
        { name: 'Aaron Reid', profileImageSrc: TestImages.personaMale },
        { name: 'Christian Bergqvist', profileImageSrc: '', initials: 'CB' },
        ];

        const previewPropsUsingIcon: IDocumentCardPreviewProps = {
        previewImages: [
            {
            previewIconProps: {
                iconName: 'OpenFile',
                styles: { root: { fontSize: fonts.superLarge.fontSize, color: palette.white } },
            },
            width: 144,
            },
        ],
        styles: { previewIcon: { backgroundColor: palette.themePrimary } },
        };

        const previewProps: IDocumentCardPreviewProps = {
        getOverflowDocumentCountText: (overflowCount: number) => `+${overflowCount} more`,
        previewImages: [
            {
            name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: TestImages.documentPreview,
            iconSrc: TestImages.iconPpt,
            width: 144,
            },
            {
            name: 'New Contoso Collaboration for Conference Presentation Draft',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: TestImages.documentPreviewTwo,
            iconSrc: TestImages.iconPpt,
            width: 144,
            },
            {
            name: 'Spec Sheet for design',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: TestImages.documentPreviewThree,
            iconSrc: TestImages.iconPpt,
            width: 144,
            },
            {
            name: 'Contoso Marketing Presentation',
            linkProps: {
                href: 'http://bing.com',
                target: '_blank',
            },
            previewImageSrc: TestImages.documentPreview,
            iconSrc: TestImages.iconPpt,
            width: 144,
            },
        ],
        };

        const previewOutlookUsingIcon: IDocumentCardPreviewProps = {
        previewImages: [
            {
            previewIconProps: {
                iconName: 'OutlookLogo',
                styles: {
                root: {
                    fontSize: fonts.superLarge.fontSize,
                    color: '#0078d7',
                    backgroundColor: palette.neutralLighterAlt,
                },
                },
            },
            width: 144,
            },
        ],
        styles: {
            previewIcon: { backgroundColor: palette.neutralLighterAlt },
        },
        };
//
        const cardStyles: IDocumentCardStyles = {
            root: { display: 'inline-block', marginRight: 20, marginBottom: 20, width: 320 },
        };
//
        const logoProps: IDocumentCardLogoProps = {
            logoIcon: 'OutlookLogo',
        };

        const _cardStyles: IDocumentCardStyles = {
            root: { display: 'inline-block', marginRight: 20, width: 320 },
        };





//
        return(
            <>
                {/* 1 */}
                <DocumentCard
                    aria-label="Default Document Card with large file name. Created by Annie Lindqvist a few minutes ago."
                    onClickHref="http://bing.com"
                >
                    <DocumentCardPreview {...this.previewProps} />
                    <DocumentCardTitle
                    title={
                        'Large_file_name_with_underscores_used_to_separate_all_of_the_words_and_there_are_so_many_words_' +
                        'it_needs_truncating.pptx'
                    }
                    shouldTruncate
                    />
                    <DocumentCardActivity activity="Created a few minutes ago" people={this.DocumentCardActivityPeople} />
                </DocumentCard>
                {/* line break */}
                <br></br><br></br>
                {/* 2 */}
                <Stack tokens={stackTokens}>
                    <DocumentCard
                        aria-label="Document Card with document preview. Revenue stream proposal fiscal year 2016 version 2.
                    Created by Roko Kolar a few minutes ago"
                        type={DocumentCardType.compact}
                        onClickHref="http://bing.com"
                    >
                        <DocumentCardPreview previewImages={[previewProps.previewImages[0]]} />
                        <DocumentCardDetails>
                        <DocumentCardTitle title="Revenue stream proposal fiscal year 2016 version02.pptx" shouldTruncate />
                        <DocumentCardActivity activity="Created a few minutes ago" people={[people[1]]} />
                        </DocumentCardDetails>
                    </DocumentCard>
                    <DocumentCard
                        aria-label={
                        'Document Card with folder or site activity. 4 files were uploaded. ' +
                        'Created by Annie Lindqvist a few minutes ago'
                        }
                        type={DocumentCardType.compact}
                        onClickHref="http://bing.com"
                    >
                        <DocumentCardPreview {...previewProps} />
                        <DocumentCardDetails>
                        <DocumentCardTitle title="4 files were uploaded" shouldTruncate />
                        <DocumentCardActivity activity="Created a few minutes ago" people={[people[0]]} />
                        </DocumentCardDetails>
                    </DocumentCard>
                    <DocumentCard
                        aria-label="Document Card with icon. View and share files. Created by Aaron Reid a few minutes ago"
                        type={DocumentCardType.compact}
                        onClickHref="http://bing.com"
                    >
                        <DocumentCardPreview {...previewPropsUsingIcon} />
                        <DocumentCardDetails>
                        <DocumentCardTitle title="View and share files" shouldTruncate />
                        <DocumentCardActivity activity="Created a few minutes ago" people={[people[2]]} />
                        </DocumentCardDetails>
                    </DocumentCard>
                    <DocumentCard
                        aria-label={
                        'Document Card with email conversation. Conversation about takeaways from annual SharePoint conference. ' +
                        'Sent by Christian Bergqvist a few minutes ago'
                        }
                        type={DocumentCardType.compact}
                        onClickHref="http://bing.com"
                    >
                        <DocumentCardPreview {...previewOutlookUsingIcon} />
                        <DocumentCardDetails>
                        <DocumentCardTitle title="Conversation about takeaways from annual SharePoint conference" shouldTruncate />
                        <DocumentCardActivity activity="Sent a few minutes ago" people={[people[3]]} />
                        </DocumentCardDetails>
                    </DocumentCard>
                </Stack>
                {/* line break */}
                <br></br><br></br>
                {/* 3 */}
                <DocumentCard
                    aria-label="Document Card with multiple items, commands and views. Marketing documents. 6 files were uploaded.
                Created by Annie Lindqvist in February 23, 2016. 432 views."
                >
                    <DocumentCardPreview {...this._previewProps} />
                    <DocumentCardLocation
                    location="Marketing Documents"
                    locationHref="http://microsoft.com"
                    ariaLabel="Location, Marketing Documents"
                    />
                    <DocumentCardTitle title="6 files were uploaded" />
                    <DocumentCardActivity
                    activity="Created Feb 23, 2016"
                    people={[{ name: 'Annie Lindqvist', profileImageSrc: TestImages.personaFemale }]}
                    />
                    <DocumentCardActions actions={this.documentCardActions} views={432} />
                </DocumentCard>
                {/* line break */}
                <br></br><br></br>
                {/* 4 */}
                <div>
                    <DocumentCard
                        aria-label={
                        'Document Card with image. How to make a good design. ' +
                        'Last modified by Annie Lindqvist and 2 others in March 13, 2018.'
                        }
                        styles={cardStyles}
                        onClickHref="http://bing.com"
                    >
                        <DocumentCardImage height={150} imageFit={ImageFit.cover} imageSrc={TestImages.documentPreviewTwo} />
                        <DocumentCardDetails>
                        <DocumentCardTitle title="How to make a good design" shouldTruncate />
                        </DocumentCardDetails>
                        <DocumentCardActivity activity="Modified March 13, 2018" people={people.slice(0, 3)} />
                    </DocumentCard>
                    <DocumentCard
                        aria-label={
                        'Document Card with icon. How to make a good design. ' +
                        'Last modified by Christian Bergqvist in January 1, 2019.'
                        }
                        styles={cardStyles}
                        onClickHref="http://bing.com"
                    >
                        <DocumentCardImage height={150} imageFit={ImageFit.cover} iconProps={this.oneNoteIconProps} />
                        <DocumentCardDetails>
                        <DocumentCardTitle title="How to make a good design" shouldTruncate />
                        </DocumentCardDetails>
                        <DocumentCardActivity activity="Modified January 1, 2019" people={[people[3]]} />
                    </DocumentCard>
                </div>
                {/* line break */}
                <br></br><br></br>
                {/* 5 */}
                <div>
                    <DocumentCard
                        aria-label={
                        'Document Card with logo, text preview, and status. Conversation about annual report. ' +
                        'Content preview. 3 attachments. Sent by Annie Lindqvist and 2 others in March 13, 2018.'
                        }
                        styles={_cardStyles}
                        onClickHref="http://bing.com"
                    >
                        <DocumentCardLogo {...logoProps} />
                        <div className={this.conversationTileClass}>
                        <DocumentCardTitle
                            title="Conversation about annual report: it has a very very long name which should be truncated."
                            shouldTruncate
                        />
                        <DocumentCardTitle
                            title={
                            'This is the email content preview which is very very long. The email also has some more content. ' +
                            'The content continues. This is the last.'
                            }
                            shouldTruncate
                            showAsSecondaryTitle
                        />
                        <DocumentCardStatus statusIcon="attach" status="3 Attachments" />
                        </div>
                        <DocumentCardActivity activity="Sent March 13, 2018" people={this._people.slice(0, 3)} />
                    </DocumentCard>
                    <DocumentCard
                        aria-label={
                        'Document Card with logo, text preview, and status. Further annual report conversation. ' +
                        'Content preview. 3 attachments. Sent by Christian Bergqvist and 2 others in March 13, 2018.'
                        }
                        styles={_cardStyles}
                        onClickHref="http://bing.com"
                    >
                        <DocumentCardLogo {...logoProps} />
                        <div className={this.conversationTileClass}>
                        <DocumentCardTitle title="Further annual report conversation" />
                        <DocumentCardTitle title="Another email content preview." showAsSecondaryTitle />
                        <DocumentCardStatus statusIcon="attach" status=" 3 Attachments" />
                        </div>
                        <DocumentCardActivity activity="Sent March 13, 2018" people={this._people.slice(3, 6)} />
                    </DocumentCard>
                    <DocumentCard
                        aria-label={
                        'Document Card with logo and text preview. Conversation about annual report. Content preview. ' +
                        'Sent by Velatine Lourvric and 1 other in March 13, 2018.'
                        }
                        styles={_cardStyles}
                        onClickHref="http://bing.com"
                    >
                        <DocumentCardLogo {...logoProps} />
                        <div className={this.conversationTileClass}>
                        <DocumentCardTitle title="Conversation about annual report" shouldTruncate />
                        <DocumentCardTitle
                            title="This is the email content preview. It has a second line."
                            shouldTruncate
                            showAsSecondaryTitle
                        />
                        </div>
                        <DocumentCardActivity activity="Sent March 13, 2018" people={this._people.slice(6)} />
                    </DocumentCard>
                </div>
            </>
        );
    }
}