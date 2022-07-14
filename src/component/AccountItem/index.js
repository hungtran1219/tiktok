import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss'

function AccountItem() {
    return (
        <div className={styles.wrapper}>
            <img className={styles.avatar} alt={'images'} src={'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ddcb57a7bcd8bf0fc01c18338b2caf59~c5_300x300.webp?x-expires=1657868400&x-signature=4AmXFMdj8FJpbHeDfUWr85ZtKag%3D'} />
            <div className={styles.info}>
                <h4 className={styles.userName}>
                    Trần Quang Hưng
                    <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
                </h4>
                <span className={styles.subName}>playkill</span>
            </div>
        </div>
    );
}

export default AccountItem;