import React from "react";
import { Newspaper, Github, Globe, Quote, Download } from "lucide-react";
import { toast } from "sonner";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../ui/tooltip";

interface ImageActionsProps {
    paperLink?: string | null;
    githubLink?: string | null;
    projectpageLink?: string | null;
    cite?: string;
    imgSrc: string;
    title: string;
}

export const ImageActions: React.FC<ImageActionsProps> = ({
    paperLink,
    githubLink,
    projectpageLink,
    cite,
    imgSrc,
    title,
}) => {
    const handleCopy = (text: string, type: "Cite" | "Link") => {
        navigator.clipboard.writeText(text).then(() => {
            toast.success(`${type} copied to clipboard`, {
                className: "!bg-background !text-foreground !border !border-border",
                description: "You can now paste it into your document.",
            });
        });
    };

    const handleDownload = async () => {
        try {
            const response = await fetch(imgSrc);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = title || "image";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
            toast.success("Download started", {
                className: "!bg-background !text-foreground !border !border-border",
            });
        } catch (e) {
            // Fallback for cross-origin or simple images
            const link = document.createElement("a");
            link.href = imgSrc;
            link.download = title || "image";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    const iconBtnClass =
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 shadow-sm transition-all hover:scale-110 cursor-pointer";

    const ActionButton = ({
        icon: Icon,
        label,
        onClick,
        href,
    }: {
        icon: any;
        label: string;
        onClick?: () => void;
        href?: string;
    }) => {
        const content = (
            <button className={iconBtnClass} onClick={onClick}>
                <Icon className="h-4 w-4" />
            </button>
        );

        return (
            <TooltipProvider delayDuration={100}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        {href ? (
                            <a href={href} target="_blank" rel="noopener noreferrer">
                                {content}
                            </a>
                        ) : (
                            content
                        )}
                    </TooltipTrigger>
                    <TooltipContent side="right">
                        <p>{label}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        );
    };

    return (
        <aside className="items-center flex flex-col space-y-4">
            {paperLink && (
                <ActionButton icon={Newspaper} label="Read Paper" href={paperLink} />
            )}
            {projectpageLink && (
                <ActionButton
                    icon={Globe}
                    label="Project Page"
                    href={projectpageLink}
                />
            )}
            {githubLink && (
                <ActionButton icon={Github} label="View Code" href={githubLink} />
            )}
            {cite && (
                <ActionButton
                    icon={Quote}
                    label="Copy BibTeX"
                    onClick={() => handleCopy(cite, "Cite")}
                />
            )}
            {/* <ActionButton
                icon={Download}
                label="Download Image"
                onClick={handleDownload}
            /> */}
        </aside>
    );
};
