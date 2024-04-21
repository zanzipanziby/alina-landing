import {ReactNode} from "react";
import s from './Container.module.scss'

export const Container = ({children, className = ''}: Props) => {
	return <div className={`${s.root} ${className}`}>{children}</div>
}

type Props = {
	children: ReactNode
	className?: string
}