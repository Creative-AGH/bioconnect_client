import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./index.module.scss";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";

interface IMarkerDetails {
  accountId: string;
  categoryOfWaste: string;
  dateOfCreate: string;
  description: string;
  howMuchBioWaste: number;
  id: number;
  x: number;
  y: number;
}

interface IProps {
  open: boolean;
  handleClose: any;
  data: IMarkerDetails | undefined;
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const MarkerModal = ({ open, handleClose, data }: IProps) => (
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Opis
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        szczegóły: {data?.description}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Ilość: {data?.howMuchBioWaste} kg
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem className={styles.listItem}>
          <ListItemAvatar>
            <Avatar>
              <QueryBuilderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Data wystawienia zgłoszenia"
            secondary={data?.dateOfCreate}
          />
        </ListItem>
      </List>
      <div className={styles.ownerWrapper}>
        <Avatar alt="Travis Howard" src="https://picsum.photos/200/300" />
        <p>{data?.accountId}</p>
      </div>
      <div className={styles.markModalBtnsWrapper}>
        <button className={styles.markModalBtnPink}>napisz</button>
        <button className={styles.markModalBtn}>zadzwoń</button>
      </div>
      <CloseIcon className={styles.closeIcon} onClick={handleClose} />
    </Box>
  </Modal>
);
