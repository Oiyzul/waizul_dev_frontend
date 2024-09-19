import styled from "styled-components";
import bg from "../../assets/welcome-bg.jpg";

export const Background = styled.div`
	height: 100vh;
	background-image: url(${bg});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	position: absolute;
`;
export const Container = styled.div`
	width: 100%;
	height: 100%;
`;
export const WelcomeText = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	background: transparent;
	display: grid;
	place-items: center;
	text-align: center;
	color: white;
	h1 {
		font-size: 4rem;
	}
	p {
		font-size: 1.5rem;
	}
	.text-reveal {
		width: 100vw;
    background: transparent;
		clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
		transform: translateY(-3em);
		transition: all 1.5s;
	}
`;
export const IntroText = styled.div``;
