'use client'
import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	margin: 3px;
  scroll-snap-align: center;
	display: flex;
	justify-content: space-between;
	gap: 2rem;

	.desc {
    flex: 1;
	}
	/* .img-container {
		width: 66.6%;
		height: 70%;
    display: flex;
    gap: 1rem; */
		img {
      flex: 1;
			height: 70%;
      object-fit: cover;
		}
	/* } */
`;
