import { Dialog, DialogContent, DialogContentText, DialogTitle, List, ListItem, Typography } from '@mui/material';
import { TwitterShareButton, LinkedinShareButton, TelegramShareButton } from 'react-share';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';
import ClipboardCopy from './clipboard-copy';

export interface SimpleDialogProps {
  open: boolean;
  title: string;
  onClose: () => void;
  sx?: any;
  mode?: 'light' | 'dark',
  url: string;
}

function SwShare(props: SimpleDialogProps) {
  const { onClose, title, open, sx, mode, url } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogContent sx={{
        width: '450px',
        height: '370px',
        display: 'flex',
        flexDirection: 'column',
        borderWidth: '2px',
        padding: '35px 30px',
        bgcolor: mode === 'light' ? 'background.paper' : 'primary.main',
        borderColor: mode === 'light' ? 'primary.main' : 'background.paper',
        ...(sx || {})
      }}>
        <Typography variant="h1" color={mode === 'light' ? 'primary.main' : 'text.primary'} textAlign="center" component="span">
          Share
        </Typography>
        <Typography
          sx={{
            mt: '20px'
          }}
          variant="h2"
          color={mode === 'light' ? 'primary.main' : 'text.primary'}
          textAlign="center"
          component="span">
          {title}
        </Typography>
        <div className="links" style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '330px',
          margin: '10px auto 0 auto'
        }}>
          <LinkedinShareButton url={url} className="social-button">
            <LinkedInIcon sx={{
              width: '85px',
              height: '85px',
              color: mode === 'light' ? 'primary.main' : 'text.primary'
            }} />
          </LinkedinShareButton>
          <TelegramShareButton url={url} className="social-button">
            <TelegramIcon sx={{
              width: '85px',
              height: '85px',
              color: mode === 'light' ? 'primary.main' : 'text.primary'
            }} />
          </TelegramShareButton>
          <TwitterShareButton url={url} className="social-button" title={title}>
            <TwitterIcon sx={{
              width: '85px',
              height: '85px',
              color: mode === 'light' ? 'primary.main' : 'text.primary'
            }} />
          </TwitterShareButton>
        </div>
        <div className="copy-link" style={{
          width: '310px',
          margin: '20px auto 0 auto'
        }}>
          <Typography
            sx={{
              marginTop: '20px',
              marginBottom: '8px'
            }}
            variant="h3"
            color={mode === 'light' ? 'primary.main' : 'text.primary'}
            component="span">
            Copy link
          </Typography>
          <ClipboardCopy mode={mode} url={url} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SwShare;
