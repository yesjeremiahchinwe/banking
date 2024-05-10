import Image from "next/image";

export default function HomeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex min-h-scrren w-full justify-between font-inter">
          {children}

          <div className="auth-asset">
            <div>
              <Image src="/icons/auth-image.svg" alt="Image" width={500} height={500} />
            </div>
          </div>
      </main>
    );
  }
  