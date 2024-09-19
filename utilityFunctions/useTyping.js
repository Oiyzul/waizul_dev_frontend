import { useEffect } from "react";

const useTyping = (ref, text, speed, delay, color) => {
	useEffect(() => {
		let textPosition = 0;

		const textArray = [text];

		setTimeout(() => {
			function typing() {
				ref.current.innerHTML = textArray[0].substring(0, textPosition);
				ref.current.style.color = color;

				if (textPosition++ != textArray[0].length) {
					setTimeout(typing, speed);
				}
			}

			typing();
		}, delay);
	}, []);
};

export default useTyping;
