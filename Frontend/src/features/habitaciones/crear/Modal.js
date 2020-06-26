import React from 'react';
import { ModalForm, Body, Header, FooterAcceptCancel, ValidationSummary } from 'components/Modal';
import { Input, NumericInput } from "components/Input";
import { crearHabitacion, cleanErrors, crearHabitacionSelector } from './slice';
import { useDispatch, useSelector } from 'react-redux'

const Crear = ({isVisible, onHide, onSuccessfulSubmit}) => {

  const { loading, validationErrors } = useSelector(crearHabitacionSelector)

  const dispatch = useDispatch();
  const onSubmit = data => dispatch(crearHabitacion(data, onSuccessfulSubmit));  
 
  function hide(){
    onHide();
    dispatch(cleanErrors());
  }

  return (
    <ModalForm
        isVisible={isVisible}
        onHide={hide}
        onSubmit={onSubmit}
    >
      <Header title="Crear habitación" onHide={hide} />
      <Body>
        <ValidationSummary errors={validationErrors} />
        <Input label="Nombre" name="nombre" />
        <NumericInput label="Camas matrimoniales" name="camasMatrimoniales" />
        <NumericInput label="Camas marineras" name="camasMarineras" type="number" />
        <NumericInput label="Camas individuales" name="camasIndividuales" type="number" />
      </Body>
      <FooterAcceptCancel onCancel={hide} loading={loading} />
    </ModalForm> 
  )
}

export default Crear