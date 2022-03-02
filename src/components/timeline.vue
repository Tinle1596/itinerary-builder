<template>
  <div>
    <v-container>      
       <v-timeline align-top dense>        
           <v-timeline-item v-for="(session, index) in event" v-bind:key="index" dense>
             <span v-if="session.date">
               <v-chip large color="primary">
                  {{session.date}}
               </v-chip>
             </span>
             <v-row>
               <v-col>
                 <strong class="session-time">{{session.time}}</strong>
               </v-col>
             </v-row>
               <v-card dense rounded>
                   <v-card-title>
                     <b>
                       {{session.title}}
                     </b>
                   </v-card-title>
                   <v-card-text>
                     <v-list v-for="(item, index) in session.details" v-bind:key="index" dense>                       
                       <v-icon small>
                         mdi-cross
                       </v-icon>
                       <v-banner rounded dense>
                         {{item}}
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
import {mapState} from "pinia"

export default {
  name: "timeline",
  setup() {
    const itineraryStore = useItineraryStore();
    itineraryStore.getEvent()

    return {}
  },

  data: () => ({
      sessions: [],      
  }),

  computed: {
    ...mapState(useItineraryStore, ['event'])
  },    
};
</script>

<style scoped>
.session-time{
  color: white;
}
</style>