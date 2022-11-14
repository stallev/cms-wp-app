import cx from 'classnames';

import styles from './styles/_container.module.scss';

const Container = ({
  children,
  isWide,
  isMainContent
}) => {
  return (
    <div className={cx(
      styles.container,
      {
        [styles['container--wide']]: isWide,
        [styles['container--main-content']]: isMainContent
      }
    )}>
      {children}
    </div>
  )
}

export default Container;
