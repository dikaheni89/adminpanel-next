import { ModelToggle } from "@/components/button-toggle";
import { MainNav } from "@/app/dashboard/components/main-nav";
import { Metadata } from "next";
import { Search } from "@/app/dashboard/components/search";
import { UserNav } from "@/app/dashboard/components/user-nav";
import { Sidebar } from "./components/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Overview } from "@/app/dashboard/components/overview";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Dashboard",
}

export default function DashboardPage() {
    return (
        <>
            <div className={"md:hidden"}>
            </div>
            <div className={"hidden flex-col md:flex"}>
                <div className={"border-b"}>
                    <div className={"flex h-16 items-center px-4"}>
                        <ModelToggle />
                        <MainNav className={"mx-6"} />
                        <div className={"ml-auto flex items-center space-x-4"}>
                            <Search />
                            <UserNav />
                        </div>
                    </div>
                    <div className={"border-t"}>
                        <div className={"bg-background"}>
                            <div className={"grid lg:grid-cols-5"}>
                                <Sidebar className={"hidden lg:block"} />
                                <div className={"col-span-3 lg:col-span-4 lg:border-l"}>
                                    <div className={"h-full px-2 py-6 lg:px-6"}>
                                        <Tabs defaultValue={"home"} className={"h-full space-y-6"}>
                                            <div className={"space-between flex items-center"}>
                                                <TabsList>
                                                    <TabsTrigger value={"home"} className={"relative"}>
                                                        Home
                                                    </TabsTrigger>
                                                    <TabsTrigger value={"analisis"} className={"relative"}>
                                                        Analitics
                                                    </TabsTrigger>
                                                </TabsList>
                                            </div>
                                            <TabsContent value={"home"} className={"border-none p-0 outline-none"}>
                                                <div className={"flex items-center justify-between"}>
                                                    <div className={"space-y-1"}>
                                                        <h2 className={"text-2xl font-semibold tracking-tight mb-2"}>
                                                            Dashboard
                                                        </h2>
                                                        <div className={"grid gap-12 md:grid-cols-2 lg:grid-cols-4 pb-2"}>
                                                            <Card>
                                                                <CardHeader className={"flex flex-row items-center justify-between space-y-0 pb-2"}>
                                                                    <CardTitle className={"text-sm font-medium"}>
                                                                        Total Revenue
                                                                    </CardTitle>
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth="2"
                                                                        className="h-4 w-4 text-muted-foreground"
                                                                        >
                                                                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                                                    </svg>
                                                                </CardHeader>
                                                                <CardContent>
                                                                    <div className={"text-2xl font-bold"}>
                                                                        Rp. 45.000.000
                                                                    </div>
                                                                    <p className={"text-xs text-muted-foreground"}>
                                                                        +20.1% from last month
                                                                    </p>
                                                                </CardContent>
                                                            </Card>
                                                            <Card>
                                                                <CardHeader className={"flex flex-row items-center justify-between space-y-0 pb-2"}>
                                                                    <CardTitle className={"text-sm font-medium"}>
                                                                        Total Revenue
                                                                    </CardTitle>
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth="2"
                                                                        className="h-4 w-4 text-muted-foreground"
                                                                        >
                                                                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                                                    </svg>
                                                                </CardHeader>
                                                                <CardContent>
                                                                    <div className={"text-2xl font-bold"}>
                                                                        Rp. 45.000.000
                                                                    </div>
                                                                    <p className={"text-xs text-muted-foreground"}>
                                                                        +20.1% from last month
                                                                    </p>
                                                                </CardContent>
                                                            </Card>
                                                            <Card>
                                                                <CardHeader className={"flex flex-row items-center justify-between space-y-0 pb-2"}>
                                                                    <CardTitle className={"text-sm font-medium"}>
                                                                        Total Revenue
                                                                    </CardTitle>
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth="2"
                                                                        className="h-4 w-4 text-muted-foreground"
                                                                        >
                                                                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                                                    </svg>
                                                                </CardHeader>
                                                                <CardContent>
                                                                    <div className={"text-2xl font-bold"}>
                                                                        Rp. 45.000.000
                                                                    </div>
                                                                    <p className={"text-xs text-muted-foreground"}>
                                                                        +20.1% from last month
                                                                    </p>
                                                                </CardContent>
                                                            </Card>
                                                            <Card>
                                                                <CardHeader className={"flex flex-row items-center justify-between space-y-0 pb-2"}>
                                                                    <CardTitle className={"text-sm font-medium"}>
                                                                        Total Revenue
                                                                    </CardTitle>
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth="2"
                                                                        className="h-4 w-4 text-muted-foreground"
                                                                        >
                                                                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                                                    </svg>
                                                                </CardHeader>
                                                                <CardContent>
                                                                    <div className={"text-2xl font-bold"}>
                                                                        Rp. 45.000.000
                                                                    </div>
                                                                    <p className={"text-xs text-muted-foreground"}>
                                                                        +20.1% from last month
                                                                    </p>
                                                                </CardContent>
                                                            </Card>
                                                        </div>
                                                        <Card className={"col-span-4"}>
                                                            <CardHeader>
                                                                <CardTitle>Overview</CardTitle>
                                                            </CardHeader>
                                                            <CardContent className={"pl-2"}>
                                                                <Overview />
                                                            </CardContent>
                                                        </Card>
                                                    </div>
                                                </div>
                                            </TabsContent>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}