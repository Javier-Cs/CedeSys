import NavbarContainer from "@/contenedores/NavbarContainer";
import LoginContainer from "@/contenedores/LoginContainer";

export default function LoginPage() {
  return (
    <div className="min-h-screen dark:bg-black bg-white dark:text-white text-white relative">
      <NavbarContainer/>
      <LoginContainer />
    </div>
  );
}
