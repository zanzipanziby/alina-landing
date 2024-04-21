import s from './NameCard.module.scss'
import {ReactNode} from "react";

export const NameCard = ({children, className = ''}: Props) => {
	return (
		<div className={`${s.wrapper} ${className}`}>
			{children}
		</div>
	);
};

type Props = {
	children: ReactNode
	className?: string,
}