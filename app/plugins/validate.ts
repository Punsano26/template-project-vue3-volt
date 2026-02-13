export type ValidationError = string | null

export type ValidatorFn<TValues extends Record<string, any> = Record<string, any>> = (
  value: any,
  values?: TValues
) => ValidationError

export type ValidationRules<TValues extends Record<string, any>> = Partial<
  Record<keyof TValues, ValidatorFn<TValues> | ValidatorFn<TValues>[]>
>

const isEmpty = (value: any) => {
  if (value === null || value === undefined) return true
  if (typeof value === 'string') return value.trim().length === 0
  if (Array.isArray(value)) return value.length === 0
  return false
}

const required = (label?: string, message?: string): ValidatorFn => {
  return (value) => {
    if (!isEmpty(value)) return null
    if (message) return message
    return label ? `กรุณากรอก ${label}` : 'กรุณากรอกข้อมูล'
  }
}

const requiredSelect = (label?: string, message?: string): ValidatorFn => {
  return (value) => {
    if (!isEmpty(value)) return null
    if (message) return message
    return label ? `กรุณาเลือก ${label}` : 'กรุณาเลือกข้อมูล'
  }
}

const minLength = (min: number, label?: string, message?: string): ValidatorFn => {
  return (value) => {
    if (isEmpty(value)) return null
    const stringValue = String(value)
    if (stringValue.length >= min) return null
    if (message) return message
    return label
      ? `${label} ต้องมีอย่างน้อย ${min} ตัวอักษร`
      : `ต้องมีอย่างน้อย ${min} ตัวอักษร`
  }
}

const validate = <TValues extends Record<string, any>>(
  values: TValues,
  rules: ValidationRules<TValues>
) => {
  const errors: Partial<Record<keyof TValues, string>> = {}

  for (const key in rules) {
    const fieldRules = rules[key]
    if (!fieldRules) continue

    const validators = Array.isArray(fieldRules) ? fieldRules : [fieldRules]

    for (const validator of validators) {
      const error = validator(values[key], values)
      if (error) {
        errors[key] = error
        break
      }
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  }
}

export type ValidatePlugin = {
  isEmpty: typeof isEmpty
  required: typeof required
  requiredSelect: typeof requiredSelect
  minLength: typeof minLength
  validate: typeof validate
}

export default defineNuxtPlugin(() => {
  const validateApi: ValidatePlugin = {
    isEmpty,
    required,
    requiredSelect,
    minLength,
    validate
  }

  return {
    provide: {
      validate: validateApi
    }
  }
})
