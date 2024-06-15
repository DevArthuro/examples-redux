import { useSelector } from "react-redux";
import { selectUsers } from "../store/slices/users";
import { useField } from "formik";

const SelectUserField = ({ name }) => {
  const users = useSelector(selectUsers);
  const [field, ,] = useField(name);

  return (
    <>
      <select
        name={name}
        id={name}
        onChange={field.onChange}
        value={!field.value ? users[0]?.id ?? 0 : field.value}
      >
        {users.map(({ id, name }) => (
          <option value={id} key={id}>
            {name}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectUserField;
