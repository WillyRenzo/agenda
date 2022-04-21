import React from "react";
import useListOfEvents from "../../state/hooks/useListOfEventsValue";
import Evento from "../Evento";
import Filtro from "../Filtro";
import style from "./ListaDeEventos.module.scss";

const ListaDeEventos: React.FC = () => {
  const eventos = useListOfEvents();

  return (
    <section>
      <Filtro />
      <div className={style.Scroll}>
        {eventos.map((evento) => (
          <Evento
            evento={evento}
            key={evento.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ListaDeEventos;
