import React, { useState, useEffect } from "react";
import Person from "../../assets/person_girl.jpg";
import axios from "axios";
import { ReactComponent as Mail } from "../GeneralAnalyDashbord/images/envelope.svg";
import { ReactComponent as Dots } from "../GeneralAnalyDashbord/images/ellipsis.svg";
const CardActifUser = () => {
	const [data_active_users, setActiveUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		axios
			.get(" http://localhost:3000/top_active_users")
			.then(res => {
				setActiveUsers(res.data);
				setIsLoading(true);
			})
			.catch(err => {
				setIsLoading(false);
				alert("fetching data error .. try refreshing the page");
			});
	}, []);
	return (
		<div className="p-5 pt-2 pb-2 bg-white">
			{data_active_users.map(user => (
				<div className="py-2">
					<div
						style={{
							backgroundColor: "#f3f3f3"
						}}
						className=" flex flex-row flex-row justify-between items-center p-3"
					>
						<div className="flex lD:flex-row mD:flex-col sD:flex-row lD:py-2 mD:py-0 justify-start lD:items-center mD:items-center sD:items-center xsD:items-center">
							<div className="pr-2">
								<img
									className="lD:h-16 lD:w-16 mD:w-12 mD:h-12 sD:w-16 sD:h-16 xsD:w-16 xsD:h-16 rounded-full "
									src={Person}
									alt="img"
								/>
							</div>
							<div className="flex flex-col justify-start ">
								<h1 className="lD:text-18 mD:text-16 sD:text-18 xsD:text-18">
									{user["name"]}
								</h1>
								<p className="text-gray-600 lD:text-16 mD:text-14 sD:text-16 xsD:text-16">
									{user["type"]} user
								</p>
							</div>
						</div>
						<div className="agency_contact_user flex flex-row justify-start items-center">
							<a href="#">
								<Mail
									className="px-2 w-10 h-10 responsive-icons"
									fill="#707070"
								/>
							</a>
							<a href="#">
								<Dots
									className="px-2 w-10 h-10 responsive-icons"
									fill="#707070"
								/>
							</a>{" "}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
export default CardActifUser;
