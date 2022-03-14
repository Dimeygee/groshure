

export default function Button ({ color, borderRadius,paddingLeft ,paddingRight,paddingTop, paddingBottom, children,backgroundColor, fontSize, position, height, flexGrow, display, width }) {

    return(
        <button class='hidden md:block font-[circularstd] ' style={{
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
            width: width
        }}>
            { children }
        </button>
    )

}



