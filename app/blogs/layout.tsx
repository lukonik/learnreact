export default function BlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <article className="prose prose-lg container mx-auto">{children}</article>;
}
