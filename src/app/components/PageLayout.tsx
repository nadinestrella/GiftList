export function PageLayout({
  content,
  sidebar,
  navigation,
}: {
  content: JSX.Element;
  sidebar: JSX.Element;
  navigation: JSX.Element;
}) {
  return (
    <main className="md:flex md:flex-row">
      <div className="hidden md:inline min-w-40 ml-14 mt-11">{sidebar}</div>
      <div className="md:flex md:flex-col">
        <div className="md:ml-14 lg:ml-24">{content}</div>
        <div>{navigation}</div>
      </div>
    </main>
  );
}
