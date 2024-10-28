/* eslint-disable no-empty-pattern */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useImperativeHandle } from "react";
import { utils, writeFileXLSX } from "xlsx";
import { formatTimestamp } from "../libs/firebase";

const SubscriberTable = React.forwardRef(({}, ref) => {
  const [data, setData] = React.useState([]);

  const download = (data) => {
    setData(data);
  };

  useImperativeHandle(ref, () => ({
    download,
  }));

  React.useEffect(() => {
    if (data.length > 0) {
      const wb = utils.table_to_book(fee.current);
      writeFileXLSX(wb, "subscribers.xlsx");
    }
  }, [data]);

  const fee = React.useRef(null);

  return (
    <table ref={fee} className="hidden">
      <thead>
        <tr>
          <th colSpan={5}>Lista de Suscriptores</th>
        </tr>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d) => {
          return (
            <tr key={d.id}>
              <td>{d.name}</td>
              <td>{d.last_name}</td>
              <td>{d.email}</td>
              <td>{d.phone_number}</td>
              <td>{formatTimestamp(d.created_at)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
});

export default SubscriberTable;
