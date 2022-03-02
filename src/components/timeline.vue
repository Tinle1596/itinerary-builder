<template>
  <div>
    <v-container> 
       <v-timeline align-top dense>
           <v-timeline-item v-for="(session, index) in sessions" v-bind:key="index" dense>
             <v-row>
               <v-col>
                 <strong>{{session.time}}</strong>
               </v-col>
             </v-row>
               <v-card dense rounded>
                   <v-card-title>
                       {{session.title}}
                   </v-card-title>
                   <v-card-text>
                     <v-list v-for="(item, index) in session.description" v-bind:key="index">                       
                       <v-icon small>
                         mdi-cross
                       </v-icon>
                       <v-banner rounded>
                         {{item.item}}
                       </v-banner>                       
                     </v-list>                     
                   </v-card-text>
                   <v-card-text></v-card-text>
               </v-card>
           </v-timeline-item>
        </v-timeline> 
    </v-container>
  </div>
</template>

<script>
import {useItineraryStore} from "../store/useItinerary"
import {mapActions, mapGetters} from "pinia"

export default {
  name: "timeline",
  setup() {
    const itineraryStore = useItineraryStore();
    itineraryStore.getEvent()

    return {}
  },

  data: () => ({
      sessions: [
          {id: 0, date: "03/01/2022", time: '7:00 AM', title: "Prep", description: [
            {item: "this is a description"}
          ] },
          {id: 1, date: "03/01/2022", time: '11:00 AM', title: "Check-in", description:[
            {item: "this is a description"}
            ] },
          {id: 2, date: "03/01/2022", time: '11:45 - 12:00 AM', title: "Opening", description: [
            {item: "Chao Co - Uniform Required"}
            ]},
          {id: 3, date: "03/01/2022", time: '12:00 - 12:30 AM', title: "Lunch!", description: [
            {item: "Take this time to change into more comfortable clothing."}
            ]},
          {id: 4, date: "03/01/2022", time: '12:45 - 1:45 AM', title: "Session 1", description: [
            {item: "TN (grade 4-6) - Tr Nha"},
            {item: "NS (grade 7-8) - Sr Kim"},
            {item: "NS (grade 9) & HS & HSTT & HT - Fr Marion"}
            ]}
          ]
  }),

  computed: {
    ...mapGetters(useItineraryStore, [])
  },    
};
</script>

<style>
</style>