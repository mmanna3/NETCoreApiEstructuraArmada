import { CamaDTO } from './habitacion';
import { DatosMinimosDeHuespedDTO } from './huesped';

export interface ReservasDelPeriodoDTO {
  desde: string;
  hasta: string;
  reservas: ReservaResumenDTO[];
}

export enum ReservaEstadoEnum {
  CheckinPendiente = 1,
  InHouse = 2,
  HizoCheckout = 3,
}
export interface ReservaResumenDTO {
  id: number;
  nombreAbreviadoDelHuesped: string;
  diaDeCheckin: string;
  diaDeCheckout: string;
  camasIds: number[];
  estado: ReservaEstadoEnum;
}

export interface ReservaDTO {
  id: number;
  estado: ReservaEstadoEnum;
  datosMinimosDeHuesped: DatosMinimosDeHuespedDTO;
  diaDeCheckin: string;
  diaDeCheckout: string;
  camasIds: number[];
  CamasDeHabitacionesPrivadasIds: number[];
}

export interface CheckoutsDeHoyDTO {
  id: number;
  aNombreDe: string;
}

export interface IHabitacionParaReservaDTO {
  id: number;
  nombre: string;
  esPrivada: boolean;
  camas: CamaDTO[];
  cantidadDeLugaresLibres: number;
}

export interface IHabitacionParaTablaReservas {
  id: number;
  nombre: string;
  esPrivada: boolean;
  camas: CamaDTO[];
}
