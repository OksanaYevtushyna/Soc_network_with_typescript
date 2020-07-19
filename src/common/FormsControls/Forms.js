import React from 'react';
import styles from './Forms.module.css';


export const InputElement = ({ input, meta, ...props }) => {
    let hasError = meta.error && meta.touched;
    return (
        <div className={styles.formControl + ' ' + (hasError && styles.error)}>
            {props.label === 'input' && <input {...input} {...props} />}
            {props.label === 'textarea' && <textarea {...input} {...props}></textarea>}
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}




/*export const Textarea = ({ input, meta, ...props }) => {
    let hasError = meta.error && meta.touched;
    return (
        <div className={styles.formControl + ' ' + (hasError && styles.error)}>
            <textarea {...input}></textarea>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}*/