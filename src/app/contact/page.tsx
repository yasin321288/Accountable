export default function ContactPage() {
  return (
    <div className="container">
      <div className="py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="text-4xl font-bold font-headline tracking-tight text-foreground sm:text-5xl"
            aria-label="Get in Touch with Accountable"
          >
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Have questions or want to learn more? We&apos;d love to hear from you.
            While this is a demo application, we appreciate your interest. You
            can typically find our contact information here, but for now, feel
            free to explore the rest of the site.
          </p>
          
          <div className="mt-10">
            <p
              className="text-base font-semibold text-foreground"
              aria-label="Contact email label"
            >
              Email us at
            </p>
            <a
              href="mailto:hello@accountable.dev"
              className="text-lg text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Email us at hello@accountable.dev"
            >
              hello@accountable.dev
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}