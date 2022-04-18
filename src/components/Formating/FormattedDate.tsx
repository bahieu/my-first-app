import React, { Component}from "react";
import moment from "moment";

let dateFormat : string = 'DD/MM/YYYY';

const FormattedDate = (props:any) => {

    const {format,value,...otherProps} = props;

    let dFormat = format ? format : dateFormat;

    const formattedValue = value ? moment.utc(value).format(dFormat) : null;

    return (
        <span {...otherProps}>{formattedValue}</span>
    )
}

export default FormattedDate;