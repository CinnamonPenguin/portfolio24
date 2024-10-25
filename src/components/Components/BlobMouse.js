import React, { useEffect, useState } from 'react';
import '../Styles/BlobMouse.css';


function BlobMouse() {
    return (
        <div className="blob-container">
            <div className="BlobMouse">
                <div id="blob"></div>
                <div id="blur"></div>
            </div>
        </div>
    );
}

export default BlobMouse;