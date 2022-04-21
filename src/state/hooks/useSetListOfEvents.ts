import { useSetRecoilState } from 'recoil';
import { IEvento } from '../../interfaces/IEvento';
import { listOfEventsState } from '../atom';

const useSetListOfEvents = () => {
    return useSetRecoilState<IEvento[]>(listOfEventsState);
}

export default useSetListOfEvents;