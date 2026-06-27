interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "date";
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  textarea?: boolean;
  selectOptions?: string[];
}

export function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  required,
  textarea,
  selectOptions,
}: FormFieldProps) {
  const errorId = `${name}-error`;
  const fieldClasses =
    "w-full rounded-lg border border-line bg-paper px-4 py-3 text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none";

  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required ? (
          <span aria-hidden="true" className="text-accent-ink">
            {" "}
            *
          </span>
        ) : null}
      </label>

      {selectOptions ? (
        <select
          id={name}
          name={name}
          value={value}
          required={required}
          aria-required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          onChange={(event) => onChange(event.target.value)}
          className={fieldClasses}
        >
          <option value="">Select an option</option>
          {selectOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          required={required}
          aria-required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          onChange={(event) => onChange(event.target.value)}
          rows={4}
          className={fieldClasses}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          required={required}
          aria-required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          onChange={(event) => onChange(event.target.value)}
          className={fieldClasses}
        />
      )}

      {error ? (
        <p id={errorId} role="alert" className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
