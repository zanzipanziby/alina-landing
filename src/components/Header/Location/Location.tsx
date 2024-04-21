import s from './Location.module.scss'
import Image from 'next/image'
import locationIco from '../../../../public/gps.png'

export const Location = ({textFirstLine, textSecondLine}: Props) => {
	return (
		<div className={s.wrapper}>
			<Image src={locationIco} alt="icon" width={20} height={27}/>
			<p className={s.text}>
				<span>{textFirstLine}</span>
				<span>{textSecondLine}</span>
			</p>
		</div>
	);
};

type Props = {
	textFirstLine: string;
	textSecondLine: string;
}