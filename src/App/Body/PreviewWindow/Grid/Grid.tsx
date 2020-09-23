import React, { memo } from 'react';
import GridLine from '../GridLine';

interface IGrid {
    len: number;
    widthLines: number;
}

const Grid: React.FC<IGrid> = ({ len, widthLines }) => {
    var arr = [];

    for (var i = 0; i < len; i++) {
        arr.push(<GridLine key={i} widthLines={widthLines} />);
    }
    return <>{arr}</>;
};

export default memo(Grid);
