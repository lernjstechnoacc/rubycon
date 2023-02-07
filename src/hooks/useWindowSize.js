import { useEffect, useState } from "react";


const useWindowSize = () => {
    const getWindowSize = () => ({
        width: window.innerWidth,
        height: window.innerHeight
    })
    const [windowSize, setWindowSize] = useState(getWindowSize);

    useEffect(()=>{
        const hendler = () => setWindowSize(getWindowSize);

        window.addEventListener('resize', hendler);

        return () =>  window.removeEventListener('resize', hendler);
    },[])

    return windowSize;
}
export default useWindowSize;