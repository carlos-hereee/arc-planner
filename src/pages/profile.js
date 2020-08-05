import React from "react";
import { Link } from "react-router-dom";

import ProfileImg from "../components/profile/profileimg";
import ProfileTroops from "../components/profile/profileTroops";

import styles from "../stylesheets/profile.module.scss";

export default function Profile() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<h1>Governor Profile</h1>
			</div>
			<div className={styles.profile}>
				<div className={styles.banner}>
					<ProfileImg />
				</div>
				<div className={styles.content}>
					<ProfileTroops />
				</div>
			</div>
			<div className={styles.buttons}>
				<div className={styles.btns}>
					<Link to="/user">Governor</Link>
					<Link to="/alliance">Alliance</Link>
				</div>
			</div>
		</div>
	);
}
