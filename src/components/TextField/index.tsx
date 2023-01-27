import "./style.css";

type TextFieldProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

function TextField(props: TextFieldProps) {
  const { onChange, placeholder } = props;
  return (
    <input
      placeholder={placeholder}
      className="styled-input"
      type="text"
      onChange={onChange}
    />
  );
}

export default TextField;
