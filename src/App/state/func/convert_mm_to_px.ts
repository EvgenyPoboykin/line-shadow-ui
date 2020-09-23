const convert_mm_to_px = (state: number, ppi: number) => {
    let inch = 25.4;
    let mm = ppi / inch;
    return Math.ceil(state * mm);
};

export default convert_mm_to_px;
