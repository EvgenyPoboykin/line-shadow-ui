import React, { useContext, memo } from 'react';
import { Container } from './style';
import { ContextApp } from '../../../state';
const BottomData: React.FC = () => {
    const { interface_app, picture } = useContext(ContextApp);

    const dimention = `${interface_app.canvas_large_width} x ${interface_app.canvas_large_height} pixels`;
    return <Container>{picture.image_url !== null ? dimention : null}</Container>;
};

export default memo(BottomData);
