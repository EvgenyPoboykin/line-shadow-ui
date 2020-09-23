import React, { memo } from 'react';
import { IGridLines } from './interfaces';
import Grid from '../Grid';
import LogicGridLines from './logic';
import { Container, GridContainer } from './style';

const GridLines: React.FC<IGridLines> = ({ two, forground, name }) => {
    const { interface_app, picture, widthLines, countLines } = LogicGridLines();

    return (
        <Container urlMask={picture.image_url !== null && picture.image_url.src} widthcanvaspixeloriginal={interface_app.original_image_width} heightcanvaspixeloriginal={interface_app.original_image_height} forground={forground} className={name}>
            <GridContainer deg={two ? interface_app.rotate + 90 : interface_app.rotate} widthLines={widthLines} marginLeft={(interface_app.original_image_width - widthLines) / 2} marginTop={(interface_app.original_image_height - widthLines) / 2}>
                <Grid len={countLines} widthLines={widthLines} />
            </GridContainer>
        </Container>
    );
};

export default memo(GridLines);
