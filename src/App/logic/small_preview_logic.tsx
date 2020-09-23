import React, { useContext, useState } from 'react';
import { ContextApp, size_small_canvas } from '../state';

interface IDragOffset {
    x: number;
    y: number;
}

const LogicSmallPreview = () => {
    const { interface_app, picture } = useContext(ContextApp);

    const [isdragready, UseIsdragready] = useState<boolean>(false);
    const [dragoffset, UseDragoffset] = useState<IDragOffset>({
        x: 0,
        y: 0,
    });

    // const onClickContainerPreview = (e: React.MouseEvent) => {
    //     let offsetX = 0,
    //         offsetY = 0;

    //     const smallfragment = document.querySelector<HTMLDivElement>('.SmallPreview__fragment');
    //     const smallcontainer = document.querySelector<HTMLDivElement>('.SmallPreview__container');
    //     const smallcanvas = document.querySelector<HTMLDivElement>('.SmallPreview__content');
    //     const largecanvas = document.querySelector<HTMLDivElement>('.Canvas__container');

    //     const native = e.nativeEvent;

    //     if (native.offsetX <= smallfragment!.offsetWidth / 2) {
    //         offsetX = 0;
    //     } else if (native.offsetX >= smallcanvas!.offsetWidth - smallfragment!.offsetWidth) {
    //         offsetX = smallcanvas!.offsetWidth - smallfragment!.offsetWidth;
    //     } else {
    //         offsetX = native.offsetX;
    //     }

    //     if (native.offsetY <= smallfragment!.offsetHeight / 2) {
    //         offsetY = 0;
    //     } else if (native.offsetY >= smallcanvas!.offsetHeight - smallfragment!.offsetHeight) {
    //         offsetY = smallcanvas!.offsetHeight - smallfragment!.offsetHeight;
    //     } else {
    //         offsetY = native.offsetY - smallfragment!.offsetHeight / 2;
    //     }

    //     console.log({ inX: native.offsetX, inY: native.offsetY, outX: offsetX, outY: offsetY });

    //     let WRS = smallcanvas!.offsetWidth / offsetX;
    //     let HRS = smallcanvas!.offsetHeight / offsetY;

    //     largecanvas!.style.left = `-${largecanvas!.offsetWidth / WRS}px`;
    //     largecanvas!.style.top = `-${largecanvas!.offsetHeight / HRS}px`;

    //     smallfragment!.style.left = `${offsetX}px`;
    //     smallfragment!.style.top = `${offsetY}px`;
    // };

    const mouseDown = (e: React.MouseEvent) => {
        UseIsdragready(true);

        const smallfragment = document.querySelector<HTMLDivElement>('.SmallPreview__fragment');
        const smallcanvas = document.querySelector<HTMLDivElement>('.SmallPreview__content');

        e.pageX = e.pageX || e.clientX + smallcanvas!.offsetWidth;
        e.pageY = e.pageY || e.clientY + smallcanvas!.offsetHeight;

        UseDragoffset({ x: e.pageX - smallfragment!.offsetLeft, y: e.pageY - smallfragment!.offsetTop });
    };

    const mouseMove = (e: React.MouseEvent) => {
        const smallfragment = document.querySelector<HTMLDivElement>('.SmallPreview__fragment');

        if (isdragready) {
            e.preventDefault();
            let offsetX, offsetY;

            const largecanvas = document.querySelector<HTMLDivElement>('.Canvas__container');
            const smallcanvas = document.querySelector<HTMLDivElement>('.SmallPreview__content');

            e.pageX = e.pageX || e.clientX + smallcanvas!.offsetWidth;
            e.pageY = e.pageY || e.clientY + smallcanvas!.offsetHeight;

            // console.log(e.pageX, e.pageY);

            // left/right constraint
            if (e.pageX - dragoffset.x < 0) {
                offsetX = 0;
            } else if (e.pageX - dragoffset.x + smallfragment!.offsetWidth > smallcanvas!.offsetWidth) {
                offsetX = smallcanvas!.offsetWidth - smallfragment!.offsetWidth;
            } else {
                offsetX = e.pageX - dragoffset.x;
            }

            // top/bottom constraint
            if (e.pageY - dragoffset.y < 0) {
                offsetY = 0;
            } else if (e.pageY - dragoffset.y + smallfragment!.offsetHeight > smallcanvas!.offsetHeight) {
                offsetY = smallcanvas!.offsetHeight - smallfragment!.offsetHeight;
            } else {
                offsetY = e.pageY - dragoffset.y;
            }

            let WRS = smallcanvas!.offsetWidth / offsetX;
            let HRS = smallcanvas!.offsetHeight / offsetY;

            largecanvas!.style.left = `-${largecanvas!.offsetWidth / WRS}px`;
            largecanvas!.style.top = `-${largecanvas!.offsetHeight / HRS}px`;

            smallfragment!.style.left = `${offsetX}px`;
            smallfragment!.style.top = `${offsetY}px`;
        }
    };
    const mouseUp = (e: React.MouseEvent) => {
        e.preventDefault();
        UseIsdragready(false);
    };

    // console.log(dragoffset, isdragready);

    const fragmentCanvas = size_small_canvas(
        picture.image_url,
        interface_app.original_image_width,
        interface_app.original_image_height,
        interface_app.canvas_large_width,
        interface_app.canvas_large_height,
        interface_app.canvas_small_width,
        interface_app.canvas_small_height
    );

    // console.log({
    //     OW: interface_app.original_image_width,
    //     OH: interface_app.original_image_height,
    //     CW: interface_app.canvas_large_width,
    //     CH: interface_app.canvas_large_height,
    //     SW: fragmentCanvas.w,
    //     SH: fragmentCanvas.h,
    // });

    return {
        interface_app,
        picture,
        isdragready,
        fragmentCanvas,
        mouseDown,
        mouseMove,
        mouseUp,
        // onClickContainerPreview,
    };
};

export default LogicSmallPreview;
