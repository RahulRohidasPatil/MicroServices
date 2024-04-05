export default function DropdownContainer({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="relative">
            {children}
        </div>
    )
}