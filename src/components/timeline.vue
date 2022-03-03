<template>
  <div>
    <v-container>
       <v-timeline align-top dense>        
           <v-timeline-item v-for="session in event" v-bind:key="session.timestamp" dense :ref="'time-' + session.timeStamp">
             <span v-if="session.date">
               <v-chip large color="primary">
                  {{session.date}}
               </v-chip>
             </span>
             <v-row>
               <v-col>
                 <strong>{{session.startTime}} <span v-if="session.endTime">- {{session.endTime}}</span></strong>                 
               </v-col>
             </v-row>
             <div >
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
              </div>
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
      currentTime: ''
  }),

  computed: {
    ...mapState(useItineraryStore, ['event']),

  },

  methods: {
    jumpTo(refName){      

      let closestTime = null;      
      this.event.forEach(x => {        
        if(closestTime == null){
          if(Date.parse(x.timeStamp.toUpperCase()) >= Date.parse(this.currentTime.toUpperCase())){
            closestTime = x.timeStamp
          }
        }
      });

    console.log(refName)
    console.log(closestTime)
     let element =  this.$refs['time-'+ closestTime]
     console.log(element)
     if(element){
        let offsetTop = element[0].$el.offsetTop;
        window.scrollTo({top: offsetTop, behavior:'smooth'});
     }
    }
  },

  created(){
      this.currentTime = new Date().toLocaleString('en-US', { month: "numeric", day:"numeric", year:"numeric", hour12: true, hour:"numeric", minute:"numeric"}).toLowerCase();      
  },

  updated(){      
      this.jumpTo(this.currentTime)
  }
};
</script>

<style scoped>

</style>