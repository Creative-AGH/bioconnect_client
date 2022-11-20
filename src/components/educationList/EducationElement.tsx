import { useState, useEffect } from "react";
import styles from "./index.module.scss";

interface IEducationProps {
  name: string;
  imageName?: string;
  description?: string;
  handleOpenFromChild: any;
  handleSetTextToModalFromChild: any;
}

const EducationElement = ({
  name,
  imageName,
  description,
  handleOpenFromChild,
  handleSetTextToModalFromChild,
}: IEducationProps) => {
  const [imgSrc, setImgSrc] = useState("");
  useEffect(() => {
    import(`./icons/${imageName}.svg`).then((module) => {
      setImgSrc(module.default);
    });
  }, []);

  const getDetails = () => {
    handleOpenFromChild();
    handleSetTextToModalFromChild(description);
  };
  return (
    <div className={styles.educationElement} onClick={() => getDetails()}>
      <img src={imgSrc} alt={`${imageName}`} className={styles.img} />
      <p>{name}</p>
    </div>
  );
};

export default EducationElement;
