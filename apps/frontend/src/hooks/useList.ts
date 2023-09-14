import { Commit } from "@frontend/components/data-list/data-list"
import { useQuery } from "@tanstack/react-query"

export function useList(page = 1, limit = 30) {
    const query = useQuery<Commit[]>(['commit'], async () => {
    const response = await fetch(`${import.meta.env.VITE_PUBLIC_NESTJS_SERVER}?page=${page}&limit=${limit}`)
    if (!response.ok) {
      console.log('Network response was not ok')
    }
    return response.json()
  })

  return query
}