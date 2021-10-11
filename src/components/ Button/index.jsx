import React from 'react';

import { ButtonComponent } from './style';

export default function Button(props) {
    return (
        <ButtonComponent
            className={props.className}
            disabled={props.isDisabled}
            width={props.width}
            type="submit"
            onClick={props.onClick}
        >
            {props.children}
        </ButtonComponent>
    )

}