import { useActiveSectionContext } from "@/context/active-section-context";
import { TSectionName } from "@/types";
import { useInView } from "framer-motion";
import { useEffect } from "react";

export function useSectionInView(ref, sectionName:TSectionName, amount = 0.1) {
  const isInView = useInView(ref, { amount: amount });

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [isInView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    isInView
  }
}
