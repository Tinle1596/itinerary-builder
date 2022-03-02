import { defineStore } from 'pinia'
import {getFirestore, collection, getDocs, query, orderBy} from 'firebase/firestore'

export const useItineraryStore = defineStore("Itinerary", {
    state: () => ({
        session: []
    }),
    getters: {

    },
    actions: {
        async getEvent() {
            const results = []
            const db = getFirestore()
            const q = query(collection(db, 'session'))
            try{
                const snap = await getDocs(q);
                snap.forEach((doc) => {
                    results.push({id: doc.id, ...doc.data()});
                })                
                this.session = results.sort((a,b) => (parseFloat(a.id) - parseFloat(b.id)))
                console.log(results)
            } catch (e) {
                alert(e.message)
            }
        }
    }
})