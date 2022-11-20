import { useState } from "react";
import { ModalComponent } from "./Modal";
import data from "./data.json";
import secondData from './dataSecond.json'
import EducationElement from "./EducationElement";
import styles from "./index.module.scss";

export const EducationPage = () => {
  const [open, setOpen] = useState(false);
  const [textToModal, setTextToModal] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSetTextToModal = (text: string) => setTextToModal(text);

  return (
    <>
      <p className={styles.header}>
        Rzeczy których nie można wrzucić do kompostownika
      </p>
      <div className={styles.wrapper}>
        <div className={styles.EducationElementsWrapper}>
          {data.list.map((item) => (
            <EducationElement
              handleOpenFromChild={() => handleOpen()}
              handleSetTextToModalFromChild={(text: string) =>
                handleSetTextToModal(text)
              }
              description={item.description}
              name={item.name}
              imageName={item.imgName}
            />
          ))}
        </div>
        {open && (
          <ModalComponent
            handleClose={() => handleClose()}
            open={open}
            text={textToModal}
          />
        )}
      </div>
      <p className={styles.headerGreen}>
        Zaskakujące odpadki które można <br></br>
        kompostować
      </p>
      <div className={styles.wrapperGreen}>
        <div className={styles.EducationElementsWrapper}>
          {secondData.list.map((item) => (
            <EducationElement
              handleOpenFromChild={() => handleOpen()}
              handleSetTextToModalFromChild={(text: string) =>
                handleSetTextToModal(text)
              }
              name={item.name}
              imageName={item.imgName}
            />
          ))}
        </div>
        {open && (
          <ModalComponent
            handleClose={() => handleClose()}
            open={open}
            text={textToModal}
          />
        )}
      </div>
    </>
  );
};
