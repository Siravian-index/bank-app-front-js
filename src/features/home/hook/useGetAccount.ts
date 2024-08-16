import { useQuery } from '@tanstack/react-query'
import { getAccount } from '../api/getAccount'


export function useGetAccount() {
  return useQuery({ queryKey: ["getAccount"], queryFn: getAccount })
}