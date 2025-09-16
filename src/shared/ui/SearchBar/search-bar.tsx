import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useRef,
  useEffect
} from 'react';
import styles from './search-bar.module.css';

import SearchIcon from '../../assets/icons/search.svg';
import ClearIcon from '../../assets/icons/cross.svg';
import { TColors } from '../types';
import { useSearchParams } from 'react-router-dom';

interface SearchBarProps {
  placeholder: string;
  submit: (text: string) => void;
  color?: TColors;
  backgroundColor?: TColors;
  placeholderColor?: TColors;
  size?: 'small' | 'medium' | 'large';
  searchText?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  submit,
  color = 'text',
  backgroundColor = 'input',
  placeholderColor = 'caption',
  size = 'medium',
  searchText = ''
}) => {
  const [text, setText] = useState(searchText);
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.setProperty(
        '--placeholder-color',
        `var(--${placeholderColor})`
      );
    }
  }, [placeholderColor]);

  useEffect(() => {
    setSearchParams({ query: text });
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit(text);
    setSearchParams({ query: text });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    setSearchParams({ query: event.target.value });
  };

  const handleClear = () => {
    setText('');
    setSearchParams({ query: '' });
  };

  return (
    <form
      className={`${styles.searchBarContainer} ${styles[size] || ''}`}
      onSubmit={handleSubmit}
      style={{ backgroundColor: `var(--${backgroundColor})` }}
    >
      <img src={SearchIcon} alt='Поиск' className={styles.searchIcon} />

      <input
        type='text'
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
        className={styles.searchInput}
        style={{ color: `var(--${color})` }}
        ref={inputRef}
        aria-label='Поиск навыков'
      />
      {text && (
        <button
          type='button'
          className={styles.searchButton}
          onClick={handleClear}
        >
          <img src={ClearIcon} alt='Очистить' className={styles.clearIcon} />
        </button>
      )}
    </form>
  );
};

export default SearchBar;
