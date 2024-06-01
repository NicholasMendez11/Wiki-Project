import React from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";

type props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpen: () => void;
  title: string;
  children: React.ReactNode;
};
export function Modal({ open, handleOpen, children }: props) {
  return (
    <>
      <Dialog open={open} handler={handleOpen} size="lg">
        <DialogBody>{children}</DialogBody>
      </Dialog>
    </>
  );
}
