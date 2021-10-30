import { Avatar } from "@mui/material";
import React, { useState } from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useDropzone } from "react-dropzone";
import "./sw-upload-file.scss";

const SwUploadFile = ({
  multiple = false,
  sx = {
    width: '120px',
    height: '120px'
  } as any,
  initialPreviewUrl = null,
  fileChange = (file: File) => null
}: any) => {
  const [preview, setPreview] = useState(initialPreviewUrl);
  const { getRootProps, getInputProps, open } = useDropzone({
    multiple,
    disabled: !!preview,
    accept: 'image/jpeg, image/png',
    noClick: true,
    noKeyboard: true,
    onDrop: ([file]) => {
      const url = URL.createObjectURL(file);
      setPreview(url);
      fileChange(file);
    }
  });

  const handleActionClick = () => {
    if (preview) {
      setPreview(null);
      fileChange(null);
    } else {
      open();
    }
  }

  const Action = () => {
    return (
      <div onClick={handleActionClick} className="sw-upload-action">
        {preview ? <HighlightOffIcon className="remove" /> : <PhotoCameraIcon className="upload" />}
      </div>
    )
  }

  return (
    <div {...getRootProps({ className: 'sw-uploader-wrapper', style: sx })}>
      <Avatar
        alt="Avatar"
        src={preview}
        imgProps={{
          style: {
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "cover",
          },
        }}
      />
      <Action />
      <input {...getInputProps()} />
    </div>
  );
};

export default SwUploadFile;
