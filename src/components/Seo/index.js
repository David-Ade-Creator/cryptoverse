import React from 'react';
import {Helmet} from "react-helmet";

import icon from "../Images/cryptocurrency.png";

function Seo({title,description}) {
    return (
        <Helmet>
        <title>{`Crytoverse || ${title}`}</title>
        <meta name="description" content={`${description} || Crytoverse`} />
        <link rel="icon" type="image/png" href={icon} sizes="16x16" />
    </Helmet>
    )
}

export default Seo;
