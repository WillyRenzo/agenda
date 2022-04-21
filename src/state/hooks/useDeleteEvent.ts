import { IEvento } from "../../interfaces/IEvento";
import useSetListOfEvents from "./useSetListOfEvents";

const useDeleteEvent = () => {
    const setEvents = useSetListOfEvents();

    return (event: IEvento) => {

        setEvents(oldEvents => [
            ...oldEvents.filter(evt => event.id !== evt.id)
        ])
    };

}

export default useDeleteEvent;