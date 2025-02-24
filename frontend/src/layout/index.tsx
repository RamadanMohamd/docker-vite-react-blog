import { ReactNode } from "react";
import { Header, Footer } from "../components";

export const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-full bg-secondary">
            <div className="container">
                <Header />
                    <main className="min-h-[calc(100vh-160px)]">
                        {children}
                    </main>
                <Footer />
            </div>
        </div>
    );
}