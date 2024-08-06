import { PropsItem } from "./interfaces_types";

const ItemList = (props: PropsItem) => {
  return (
    <>
      <p>{props.title}</p>
    </>
  );
};

export default ItemList;
