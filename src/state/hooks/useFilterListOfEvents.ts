import { useRecoilState } from 'recoil';
import { IFiltroDeEvento } from '../../interfaces/IFiltroDeEvento';
import { filtroDeEventos } from '../atom';

const useFilterListOfEvents = () => {
    return useRecoilState<IFiltroDeEvento>(filtroDeEventos);
}

export default useFilterListOfEvents;