import clsx from "clsx";

export default function InputProfile({
  classNames,
  label,
  type = 'text',
  id,
  placeholder,
  input = 'input',
  name,
}) {
  return (
    <div className={clsx(classNames)}>
      <label
        htmlFor={id}
        className="block text-2xs text-gray-2 font-medium mb-1"
      >
        {label}
      </label>
      {input == "input" && (
        <input
          type={type || "text"}
          id={id}
          placeholder={placeholder}
          name={name}
          className="w-full border border-gray rounded-xl p-4 text-2xs font-medium placeholder-gray-light"
        />
      )}
      {input == "textarea" && (
        <textarea
          id={id}
          placeholder={placeholder}
          name={name}
          className="w-full border border-gray rounded-xl p-4 text-2xs font-medium placeholder-gray-light"
        />
      )}
    </div>
  );
}
