import { AnyObject } from "./global";

export interface IModalContext {
  modals: IModal[];
  closedModals: string[];
  openModal: (name: string, props: AnyObject) => void;
  closeModal: (name: string) => void;
}

export interface IModal {
  name: string;
  props: AnyObject;
};

export interface IModalProps {
  modal: IModal;
  Component: React.LazyExoticComponent<any>;
}