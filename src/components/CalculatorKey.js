import React from 'react';
import ReactPoint from "react-point";

export default class CalculatorKey extends React.Component {
    render() {
        const {onPress, className, ...props} = this.props;

        return (
            <ReactPoint onPoint={onPress}>
                <button className={`calculator-key ${className}`} {...props} />
            </ReactPoint>
        )
    }
}