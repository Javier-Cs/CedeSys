import LoginForm from "@/componentes/login/LoginForm";
import LoginPromoPanel from "@/componentes/login/LoginPromoPanel";

export default function LoginContainer() {
  return (
    <div className="to-black flex items-center justify-center px-6 min-h-[80vh]">
      <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 shadow-2xl">
        <div className="grid md:grid-cols-2">
          <LoginForm />
          <LoginPromoPanel />
        </div>
      </div>
    </div>
  );
}