import type { Portfolio } from "@/lib/types";

const PORTFOLIO_DATA: Portfolio = {
	name: "Olivia Ishisaki Magliocco",
	headline: "Aspiring Innovator | Full-Stack Developer | AI Enthusiast",
	bio: "A second-year undergraduate student studying Mathematics. Looking to combine creativity with analytical thinking to explore how technology can make community engagement more accessible. Seeking opportunities to expand technical skills.",

	// Your contact email
	email: "oliviacim324@gmail.com",

	// Add your links here
	// Supported icons: 'GitHub', 'LinkedIn', 'Twitter', 'Blog'
	links: [
		{ name: "GitHub", url: "https://github.com/olivia-im" },
		{ name: "LinkedIn", url: "https://www.linkedin.com/in/olivia-ishisaki-magliocco-17a337395" },
		{ name: "Twitter", url: "https" },
		// { name: "Blog", url: "https://yourblog.com" },
	],

	// Add your skills here
	skills: [
		"Figma", "TypeScript", "React", "Next.js", "Node.js",
		"Python", "Go", "Tailwind CSS", "Firebase", "AWS", "Docker", "Kubernetes"
	],

	// Add your projects here
	projects: [
		{
			title: "Project 'Synergy'",
			description: "A decentralized, AI-powered platform to streamline cross-functional team collaboration using a novel blockchain consensus algorithm. Built with a microservices architecture.",
			stack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Vercel"],
			githubLink: "",
			liveLink: "",
		},
		{
			title: "VibeCheck",
			description: "A mobile-first social app that uses sentiment analysis to curate positive news feeds. Leveraged serverless functions for infinite scalability and low-cost operation.",
			stack: ["React Native", "Firebase", "Google Cloud Functions", "NLP.js"],
			githubLink: "",
			liveLink: "",
		},
		{
			title: "AlgoVisualizer",
			description: "A web-based tool for visualizing complex data structures and algorithms, built to help students (like me) understand core CS concepts in an interactive way.",
			stack: ["TypeScript", "React", "D3.js"],
			githubLink: "",
			liveLink: "",
		},
	],

	// Add your experience here
	experience: [
		{
			role: "Product Manager Intern",
			company: "Recruit Co., Ltd.",
			date: "Summer 2026",
			location: "Tokyo, Japan",
			description: "Led a 3-person team to expand Recruit’s automotive platform, Carsensor, beyond its current target audience. Conducted 10 user interviews in Japanese and mapped customer journeys to identify and prioritize key user needs. Developed and prototyped a product using Figma and Claude Code to address pain points for first-time used-car buyers."
		},
		{
			role: "Operations Lead & Outreach",
			company: "Bruin Software Engineers (BSE)",
			date: "Feb 2026 - Present",
			location: "UCLA",
			description: "Co-directed the UI/UX Product Design Fellowship, developing a 4-week curriculum and project structure for participants. Managed logistics of 4 club events ( ~20 attendees each), coordinating vendor outreach, venue research, and event planning."
		},
		{
			role: "Product Development Director",
			company: "Project Lux",
			date: "Sep 2026 - Present",
			location: "UCLA",
			description: "Maintaining and improving Project Lux’s website and Retool interface while coordinating with Beacon and other departments to address technology needs. Training volunteers and chapter leaders to effectively use relevant platforms."
		}
	],

	// Add any education or awards
	education: [
		{
			degree: "B.S. in Applied Mathematics",
			institution: "[UCLA]",
			date: "Expected June 2029",
			note: "Minor in [e.g., Business, Data Science]"
		},
		{
			degree: "Best 'Vibe' Hack",
			institution: "[Some Hackathon]",
			date: "Fall 202X",
			note: "Awarded for the project with the slickest UI and best pitch."
		}
	]
};

export default PORTFOLIO_DATA;