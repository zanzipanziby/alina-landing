import s from './NameCard.module.scss'
import {ReactNode} from "react";

export const NameCard = ({children}: Props) => {
	return (
		<div className={s.wrapper}>
			{children}
		</div>
	);
};

type Props = {
	children: ReactNode
}