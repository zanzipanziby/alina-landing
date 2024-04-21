import React, {ReactNode} from 'react';

import s from './Button.module.scss'

export const Button = ({children,variant = 'primary',className }:Props) => {

	return (
		<button className={`${s.root} ${s[variant]} ${className ?? ''}`}>
			{children}
		</button>
	);
};

type  Props = {
	children: ReactNode,
	className?: string,
	variant?: 'primary' | 'secondary'
}