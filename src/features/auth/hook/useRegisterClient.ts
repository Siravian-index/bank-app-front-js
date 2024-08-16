import { useMutation } from '@tanstack/react-query'
import { registerClient } from '../api/registerClient'


export function useRegisterClient() {
  return useMutation({ mutationFn: registerClient })
}

