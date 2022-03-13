import React, { useState } from 'react';

const FormTextInput = (props) => {
    const [text, setText] = useState('');

    return (
        <div className="form__row">
            <label className="form__label">{ props.label }</label>
            <input
                className={ `form__input form__input--${props.type}` }
                placeholder={ props.placeHolder }
                value={ text }
            />
        </div>
    );
};

export default FormTextInput;