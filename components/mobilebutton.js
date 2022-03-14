

export default function MobileButton({ color, borderRadius,paddingLeft ,paddingRight,paddingTop, paddingBottom, children,backgroundColor, fontSize, position, height, flexGrow, display, width , marginTop, marginBottom, fontWeight}){

    return(
        <button  style={{
            borderRadius: borderRadius, 
            color : color,
            paddingLeft : paddingLeft, 
            paddingRight : paddingRight, 
            paddingBottom : paddingBottom, 
            paddingTop : paddingTop, 
            backgroundColor: backgroundColor,
            outline: "none",
            border:"none",
            cursor: "pointer",
            fontSize: fontSize, 
            position: position,
            height:height,
            flexGrow: flexGrow,
            display: display,
            width: width,
            marginTop: marginTop,
            marginBottom: marginBottom,
            fontWeight: fontWeight
        }}>
            { children }
        </button>
    )

}