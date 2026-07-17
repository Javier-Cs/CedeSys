import { useState } from "react";
import { Mail, Lock } from "lucide-react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({
      email,
      password,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-neutral-900 text-white px-12 py-8 flex flex-col justify-center"
    >
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Bienvenido</h1>

        <p className="text-neutral-100 mt-2">
          Inicia sesión para acceder al sistema.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="text-sm text-neutral-300 mb-2 block">
            Correo electrónico
          </label>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
            />

            <input
              type="email"
              placeholder="usuario@empresa.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-neutral-800 border border-neutral-700 py-3 pl-12 pr-4 outline-none transition-all"/>
          </div>
        </div>

        <div>
          <label className="text-sm text-neutral-300 mb-2 block">
            Contraseña
          </label>

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
            />

            <input
              type="password"
              placeholder="••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl bg-neutral-800 border border-neutral-700 py-3 pl-12 pr-4 outline-none transition-all"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-emerald-600 dark:bg-slate-700/90 hover:bg-slate-500 py-3 font-bold">
          Ingresar
        </button>
      </div>
    </form>
  );
}
