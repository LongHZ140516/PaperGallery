import { toast } from "sonner"
import { useEffect } from "react"

export function ToastListener() {
    useEffect(() => {
        const handleToast = (event: Event) => {
            const customEvent = event as CustomEvent;
            const { message, type, className } = customEvent.detail;

            const toastOptions = {
                className: className || "",
                duration: 2000,
            };

            if (type === "success") {
                toast.success(message, toastOptions);
            } else if (type === "error") {
                toast.error(message, toastOptions);
            } else if (type === "info") {
                toast.info(message, toastOptions);
            } else if (type === "warning") {
                toast.warning(message, toastOptions);
            } else {
                toast(message, toastOptions);
            }
        };

        window.addEventListener("astro-toast", handleToast);
        return () => window.removeEventListener("astro-toast", handleToast);
    }, []);

    return null;
}