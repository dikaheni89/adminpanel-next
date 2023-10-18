import { redirect } from 'next/navigation'
import { getServerSession } from "next-auth";

export default function Home() {

  return redirect('/auth/login')
}
