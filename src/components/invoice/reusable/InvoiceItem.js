import React from "react";
import { Button, Table } from "react-bootstrap";
import { BiTrash } from "react-icons/bi";
import EditableField from "./EditableField";

export default function InvoiceItem(props) {
  var itemTable = props.items.map((item) => (
    <ItemRow
      onIteamizedEdit={props.onIteamizedEdit}
      item={item}
      onDelEvent={props.onRowDel}
      key={item.id}
      currency={props.currency}
    />
  ));
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Iteam</th>
            <th>Quantity</th>
            <th>Price/Rate</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>{itemTable}</tbody>
      </Table>
      <Button className="fw-bold">Add Item</Button>
    </div>
  );
}

function ItemRow(props) {
  const onDelEvent = () => {
    props.onDelEvent(props.item);
  };
  return (
    <tr>
      <td style={{ width: "100%" }}>
        <EditableField
          onIteamizedEdit={props.onIteamizedEdit}
          cellData={{
            type: "text",
            name: "name",
            placeholder: "Item Name",
            value: props.item.name,
            id: props.item.id,
          }}
        />
        <EditableField
          onIteamizedEdit={props.onIteamizedEdit}
          cellData={{
            type: "text",
            name: "description",
            placeholder: "Item Description",
            value: props.item.description,
            id: props.item.id,
          }}
        />
      </td>
      <td style={{ minWidth: "70px" }}>
        <EditableField
          onIteamizedEdit={props.onIteamizedEdit}
          cellData={{
            type: "number",
            name: "quantity",
            min: 1,
            step: "1",
            value: props.item.quantity,
            id: props.item.id,
          }}
        />
      </td>
      <td style={{ minWidth: "130px" }}>
        <EditableField
          onIteamizedEdit={props.onIteamizedEdit}
          cellData={{
            leading: props.currency,
            type: "number",
            name: "price",
            min: 1,
            step: "0.01",
            textAlign: "text-end",
            value: props.item.price,
            id: props.item.id,
          }}
        />
      </td>
      <td className="text-center" style={{ minWidth: 50 }}>
        <BiTrash
          onClick={onDelEvent}
          style={{ height: "33px", width: "33px", padding: "7.5px" }}
          className="text-white mt-1 btn btn-danger"
        />
      </td>
    </tr>
  );
}
