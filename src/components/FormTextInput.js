import React, { useEffect, useRef, useState } from 'react';

const FormTextInput = (props) => {
    const [text, setText] = useState('');
    const inpRef = useRef(null);

    // useEffect(() => {
    //     inpRef.current?.focus();
    // }, []);

    useEffect(() => {
        props.clear && setText('');
        inpRef.current?.focus();
    }, [props.clear]);

    // useEffect(() => {
    // }, [props.clear]);

    const onChangeHandler = (e) => {
        props.setForm();
        setText(e.target.value);
    };

    return (
        <div className="form__row">
            <label className="form__label">{ props.label }</label>
            <input
                className={ `form__input form__input--${props.type}` }
                name={ props.type }
                placeholder={ props.placeHolder }
                onChange={ onChangeHandler }
                value={ text }
                ref={ props.focused ? inpRef : null }
            />
        </div>
    );
};

export default FormTextInput;