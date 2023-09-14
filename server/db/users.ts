import db from './index'

export async function getUser(id: string) {
  const doc = await db.collection('users').doc(id).get()
  return doc.data()
}

export async function addUser(user: object) {
  const docRef = await db.collection('users').add(user)
  return docRef
}

export async function getUserSkillset(id: string) {
  const doc = await db.collection('users').doc(id).collection('user_skillset').get()
  return doc
}

export async function addUserSkillset(skillset: object, id: string) {
  await db.collection('users').doc(id).collection('user_skillset').add(skillset)
}

export async function updateUserSkillSet(skillset: object, id: string) {
  await db.collection('users').doc(id).collection('user_skillset').update(skillset)
}