import HeaderInfo from "@/utils/HeaderInfoH";
import ThemeToggle from "@/utils/ThemeToggle";

export default function NavbarContainer(){

    return(
        <nav className="flex items-center justify-between w-full px-6 py-2 bg-cyan-100 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-700 shadow-sm">
            {/* Logo */}
            <div className="flex items-center gap-3">
                <img src="/favicon.svg" alt="Logo" className="h-10 w-auto" />
                {/* Fecha y hora */}
                <div className="hidden md:block">
                    <HeaderInfo/>
                </div>
                
            </div>

            {/* Usuario + Tema */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                <img
                    src="/avatar.png"
                    alt="Usuario"
                    className="h-10 w-10 rounded-full border border-slate-600"
                />
                <span className="text-sm text-slate-200">Jhordi</span>
                </div>
                <ThemeToggle />
            </div>
        </nav>
       
        
    );


}