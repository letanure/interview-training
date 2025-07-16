import { AppSidebar } from "@/components/AppSidebar/AppSidebar";
import { Header } from "@/components/Layout/Header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<Header />
				{children}
			</SidebarInset>
		</SidebarProvider>
	);
}
