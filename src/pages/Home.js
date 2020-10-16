import React from 'react'
import './Home.css'

export default () => {
	return(
		<>
			<div class='container'>
				<h1>Bem Vindo ao Meu Canto na Internet!</h1>
			</div>
			<div class="about_me">
				<div class="about_me__card">
					<h2> Quem sou eu? </h2>
					<p>
						Meu nome é Danilo, sou estudante de Ciência da Computação na UFRJ e no geral sou um entusiasta de tudo que é tecnologia. Curto bastante programar, mas também pilho muito com artes marciais, cultura nerd e filosofia.
					</p>
				</div>
				<div class="about_me__card">
					<h2> O que eu faço? </h2>
					<p> 
						Atualmente estou focando nos estudos, mas sou freelancer e posso te oferecer protótipos, landing pages e, dependendo, sistemas web simples e aplicativos para Android. 		
					</p>
				</div>
				<div class="about_me__card">
					<h2> Como eu posso te ajudar? </h2>
					<p> 
						Só entrar em contato comigo que podemos falar sobre como posso trazer sua ideia para realidade
					</p>
				</div>
			</div>
		</>
	);
}
