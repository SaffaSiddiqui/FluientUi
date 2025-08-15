import {JSX} from 'react';
import {elementCategory} from '../../core/enums/elementCategory';
import {elementType} from '../../core/enums/elementType';
import {interactionElement} from '../../core/base/interactionElement';
import * as React from 'react';
import { Rating, RatingSize } from '@fluentui/react';
import { PrimaryButton } from '@fluentui/react/lib/Button';

export class RatingElement extends interactionElement{
    constructor(
        id: string,
        Name: string,
        title: string,
    ){
        super(elementType.Rating, elementCategory.interaction, id, Name, title);
    }

    getRatingComponentAriaLabel =
    (label: string) =>
    (rating: number, maxRating: number): string => {
        return `${label} rating value is ${rating} of ${maxRating}`;
    };
//

    renderElement(): JSX.Element {

        const [currentRating, setCurrentRating] = React.useState(5);
        const currentRatingToggle = React.useCallback(() => {
            setCurrentRating(oldRating => (oldRating === 0 ? 5 : 0));
        }, []);

        const getRatingAriaLabel = React.useCallback(() => `Rating value is ${currentRating} of 5`, [currentRating]);

        return(
            <>
                {/* 1 */}
                <div>
                    Large stars:
                    <Rating
                        max={5}
                        size={RatingSize.Large}
                        defaultRating={1}
                        ariaLabel="Large stars"
                        ariaLabelFormat="{0} of {1} stars"
                    />
                    Small stars, with 0 stars allowed:
                    <Rating
                        defaultRating={3}
                        allowZeroStars
                        max={5}
                        ariaLabel="Small stars with 0 stars allowed"
                        ariaLabelFormat="{0} of {1} stars"
                    />
                    10 small stars:
                    <Rating defaultRating={1} max={10} ariaLabel="10 small stars" ariaLabelFormat="{0} of {1} stars" />
                    Disabled:
                    <Rating defaultRating={1} max={5} disabled ariaLabel="Disabled" ariaLabelFormat="{0} of {1} stars" />
                    Half star in readOnly mode:
                    <Rating
                        max={5}
                        rating={2.5}
                        getAriaLabel={this.getRatingComponentAriaLabel('Half star in readOnly mode')}
                        readOnly
                        ariaLabelFormat="{0} of {1} stars"
                    />
                    Custom icons:
                    <Rating
                        // eslint-disable-next-line @typescript-eslint/no-deprecated
                        min={1}
                        max={5}
                        defaultRating={2.5}
                        ariaLabel="Custom icons"
                        ariaLabelFormat="{0} of {1} stars"
                        icon="StarburstSolid"
                        unselectedIcon="Starburst"
                    />
                </div>
                {/* line break */}
                <br></br><br></br>
                {/* 2 */}
                <div>
                    <Rating
                        rating={currentRating}
                        max={5}
                        readOnly
                        allowZeroStars
                        getAriaLabel={getRatingAriaLabel}
                        ariaLabelFormat="{0} of {1} stars"
                    />
                    <PrimaryButton onClick={currentRatingToggle}>Click to change rating to {5 - currentRating}</PrimaryButton>
                </div>
            </>
        );
    }
}