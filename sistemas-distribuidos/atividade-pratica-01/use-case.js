export function sendUserData(request, reply){
  validatePayload(request.body)
  const username = request.body.username
  const password = request.body.password
  return {
    username,
    password
  }
}

function validatePayload(payload){
  throwErrorIfEmptyData(payload.username)
  throwErrorIfEmptyData(payload.password)
}

function throwErrorIfEmptyData(data){
  if(!data){
    throw Error("Invalid payload! Username and password are expected.")
  }
}