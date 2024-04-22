import s from './FirstSection.module.scss'
import {Container} from " /components/Container";

export const FirstSection = () => {
	return (
		<section className={s.section}>
			<Container className={s.container}>
				<h1 className={s.title}>
					<span>Ведущая</span>
					<span className={s.bold}>мероприятий</span>
					<span className={s.bold}>в Червене</span>
				</h1>
				<div className={s.photo}></div>

			</Container>
		</section>
	);
};

