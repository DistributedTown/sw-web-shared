import React from 'react';
import { useState } from 'react';
import { Button, Typography } from '@mui/material';

import './clipboard-copy.scss';


function SwClipboardCopy({ url, mode }) {
  const [isCopied, setIsCopied] = useState(false);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return navigator.clipboard.writeText(text);
    }
    return document.execCommand('copy', true, text);
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(url)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);

        setTimeout(() => {
          setIsCopied(false);
        }, 2500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={`copy-wrapper ${mode}`} onClick={handleCopyClick}>
      <Typography variant="h4" color="info.dark" component="span">
        {url}
      </Typography>
      <div
        className="copy-text"
        style={{
          transition: 'all 0.3s ease-in',
          opacity: isCopied ? '0.7' : '1',
        }}
      >
        <Typography variant="h4" color="info.dark" component="span">
          {isCopied ? 'Copied!' : 'COPY'}
        </Typography>
      </div>
    </div>
  );
}

export default SwClipboardCopy;
