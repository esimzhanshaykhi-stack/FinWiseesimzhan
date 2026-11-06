import { useSyncExternalStore } from 'react';

const USERS_KEY = 'finwise_demo_users_v1';
const SESSION_KEY = 'finwise_demo_session_v1';
const listeners = new Set();
let session = null;

function storage() {
  return typeof window !== 'undefined' ? window.localStorage : null;
}
function readUsers() {
  try { return JSON.parse(storage()?.getItem(USERS_KEY) || '{}'); } catch { return {}; }
}
function notify() { listeners.forEach((fn) => fn()); }
function setSession(next) {
  session = next;
  if (next) storage()?.setItem(SESSION_KEY, JSON.stringify(next));
  else storage()?.removeItem(SESSION_KEY);
  notify();
}
export function registerDemo({ name, email, password }) {
  const key = email.trim().toLowerCase();
  if (!name.trim() || !key || !password) return { error: 'Fill in all fields' };
  const users = readUsers();
  if (users[key]) return { error: 'This email is already registered' };
  users[key] = { name: name.trim(), email: key, password };
  storage()?.setItem(USERS_KEY, JSON.stringify(users));
  setSession({ name: name.trim(), email: key });
  return { ok: true };
}
export function loginDemo(email, password) {
  const key = email.trim().toLowerCase();
  const user = readUsers()[key];
  if (!user || user.password !== password) return { error: 'Incorrect email or password' };
  setSession({ name: user.name, email: user.email });
  return { ok: true };
}
export function logoutDemo() { setSession(null); }
export function getDemoUser() {
  if (session) return session;
  try { session = JSON.parse(storage()?.getItem(SESSION_KEY) || 'null'); } catch { session = null; }
  return session;
}
export function useDemoUser() {
  return useSyncExternalStore((fn) => { listeners.add(fn); return () => listeners.delete(fn); }, getDemoUser, () => null);
}