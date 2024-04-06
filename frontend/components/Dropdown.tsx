export default function Dropdown({ name, email, children }: Readonly<{ name: string, email: string, children: React.ReactNode; }>) {
    return (
        <div className="absolute top-12 right-0 p-1 text-end bg-black border">
            <div className="flex space-x-1">
                <strong>Name:</strong>
                <span>{name}</span>
            </div>
            <div className="flex space-x-1">
                <strong>Email:</strong>
                <span>{email}</span>
            </div>
            {children}
        </div>
    )
}