import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex gap-3">
        <h1 className="text-4xl font-bold">Chat with any PDF</h1>
        <UserButton />
      </div>
      <div className="flex">
         <Button>Start a Chat</Button>
      </div>

      <p className="max-w-xl mt-2 text-sm">
        Join millions of students, researchers, and professionals who use PaperBot to chat with any PDF.
      </p>

      <div className="w-full mt-4">
        
      </div>
    </main>
  );
}
