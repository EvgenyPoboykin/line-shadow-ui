const convert_px_to_mm = (state: number, ppi: number) => {
    let inch = 25.4;
    let pixel = inch / ppi;
    return Math.ceil(state * pixel);
};

export default convert_px_to_mm;
