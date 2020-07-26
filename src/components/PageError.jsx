import React from 'react';

import './styles/PageLoading.css';

const PageError = ({ msgError }) => (
    <div className="PageLoading">
        <h2> { msgError } </h2>
    </div>
)

export default PageError;