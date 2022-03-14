import emblerstyles from "../styles/slider.module.css"


export const  DotButton = ({ selected, onClick}) => {

    return (
        <div className={ `${emblerstyles.embla__dot } ${ selected ? emblerstyles.embla__dot.is-selected :  ""} ` } onClick={onClick}></div>
    )

}

export const CurrentImage = ({ selected, index, children }) => {


    return (
        <div className={`${ emblerstyles.embla_image } ${ selected ? emblerstyles.embla_image.is-selected : emblerstyles.embla_image.index   } `}>
            { children }
        </div>
    )

}