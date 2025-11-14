export default function BlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="lg:w-3xl mx-auto">
        <article className="prose prose-lg py-10  max-w-none  bg-white h-screen">
          {children}
        </article>
      </div>
    </main>
  );
}
