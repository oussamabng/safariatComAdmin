import React, { useState } from "react";

import ToggleContext from "./ToggleContexte.js";
import HeaderAdmin from "../../components/HomeHeader/HeaderAdmin";
import AsideAdmin from "../../components/aside/asideAdmin.jsx";
import "./admin.css";

const Admin = props => {
	const [toggle, setToggle] = useState(false);
	const [show, setShow] = useState(false);

	const handleToggleClick = () => {
		setToggle(!toggle);
	};
	const handleAsideToggled = () => {
		setToggle(!toggle);
		setShow(!show);
	};

	const contexteValue = {
		toggled: toggle
	};
	return (
		<ToggleContext.Provider value={contexteValue}>
			<HeaderAdmin
				clickToggle={() => {
					handleToggleClick();
				}}
				show={show}
			/>
			<AsideAdmin
				toggle={toggle}
				clickToggle={() => {
					handleToggleClick();
				}}
				active={props.active}
			/>
			<div
				className={toggle ? "padleft" : "padleft-sm"}
				onClick={() => {
					document.getElementsByClassName(
						"notification-box mx-6"
					)[0].style.display = "none";
				}}
			>
				{props.content}
			</div>
		</ToggleContext.Provider>
	);
};

export default Admin;
