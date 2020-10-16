import React from 'react'
import styles from './Freelance.module.css'

import { Link } from 'react-router-dom'

export default () => {
	return(
		<>
			<div className={styles.banner}>
				<h1 className={styles.title}>No que posso te ajudar hoje?</h1>
			</div>
			<hr />
			<div className={styles.about_me}>
				<div className={styles.about_me__card}>
					<h2> Quem sou eu? </h2>
					<p>
						Meu nome é Danilo, sou estudante de Ciência da Computação na UFRJ, freelancer e no geral sou um entusiasta de tudo que é tecnologia.
					</p>
				</div>
				<div className={styles.about_me__card}>
					<h2> O que eu faço? </h2>
					<p> 
						Posso te oferecer scripts de automatização, protótipos de aplicativos e sistemas web, landing pages para seu negócio e, dependendo, sistemas web simples e aplicativos para Android. 
					</p>
				</div>
				<div className={styles.about_me__card}>
					<h2> Como eu posso te ajudar? </h2>
					<p> 
						Só entrar em contato comigo que podemos falar sobre como posso trazer sua ideia para realidade
					</p>
				</div>
			</div>
			<div className={styles.portfolio}>
				<h2> No que já trabalhei </h2>
				<ul>
					<li><b><a target="blank" href="https://engmarket.com.br"> Engmarket</a></b>: Um sistema web de contratação de engenheiros que desenvolvi quando trabalhava como desenvolvedor front-end na <a target="blank" href="https://ejcm.com.br">EJCM</a></li>
					<li><b><a target="blank" href="https://github.com/dandeeccastro/podpy">PodPY</a></b>: Um script que pega arquivos de áudio e músicas para compilar automaticamente um podcast</li>
					<li><b><a target="blank" href="https://github.com/dandeeccastro/dandeeccastro.github.io">Este Site</a></b>: O site que você está vendo agora, feito em ReactJS</li>
				</ul>
			</div>
			<hr />
		</>
	);
}
