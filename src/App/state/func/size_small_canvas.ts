const size_small_canvas = (url: any, widthOC: number, heightOC: number, widthRC: number, heightRC: number, widthSC: number, heightSC: number) => {
    let aW = widthRC / widthOC;
    let aH = heightRC / heightOC;

    if (url === null) return { w: 0, h: 0 };

    return { w: widthSC * aW, h: heightSC * aH };
};

export default size_small_canvas;
