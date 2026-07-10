import HeaderInfo from "@/utils/HeaderInfoH";
import ThemeToggle from "@/utils/ThemeToggle";
import LoginContainer from "@/contenedores/LoginContainer";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <HeaderInfo />
      <ThemeToggle className="absolute top-4 right-4" />
      <LoginContainer />
    </div>
  );
}
