import PropTypes from 'prop-types'
import config from '~/config'

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import classNames from 'classnames/bind'
import Styles from './AccountItem.module.scss'

import Image from '~/component/Image'

const cx = classNames.bind(Styles)

function AccountItem({ data }) {
    return (
        <Link to={config.routes.profile} className={cx('wrapper')}>
            {/* <img src={require('~/assets/images/W1.jpg')} alt="avatar" className={cx('avatar')}></img> */}
            <Image className={cx('avatar')} src={data.avatar} alt="avatar" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('checkicon')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    )
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default AccountItem
