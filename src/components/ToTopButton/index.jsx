import { useEffect, useState } from "react";
import { BackToTopButton } from "./style";
import { ReactComponent as ArrowUp } from "../../assets/icons/arrow-up.svg";

const ToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // No need to useEffect with great urgency in this case But we may put
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      <BackToTopButton onClick={scrollToTop} show={`${showButton}`}>
        <ArrowUp />
      </BackToTopButton>
    </>
  );
};

export default ToTopButton;
