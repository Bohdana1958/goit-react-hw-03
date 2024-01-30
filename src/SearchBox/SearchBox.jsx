import css from './SearchBox.module.css';

export const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.wrapper}>
      <label className={css.label}>Find contacts by name:</label>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={evt => {
          onChange(evt.target.value);
        }}
      />
    </div>
  );
};
