const orientation = (width: number, height: number) => {
    if (width > height) {
        return 'horizontal';
    } else if (width < height) {
        return 'virtical';
    } else {
        return 'square';
    }
};

export default orientation;
