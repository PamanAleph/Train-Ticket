export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
     <div className="scroll-smooth">
        <div className="bg-[#FBFBFB]">{children}</div>
     </div>
  );
}
