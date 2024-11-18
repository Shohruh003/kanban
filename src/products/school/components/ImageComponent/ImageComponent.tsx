import { FC } from "react";
import { CSSProperties } from "styled-components";

interface IImageComponentProps {
    src: string;
    styles?: CSSProperties;
}

const ImageComponent: FC<IImageComponentProps> = ({ src, styles }) => {
    return <img
        style={{
            height: "70px",
            width: "70px",
            borderRadius: "100%",
            objectFit: "contain",
            ...(styles || {})
        }}
        src={src}
    />;
}

export default ImageComponent;
