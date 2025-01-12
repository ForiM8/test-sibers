export const Input = ({
    input_type,
    initialValue = null,
    register,
    name,
    label,
    validate = {},
    classNameLabel,
    classNameInput,
    classNameWrapper,
    labelSymbol,
    placeholder,
    inside
}) => {
    return (
        <div className={classNameWrapper}>
            <input {...register(name, validate)}
                defaultValue={initialValue}
                type={input_type}
                className={classNameInput}
                required="required"
                placeholder={placeholder}>{inside}</input>
            <label className={classNameLabel} style={{ display: 'flex' }}>{label} <div style={{color:"#F03800", marginLeft:'3px'}}>{labelSymbol}</div></label>
        </div>
    )
}