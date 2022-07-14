import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem';
import Button from '~/component/Button';

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    return (
        <header className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <img src={images.logo} alt='TikTok' />
                </div>
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <div className={styles.searchResults} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={styles.searchTitle}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={styles.search}>
                        <input placeholder='Search accounts and videos' />
                        <button className={styles.clear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={styles.loading} icon={faSpinner} />

                        <button className={styles.searchBtn}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={styles.actions}>
                    <Button text >Upload</Button>
                    <Button primary >Log in</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;