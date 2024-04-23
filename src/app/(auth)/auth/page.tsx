import { redirect } from "next/navigation"

function page() {
  return redirect('/auth/signin')
}

export default page