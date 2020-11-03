import React from 'react'
import styles from './index.module.css'

import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default () => {
	return (
		<div>
			<div className={styles.main_container}>
				<div className={styles.title}>
					<h1>Bem Vindo ao Meu Canto na Internet!</h1>
					<p>Você está aqui por...</p>
				</div>
			</div>
			<div className={styles.button_list}>
				<Button variant="outline-primary" size='lg'>
					<Link to='/freelance'>Serviços</Link>
				</Button>
				<Button variant="outline-primary" size='lg'>
					<Link to="/art">Arte</Link>
				</Button>
			</div>
		</div>
	)
}
