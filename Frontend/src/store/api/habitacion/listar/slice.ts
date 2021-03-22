import { HabitacionDTO } from 'interfaces/habitacion';
import { generarSlice } from 'store/api/generadorDeSlice';
import { IGetRequestSlice } from 'store/api/requestsInterfaces';

const a: IGetRequestSlice = {
  nombreDelSlice: 'habitaciones',
  endpoint: '/habitaciones',
};

export const { selector, reducer, invocarHttpGet } = generarSlice<HabitacionDTO[]>(a);
