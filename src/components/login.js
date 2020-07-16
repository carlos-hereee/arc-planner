import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Loader, Icon } from "semantic-ui-react";

import { AuthContext } from "../utils/context/Auth/AuthState";
import { validateUsername, validatePassword } from "../utils/validateAuth";

import styles from "../stylesheets/App.module.scss";

export default function LogIn({ history }) {
	const { isLoading, signIn } = useContext(AuthContext);
	const [canSeePassword, setCanSeePassword] = useState(false);
	const token = localStorage.getItem("accessToken");

	useEffect(() => {
		if (token) {
			history.push("/user");
		}
	}, []);

	return (
		<div className={styles.wrapper}>
			<h1>Login</h1>
			<Formik
				initialValues={{ username: "", password: "" }}
				onSubmit={(values, actions) => {
					signIn(values);
					actions.resetForm();
				}}
			>
				{({ errors, touched, validateForm }) => (
					<Form className={styles.form}>
						{errors.username && touched.username && (
							<div className={styles.validate}>
								{errors.username}
							</div>
						)}
						<label>Username </label>
						<Field
							type="text"
							name="username"
							validate={validateUsername}
						/>
						{errors.password && touched.password && (
							<div className={styles.validate}>
								{errors.password}
							</div>
						)}
						<label>Password </label>
						<div className={styles.password}>
							<Field
								type={canSeePassword ? "text" : "password"}
								name="password"
								validate={validatePassword}
							/>
							<Icon
								size="big"
								className={styles.icon}
								name={canSeePassword ? "eye slash" : "eye"}
								onClick={() =>
									setCanSeePassword(!canSeePassword)
								}
							/>
						</div>
						<button type="submit" onClick={() => validateForm()}>
							{!isLoading ? "Sign In" : <Loader />}
						</button>
					</Form>
				)}
			</Formik>
			<Link to="/register">Dont have an account?</Link>
		</div>
	);
}
