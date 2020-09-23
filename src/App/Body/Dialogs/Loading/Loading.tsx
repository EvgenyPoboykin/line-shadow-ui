import React, { memo } from 'react';

import DialogWin from '../DialogWin';

const Loading: React.FC = () => <DialogWin name='Body__load-container'>Open Image</DialogWin>;

export default memo(Loading);
