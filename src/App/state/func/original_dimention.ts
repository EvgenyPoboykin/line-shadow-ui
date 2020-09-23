const original_dimention = (a: number, b: number, inputDeg: number, aspect: number) => {
    // гепатенуза
    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    let sin = b / c;
    let Deg = Math.asin(sin) * (180 / Math.PI);

    if (Deg < inputDeg) return { w: a, h: a / aspect };

    return { w: b * aspect, h: b };
};

export default original_dimention;
