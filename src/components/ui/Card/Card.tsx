import {ReactNode} from "react";
import s from './Card.module.scss'

export const Card = ({children, className}: Props) => {
	return (

		<div className={`${s.wrapper} ${className ? className : ''}`}>
			<div className={s.container}>
				{children}
			</div>
		</div>
	);
};

type Props = {
	children: ReactNode
	variant?: 'name' | 'types' | 'description',
	className?: string,
}