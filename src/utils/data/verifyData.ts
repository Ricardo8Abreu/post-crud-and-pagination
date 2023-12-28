
// revisa si hay elementos dentro de un arreglo
// si hay retorna true
// si no hay retorna false

type ValidData = any[] | string

export type VerifyDataValidation = boolean | null

const verifyData = (data: ValidData) => {
    try {
        const quantity = data.length
        const value = quantity > 0

        return {
            value,
            status: true,
            quantity,
            message: 'Ok'
        }
    } catch (error) {
        const message = (error as Error).message
        console.log('🚀 ~ file: verifyData.ts:20 ~ verifyData ~ message:', message)
        return {
            value: null,
            status: false,
            quantity: null,
            message
        }
    }
}

export default verifyData
