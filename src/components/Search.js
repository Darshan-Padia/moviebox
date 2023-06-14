import styles from './style.module.css';
import { useState } from "react";
const Search = () => {

    const [searchValue, setSearchValue] = useState('');
    const updateSearch = (e) => {
        setSearchValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchValue);
    }
    return (
        <div className="search">
            <form>
                <input  onChange={updateSearch} value={searchValue} type="text" placeholder="Search" />
                <button className={styles.srchBtn} onSubmit={handleSubmit} type="submit" > search</button>
            </form>
        </div>
    )
}

export default Search;