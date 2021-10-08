import {configureStore} from '@reduxjs/toolkit';

import { cryptoApi } from '../components/Services/cryptoApi';
import { cryptoNewsApi } from '../components/Services/cryptoNews';

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath] : cryptoApi.reducer,
        [cryptoNewsApi.reducerPath] : cryptoNewsApi.reducer,
    },
})