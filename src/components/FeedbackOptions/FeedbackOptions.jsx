import React from "react";
import PropTypes from "prop-types";
import css from "./FeedbackOptions.module.css";

export const FeedbackOptions = ({options=[], onLeaveFeedback}) => {
    return (
        <div className={css.options}>
            {options.map(el => {
                return(
                    <div key = {el}>
                        <button className={css.options__button} onClick={()=>onLeaveFeedback(el)}>{el}</button>
                    </div>
                )
            })}
           
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func,
}