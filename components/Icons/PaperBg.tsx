import { SVGProps } from 'react'

export const RedLine = (props: SVGProps<SVGSVGElement>) => {
    return (

        <svg width="7" height="318" viewBox="0 0 7 318" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M5.22062 0.499958C5.49533 57.3699 4.16624 114.278 5.1369 171.138C5.55057 195.371 6.4837 219.255 4.4988 243.393C3.14098 259.905 0.187814 277.881 0.526826 294.509L0.993562 317.402" strokeLinecap="round" stroke="#FF4B72" />
        </svg>
    )
}


export const Blueline = (props: SVGProps<SVGSVGElement>) => {
    return (

        <svg width="462" height="3" viewBox="0 0 462 3" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M0.5 2.5C154.172 1.36452 307.825 0.5 461.5 0.5" strokeLinecap="round" stroke="#9ECBF0" />
        </svg>
    )
}

