import NavbarContainer from "@/contenedores/NavbarContainer";
import LoginContainer from "@/contenedores/LoginContainer";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <NavbarContainer/>
      <LoginContainer />
    </div>
  );
}
