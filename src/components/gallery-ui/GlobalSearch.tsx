import React, { useState, useEffect, useRef } from "react";
import { Search, X, Image as ImageIcon, FileJson, ArrowRight, ExternalLink, Palette, Shapes, GalleryVerticalEnd } from "lucide-react";

// 类型定义
interface ImageItem {
    id: string;
    title: string;
    authors: string;
    conference: string;
    image: string;
    tags: string[];
}

interface ProjectItem {
    title: string;
    conference: string;
    image: string;
    link: string;
    tags: string[];
    category: 'examples' | 'templates';
}

interface ToolItem {
    name: string;
    link: string;
    image: string;
    category: 'color' | 'icon';
}

interface GlobalSearchProps {
    imageData: ImageItem[];
    projectData: ProjectItem[];
    toolData: ToolItem[];
    base: string;
}

export const GlobalSearch: React.FC<GlobalSearchProps> = ({ imageData, projectData, toolData, base }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            setTimeout(() => inputRef.current?.focus(), 50);
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    // Handle escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const filteredImages = imageData.filter(item =>
        !query ||
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.tags.some(t => t.toLowerCase().includes(query.toLowerCase())) ||
        item.authors?.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);

    const filteredProjects = projectData.filter(item =>
        !query ||
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
    ).slice(0, 5);

    const filteredTools = toolData.filter(item =>
        !query ||
        item.name.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 4);

    // Get category icon for tools
    const getCategoryIcon = (category: 'color' | 'icon') => {
        if (category === 'color') {
            return <Palette className="h-3.5 w-3.5 text-muted-foreground" />;
        }
        return <Shapes className="h-3.5 w-3.5 text-muted-foreground" />;
    };

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="relative hidden md:flex items-center w-full md:w-64 lg:w-80 h-9 px-4 rounded-md border border-input bg-background/50 text-sm text-muted-foreground shadow-sm transition-all hover:bg-background hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
                <Search className="mr-2 h-4 w-4 opacity-50" />
                <span>Search projects, images...</span>
                <kbd className="pointer-events-none absolute right-2 h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 flex">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </button>
            <button
                onClick={() => setIsOpen(true)}
                className="md:hidden flex items-center justify-center h-9 w-9 rounded-md border border-input bg-background/50 text-muted-foreground hover:bg-background hover:text-foreground"
            >
                <Search className="h-4 w-4" />
            </button>

            {/* Modal Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-100 bg-background/80 backdrop-blur-sm animate-in fade-in-0">
                    <div
                        className="fixed inset-0 z-100 flex items-start justify-center pt-16 sm:pt-24 px-4"
                        onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
                    >
                        <div className="w-full max-w-2xl bg-popover border border-border rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                            {/* Search Header */}
                            <div className="flex items-center border-b border-border/50 px-4 py-3">
                                <Search className="mr-3 h-5 w-5 text-muted-foreground/70" />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search by title, author, or tag..."
                                    className="flex-1 bg-transparent text-lg placeholder:text-muted-foreground/50 focus:outline-none"
                                />
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="ml-2 p-1 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>

                            {/* Results Area */}
                            <div className="max-h-[60vh] overflow-y-auto p-2">
                                {/* Images Section - FIRST */}
                                {filteredImages.length > 0 && (
                                    <div className="mb-4">
                                        <h3 className="px-2 py-1.5 text-xs font-semibold text-muted-foreground mb-1">Images</h3>
                                        <div className="space-y-1">
                                            {filteredImages.map((item) => (
                                                <a
                                                    key={`img-${item.id}`}
                                                    href={`${base}/images/${item.id}`}
                                                    className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-accent/50 hover:text-accent-foreground transition-colors cursor-pointer"
                                                >
                                                    <div className="relative h-10 w-16 overflow-hidden rounded border bg-muted shrink-0">
                                                        <img src={item.image} alt="" className="h-full w-full object-cover" />
                                                    </div>
                                                    <div className="flex-1 min-w-0 relative">
                                                        <div className="flex items-start justify-between gap-2">
                                                            <span className="font-medium text-sm leading-tight line-clamp-2 pr-12">
                                                                {item.title}
                                                            </span>
                                                            <span className="absolute right-0 top-0 inline-flex items-center rounded-full border bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground">
                                                                {item.conference}
                                                            </span>
                                                        </div>
                                                        <div className="text-xs text-muted-foreground truncate opacity-70 mt-1">
                                                            {item.authors}
                                                        </div>
                                                    </div>
                                                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-50 transition-opacity" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Projects Section - SECOND */}
                                {filteredProjects.length > 0 && (
                                    <div className="mb-4">
                                        <h3 className="px-2 py-1.5 text-xs font-semibold text-muted-foreground mb-1">Projects</h3>
                                        <div className="space-y-1">
                                            {filteredProjects.map((item, idx) => (
                                                <a
                                                    key={`proj-${idx}`}
                                                    href={item.link.startsWith("http") || item.link.startsWith("#") ? item.link : `${base}${item.link}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-accent/50 hover:text-accent-foreground transition-colors cursor-pointer"
                                                >
                                                    <div className="relative h-10 w-16 overflow-hidden rounded border bg-muted shrink-0">
                                                        <img src={item.image} alt="" className="h-full w-full object-cover" />
                                                    </div>
                                                    <div className="flex-1 min-w-0 relative">
                                                        <div className="flex items-start justify-between gap-2">
                                                            <span className="font-medium text-sm leading-tight line-clamp-2 pr-16">
                                                                {item.title}
                                                            </span>
                                                            <div className="absolute right-0 top-0 flex items-center gap-1.5">
                                                                {item.category === 'templates' && (
                                                                    <FileJson className="h-3.5 w-3.5 text-muted-foreground" />
                                                                )}
                                                                <span className="inline-flex items-center rounded-full border bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground">
                                                                    {item.conference}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="text-xs text-muted-foreground truncate opacity-70 mt-1">
                                                            {item.tags.join(", ")}
                                                        </div>
                                                    </div>
                                                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-50 transition-opacity" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Tools Section - THIRD */}
                                {filteredTools.length > 0 && (
                                    <div className="mb-2">
                                        <h3 className="px-2 py-1.5 text-xs font-semibold text-muted-foreground mb-1">Tools</h3>
                                        <div className="space-y-1">
                                            {filteredTools.map((item, idx) => (
                                                <a
                                                    key={`tool-${idx}`}
                                                    href={item.link.startsWith("http") || item.link.startsWith("#") ? item.link : `${base}${item.link}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-accent/50 hover:text-accent-foreground transition-colors cursor-pointer"
                                                >
                                                    <div className="relative h-10 w-16 overflow-hidden rounded border bg-muted shrink-0">
                                                        <img src={item.image} alt="" className="h-full w-full object-cover" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center justify-between gap-2">
                                                            <span className="font-medium truncate">{item.name}</span>
                                                            <div className="flex items-center gap-1 shrink-0">
                                                                {getCategoryIcon(item.category)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-50 transition-opacity" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {filteredImages.length === 0 && filteredProjects.length === 0 && filteredTools.length === 0 && (
                                    <div className="py-12 text-center text-muted-foreground">
                                        <p>No results found for "{query}"</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
