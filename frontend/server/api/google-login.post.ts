import { OAuth2Client } from 'google-auth-library'

// Get runtime config variables
const config = useRuntimeConfig()

//Create Google Client
const googleClientId = config.clientId
const client = new OAuth2Client()

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const token = body.token

    if (!token) {
        throw createError ({
            statusCode: 400,
            statusMessage: 'No token or invalid token provided'
        })
    }

    return verify(token).catch(console.error)
})

/**
 *
 * @desc Verifies JSON Web Token and returns user data if token is valid
 * @param token JSON Web Token from Google
 */
async function verify(token: string) {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: googleClientId,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    })
    return ticket.getPayload()
  // const userid = payload['sub']
  // If request specified a G Suite domain:
  // const domain = payload['hd'];
}