import { Avatar, styled } from "@mui/material";
import React, { useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useDropzone } from "react-dropzone";

function DefaultUploadSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="110"
      height="109.995"
      viewBox="0 0 110 109.995"
    >
      <g transform="translate(-3 -3.001)">
        <path
          d="M71.75 76.33v-9.167c2.062-1.022 7.961-8.044 8.58-13.53 1.623-.124 4.171-1.613 4.923-7.494.4-3.158-1.2-4.932-2.173-5.491A24.255 24.255 0 0085.5 30.5c0-11.128-4.368-20.625-13.75-20.625C71.75 9.876 68.491 3 58 3 38.557 3 30.5 15.472 30.5 30.5a27.317 27.317 0 002.42 10.147c-.972.559-2.576 2.338-2.173 5.491.752 5.88 3.3 7.37 4.923 7.494.619 5.486 6.518 12.508 8.58 13.53v9.168C39.667 90.08 3 80.913 3 113h110c0-32.087-36.667-22.92-41.25-36.67z"
          data-name="Path 1643"
        ></path>
      </g>
    </svg>
  );
}

const UploadWrapper = styled("div")((props) => {
  const { theme, mode, variant } = props as any;
  return `
    position: relative;
    cursor: pointer;

    .MuiAvatar-root {
      width: 100%;
      height: 100%;
      opacity: 1;
      transition: ${theme.transitions.create(["opacity", "transform"])};
      backface-visibility: hidden;
      border: 3px solid ${
        mode === "light"
          ? theme.palette.background.paper
          : theme.palette.background.default
      };
      background: ${
        mode === "light"
          ? theme.palette.background.paper
          : theme.palette.background.default
      };
      box-sizing: border-box;
    }

    &.rounded, &.rounded .MuiAvatar-root {
      border-radius: 50%;
    }
  
    .MuiSvgIcon-root {
      fill: ${
        mode === "light"
          ? theme.palette.primary.main
          : theme.palette.text.primary
      };
    }
  
    .sw-upload-action {
      opacity: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      top: 0;
      left: 0;
      align-items: center;
      justify-content: center;
      transition: ${theme.transitions.create(["opacity", "transform"])};
  
      .MuiAvatar-fallback {
        fill: ${
          mode === "light"
            ? theme.palette.primary.main
            : theme.palette.text.primary
        };
      }
  
      .MuiSvgIcon-root {
        width: 1.5em;
        height: 1.5em;
  
        &.remove {
          color: ${theme.palette.error.main};
          
        }
  
        &.upload {
          fill: ${
            mode === "light"
              ? theme.palette.background.paper
              : theme.palette.primary.main
          };
        }
      }
    }


    &.rounded {
      border-width: 1px;
      border-style: solid;

      .MuiAvatar-root {
        background: transparent;
        border: 1px solid ${
          mode === "light"
            ? theme.palette.background.paper
            : theme.palette.background.default
        };
      }

      &:hover {
        
      }
    }

    &.square {
      &:hover .MuiAvatar-root {
        opacity: 0.3;
        border-color: ${
          mode === "light"
            ? theme.palette.background.paper
            : theme.palette.primary.main
        };
      }
    
      &:hover .sw-upload-action {
        opacity: 1;
      }
    }
  `;
});

const SwUploadFile = ({
  multiple = false,
  variant = "square",
  sx = {
    width: "120px",
    height: "120px",
  } as any,
  mode = "light",
  initialPreviewUrl = null,
  fileChange = (file: File) => null,
  defaulUploadIcon = <DefaultUploadSvg />,
}: any) => {
  const [preview, setPreview] = useState(initialPreviewUrl);
  const { getRootProps, getInputProps, open } = useDropzone({
    multiple,
    disabled: !!preview,
    accept: "image/jpeg, image/png",
    noClick: true,
    noKeyboard: true,
    onDrop: ([file]) => {
      const url = URL.createObjectURL(file);
      setPreview(url);
      fileChange(file);
    },
  });

  const handleActionClick = () => {
    if (preview) {
      setPreview(null);
      fileChange(null);
    } else {
      open();
    }
  };

  const Action = () => {
    return (
      <div onClick={handleActionClick} className="sw-upload-action">
        {preview ? (
          <HighlightOffIcon className="remove" />
        ) : (
          <PhotoCameraIcon className="upload" />
        )}
      </div>
    );
  };

  return (
    <UploadWrapper
      // @ts-ignore
      mode={mode}
      variant={variant}
      {...getRootProps({
        className: `${variant} sw-uploader-wrapper`,
        style: sx,
      })}
    >
      <Avatar
        alt="Avatar"
        variant={variant}
        src={preview}
        imgProps={{
          style: {
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "cover",
          },
        }}
      >
        {defaulUploadIcon}
      </Avatar>
      <Action />
      <input {...getInputProps()} />
    </UploadWrapper>
  );
};

export default SwUploadFile;
