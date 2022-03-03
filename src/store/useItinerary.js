import { defineStore } from 'pinia'
import {getFirestore, collection, getDocs, query, orderBy} from 'firebase/firestore'

export const useItineraryStore = defineStore("Itinerary", {
    state: () => ({
        event: []
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
                //sort by id
                this.event = results.sort((a,b) => (parseFloat(a.id) - parseFloat(b.id)))
                
                let date = null
                //create timestamp for href
                this.event = this.event.map(x=> {
                    if(x.hasOwnProperty('date')){
                        date = x.date
                    }
                    if (x.hasOwnProperty('endTime')){
                        x.timeStamp = date + ', ' + x.endTime
                    } else {
                        x.timeStamp = date + ', ' + x.startTime
                    }
                    return x;
                })                

            } catch (e) {
                alert(e.message)
            }
        }
    }
})