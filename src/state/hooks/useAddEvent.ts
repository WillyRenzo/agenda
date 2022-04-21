import { obterId } from "../../common/util";
import { IEvento } from "../../interfaces/IEvento";
import useSetListOfEvents from "./useSetListOfEvents";

const useAddEvent = () => {
    const setEvents = useSetListOfEvents();

    return (evento: IEvento) => {
        const today = new Date();
        if (evento.inicio < today) {
            throw new Error("The initial date need to be in the future.");
        }
        evento.id = obterId();
        return setEvents(oldList => [...oldList, evento])
    }
}

export default useAddEvent;