export function PageLayout({
  content,
  sidebar,
}: {
  content: JSX.Element;
  sidebar: JSX.Element;
}) {
  return (
    <main className="md:flex md:flex-row">
      <div className="hidden md:inline min-w-40 ml-14 my-11">{sidebar}</div>
      <div className="md:flex md:flex-col">
        <div className="md:ml-9 lg:ml-24">{content}</div>
      </div>
    </main>
  );
}
