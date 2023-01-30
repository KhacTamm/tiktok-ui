import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import Styles from './DefaultLayout.module.scss'

import Header from '../components/Header'
import SideBar from '../components/Sidebar'

const cx = classNames.bind(Styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DefaultLayout
