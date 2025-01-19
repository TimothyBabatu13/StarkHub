import UseChat from "@/hooks/use-chat";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        <UseChat>
            {children}
        </UseChat>
    </main>
  );
}
