import { useEffect, useState } from "react";


const useWindowScroll = () => {
    const getWindowScroll = () => ({
        scrollY: window.scrollY,
        scrollX: window.scrollX,
    })
    const [windowScroll, setWindowScroll] = useState(getWindowScroll);

    useEffect(()=>{
        const hendler = () => setWindowScroll(getWindowScroll);

        window.addEventListener('scroll', hendler)

        return () =>  window.removeEventListener('scroll', hendler);
    },[])

    return windowScroll;
}
export default useWindowScroll;