import { rerender_fragment } from '../../state';

const PreviewWindow_Logic = () => {
    const onSizeLargePreview = (size: any | {}) => {
        const smallfragment = document.querySelector<HTMLDivElement>('.SmallPreview__fragment');
        const large = document.querySelector<HTMLDivElement>('.Canvas__container');

        if (smallfragment && large) {
            rerender_fragment();
        }
    };

    return { onSizeLargePreview };
};

export default PreviewWindow_Logic;
