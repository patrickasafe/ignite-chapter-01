import styles from './style.module.css'

type ImgHTMLProps = React.ImgHTMLAttributes<HTMLImageElement>

interface AvatarProps extends ImgHTMLProps {
  hasBorder?: boolean;
}

export const Avatar = ({hasBorder = true, ...rest}: AvatarProps) => {
  return(
    <img
    className={hasBorder? styles.avatarWithBorder : styles.avatar}
    {...rest}
  />
  )
}