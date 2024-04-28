import { redirect } from 'next/navigation'
import React from 'react'

function page() {
  return redirect("available-seat/[slug]")
}

export default page