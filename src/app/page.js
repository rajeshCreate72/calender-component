import Image from "next/image";
import Calender from "./Calender/CalenderComponent";

export default function Home() {
    return (
        <div className="flex items-center justify-start min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col items-center justify-center">
                <Calender />
            </main>
        </div>
    );
}
