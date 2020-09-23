import React, { useContext, useState } from 'react';
import { ContextApp, size_small_canvas } from '../state';

interface IDragOffset {
    x: number;
    y: number;
}

const LogicLargePreview = () => {
    const { interface_app, picture } = useContext(ContextApp);

    const [isdragready, UseIsdragready] = useState<boolean>(false);
    const [dragoffset, UseDragoffset] = useState<IDragOffset>({
        x: 0,
        y: 0,
    });

    const mouseDown = (e: React.MouseEvent): void => {
        UseIsdragready(true);

        const bigcanvas = document.querySelector<HTMLDivElement>('.Canvas__container');

        e.pageX = e.pageX || e.clientX + bigcanvas!.offsetWidth;
        e.pageY = e.pageY || e.clientY + bigcanvas!.offsetHeight;

        UseDragoffset({ x: e.pageX - bigcanvas!.offsetLeft, y: e.pageY - bigcanvas!.offsetTop });
    };

    const mouseMove = (e: React.MouseEvent): void => {
        const bigcanvas = document.querySelector<HTMLDivElement>('.Canvas__container');

        if (isdragready) {
            e.preventDefault();
            let offsetX, offsetY;

            e.pageX = e.pageX || e.clientX + bigcanvas!.offsetWidth;
            e.pageY = e.pageY || e.clientY + bigcanvas!.offsetHeight;

            // const bigfragment = document.querySelector('.LargePreview__container');
            const bigfragment = document.querySelector<HTMLDivElement>('.LargePreview__content-container');
            const smallfragment = document.querySelector<HTMLDivElement>('.SmallPreview__fragment');

            // left/right constraint
            if (e.pageX - dragoffset.x > 0) {
                offsetX = 0;
            } else if (e.pageX - dragoffset.x < (bigcanvas!.offsetWidth - bigfragment!.offsetWidth) * -1) {
                offsetX = (bigcanvas!.offsetWidth - bigfragment!.offsetWidth) * -1;
            } else {
                offsetX = e.pageX - dragoffset.x;
            }

            // top/bottom constraint
            if (e.pageY - dragoffset.y > 0) {
                offsetY = 0;
            } else if (e.pageY - dragoffset.y < (bigcanvas!.offsetHeight - bigfragment!.offsetHeight) * -1) {
                offsetY = (bigcanvas!.offsetHeight - bigfragment!.offsetHeight) * -1;
            } else {
                offsetY = e.pageY - dragoffset.y;
            }

            let WRS = bigcanvas!.offsetWidth / offsetX;
            let HRS = bigcanvas!.offsetHeight / offsetY;

            const smallcanvas = size_small_canvas(picture.image_url, interface_app.original_image_width, interface_app.original_image_height, interface_app.canvas_large_width, interface_app.canvas_large_height, interface_app.canvas_small_width, interface_app.canvas_small_height);

            smallfragment!.style.left = `${(smallcanvas.w / WRS) * -1}px`;
            smallfragment!.style.top = `${(smallcanvas.h / HRS) * -1}px`;

            bigcanvas!.style.left = `${offsetX}px`;
            bigcanvas!.style.top = `${offsetY}px`;
        }
    };

    const mouseUp = () => {
        UseIsdragready(false);
    };

    return { interface_app, mouseDown, mouseMove, mouseUp };
};

export default LogicLargePreview;
