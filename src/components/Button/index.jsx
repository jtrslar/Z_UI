import styles from './index.less'

export default function Button(props) {
	const { val, ...other } = props
	return (
		<div className={styles.z_ui_button} {...other}>
			<p className={styles.z_ui_btn_text}>{val}</p>
		</div>
	)
}
