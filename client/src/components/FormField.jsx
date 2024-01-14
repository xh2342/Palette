/* eslint-disable react/prop-types */
const FormField = ({
  labelName,
  name,
  type,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center gap-4 justify-between">
        <label htmlFor={name} className="block font-semibold text-xl">
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="border-b bg-[#6469ff] px-2 py-1 text-sm text-white button"
          >
            Surprise Me
          </button>
        )}
      </div>

      <div>
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
          className="px-2 py-1 rounded-md w-full"
        />
      </div>
    </div>
  );
};

export default FormField;
