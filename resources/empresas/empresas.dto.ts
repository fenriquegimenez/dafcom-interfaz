import Joi from 'joi'
import { TEmpresa } from '../../types/types'

export function createEmpresaDto(payload: TEmpresa) {
  const schema = Joi.object({
    razonSocial: Joi.string().required(),
    ruc: Joi.string().required(),
    sector: Joi.string().required(),
  })

  if (!payload) {
    return {
      isValid: false,
      error: 'Payload must be sent in the request body',
    }
  }
  const { error } = schema.validate(payload)
  return {
    isValid: error == null,
    error: error?.message,
  }
}
