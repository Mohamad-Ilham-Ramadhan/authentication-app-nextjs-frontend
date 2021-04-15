import clsx from 'clsx';

export default function InputIcon({Icon, type, name, placeholder, classNames}) {
  return (
    <div className={clsx("relative", classNames)}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="p-3 pl-12 border border-gray-light rounded-md w-full"
      />
      <Icon className="absolute top-1/2 transform -translate-y-1/2 translate-x-3 text-gray w-7" />
    </div>
  );
}
