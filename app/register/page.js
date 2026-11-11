import AuthShell from "@/components/AuthShell";
import RegisterForm from "@/components/RegisterForm";

export const metadata = {
  title: "Register",
  description: "Demonstration registration for candidates and employers. No account is created.",
};

function text(value) {
  return typeof value === "string" ? value : "";
}

export default async function RegisterPage({ searchParams }) {
  const params = await searchParams;
  const role = text(params.role) === "employer" ? "employer" : "candidate";

  return (
    <AuthShell
      title="Register"
      aside="Tell us which side of the registry you are on."
      lede="Candidate and employer forms are separate because the next step is different. Neither one creates an account in this prototype."
    >
      <RegisterForm initialRole={role} />
    </AuthShell>
  );
}
