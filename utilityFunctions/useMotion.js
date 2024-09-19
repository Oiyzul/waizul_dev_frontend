import { useAnimationControls, useInView } from "framer-motion";
import { useEffect, useLayoutEffect } from "react";
import { offscreen, onscreen } from "./motionVariants";

const useMotion = (ref) => {
	const controls = useAnimationControls();
	const isInView = useInView(ref);

	useEffect(() => {
		if (isInView) {
			controls.start(onscreen);
			return;
		}

		controls.start(offscreen);
	}, [isInView, controls]);
};

export default useMotion;
