import { useRecoilValue } from 'recoil';
import { IEvento } from '../../interfaces/IEvento';
import { eventosFiltradosState } from '../seletores';

const useListOfEvents = () => {
    return useRecoilValue<IEvento[]>(eventosFiltradosState);
}

export default useListOfEvents;