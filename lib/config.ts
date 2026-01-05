import type { Portfolio } from "@/lib/types";

const PORTFOLIO_DATA: Portfolio = {
	name: "Olivia Ishisaki Magliocco",
	headline: "Aspiring Innovator | Full-Stack Developer | AI Enthusiast",
	bio: "A first-year undergraduate student studying Applied Mathematics at UCLA with a growing interest in software development. Looking to combine creativity with analytical thinking to explore how technology can make community engagement more accessible. Seeking opportunities to expand technical skills.",

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
		"JavaScript", "TypeScript", "React", "Next.js", "Node.js",
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
			role: "Software Engineer Intern (Incoming)",
			company: "Big Tech Co / FAANG",
			date: "Summer 202X",
			location: "Menlo Park, CA (Remote)",
			description: "Selected for a highly competitive internship program. Will be joining the [Cloud/AI/Growth] team to work on high-impact, customer-facing features."
		},
		{
			role: "Club President / Co-Founder",
			company: "[Your Vibe-Coding Club Name]",
			date: "Aug 202X - Present",
			location: "[Your University]",
			description: "Grew the organization from 5 to 200+ members by fostering a culture of innovation and 'vibecoding.' Organized tech talks with industry leaders from Google, Meta, and hot startups."
		},
		{
			role: "Teaching Assistant - Intro to CS",
			company: "[Your University]",
			date: "Jan 202X - May 202X",
			location: "[Your University]",
			description: "Mentored 50+ students, held office hours, and graded assignments for foundational computer science concepts. Received a 95% positive feedback rating from students."
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