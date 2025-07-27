export default function ContactPage() {
    return (
      <div className="container">
        <div className="py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold font-headline tracking-tight text-foreground sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Have questions or want to learn more? We'd love to hear from you. While this is a demo application, we appreciate your interest. You can typically find our contact information here, but for now, feel free to explore the rest of the site.
            </p>
            <div className="mt-10">
              <p className="text-base font-semibold text-foreground">
                  Email us at
              </p>
              <p className="text-lg text-primary">
                  hello@accountable.dev
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  