import * as React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

function CustomDialog(props) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    props.onClose();
  };

  return (
    <div>
      <Dialog  className="p-3" open={open} onClose={handleClose}>
        <h2 className="p-4">{props.title}</h2>
        <DialogContent>{props.children}</DialogContent>
      </Dialog>
    </div>
  );
}

export default CustomDialog;
