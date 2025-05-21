import { Home } from "@/templates/home";

export default async function HomePage() {
  await new Promise(ok => setTimeout(ok, 4000))
  return <Home />
}
