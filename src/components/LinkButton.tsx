import Link from "next/link";

interface LinkButtonProps {
    to: string;
    text: string;
    className: string;
}

export default function LinkButton({to, text, className}: LinkButtonProps) {
    return (
        <Link href={to} className={className}>
            {text}
        </Link>
    )
}