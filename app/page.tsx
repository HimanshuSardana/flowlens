"use client"
import { Snippet } from "@nextui-org/snippet";
import { Button } from '@nextui-org/button'
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from '@/components/About'
import Features from '@/components/Features'
import { redirect } from "next/navigation";
import { siteConfig } from "@/config/site";

export default function Home() {
	return (
		<>
			<div className="mx-auto pt-16 max-w-7xl">
				<Navbar />
				<Hero />
				<About />
				<Features />
			</div>
		</>
	);
}
