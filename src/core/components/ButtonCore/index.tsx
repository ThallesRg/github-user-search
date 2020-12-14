import React from 'react';
import './styles.css';

type Props = {
    text: String;
    margin120?: Boolean;
}

const ButtonCore = ({ text, margin120 }: Props) => (
    <button className="button-core-design" style={margin120 ? { marginLeft: "120px" } : {marginLeft: "94px"}}>{text}</button>
);


export default ButtonCore;