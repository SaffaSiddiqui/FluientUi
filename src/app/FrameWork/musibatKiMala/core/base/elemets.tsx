import {JSX} from 'react';

export class elements{
    id: string;
    Name: string;
    title: string;
    hidden: boolean;
    disabled: boolean;
    checked: boolean;

    constructor(
        id: string,
        Name: string,
        title: string,
        hidden: boolean = false,
        disabled: boolean = false,
        checked: boolean = false
    ){
        this.id = id;
        this.Name = Name;
        this.title = title;
        this.hidden = hidden;
        this.disabled = disabled;
        this.checked = checked;
    }
    renderElement(): JSX.Element{
        return <></>;
    }
}