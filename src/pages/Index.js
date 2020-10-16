import React from 'react'
import styles from './index.module.css'

import { Link } from 'react-router-dom'

export default () => {
	return (
		<>
			<div className={styles.title}>
				<h1>Bem Vindo ao Meu Canto na Internet!</h1>
				<p>Você está aqui por...</p>
			</div>
			<div className={styles.button_list}>
				<p>
					<Link to='/freelance'>Serviços</Link>
				</p>
				<p>
					<Link to="/art">Arte</Link>
				</p>
			</div>
		</>
	)
}
