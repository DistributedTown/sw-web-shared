import React from "react";
import { SvgInputModel } from "./input.model";

const SwLogoSvg = (
  { height, width, className }: SvgInputModel = {
    height: "auto",
    width: "100%",
    className: "",
  }
) => {
  return (
    <svg
      style={{ height, width }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 360 360"
    >
      <defs>
        <linearGradient
          x1="0.281"
          x2="0.538"
          y1="0.79"
          y2="0.324"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#fff" stopOpacity="0"></stop>
          <stop offset="0.512" stopColor="#d1d1d1" stopOpacity="0.137"></stop>
          <stop offset="0.917" stopColor="#434342" stopOpacity="0.569"></stop>
          <stop offset="1" stopColor="#171716" stopOpacity="0.698"></stop>
        </linearGradient>
        <linearGradient
          x1="0.281"
          x2="0.538"
          y1="0.149"
          y2="-0.316"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#fff" stopOpacity="0"></stop>
          <stop offset="0.546" stopColor="#cacac9" stopOpacity="0.137"></stop>
          <stop offset="0.977" stopColor="#232322" stopOpacity="0.569"></stop>
          <stop offset="1" stopColor="#171716" stopOpacity="0.6"></stop>
        </linearGradient>
        <linearGradient
          x1="0.951"
          x2="0.377"
          y1="0.714"
          y2="0.436"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#fff" stopOpacity="0"></stop>
          <stop offset="0.721" stopColor="#9f9f9e" stopOpacity="0.125"></stop>
          <stop offset="1" stopColor="#171716" stopOpacity="0.302"></stop>
        </linearGradient>
        <linearGradient
          x1="0.141"
          x2="0.557"
          y1="0.653"
          y2="0.499"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#fff" stopOpacity="0"></stop>
          <stop offset="0.819" stopColor="#525251" stopOpacity="0.298"></stop>
          <stop offset="1" stopColor="#171716" stopOpacity="0.4"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-5"
          x1="0.599"
          x2="0.332"
          y1="0.4"
          y2="0.666"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#fff" stopOpacity="0"></stop>
          <stop offset="0.672" stopColor="#c4c4c3" stopOpacity="0.102"></stop>
          <stop offset="1" stopColor="#171716" stopOpacity="0.4"></stop>
        </linearGradient>
        <linearGradient
          x1="1.117"
          x2="-0.11"
          y1="0.807"
          y2="0.171"
          xlinkHref="#linear-gradient-5"
        ></linearGradient>
        <linearGradient
          x1="0.25"
          x2="1.009"
          y1="-0.483"
          y2="0.983"
          xlinkHref="#linear-gradient-5"
        ></linearGradient>
      </defs>
      <g data-name="Group 12" transform="translate(-90 -88)">
        <circle
          cx="180"
          cy="180"
          r="180"
          fill="#f4f2f2"
          data-name="Ellipse 7"
          transform="translate(90 88)"
        ></circle>
        <g data-name="Group 11" transform="translate(-8.621 -6.967)">
          <path
            d="M228.563 277.684l-39.942-30.15v23.727s29.112 14.987 28.445 14.525 11.497-8.102 11.497-8.102z"
            fill="url(#linear-gradient)"
            data-name="Path 35"
            transform="translate(0 -2.872)"
          ></path>
          <path
            d="M228.563 278.68l-39.942 30.15V285.1s29.112-14.988 28.445-14.525 11.497 8.105 11.497 8.105z"
            fill="url(#linear-gradient-2)"
            data-name="Path 36"
            transform="translate(0 -3.924)"
          ></path>
          <path
            d="M271.864 336.005l-20.42 35.735 23.981.309 7.817-37.985z"
            fill="url(#linear-gradient-3)"
            data-name="Path 37"
            transform="translate(-2.872 -6.827)"
          ></path>
          <path
            d="M312.693 371.344l-29.3-51.116-3.555 17.267 14.866 33.849z"
            fill="url(#linear-gradient-4)"
            data-name="Path 38"
            transform="translate(-4.17 -6.194)"
          ></path>
          <path
            d="M251.444 185.017l35.9 76.3 84 44.184.146-24.127-69.59-31.913-26.476-63.861z"
            fill="url(#linear-gradient-5)"
            data-name="Path 39"
            transform="translate(-2.872 -.014)"
          ></path>
          <path
            d="M0 0H59.951V59.951H0z"
            fill="#040506"
            data-name="Rectangle 41"
            transform="rotate(-180 124.286 182.575)"
          ></path>
          <path
            d="M0 0H35.971V35.971H0z"
            fill="#fff"
            data-name="Rectangle 42"
            transform="rotate(-180 118.291 176.58)"
          ></path>
          <circle
            cx="5.995"
            cy="5.995"
            r="5.995"
            fill="#040506"
            data-name="Ellipse 4"
            transform="translate(212.601 329.178)"
          ></circle>
          <path
            d="M0 0H59.951V59.951H0z"
            fill="#040506"
            data-name="Rectangle 43"
            transform="rotate(-180 184.237 182.575)"
          ></path>
          <path
            d="M0 0H35.971V35.971H0z"
            fill="#fff"
            data-name="Rectangle 44"
            transform="rotate(-180 178.242 176.58)"
          ></path>
          <circle
            cx="5.995"
            cy="5.995"
            r="5.995"
            fill="#040506"
            data-name="Ellipse 5"
            transform="translate(332.504 329.178)"
          ></circle>
          <path
            d="M0 0H59.951V59.951H0z"
            fill="#040506"
            data-name="Rectangle 45"
            transform="rotate(180 124.286 122.331)"
          ></path>
          <path
            d="M0 0H35.971V35.971H0z"
            fill="#fff"
            data-name="Rectangle 46"
            transform="rotate(180 118.291 116.336)"
          ></path>
          <circle
            cx="5.995"
            cy="5.995"
            r="5.995"
            fill="#040506"
            data-name="Ellipse 6"
            transform="translate(212.601 208.691)"
          ></circle>
          <path
            d="M0 0H71.942V11.99H0z"
            fill="#040506"
            data-name="Rectangle 47"
            transform="translate(212.601 268.935)"
          ></path>
          <path
            d="M0 0H11.99V11.99H0z"
            fill="#040506"
            data-name="Rectangle 48"
            transform="translate(248.572 256.945)"
          ></path>
          <path
            d="M0 0H11.99V11.99H0z"
            fill="#040506"
            data-name="Rectangle 49"
            transform="translate(224.591 256.945)"
          ></path>
          <path
            d="M0 0H11.99V23.981H0z"
            fill="#040506"
            data-name="Rectangle 50"
            transform="translate(260.562 244.954)"
          ></path>
          <path
            d="M0 0H83.932V11.99H0z"
            fill="#040506"
            data-name="Rectangle 51"
            transform="translate(284.543 209.276)"
          ></path>
          <path
            d="M0 0H35.971V11.99H0z"
            fill="#040506"
            data-name="Rectangle 52"
            transform="translate(332.504 221.266)"
          ></path>
          <path
            d="M0 0H11.99V11.99H0z"
            fill="#040506"
            data-name="Rectangle 53"
            transform="translate(356.484 185.295)"
          ></path>
          <path
            d="M0 0H11.99V11.99H0z"
            fill="#040506"
            data-name="Rectangle 54"
            transform="translate(356.484 233.256)"
          ></path>
          <path
            d="M0 0H11.99V11.99H0z"
            fill="#040506"
            data-name="Rectangle 55"
            transform="translate(332.504 185.295)"
          ></path>
          <path
            d="M0 0H11.99V11.99H0z"
            fill="#040506"
            data-name="Rectangle 56"
            transform="translate(345.039 197.831)"
          ></path>
          <path
            d="M0 0H35.971V11.99H0z"
            fill="#040506"
            data-name="Rectangle 57"
            transform="translate(296.533 245.247)"
          ></path>
          <path
            d="M0 0H11.99V11.99H0z"
            fill="#040506"
            data-name="Rectangle 58"
            transform="translate(344.494 245.247)"
          ></path>
          <path
            d="M0 0H11.99V11.99H0z"
            fill="#040506"
            data-name="Rectangle 59"
            transform="translate(332.504 256.945)"
          ></path>
          <path
            d="M0 0H11.99V11.99H0z"
            fill="#040506"
            data-name="Rectangle 60"
            transform="translate(356.63 281.071)"
          ></path>
          <path
            d="M0 0H11.99V11.99H0z"
            fill="#040506"
            data-name="Rectangle 61"
            transform="translate(356.484 256.945)"
          ></path>
          <path
            d="M0 0H11.99V11.99H0z"
            fill="#040506"
            data-name="Rectangle 62"
            transform="translate(332.504 233.256)"
          ></path>
          <path
            d="M0 0H11.99V11.99H0z"
            fill="#040506"
            data-name="Rectangle 63"
            transform="translate(308.523 233.256)"
          ></path>
          <path
            d="M0 0H11.99V11.99H0z"
            fill="#040506"
            data-name="Rectangle 64"
            transform="translate(296.533 221.266)"
          ></path>
          <path
            d="M0 0H11.99V11.99H0z"
            fill="#040506"
            data-name="Rectangle 65"
            transform="translate(308.523 185.295)"
          ></path>
          <path
            d="M0 0H11.99V11.99H0z"
            fill="#040506"
            data-name="Rectangle 66"
            transform="translate(272.552 185.295)"
          ></path>
          <path
            d="M0 0H11.99V11.99H0z"
            fill="#040506"
            data-name="Rectangle 67"
            transform="translate(308.523 197.286)"
          ></path>
          <path
            d="M0 0H11.99V11.99H0z"
            fill="#040506"
            data-name="Rectangle 68"
            transform="translate(296.533 197.286)"
          ></path>
          <path
            d="M0 0H11.99V11.99H0z"
            fill="#040506"
            data-name="Rectangle 69"
            transform="translate(320.513 197.286)"
          ></path>
          <path
            d="M0 0H11.99V24.273H0z"
            fill="#040506"
            data-name="Rectangle 70"
            transform="translate(260.562 304.906)"
          ></path>
          <path
            d="M0 0H11.99V24.273H0z"
            fill="#040506"
            data-name="Rectangle 71"
            transform="translate(284.543 304.906)"
          ></path>
          <path
            d="M0 0H11.99V36.263H0z"
            fill="#040506"
            data-name="Rectangle 72"
            transform="translate(272.552 304.906)"
          ></path>
          <path
            d="M0 0H11.99V12.136H0z"
            fill="#040506"
            data-name="Rectangle 73"
            transform="translate(272.552 292.842)"
          ></path>
          <path
            d="M0 0H11.99V12.136H0z"
            fill="#040506"
            data-name="Rectangle 74"
            transform="translate(284.543 341.096)"
          ></path>
          <path
            d="M0 0H35.971V11.99H0z"
            fill="#040506"
            data-name="Rectangle 75"
            transform="translate(236.582 280.925)"
          ></path>
          <path
            d="M0 0H11.99V11.99H0z"
            fill="#040506"
            data-name="Rectangle 76"
            transform="translate(212.601 280.925)"
          ></path>
          <path
            d="M0 0H11.99V11.99H0z"
            fill="#040506"
            data-name="Rectangle 77"
            transform="translate(248.572 292.916)"
          ></path>
          <path
            d="M0 0H11.99V11.99H0z"
            fill="#040506"
            data-name="Rectangle 78"
            transform="translate(200.611 280.925)"
          ></path>
          <path
            d="M0 0H27.196V11.99H0z"
            fill="#040506"
            data-name="Rectangle 79"
            transform="translate(200.611 256.945)"
          ></path>
          <path
            d="M251.444 184.711l22.706 48.545 20.82-.584-19.546-47.372z"
            fill="url(#linear-gradient-6)"
            data-name="Path 45"
            transform="translate(-2.872)"
          ></path>
          <path
            d="M327.993 285.534h46.852v24.273z"
            fill="url(#linear-gradient-7)"
            data-name="Path 46"
            transform="translate(-6.371 -4.609)"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default SwLogoSvg;
