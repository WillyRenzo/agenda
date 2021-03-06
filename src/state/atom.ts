import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEvento } from "../interfaces/IFiltroDeEvento";
import { eventosAsync } from "./seletores";

export const listOfEventsState = atom<IEvento[]>({
  key: "listOfEventsState",
  default: eventosAsync
});

export const filtroDeEventos = atom<IFiltroDeEvento>({
    key: "filtroDeEventos",
    default: {}
})
