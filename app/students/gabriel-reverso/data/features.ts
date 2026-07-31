import {
    Bug,
    FileCode2,
    GitPullRequest,
    LayoutDashboard,
    ScrollText,
    TestTube2,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface Feature {
    title: string;
    description: string;
    icon: LucideIcon;
}

export const FEATURES: Feature[] = [
    {
        title: "Pull Request Review",
        description:
            "Receive intelligent reviews with actionable suggestions before merging.",
        icon: GitPullRequest,
    },
    {
        title: "Explain Code",
        description:
            "Understand unfamiliar or legacy code with AI-generated explanations.",
        icon: FileCode2,
    },
    {
        title: "Generate Documentation",
        description:
            "Automatically create clear documentation from your codebase.",
        icon: ScrollText,
    },
    {
        title: "Fix Bugs",
        description:
            "Detect common issues and receive suggestions to resolve them.",
        icon: Bug,
    },
    {
        title: "Architecture",
        description:
            "Improve your project's structure following software engineering best practices.",
        icon: LayoutDashboard,
    },
    {
        title: "Generate Tests",
        description:
            "Generate unit and integration tests in just a few seconds.",
        icon: TestTube2,
    },
];