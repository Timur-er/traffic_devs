import React from 'react';
import * as icons from '../theme/icons/index'

const Icons = (props) => {
    const {type, color, width, height, click} = props;


    const icon = icons[type];
    return (
        <span onClick={() => click()} style={{width: width, height: height}}>
        {/*// <span>*/}
            {/*{icon()}*/}
            {console.log(icons)}
            {icon(width, height, color)}
        </span>
    );
};

export default Icons;