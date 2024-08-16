import { useQuery } from '@tanstack/react-query'
import { getTransactions } from '../api/getTransactions'

export function useGetTransactions() {
  return useQuery({ queryKey: ["getTransactions"], queryFn: getTransactions })
}