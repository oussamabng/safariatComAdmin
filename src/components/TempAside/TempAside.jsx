import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TempAside.css";
import Hr from "./images/business-and-finance.png";
import Finance from "./images/compass.png";
import Crm from "./images/crm.png";
import TravelM from "./images/plus.png";
import Analytics from "./images/report.png";
import Person from "../../assets/person_girl.jpg";
const TempAside = (
	{
		items = [
			{
				title: "Analytics and Statistics",
				href: "/admin/tours",
				isClicked: false,
				icon: Analytics,
				options: ["test"]
			},
			{
				title: "HR management",
				href: "#",
				isClicked: false,
				icon: Hr,
				options: ["test"]
			},
			{
				title: "Travel & product management",
				href: "#",
				isClicked: false,
				icon: TravelM,
				options: ["test"]
			},
			{
				title: "Travel and product CRM",
				href: "#",
				isClicked: false,
				icon: Crm,
				options: ["test"]
			},
			{
				title: "Finance management",
				href: "#",
				isClicked: false,
				icon: Finance,
				options: ["test"]
			}
		]
	},
	props
) => {
	const [activeItem, setActiveItem] = useState("Analytics and Statistics");
	const [isToggled, setIsToggled] = useState(props.toggle);
	const [itemClicked, setItemClicked] = useState("");
	console.log("tbadl toggle hh");
	const handleActiveItem = e => {
		if (e.currentTarget.id !== activeItem && isToggled)
			setActiveItem(e.currentTarget.id);
		if (!isToggled && itemClicked === e.currentTarget.id) setItemClicked("");
		else if (!isToggled) setItemClicked(e.currentTarget.id);
	};
	const handleToggled = () => {
		setIsToggled(!isToggled);
	};
	const handleActiveFromDown = newActive => {
		if (newActive !== activeItem) setActiveItem(newActive);
	};
	return (
		<>
			{/*
			<div className="flex justify-start items-center bg-purple-600 w-full h-24">
				<p className="agency_toggle cursor-pointer" onClick={handleToggled}>
					<span>Toggle navigation</span>
				</p>
			</div>
      */}
			<aside
				style={{
					backgroundColor: "#084C61",
					zIndex: 40
				}}
				className={
					isToggled
						? "agency_aside toggled flex flex-col justify-between h-full"
						: "agency_aside flex flex-col justify-between  h-full"
				}
			>
				<div className="flex justify-center h-16 items-center py-6">
					<span>
						<img
							className="rounded-full"
							src={Person}
							alt="person"
							style={{ width: "50px", height: "50px" }}
						/>
					</span>
					<div
						className={
							isToggled
								? "flex flex-col agency_profile_sidebar toggled ml-2"
								: "flex flex-col agency_profile_sidebar ml-2"
						}
					>
						<span>Oussama Bengoudifa</span>
						<span>CEO of travel agency</span>
					</div>
				</div>
				<ul>
					{items.map(item => (
						<li
							key={item.title}
							id={item.title}
							className={
								isToggled
									? activeItem === item.title
										? "flex justify-center activeItem items-center"
										: "flex justify-center items-center ml-1"
									: "flex flex-col justify-center"
							}
							onClick={handleActiveItem}
						>
							<Link
								className={
									isToggled
										? activeItem === item.title
											? "flex justify-center items-center"
											: "flex justify-center items-center "
										: activeItem === item.title
										? "flex justify-start items-center activeItem"
										: "flex items-center justify-start ml-2"
								}
								to={!isToggled ? "#" : item.href}
							>
								<span>
									<img src={item.icon} alt="icon" />
								</span>
								<p
									className={
										isToggled
											? "agency_profile_sidebar ml-1 toggled"
											: "agency_profile_sidebar flex justify-center items-center ml-1"
									}
								>
									{item.title}
								</p>
							</Link>
							<ul
								className={
									itemClicked === item.title
										? "flex flex-col h-auto items-center"
										: "h-0"
								}
							>
								{item.options.map(opt => (
									<li
										key={opt + "545421"}
										className={
											itemClicked === item.title ? "inline-block" : "hidden"
										}
										onClick={() => handleActiveFromDown(item.title)}
									>
										<Link className="ml-2" to="#">
											{opt}
										</Link>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
				<div className="flex justify-center items-center mx-4 border-top pt-6">
					<span>icon</span>
					<p
						className={
							isToggled
								? "agency_profile_sidebar toggled"
								: "agency_profile_sidebar ml-1"
						}
					>
						Logout
					</p>
				</div>
			</aside>
		</>
	);
};

export default TempAside;
