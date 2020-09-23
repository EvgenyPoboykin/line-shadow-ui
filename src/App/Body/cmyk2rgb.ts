const cmyk2rgb = (c: number, m: number, y: number, k: number, normalized?: boolean) => {
    c = c / 100;
    m = m / 100;
    y = y / 100;
    k = k / 100;

    c = c * (1 - k) + k;
    m = m * (1 - k) + k;
    y = y * (1 - k) + k;

    var r = 1 - c;
    var g = 1 - m;
    var b = 1 - y;

    if (!normalized) {
        if (c === 0 && m === 0 && y === 0 && k === 1) {
            r = 35;
            g = 35;
            b = 36;
        } else if (c === 1 && m === 1 && y === 1 && k === 1) {
            r = 0;
            g = 0;
            b = 0;
        } else if (c === 1 && m === 0 && y === 0 && k === 0) {
            r = 0;
            g = 169;
            b = 234;
        } else if (c === 0 && m === 1 && y === 0 && k === 0) {
            r = 223;
            g = 0;
            b = 131;
        } else if (c === 0 && m === 0 && y === 1 && k === 0) {
            r = 255;
            g = 242;
            b = 0;
        } else {
            r = Math.round(255 * r);
            g = Math.round(255 * g);
            b = Math.round(255 * b);
        }
    }

    return {
        r: r,
        g: g,
        b: b,
    };
};

export default cmyk2rgb;
