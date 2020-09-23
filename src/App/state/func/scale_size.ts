const scale_size = (width: number, height: number) => {
    let aspect = width / height;

    if (width < height || width === height) {
        return { width: 356 * aspect, height: 356 };
    }
    return { width: 468, height: 468 / aspect };
};

export default scale_size;
