import { IEvento } from "../../interfaces/IEvento";
import useSetListOfEvents from "./useSetListOfEvents";

const useUpdateEvent = () => {
    const setEventos = useSetListOfEvents();

    return (event: IEvento) => {
        return setEventos(listaAntiga => {
            const index = listaAntiga.findIndex(evt => evt.id === event.id);
            return [...listaAntiga.slice(0, index), event, ...listaAntiga.slice(index + 1)]
        })
    }
}

export default useUpdateEvent;