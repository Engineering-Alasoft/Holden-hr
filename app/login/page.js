import AuthShell from "@/components/AuthShell";
import LoginForm from "@/components/LoginForm";

export const metadata = {
  title: "Login",
  description: "Demonstration login for the Halden prototype. No account is checked.",
};

export default function LoginPage() {
  return (
    <AuthShell
      title="Login"
      aside="A registry for people and the companies that hire them."
      lede="Use any well-formed details. The form is checked here and then stops. No password is sent anywhere."
    >
      <LoginForm />
    </AuthShell>
  );
}
