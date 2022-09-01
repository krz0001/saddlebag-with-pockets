import {ReactComponent as Icon} from './svg/ItemCategory_Minion.svg'
import {FC} from "react";

type Props = {
    className?: string;
}

export const Minions: FC<Props> = ({className = ''}) => {
    return <Icon className={className}/>
}
