import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Login:", { email, password });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-8 w-80 bg-black dark:bg-emerald-600
dark:text-white text-white"
    >
      <h2 className="text-xl font-semibold text-center">Iniciar sesión</h2>

      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-transparent border border-white px-3 py-2 rounded focus:ring-2 focus:ring-white"
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="bg-transparent border border-white px-3 py-2 rounded focus:ring-2 focus:ring-white"
      />

      <button
        type="submit"
        className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors"
      >
        Ingresar
      </button>
    </form>
  );
}
