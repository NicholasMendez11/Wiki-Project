import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

type props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpen: () => void;
  title: string;
  children: React.ReactNode;
};
export function Modal({ open, handleOpen, title, children }: props) {
  return (
    <>
      <Dialog open={open} handler={handleOpen} size="lg">
        <DialogHeader>{title}</DialogHeader>
        <DialogBody>{children}</DialogBody>
      </Dialog>
    </>
  );
}
