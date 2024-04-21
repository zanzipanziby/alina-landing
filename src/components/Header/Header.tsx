import {Location} from './Location'
import {NameCard} from "./NameCard";
import {Phone} from "./Phone";
import {Container} from " /components/Container";
import s from './Header.module.scss'

export const Header = () => {
	return (
		<header className={s.header}>
			<Container className={s.headerContainer} >
				<Location textFirstLine={'Червень'} textSecondLine={'и за его пределами'}/>
				<NameCard className={s.nameCard}>
					<div style={{
						display: 'flex',
						flexGrow: '1',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						marginTop: '-20px'
					}}>
						<span>Aля</span>
						<span>Паланевич</span>
					</div>
				</NameCard>
				<Phone/>
			</Container>
		</header>
	);
};
