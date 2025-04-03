import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { ReactElement, ReactNode } from "react";
import '.style.scss'

type TButtonProps = {
    children: ReactNode
    icon: FontAwesomeIconProps
}

export const Button : React.FC<TButtonProps> = ({children, icon}) : ReactElement => {
    return <button>
        {children}
    </button>
}