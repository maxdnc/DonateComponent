import styles from './InputPrimary.module.scss';

interface inputPrimaryType {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label: string;
  placeholder: string;
}

export default function InputPrimary({
  onChange,
  id,
  label,
  placeholder,
}: inputPrimaryType) {
  return (
    <div className={styles.container}>
      <label htmlFor={id} hidden>
        {label}
      </label>
      <span style={{ fontWeight: 'bold', fontSize: 'larger' }}>£</span>
      <input type="number" placeholder={placeholder} onChange={onChange} />
    </div>
  );
}
