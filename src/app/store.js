import {configureStore} from '@reduxjs/toolkit';

import { cryptoApi } from '../components/Services/cryptoApi';

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath] : cryptoApi.reducer,
    },
})