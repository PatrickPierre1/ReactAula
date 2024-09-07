import { jwtDecode } from "jwt-decode"

export const verificaTokenExpirado = (token?: string) => {
    if (token) {
        let decodedToken = jwtDecode(token);

        if (!decodedToken.exp || decodedToken.exp < new Date().getTime() / 1000) {
            // Retorna true se o token estiver expirado
            return true
        }
        // Retorna false se o token não estiver expirado
        return false
    }
}