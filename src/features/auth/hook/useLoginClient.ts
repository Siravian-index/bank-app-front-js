import { useMutation } from '@tanstack/react-query'
import { loginClient } from '../api/loginClient'


export function useLoginClient() {
  return useMutation({ mutationFn: loginClient })
}

