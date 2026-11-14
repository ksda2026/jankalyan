import { Container } from "@/components/layout/container";
import { placeholderText } from "@/config/pages";

// Body for pages whose content has not been provided yet.
export function PagePlaceholder({ title }: { title: string }) {
  return (
    <section className="bg-background py-16 md:py-20 lg:py-24">
      <Container>
        <div className="flex min-h-64 items-center justify-center rounded-[28px] border-2 border-dashed border-primary/15 bg-background-secondary px-6 py-16 text-center">
          <p className="text-lg font-semibold text-muted-foreground">{placeholderText(title)}</p>
        </div>
      </Container>
    </section>
  );
}
