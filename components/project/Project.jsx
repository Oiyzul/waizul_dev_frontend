import { Container } from "./projectStyle";
import img from "../../assets/garden.jpg";
const Project = () => {
	return (
		<Container>
			<div className='desc'>desc</div>
			{/* <div className='img-container'> */}
				<img src={img} alt='' />
				<img src={img} alt='' />
			{/* </div> */}
		</Container>
	);
};

export default Project;
