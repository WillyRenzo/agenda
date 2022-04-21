import React from 'react';
import { IEvento } from '../../../interfaces/IEvento';
import useUpdateEvent from '../../../state/hooks/useUpdateEvent';

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {

  const updateEvent = useUpdateEvent();

  const updateState = () => {
    const eventoAlterado = {
      ...evento
    }
    eventoAlterado.completo = !eventoAlterado.completo
    updateEvent(eventoAlterado);
  }


  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]

  return (<i className={estilos.join(' ')} onClick={updateState}></i>)
}

export default EventoCheckbox