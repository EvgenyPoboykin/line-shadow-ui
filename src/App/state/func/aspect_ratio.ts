const aspect_ratio = (width: number, height: number) => {
    if (width > height) return width / height;
    return height / width;
};

export default aspect_ratio;
