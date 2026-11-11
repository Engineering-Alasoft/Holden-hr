import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import UploadForm from "@/components/UploadForm";

export const metadata = {
  title: "Upload Your CV",
  description: "Demonstration CV upload. The file stays in your browser.",
};

export default function UploadPage() {
  return (
    <>
      <PageHeader eyebrow="Candidates" title="Upload Your CV">
        Choose a file and tell us how a profile should be listed. This screen checks the form and does not store the file.
      </PageHeader>
      <section className="bg-canvas py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <UploadForm />
          </div>
        </Container>
      </section>
    </>
  );
}
