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
  const doc = await db.collection('users').doc(id).get()
  return doc.user_skillset
}

export async function addUserSkillset(skillset: string[], id: string) {
  await db.collection('users').doc(id).update({user_skillset: skillset})
}