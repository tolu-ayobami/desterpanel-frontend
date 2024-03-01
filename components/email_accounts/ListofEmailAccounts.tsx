import EmailAccount from "./EmailAccount";

const ListofEmailAccounts = () => {
	return (
		<div>
			{/* table */}
			<div className="">
				{/* header */}
				<div className="hidden lg:flex md:border-t-2 md:border-b-2 border-black pb-3 lg:ps-[40px] p-3">
					<div className="flex gap-1 items-center text-[13px] lg:me-[75px]">
						<span className="text-light-blue">Account</span>@
						<span className="text-light-blue">Domain</span>
					</div>

					<div className="flex text-[13px]">
						<div className="lg:me-[70px]">
							<span className="text-light-blue">Restrictions</span>
						</div>

						<div className="flex gap-1 items-center">
							Storage:
							<span className="text-light-blue">Used</span>/
							<span className="text-light-blue">Allocated</span>/
							<span className="text-light-blue">%</span>
						</div>
					</div>

					<div className=""></div>
				</div>

				{/* table-body */}
				<EmailAccount />
				<EmailAccount />
				<EmailAccount />
				<EmailAccount />
			</div>
		</div>
	);
};

export default ListofEmailAccounts;
