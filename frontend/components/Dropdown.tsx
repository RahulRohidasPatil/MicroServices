export default function Dropdown({ name, email, children }: Readonly<{ name: string, email: string, children: React.ReactNode; }>) {
    return (
        <div className="flex flex-col absolute bg-white text-black w-max right-0 top-20 p-1">
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