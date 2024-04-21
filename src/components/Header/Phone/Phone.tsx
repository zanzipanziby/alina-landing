import phoneIco from '../../../../public/phone.svg'
import Image from "next/image";
import s from './Phone.module.scss'

export const Phone = () => {
	return (
		<div className={s.phoneWrapper}>
			<Image src={phoneIco} alt="phone" height={20} width={20} />
			<a className={s.phone} href={`tel:${+375336384088}`}>+375(33)638-40-88</a>
		</div>
	);
};

