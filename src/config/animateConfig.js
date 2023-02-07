const Left = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    visable: custom => ({
        opacity: 1,
        x: 0,
        transition: {delay: custom * 0.2}
    })
}
const Opacity = {
    hidden: {
        opacity: 0,
        
        
    },
    visable: custom => ({
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
}
const Rotate = {
    hidden: {
        rotate: -90,
        opacity: 0,
        
    },
    visable: custom => ({
        opacity: 1,
        rotate: 0,
        transition: {delay: custom * 0.2}
    })
}
const Opacity50 = {
    hidden: {
        opacity: 0,
        
        
    },
    visable: custom => ({
        opacity: 0.5,
        transition: {delay: custom * 0.2}
    })
}
const Right = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    visable: custom => ({
        opacity: 1,
        x: 0,
        transition: {delay: custom * 0.2}
    })
}
const Bottom = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    visable: custom => ({
        opacity: 1,
        y: 0,
        transition: {delay: custom * 0.2}
    })
}
const Bottom50 = {
    hidden: {
        y: 50,
    },
    visable: custom => ({
        y: 0,
        transition: {delay: custom * 0.2}
    })
}
export {Left, Opacity, Right, Bottom, Opacity50, Bottom50, Rotate};