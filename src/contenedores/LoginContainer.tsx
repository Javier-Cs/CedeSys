import LoginForm from "@/componentes/login/LoginForm";
import LoginPromoPanel from "@/componentes/login/LoginPromoPanel"

export default function LoginContainer(){
    return (
        <div className="flex justify-center items-center min-h-[80vh]">
        <div className="flex border border-gray-500 divide-x divide-gray-500">
            <LoginForm />
            <LoginPromoPanel />
        </div>
        </div>
    );
}