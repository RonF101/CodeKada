import { initializeApp } from "firebase/app"
import


import {db} from './config' ;
import {
    collection,
    deleteDoc,
    getDoc,
    setDoc,
    addDoc,
    DocumentData
}from 'firebase/firestore'

export async function addDocument (
    collectionName: string,
    data: object,
    docId?: string
); Promise <string>
    if (docId) {
        await setDoc(DevBundlerService,)
    }