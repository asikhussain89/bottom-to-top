import React from 'react';

const showHideBTTDom = () => {
    
    if ( window.pageYOffset > 0 ) {

        document.getElementById("bTTDomId").style.visibility = "visible";
        document.getElementById("bTTDomId").style.opacity = "1";
    }
    else {

        document.getElementById("bTTDomId").style.opacity = "0";
        document.getElementById("bTTDomId").style.visibility = "hidden";
    }
}

window.onscroll = showHideBTTDom;

const defaultMoveToTop = () => {

    window.scrollTo({top: "0", behavior: "smooth"});
}

const defaultBTTOnMouseOver = () => {

    document.getElementById("bTTDomId").style.backgroundColor = "#A6E9FA";
}

const defaultBTTOnMouseOut = () => {

    document.getElementById("bTTDomId").style.backgroundColor = "#000";
}

function BottomToTop(props) {

    const defaultMoveToTopFunc = props.renderMoveToTopFunc ? props.renderMoveToTopFunc : defaultMoveToTop;

    const defaultBTTOnMouseOverFunc = props.renderOnMoveOverFunc ? props.renderOnMoveOverFunc : defaultBTTOnMouseOver;

    const defaultBTTOnMouseOutFunc = props.renderOnMoveOutFunc ? props.renderOnMoveOutFunc : defaultBTTOnMouseOut;


    return(

        <div id="bTTDomId" style={props.style} onClick={defaultMoveToTopFunc} onMouseOver={defaultBTTOnMouseOverFunc} onMouseOut={defaultBTTOnMouseOutFunc}>
            <span>TOP</span>
        </div>
    )
}

BottomToTop.defaultProps = {
    style : {
        visibility: "hidden",
        opacity: "0",
        position: "fixed",
        width: "50px",
        height: "25px",
        backgroundColor: "#000",
        bottom: "10px",
        right: "10px",
        color: "#fff",
        padding: "12px 0",
        borderRadius: "7px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "bold",
        transition: "visibility .8s, opacity .8s",
        WebkitTransition: "visibility .5s, opacity .5s"
    },
    hasMouseHover: true
}

export default BottomToTop
export { BottomToTop }