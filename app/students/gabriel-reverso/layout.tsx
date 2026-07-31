import type { Metadata } from "next";

interface LayoutProps {
	children: React.ReactNode;
}

/**
 * Metadados da página.
 *
 * Como esta landing page não possui conteúdo dinâmico,
 * os metadados podem ser definidos estaticamente.
 */
export const metadata: Metadata = {
	title: "DevPilot AI",
	description:
		"DevPilot AI - Your AI Software Engineer. Build software faster with an intelligent assistant that helps throughout the entire software development lifecycle.",
};

/**
 * Layout da landing page.
 *
 * Responsável apenas por envolver o conteúdo da página.
 * Toda a estilização principal fica no próprio page.tsx.
 */
export default function Layout({ children }: Readonly<LayoutProps>) {
	return children;
}