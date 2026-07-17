import { ArrowRight, Globe } from "lucide-react";
import {PAGINA_WEB} from "@/constante/linkExternos";

export default function LoginPromoPanel() {
  return (
    <div
      className="
      bg-gradient-to-br
      bg-emerald-600
      dark:bg-slate-900/90
      text-white
      px-12
      py-14
      flex
      flex-col
      justify-center
      "
    >

      <div className="relative z-10">

        <span className="inline-flex rounded-full bg-white/20 px-4 py-1 text-sm">
          PAGE WEB
        </span>

        <h2 className="mt-6 text-4xl font-bold leading-tight">
          Visita nuestra web
        </h2>

        <p className="mt-6 text-white leading-7">
          conoce nuestros productos, horarios y servicios 
        </p>

        <a href={PAGINA_WEB} target="blank">
          <button
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-emerald-700 transition-all hover:scale-105">       
            <Globe size={18} />
              Visitar Web
            <ArrowRight size={18} />
          </button>
        </a>

      </div>

    </div>
  );
}