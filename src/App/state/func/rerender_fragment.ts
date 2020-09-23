const rerender_fragment = () => {
    const smallfragment = document.querySelector<HTMLInputElement>('.SmallPreview__fragment');
    const smallcanvas = document.querySelector<HTMLInputElement>('.SmallPreview__content');
    const largefragment = document.querySelector<HTMLInputElement>('.LargePreview__container');
    const largecanvas = document.querySelector<HTMLInputElement>('.Canvas__container');
    const content = document.querySelector<HTMLInputElement>('.LargePreview__content-container');

    content!.style.width = largefragment!.offsetWidth > largecanvas!.offsetWidth ? `${Math.ceil(largecanvas!.offsetWidth)}px` : '100%';
    content!.style.height = largefragment!.offsetHeight > largecanvas!.offsetHeight ? `${Math.ceil(largecanvas!.offsetHeight)}px` : '100%';

    let aspectW = largecanvas!.offsetWidth / content!.offsetWidth;
    let aspectH = largecanvas!.offsetHeight / content!.offsetHeight;

    smallfragment!.style.width = `${Math.ceil(smallcanvas!.offsetWidth / aspectW)}px`;
    smallfragment!.style.height = `${Math.ceil(smallcanvas!.offsetHeight / aspectH)}px`;
    smallfragment!.style.left = `${Math.ceil((smallcanvas!.offsetWidth - smallcanvas!.offsetWidth / aspectW) / 2)}px`;
    smallfragment!.style.top = `${Math.ceil((smallcanvas!.offsetHeight - smallcanvas!.offsetHeight / aspectH) / 2)}px`;

    largecanvas!.style.left = `-${Math.ceil((largecanvas!.offsetWidth - content!.offsetWidth) / 2)}px`;
    largecanvas!.style.top = `-${Math.ceil((largecanvas!.offsetHeight - content!.offsetHeight) / 2)}px`;
};

export default rerender_fragment;
