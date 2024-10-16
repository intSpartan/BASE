

export default function Header() {
    return (
        <header className="bg-white">
            <nav className="mx-auto flex items-center justify-between gap-x-6 px-6 py-3 lg:px-12" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">InterviewBuddy</span>
                        <img className="h-20 w-auto" src="/logo.webp" alt="" />
                    </a>
                </div>
            </nav>
        </header>
    )
}
