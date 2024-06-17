import Image from "next/image";
import { navItems } from "@/Data";
import Hero from "@/Components/Hero";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import Grid from "@/Components/Grid";
import { FaHome } from "react-icons/fa";
import RecentProjects from "@/Components/RecentProjects"

export default function Home() {
	return (
		<main
			className="relative bg-black-100 flex justify-center items-center 
			flex-col overflow-hidden mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full">
				<FloatingNav
					navItems={navItems}/>
				<Hero />
				<Grid />
				<RecentProjects/>
			</div>
		</main>
	);
}
