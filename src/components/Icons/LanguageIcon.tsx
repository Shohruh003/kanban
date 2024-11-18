import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";
import { CSSProperties } from "styled-components";

const LanguageIcon: FC<SvgIconProps> = props => (
    <SvgIcon {...props} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none" style={props.sx as CSSProperties}>
    <rect width="50" height="50" rx="25" fill="white"/>
    <g clip-path="url(#clip0_58_7132)">
    <path d="M35.7475 21.6663C35.7429 21.6506 35.7366 21.6356 35.7288 21.6213C34.9487 19.1425 33.3288 17.0313 31.2025 15.6213C31.1763 15.6025 31.1462 15.5838 31.12 15.5688C29.3007 14.3793 27.1736 13.7472 25 13.75C23.3012 13.75 21.6887 14.1288 20.2413 14.8113C20.215 14.815 20.1925 14.8263 20.17 14.8413C18.1072 15.8278 16.3918 17.4164 15.25 19.3975C15.2313 19.4238 15.2162 19.45 15.2012 19.48C14.7678 20.2427 14.4279 21.0548 14.1888 21.8988C14.185 21.9063 14.1813 21.9175 14.1775 21.9288C14.1738 21.9363 14.1738 21.9475 14.1738 21.9588C14.17 21.9625 14.17 21.9663 14.17 21.97C13.8962 22.9338 13.75 23.95 13.75 25C13.75 27.79 14.77 30.3438 16.4575 32.3088C16.4613 32.3163 16.4612 32.32 16.465 32.32C16.4875 32.3463 16.5063 32.3688 16.5325 32.3913C16.5363 32.3988 16.5438 32.4025 16.5475 32.4063C18.6062 34.7575 21.6287 36.25 25 36.25C31.2025 36.25 36.25 31.2025 36.25 25C36.25 23.86 36.0812 22.7575 35.7587 21.7188L35.7475 21.6663ZM25 35.5C21.9213 35.5 19.1463 34.1688 17.2225 32.05L17.4887 31.4875C17.5675 31.3188 17.62 31.1388 17.6425 30.9475L17.8938 28.4763C17.92 28.2475 18.0325 28.0338 18.2013 27.8913L18.4375 27.6925C18.7712 27.4075 18.9738 27.0138 19.0075 26.5788L19.075 25.765C19.105 25.3638 18.9887 24.9738 18.7525 24.6588L17.7625 23.3425C17.605 23.1325 17.4025 22.9675 17.1588 22.8475L14.9913 21.82C15.192 21.1912 15.4506 20.5823 15.7638 20.0013H17.53C17.8187 20.0013 18.085 19.8588 18.2463 19.6263L18.91 18.6775C18.925 18.655 18.9513 18.6363 18.9738 18.6288L19.9113 18.34C19.9262 18.3363 19.9375 18.3325 19.9488 18.3325H21.0138C21.2613 18.3325 21.5013 18.2275 21.6663 18.0438L22.69 16.8963C22.885 16.6788 22.9563 16.3788 22.885 16.0975C22.8138 15.8163 22.6075 15.5913 22.3337 15.4938C22.06 15.3963 21.7263 15.2763 21.3737 15.145C22.5063 14.7288 23.725 14.5 25 14.5C26.89 14.5 28.6675 15.0025 30.2013 15.8838C30.1038 15.9363 30.025 15.9775 29.98 16C29.74 16.0338 29.47 16.075 29.275 16.105L29.1175 16.1313C28.945 16.165 28.7875 16.2588 28.6863 16.39L27.9587 17.3238C27.6962 17.6613 27.64 18.1 27.8088 18.4975C27.9775 18.8913 28.3338 19.1575 28.765 19.2025L29.7175 19.2963C29.9613 19.3263 30.145 19.5288 30.145 19.7725V20.4025C30.145 20.5563 30.025 20.6913 29.8713 20.7063L29.1362 20.7813C28.9675 20.8038 28.81 20.89 28.69 21.025L28.4125 21.3475C28.3786 21.3883 28.3362 21.4212 28.2883 21.4438C28.2403 21.4665 28.188 21.4784 28.135 21.4788C28.0338 21.4863 27.9175 21.4338 27.8425 21.3513L27.4 20.8413C27.265 20.6913 27.07 20.605 26.8713 20.605H24.7113C24.295 20.605 23.8937 20.7813 23.6125 21.0963C23.3312 21.4113 22.9262 21.865 22.6187 22.225C22.2628 22.6528 22.0666 23.191 22.0638 23.7475V24.79C22.0647 25.2488 22.2477 25.6886 22.5725 26.0126C22.8973 26.3367 23.3374 26.5188 23.7963 26.5188H25.015C25.3225 26.5188 25.5925 26.7475 25.6412 27.0475L25.7125 27.4638C25.7725 27.8238 26.005 28.1238 26.3312 28.2663C26.5862 28.3788 26.7475 28.63 26.7475 28.9075C26.7475 29.0238 26.7212 29.1325 26.665 29.2338C26.485 29.59 26.3912 29.9725 26.3912 30.37C26.3912 30.9288 26.5863 31.48 26.9425 31.915L27.595 32.7138C27.7332 32.8843 27.9074 33.0221 28.1052 33.1174C28.3029 33.2127 28.5193 33.2631 28.7388 33.265H28.7612C29.2 33.265 29.6163 33.0775 29.905 32.7438L32.47 29.755C32.8375 29.3313 32.8638 28.7275 32.5338 28.2813C32.4737 28.2025 32.4437 28.1013 32.4437 28C32.4437 27.8763 32.4925 27.7563 32.5863 27.67C32.995 27.2688 33.5462 26.74 33.8312 26.47C34.0375 26.2825 34.1537 26.0125 34.1537 25.7275V24.835C34.1537 24.6475 34.0787 24.4713 33.9437 24.3363C33.8046 24.2033 33.6187 24.1305 33.4263 24.1338L32.5863 24.1638L31.8288 22.5775L32.1325 22.1688L34.9938 22.3263C35.0387 22.3263 35.0763 22.3225 35.1475 22.3C35.3763 23.1625 35.5 24.0663 35.5 25C35.5 30.79 30.79 35.5 25 35.5Z"/>
    </g>
    <defs>
    <clipPath id="clip0_58_7132">
    <rect width="24" height="24" fill="white" transform="translate(13 13)"/>
    </clipPath>
    </defs>
    </SvgIcon>
);

export default LanguageIcon;
