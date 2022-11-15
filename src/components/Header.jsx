import React from 'react'
import logo from '../assets/img/pincel-logo.png';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'
import '../css/reset.css';
import '../css/style.css';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};


export const Header = () => {

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<header className="header">
			<nav className="header__nav">
				<ul className="header__list">
					<li></li>
					<li>
						<Link to="/">
							<img className="header__logo" src={logo} alt="Logo" />
						</Link>
					</li>
					<li>
						<Button color="info" onClick={handleOpen} startIcon={<InfoIcon />} variant="contained" size="small" id="btn-infos">
							Instruções
						</Button>
					</li>
					<Modal
						aria-labelledby="transition-modal-title"
						aria-describedby="transition-modal-description"
						open={open}
						onClose={handleClose}
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 500,
						}}
					>
						<Fade in={open}>
							<Box sx={style}>
								<article className="close-modal">
									<IconButton aria-label="upload picture" size="large">
										<CloseIcon fontSize="inherit" onClick={handleClose}/>
									</IconButton>
								</article>
								<Typography id="transition-modal-title" variant="h3" component="h1">
								Dimensões
								</Typography>
								<Typography className="transition-modal-description" sx={{ mt: 2, fontSize: '1.5rem' }}>
								<b>1. </b> Nenhuma parede pode ter menos de 1 metro quadrado nem mais de 50 metros quadrados, mas podem possuir alturas e larguras diferentes;
								</Typography>
								<Typography className="transition-modal-description" sx={{ mt: 1, fontSize: '1.5rem' }}>
									<b>2. </b>O total de área das portas e janelas deve ser no máximo 50% da área de parede;
								</Typography>
								<Typography className="transition-modal-description" sx={{ mt: 1, fontSize: '1.5rem' }}>
								<b>3. </b> A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta;
								</Typography>
								<Typography className="transition-modal-description" sx={{ mt: 2, fontSize: '1.5rem' }}>
								<b>4. </b> Cada janela possui as medidas: 2,00 x 1,20 mtos;
								</Typography>
								<Typography className="transition-modal-description" sx={{ mt: 2, fontSize: '1.5rem' }}>
								<b>5. </b> Cada porta possui as medidas: 0,80 x 1,90;
								</Typography>
								<Typography className="transition-modal-description" sx={{ mt: 2, fontSize: '1.5rem' }}>
								<b>6. </b> Cada litro de tinta é capaz de pintar 5 metros quadrados;
								</Typography>
								<Typography className="transition-modal-description" sx={{ mt: 2, fontSize: '1.5rem' }}>
								<b>7. </b> Não considerar teto nem piso;
								</Typography>
								<Typography className="transition-modal-description" sx={{ mt: 2, fontSize: '1.5rem' }}>
								<b>8. </b> As variações de tamanho das latas de tinta são:
									<br/>
									<ul className="header__lista-tamanhos-tinta">
										<li>0,5 L</li>
										<li>2,5 L</li>
										<li>3,6 L</li>
										<li>18 L</li>
									</ul>
								</Typography>
								<Typography className="transition-modal-description" sx={{ mt: 2, fontSize: '1.5rem' }}>
									<b>Obs: </b> O separador de casas decimais é o ponto (.) Ex: 1.98
								</Typography>
							</Box>
						</Fade>
					</Modal>
				</ul>
			</nav>
		</header>
	);
}