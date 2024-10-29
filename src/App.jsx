import { Route, Routes } from "react-router-dom";
import Admin from "./components/layouts/admin";
import ContactPage from "./components/pages/contact/contact-page";
import DonateBloodPage from "./components/pages/donate-blood/donate-blood-page";
import HomePage from "./components/pages/home/home-page";
import HostBloodDrivePage from "./components/pages/host-blood-drive/host-blood-drive";
import NeedBloodPage from "./components/pages/need-blood/need-blood-page";

import AdminDonateBlood from "../src/components/views/admin/admin-donate-blood";
import AdminHostBloodDrive from "../src/components/views/admin/admin-host-blood-drive";
import AdminNeedBlood from "../src/components/views/admin/admin-need-blood";
import AdminNeedHelp from "../src/components/views/admin/admin-need-help";
import Dashboard from "../src/components/views/admin/dashboard";

export default function App() {
	return (
		<>
			{/* <HeaderComponent /> */}
			{/* <BrowserRouter> */}
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route
					path="/host-blood-drive"
					element={<HostBloodDrivePage />}
				/>
				<Route path="/donate-blood" element={<DonateBloodPage />} />
				<Route path="/need-blood" element={<NeedBloodPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/admin" element={<Admin />}>
					<Route index element={<Dashboard />} />
					<Route path="donate-blood" element={<AdminDonateBlood />} />
					<Route path="need-blood" element={<AdminNeedBlood />} />
					<Route
						path="host-blood-drive"
						element={<AdminHostBloodDrive />}
					/>
					<Route path="need-help" element={<AdminNeedHelp />} />
					{/* <Route path="/redirect" element={<Navigate to="/" />} /> */}
				</Route>
			</Routes>
			{/* </BrowserRouter> */}
			{/* <BeforeFooterCTA />
			<FooterComponent /> */}
		</>
	);
}
